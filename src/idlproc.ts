/**
 * @brief Contains the definition of the `runCompilerFlow()` function.
 * @author Rolando J. Nieves
 * @date 2024-02-13 14:30:03
 */

import { writeFileSync } from "fs";
import Handlebars from "handlebars";
import { CmakeJsModule, CppNameGen, DestinationFolder, enumerateProviderHeaders, itemsInReverse } from "./codegen";
import { TranslatorConfiguration, TypeGenConfiguration } from "./config";
import { interpretInput } from "./parser";
import { SourceInput } from "./preproc";
import { TypeDeclarationFile } from "./typegen";


export function runCompilerFlow(cmdLineArgs: string[]): void {
  try {
    let config = new TranslatorConfiguration(cmdLineArgs);
    let srcInput = new SourceInput(config);
    let proxyNameGen = new CppNameGen(config.providerName);

    // Pre-process input
    let result = srcInput.process();

    // Interpret pre-processed input
    let model = interpretInput(config.inputFile, result.processedContents, result.locationMap, proxyNameGen);

    // Generate C++ from object model
    Handlebars.registerHelper("itemsInReverse", itemsInReverse);
    let destination = new DestinationFolder(config.outputDirectory);
    model.emit(destination, enumerateProviderHeaders(config.providerName, config.inputFile), config.providerName);

    // Generate build system utilities, if requested
    if (config.buildSystem === "cmake-js") {
      let buildSysModule = new CmakeJsModule(model, config.providerName);
      destination.write(buildSysModule, buildSysModule);
    }
  } catch (err) {
    console.error((err as Error).message);
    process.exit(-1);
  }

  process.exit(0);
}

export function runTypeGenFlow(cmdLineArgs: string[]): void {
  try {
    let config = new TypeGenConfiguration(cmdLineArgs);
    let srcInput = new SourceInput(config);

    // Pre-process input
    let result = srcInput.process();

    // Interpret pre-processed input
    // We don't really need a provider for type generation, so we just provide
    // one that is known.
    let model = interpretInput(config.inputFile, result.processedContents, result.locationMap, new CppNameGen("CoreDX"));

    // Generate TypeScript type declarations
    let typeDeclFile = new TypeDeclarationFile(model, config.moduleName);
    writeFileSync(config.outputFile, typeDeclFile.generate());
    
  } catch (err) {
    console.error((err as Error).message);
    process.exit(-1);
  }
}

// vim: set ts=2 sw=2 expandtab:
