/**
 * @brief Contain the definition of the `IdlModuleStruct` class and supporting classes.
 * @author Rolando J. Nieves
 * @date 2024-03-20 11:00:40
 */

import { HbPartialTemplate } from "./hb-partial-template";
import { IdlModuleNamespaceContent } from "./type-decl-content";


export class IdlModuleStructMember {
  public constructor(public readonly name: string, public readonly memberType: string) {}
}

export class IdlModuleStruct implements IdlModuleNamespaceContent {
  private static readonly NS_PARTIAL_NAME: string = "structNsDefinition";
  private static readonly NS_PARTIAL_TEMPLATE: HbPartialTemplate = new HbPartialTemplate(IdlModuleStruct.NS_PARTIAL_NAME, "struct-ns.partial.handlebars");
  public readonly nsPartialName: string;
  public readonly nsScope: string;

  public constructor(public readonly name: string, public readonly members: IdlModuleStructMember[], nsScope: string[]) {
    this.nsPartialName = IdlModuleStruct.NS_PARTIAL_NAME;
    this.nsScope = nsScope.join(".");
  }
}

// vim: set ts=2 sw=2 expandtab:
