/**
 * @brief Contains the definition of the `HbPartialTemplate` class.
 * @author Rolando J. Nieves
 * @date 2024-03-20 10:54:27
 */

import { readFileSync } from "node:fs";
import path from "node:path";
import Handlebars from "handlebars";


export class HbPartialTemplate {
  public constructor(public readonly partialName: string, public readonly partialTemplateFileName: string) {
    let templateDirectory = path.normalize(path.join(__dirname, "..", "..", "templates", "partials"));
    let templateContents = readFileSync(path.join(templateDirectory, partialTemplateFileName), { encoding: "utf-8" });
    Handlebars.registerPartial(partialName, templateContents);
  }
}

// vim: set ts=2 sw=2 expandtab:
