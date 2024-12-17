/**
 * @brief Contains the definition of the `explicitCaseDefinitionsWithin` Handlebars helper.
 * @author Rolando J. Nieves
 * @date 2024-11-27 13:51:24
 */

import Handlebars from "handlebars";
import { CaseDefinition, ScopeMember, UnionDefinition } from "../../dds-idl-compiler";


function isExplicitCaseDefinition(aMember: ScopeMember): boolean {
  let result = false;

  if (aMember instanceof CaseDefinition) {
    result = (aMember.defaultCondition === undefined) ||
      (aMember.conditions.length > 1);
  }

  return result;
}

export function explicitCaseDefinitionsWithin(subject: UnionDefinition, options: Handlebars.HelperOptions): string {
  let result: string = "";
  let data: any;

  if (options.data) {
    data = Handlebars.createFrame(options.data);
  }

  let filtered = subject.members.filter(isExplicitCaseDefinition);
  for (let idx = 0, total = filtered.length; idx < total; idx++) {
    let aFilteredCase = filtered[idx];
    if (data) {
      data.first = idx == 0;
      data.last = idx == (total - 1);
    }
    result += options.fn(aFilteredCase, { data: data });
  }

  return result;
}

// vim: set ts=2 sw=2 expandtab:
