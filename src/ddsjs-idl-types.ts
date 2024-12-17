#!/usr/bin/env node
/**
 * @brief Contains the executable logic for the `ddsjs-idl-types` tool.
 * @author Rolando J. Nieves
 * @date 2024-02-14 14:45:59
 */

import { hideBin } from 'yargs/helpers';
import { generateTypeDeclarations } from './dds-addon-typegen';
import { compileIdl, IdlFile } from './dds-idl-compiler';
import { processTypeGenCmdLine } from './type-gen-cmdline';


(() => {
  let cmdLineConfig = processTypeGenCmdLine(hideBin(process.argv));

  compileIdl(cmdLineConfig)
  .then((model: IdlFile) => generateTypeDeclarations(model, cmdLineConfig))
  .then(() => console.log("Type generation complete.")).catch((err) => console.error(`Type generation failed: ${err}`))
})();

// vim: set ts=2 sw=2 expandtab:
