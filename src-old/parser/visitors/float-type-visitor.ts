/**
 * @brief Contains the definition of the `FloatTypeVisitor` class.
 * @author Rolando J. Nieves
 * @date 2024-02-27 16:26:06
 */

import { CppNameGen } from "../../codegen";
import { BaseCodecProxy, DoubleProxy, FloatProxy } from "../../model";
import { DoublePrecisionFloatTypeContext, SinglePrecisionFloatTypeContext } from "../DdsJsIdlParser";
import DdsJsIdlVisitor from "../DdsJsIdlVisitor";


export class FloatTypeVisitor extends DdsJsIdlVisitor< BaseCodecProxy > {
  public constructor(public readonly proxyNameGen: CppNameGen) {
    super();

    this.visitDoublePrecisionFloatType = FloatTypeVisitor.prototype.visitDoublePrecisionFloatTypeImpl.bind(this);
    this.visitSinglePrecisionFloatType = FloatTypeVisitor.prototype.visitSinglePrecisionFloatTypeImpl.bind(this);
  }

  public visitDoublePrecisionFloatTypeImpl(ctx: DoublePrecisionFloatTypeContext): BaseCodecProxy {
    return new DoubleProxy(this.proxyNameGen);
  }

  public visitSinglePrecisionFloatTypeImpl(ctx: SinglePrecisionFloatTypeContext): BaseCodecProxy {
    return new FloatProxy(this.proxyNameGen);
  }
}

// vim: set ts=2 sw=2 expandtab:
