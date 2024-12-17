/**
 * @brief Contains the definition of the `addonWrapperName` Handlebars helper.
 * @author Rolando J. Nieves
 * @date 2024-11-21 17:38:49
 */

import { IdlFile } from "../../dds-idl-compiler";


export function addonWrapperName(subject: IdlFile): string {
  let capitalizedName = `${subject.idlName}`;
  capitalizedName = capitalizedName.charAt(0).toUpperCase() + capitalizedName.slice(1);
  return `${capitalizedName}Addon`;
}

// vim: set ts=2 sw=2 expandtab:
