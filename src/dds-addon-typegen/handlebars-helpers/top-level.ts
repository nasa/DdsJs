/**
 * @brief Contains the definition of the `topLevel` Handlebars helper.
 * @author Rolando J. Nieves
 * @date 2024-12-17 18:03:59
 */

import { IdlFile, Module, ScopeMember } from "../../dds-idl-compiler";


export function topLevel(subject: ScopeMember): boolean {
  return (subject instanceof Module) && (subject.owningScope instanceof IdlFile);
}

// vim: set ts=2 sw=2 expandtab:
