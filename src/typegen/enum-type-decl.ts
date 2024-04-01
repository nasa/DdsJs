/**
 * @brief Contains the definition of the `IdlModuleEnumeration` class.
 * @author Rolando J. Nieves
 * @date 2024-03-20 10:57:39
 */

import { HbPartialTemplate } from "./hb-partial-template";
import { IdlModuleNamespaceContent } from "./type-decl-content";


export class IdlModuleEnumeration implements IdlModuleNamespaceContent {
  private static readonly NS_PARTIAL_NAME: string = "enumNsDefinition";
  private static readonly NS_PARTIAL_TEMPLATE: HbPartialTemplate = new HbPartialTemplate(IdlModuleEnumeration.NS_PARTIAL_NAME, "enum-ns.partial.handlebars");

  public readonly nsPartialName: string;
  public readonly nsScope: string;
  ;
  public readonly mnemonicValType: string;

  public constructor(public readonly name: string, public readonly mnemonicValTypeName: string, public readonly mnemonics: string[], nsScope: string[]) {
    this.nsPartialName = IdlModuleEnumeration.NS_PARTIAL_NAME;
    this.nsScope = nsScope.join(".");
    // NOTE: This can be extended should the need for 64-bit values in enums
    // arise.
    this.mnemonicValType = "number";
  }
}

// vim: set ts=2 sw=2 expandtab:
