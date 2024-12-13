/**
 * @brief Contains the definition of the `IdlModuleInfo` interface.
 * @author Rolando J. Nieves
 * @date 2024-03-04 15:46:18
 */

import { ModuleBundle } from "../model";


export interface IdlModuleInfo {
  nsVarName: string,
  idlModule: ModuleBundle
}

export function makeModuleInfo(idlModule: ModuleBundle): IdlModuleInfo {
  return { nsVarName: `ns_${idlModule.idlName.toLowerCase()}`, idlModule };
}

// vim: set ts=2 sw=2 expandtab:
