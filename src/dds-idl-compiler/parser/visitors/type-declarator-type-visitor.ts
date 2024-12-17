/**
 * @brief Contains the definition of the `DdsIdlTypeDeclaratorTypeVisitor` class.
 * @author Rolando J. Nieves
 * @date 2024-11-01 14:23:07
 */

import { BaseTypeSpec } from "../../model/core/typespec";
import { NamingScope } from "../../model/scoping";
import { TypeDeclaratorTypeContext } from "../DdsIdlParser";
import { DdsIdlMessageListener } from "../msg-listener";
import { DdsIdlMsgHandlingVisitor } from "./msg-handling-visitor";
import { DdsIdlSimpleTypeSpecificationVisitor } from "./simple-type-specification-visitor";
import { DdsIdlTemplateTypeSpecificationVisitor } from "./template-type-specification-visitor";


export class DdsIdlTypeDeclaratorTypeVisitor extends DdsIdlMsgHandlingVisitor< BaseTypeSpec > {
  public constructor(public readonly referencedIn: NamingScope, msgHandler: DdsIdlMessageListener) {
    super(msgHandler);

    this.visitTypeDeclaratorType = DdsIdlTypeDeclaratorTypeVisitor.prototype.visitTypeDeclaratorTypeImpl.bind(this);
  }

  public visitTypeDeclaratorTypeImpl(ctx: TypeDeclaratorTypeContext): BaseTypeSpec {
    if (ctx.simpleTypeSpecification()) {
      return new DdsIdlSimpleTypeSpecificationVisitor(this.referencedIn, this.msgListener).visit(ctx.simpleTypeSpecification());
    } else if (ctx.templateTypeSpecification()) {
      return new DdsIdlTemplateTypeSpecificationVisitor(this.referencedIn, this.msgListener).visit(ctx.templateTypeSpecification());
    } else {
      ctx.parser?.notifyErrorListeners(`In-line constructed type aliasing not supported at this time.`, ctx.constructedTypeDeclaration().start, undefined);
      return new BaseTypeSpec();
    }
  }
}

// vim: set ts=2 sw=2 expandtab:
