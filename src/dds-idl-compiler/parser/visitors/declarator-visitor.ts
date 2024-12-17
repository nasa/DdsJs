/**
 * @brief Contains the definition of the `DdsIdlDeclaratorVisitor` class.
 * @author Rolando J. Nieves
 * @date 2024-11-15 13:10:53
 */

import { BaseDeclarator } from "../../model/core";
import { NamingScope } from "../../model/scoping";
import { AnnotatableDeclaratorContext, AnyDeclaratorContext } from "../DdsIdlParser";
import { DdsIdlMessageListener } from "../msg-listener";
import { DdsIdlArrayDeclaratorVisitor } from "./array-declarator-visitor";
import { DdsIdlMsgHandlingVisitor } from "./msg-handling-visitor";
import { DdsIdlSimpleDeclaratorVisitor } from "./simple-declarator-visitor";


export class DdsIdlDeclaratorVisitor extends DdsIdlMsgHandlingVisitor< BaseDeclarator > {
  public constructor(public readonly owner: NamingScope, msgHandler: DdsIdlMessageListener) {
    super(msgHandler);

    this.visitAnnotatableDeclarator = DdsIdlDeclaratorVisitor.prototype.visitAnnotatableDeclaratorImpl.bind(this);
    this.visitAnyDeclarator = DdsIdlDeclaratorVisitor.prototype.visitAnyDeclaratorImpl.bind(this);
  }

  public visitAnnotatableDeclaratorImpl(ctx: AnnotatableDeclaratorContext): BaseDeclarator {
    // TODO: Add processing of annotations
    if (ctx.arrayDeclarator()) {
      return new DdsIdlArrayDeclaratorVisitor(this.owner, this.msgListener).visit(ctx.arrayDeclarator());
    } else {
      return new DdsIdlSimpleDeclaratorVisitor(this.owner, this.msgListener).visit(ctx.simpleDeclarator());
    }
  }

  public visitAnyDeclaratorImpl(ctx: AnyDeclaratorContext): BaseDeclarator {
    if (ctx.arrayDeclarator()) {
      return new DdsIdlArrayDeclaratorVisitor(this.owner, this.msgListener).visit(ctx.arrayDeclarator());
    } else {
      return new DdsIdlSimpleDeclaratorVisitor(this.owner, this.msgListener).visit(ctx.simpleDeclarator());
    }
  }
}

// vim: set ts=2 sw=2 expandtab:
