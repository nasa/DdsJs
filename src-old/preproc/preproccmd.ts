/**
 * @brief Contains the definition of the `PreProcessorCommand` class.
 * @author Rolando J. Nieves
 * @date 2024-02-13 11:48:51
 */

import { PreprocCompatibleConfig } from "../config";


export class PreProcessorCommand {
  public readonly flat: string;

  public constructor(config: PreprocCompatibleConfig, inputFileName: string, outputFileName: string) {
    let includeFlags = config.includePath.map((aDir) => `-I"${aDir}"`);
    this.flat = `${config.preprocExecName} ${includeFlags.join(" ")} -o "${outputFileName}" "${inputFileName}"`;
  }
}

// vim: set ts=2 sw=2 expandtab:
