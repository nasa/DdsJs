/**
 * @brief Contains the definition of the `DdsIdlIntegerTypeVisitor` class.
 * @author Rolando J. Nieves
 * @date 2024-11-01 15:31:50
 */

import { Int16Type, Int32Type, Int64Type, Int8Type, IntegerType, SignedIntegerType, Uint16Type, Uint32Type, Uint64Type, Uint8Type, UnsignedIntegerType } from "../../model/core/typespec";
import { IntegerTypeContext, SignedIntegerTypeContext, UnsignedIntegerTypeContext } from "../DdsIdlParser";
import { DdsIdlMessageListener } from "../msg-listener";
import { DdsIdlMsgHandlingVisitor } from "./msg-handling-visitor";


export class DdsIdlIntegerTypeVisitor extends DdsIdlMsgHandlingVisitor< IntegerType > {
  public constructor(msgHandler: DdsIdlMessageListener) {
    super(msgHandler);

    this.visitIntegerType = DdsIdlIntegerTypeVisitor.prototype.visitIntegerTypeImpl.bind(this);
    this.visitSignedIntegerType = DdsIdlIntegerTypeVisitor.prototype.visitSignedIntegerTypeImpl.bind(this);
    this.visitUnsignedIntegerType = DdsIdlIntegerTypeVisitor.prototype.visitUnsignedIntegerTypeImpl.bind(this);
  }

  public visitIntegerTypeImpl(ctx: IntegerTypeContext): IntegerType {
    if (ctx.signedIntegerType()) {
      return this.visit(ctx.signedIntegerType());
    } else if (ctx.unsignedIntegerType()) {
      return this.visit(ctx.unsignedIntegerType());
    } else {
      ctx.parser?.notifyErrorListeners(`Unknown integer type context "${ctx.getText()}"`, ctx.start, undefined);
      return new Int32Type();
    }
  }

  public visitSignedIntegerTypeImpl(ctx: SignedIntegerTypeContext): SignedIntegerType {
    if (ctx.signedShortIntegerType()) {
      return new Int16Type();
    } else if (ctx.signedLongIntegerType()) {
      return new Int32Type();
    } else if (ctx.signedLongLongIntegerType()) {
      return new Int64Type();
    } else if (ctx.signedTinyIntegerType()) {
      return new Int8Type();
    } else {
      ctx.parser?.notifyErrorListeners(`Unknown signed integer type context "${ctx.getText()}"`, ctx.start, undefined);
      return new Int32Type();
    }
  }

  public visitUnsignedIntegerTypeImpl(ctx: UnsignedIntegerTypeContext): UnsignedIntegerType {
    if (ctx.unsignedShortIntegerType()) {
      return new Uint16Type();
    } else if (ctx.unsignedLongIntegerType()) {
      return new Uint32Type();
    } else if (ctx.unsignedLongLongIntegerType()) {
      return new Uint64Type();
    } else if (ctx.unsignedTinyIntegerType()) {
      return new Uint8Type();
    } else {
      ctx.parser?.notifyErrorListeners(`Unknown unsigned integer type context "${ctx.getText()}"`, ctx.start, undefined);
      return new Uint32Type();
    }
  }
}

// vim: set ts=2 sw=2 expandtab:
