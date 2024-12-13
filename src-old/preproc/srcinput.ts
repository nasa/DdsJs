/**
 * @brief Contains the definition of the `SourceInput` class.
 * @author Rolando J. Nieves
 * @date 2024-02-12 17:17:16
 */

import * as child_process from "node:child_process";
import * as fs from "node:fs";
import * as tmp from "tmp";
import { PreprocCompatibleConfig } from "../config";
import { LocationInfo } from "./locinfo";
import { PreProcessorCommand } from "./preproccmd";
import { PreProcessorLine } from "./preprocline";
import { LocationMap, PreProcessResult } from "./procresult";


export class SourceInput {
  public constructor(private readonly config: PreprocCompatibleConfig) {}

  public process(): PreProcessResult {
    let tempFile = tmp.tmpNameSync();
    let locMap: LocationMap = new LocationMap();
    let preProcCmd = new PreProcessorCommand(this.config, this.config.inputFile, tempFile);
    let preProcOutput: string[] = [];

    // Assuming here that if the pre-processor executable fails, it will not
    // leave the temporary file.
    child_process.execSync(preProcCmd.flat, { encoding: "utf-8" });
    try {
      // After the successful run of the pre-processor, we take ownership of the
      // temporary file, and clear it out regardless of what happens after.
      preProcOutput = fs.readFileSync(tempFile, { encoding: "utf-8" }).split("\n");
      let locInfo = new LocationInfo(this.config.inputFile, 1);
      for (let lineIdx = 0; lineIdx < preProcOutput.length; lineIdx++) {
        let aLine = preProcOutput[lineIdx];
        let preProcLine = new PreProcessorLine(aLine);
        if (preProcLine.valid()) {
          locInfo = new LocationInfo(preProcLine.fileName, preProcLine.lineNumber);
          locMap.set(lineIdx + 1, locInfo);
          // Clear out pre-processor directive
          preProcOutput[lineIdx] = "";
        } else {
          locMap.set(lineIdx + 1, locInfo);
          locInfo = locInfo.makeNext();
        }
      }
    } finally {
      fs.unlinkSync(tempFile);
    }
    return new PreProcessResult(preProcOutput.join("\n"), locMap);
  }
}

// vim: set ts=2 sw=2 expandtab:
