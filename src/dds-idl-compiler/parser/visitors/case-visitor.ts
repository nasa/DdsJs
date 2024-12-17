/**
 * @brief Contains the definition of the `DdsIdlCaseVisitor` class.
 * @author Rolando J. Nieves
 * @date 2024-11-15 13:32:34
 */

import { CaseDefinition, UnionDefinition } from "../../model/core";
import { CaseConditionContext, CaseContext } from "../DdsIdlParser";
import { DdsIdlMessageListener } from "../msg-listener";
import { DdsIdlCaseConditionVisitor } from "./case-condition-visitor";
import { DdsIdlDeclaratorVisitor } from "./declarator-visitor";
import { DdsIdlMsgHandlingVisitor } from "./msg-handling-visitor";
import { DdsIdlTypeSpecificationVisitor } from "./type-specification-visitor";


export class DdsIdlCaseVisitor extends DdsIdlMsgHandlingVisitor< CaseDefinition > {
  public constructor(public readonly owner: UnionDefinition, msgHandler: DdsIdlMessageListener) {
    super(msgHandler);

    this.visitCase = DdsIdlCaseVisitor.prototype.visitCaseImpl.bind(this);
  }

  public visitCaseImpl(ctx: CaseContext): CaseDefinition {
    let conditions = ctx.caseCondition_list().map((aCondCtx: CaseConditionContext) => new DdsIdlCaseConditionVisitor(this.owner, this.msgListener).visit(aCondCtx));
    let typespec = new DdsIdlTypeSpecificationVisitor(this.owner, this.msgListener).visit(ctx.unionElementSpecification().typeSpecification());
    let decl = new DdsIdlDeclaratorVisitor(this.owner, this.msgListener).visit(ctx.unionElementSpecification().annotatableDeclarator());

    return new CaseDefinition(conditions, typespec, decl, this.owner);
  }
}

// vim: set ts=2 sw=2 expandtab:
