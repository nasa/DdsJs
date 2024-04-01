/**
 * @brief Contains the definition of the `ArrayDimensionsVisitor` class.
 * @author Rolando J. Nieves
 * @date 2024-02-27 15:05:45
 */

import { ArrayDimensionsContext } from "../DdsJsIdlParser";
import DdsJsIdlVisitor from "../DdsJsIdlVisitor";
import { SizeDefinitionVisitor } from "./size-definition-visitor";


export class ArrayDimensionsVisitor extends DdsJsIdlVisitor< string[] > {
  public constructor() {
    super();

    this.visitArrayDimensions = ArrayDimensionsVisitor.prototype.visitArrayDimensionsImpl.bind(this);
  }

  public visitArrayDimensionsImpl(ctx: ArrayDimensionsContext): string[] {
    let result: string[] = [];

    for (let aSizeDefCtx of ctx.sizeDefinition_list()) {
      result.push(new SizeDefinitionVisitor().visit(aSizeDefCtx));
    }

    return result;
  }
}

// vim: set ts=2 sw=2 expandtab:
