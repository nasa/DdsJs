/**
 * @brief Contains the definition of the `collectPragmas()` function.
 * @author Rolando J. Nieves
 * @date 2024-11-07 16:39:51
 */

import { FileInput, LocationInformation } from "../input";

export interface PragmaStatement {
  location: LocationInformation;
  content: string;
}

export function collectPragmas(sourceFile: FileInput): PragmaStatement[] {
  const PRAGMA_STMT_PATTERN = /^\s*#\s*pragma\s+(?<content>[^\t\n]+)\s*$/;

  let result: PragmaStatement[] = [];

  for (const aLine of sourceFile) {
    let pragmaTest = PRAGMA_STMT_PATTERN.exec(aLine.text);
    if (pragmaTest !== null) {
      result.push({ location: aLine.location, content: pragmaTest.groups?.content || "" });
    }
  }

  for (const aPragma of result) {
    sourceFile.removeLine(aPragma.location);
  }

  return result;
}

// vim: set ts=2 sw=2 expandtab:
