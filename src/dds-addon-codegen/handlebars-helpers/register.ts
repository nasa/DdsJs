/**
 * @brief Contains the definition of the `registerHandlebarsHelpers()` function.
 * @author Rolando J. Nieves
 * @date 2024-11-19 14:14:37
 */

import Handlebars from "handlebars";
import { NamingScope } from "../../dds-idl-compiler";
import { TemplateContextPairFactory } from "../template-mgmt";
import { registerTcpFactoryHelpers } from "../template-mgmt/helpers";
import { addonModuleName } from "./addon-module-name";
import { addonWrapperName } from "./addon-wrapper-name";
import { caseFactoryMethod } from "./case-factory-method";
import { registerCoreDxHelpers } from "./coredx";
import { registerCycloneDdsHelpers } from "./cyclonedds";
import { dataReaderWrapName } from "./data-reader-wrap-name";
import { dataWriterWrapName } from "./data-writer-wrap-name";
import { defaultEnumMnemonic } from "./default-enum-mnemonic";
import { definitionHeadersWithin } from "./definition-headers-within";
import { explicitCaseDefinitionsWithin } from "./explicit-case-definitions-within";
import { firstUnionMember } from "./first-union-member";
import { innerStructName } from "./inner-struct-name";
import { instanceMembersWithin } from "./instance-members-within";
import { itemsInReverse } from "./items-in-reverse";
import { jsReaderFqn } from "./js-reader-fqn";
import { jsWriterFqn } from "./js-writer-fqn";
import { moduleNsVarName } from "./module-ns-var-name";
import { moduleWrapperName } from "./module-wrapper-name";
import { modulesWithin } from "./modules-within";
import { napiContainer } from "./napi-container";
import { napiInstanceValue } from "./napi-instance-value";
import { nonDefaultUnionConditionsWithin } from "./non-default-union-conditions-within";
import { ownerModuleNameFor } from "./owner-module-name-for";
import { proxyHeader } from "./proxy-header";
import { proxyMembersWithin } from "./proxy-members-within";
import { proxyName, proxyNameWithDecl } from "./proxy-name";
import { scopedTypeName } from "./scoped-type-name";
import { topicTypeMembersWithin } from "./topic-type-members-within";
import { typeSupportWrapName } from "./type-support-wrap-name";


export function registerHandlebarsHelpers(providerName: string): void {
  let tcpFactory = new TemplateContextPairFactory(providerName);
  registerTcpFactoryHelpers(tcpFactory);

  Handlebars.registerHelper("addonModuleName", addonModuleName);
  Handlebars.registerHelper("addonWrapperName", addonWrapperName);
  Handlebars.registerHelper("caseFactoryMethod", caseFactoryMethod);
  Handlebars.registerHelper("dataReaderWrapName", dataReaderWrapName);
  Handlebars.registerHelper("dataWriterWrapName", dataWriterWrapName);
  Handlebars.registerHelper("defaultEnumMnemonic", defaultEnumMnemonic);
  Handlebars.registerHelper("definitionHeadersWithin", (subject: NamingScope, options: Handlebars.HelperOptions) => definitionHeadersWithin(subject, options, tcpFactory));
  Handlebars.registerHelper("explicitCaseDefinitionsWithin", explicitCaseDefinitionsWithin);
  Handlebars.registerHelper("firstUnionMember", firstUnionMember);
  Handlebars.registerHelper("innerStructName", innerStructName);
  Handlebars.registerHelper("instanceMembersWithin", instanceMembersWithin);
  Handlebars.registerHelper("itemsInReverse", itemsInReverse);
  Handlebars.registerHelper("jsReaderFqn", jsReaderFqn);
  Handlebars.registerHelper("jsWriterFqn", jsWriterFqn);
  Handlebars.registerHelper("moduleNsVarName", moduleNsVarName);
  Handlebars.registerHelper("moduleWrapperName", moduleWrapperName);
  Handlebars.registerHelper("modulesWithin", modulesWithin);
  Handlebars.registerHelper("napiContainer", napiContainer);
  Handlebars.registerHelper("napiInstanceValue", napiInstanceValue);
  Handlebars.registerHelper("nonDefaultUnionConditionsWithin", nonDefaultUnionConditionsWithin);
  Handlebars.registerHelper("ownerModuleNameFor", ownerModuleNameFor);
  Handlebars.registerHelper("proxyHeader", proxyHeader);
  Handlebars.registerHelper("proxyMembersWithin", proxyMembersWithin);
  Handlebars.registerHelper("proxyName", proxyName);
  Handlebars.registerHelper("proxyNameWithDecl", proxyNameWithDecl);
  Handlebars.registerHelper("scopedTypeName", scopedTypeName);
  Handlebars.registerHelper("topicTypeMembersWithin", topicTypeMembersWithin);
  Handlebars.registerHelper("typeSupportWrapName", typeSupportWrapName);
  if (providerName === "CycloneDDS") {
    registerCycloneDdsHelpers();
  } else if (providerName === "CoreDX") {
    registerCoreDxHelpers();
  }
}

// vim: set ts=2 sw=2 expandtab:
