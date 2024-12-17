/**
 * @brief Contains the definition of the `Module` class.
 * @author Rolando J. Nieves
 * @date 2024-10-24 18:32:38
 */

import { NamingScope, NamingScopeLogic, ScopedName, ScopeMember, ScopeMemberLogic } from "../scoping";
import { Identifier } from "./identifier";


export class Module implements NamingScope {
  private nsLogic: NamingScopeLogic;
  private smLogic: ScopeMemberLogic;

  public constructor(public readonly name: Identifier, public readonly owningScope: NamingScope) {
    this.nsLogic = new NamingScopeLogic();
    this.smLogic = new ScopeMemberLogic();
  }

  public get fullyQualifiedName(): string {
    return this.smLogic.buildFullyQualifiedName(this);
  }

  public get scopedName(): ScopedName {
    return this.smLogic.scopedName(this);
  }
  
  public get guests(): ScopeMember[] {
    return this.nsLogic.guests;
  }

  public get members(): ScopeMember[] {
    return this.nsLogic.members;
  }

  public addMember(candidate: ScopeMember): void {
    if (!(candidate instanceof Module) || (this.nsLogic.findMember(candidate.name) === undefined)) {
      this.nsLogic.addMember(candidate);
    }
  }

  public findMember(name: Identifier): ScopeMember | undefined {
    return this.nsLogic.findMember(name);
  }

  public introduceGuest(candidate: ScopeMember): void {
    this.nsLogic.introduceGuest(candidate);
  }

  public search(term: ScopedName): boolean {
    return this.nsLogic.search(term, this);
  }
}

// vim: set ts=2 sw=2 expandtab:
