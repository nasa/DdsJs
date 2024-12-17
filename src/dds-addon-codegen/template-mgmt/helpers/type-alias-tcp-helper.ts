/**
 * @brief Contains the definition of the `typeAliasTcpFactoryHelper()` function.
 * @author Rolando J. Nieves
 * @date 2024-12-16 16:07:28
 */

import { ScopeMember, TypeAlias } from "../../../dds-idl-compiler";
import { HeaderFileContext } from "../../context";
import { TemplateContextPair } from "../template-context-pair";


export function typeAliasTcpFactoryHelper(subject: ScopeMember, providerName: string, withTopicSupport: boolean): TemplateContextPair[] {
  let result: TemplateContextPair[] = [];

  if (subject instanceof TypeAlias) {
    result.push({ templateName: "type-alias.hh.handlebars", context: new HeaderFileContext(providerName, subject) });
  }

  return result;
}

// vim: set ts=2 sw=2 expandtab:
