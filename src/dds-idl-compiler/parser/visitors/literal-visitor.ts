/**
 * @brief Contains the definition of the `DdsIdlLiteralVisitor` class.
 * @author Rolando J. Nieves
 * @date 2024-11-15 15:37:58
 */

import { CharacterConstantValue, ConstantValue, IntegerConstantValue, RealConstantValue, StringConstantValue } from "../../model/core";
import { LiteralContext } from "../DdsIdlParser";
import { DdsIdlMessageListener } from "../msg-listener";
import { DdsIdlMsgHandlingVisitor } from "./msg-handling-visitor";


export class DdsIdlLiteralVisitor extends DdsIdlMsgHandlingVisitor< ConstantValue > {
  public constructor(msgHandler: DdsIdlMessageListener) {
    super(msgHandler);

    this.visitLiteral = DdsIdlLiteralVisitor.prototype.visitLiteralImpl.bind(this);
  }

  public visitLiteralImpl(ctx: LiteralContext): ConstantValue {
    if (ctx.INTEGER_LITERAL()) {
      return new IntegerConstantValue(ctx.INTEGER_LITERAL().getText());
    } else if (ctx.HEX_LITERAL()) {
      return new IntegerConstantValue(ctx.HEX_LITERAL().getText());
    } else if (ctx.OCTAL_LITERAL()) {
      return new IntegerConstantValue(ctx.OCTAL_LITERAL().getText());
    } else if (ctx.FLOATING_PT_LITERAL()) {
      return new RealConstantValue(ctx.FLOATING_PT_LITERAL().getText());
    } else if (ctx.CHARACTER_LITERAL()) {
      return new CharacterConstantValue(ctx.CHARACTER_LITERAL().getText());
    } else if (ctx.WIDE_CHARACTER_LITERAL()) {
      return new CharacterConstantValue(ctx.WIDE_CHARACTER_LITERAL().getText());
    } else if (ctx.STRING_LITERAL()) {
      return new StringConstantValue(ctx.STRING_LITERAL().getText());
    } else if (ctx.WIDE_STRING_LITERAL()) {
      return new StringConstantValue(ctx.WIDE_STRING_LITERAL().getText());
    } else {
      ctx.parser?.notifyErrorListeners("Unknown literal value.", ctx.start, undefined);
      return new RealConstantValue(NaN);
    }
  }
}

// vim: set ts=2 sw=2 expandtab:
