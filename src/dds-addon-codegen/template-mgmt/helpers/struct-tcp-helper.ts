/**
 * @brief Contains the definition of the `structTcpFactoryHelper()` function.
 * @author Rolando J. Nieves
 * @date 2024-12-16 16:12:45
 */

import { NestedAnnotation, ScopeMember, Structure } from "../../../dds-idl-compiler";
import { ImplementationFileContext, HeaderFileContext } from "../../context";
import { TemplateContextPair } from "../template-context-pair";


function isTopicTypeEligible(subject: Structure): boolean {
  let annotation = NestedAnnotation.PresentIn(subject);
  return (annotation === undefined) || !annotation.isNested
}


export function structTcpFactoryHelper(subject: ScopeMember, providerName: string, withTopicSupport: boolean): TemplateContextPair[] {
  let result: TemplateContextPair[] = [];

  if (subject instanceof Structure) {
    result.push({ templateName: "struct.cpp.handlebars", context: new ImplementationFileContext(providerName, subject) });
    result.push({ templateName: "struct.hh.handlebars", context: new HeaderFileContext(providerName, subject) });
    if (isTopicTypeEligible(subject) && withTopicSupport) {
      result.push({ templateName: "data-reader-wrap.cpp.handlebars", context: new ImplementationFileContext(providerName, subject, "Reader") });
      result.push({ templateName: "data-reader-wrap.hh.handlebars", context: new HeaderFileContext(providerName, subject, "Reader") });
      result.push({ templateName: "data-writer-wrap.cpp.handlebars", context: new ImplementationFileContext(providerName, subject, "Writer") });
      result.push({ templateName: "data-writer-wrap.hh.handlebars", context: new HeaderFileContext(providerName, subject, "Writer") });
      result.push({ templateName: "type-support-wrap.cpp.handlebars", context: new ImplementationFileContext(providerName, subject, "TypeSupport") });
      result.push({ templateName: "type-support-wrap.hh.handlebars", context: new HeaderFileContext(providerName, subject, "TypeSupport") });
    }
  }

  return result;
}

// vim: set ts=2 sw=2 expandtab:
