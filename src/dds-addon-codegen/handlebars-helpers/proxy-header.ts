/**
 * @brief Contains the definition of the `proxyHeader()` Handlebars helper.
 * @author Rolando J. Nieves
 * @date 2024-12-16 18:05:53
 */

import { Structure } from "../../dds-idl-compiler";
import { HeaderFileContext } from "../context";


export function proxyHeader(subject: Structure): string {
  let context = new HeaderFileContext("", subject);
  return context.fileName;
}

// vim: set ts=2 sw=2 expandtab:
