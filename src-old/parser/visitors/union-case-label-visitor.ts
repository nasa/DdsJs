/**
 * @brief Contains the definition of the `UnionCaseLabelVisitor` class.
 * @author Rolando J. Nieves
 * @date 2024-03-06 17:19:27
 */

import { UnionCaseLabelContext } from "../DdsJsIdlParser";
import DdsJsIdlVisitor from "../DdsJsIdlVisitor";


export class UnionCaseLabelVisitor extends DdsJsIdlVisitor< string > {
  public constructor() {
    super();

    this.visitUnionCaseLabel = UnionCaseLabelVisitor.prototype.visitUnionCaseLabelImpl.bind(this);
  }

  public visitUnionCaseLabelImpl(ctx: UnionCaseLabelContext): string {
    return ctx.unionCaseConstantExpr().getText();
  }
}

// vim: set ts=2 sw=2 expandtab:
