/**
 * @brief Contains the definition of the `SourceFileBase` class.
 * @author Rolando J. Nieves
 * @date 2024-02-29 16:31:02
 */

import Handlebars from "handlebars";
import { readFileSync } from "node:fs";
import path from "node:path";


export abstract class TemplateGeneratedSource< TemplateContext = any > {
  public readonly createDate: string;
  public readonly template: Handlebars.TemplateDelegate< TemplateContext >;

  public constructor(templateName: string, providerName: string) {
    this.createDate = new Date().toISOString();
    let templateDirectory = path.normalize(path.join(__dirname, "..", "..", "templates", providerName));
    let templateContents = readFileSync(path.join(templateDirectory, templateName), { encoding: "utf-8" });
    this.template = Handlebars.compile< TemplateContext >(templateContents);
  }

  public abstract get filePath(): string;
  
  public generate(context: TemplateContext): string {
    return this.template(context, { allowProtoPropertiesByDefault: true });
  }
}

// vim: set ts=2 sw=2 expandtab:
