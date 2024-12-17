/**
 * @brief Contains the definition of the `innerStructName` Handlebars helper.
 * @author Rolando J. Nieves
 * @date 2024-11-20 16:27:11
 */

import { ScopeMember } from "../../dds-idl-compiler";


export function innerStructName(member: ScopeMember): string {
  let capitalizedName = `${member.name}`;
  capitalizedName = capitalizedName.charAt(0).toUpperCase() + capitalizedName.slice(1);
  return `${capitalizedName}Field`;
}

// vim: set ts=2 sw=2 expandtab:
