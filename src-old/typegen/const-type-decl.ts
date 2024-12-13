/**
 * @brief Contains the definition of the `IdlModuleConstant` class.
 * @author Rolando J. Nieves
 * @date 2024-03-20 10:59:23
 */

import { HbPartialTemplate } from "./hb-partial-template";
import { IdlModuleNamespaceContent } from "./type-decl-content";


export class IdlModuleConstant implements IdlModuleNamespaceContent {
  private static readonly NS_PARTIAL_NAME: string = "constNsDefinition";
  private static readonly IF_PARTIAL_TEMPLATE: HbPartialTemplate = new HbPartialTemplate(IdlModuleConstant.NS_PARTIAL_NAME, "const-ns.partial.handlebars");
  public readonly nsPartialName: string;

  public constructor(public readonly name: string, public readonly typeName: string) {
    this.nsPartialName = IdlModuleConstant.NS_PARTIAL_NAME;
  }
}

// vim: set ts=2 sw=2 expandtab:
