/**
 * @brief Contains the definition of the `nonDefaultUnionConditionsWithin` Handlebars helper.
 * @author Rolando J. Nieves
 * @date 2024-11-25 15:34:07
 */

import { BasicCaseCondition, CaseDefinition } from "../../dds-idl-compiler";
import Handlebars from "handlebars";


export function nonDefaultUnionConditionsWithin(subject: CaseDefinition, options: Handlebars.HelperOptions): string {
  let result: string = "";
  let data: any;

  if (options.data) {
    data = Handlebars.createFrame(options.data);
  }

  let filtered = subject.conditions.filter((aCond) => aCond instanceof BasicCaseCondition);
  for (let idx = 0, total = filtered.length; idx < total; idx++) {
    let aCaseCond = filtered[idx];
    if (data) {
      data.last = idx == (total - 1);
    }
    result += options.fn(aCaseCond, { data: data });
  }

  return result;
}

// vim: set ts=2 sw=2 expandtab:
