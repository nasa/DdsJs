/**
 * @brief Contains the definition of the `unionFieldGet` Handlebars helper for CoreDX.
 * @author Rolando J. Nieves
 * @date 2025-01-21 15:27:30
 */

import { CaseDefinition } from "../../../dds-idl-compiler";


export function coreDxUnionFieldGet(subject: CaseDefinition): string {
  return `${subject.name}()`;
}

// vim: set ts=2 sw=2 expandtab:
