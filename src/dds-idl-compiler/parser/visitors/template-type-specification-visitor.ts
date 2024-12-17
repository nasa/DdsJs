/**
 * @brief Contains the definition of the `DdsIdlTemplateTypeSpecificationVisitor` class.
 * @author Rolando J. Nieves
 * @date 2024-11-13 17:15:00
 */

import { TemplateTypeSpec } from "../../model/core/typespec";
import { NamingScope } from "../../model/scoping";
import { TemplateTypeSpecificationContext } from "../DdsIdlParser";
import { DdsIdlMessageListener } from "../msg-listener";
import { DdsIdlFixedPointTypeVisitor } from "./fixed-point-type-visitor";
import { DdsIdlMapTypeVisitor } from "./map-type-visitor";
import { DdsIdlMsgHandlingVisitor } from "./msg-handling-visitor";
import { DdsIdlSequenceTypeVisitor } from "./sequence-type-visitor";
import { DdsIdlStringTypeVisitor } from "./string-type-visitor";
import { DdsIdlWideStringTypeVisitor } from "./wide-string-type-visitor";


export class DdsIdlTemplateTypeSpecificationVisitor extends DdsIdlMsgHandlingVisitor< TemplateTypeSpec > {
  public constructor(public readonly definedInScope: NamingScope, msgHandler: DdsIdlMessageListener) {
    super(msgHandler);

    this.visitTemplateTypeSpecification = DdsIdlTemplateTypeSpecificationVisitor.prototype.visitTemplateTypeSpecificationImpl.bind(this);
  }

  public visitTemplateTypeSpecificationImpl(ctx: TemplateTypeSpecificationContext): TemplateTypeSpec {
    if (ctx.sequenceType()) {
      return new DdsIdlSequenceTypeVisitor(this.definedInScope, this.msgListener).visit(ctx.sequenceType());
    } else if (ctx.stringType()) {
      return new DdsIdlStringTypeVisitor(this.definedInScope, this.msgListener).visit(ctx.stringType());
    } else if (ctx.wideStringType()) {
      return new DdsIdlWideStringTypeVisitor(this.definedInScope, this.msgListener).visit(ctx.wideStringType());
    } else if (ctx.fixedPointType()) {
      return new DdsIdlFixedPointTypeVisitor(this.definedInScope, this.msgListener).visit(ctx.fixedPointType());
    } else {
      return new DdsIdlMapTypeVisitor(this.definedInScope, this.msgListener).visit(ctx.mapType());
    }
  }
}

// vim: set ts=2 sw=2 expandtab:
