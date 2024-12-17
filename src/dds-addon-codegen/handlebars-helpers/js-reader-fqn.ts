/**
 * @brief Contains the definition of the `jsReaderFqn` Handlebars helper.
 * @author Rolando J. Nieves
 * @date 2024-12-06 16:20:54
 */

import { Structure } from "../../dds-idl-compiler";


export function jsReaderFqn(subject: Structure): string {
  let nameParts = subject.scopedName.parts.map((aPart) => aPart.name.value);
  // Remove the top-level, zero-length-name scope.
  nameParts.shift();
  return nameParts.join(".") + "DataReader";
}

// vim: set ts=2 sw=2 expandtab:
