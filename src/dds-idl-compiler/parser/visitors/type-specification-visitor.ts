/**
 * @brief Contains the definition of the `DdsIdlTypeSpecificationVisitor` class.
 * @author Rolando J. Nieves
 * @date 2024-11-13 17:11:24
 */

import { BaseTypeSpec } from "../../model/core/typespec";
import { NamingScope } from "../../model/scoping";
import { TypeSpecificationContext } from "../DdsIdlParser";
import { DdsIdlMessageListener } from "../msg-listener";
import { DdsIdlMsgHandlingVisitor } from "./msg-handling-visitor";
import { DdsIdlSimpleTypeSpecificationVisitor } from "./simple-type-specification-visitor";
import { DdsIdlTemplateTypeSpecificationVisitor } from "./template-type-specification-visitor";


export class DdsIdlTypeSpecificationVisitor extends DdsIdlMsgHandlingVisitor< BaseTypeSpec > {
  public constructor(public readonly definedInScope: NamingScope, msgHandler: DdsIdlMessageListener) {
    super(msgHandler);

    this.visitTypeSpecification = DdsIdlTypeSpecificationVisitor.prototype.visitTypeSpecificationImpl.bind(this);
  }

  public visitTypeSpecificationImpl(ctx: TypeSpecificationContext): BaseTypeSpec {
    if (ctx.simpleTypeSpecification()) {
      return new DdsIdlSimpleTypeSpecificationVisitor(this.definedInScope, this.msgListener).visit(ctx.simpleTypeSpecification());
    } else {
      return new DdsIdlTemplateTypeSpecificationVisitor(this.definedInScope, this.msgListener).visit(ctx.templateTypeSpecification());
    }
  }
}

// vim: set ts=2 sw=2 expandtab:
