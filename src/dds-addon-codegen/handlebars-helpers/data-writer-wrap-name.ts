/**
 * @brief Contains the definition of the `dataWriterWrapName` Handlebars helper.
 * @author Rolando J. Nieves
 * @date 2024-12-09 10:30:56
 */

import Handlebars from "handlebars";
import { Structure } from "../../dds-idl-compiler";


export function dataWriterWrapName(subject: Structure, options: Handlebars.HelperOptions): string {
  let fullyQualified: boolean = ("fullyQualified" in options.hash) && (options.hash["fullyQualified"].toLowerCase() == "yes");

  if (fullyQualified) {
    return `${subject.fullyQualifiedName}DataWriterWrap`;
  } else {
    return `${subject.name}DataWriterWrap`;
  }
}

// vim: set ts=2 sw=2 expandtab:
