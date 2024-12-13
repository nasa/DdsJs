/**
 * @brief Contains the definition of the `TypeAliasVisitor` class.
 * @author Rolando J. Nieves
 * @date 2024-02-26 14:58:54
 */

import { CppNameGen } from "../../codegen";
import { ArrayProxy, ModuleBundle, TypeAliasCodecProxy } from "../../model";
import { ArrayTypedefContext, NonArrayTypedefContext } from "../DdsJsIdlParser";
import DdsJsIdlVisitor from "../DdsJsIdlVisitor";
import { ArrayDimensionsVisitor } from "./array-dimensions-visitor";
import { TypeDescriptionVisitor } from "./type-description-visitor";


export class TypeAliasVisitor extends DdsJsIdlVisitor< TypeAliasCodecProxy > {
  public constructor(public readonly contextOwner: ModuleBundle, public readonly proxyNameGen: CppNameGen) {
    super();

    this.visitArrayTypedef = TypeAliasVisitor.prototype.visitArrayTypedefImpl.bind(this);
    this.visitNonArrayTypedef = TypeAliasVisitor.prototype.visitNonArrayTypedefImpl.bind(this);
  }

  public visitArrayTypedefImpl(ctx: ArrayTypedefContext): TypeAliasCodecProxy {
    let elementProxy = new TypeDescriptionVisitor(this.contextOwner, this.proxyNameGen).visit(ctx.typeDescription());
    let arrayDims = new ArrayDimensionsVisitor().visit(ctx.arrayDimensions());
    let arrayProxy = new ArrayProxy(elementProxy, arrayDims, this.proxyNameGen);
    let result = new TypeAliasCodecProxy(ctx.IDENTIFIER().getText(), arrayProxy, this.contextOwner, this.proxyNameGen);

    return result;
  }

  public visitNonArrayTypedefImpl(ctx: NonArrayTypedefContext): TypeAliasCodecProxy {
    let result = new TypeAliasCodecProxy(
      ctx.IDENTIFIER().getText(),
      new TypeDescriptionVisitor(this.contextOwner, this.proxyNameGen).visit(ctx.typeDescription()),
      this.contextOwner,
      this.proxyNameGen
    );

    return result;
  }
}

// vim: set ts=2 sw=2 expandtab:
