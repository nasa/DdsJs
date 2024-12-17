/**
 * @brief Contains the definition of the `DdsIdlUnionDefinitionVisitor` class.
 * @author Rolando J. Nieves
 * @date 2024-11-15 14:00:05
 */

import { UnionDefinition } from "../../model/core";
import { NamingScope } from "../../model/scoping";
import { UnionDefinitionContext } from "../DdsIdlParser";
import { DdsIdlMessageListener, exceptionMessage } from "../msg-listener";
import { DdsIdlCaseVisitor } from "./case-visitor";
import { DdsIdlIdentifierVisitor } from "./identifier-visitor";
import { DdsIdlMsgHandlingVisitor } from "./msg-handling-visitor";
import { DdsIdlSwitchTypeSpecificationVisitor } from "./switch-type-specification-visitor";


export class DdsIdlUnionDefinitionVisitor extends DdsIdlMsgHandlingVisitor< UnionDefinition > {
  public constructor(public readonly owner: NamingScope, msgHandler: DdsIdlMessageListener) {
    super(msgHandler);

    this.visitUnionDefinition = DdsIdlUnionDefinitionVisitor.prototype.visitUnionDefinitionImpl.bind(this);
  }

  public visitUnionDefinitionImpl(ctx: UnionDefinitionContext): UnionDefinition {
    let ident = new DdsIdlIdentifierVisitor(this.msgListener).visit(ctx.identifier());
    // TODO: Process annotation applications
    let switchTypeSpec = new DdsIdlSwitchTypeSpecificationVisitor(this.owner, this.msgListener).visit(ctx.switchTypeSpecification());
    let result = new UnionDefinition(ident, switchTypeSpec, this.owner);
    for (let aCaseCtx of ctx.switchBody().case__list()) {
      try {
        result.addMember(new DdsIdlCaseVisitor(result, this.msgListener).visit(aCaseCtx));
      } catch (err) {
        ctx.parser?.notifyErrorListeners(exceptionMessage(err), aCaseCtx.start, undefined);
      }
    }

    try {
      result.finalize();
    } catch (err) {
      ctx.parser?.notifyErrorListeners(exceptionMessage(err), ctx.start, undefined);
    }

    return result;
  }
}

// vim: set ts=2 sw=2 expandtab:
