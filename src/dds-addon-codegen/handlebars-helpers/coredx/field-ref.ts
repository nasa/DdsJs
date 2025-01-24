/**
 * @brief Contains the definition of the `fieldRef` Handlebars helper for CoreDX.
 * @author Rolando J. Nieves
 * @date 2025-01-21 14:07:56
 */

import Handlebars from "handlebars";
import { StructMember } from "../../../dds-idl-compiler";


export function coreDxFieldRef(subject: StructMember, options: Handlebars.HelperOptions): string {
  return `${subject.name}`;
}

// vim: set ts=2 sw=2 expandtab:
