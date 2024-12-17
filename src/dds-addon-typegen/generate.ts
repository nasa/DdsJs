/**
 * @brief Contains the definition of the `generateTypeDeclarations()` function.
 * @author Rolando J. Nieves
 * @date 2024-12-17 15:47:57
 */

import Handlebars from "handlebars";
import fs from "node:fs";
import path from "node:path";
import { IdlFile } from "../dds-idl-compiler";
import { TypeGenConfiguration } from "./config";
import { registerHandlebarsPartials } from "./handlebars-partials/register";
import { TypescriptDeclarationContext } from "./context";
import { DestinationFolder } from "../destination-folder";
import { registerHandlebarsHelpers } from "./handlebars-helpers";


export const TEMPLATE_ROOT: string = path.normalize(path.join(__dirname, "..", "..", "templates", "ts"));

export function generateTypeDeclarations(model: IdlFile, config: TypeGenConfiguration): Promise< void > {
  registerHandlebarsHelpers();
  registerHandlebarsPartials();
  let context = new TypescriptDeclarationContext(model);
  let templateContents = fs.readFileSync(path.join(TEMPLATE_ROOT, "types.d.ts.handlebars"), { encoding: "utf-8" });
  let template = Handlebars.compile< TypescriptDeclarationContext >(templateContents);
  let output = template(context, { allowProtoPropertiesByDefault: true, allowedProtoMethods: { "selectPartial": true } });

  let destinationFolder = new DestinationFolder(path.dirname(config.outputFile));
  destinationFolder.write(output, path.basename(config.outputFile));

  return Promise.resolve();
}

// vim: set ts=2 sw=2 expandtab:
