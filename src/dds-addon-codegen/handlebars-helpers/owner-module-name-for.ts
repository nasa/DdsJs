/**
 * @brief Contains the definition of the `ownerModuleNameFor` Handlebars helper.
 * @author Rolando J. Nieves
 * @date 2024-11-25 13:55:20
 */

import { ScopeMember } from "../../dds-idl-compiler";
import Handlebars from "handlebars";


export function ownerModuleNameFor(subject: ScopeMember): string {
  let ownerNameParts: string[] = subject.owningScope?.scopedName.parts.map((aPart) => aPart.name.value) || [];
  // Remove the part for the top-level scope
  ownerNameParts.splice(0, 1);
  return ownerNameParts.join(".");
}

// vim: set ts=2 sw=2 expandtab:
