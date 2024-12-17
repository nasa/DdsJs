/**
 * @brief Contains the definition of the `enumTcpFactoryHelper()` function.
 * @author Rolando J. Nieves
 * @date 2024-12-16 16:03:31
 */

import { Enumeration, ScopeMember } from "../../../dds-idl-compiler";
import { HeaderFileContext, ImplementationFileContext } from "../../context";
import { TemplateContextPair } from "../template-context-pair";


export function enumTcpFactoryHelper(subject: ScopeMember, providerName: string, withTopicSupport: boolean): TemplateContextPair[] {
  let result: TemplateContextPair[] = [];

  if (subject instanceof Enumeration) {
    result.push({ templateName: "enum.cpp.handlebars", context: new ImplementationFileContext(providerName, subject) });
    result.push({ templateName: "enum.hh.handlebars", context: new HeaderFileContext(providerName, subject) });
  }

  return result;
}

// vim: set ts=2 sw=2 expandtab: