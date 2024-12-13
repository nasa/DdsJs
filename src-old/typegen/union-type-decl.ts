/**
 * @brief Contains the definition of the `IdlModuleUnion` class.
 * @author Rolando J. Nieves
 * @date 2024-03-20 11:05:36
 */

import { HbPartialTemplate } from "./hb-partial-template";
import { IdlModuleStructMember } from "./struct-type-decl";
import { IdlModuleNamespaceContent } from "./type-decl-content";


export class IdlModuleUnion implements IdlModuleNamespaceContent {
  private static readonly NS_PARTIAL_NAME: string = "unionNsDefinition";
  private static readonly NS_PARTIAL_TEMPLATE: HbPartialTemplate = new HbPartialTemplate(IdlModuleUnion.NS_PARTIAL_NAME, "union-ns.partial.handlebars");
  public readonly nsPartialName: string;
  public readonly nsScope: string;

  public constructor(public readonly name: string, public readonly discriminatorType: string, public readonly cases: IdlModuleStructMember[], nsScope: string[]) {
    this.nsPartialName = IdlModuleUnion.NS_PARTIAL_NAME;
    this.nsScope = nsScope.join(".");
  }
}

// vim: set ts=2 sw=2 expandtab:
