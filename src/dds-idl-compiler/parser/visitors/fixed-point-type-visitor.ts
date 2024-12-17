/**
 * @brief Contains the definition of the `DdsIdlFixedPointTypeVisitor` class.
 * @author Rolando J. Nieves
 * @date 2024-11-13 16:51:07
 */

import { DoublePrecisionFloatingPointType, TemplateTypeSpec } from "../../model/core/typespec";
import { NamingScope } from "../../model/scoping";
import { FixedPointTypeContext } from "../DdsIdlParser";
import { DdsIdlMessageListener } from "../msg-listener";
import { DdsIdlMsgHandlingVisitor } from "./msg-handling-visitor";


export class DdsIdlFixedPointTypeVisitor extends DdsIdlMsgHandlingVisitor< TemplateTypeSpec > {
  public constructor(public readonly definedInScope: NamingScope, msgHandler: DdsIdlMessageListener) {
    super(msgHandler);

    this.visitFixedPointType = DdsIdlFixedPointTypeVisitor.prototype.visitFixedPointTypeImpl.bind(this);
  }

  public visitFixedPointTypeImpl(ctx: FixedPointTypeContext): TemplateTypeSpec {
    ctx.parser?.notifyErrorListeners("Fixed point types not supported at this time.", ctx.start, undefined);
    // Bogus type specification that will not be used, as this method raised a
    // compile error.
    return new TemplateTypeSpec(this.definedInScope);
  }
}

// vim: set ts=2 sw=2 expandtab:
