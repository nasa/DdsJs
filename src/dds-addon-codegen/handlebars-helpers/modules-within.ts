/**
 * @brief Contains the definition of the `modulesWithin` Handlebars helper.
 * @author Rolando J. Nieves
 * @date 2024-11-22 14:57:33
 */

import Handlebars from "handlebars";
import { Module, NamingScope } from "../../dds-idl-compiler";


export function modulesWithin(subject: NamingScope, options: Handlebars.HelperOptions): string {
  let result: string = "";
  let data: any;

  if (options.data) {
    data = Handlebars.createFrame(options.data);
  }

  let filtered = subject.members.filter((aMember) => aMember instanceof Module);
  for (let idx = 0, total = filtered.length; idx < total; idx++) {
    if (data) {
      data.last = idx == (total - 1);
    }
    let aMember = filtered[idx];
    result += options.fn(aMember, { data: data });
  }

  return result;
}

// vim: set ts=2 sw=2 expandtab:
