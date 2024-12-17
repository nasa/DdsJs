/**
 * @brief Contains the definition of the `DdsIdlArrayDeclaratorVisitor` class.
 * @author Rolando J. Nieves
 * @date 2024-11-12 16:01:33
 */

import { ArrayDeclarator } from "../../model/core";
import { NamingScope } from "../../model/scoping";
import { ArrayDeclaratorContext } from "../DdsIdlParser";
import { DdsIdlMessageListener } from "../msg-listener";
import { DdsIdlIdentifierVisitor } from "./identifier-visitor";
import { DdsIdlMsgHandlingVisitor } from "./msg-handling-visitor";
import { DdsIdlPositiveIntegerConstantVisitor } from "./positive-integer-constant-visitor";


export class DdsIdlArrayDeclaratorVisitor extends DdsIdlMsgHandlingVisitor< ArrayDeclarator > {
  public constructor(public readonly owner: NamingScope, msgHandler: DdsIdlMessageListener) {
    super(msgHandler);

    this.visitArrayDeclarator = DdsIdlArrayDeclaratorVisitor.prototype.visitArrayDeclaratorImpl.bind(this);
  }

  public visitArrayDeclaratorImpl(ctx: ArrayDeclaratorContext): ArrayDeclarator {
    let declIdent = new DdsIdlIdentifierVisitor(this.msgListener).visit(ctx.identifier());
    let dims: number[] = [];

    for (let aFixedDimCtx of ctx.fixedArraySize_list()) {
      let dimValue = new DdsIdlPositiveIntegerConstantVisitor(this.owner, this.msgListener).visit(aFixedDimCtx.positiveIntegerConstant());
      if (dimValue.valid()) {
        dims.push(Number(dimValue.value).valueOf());
      } else {
        ctx.parser?.notifyErrorListeners(`Array dimension expression invalid.`, aFixedDimCtx.start, undefined);
      }
    }

    return new ArrayDeclarator(dims, declIdent, this.owner);
  }
}

// vim: set ts=2 sw=2 expandtab:
