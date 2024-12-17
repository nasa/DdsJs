/**
 * @brief Contains the definition of the `expandIncludes()` function.
 * @author Rolando J. Nieves
 * @date 2024-11-07 15:25:18
 */

import { accessSync } from "node:fs";
import { dirname, join } from "node:path";
import { FileInput } from "../input";


export async function expandIncludes(sourceFile: FileInput, searchPath: string[]): Promise< FileInput > {
  const INCLUDE_QUOTED_STMT_PATTERN = /^\s*#\s*include\s+"(?<filepath>[^\t\n]+)"\s*$/;
  const INCLUDE_ANGLED_STMT_PATTERN = /^\s*#\s*include\s+<(?<filepath>[^\t\n]+)>\s*$/;

  let context: FileInput[] = [sourceFile];
  let next: FileInput | undefined = undefined;
  let searchPathToUse = searchPath;

  while ((next = context.shift()) !== undefined) {
    for (const aLine of next) {
      let angledTest = INCLUDE_ANGLED_STMT_PATTERN.exec(aLine.text);
      let quotedTest = INCLUDE_QUOTED_STMT_PATTERN.exec(aLine.text);
      let toInclude: string | null = null;

      if (angledTest !== null) {
        toInclude = angledTest.groups?.filepath || null;
        searchPathToUse = searchPath;
      }

      if (quotedTest !== null) {
        toInclude = quotedTest.groups?.filepath || null;
        searchPathToUse = [dirname(next.filePath)].concat(searchPath);
      }

      if (toInclude !== null) {
        let candidates = searchPathToUse.map((aDir: string) => join(aDir, toInclude));
        let foundAt = candidates.find((aFilePath: string): boolean => { try { accessSync(aFilePath); return true; } catch { return false; } });

        if (foundAt === undefined) {
          throw new Error(`Could not file include file \"${toInclude}\" in include path: ${candidates.join(";")}`);
        }

        let includedFile = new FileInput(foundAt);
        await includedFile.read();
        next.replaceLineWith(aLine.location, includedFile);
        context.push(next);
        break;
      }
    }
  }

  return sourceFile;
}

// vim: set ts=2 sw=2 expandtab: