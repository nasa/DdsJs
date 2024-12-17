/**
 * @brief Contains the definition of the `processTypeGenCmdLine()` function.
 * @author Rolando J. Nieves
 * @date 2024-12-16 12:15:05
 */

import yargs from "yargs";
import { TypeGenConfiguration } from "./dds-addon-typegen";
import { CompilerConfiguration } from "./dds-idl-compiler";


export function processTypeGenCmdLine(args: string[]): CompilerConfiguration & TypeGenConfiguration {
  const parsedArgs = yargs(args).options({
    "include": { type: "string", array: true, alias: "I", requiresArg: true, default: [] as string[], description: "Directory to add to include file path." },
    "module-name": { type: "string", alias: "m", demandOption: true, requiresArg: true, description: "Name of the top-level module to use in .d.ts file." },
    "output-file": { type: "string", alias: "o", requiresArg: true, default: "-", description: "Name of the output .d.ts file." }
  })
  .command("* <input-file>", "Generate TypeScript type descriptions from IDL file.")
  .positional(
    "input-file",
    {
      describe: "Path to the IDL file to process.",
      type: "string"
    }
  )
  .parseSync();
  if (parsedArgs["input-file"] === undefined) {
    throw new Error("No input files provided.");
  } else if (Array.isArray(parsedArgs["input-file"])) {
    throw new Error("More than one (1) input file provided.");
  }

  return {
    moduleName: parsedArgs["module-name"],
    outputFile: parsedArgs["output-file"],
    includeDirectoryPath: parsedArgs["include"],
    inputFilePath: parsedArgs["input-file"]
  };
}

// vim: set ts=2 sw=2 expandtab:
