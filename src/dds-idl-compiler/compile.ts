/**
 * @brief Contains the definition of the `compileIdl()` function.
 * @author Rolando J. Nieves
 * @date 2024-11-04 14:37:18
 */

import { CompilerConfiguration } from "./config";
import { IdlProcessing } from "./idlproc";
import { FileInput } from "./input";
import { IdlFile } from "./model/core";
import { DdsIdlMessageListener } from "./parser";
import { collectPragmas, expandIncludes } from "./preproc";


export function compileIdl(config: CompilerConfiguration): Promise< IdlFile > {
  let idlInput = new FileInput(config.inputFilePath);
  return idlInput.read()
  .then(() => expandIncludes(idlInput, config.includeDirectoryPath))
  .then((expandedInput: FileInput) => {
    let pragmas = collectPragmas(expandedInput);
    let msgHandler = new DdsIdlMessageListener(expandedInput);
    let idlproc = new IdlProcessing(expandedInput, msgHandler);
    idlproc.msgHandler.events.on("error", (errMsg: string) => console.error(errMsg));
    idlproc.msgHandler.events.on("warning", (warnMsg: string) => console.warn(warnMsg));
    return idlproc.process();
  });
}

// vim: set ts=2 sw=2 expandtab:
