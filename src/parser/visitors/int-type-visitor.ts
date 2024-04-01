/**
 * @brief Contains the definition of the `IntTypeVisitor` class.
 * @author Rolando J. Nieves
 * @date 2024-02-26 15:10:08
 */

import { CppNameGen } from "../../codegen";
import { BaseCodecProxy, LongProxy, LongLongProxy, OctetProxy, ShortProxy, UnsignedLongProxy, UnsignedShortProxy, UnsignedLongLongProxy } from "../../model";
import { LongIntTypeContext, LongLongIntTypeContext, OctetIntTypeContext, ShortIntTypeContext, UnsignedLongIntTypeContext, UnsignedLongLongIntTypeContext, UnsignedShortIntTypeContext } from "../DdsJsIdlParser";
import DdsJsIdlVisitor from "../DdsJsIdlVisitor";


export class IntTypeVisitor extends DdsJsIdlVisitor< BaseCodecProxy > {
  public constructor(public readonly proxyNameGen: CppNameGen) {
    super();

    this.visitOctetIntType = IntTypeVisitor.prototype.visitOctetIntTypeImpl.bind(this);
    this.visitLongIntType = IntTypeVisitor.prototype.visitLongIntTypeImpl.bind(this);
    this.visitLongLongIntType = IntTypeVisitor.prototype.visitLongLongIntTypeImpl.bind(this);
    this.visitShortIntType = IntTypeVisitor.prototype.visitShortIntTypeImpl.bind(this);
    this.visitUnsignedLongIntType = IntTypeVisitor.prototype.visitUnsignedLongIntTypeImpl.bind(this);
    this.visitUnsignedLongLongIntType = IntTypeVisitor.prototype.visitUnsignedLongLongIntTypeImpl.bind(this);
    this.visitUnsignedShortIntType = IntTypeVisitor.prototype.visitUnsignedShortIntTypeImpl.bind(this);
  }

  public visitOctetIntTypeImpl(ctx: OctetIntTypeContext): BaseCodecProxy {
    return new OctetProxy(this.proxyNameGen);
  }

  public visitLongIntTypeImpl(ctx: LongIntTypeContext): BaseCodecProxy {
    return new LongProxy(this.proxyNameGen);
  }

  public visitLongLongIntTypeImpl(ctx: LongLongIntTypeContext): BaseCodecProxy {
    return new LongLongProxy(this.proxyNameGen);
  }

  public visitShortIntTypeImpl(ctx: ShortIntTypeContext): BaseCodecProxy {
    return new ShortProxy(this.proxyNameGen);
  }

  public visitUnsignedLongIntTypeImpl(ctx: UnsignedLongIntTypeContext): BaseCodecProxy {
    return new UnsignedLongProxy(this.proxyNameGen);
  }

  public visitUnsignedLongLongIntTypeImpl(ctx: UnsignedLongLongIntTypeContext): BaseCodecProxy {
    return new UnsignedLongLongProxy(this.proxyNameGen);
  }

  public visitUnsignedShortIntTypeImpl(ctx: UnsignedShortIntTypeContext): BaseCodecProxy {
    return new UnsignedShortProxy(this.proxyNameGen);
  }
}

// vim: set ts=2 sw=2 expandtab:
