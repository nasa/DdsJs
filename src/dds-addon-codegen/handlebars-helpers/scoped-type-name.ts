/**
 * @brief Contains the definition of the `scopedTypeName` Handlebars helper.
 * @author Rolando J. Nieves
 * @date 2024-12-06 16:14:41
 */

import { Structure } from "../../dds-idl-compiler";


export function scopedTypeName(subject: Structure): string {
  // fullyQualifiedName always prepends the root scope "::" but DDS type names
  // don't include that.
  return subject.fullyQualifiedName.substring(2);
}

// vim: set ts=2 sw=2 expandtab:
