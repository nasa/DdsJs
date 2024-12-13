/**
 * @brief Contains the definition of the `MemberDefinitionVisitor` class.
 * @author Rolando J. Nieves
 * @date 2024-02-27 15:53:36
 */

import { CppNameGen } from "../../codegen";
import { ArrayProxy, ModuleBundle, StructProxyMember } from "../../model";
import { ArrayMemberDefinitionContext, NonArrayMemberDefinitionContext } from "../DdsJsIdlParser";
import DdsJsIdlVisitor from "../DdsJsIdlVisitor";
import { ArrayDimensionsVisitor } from "./array-dimensions-visitor";
import { TypeDescriptionVisitor } from "./type-description-visitor";


export class MemberDefinitionVisitor extends DdsJsIdlVisitor< StructProxyMember > {
  public constructor(public readonly contextOwner: ModuleBundle, public readonly proxyNameGen: CppNameGen) {
    super();

    this.visitArrayMemberDefinition = MemberDefinitionVisitor.prototype.visitArrayMemberDefinitionImpl.bind(this);
    this.visitNonArrayMemberDefinition = MemberDefinitionVisitor.prototype.visitNonArrayMemberDefinitionImpl.bind(this);
  }

  public visitArrayMemberDefinitionImpl(ctx: ArrayMemberDefinitionContext): StructProxyMember {
    let elementTypeProxy = new TypeDescriptionVisitor(this.contextOwner, this.proxyNameGen).visit(ctx.typeDescription());
    let arrayDims = new ArrayDimensionsVisitor().visit(ctx.arrayDimensions());
    let memberTypeProxy = new ArrayProxy(elementTypeProxy, arrayDims, this.proxyNameGen);
    return new StructProxyMember(ctx.IDENTIFIER().getText(), memberTypeProxy);
  }

  public visitNonArrayMemberDefinitionImpl(ctx: NonArrayMemberDefinitionContext): StructProxyMember {
    let memberTypeProxy = new TypeDescriptionVisitor(this.contextOwner, this.proxyNameGen).visit(ctx.typeDescription());
    return new StructProxyMember(ctx.IDENTIFIER().getText(), memberTypeProxy);
  }
}

// vim: set ts=2 sw=2 expandtab:
