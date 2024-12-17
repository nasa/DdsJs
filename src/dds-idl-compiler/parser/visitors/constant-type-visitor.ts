/**
 * @brief Contains the definition of the `DdsIdlConstantTypeVisitor` class.
 * @author Rolando J. Nieves
 * @date 2024-11-05 15:21:51
 */

import { BaseTypeSpec, BasicCharType, BooleanType, DoublePrecisionFloatingPointType, OctetType, WideCharType } from "../../model/core/typespec";
import { NamingScope } from "../../model/scoping";
import { ConstantTypeContext } from "../DdsIdlParser";
import { DdsIdlMessageListener, exceptionMessage } from "../msg-listener";
import { DdsIdlFloatingPointTypeVisitor } from "./floating-point-type-visitor";
import { DdsIdlIntegerTypeVisitor } from "./integer-type-visitor";
import { DdsIdlMsgHandlingVisitor } from "./msg-handling-visitor";
import { DdsIdlScopedNameVisitor } from "./scoped-name-visitor";
import { DdsIdlStringTypeVisitor } from "./string-type-visitor";


export class DdsIdlConstantTypeVisitor extends DdsIdlMsgHandlingVisitor< BaseTypeSpec > {
  public constructor(public readonly definedInScope: NamingScope, msgHandler: DdsIdlMessageListener) {
    super(msgHandler);

    this.visitConstantType = DdsIdlConstantTypeVisitor.prototype.visitConstantTypeImpl.bind(this);
  }

  public visitConstantTypeImpl(ctx: ConstantTypeContext): BaseTypeSpec {
    if (ctx.integerType()) {
      return new DdsIdlIntegerTypeVisitor(this.msgListener).visit(ctx.integerType());
    } else if (ctx.floatingPointType()) {
      return new DdsIdlFloatingPointTypeVisitor(this.msgListener).visit(ctx.floatingPointType());
    } else if (ctx.fixedPointConstantType()) {
      this.msgListener.warning(`Fixed point types not strictly supported; substituting to double-precision floating point.`, ctx.fixedPointConstantType().start);
      return new DoublePrecisionFloatingPointType();
    } else if (ctx.charType()) {
      return new BasicCharType();
    } else if (ctx.wideCharType()) {
      return new WideCharType();
    } else if (ctx.booleanType()) {
      return new BooleanType();
    } else if (ctx.octetType()) {
      return new OctetType();
    } else if (ctx.stringType()) {
      return new DdsIdlStringTypeVisitor(this.definedInScope, this.msgListener).visit(ctx.stringType());
    } else if (ctx.wideStringType()) {
      return new DdsIdlStringTypeVisitor(this.definedInScope, this.msgListener).visit(ctx.wideStringType());
    } else if (ctx.scopedName()) {
      try {
        return DdsIdlScopedNameVisitor.AsTypeSpec(ctx.scopedName(), this.definedInScope, this.msgListener);
      } catch (err) {
        ctx.parser?.notifyErrorListeners(exceptionMessage(err), ctx.scopedName().start, undefined);
        return new BaseTypeSpec();
      }
    } else {
      ctx.parser?.notifyErrorListeners(`Unsupported constant type "${ctx.getText()}"`, ctx.start, undefined);
      return new BaseTypeSpec();
    }
  }
}

// vim: set ts=2 sw=2 expandtab:
