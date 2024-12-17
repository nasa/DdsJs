/**
 * @brief Contains the definition of the `DdsIdlPositiveIntegerConstantVisitor` class.
 * @author Rolando J. Nieves
 * @date 2024-11-13 16:31:38
 */

import { IntegerConstantValue } from "../../model/core";
import { NamingScope } from "../../model/scoping";
import { PositiveIntegerConstantContext } from "../DdsIdlParser";
import { DdsIdlMessageListener } from "../msg-listener";
import { DdsIdlConstantExpressionVisitor } from "./constant-expression-visitor";
import { DdsIdlMsgHandlingVisitor } from "./msg-handling-visitor";


export class DdsIdlPositiveIntegerConstantVisitor extends DdsIdlMsgHandlingVisitor< IntegerConstantValue > {
  public constructor(public readonly definedInScope: NamingScope, msgHandler: DdsIdlMessageListener) {
    super(msgHandler);

    this.visitPositiveIntegerConstant = DdsIdlPositiveIntegerConstantVisitor.prototype.visitPositiveIntegerConstantImpl.bind(this);
  }

  public visitPositiveIntegerConstantImpl(ctx: PositiveIntegerConstantContext): IntegerConstantValue {
    let candidateResult = new DdsIdlConstantExpressionVisitor(this.definedInScope, this.msgListener).visit(ctx.constantExpression());
    if (!(candidateResult instanceof IntegerConstantValue) || (candidateResult.value < 1)) {
      ctx.parser?.notifyErrorListeners(`Expecting positive integer constant.`, ctx.constantExpression().start, undefined);
      return new IntegerConstantValue(NaN);
    }
    
    return candidateResult;
  }
}

// vim: set ts=2 sw=2 expandtab:
