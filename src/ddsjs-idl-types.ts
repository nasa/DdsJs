#!/usr/bin/env node
/**
 * @brief Contains the executable logic for the `ddsjs-idl` tool.
 * @author Rolando J. Nieves
 * @date 2024-03-18 13:23:43
 */

import { hideBin } from 'yargs/helpers';
import { runTypeGenFlow } from './idlproc';


(() => runTypeGenFlow(hideBin(process.argv)))();

// vim: set ts=2 sw=2 expandtab:
