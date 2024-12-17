/**
 * @brief Contains the definition for the `BaseDeclarator`, `SimpleDeclarator`, and `ArrayDeclarator` classes.
 * @author Rolando J. Nieves
 * @date 2024-11-01 16:06:25
 */

import { NamingScope, ScopedName, ScopeMember, ScopeMemberLogic } from "../scoping";
import { Identifier } from "./identifier";


export class BaseDeclarator implements ScopeMember {
  private smLogic: ScopeMemberLogic;

  public constructor(public readonly name: Identifier, public readonly owningScope: NamingScope) {
    this.smLogic = new ScopeMemberLogic();
  }

  get fullyQualifiedName(): string {
    return this.smLogic.buildFullyQualifiedName(this);
  }
  get scopedName(): ScopedName {
    return this.smLogic.scopedName(this);
  }
}


export class SimpleDeclarator extends BaseDeclarator {}


export class ArrayDeclarator extends BaseDeclarator {
  public constructor(public readonly arrayDims: number[], name: Identifier, owningScope: NamingScope) {
    super(name, owningScope);
  }
}

// vim: set ts=2 sw=2 expandtab:
