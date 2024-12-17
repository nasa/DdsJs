/**
 * @brief Contains the definition of the `DdsIdlFloatingPointTypeVisitor` class.
 * @author Rolando J. Nieves
 * @date 2024-11-13 16:05:11
 */

import { DoublePrecisionFloatingPointType, FloatingPointType, SinglePrecisionFloatingPointType } from "../../model/core/typespec";
import { QuadPrecisionFloatingPointTypeContext } from "../DdsIdlParser";
import { DdsIdlMessageListener } from "../msg-listener";
import { DdsIdlMsgHandlingVisitor } from "./msg-handling-visitor";


export class DdsIdlFloatingPointTypeVisitor extends DdsIdlMsgHandlingVisitor< FloatingPointType > {
  public constructor(msgHandler: DdsIdlMessageListener) {
    super(msgHandler);

    this.visitSinglePrecisionFloatingPointType = () => new SinglePrecisionFloatingPointType();
    this.visitDoublePrecisionFloatingPointType = () => new DoublePrecisionFloatingPointType();
    this.visitQuadPrecisionFloatingPointType = DdsIdlFloatingPointTypeVisitor.prototype.visitQuadPrecisionFloatingPointTypeImpl.bind(this);
  }

  public visitQuadPrecisionFloatingPointTypeImpl(ctx: QuadPrecisionFloatingPointTypeContext): FloatingPointType {
    this.msgListener.warning(`Quad-precision floating point types not fully supported; demoting to double-precision`, ctx.start);
    return new DoublePrecisionFloatingPointType();
  }
}

// vim: set ts=2 sw=2 expandtab:
