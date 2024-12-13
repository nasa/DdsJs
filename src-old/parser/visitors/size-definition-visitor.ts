/**
 * @brief Contains the definition of the `SizeDefinitionVisitor` class.
 * @author Rolando J. Nieves
 * @date 2024-02-26 15:41:35
 */

import { SizeAsConstantDefinitionContext, SizeAsLiteralValueContext } from "../DdsJsIdlParser";
import DdsJsIdlVisitor from "../DdsJsIdlVisitor";


export class SizeDefinitionVisitor extends DdsJsIdlVisitor< string > {
  public constructor() {
    super();

    this.visitSizeAsConstantDefinition = SizeDefinitionVisitor.prototype.visitSizeAsConstantDefinitionImpl.bind(this);
    this.visitSizeAsLiteralValue = SizeDefinitionVisitor.prototype.visitSizeAsLiteralValueImpl.bind(this);
  }

  public visitSizeAsConstantDefinitionImpl(ctx: SizeAsConstantDefinitionContext): string {
    return ctx.scopedName().getText();
  }

  public visitSizeAsLiteralValueImpl(ctx: SizeAsLiteralValueContext): string {
    return ctx.NATURAL_NUMBER().getText();
  }
}

// vim: set ts=2 sw=2 expandtab:
