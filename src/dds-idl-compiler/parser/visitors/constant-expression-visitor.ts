/**
 * @brief Contains the definition of the `DdsIdlConstantExpressionVisitor` class.
 * @author Rolando J. Nieves
 * @date 2024-11-04 18:16:47
 */

import { ConstantOperations, ConstantValue, InvalidConstantValue } from "../../model/core";
import { NamingScope } from "../../model/scoping";
import { AddOperationContext, AddPassThroughContext, AndOperationContext, AndPassThroughContext, ConstantExpressionContext, DivideOperationContext, ModuloOperationContext, MultiplyOperationContext, MultPassThroughContext, OrOperationContext, OrPassThroughContext, PrimaryExpressionContext, ShiftLeftOperationContext, ShiftPassThroughContext, ShiftRightOperationContext, SubtractOperationContext, UnaryOperationContext, UnaryPassThroughContext, XorOperationContext, XorPassThroughContext } from "../DdsIdlParser";
import { DdsIdlMessageListener } from "../msg-listener";
import { DdsIdlLiteralVisitor } from "./literal-visitor";
import { DdsIdlMsgHandlingVisitor } from "./msg-handling-visitor";
import { DdsIdlScopedNameVisitor } from "./scoped-name-visitor";


export class DdsIdlConstantExpressionVisitor extends DdsIdlMsgHandlingVisitor< ConstantValue > {
  public constructor(public readonly definedInScope: NamingScope, msgHandler: DdsIdlMessageListener) {
    super(msgHandler);

    this.visitAddOperation = DdsIdlConstantExpressionVisitor.prototype.visitAddOperationImpl.bind(this);
    this.visitAddPassThrough = (ctx: AddPassThroughContext) => this.visit(ctx.multExpression());
    this.visitAndOperation = DdsIdlConstantExpressionVisitor.prototype.visitAndOperationImpl.bind(this);
    this.visitAndPassThrough = (ctx: AndPassThroughContext) => this.visit(ctx.shiftExpression());
    this.visitConstantExpression = (ctx: ConstantExpressionContext) => this.visit(ctx.orExpression());
    this.visitDivideOperation = DdsIdlConstantExpressionVisitor.prototype.visitDivideOperationImpl.bind(this);
    this.visitModuloOperation = DdsIdlConstantExpressionVisitor.prototype.visitModuloOperationImpl.bind(this);
    this.visitMultPassThrough = (ctx: MultPassThroughContext) => this.visit(ctx.unaryExpression());
    this.visitMultiplyOperation = DdsIdlConstantExpressionVisitor.prototype.visitMultiplyOperationImpl.bind(this);
    this.visitOrOperation = DdsIdlConstantExpressionVisitor.prototype.visitOrOperationImpl.bind(this);
    this.visitOrPassThrough = (ctx: OrPassThroughContext) => this.visit(ctx.xorExpression());
    this.visitPrimaryExpression = DdsIdlConstantExpressionVisitor.prototype.visitPrimaryExpressionImpl.bind(this);
    this.visitShiftLeftOperation = DdsIdlConstantExpressionVisitor.prototype.visitShiftLeftOperationImpl.bind(this);
    this.visitShiftPassThrough = (ctx: ShiftPassThroughContext) => this.visit(ctx.addExpression());
    this.visitShiftRightOperation = DdsIdlConstantExpressionVisitor.prototype.visitShiftRightOperationImpl.bind(this);
    this.visitSubtractOperation = DdsIdlConstantExpressionVisitor.prototype.visitSubtractOperationImpl.bind(this);
    this.visitUnaryOperation = DdsIdlConstantExpressionVisitor.prototype.visitUnaryOperationImpl.bind(this);
    this.visitUnaryPassThrough = (ctx: UnaryPassThroughContext) => this.visit(ctx.primaryExpression());
    this.visitXorOperation = DdsIdlConstantExpressionVisitor.prototype.visitXorOperationImpl.bind(this);
    this.visitXorPassThrough = (ctx: XorPassThroughContext) => this.visit(ctx.andExpression());
  }

  public visitAddOperationImpl(ctx: AddOperationContext): ConstantValue {
    let lhs = this.visit(ctx.addExpression());
    let rhs = this.visit(ctx.multExpression());
    let result: ConstantValue = new InvalidConstantValue();

    try {
      result = ConstantOperations.add(lhs, rhs);
    } catch (err) {
      ctx.parser?.notifyErrorListeners(`${err}`, ctx.start, undefined);
    }

    return result;
  }

  public visitAndOperationImpl(ctx: AndOperationContext): ConstantValue {
    let lhs = this.visit(ctx.andExpression());
    let rhs = this.visit(ctx.shiftExpression());
    let result: ConstantValue = new InvalidConstantValue();

    try {
      result = ConstantOperations.bitwiseAnd(lhs, rhs);
    } catch (err) {
      ctx.parser?.notifyErrorListeners(`${err}`, ctx.start, undefined);
    }

    return result;
  }

  public visitDivideOperationImpl(ctx: DivideOperationContext): ConstantValue {
    let lhs = this.visit(ctx.multExpression());
    let rhs = this.visit(ctx.unaryExpression());
    let result: ConstantValue = new InvalidConstantValue();

    try {
      result = ConstantOperations.divide(lhs, rhs);
    } catch (err) {
      ctx.parser?.notifyErrorListeners(`${err}`, ctx.start, undefined);
    }

    return result;
  }

  public visitModuloOperationImpl(ctx: ModuloOperationContext): ConstantValue {
    let lhs = this.visit(ctx.multExpression());
    let rhs = this.visit(ctx.unaryExpression());
    let result: ConstantValue = new InvalidConstantValue();

    try {
      result = ConstantOperations.modulo(lhs, rhs);
    } catch (err) {
      ctx.parser?.notifyErrorListeners(`${err}`, ctx.start, undefined);
    }

    return result;
  }

  public visitMultiplyOperationImpl(ctx: MultiplyOperationContext): ConstantValue {
    let lhs = this.visit(ctx.multExpression());
    let rhs = this.visit(ctx.unaryExpression());
    let result: ConstantValue = new InvalidConstantValue();

    try {
      result = ConstantOperations.multiply(lhs, rhs);
    } catch (err) {
      ctx.parser?.notifyErrorListeners(`${err}`, ctx.start, undefined);
    }

    return result;
  }

  public visitOrOperationImpl(ctx: OrOperationContext): ConstantValue {
    let lhs = this.visit(ctx.orExpression());
    let rhs = this.visit(ctx.xorExpression());
    let result: ConstantValue = new InvalidConstantValue();

    try {
      result = ConstantOperations.bitwiseOr(lhs, rhs);
    } catch (err) {
      ctx.parser?.notifyErrorListeners(`${err}`, ctx.start, undefined);
    }

    return result;
  }

  public visitPrimaryExpressionImpl(ctx: PrimaryExpressionContext): ConstantValue {
    if (ctx.scopedName()) {
      let constDecl = DdsIdlScopedNameVisitor.AsConstant(ctx.scopedName(), this.definedInScope, this.msgListener);
      return constDecl.constantValue;
    } else if (ctx.literal()) {
      return new DdsIdlLiteralVisitor(this.msgListener).visit(ctx.literal());
    } else {
      return this.visit(ctx.constantExpression());
    }
  }

  public visitShiftLeftOperationImpl(ctx: ShiftLeftOperationContext): ConstantValue {
    let lhs = this.visit(ctx.shiftExpression());
    let rhs = this.visit(ctx.addExpression());
    let result: ConstantValue = new InvalidConstantValue();

    try {
      result = ConstantOperations.shiftLeft(lhs, rhs);
    } catch (err) {
      ctx.parser?.notifyErrorListeners(`${err}`, ctx.start, undefined);
    }

    return result;
  }

  public visitShiftRightOperationImpl(ctx: ShiftRightOperationContext): ConstantValue {
    let lhs = this.visit(ctx.shiftExpression());
    let rhs = this.visit(ctx.addExpression());
    let result: ConstantValue = new InvalidConstantValue();

    try {
      result = ConstantOperations.shiftRight(lhs, rhs);
    } catch (err) {
      ctx.parser?.notifyErrorListeners(`${err}`, ctx.start, undefined);
    }

    return result;
  }

  public visitSubtractOperationImpl(ctx: SubtractOperationContext): ConstantValue {
    let lhs = this.visit(ctx.addExpression());
    let rhs = this.visit(ctx.multExpression());
    let result: ConstantValue = new InvalidConstantValue();

    try {
      result = ConstantOperations.subtract(lhs, rhs);
    } catch (err) {
      ctx.parser?.notifyErrorListeners(`${err}`, ctx.start, undefined);
    }

    return result;
  }

  public visitUnaryOperationImpl(ctx: UnaryOperationContext): ConstantValue {
    let value = this.visit(ctx.primaryExpression());
    let result: ConstantValue = new InvalidConstantValue();

    try {
      if (ctx.unaryOperator().PLUS()) {
        result = ConstantOperations.unaryPlus(value);
      } else if (ctx.unaryOperator().MINUS()) {
        result = ConstantOperations.unaryMinus(value);
      } else if (ctx.unaryOperator().TILDE()) {
        result = ConstantOperations.not(value);
      }
    } catch (err) {
      ctx.parser?.notifyErrorListeners(`${err}`, ctx.start, undefined);
    }

    return result;
  }

  public visitXorOperationImpl(ctx: XorOperationContext): ConstantValue {
    let lhs = this.visit(ctx.xorExpression());
    let rhs = this.visit(ctx.andExpression());
    let result: ConstantValue = new InvalidConstantValue();

    try {
      result = ConstantOperations.bitwiseXor(lhs, rhs);
    } catch (err) {
      ctx.parser?.notifyErrorListeners(`${err}`, ctx.start, undefined);
    }

    return result;
  }
}

// vim: set ts=2 sw=2 expandtab: