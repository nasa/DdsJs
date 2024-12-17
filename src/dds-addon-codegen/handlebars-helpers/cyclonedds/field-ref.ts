/**
 * @brief Contains the definition of the `fieldRef` Handlebars helper for CycloneDDS.
 * @author Rolando J. Nieves
 * @date 2024-11-25 13:38:23
 */

import { StructMember } from "../../../dds-idl-compiler";


export function cycloneDdsFieldRef(subject: StructMember, options: Handlebars.HelperOptions): string {
  let constRef: boolean = ("const" in options.hash) && (options.hash["const"].toLowerCase() == "yes");

  return `${subject.name}`;
}

// vim: set ts=2 sw=2 expandtab:
