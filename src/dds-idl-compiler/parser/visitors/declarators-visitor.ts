/**
 * @brief Contains the definition of the `DdsIdlAnyDeclaratorsVisitor` class.
 * @author Rolando J. Nieves
 * @date 2024-11-01 16:56:19
 */

import { BaseDeclarator } from "../../model/core";
import { NamingScope } from "../../model/scoping";
import { AnnotatableDeclaratorContext, AnnotatableDeclaratorsContext, AnyDeclaratorContext, AnyDeclaratorsContext } from "../DdsIdlParser";
import { DdsIdlMessageListener } from "../msg-listener";
import { DdsIdlDeclaratorVisitor } from "./declarator-visitor";
import { DdsIdlMsgHandlingVisitor } from "./msg-handling-visitor";


export class DdsIdlDeclaratorsVisitor extends DdsIdlMsgHandlingVisitor< BaseDeclarator[] > {
  public constructor(public readonly owner: NamingScope, msgHandler: DdsIdlMessageListener) {
    super(msgHandler);

    this.visitAnnotatableDeclarators = DdsIdlDeclaratorsVisitor.prototype.visitAnnotatableDeclaratorsImpl.bind(this);
    this.visitAnyDeclarators = DdsIdlDeclaratorsVisitor.prototype.visitAnyDeclaratorsImpl.bind(this);
  }

  public visitAnnotatableDeclaratorsImpl(ctx: AnnotatableDeclaratorsContext): BaseDeclarator[] {
    return ctx.annotatableDeclarator_list().map(
      (aDeclCtx: AnnotatableDeclaratorContext) => new DdsIdlDeclaratorVisitor(this.owner, this.msgListener).visit(aDeclCtx)
    );
  }

  public visitAnyDeclaratorsImpl(ctx: AnyDeclaratorsContext): BaseDeclarator[] {
    return ctx.anyDeclarator_list().map(
      (aDeclCtx: AnyDeclaratorContext) => new DdsIdlDeclaratorVisitor(this.owner, this.msgListener).visit(aDeclCtx)
    );
  }
}

// vim: set ts=2 sw=2 expandtab:
