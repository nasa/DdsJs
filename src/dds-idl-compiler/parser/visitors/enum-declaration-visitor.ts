/**
 * @brief Contains the definition of the `DdsIdlEnumDeclarationVisitor` class.
 * @author Rolando J. Nieves
 * @date 2024-11-12 16:35:24
 */

import { Enumeration, Enumerator } from "../../model/core";
import { NamingScope } from "../../model/scoping";
import { EnumDeclarationContext } from "../DdsIdlParser";
import { DdsIdlMessageListener, exceptionMessage } from "../msg-listener";
import { DdsIdlIdentifierVisitor } from "./identifier-visitor";
import { DdsIdlMsgHandlingVisitor } from "./msg-handling-visitor";


export class DdsIdlEnumDeclarationVisitor extends DdsIdlMsgHandlingVisitor< Enumeration > {
  public constructor(public readonly owner: NamingScope, msgHandler: DdsIdlMessageListener) {
    super(msgHandler);

    this.visitEnumDeclaration = DdsIdlEnumDeclarationVisitor.prototype.visitEnumDeclarationImpl.bind(this);
  }

  public visitEnumDeclarationImpl(ctx: EnumDeclarationContext): Enumeration {
    let enumIdent = new DdsIdlIdentifierVisitor(this.msgListener).visit(ctx.identifier());
    let result = new Enumeration(enumIdent, this.owner);
    for (let anEnum of ctx.enumerator_list()) {
      try {
        let enumIdent = new DdsIdlIdentifierVisitor(this.msgListener).visit(anEnum.identifier());
        result.createEnumerator(enumIdent);
      } catch (err) {
        ctx.parser?.notifyErrorListeners(exceptionMessage(err), anEnum.start, undefined);
      }
    }

    return result;
  }
}

// vim: set ts=2 sw=2 expandtab:
