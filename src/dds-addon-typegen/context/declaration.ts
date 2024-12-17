/**
 * @brief Contains the definition of the `TypescriptDeclarationContext` class.
 * @author Rolando J. Nieves
 * @date 2024-12-17 15:34:23
 */

import { ConstantDeclaration, Enumeration, IdlFile, Module, ScopeMember, Structure, TypeAlias, UnionDefinition } from "../../dds-idl-compiler";


export class TypescriptDeclarationContext {
  public readonly childContexts: TypescriptDeclarationContext[];
  public readonly createDate: string;

  public constructor(public readonly subject: ScopeMember) {
    this.createDate = new Date().toISOString();
    if ((subject instanceof IdlFile) || (subject instanceof Module)) {
      this.childContexts = subject.members.map((aMember) => new TypescriptDeclarationContext(aMember));
    } else {
      this.childContexts = [];
    }
  }

  public selectPartial(): string {
    if (this.subject instanceof ConstantDeclaration) {
      return "constDecl";
    } else if (this.subject instanceof Enumeration) {
      return "enumDecl";
    } else if (this.subject instanceof Module) {
      return "moduleDecl";
    } else if (this.subject instanceof Structure) {
      return "structDecl";
    } else if (this.subject instanceof TypeAlias) {
      return "typeAliasDecl";
    } else if (this.subject instanceof UnionDefinition) {
      return "unionDecl";
    } else {
      return "empty";
    }
  }
}

// vim: set ts=2 sw=2 expandtab:
