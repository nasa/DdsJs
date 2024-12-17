/**
 * @brief Contains the definition of the `CaseDefinition` class.
 * @author Rolando J. Nieves
 * @date 2024-11-15 13:26:10
 */

import { NamingScope, ScopedName, ScopeMember, ScopeMemberLogic } from "../scoping";
import { CaseCondition, DefaultCaseCondition } from "./case-condition";
import { BaseDeclarator } from "./declarator";
import { Identifier } from "./identifier";
import { BaseTypeSpec } from "./typespec";


export class CaseDefinition implements ScopeMember {
  private smLogic: ScopeMemberLogic;

  public constructor(public readonly conditions: CaseCondition[], public readonly typespec: BaseTypeSpec, public readonly decl: BaseDeclarator, public readonly owningScope: NamingScope) {
    this.smLogic = new ScopeMemberLogic();
  }

  public get defaultCondition(): DefaultCaseCondition | undefined {
    return this.conditions.find((aCond) => aCond instanceof DefaultCaseCondition);
  }

  public get name(): Identifier {
    return this.decl.name;
  }

  public get fullyQualifiedName(): string {
    return this.smLogic.buildFullyQualifiedName(this);
  }

  public get scopedName(): ScopedName {
    return this.smLogic.scopedName(this);
  }

  public hasDefault(): boolean {
    return this.conditions.findIndex((aCond: CaseCondition) => aCond instanceof DefaultCaseCondition) !== -1;
  }
}

// vim: set ts=2 sw=2 expandtab:
