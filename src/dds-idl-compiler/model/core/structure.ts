/**
 * @brief Contains the definition of the `Structure` class.
 * @author Rolando J. Nieves
 * @date 2024-11-14 17:30:52
 */

import { Annotatable, Annotation } from "../annotations";
import { NamingScope, NamingScopeLogic, ScopedName, ScopeMember } from "../scoping";
import { SimpleDeclarator } from "./declarator";
import { Identifier } from "./identifier";
import { StructMember } from "./struct-member";
import { DeclaredTypeSpec } from "./typespec";


export class Structure extends DeclaredTypeSpec implements NamingScope, Annotatable {
  private nsLogic: NamingScopeLogic;
  private readonly _annotations: Annotation[];

  public constructor(name: Identifier, owningScope: NamingScope) {
    super(new SimpleDeclarator(name, owningScope));
    this.nsLogic = new NamingScopeLogic();
    this._annotations = [];
  }
  
  public get guests(): ScopeMember[] {
    // Non-module naming scopes don't keep their own guest list. Forward up
    // until it reaches a module naming scope.
    return this.owningScope.guests;
  }

  public get members(): ScopeMember[] {
    return this.nsLogic.members;
  }

  public addMember(candidate: ScopeMember): void {
    if (!(candidate instanceof StructMember)) {
      throw new Error(`Structures can only accept fields as members.`);
    }
    this.nsLogic.addMember(candidate);
  }

  public annotations(): { [Symbol.iterator]: () => Iterator< Annotation > } {
    return this._annotations;
  }

  public findMember(name: Identifier): ScopeMember | undefined {
    return this.nsLogic.findMember(name);
  }

  public introduceGuest(candidate: ScopeMember): void {
    // Non-module naming scopes don't keep their own guest list. Forward up
    // until it reaches a module naming scope.
    this.owningScope.introduceGuest(candidate);
  }

  public replaceAnnotations(newAnnotations: Annotation[]): void {
    // Have to replace "in place" since `_annotations` is readonly.
    this._annotations.splice(0, this._annotations.length, ...newAnnotations);
  }

  public search(term: ScopedName): boolean {
    return this.nsLogic.search(term, this);
  }
}

// vim: set ts=2 sw=2 expandtab:
