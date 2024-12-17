/**
 * @brief Contains the definition of the `unionFieldSet` Handlebars helper for CycloneDDS.
 * @author Rolando J. Nieves
 * @date 2024-11-25 15:59:36
 */

import Handlebars from "handlebars";
import { CaseDefinition } from "../../../dds-idl-compiler";


export function cycloneDdsUnionFieldSet(subject: CaseDefinition, options: Handlebars.HelperOptions): string {
  return `_u.${subject.name} = ${options.fn(subject)}`;
}

// vim: set ts=2 sw=2 expandtab:
