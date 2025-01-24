/**
 * @brief Contains the definition of the `typeSupportBaseName` Handlebars helper for CoreDX.
 * @author Rolando J. Nieves
 * @date 2025-01-21 14:32:29
 */

import { Structure } from "../../../dds-idl-compiler";


export function coreDxTypeSupportBaseName(subject: Structure): string {
  return `::DdsJs::TypeSupportWrapBaseT< ${subject.name}TypeSupport >`;
}

// vim: set ts=2 sw=2 expandtab:
