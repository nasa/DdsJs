/**
 * @brief Contains the definition of the `coreDxEnumerateProviderHeaders()` function.
 * @author Rolando J. Nieves
 * @date 2024-10-22 13:48:42
 */

import { parse } from "node:path";


export function coreDxEnumerateProviderHeaders(inputFileName: string): string[] {
  let inputNameParts = parse(inputFileName);
  return [
    `${inputNameParts.name}.hh`,
    `${inputNameParts.name}DataReader.hh`,
    `${inputNameParts.name}DataWriter.hh`,
    `${inputNameParts.name}TypeSupport.hh`
  ];
}

// vim: set ts=2 sw=2 expandtab:
