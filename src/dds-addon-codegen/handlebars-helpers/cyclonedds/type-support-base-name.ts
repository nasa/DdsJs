/**
 * @brief Contains the definition of the `typeSupportBaseName` Handlebars helper for CycloneDDS.
 * @author Rolando J. Nieves
 * @date 2024-12-06 14:08:46
 */

import { Structure } from "../../../dds-idl-compiler";


export function cycloneDdsTypeSupportBaseName(subject: Structure): string {
  return "::DdsJs::TypeSupportWrapBase";
}

// vim: set ts=2 sw=2 expandtab:
