/**
 * @brief Contains the definition of the `IdlModuleTypeAlias` class.
 * @author Rolando J. Nieves
 * @date 2024-03-20 11:04:31
 */

import { HbPartialTemplate } from "./hb-partial-template";
import { IdlModuleNamespaceContent } from "./type-decl-content";


export class IdlModuleTypeAlias implements IdlModuleNamespaceContent {
  private static readonly NS_PARTIAL_NAME: string = "typeAliasNsDefinition";
  private static readonly NS_PARTIAL_TEMPLATE: HbPartialTemplate = new HbPartialTemplate(IdlModuleTypeAlias.NS_PARTIAL_NAME, "alias-ns.partial.handlebars");
  public readonly nsPartialName: string;
  
  public constructor(public readonly name: string, public readonly aliasFor: string) {
    this.nsPartialName = IdlModuleTypeAlias.NS_PARTIAL_NAME;
  }
}

// vim: set ts=2 sw=2 expandtab:
