/**
 * @brief Contains the definition of the `moduleTcpFactoryHelper()` function.
 * @author Rolando J. Nieves
 * @date 2024-12-16 13:43:03
 */

import { Module, ScopeMember } from "../../../dds-idl-compiler";
import { HeaderFileContext, ImplementationFileContext } from "../../context";
import { TemplateContextPair } from "../template-context-pair";


export function moduleTcpFactoryHelper(subject: ScopeMember, providerName: string, withTopicSupport: boolean): TemplateContextPair[] {
  let result: TemplateContextPair[] = [];

  if (subject instanceof Module) {
    result.push({ templateName: "module.hh.handlebars", context: new HeaderFileContext(providerName, subject, "Module") });
    result.push({ templateName: "module.cpp.handlebars", context: new ImplementationFileContext(providerName, subject, "Module") });
  }

  return result;
}

// vim: set ts=2 sw=2 expandtab:
