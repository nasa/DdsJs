/**
 * @brief Contains the definition of the `DdsIdlIdentifierVisitor` class.
 * @author Rolando J. Nieves
 * @date 2024-11-01 13:27:55 
 */

import { Identifier } from "../../model/core";
import { IdentifierContext } from "../DdsIdlParser";
import { DdsIdlMessageListener } from "../msg-listener";
import { DdsIdlMsgHandlingVisitor } from "./msg-handling-visitor";


export class DdsIdlIdentifierVisitor extends DdsIdlMsgHandlingVisitor< Identifier > {
  public constructor(msgHandler: DdsIdlMessageListener) {
    super(msgHandler);

    this.visitIdentifier = DdsIdlIdentifierVisitor.prototype.visitIdentifierImpl.bind(this);
  }

  public visitIdentifierImpl(ctx: IdentifierContext): Identifier {
    // TODO: Handle annotation applications.
    return new Identifier(ctx.ID().getText());
  }
}

// vim: set ts=2 sw=2 expandtab:
