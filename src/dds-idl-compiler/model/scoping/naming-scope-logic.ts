/**
 * @brief Contains the definition of the `NamingScopeLogic` class.
 * @author Rolando J. Nieves
 * @date 2024-10-28 09:28:05
 */

import { Identifier } from "../core";
import { isNamingScope, NamingScope } from "./naming-scope";
import { ScopeMember } from "./scope-member";
import { ScopedName } from "./scoped-name";


export class NamingScopeLogic {
  public readonly members: ScopeMember[];
  public readonly guests: ScopeMember[];

  public constructor() {
    this.members = [];
    this.guests = [];
  }

  public addMember(candidate: ScopeMember): void {
    let memberIdx = this.members.findIndex((aMember: ScopeMember) => aMember.name.matches(candidate.name));
    let guestIdx = this.guests.findIndex((aGuest: ScopeMember) => aGuest.name.matches(candidate.name));
    if (memberIdx != -1) {
      let msg = `Symbol with name "${candidate.name.value}" already defined in current scope.`;
      throw new Error(msg);
    }
    if (guestIdx != -1) {
      let msg = `Symbol with name "${candidate.name.value}" already introduced in current scope.`;
      throw new Error(msg);
    }
    this.members.push(candidate);
  }

  public findMember(name: Identifier): ScopeMember | undefined {
    return this.members.find(((aMember: ScopeMember) => aMember.name.matches(name)));
  }

  public introduceGuest(candidate: ScopeMember): void {
    // Attempting to "introduce" the root scope?
    if (candidate.name.matches(Identifier.ROOT)) {
      // If so, just silently ignore.
      return;
    }
    let memberIdx = this.members.findIndex((aMember: ScopeMember) => aMember.name.matches(candidate.name));
    if (memberIdx !== -1) {
      // Attempting to "introduce" one of our own members?
      if (candidate === this.members[memberIdx]) {
        // If so, just silently ignore.
        return;
      }
      // Otherwise, flag the symbol collision.
      let msg = `Symbol with name "${candidate.name.value}" already defined in current scope.`;
      throw new Error(msg);
    }
    let guestIdx = this.guests.findIndex((aGuest: ScopeMember) => aGuest.name.matches(candidate.name));
    if ((guestIdx !== -1) && (candidate !== this.guests[guestIdx])) {
      let msg = `Different guest symbol with name "${candidate.name.value}" already introduced in current scope.`;
      throw new Error(msg);
    } else if (guestIdx === -1) {
      this.guests.push(candidate);
    }
  }
  
  public search(term: ScopedName, from: NamingScope): boolean {
    // Starting from the specified naming scope, identify all naming scope
    // candidates that will participate in the initial upward search. The
    // candidates are all parent naming scopes of the specified starting
    // naming scope. The candidates will be sorted from the lowest level to
    // the top, thereby giving the naming scopes sitting lower in the
    // hierarchy precedence over those higher up.
    let upwardSearchCandidates: NamingScope[] = [from];
    let currentNs: NamingScope | null = from.owningScope;
    while (currentNs != null) {
      upwardSearchCandidates.push(currentNs);
      currentNs = currentNs.owningScope;
    }

    // For each selected naming scope, in the order identified, attempt to
    // find the first element in the scoped name provided as input. The search
    // will identify either the naming scope itself, or any of its immediate
    // scope members.
    for (let aScope of upwardSearchCandidates) {
      if (aScope.name.matches(term.parts[0].name)) {
        term.parts[0].entity = aScope;
        break;
      }
      let upSearchResult = aScope.findMember(term.parts[0].name);
      if (upSearchResult !== undefined) {
        term.parts[0].entity = upSearchResult;
        break;
      }
    }

    // Every subsequent scoped name element is matched to a child of the
    // parent scope in the scoped name, starting from the first naming scope
    // identified in the upward search.
    let termIdx = 1;
    while (termIdx < term.parts.length) {
      let scope = term.parts[termIdx - 1].entity;
      if (isNamingScope(scope)) {
        let member: ScopeMember | undefined = scope.findMember(term.parts[termIdx].name);
        if (member !== undefined) {
          term.parts[termIdx].entity = member;
        } else {
          break;
        }
      }
      termIdx++;
    }

    // The search term will be fully resolved if all of its elements were
    // located.
    return term.isResolved();
  }
}

// vim: set ts=2 sw=2 expandtab:
