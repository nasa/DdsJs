/**
 * @brief Contains the definition of the `DdsIdlSwitchTypeSpecificationVisitor` class.
 * @author Rolando J. Nieves
 * @date 2024-11-15 11:55:37
 */

import { BaseTypeSpec, BasicCharType, BooleanType, OctetType, WideCharType } from "../../model/core/typespec";
import { NamingScope } from "../../model/scoping";
import { SwitchTypeSpecificationContext } from "../DdsIdlParser";
import { DdsIdlMessageListener } from "../msg-listener";
import { DdsIdlIntegerTypeVisitor } from "./integer-type-visitor";
import { DdsIdlMsgHandlingVisitor } from "./msg-handling-visitor";
import { DdsIdlScopedNameVisitor } from "./scoped-name-visitor";


export class DdsIdlSwitchTypeSpecificationVisitor extends DdsIdlMsgHandlingVisitor< BaseTypeSpec > {
  public constructor(public readonly owner: NamingScope, msgHandler: DdsIdlMessageListener) {
    super(msgHandler);

    this.visitSwitchTypeSpecification = DdsIdlSwitchTypeSpecificationVisitor.prototype.visitSwitchTypeSpecificationImpl.bind(this);
  }

  public visitSwitchTypeSpecificationImpl(ctx: SwitchTypeSpecificationContext): BaseTypeSpec {
    if (ctx.integerType()) {
      return new DdsIdlIntegerTypeVisitor(this.msgListener).visit(ctx.integerType());
    }  else if (ctx.charType()) {
      return new BasicCharType();
    } else if (ctx.wideCharType()) {
      return new WideCharType();
    } else if (ctx.booleanType()) {
      return new BooleanType();
    } else if (ctx.octetType()) { 
      return new OctetType();
    } else {
      return DdsIdlScopedNameVisitor.AsTypeSpec(ctx.scopedName(), this.owner, this.msgListener);
    }
  }
}

// vim: set ts=2 sw=2 expandtab:
