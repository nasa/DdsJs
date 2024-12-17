/**
 * @brief Contains the definition of the `addonModuleName` Handlebars helper.
 * @author Rolando J. Nieves
 * @date 2024-11-22 13:48:07
 */

import { IdlFile } from "../../dds-idl-compiler";


export function addonModuleName(subject: IdlFile): string {
  return subject.idlName.toLowerCase();
}

// vim: set ts=2 sw=2 expandtab:
