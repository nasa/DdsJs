/**
 * @brief Contains the definition of the `unionTcpFactoryHelper()` function.
 * @author Rolando J. Nieves
 * @date 2024-12-16 16:10:12
 */

import { ScopeMember, UnionDefinition } from "../../../dds-idl-compiler";
import { HeaderFileContext, ImplementationFileContext } from "../../context";
import { TemplateContextPair } from "../template-context-pair";


export function unionTcpFactoryHelper(subject: ScopeMember, providerName: string, withTopicSupport: boolean): TemplateContextPair[] {
  let result: TemplateContextPair[] = [];

  if (subject instanceof UnionDefinition) {
    result.push({ templateName: "union.cpp.handlebars", context: new ImplementationFileContext(providerName, subject) });
    result.push({ templateName: "union.hh.handlebars", context: new HeaderFileContext(providerName, subject) });
  }

  return result;
}

// vim: set ts=2 sw=2 expandtab:
