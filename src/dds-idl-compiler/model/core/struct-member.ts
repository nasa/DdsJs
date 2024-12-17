/**
 * @brief Contains the definition of the `StructMember` class.
 * @author Rolando J. Nieves
 * @date 2024-11-14 17:19:12
 */

import { Annotatable, Annotation } from "../annotations";
import { NamingScope, ScopedName, ScopeMember, ScopeMemberLogic } from "../scoping";
import { BaseDeclarator } from "./declarator";
import { Identifier } from "./identifier";
import { BaseTypeSpec } from "./typespec";


export class StructMember implements ScopeMember, Annotatable {
  private smLogic: ScopeMemberLogic;

  public constructor(public readonly typespec: BaseTypeSpec, public readonly decl: BaseDeclarator, public readonly owningScope: NamingScope, private readonly _annotations: Annotation[] = []) {
    this.smLogic = new ScopeMemberLogic();
  }

  public get fullyQualifiedName(): string {
    return this.smLogic.buildFullyQualifiedName(this);
  }

  public get name(): Identifier {
    return this.decl.name;
  }

  public get scopedName(): ScopedName {
    return this.smLogic.scopedName(this);
  }

  public annotations(): { [Symbol.iterator]: () => Iterator< Annotation > } {
    return this._annotations;
  }

  public replaceAnnotations(newAnnotations: Annotation[]): void {
    // Have to replace "in place" since `_annotations` is readonly.
    this._annotations.splice(0, this._annotations.length, ...newAnnotations);
  }
}

// vim: set ts=2 sw=2 expandtab:
