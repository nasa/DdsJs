/**
 * @brief Contains the definition of the `UnionDiscriminatorVisitor` class.
 * @author Rolando J. Nieves
 * @date 2024-03-06 13:56:58
 */

import { CppNameGen } from "../../codegen";
import { BaseCodecProxy, BooleanProxy, CharProxy, ContainerSearchScope, ModuleBundle, ScopedName } from "../../model";
import { BooleanUnionDiscriminatorContext, CharUnionDiscriminatorContext, CustomTypeUnionDiscriminatorContext, IntUnionDiscriminatorContext } from "../DdsJsIdlParser";
import DdsJsIdlVisitor from "../DdsJsIdlVisitor";
import { SemanticError } from "../error-listener";
import { IntTypeVisitor } from "./int-type-visitor";


export class UnionDiscriminatorVisitor extends DdsJsIdlVisitor< BaseCodecProxy > {
  public constructor(public readonly contextOwner: ModuleBundle, public readonly proxyNameGen: CppNameGen) {
    super();

    this.visitBooleanUnionDiscriminator = UnionDiscriminatorVisitor.prototype.visitBooleanUnionDiscriminatorImpl.bind(this);
    this.visitCharUnionDiscriminator = UnionDiscriminatorVisitor.prototype.visitCharUnionDiscriminatorImpl.bind(this);
    this.visitCustomTypeUnionDiscriminator = UnionDiscriminatorVisitor.prototype.visitCustomTypeUnionDiscriminatorImpl.bind(this);
    this.visitIntUnionDiscriminator = UnionDiscriminatorVisitor.prototype.visitIntUnionDiscriminatorImpl.bind(this);
  }

  public visitIntUnionDiscriminatorImpl(ctx: IntUnionDiscriminatorContext): BaseCodecProxy {
    return new IntTypeVisitor(this.proxyNameGen).visit(ctx.intType());
  }

  public visitBooleanUnionDiscriminatorImpl(ctx: BooleanUnionDiscriminatorContext): BaseCodecProxy {
    return new BooleanProxy(this.proxyNameGen);
  }

  public visitCharUnionDiscriminatorImpl(ctx: CharUnionDiscriminatorContext): BaseCodecProxy {
    return new CharProxy(this.proxyNameGen);
  }

  public visitCustomTypeUnionDiscriminatorImpl(ctx: CustomTypeUnionDiscriminatorContext): BaseCodecProxy {
    let typeScopedName = new ScopedName(ctx.scopedName().getText());
    let searchScope = new ContainerSearchScope(typeScopedName, this.contextOwner);
    let result = searchScope.execute();
    if (result instanceof BaseCodecProxy) {
      return result;
    } else {
      let msg = `Unknown type name "${typeScopedName}"`;
      throw new SemanticError(ctx.scopedName().start.line, ctx.scopedName().start.column, msg);
    }
  }
}

// vim: set ts=2 sw=2 expandtab:
