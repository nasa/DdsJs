/**
 * @brief Contains the definition of the `PrimitiveTypeVisitor` class.
 * @author Rolando J. Nieves
 * @date 2024-02-26 15:07:59
 */

import { CppNameGen } from "../../codegen";
import { BaseCodecProxy, BooleanProxy, CharProxy } from "../../model";
import { BooleanPrimitiveTypeContext, CharPrimitiveTypeContext, FloatPrimitiveTypeContext, IntPrimitiveTypeContext } from "../DdsJsIdlParser";
import DdsJsIdlVisitor from "../DdsJsIdlVisitor";
import { FloatTypeVisitor } from "./float-type-visitor";
import { IntTypeVisitor } from "./int-type-visitor";


export class PrimitiveTypeVisitor extends DdsJsIdlVisitor< BaseCodecProxy > {
  public constructor(public readonly proxyNameGen: CppNameGen) {
    super();

    this.visitBooleanPrimitiveType = PrimitiveTypeVisitor.prototype.visitBooleanPrimitiveTypeImpl.bind(this);
    this.visitCharPrimitiveType = PrimitiveTypeVisitor.prototype.visitCharPrimitiveTypeImpl.bind(this);
    this.visitFloatPrimitiveType = PrimitiveTypeVisitor.prototype.visitFloatPrimitiveTypeImpl.bind(this);
    this.visitIntPrimitiveType = PrimitiveTypeVisitor.prototype.visitIntPrimitiveTypeImpl.bind(this);
  }

  public visitBooleanPrimitiveTypeImpl(ctx: BooleanPrimitiveTypeContext): BaseCodecProxy {
    return new BooleanProxy(this.proxyNameGen);
  }

  public visitCharPrimitiveTypeImpl(ctx: CharPrimitiveTypeContext): BaseCodecProxy {
    return new CharProxy(this.proxyNameGen);
  }

  public visitFloatPrimitiveTypeImpl(ctx: FloatPrimitiveTypeContext): BaseCodecProxy {
    return new FloatTypeVisitor(this.proxyNameGen).visit(ctx.floatType());
  }

  public visitIntPrimitiveTypeImpl(ctx: IntPrimitiveTypeContext): BaseCodecProxy {
    return new IntTypeVisitor(this.proxyNameGen).visit(ctx.intType());
  }
}

// vim: set ts=2 sw=2 expandtab:
