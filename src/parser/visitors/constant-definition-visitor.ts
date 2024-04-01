/**
 * @brief Contains the definition of the `ConstantDefinitionVisitor` class.
 * @author Rolando J. Nieves
 * @date 2024-02-26 16:49:38
 */

import { CppNameGen } from "../../codegen";
import { BaseCodecProxy, ConstantDefinition, ContainerSearchScope, ModuleBundle, ScopedName } from "../../model";
import { CustomTypeValueConstantContext, PrimitiveValueConstantContext, StringValueConstantContext } from "../DdsJsIdlParser";
import DdsJsIdlVisitor from "../DdsJsIdlVisitor";
import { SemanticError } from "../error-listener";
import { PrimitiveTypeVisitor } from "./primitive-type-visitor";
import { StringTypeVisitor } from "./string-type-visitor";


export class ConstantDefinitionVisitor extends DdsJsIdlVisitor< ConstantDefinition > {
  public constructor(public readonly contextOwner: ModuleBundle, public readonly proxyNameGen: CppNameGen) {
    super();

    this.visitCustomTypeValueConstant = ConstantDefinitionVisitor.prototype.visitCustomTypeValueConstantImpl.bind(this);
    this.visitPrimitiveValueConstant = ConstantDefinitionVisitor.prototype.visitPrimitiveValueConstantImpl.bind(this);
    this.visitStringValueConstant = ConstantDefinitionVisitor.prototype.visitStringValueConstantImpl.bind(this);
  }

  public visitCustomTypeValueConstantImpl(ctx: CustomTypeValueConstantContext): ConstantDefinition {
    let typeScopedName = new ScopedName(ctx.scopedName().getText());
    let searchScope = new ContainerSearchScope(typeScopedName, this.contextOwner);
    let result = searchScope.execute();
    if (result instanceof BaseCodecProxy) {
      return new ConstantDefinition(ctx.IDENTIFIER().getText(), result, this.contextOwner);
    } else {
      let msg = `Unknown type name "${ctx.scopedName().getText()}"`;
      throw new SemanticError(ctx.scopedName().start.line, ctx.scopedName().start.column, msg);
    }
  }

  public visitPrimitiveValueConstantImpl(ctx: PrimitiveValueConstantContext): ConstantDefinition {
    return new ConstantDefinition(
      ctx.IDENTIFIER().getText(),
      new PrimitiveTypeVisitor(this.proxyNameGen).visit(ctx.primitiveType()),
      this.contextOwner
    );
  }

  public visitStringValueConstantImpl(ctx: StringValueConstantContext): ConstantDefinition {
    return new ConstantDefinition(
      ctx.IDENTIFIER().getText(),
      new StringTypeVisitor(this.proxyNameGen).visit(ctx.stringType()),
      this.contextOwner
    );
  }
}

// vim: set ts=2 sw=2 expandtab:
