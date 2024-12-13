#!/usr/bin/env node
/**
 * @brief Contains the executable logic for the `ddsjs-idl` tool.
 * @author Rolando J. Nieves
 * @date 2024-02-14 14:45:59
 */

import { hideBin } from 'yargs/helpers';
import { runCompilerFlow } from './idlproc';


(() => runCompilerFlow(hideBin(process.argv)))();

// vim: set ts=2 sw=2 expandtab:
