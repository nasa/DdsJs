/**
 * @brief Contains the definition of the `DdsIdlSequenceTypeVisitor` class.
 * @author Rolando J. Nieves
 * @date 2024-11-13 17:04:43
 */

import { BoundedSequenceType, UnboundedSequenceType } from "../../model/core/typespec";
import { NamingScope } from "../../model/scoping";
import { BoundedSequenceTypeContext, UnboundedSequenceTypeContext } from "../DdsIdlParser";
import { DdsIdlMessageListener } from "../msg-listener";
import { DdsIdlMsgHandlingVisitor } from "./msg-handling-visitor";
import { DdsIdlPositiveIntegerConstantVisitor } from "./positive-integer-constant-visitor";
import { DdsIdlTypeSpecificationVisitor } from "./type-specification-visitor";


export class DdsIdlSequenceTypeVisitor extends DdsIdlMsgHandlingVisitor< UnboundedSequenceType | BoundedSequenceType > {
  public constructor(public readonly definedInScope: NamingScope, msgHandler: DdsIdlMessageListener) {
    super(msgHandler);

    this.visitBoundedSequenceType = DdsIdlSequenceTypeVisitor.prototype.visitBoundedSequenceTypeImpl.bind(this);
    this.visitUnboundedSequenceType = DdsIdlSequenceTypeVisitor.prototype.visitUnboundedSequenceTypeImpl.bind(this);
  }

  public visitBoundedSequenceTypeImpl(ctx: BoundedSequenceTypeContext): BoundedSequenceType {
    let elemType = new DdsIdlTypeSpecificationVisitor(this.definedInScope, this.msgListener).visit(ctx.typeSpecification());
    let boundsValue = new DdsIdlPositiveIntegerConstantVisitor(this.definedInScope, this.msgListener).visit(ctx.positiveIntegerConstant());
    if (boundsValue.valid()) {
      return new BoundedSequenceType(this.definedInScope, elemType, Number(boundsValue.value).valueOf());
    } else {
      ctx.parser?.notifyErrorListeners(`Sequence bounds expression invalid.`, ctx.positiveIntegerConstant().start, undefined);
      return new BoundedSequenceType(this.definedInScope, elemType, NaN);
    }
  }

  public visitUnboundedSequenceTypeImpl(ctx: UnboundedSequenceTypeContext): UnboundedSequenceType {
    let elemType = new DdsIdlTypeSpecificationVisitor(this.definedInScope, this.msgListener).visit(ctx.typeSpecification());
    return new UnboundedSequenceType(this.definedInScope, elemType);
  }
}

// vim: set ts=2 sw=2 expandtab:
