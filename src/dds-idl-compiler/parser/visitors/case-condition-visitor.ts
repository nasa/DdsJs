/**
 * @brief Contains the definition of the `DdsIdlCaseConditionVisitor` class.
 * @author Rolando J. Nieves
 * @date 2024-11-15 12:39:50
 */

import { BasicCaseCondition, CaseCondition, ConstantValue, DefaultCaseCondition, Enumeration, Enumerator, UnionDefinition } from "../../model/core";
import { InvalidCaseCondition } from "../../model/core/case-condition";
import { ScopeMember } from "../../model/scoping";
import { ConstantDefCaseConditionContext, DefaultCaseConditionContext, LiteralValueCaseConditionContext } from "../DdsIdlParser";
import { DdsIdlMessageListener } from "../msg-listener";
import { DdsIdlLiteralVisitor } from "./literal-visitor";
import { DdsIdlMsgHandlingVisitor } from "./msg-handling-visitor";
import { DdsIdlScopedNameVisitor } from "./scoped-name-visitor";


export class DdsIdlCaseConditionVisitor extends DdsIdlMsgHandlingVisitor< CaseCondition > {
  public constructor(public owner: UnionDefinition, msgHandler: DdsIdlMessageListener) {
    super(msgHandler);

    this.visitConstantDefCaseCondition = DdsIdlCaseConditionVisitor.prototype.visitConstantDefCaseConditionImpl.bind(this);
    this.visitDefaultCaseCondition = DdsIdlCaseConditionVisitor.prototype.visitDefaultCaseConditionImpl.bind(this);
    this.visitLiteralValueCaseCondition = DdsIdlCaseConditionVisitor.prototype.visitLiteralValueCaseConditionImpl.bind(this);
  }

  public visitConstantDefCaseConditionImpl(ctx: ConstantDefCaseConditionContext): CaseCondition {
    let constantValue: ConstantValue;

    if (this.owner.switchTypeSpec instanceof Enumeration) {
      // Scoped name may *only* refer to one of the enumerators.
      let scopedName = new DdsIdlScopedNameVisitor(this.msgListener).visit(ctx.scopedName());
      if (!this.owner.search(scopedName)) {
        ctx.parser?.notifyErrorListeners(`Scoped name "${scopedName}" not found.`, ctx.scopedName().start, undefined);
        return new InvalidCaseCondition();
      }
      // We know leafEntity() will not return null since search() called prior
      // filled out all entities in the scoped name.
      if (!this.owner.switchTypeSpec.isOwnEnumerator(scopedName.leafEntity() as ScopeMember)) {
        ctx.parser?.notifyErrorListeners(`Scoped name "${scopedName}" not part of union switch enumeration "${this.owner.switchTypeSpec.name}"`, ctx.scopedName().start, undefined);
        return new InvalidCaseCondition();
      }
      // We know leafEntity() is now an Enumerator since isOwnEnumerator()
      // called prior verified it.
      constantValue = scopedName.leafEntity() as Enumerator;
    } else {
      // Scoped name could refer to any constant definition in the scope
      // search space.
      let constantDecl = DdsIdlScopedNameVisitor.AsConstant(ctx.scopedName(), this.owner, this.msgListener);
      constantValue = constantDecl.constantValue;
    }

    return new BasicCaseCondition(constantValue);
  }

  public visitDefaultCaseConditionImpl(ctx: DefaultCaseConditionContext): CaseCondition {
    return new DefaultCaseCondition();
  }

  public visitLiteralValueCaseConditionImpl(ctx: LiteralValueCaseConditionContext): CaseCondition {
    let literalValue = new DdsIdlLiteralVisitor(this.msgListener).visit(ctx.literal());
    return new BasicCaseCondition(literalValue);
  }
}

// vim: set ts=2 sw=2 expandtab:
