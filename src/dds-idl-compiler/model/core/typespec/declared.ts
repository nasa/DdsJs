/**
 * @brief Contains the definition of the `DeclaredTypeSpec` class.
 * @author Rolando J. Nieves
 * @date 2024-11-13 14:46:45
 */

import { NamingScope, ScopedName, ScopeMember, ScopeMemberLogic } from "../../scoping";
import { BaseDeclarator } from "../declarator";
import { Identifier } from "../identifier";
import { BaseTypeSpec } from "./base";


export class DeclaredTypeSpec extends BaseTypeSpec implements ScopeMember {
  private smLogic: ScopeMemberLogic;
  
  public constructor(public readonly decl: BaseDeclarator) {
    super();
    this.smLogic = new ScopeMemberLogic();
  }
  
  public get fullyQualifiedName(): string {
    return this.smLogic.buildFullyQualifiedName(this);
  }

  public get name(): Identifier {
    return this.decl.name;
  }

  public get owningScope(): NamingScope {
    return this.decl.owningScope;
  }
  
  public get scopedName(): ScopedName {
    return this.smLogic.scopedName(this);
  }
};

// vim: set ts=2 sw=2 expandtab:
