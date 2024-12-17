/**
 * @brief Contains the definition of the `dataReaderWrapName` Handlebars helper.
 * @author Rolando J. Nieves
 * @date 2024-12-09 14:31:18
 */

import Handlebars from "handlebars";
import { Structure } from "../../dds-idl-compiler";


export function dataReaderWrapName(subject: Structure, options: Handlebars.HelperOptions): string {
  let fullyQualified: boolean = ("fullyQualified" in options.hash) && (options.hash["fullyQualified"].toLowerCase() == "yes");

  if (fullyQualified) {
    return `${subject.fullyQualifiedName}DataReaderWrap`;
  } else {
    return `${subject.name}DataReaderWrap`;
  }
}

// vim: set ts=2 sw=2 expandtab:
