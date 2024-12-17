/**
 * @brief Contains the definition of the `processCppGenCmdLine()` function.
 * @author Rolando J. Nieves
 * @date 2024-12-16 11:34:05
 */

import yargs from "yargs";
import { CompilerConfiguration } from "./dds-idl-compiler";
import { CppGenConfiguration } from "./dds-addon-codegen";


export function processCppGenCmdLine(args: string[]): CompilerConfiguration & CppGenConfiguration {
  const parsedArgs = yargs(args)
  .options({
    "build-system": { alias: "b", type: "string", choices: ["cmake-js"], requiresArg: true, describe: "Build system that will be used [cmake-js] (default: none)." },
    "dds-provider": { alias: "d", type: "string", choices: ["CoreDX", "CycloneDDS"], requiresArg: true, default: "CycloneDDS", describe: "Identifier for the DDS provider to use." },
    "include": { alias: "I", type: "string", array: true, requiresArg: true, default: [] as string[], describe: "Directory to add to include file path." },
    "outdir": { alias: "o", type: "string", requiresArg: true, default: ".", describe: "Path where C++ output files will go (default: .)." },
  })
  .command("* <input-file>", "Generate NodeJS C++ add-on source from DDS IDL file.")
  .positional("input-file", {
    describe: "Path to the IDL file to process",
    type: "string"
  })
  .help()
  .alias("h", "help")
  .parseSync();

  if (parsedArgs["input-file"] === undefined) {
    throw new Error("No input files provided.");
  } else if (Array.isArray(parsedArgs["input-file"])) {
    throw new Error("More than one (1) input file provided.");
  }

  return {
    buildSystem: (parsedArgs["build-system"] ? parsedArgs["build-system"] : null),
    outputDirectory: parsedArgs.outdir,
    providerName: parsedArgs["dds-provider"],
    includeDirectoryPath: parsedArgs["include"],
    inputFilePath: parsedArgs["input-file"]
  };
}

// vim: set ts=2 sw=2 expandtab:
