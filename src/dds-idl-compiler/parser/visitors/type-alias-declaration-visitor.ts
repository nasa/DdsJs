/**
 * @brief Contains the definition of the `DdsIdlTypeAliasDeclarationVisitor` class.
 * @author Rolando J. Nieves
 * @date 2024-11-01 14:00:31
 */

import { BaseDeclarator, TypeAlias } from "../../model/core";
import { NamingScope } from "../../model/scoping";
import { TypeAliasDeclarationContext } from "../DdsIdlParser";
import { DdsIdlMessageListener } from "../msg-listener";
import { DdsIdlDeclaratorsVisitor } from "./declarators-visitor";
import { DdsIdlMsgHandlingVisitor } from "./msg-handling-visitor";
import { DdsIdlTypeDeclaratorTypeVisitor } from "./type-declarator-type-visitor";


export class DdsIdlTypeAliasDeclarationVisitor extends DdsIdlMsgHandlingVisitor< TypeAlias[] > {
  public constructor(public readonly owner: NamingScope, msgHandler: DdsIdlMessageListener) {
    super(msgHandler);

    this.visitTypeAliasDeclaration = DdsIdlTypeAliasDeclarationVisitor.prototype.visitTypeAliasDeclarationImpl.bind(this);
  }

  public visitTypeAliasDeclarationImpl(ctx: TypeAliasDeclarationContext): TypeAlias[] {
    let typeSpec = new DdsIdlTypeDeclaratorTypeVisitor(this.owner, this.msgListener).visit(ctx.typeDeclarator().typeDeclaratorType());
    let decls = new DdsIdlDeclaratorsVisitor(this.owner, this.msgListener).visit(ctx.typeDeclarator().anyDeclarators());

    return decls.map((aDecl: BaseDeclarator) => new TypeAlias(typeSpec, aDecl));
  }
}

// vim: set ts=2 sw=2 expandtab:
