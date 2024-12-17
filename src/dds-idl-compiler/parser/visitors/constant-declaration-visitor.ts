/**
 * @brief Contains the definition for the `DdsIdlConstantDeclarationVisitor` class.
 * @author Rolando J. Nieves
 * @date 2024-11-05 15:46:25
 */

import { ConstantDeclaration, IntegerConstantValue } from "../../model/core";
import { Int32Type } from "../../model/core/typespec";
import { NamingScope } from "../../model/scoping";
import { ConstantDeclarationContext } from "../DdsIdlParser";
import { DdsIdlMessageListener, exceptionMessage } from "../msg-listener";
import { DdsIdlConstantExpressionVisitor } from "./constant-expression-visitor";
import { DdsIdlConstantTypeVisitor } from "./constant-type-visitor";
import { DdsIdlIdentifierVisitor } from "./identifier-visitor";
import { DdsIdlMsgHandlingVisitor } from "./msg-handling-visitor";


export class DdsIdlConstantDeclarationVisitor extends DdsIdlMsgHandlingVisitor< ConstantDeclaration > {
  public constructor(public readonly owner: NamingScope, msgHandler: DdsIdlMessageListener) {
    super(msgHandler);

    this.visitConstantDeclaration = DdsIdlConstantDeclarationVisitor.prototype.visitConstantDeclarationImpl.bind(this);
  }

  public visitConstantDeclarationImpl(ctx: ConstantDeclarationContext): ConstantDeclaration {
    let constantType = new DdsIdlConstantTypeVisitor(this.owner, this.msgListener).visit(ctx.constantType());
    let constantId = new DdsIdlIdentifierVisitor(this.msgListener).visit(ctx.identifier());
    let constantValue = new DdsIdlConstantExpressionVisitor(this.owner, this.msgListener).visit(ctx.constantExpression());
    // Initialized to meaningless constant that is only used if the real one
    // fails to create in the try block that follows.
    let result: ConstantDeclaration = new ConstantDeclaration(this.owner, constantId, new Int32Type(), new IntegerConstantValue(0));

    try {
      result = new ConstantDeclaration(this.owner, constantId, constantType, constantValue);
    } catch (err) {
      ctx.parser?.notifyErrorListeners(exceptionMessage(err), ctx.start, undefined);
    }

    return result;
  }
}

// vim: set ts=2 sw=2 expandtab:
