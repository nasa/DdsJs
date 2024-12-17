/**
 * @brief Contains the definition of the `addonMainTcpFactoryHelper()` function.
 * @author Rolando J. Nieves
 * @date 2024-12-16 15:56:42
 */

import { IdlFile, ScopeMember } from "../../../dds-idl-compiler";
import { HeaderFileContext, ImplementationFileContext } from "../../context";
import { TemplateContextPair } from "../template-context-pair";


export function addonMainTcpFactoryHelper(subject: ScopeMember, providerName: string, withTopicSupport: boolean): TemplateContextPair[] {
  let result: TemplateContextPair[] = [];

  if (subject instanceof IdlFile) {
    result.push({ templateName: "addon-main.cpp.handlebars", context: new ImplementationFileContext(providerName, subject) });
    result.push({ templateName: "addon-main.hh.handlebars", context: new HeaderFileContext(providerName, subject) });
  }

  return result;
}

// vim: set ts=2 sw=2 expandtab:
