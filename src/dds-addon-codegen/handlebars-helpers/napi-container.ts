/**
 * @brief Contains the definition of the `napiContainer` Handlebars helper.
 * @author Rolando J. Nieves
 * @date 2024-11-19 17:09:16
 */

import { Enumeration, ScopeMember, Structure, UnionDefinition } from "../../dds-idl-compiler";


export function napiContainer(subject: ScopeMember): string {
  let result: string = "::Napi::Unknown";

  if ((subject instanceof Structure) || (subject instanceof UnionDefinition)) {
    result = "::Napi::Object";
  } else if (subject instanceof Enumeration) {
    result = "::Napi::Number";
  }

  return result;
}

// vim: set ts=2 sw=2 expandtab:
