/**
 * @brief Contains the definition of the `unionDiscriminatorSet` Handlebars helper for CoreDX.
 * @author Rolando J. Nieves
 * @date 2025-01-21 14:57:26
 */

import { CaseDefinition, UnionDefinition } from "../../../dds-idl-compiler";
import { coreDxConstantValueLiteral } from "./constant-value-literal";


export function coreDxUnionDiscriminatorSet(subject: UnionDefinition, caseDef: CaseDefinition): string {
  let firstCondition = caseDef.conditions[0];
  return `discriminator(${coreDxConstantValueLiteral(firstCondition.conditionConstant)})`;
}

// vim: set ts=2 sw=2 expandtab:
