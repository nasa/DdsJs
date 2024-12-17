/**
 * @brief Contains the definition of the `DdsIdlBaseTypeSpecificationVisitor` class.
 * @author Rolando J. Nieves
 * @date 2024-11-04 16:04:10
 */

import { BaseTypeSpec, BasicCharType, BooleanType, Int32Type, OctetType, WideCharType } from "../../model/core/typespec";
import { BaseTypeSpecificationContext } from "../DdsIdlParser";
import { DdsIdlMessageListener } from "../msg-listener";
import { DdsIdlFloatingPointTypeVisitor } from "./floating-point-type-visitor";
import { DdsIdlIntegerTypeVisitor } from "./integer-type-visitor";
import { DdsIdlMsgHandlingVisitor } from "./msg-handling-visitor";


export class DdsIdlBaseTypeSpecificationVisitor extends DdsIdlMsgHandlingVisitor< BaseTypeSpec > {
  public constructor(msgHandler: DdsIdlMessageListener) {
    super(msgHandler);

    this.visitBaseTypeSpecification = DdsIdlBaseTypeSpecificationVisitor.prototype.visitBaseTypeSpecificationImpl.bind(this);
  }

  public visitBaseTypeSpecificationImpl(ctx: BaseTypeSpecificationContext): BaseTypeSpec {
    if (ctx.integerType()) {
      return new DdsIdlIntegerTypeVisitor(this.msgListener).visit(ctx.integerType());
    } else if (ctx.floatingPointType()) {
      return new DdsIdlFloatingPointTypeVisitor(this.msgListener).visit(ctx.floatingPointType());
    } else if (ctx.charType()) {
      return new BasicCharType();
    } else if (ctx.wideCharType()) {
      return new WideCharType();
    } else if (ctx.booleanType()) {
      return new BooleanType();
    } else if (ctx.octetType()) { 
      return new OctetType();
    } else {
      ctx.parser?.notifyErrorListeners(`Unknown type specification "${ctx.getText()}"`, ctx.start, undefined);
      return new Int32Type();
    }
  }
}

// vim: set ts=2 sw=2 expandtab:
