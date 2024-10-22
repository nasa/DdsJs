/**
 * @brief Contains the definition of the `TranslatorConfiguration` class.
 * @author Rolando J. Nieves
 * @date 2024-02-12 17:36:03
 */

import yargs from "yargs";


export interface PreprocCompatibleConfig {
  readonly includePath: string[];
  readonly preprocExecName: string;
  readonly inputFile: string;
}

export class TranslatorConfiguration implements PreprocCompatibleConfig {
  public readonly buildSystem: string | null;
  public readonly includePath: string[];
  public readonly inputFile: string;
  public readonly outputDirectory: string;
  public readonly preprocExecName: string;
  public readonly providerName: string;

  public constructor(cmdLineArgs: string[]) {
    const parsedArgs = yargs(cmdLineArgs)
      .command("* <input-file>", "Generate NodeJS C++ add-on source from DDS IDL file.")
      .positional("input-file", {
        describe: "Path to the IDL file to process",
        type: "string"
      })
      .string("include")
      .alias("I", "include")
      .describe("I", "Directory to add to include file path.")
      .string("outdir")
      .alias("o", "outdir")
      .describe("o", "Path where C++ output files will go (default: .).")
      .default("outdir", ".")
      .string("cpp-exe")
      .alias("p", "cpp-exe")
      .describe("p", "Name of the C/C++ pre-processor to use (default: cpp).")
      .default("cpp-exe", "cpp")
      .string("dds-provider")
      .alias("d", "dds-provider")
      .describe("d", "Identifier for the DDS provider to use.")
      .choices("dds-provider", ["CoreDX"])
      .default("dds-provider", "CoreDX")
      .usage("ddsjs-idl [processing flags...] IDL source file")
      .string("build-system")
      .alias("b", "build-system")
      .describe("b", "Build system that will be used [cmake-js] (default: none).")
      .choices("build-system", ["cmake-js"])
      .help()
      .alias("h", "help")
      .parseSync();
    if (Array.isArray(parsedArgs.include)) {
      this.includePath = parsedArgs.include;
    } else if (parsedArgs.include !== undefined) {
      this.includePath = [parsedArgs.include];
    } else {
      this.includePath = [];
    }
    this.outputDirectory = parsedArgs.outdir;
    this.preprocExecName = parsedArgs["cpp-exe"];
    if (parsedArgs["input-file"] === undefined) {
      throw new Error("No input files provided.");
    } else if (Array.isArray(parsedArgs["input-file"])) {
      throw new Error("More than one (1) input file provided.");
    }
    this.inputFile = parsedArgs["input-file"];
    if (parsedArgs["build-system"] !== undefined) {
      this.buildSystem = parsedArgs["build-system"];
    } else {
      this.buildSystem = null;
    }
    this.providerName = parsedArgs["dds-provider"];
  }
}

export class TypeGenConfiguration implements PreprocCompatibleConfig {
  public readonly includePath: string[];
  public readonly inputFile: string;
  public readonly moduleName: string;
  public readonly outputFile: string;
  public readonly preprocExecName: string;

  public constructor(cmdLineArgs: string[]) {
    const parsedArgs = yargs(cmdLineArgs).options({
      "cpp-exec": { type: "string", alias: "p", requiresArg: true, default: "cpp", description: "Name of the C/C++ pre-processor to use." },
      "include": { type: "string", alias: "I", requiresArg: true, description: "Directory to add to include file path." },
      "module-name": { type: "string", alias: "m", requiresArg: true, description: "Name of the top-level module to use in .d.ts file." },
      "output-file": { type: "string", alias: "o", requiresArg: true, description: "Name of the output .d.ts file." }
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
    if (Array.isArray(parsedArgs.include)) {
      this.includePath = parsedArgs.include;
    } else if (parsedArgs.include !== undefined) {
      this.includePath = [parsedArgs.include];
    } else {
      this.includePath = [];
    }
    if (parsedArgs["output-file"]) {
      this.outputFile = parsedArgs["output-file"];
    } else {
      this.outputFile = "-"
    }
    if (parsedArgs["input-file"] === undefined) {
      throw new Error("No input files provided.");
    } else if (Array.isArray(parsedArgs["input-file"])) {
      throw new Error("More than one (1) input file provided.");
    }
    this.inputFile = parsedArgs["input-file"];
    this.preprocExecName = parsedArgs["cpp-exec"];
    if (parsedArgs["module-name"] === undefined) {
      throw new Error("Must provide a module name for type generation.");
    }
    this.moduleName = parsedArgs["module-name"];
  }
}

// vim: set ts=2 sw=2 expandtab:
