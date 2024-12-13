/**
 * @brief Contains the definition of the `IdlModuleDataReaderWrap` class.
 * @author Rolando J. Nieves
 * @date 2024-03-20 11:37:51
 */

import { HbPartialTemplate } from "./hb-partial-template";
import { IdlModuleNamespaceContent } from "./type-decl-content";


export class IdlModuleDataReaderWrap implements IdlModuleNamespaceContent {
  private static readonly NS_PARTIAL_NAME = "drNsDefinition";
  private static readonly NS_PARTIAL_TEMPLATE = new HbPartialTemplate(IdlModuleDataReaderWrap.NS_PARTIAL_NAME, "dr-ns.partial.handlebars");
  public readonly nsPartialName: string = IdlModuleDataReaderWrap.NS_PARTIAL_NAME;
  public readonly nsScope: string;

  public constructor(public readonly name: string, public readonly readerFor: string, nsScope: string[]) {
    this.nsScope = nsScope.join(".");
  }
}

// vim: set ts=2 sw=2 expandtab:
