/**
 * @brief Contains the definition of the `DdsIdlModuleVisitor` class.
 * @author Rolando J. Nieves
 * @date 2024-11-01 13:15:51
 */

import { Module } from "../../model/core";
import { NamingScope, ScopeMember } from "../../model/scoping";
import { ModuleContext } from "../DdsIdlParser";
import { DdsIdlMessageListener, exceptionMessage } from "../msg-listener";
import { DdsIdlDefinitionVisitor } from "./definition-visitor";
import { DdsIdlIdentifierVisitor } from "./identifier-visitor";
import { DdsIdlMsgHandlingVisitor } from "./msg-handling-visitor";


export class DdsIdlModuleVisitor extends DdsIdlMsgHandlingVisitor< Module > {
  public constructor(public readonly owner: NamingScope, msgHandler: DdsIdlMessageListener) {
    super(msgHandler);

    this.visitModule = DdsIdlModuleVisitor.prototype.visitModuleImpl.bind(this);
  }

  public visitModuleImpl(ctx: ModuleContext): Module {
    let moduleId = new DdsIdlIdentifierVisitor(this.msgListener).visit(ctx.identifier());
    let result = new Module(moduleId, this.owner);
    let existing = this.owner.findMember(moduleId);
    if (existing !== undefined) {
      if (existing instanceof Module) {
        result = existing;
      } else {
        ctx.parser?.notifyErrorListeners(`Invalid re-use of symbol ${moduleId.value} as module name.`, ctx.start, undefined)
      }
    }

    for (let aDefCtx of ctx.definition_list()) {
      let defs = new DdsIdlDefinitionVisitor(result, this.msgListener).visit(aDefCtx);
      try {
        if (Array.isArray(defs)) {
          for (let aDef of defs) {
            result.addMember(aDef);
          }
        } else {
          result.addMember(defs);
        }
      } catch (err) {
        ctx.parser?.notifyErrorListeners(exceptionMessage(err), aDefCtx.start, undefined);
      }
    }

    return result;
  }
}

// vim: set ts=2 sw=2 expandtab:
