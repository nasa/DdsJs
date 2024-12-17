/**
 * @brief Contains the definition of the `typeSupportWrapName` Handlebars helper.
 * @author Rolando J. Nieves
 * @date 2024-12-06 14:14:47
 */

import Handlebars from "handlebars";
import { Structure } from "../../dds-idl-compiler";


export function typeSupportWrapName(subject: Structure, options: Handlebars.HelperOptions): string {
  let fullyQualified: boolean = ("fullyQualified" in options.hash) && (options.hash["fullyQualified"].toLowerCase() == "yes");

  if (fullyQualified) {
    return `${subject.fullyQualifiedName}TypeSupportWrap`;
  } else {
    return `${subject.name}TypeSupportWrap`;
  }
}

// vim: set ts=2 sw=2 expandtab:
