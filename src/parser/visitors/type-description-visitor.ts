/**
 * @brief Contains the definition for the `TypeDescriptionVisitor` class.
 * @author Rolando J. Nieves
 * @date 2024-02-26 15:03:18
 */

import { CppNameGen } from "../../codegen";
import { BaseCodecProxy, ContainerSearchScope, ModuleBundle, ScopedName } from "../../model";
import { CustomTypeNameDescContext, PrimitiveTypeDescContext, SequenceTypeDescContext, StringTypeDescContext } from "../DdsJsIdlParser";
import DdsJsIdlVisitor from "../DdsJsIdlVisitor";
import { SemanticError } from "../error-listener";
import { PrimitiveTypeVisitor } from "./primitive-type-visitor";
import { SequenceTypeVisitor } from "./sequence-type-visitor";
import { StringTypeVisitor } from "./string-type-visitor";


export class TypeDescriptionVisitor extends DdsJsIdlVisitor< BaseCodecProxy > {
  public constructor(public readonly contextOwner: ModuleBundle, public readonly proxyNameGen: CppNameGen) {
    super();

    this.visitCustomTypeNameDesc = TypeDescriptionVisitor.prototype.visitCustomTypeNameDescImpl.bind(this);
    this.visitPrimitiveTypeDesc = TypeDescriptionVisitor.prototype.visitPrimitiveTypeDescImpl.bind(this);
    this.visitSequenceTypeDesc = TypeDescriptionVisitor.prototype.visitSequenceTypeDescImpl.bind(this);
    this.visitStringTypeDesc = TypeDescriptionVisitor.prototype.visitStringTypeDescImpl.bind(this);
  }

  public visitPrimitiveTypeDescImpl(ctx: PrimitiveTypeDescContext): BaseCodecProxy {
    return new PrimitiveTypeVisitor(this.proxyNameGen).visit(ctx.primitiveType());
  }

  public visitCustomTypeNameDescImpl(ctx: CustomTypeNameDescContext): BaseCodecProxy {
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

  public visitSequenceTypeDescImpl(ctx: SequenceTypeDescContext): BaseCodecProxy {
    return new SequenceTypeVisitor(this.contextOwner, this.proxyNameGen).visit(ctx.sequenceType());
  }

  public visitStringTypeDescImpl(ctx: StringTypeDescContext): BaseCodecProxy {
    return new StringTypeVisitor(this.proxyNameGen).visit(ctx.stringType());
  }
}

// vim: set ts=2 sw=2 expandtab:
