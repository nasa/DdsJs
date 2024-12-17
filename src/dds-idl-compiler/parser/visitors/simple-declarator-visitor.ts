/**
 * @brief Contains the definition of the `DdsIdlSimpleDeclaratorVisitor` class.
 * @author Rolando J. Nieves
 * @date 2024-11-01 17:01:20
 */

import { SimpleDeclarator } from "../../model/core";
import { NamingScope } from "../../model/scoping";
import { SimpleDeclaratorContext } from "../DdsIdlParser";
import { DdsIdlMessageListener } from "../msg-listener";
import { DdsIdlIdentifierVisitor } from "./identifier-visitor";
import { DdsIdlMsgHandlingVisitor } from "./msg-handling-visitor";


export class DdsIdlSimpleDeclaratorVisitor extends DdsIdlMsgHandlingVisitor< SimpleDeclarator > {
  public constructor(public readonly owner: NamingScope, msgHandler: DdsIdlMessageListener) {
    super(msgHandler);

    this.visitSimpleDeclarator = DdsIdlSimpleDeclaratorVisitor.prototype.visitSimpleDeclaratorImpl.bind(this);
  }

  public visitSimpleDeclaratorImpl(ctx: SimpleDeclaratorContext): SimpleDeclarator {
    let identVisitor = new DdsIdlIdentifierVisitor(this.msgListener);
    let declIdent = identVisitor.visit(ctx.identifier());
    return new SimpleDeclarator(declIdent, this.owner);
  }
}

// vim: set ts=2 sw=2 expandtab:
