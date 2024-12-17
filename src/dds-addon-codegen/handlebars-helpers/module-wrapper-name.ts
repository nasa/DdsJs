/**
 * @brief Contains the definition of the `moduleWrapperName` Handlebars helper.
 * @author Rolando J. Nieves
 * @date 2024-11-19 16:40:04
 */

import { Module } from "../../dds-idl-compiler";


export function moduleWrapperName(subject: Module, options: Handlebars.HelperOptions): string {
  let result = "";
  let fullyQualified: boolean = ("fullyQualified" in options.hash) && (options.hash["fullyQualified"].toLowerCase() == "yes");

  if (fullyQualified) {
    result = `${subject.fullyQualifiedName}::${subject.name}Module`;
  } else {
    result = `${subject.name}Module`;
  }

  return result;
}

// vim: set ts=2 sw=2 expandtab: