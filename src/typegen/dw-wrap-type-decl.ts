/**
 * @brief Contains the definition of the `IdlModuleDataWriterWrap` class.
 * @author Rolando J. Nieves
 * @date 2024-03-20 11:37:51
 */

import { HbPartialTemplate } from "./hb-partial-template";
import { IdlModuleNamespaceContent } from "./type-decl-content";


export class IdlModuleDataWriterWrap implements IdlModuleNamespaceContent {
  private static readonly NS_PARTIAL_NAME = "dwNsDefinition";
  private static readonly NS_PARTIAL_TEMPLATE = new HbPartialTemplate(IdlModuleDataWriterWrap.NS_PARTIAL_NAME, "dw-ns.partial.handlebars");
  public readonly nsPartialName: string = IdlModuleDataWriterWrap.NS_PARTIAL_NAME;
  public readonly nsScope: string;

  public constructor(public readonly name: string, public readonly writerFor: string, nsScope: string[]) {
    this.nsScope = nsScope.join(".");
  }
}

// vim: set ts=2 sw=2 expandtab:
