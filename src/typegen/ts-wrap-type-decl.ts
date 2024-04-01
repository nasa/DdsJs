/**
 * @brief Contains the definition of the `IdlModuleTypeSupportWrap` class.
 * @author Rolando J. Nieves
 * @date 2024-03-20 11:03:16
 */

import { HbPartialTemplate } from "./hb-partial-template";
import { IdlModuleNamespaceContent } from "./type-decl-content";


export class IdlModuleTypeSupportWrap implements IdlModuleNamespaceContent {
  private static readonly NS_PARTIAL_NAME: string = "tsNsDefinition";
  private static readonly NS_PARTIAL_TEMPLATE: HbPartialTemplate = new HbPartialTemplate(IdlModuleTypeSupportWrap.NS_PARTIAL_NAME, "ts-ns.partial.handlebars");
  public readonly nsPartialName: string = IdlModuleTypeSupportWrap.NS_PARTIAL_NAME;
  public readonly nsScope: string;

  public constructor(public readonly name: string, nsScope: string[]) {
    this.nsScope = nsScope.join(".");
  }
}

// vim: set ts=2 sw=2 expandtab:
