/**
 * @brief Contains the definition of the `UnionDefinition` class.
 * @author Rolando J. Nieves
 * @date 2024-11-15 13:47:23
 */

import { NamingScope, NamingScopeLogic, ScopedName, ScopeMember } from "../scoping";
import { CaseCondition, DefaultCaseCondition } from "./case-condition";
import { CaseDefinition } from "./case-definition";
import { SimpleDeclarator } from "./declarator";
import { Enumeration } from "./enumeration";
import { Identifier } from "./identifier";
import { TypeAlias } from "./type-alias";
import { BaseTypeSpec, BasicCharType, BooleanType, DeclaredTypeSpec, IntegerType, OctetType, WideCharType } from "./typespec";


export class UnionDefinition extends DeclaredTypeSpec implements NamingScope {
  private nsLogic: NamingScopeLogic;

  public constructor(name: Identifier, public readonly switchTypeSpec: BaseTypeSpec, owningScope: NamingScope) {
    super(new SimpleDeclarator(name, owningScope));
    this.nsLogic = new NamingScopeLogic();

    let typeSpecToCheck = switchTypeSpec;
    if (typeSpecToCheck instanceof TypeAlias) {
      typeSpecToCheck = typeSpecToCheck.resolvesTo();
    }
    let validTypeSpec = (
      (switchTypeSpec instanceof IntegerType) ||
      (switchTypeSpec instanceof BasicCharType) ||
      (switchTypeSpec instanceof WideCharType) ||
      (switchTypeSpec instanceof BooleanType) ||
      (switchTypeSpec instanceof OctetType) ||
      (switchTypeSpec instanceof Enumeration)
    );

    if (!validTypeSpec) {
      let msg = "Union discriminator type may only be integer, character, boolean, or octet."
      throw new Error(msg);
    }
  }

  public get defaultCase(): CaseDefinition | undefined {
    for (let aMember of this.members as CaseDefinition[]) {
      if (aMember.hasDefault()) {
        return aMember;
      }
    }

    return undefined;
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
    if (!(candidate instanceof CaseDefinition)) {
      throw new Error("Union definitions can only accept switch case definitions as members.");
    }

    if ((this.defaultCase !== undefined) && candidate.hasDefault()) {
      throw new Error("Default case condition already defined.");
    }
    
    this.nsLogic.addMember(candidate);
  }

  public collectNonDefaultConditions(): CaseCondition[] {
    let result: CaseCondition[] = [];

    for (let aCaseDef of this.members as CaseDefinition[]) {
      result.push(...aCaseDef.conditions);
    }

    return result.filter((aCond) => !(aCond instanceof DefaultCaseCondition));
  }

  /**
   * Complete the union definition.
   * 
   * If the union has a case definition with a default case condition, assign
   * an available discriminator value to that condition.
   */
  public finalize(): void {
    let defCond = this.defaultCase?.defaultCondition;
    if (defCond === undefined) {
      return;
    }

    defCond.selectPlaceholder(this.switchTypeSpec, this.collectNonDefaultConditions());
    if (!defCond.conditionConstant.valid()) {
      throw new Error("No discriminator values remain for default clause.");
    }
  }

  public findMember(name: Identifier): ScopeMember | undefined {
    return this.nsLogic.findMember(name);
  }

  public introduceGuest(candidate: ScopeMember): void {
    // Non-module naming scopes don't keep their own guest list. Forward up
    // until it reaches a module naming scope.
    this.owningScope.introduceGuest(candidate);
  }

  public search(term: ScopedName): boolean {
    return this.nsLogic.search(term, this);
  }
}

// vim: set ts=2 sw=2 expandtab:
