/**
 * @brief Contains the definition of the `ModuleBundleHeader` class.
 * @author Rolando J. Nieves
 * @date 2024-03-01 16:11:42
 */

import { ModuleBundle } from "../model";
import { HeaderFileBase } from "./header-file";


export class ModuleBundleHeader extends HeaderFileBase< ModuleBundle > {
  public static readonly TEMPLATE_NAME: string = "module.hh.handlebars";

  public constructor(module: ModuleBundle, providerName: string) {
    super(ModuleBundleHeader.TEMPLATE_NAME, providerName, module.name, module.namespaceStack);
  }
}

// vim: set ts=2 sw=2 expandtab:
