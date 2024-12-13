/**
 * @brief Contains the definition of the `AddonMainImplementation` class.
 * @author Rolando J. Nieves
 * @date 2024-02-29 17:22:16
 */

import { DdsJsAddon } from "../model";
import { IdlModuleInfo, makeModuleInfo } from "./idl-module-info";
import { ImplementationFileBase } from "./implementation-file";


export class AddonMainImplementation extends ImplementationFileBase< DdsJsAddon > {
  public static readonly TEMPLATE_NAME = "addon-main.cpp.handlebars";
  public readonly idlModuleMap: IdlModuleInfo[];
  public readonly nodeJsAddonName: string;

  public constructor(addon: DdsJsAddon, providerName: string) {
    super(AddonMainImplementation.TEMPLATE_NAME, providerName, addon.name, []);
    this.idlModuleMap = Array.from(addon.moduleIter()).map((aModule) => makeModuleInfo(aModule));
    this.nodeJsAddonName = addon.idlName.toLowerCase();
  }
}

// vim: set ts=2 sw=2 expandtab:
