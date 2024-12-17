/**
 * @brief Contains the definition of the `caseFactoryMethod` Handlebars helper.
 * @author Rolando J. Nieves
 * @date 2024-11-21 16:16:14
 */

import { CaseDefinition } from "../../dds-idl-compiler";


export function caseFactoryMethod(caseDef: CaseDefinition): string {
  let capitalizedName = `${caseDef.name}`;
  capitalizedName = capitalizedName.charAt(0).toUpperCase() + capitalizedName.slice(1);
  return `${capitalizedName}NewInstance`;
}

// vim: set ts=2 sw=2 expandtab:
