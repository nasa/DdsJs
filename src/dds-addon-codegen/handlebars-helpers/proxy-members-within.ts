/**
 * @brief Contains the definition of the `proxyMembersWithin` Handlebars helper.
 * @author Rolando J. Nieves
 * @date 2024-11-22 16:06:38
 */

import Handlebars from "handlebars";
import { Enumeration, NamingScope, Structure, UnionDefinition } from "../../dds-idl-compiler";


export function proxyMembersWithin(subject: NamingScope, options: Handlebars.HelperOptions): string {
  let result: string = "";
  let data: any;

  if (options.data) {
    data = Handlebars.createFrame(options.data);
  }

  let filtered = subject.members.filter((aMember) => (aMember instanceof Structure) || (aMember instanceof UnionDefinition) || (aMember instanceof Enumeration));
  for (let idx = 0, total = filtered.length; idx < total; idx++) {
    let aProxyMember = filtered[idx];
    if (data) {
      data.last = idx == (total - 1);
    }
    result += options.fn(aProxyMember, { data: data });
  }

  return result;
}

// vim: set ts=2 sw=2 expandtab:
