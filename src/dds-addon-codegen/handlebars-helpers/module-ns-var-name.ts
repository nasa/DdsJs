/**
 * @brief Contains the definition of the `moduleNsVarName` Handlebars helper.
 * @author Rolando J. Nieves
 * @date 2024-11-22 14:55:38
 */

import { Module } from "../../dds-idl-compiler";


export function moduleNsVarName(subject: Module): string {
  return `ns_${subject.name}`;
}

// vim: set ts=2 sw=2 expandtab:
