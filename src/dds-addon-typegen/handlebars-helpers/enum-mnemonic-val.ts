/**
 * @brief Contains the definition of the `enumMnemonicValueType` Handlebars helper.
 * @author Rolando J. Nieves
 * @date 2024-12-17 17:54:04
 */

import { Enumeration } from "../../dds-idl-compiler";


export function enumMnemonicValueType(subject: Enumeration): string {
  return `${subject.name}MnemonicValue`;
}

// vim: set ts=2 sw=2 expandtab:
