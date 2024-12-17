/**
 * @brief Contains the definition of the `DdsIdlMapTypeVisitor` class.
 * @author Rolando J. Nieves
 * @date 2024-11-13 16:57:34
 */

import { TemplateTypeSpec } from "../../model/core/typespec";
import { NamingScope } from "../../model/scoping";
import { BoundedMapTypeContext, UnboundedMapTypeContext } from "../DdsIdlParser";
import { DdsIdlMessageListener } from "../msg-listener";
import { DdsIdlMsgHandlingVisitor } from "./msg-handling-visitor";


export class DdsIdlMapTypeVisitor extends DdsIdlMsgHandlingVisitor< TemplateTypeSpec > {
  public constructor(public readonly definedInScope: NamingScope, msgHandler: DdsIdlMessageListener) {
    super(msgHandler);

    this.visitBoundedMapType = DdsIdlMapTypeVisitor.prototype.reportUnsupported.bind(this);
    this.visitUnboundedMapType = DdsIdlMapTypeVisitor.prototype.reportUnsupported.bind(this);
  }

  public reportUnsupported(ctx: BoundedMapTypeContext | UnboundedMapTypeContext): TemplateTypeSpec {
    ctx.parser?.notifyErrorListeners(`map<> types not supported at this time.`, ctx.start, undefined);
    // Bogus type specification that will not be used, as this method raised a
    // compile error.
    return new TemplateTypeSpec(this.definedInScope);
  }
}

// vim: set ts=2 sw=2 expandtab: