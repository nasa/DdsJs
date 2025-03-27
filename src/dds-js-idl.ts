#!/usr/bin/env node
/**
 * @brief Contains the executable logic for the `ddsjs-idl` tool.
 * @author Rolando J. Nieves
 * @date 2024-02-14 14:45:59
 */

import { hideBin } from 'yargs/helpers';
import { compileIdl, IdlFile } from './dds-idl-compiler';
import { processCppGenCmdLine } from './cpp-gen-cmdline';
import { generateCppCode } from './dds-addon-codegen';


(() => {
  let cmdLineConfig = processCppGenCmdLine(hideBin(process.argv));

  compileIdl(cmdLineConfig)
  .then((model: IdlFile) => generateCppCode(model, cmdLineConfig))
  .then(() => console.log("Code generation complete.")).catch((err) => console.error(`Code generation failed: ${err}`))
})();

// vim: set ts=2 sw=2 expandtab:
