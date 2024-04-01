/**
 * @brief Contains the definition of the `TypeDeclarationFile` class.
 * @author Rolando J. Nieves
 * @date 2024-03-18 13:04:32
 */

import Handlebars from "handlebars";
import { readFileSync } from "node:fs";
import path from "node:path";
import { DdsJsAddon } from "../model";
import { IdlModuleDefinition } from "./module-type-decl";


export class TypeDeclarationFile {
  static readonly TEMPLATE_NAME: string = "types.d.ts.handlebars";

  public readonly createDate: string;
  public readonly template: Handlebars.TemplateDelegate< TypeDeclarationFile >;
  public readonly moduleTrees: IdlModuleDefinition[]

  public constructor(addon: DdsJsAddon, public readonly moduleName: string) {
    this.createDate = new Date().toISOString();
    this.moduleTrees = Array.from(addon.moduleIter()).map((aBundle) => new IdlModuleDefinition(aBundle));
    let templateDirectory = path.normalize(path.join(__dirname, "..", "..", "templates"));
    let templateContents = readFileSync(path.join(templateDirectory, TypeDeclarationFile.TEMPLATE_NAME), { encoding: "utf-8" });
    this.template = Handlebars.compile< TypeDeclarationFile >(templateContents);
  }

  public generate(): string {
    return this.template(this);
  }
}

// vim: set ts=2 sw=2 expandtab: