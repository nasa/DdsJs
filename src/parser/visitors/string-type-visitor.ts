/**
 * @brief Contains the definition for the `StringTypeVisitor` class.
 * @author Rolando J. Nieves
 * @date 2024-02-26 16:29:57
 */

import { CppNameGen } from "../../codegen";
import { BaseCodecProxy, BoundedStringProxy, UnboundedStringProxy } from "../../model";
import { BoundedStringTypeContext, UnboundedStringTypeContext } from "../DdsJsIdlParser";
import DdsJsIdlVisitor from "../DdsJsIdlVisitor";
import { SizeDefinitionVisitor } from "./size-definition-visitor";


export class StringTypeVisitor extends DdsJsIdlVisitor< BaseCodecProxy > {
  public constructor(public readonly proxyNameGen: CppNameGen) {
    super();

    this.visitBoundedStringType = StringTypeVisitor.prototype.visitBoundedStringTypeImpl.bind(this);
    this.visitUnboundedStringType = StringTypeVisitor.prototype.visitUnboundedStringTypeImpl.bind(this);
  }

  public visitBoundedStringTypeImpl(ctx: BoundedStringTypeContext): BaseCodecProxy {
    return new BoundedStringProxy(new SizeDefinitionVisitor().visit(ctx.sizeDefinition()), this.proxyNameGen);
  }

  public visitUnboundedStringTypeImpl(ctx: UnboundedStringTypeContext): BaseCodecProxy {
    return new UnboundedStringProxy(this.proxyNameGen);
  }
}

// vim: set ts=2 sw=2 expandtab:
