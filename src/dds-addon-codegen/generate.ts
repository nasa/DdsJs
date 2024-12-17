/**
 * @brief Contains the definition of the `generateFromTemplate()` function.
 * @author Rolando J. Nieves
 * @date 2024-11-19 15:36:40
 */

import Handlebars from "handlebars";
import { readFileSync } from "node:fs";
import path from "node:path";
import { IdlFile, isNamingScope, ScopeMember } from "../dds-idl-compiler";
import { CppGenConfiguration } from "./config";
import { DestinationFolder } from "./destination-folder";
import { registerHandlebarsHelpers } from "./handlebars-helpers";
import { registerHandlebarsPartials } from "./handlebars-partials";
import { TemplateContextPairFactory } from "./template-mgmt";
import { registerTcpFactoryHelpers } from "./template-mgmt/helpers";
import { CmakeJsBuildFileContext, ImplementationFileContext } from "./context";


export const TEMPLATE_ROOT: string = path.normalize(path.join(__dirname, "..", "..", "templates", "cpp"));

export function generateFromTemplate< TemplateContext >(templateName: string, context: TemplateContext): string {
  let templateContents = readFileSync(path.join(TEMPLATE_ROOT, templateName), { encoding: "utf-8" });
  let template = Handlebars.compile< TemplateContext >(templateContents);
  return template(context, { allowProtoPropertiesByDefault: true });
}


export function generateCppCode(model: IdlFile, config: CppGenConfiguration): Promise< void > {
  let destinationFolder = new DestinationFolder(config.outputDirectory);
  let tcpFactory = new TemplateContextPairFactory(config.providerName);
  let sourceFiles: string[] = [];

  registerHandlebarsHelpers(config.providerName);
  registerHandlebarsPartials(config.providerName);
  registerTcpFactoryHelpers(tcpFactory);

  let modelTreeFringe: ScopeMember[] = [model];
  while (modelTreeFringe.length > 0) {
    // It's OK to force the type here: the while loop checks the length is > 0,
    // which means shift() will always have something to "shift out" and will
    // never return `undefined`.
    let next = modelTreeFringe.shift() as ScopeMember;
    if (isNamingScope(next)) {
      // Breadth-first walk of the model tree; append any children of next
      // visited node to the end.
      modelTreeFringe = modelTreeFringe.concat(next.members);
    }
    let pairs = tcpFactory.templateContextPairsFor(next, true);
    for (let aPair of pairs) {
      destinationFolder.write(generateFromTemplate(aPair.templateName, aPair.context), aPair.context.fileName);
      if (aPair.context instanceof ImplementationFileContext) {
        sourceFiles.push(aPair.context.fileName);
      }
    }
  }

  if (config.buildSystem === "cmake-js") {
    let context = new CmakeJsBuildFileContext(model, sourceFiles);
    destinationFolder.write(generateFromTemplate("build-sys-module.cmake.handlebars", context), context.fileName);
  }

  return Promise.resolve();
}

// vim: set ts=2 sw=2 expandtab:
