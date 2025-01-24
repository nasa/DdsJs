/**
 * @brief Contains the definition of the `unionFieldSet` Handlebars helper for CoreDX.
 * @author Rolando J. Nieves
 * @date 2025-01-21 15:32:48
 */

import Handlebars from "handlebars";
import { CaseDefinition } from "../../../dds-idl-compiler";


export function coreDxUnionFieldSet(subject: CaseDefinition, options: Handlebars.HelperOptions): string {
  return `${subject.name}(${options.fn(subject)})`;
}

// vim: set ts=2 sw=2 expandtab:
