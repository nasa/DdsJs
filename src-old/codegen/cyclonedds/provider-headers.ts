/**
 * @brief Contains the definition of the `cycloneDdsEnumerateProviderHeaders()` function.
 * @author Rolando J. Nieves
 * @date 2024-10-22 13:59:23
 */

import { parse } from "node:path";


export function cycloneDdsEnumerateProviderHeaders(inputFileName: string): string[] {
  let inputNameParts = parse(inputFileName);
  return [
    `${inputNameParts.name}.h`
  ];
}

// vim: set ts=2 sw=2 expandtab:
