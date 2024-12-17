/**
 * @brief Contains the definition of the `DdsIdlSimpleTypeSpecificationVisitor` class.
 * @author Rolando J. Nieves
 * @date 2024-11-01 14:49:10
 */

import { Identifier } from "../../model/core";
import { BaseTypeSpec, Int32Type } from "../../model/core/typespec";
import { NamingScope, ScopeMember } from "../../model/scoping";
import { SimpleTypeSpecificationContext } from "../DdsIdlParser";
import { DdsIdlMessageListener, exceptionMessage } from "../msg-listener";
import { DdsIdlBaseTypeSpecificationVisitor } from "./base-type-specification-visitor";
import { DdsIdlMsgHandlingVisitor } from "./msg-handling-visitor";
import { DdsIdlScopedNameVisitor } from "./scoped-name-visitor";


export class DdsIdlSimpleTypeSpecificationVisitor extends DdsIdlMsgHandlingVisitor< BaseTypeSpec > {
  public constructor(public readonly referencedIn: NamingScope, msgHandler: DdsIdlMessageListener) {
    super(msgHandler);

    this.visitSimpleTypeSpecification = DdsIdlSimpleTypeSpecificationVisitor.prototype.visitSimpleTypeSpecificationImpl.bind(this);
  }

  public visitSimpleTypeSpecificationImpl(ctx: SimpleTypeSpecificationContext): BaseTypeSpec {
    if (ctx.baseTypeSpecification()) {
      return new DdsIdlBaseTypeSpecificationVisitor(this.msgListener).visit(ctx.baseTypeSpecification());
    } else {
      try {
        return DdsIdlScopedNameVisitor.AsTypeSpec(ctx.scopedName(), this.referencedIn, this.msgListener);
      } catch (err) {
        ctx.parser?.notifyErrorListeners(exceptionMessage(err), ctx.scopedName().start, undefined);
        return new BaseTypeSpec();
      }
    }
  }
}

// vim: set ts=2 sw=2 expandtab:
