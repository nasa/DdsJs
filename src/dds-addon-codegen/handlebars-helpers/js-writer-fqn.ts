/**
 * @brief Contains the definition of the `jsWriterFqn` Handlebars helper.
 * @author Rolando J. Nieves
 * @date 2024-12-06 16:24:27
 */

import { Structure } from "../../dds-idl-compiler";


export function jsWriterFqn(subject: Structure): string {
  let nameParts = subject.scopedName.parts.map((aPart) => aPart.name.value);
  // Remove the top-level, zero-length-name scope.
  nameParts.shift();
  return nameParts.join(".") + "DataWriter";
}

// vim: set ts=2 sw=2 expandtab:
