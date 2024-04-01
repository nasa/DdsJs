/**
 * @brief Contains the definition of the `EnumLiteralVisitor` class.
 * @author Rolando J. Nieves
 * @date 2024-02-27 15:34:59
 */

import { AutoNumberedContext, ManualNumberedContext } from "../DdsJsIdlParser";
import DdsJsIdlVisitor from "../DdsJsIdlVisitor";


export class EnumLiteralVisitor extends DdsJsIdlVisitor< string > {
  public constructor() {
    super();

    this.visitAutoNumbered = EnumLiteralVisitor.prototype.visitAutoNumberedImpl.bind(this);
    this.visitManualNumbered = EnumLiteralVisitor.prototype.visitManualNumberedImpl.bind(this);
  }

  public visitAutoNumberedImpl(ctx: AutoNumberedContext): string {
    return ctx.IDENTIFIER().getText();
  }

  public visitManualNumberedImpl(ctx: ManualNumberedContext): string {
    return ctx.IDENTIFIER().getText();
  }
}

// vim: set ts=2 sw=2 expandtab:
