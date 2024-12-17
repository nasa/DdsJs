/**
 * @brief Contains the definition of the `instanceMembersWithin` Handlebars helper.
 * @author Rolando J. Nieves
 * @date 2024-11-22 15:25:47
 */

import Handlebars from "handlebars";
import { ConstantDeclaration, Module, NamingScope } from "../../dds-idl-compiler";


export function instanceMembersWithin(subject: NamingScope, options: Handlebars.HelperOptions): string {
  let result: string = "";
  let data: any;

  if (options.data) {
    data = Handlebars.createFrame(options.data);
  }

  let filtered = subject.members.filter((aMember) => (aMember instanceof Module) || (aMember instanceof ConstantDeclaration));
  for (let idx = 0, total = filtered.length; idx < total; idx++) {
    if (data) {
      data.last = idx == (total -1);
    }
    let aMember = filtered[idx];
    result += options.fn(aMember, { data: data });
  }

  return result;
}

// vim: set ts=2 sw=2 expandtab:
