/**
 * @brief Contains the definition of the `DdsIdlStringTypeVisitor` class.
 * @author Rolando J. Nieves
 * @date 2024-11-13 16:28:52
 */

import { BasicBoundedStringType, BasicUnboundedStringType, StringType, UnboundedStringType } from "../../model/core/typespec";
import { NamingScope } from "../../model/scoping";
import { BoundedStringTypeContext } from "../DdsIdlParser";
import { DdsIdlMessageListener } from "../msg-listener";
import { DdsIdlMsgHandlingVisitor } from "./msg-handling-visitor";
import { DdsIdlPositiveIntegerConstantVisitor } from "./positive-integer-constant-visitor";


export class DdsIdlStringTypeVisitor extends DdsIdlMsgHandlingVisitor< StringType > {
  public constructor(public readonly definedInScope: NamingScope, msgHandler: DdsIdlMessageListener) {
    super(msgHandler);

    this.visitBoundedStringType = DdsIdlStringTypeVisitor.prototype.visitBoundedStringTypeImpl.bind(this);
    this.visitUnboundedStringType = () => new BasicUnboundedStringType(definedInScope);
  }

  public visitBoundedStringTypeImpl(ctx: BoundedStringTypeContext): StringType {
    let boundsValue = new DdsIdlPositiveIntegerConstantVisitor(this.definedInScope, this.msgListener).visit(ctx.positiveIntegerConstant());
    if (boundsValue.valid()) {
      return new BasicBoundedStringType(this.definedInScope, Number(boundsValue.value).valueOf());
    } else {
      ctx.parser?.notifyErrorListeners(`String bounds expression invalid.`, ctx.positiveIntegerConstant().start, undefined);
      // Bogus type spec definition that will not be used because this branch
      // raised a compile error.
      return new UnboundedStringType(this.definedInScope, 8);
    }
  }
}

// vim: set ts=2 sw=2 expandtab: