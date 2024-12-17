/**
 * @brief Contains the definition of the `unionFieldGet` Handlebars helper for CycloneDDS.
 * @author Rolando J. Nieves
 * @date 2024-11-25 15:04:30
 */

import { CaseDefinition } from "../../../dds-idl-compiler";


export function cycloneDdsUnionFieldGet(subject: CaseDefinition): string {
  return `_u.${subject.name}`;
}

// vim: set ts=2 sw=2 expandtab:
