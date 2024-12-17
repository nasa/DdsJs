/**
 * @brief Contains the definition of the `firstUnionMember` Handlebars helper.
 * @author Rolando J. Nieves
 * @date 2024-12-03 18:30:19
 */

import Handlebars from "handlebars";
import { CaseDefinition, UnionDefinition } from "../../dds-idl-compiler";


export function firstUnionMember(subject: UnionDefinition, options: Handlebars.HelperOptions): string {
  let firstMember = subject.members[0] as CaseDefinition;
  return options.fn(firstMember);
}

// vim: set ts=2 sw=2 expandtab:
