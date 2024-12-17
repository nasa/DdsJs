/**
 * @brief Contains the definition of the `IdlFile` class.
 * @author Rolando J. Nieves
 * @date 2024-10-28 11:11:56
 */

import { NamingScope, NamingScopeLogic, ScopedName, ScopeMember, ScopeMemberLogic } from "../scoping";
import { Identifier } from "./identifier";
import { Module } from "./module";


export class IdlFile implements NamingScope {
  private nsLogic: NamingScopeLogic;
  private smLogic: ScopeMemberLogic;
  public readonly name: Identifier;
  public readonly owningScope: NamingScope | null;

  public constructor(public readonly idlName: string) {
    this.nsLogic = new NamingScopeLogic();
    this.smLogic = new ScopeMemberLogic();
    this.name = Identifier.ROOT;
    this.owningScope = null;
  }

  public get fullyQualifiedName(): string {
    return "";
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
