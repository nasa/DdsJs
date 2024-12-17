/**
 * @brief Contains the definition of the `topicTypeMembersWithin` Handlebars helper.
 * @author Rolando J. Nieves
 * @date 2024-12-09 15:34:29
 */

import { NamingScope, NestedAnnotation, Structure } from "../../dds-idl-compiler";
import Handlebars from "handlebars";


function isNotNested(subject: Structure): boolean {
  let annotation = NestedAnnotation.PresentIn(subject);
  return (annotation === undefined) || !annotation.isNested
}

export function topicTypeMembersWithin(subject: NamingScope, options: Handlebars.HelperOptions): string {
  let result: string = "";
  let data: any;

  if (options.data) {
    data = Handlebars.createFrame(options.data);
  }

  // Find all the immediate child data structures that have *not* been
  // annotated as nested.
  let filtered = subject.members.filter((aMember) => aMember instanceof Structure).filter(isNotNested);
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
