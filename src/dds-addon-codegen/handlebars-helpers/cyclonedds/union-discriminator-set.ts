/**
 * @brief Contains the definition of the `unionDiscriminatorSet` Handlebars helper for CycloneDDS
 * @author Rolando J. Nieves
 * @date 2024-11-27 10:40:56
 */

import { CaseDefinition, UnionDefinition } from "../../../dds-idl-compiler";
import { cycloneDdsConstantValueLiteral } from "./constant-value-literal";


export function cycloneDdsUnionDiscriminatorSet(subject: UnionDefinition, caseDef: CaseDefinition): string {
  let firstCondition = caseDef.conditions[0];
  return `_d = ${cycloneDdsConstantValueLiteral(firstCondition.conditionConstant)}`;
}

// vim: set ts=2 sw=2 expandtab:
