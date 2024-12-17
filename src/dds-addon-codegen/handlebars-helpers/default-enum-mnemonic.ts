/**
 * @brief Contains the definition of the `defaultEnumMnemonic` Handlebars helper.
 * @author Rolando J. Nieves
 * @date 2024-11-22 10:42:35
 */

import Handlebars from "handlebars";
import { Enumeration } from "../../dds-idl-compiler";


export function defaultEnumMnemonic(subject: Enumeration, options: Handlebars.HelperOptions): string {
  let enums = new Array(...subject);
  return options.fn(enums[0]);
}

// vim: set ts=2 sw=2 expandtab: