/**
 * @brief Contains the definition of the `CmakeJsModule` class.
 * @author Rolando J. Nieves
 * @date 2024-03-07 11:55:39
 */

import path from "node:path";
import { DdsJsAddon } from "../model";
import { TemplateGeneratedSource } from "./template-generated-source";


export class CmakeJsModule extends TemplateGeneratedSource< CmakeJsModule > {
  public static readonly TEMPLATE_NAME: string = "build-sys-module.cmake.handlebars";
  public readonly addonName: string;
  public readonly moduleFileName: string;
  public readonly sourceFiles: string[];

  public constructor(addon: DdsJsAddon, providerName: string) {
    super(CmakeJsModule.TEMPLATE_NAME, providerName);
    this.addonName = addon.name;
    this.moduleFileName = path.join("cmake-js", `${addon.name}Utilities.cmake`);
    this.sourceFiles = addon.collectSourceFiles();
  }

  public get filePath(): string {
    return this.moduleFileName;
  }
}

// vim: set ts=2 sw=2 expandtab:
