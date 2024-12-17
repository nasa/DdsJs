/**
 * @brief Contains the definition of the `DdsIdlWideStringTypeVisitor` class.
 * @author Rolando J. Nieves
 * @date 2024-11-13 16:45:37
 */

import { StringType, WideBoundedStringType, WideUnboundedStringType } from "../../model/core/typespec";
import { NamingScope } from "../../model/scoping";
import { BoundedWideStringTypeContext } from "../DdsIdlParser";
import { DdsIdlMessageListener } from "../msg-listener";
import { DdsIdlMsgHandlingVisitor } from "./msg-handling-visitor";
import { DdsIdlPositiveIntegerConstantVisitor } from "./positive-integer-constant-visitor";


export class DdsIdlWideStringTypeVisitor extends DdsIdlMsgHandlingVisitor< StringType > {
  public constructor(public readonly definedInScope: NamingScope, msgHandler: DdsIdlMessageListener) {
    super(msgHandler);
  }

  public visitBoundedWideStringTypeImpl(ctx: BoundedWideStringTypeContext): StringType {
    let boundsValue = new DdsIdlPositiveIntegerConstantVisitor(this.definedInScope, this.msgListener).visit(ctx.positiveIntegerConstant());
    if (boundsValue.valid()) {
      return new WideBoundedStringType(this.definedInScope, Number(boundsValue.value).valueOf());
    } else {
      ctx.parser?.notifyErrorListeners(`String bounds expression invalid.`, ctx.positiveIntegerConstant().start, undefined);
      // Bogus type specification that will not be used, as this method raised a
      // compile error.
      return new WideUnboundedStringType(this.definedInScope, );
    }
  }
}

// vim: set ts=2 sw=2 expandtab:
