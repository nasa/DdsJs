/**
 * @brief Contains the definition of the `SequenceTypeVisitor` class.
 * @author Rolando J. Nieves
 * @date 2024-02-26 15:37:21
 */

import { CppNameGen } from "../../codegen";
import { BaseCodecProxy, BoundedSequenceProxy, ModuleBundle, UnboundedSequenceProxy } from "../../model";
import { BoundedSequenceTypeContext, UnboundedSequenceTypeContext } from "../DdsJsIdlParser";
import DdsJsIdlVisitor from "../DdsJsIdlVisitor";
import { SizeDefinitionVisitor } from "./size-definition-visitor";
import { TypeDescriptionVisitor } from "./type-description-visitor";


export class SequenceTypeVisitor extends DdsJsIdlVisitor< BaseCodecProxy > {
  public constructor(public readonly contextOwner: ModuleBundle, public readonly proxyNameGen: CppNameGen) {
    super();

    this.visitBoundedSequenceType = SequenceTypeVisitor.prototype.visitBoundedSequenceTypeImpl.bind(this);
    this.visitUnboundedSequenceType = SequenceTypeVisitor.prototype.visitUnboundedSequenceTypeImpl.bind(this);
  }

  public visitBoundedSequenceTypeImpl(ctx: BoundedSequenceTypeContext): BaseCodecProxy {
    let elemProxy = new TypeDescriptionVisitor(this.contextOwner, this.proxyNameGen).visit(ctx.typeDescription());
    let sizeDef = new SizeDefinitionVisitor().visit(ctx.sizeDefinition());

    return new BoundedSequenceProxy(elemProxy, sizeDef, this.proxyNameGen);
  }

  public visitUnboundedSequenceTypeImpl(ctx: UnboundedSequenceTypeContext): BaseCodecProxy {
    let elemProxy = new TypeDescriptionVisitor(this.contextOwner, this.proxyNameGen).visit(ctx.typeDescription());

    return new UnboundedSequenceProxy(elemProxy, this.proxyNameGen);
  }
}

// vim: set ts=2 sw=2 expandtab:
