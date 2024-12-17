/**
 * @brief Contains the definition of the `DdsIdlSpecificationVisitor` class.
 * @author Rolando J. Nieves
 * @date 2024-11-01 12:40:43
 */

import { IdlFile } from "../../model/core";
import { ScopeMember } from "../../model/scoping";
import { SpecificationContext } from "../DdsIdlParser";
import { DdsIdlMessageListener, exceptionMessage } from "../msg-listener";
import { DdsIdlDefinitionVisitor } from "./definition-visitor";
import { DdsIdlMsgHandlingVisitor } from "./msg-handling-visitor";


export class DdsIdlSpecificationVisitor extends DdsIdlMsgHandlingVisitor< IdlFile > {
  public constructor(public readonly idlName: string, msgHandler: DdsIdlMessageListener) {
    super(msgHandler);

    this.visitSpecification = DdsIdlSpecificationVisitor.prototype.visitSpecificationImpl.bind(this);
  }

  public visitSpecificationImpl(ctx: SpecificationContext): IdlFile {
    let result = new IdlFile(this.idlName);

    for (let aDefCtx of ctx.definition_list()) {
      let defs = new DdsIdlDefinitionVisitor(result, this.msgListener).visit(aDefCtx);
      try {
        defs.forEach((aDef: ScopeMember) => result.addMember(aDef));
      } catch (err) {
        ctx.parser?.notifyErrorListeners(exceptionMessage(err), aDefCtx.start, undefined);
      }
    }
    return result;
  }
}

// vim: set ts=2 sw=2 expandtab:
