/**
 * @brief Contains the definition of the `FileInput` class.
 * @author Rolando J. Nieves
 * @date 2024-11-07 15:03:14
 */

import path from "node:path";
import { open as fsOpen } from "node:fs/promises";
import { LocationInformation } from "./location-info"


export interface FileInputLine {
  location: LocationInformation;
  text: string;
}

export class FileInput {
  private contents: FileInputLine[];

  public constructor(public readonly filePath: string) {
    this.contents = [];
  }

  public get nameStem(): string {
    return path.parse(this.filePath).name;
  }

  public flatten(): string {
    return this.contents.map((aLine: FileInputLine) => aLine.text).join("\n");
  }

  public locationForLine(lineNum: number): LocationInformation {
    if (this.contents.length > lineNum) {
      return this.contents[lineNum].location;
    } else {
      throw new RangeError(`Line number (${lineNum}) not in input.`);
    }
  }

  public async read(): Promise< number > {
    const inputFile = await fsOpen(this.filePath);
    let lineNum = 0;
    for await (const aLine of inputFile.readLines()) {
      this.contents.push({ text: aLine, location: new LocationInformation(this.filePath, lineNum++) });
    }

    return this.contents.length;
  }

  public removeLine(lineLoc: LocationInformation): void {
    let contentIdx = this.contents.findIndex((aLine: FileInputLine) => aLine.location.matches(lineLoc));
    if (contentIdx !== -1) {
      this.contents.splice(contentIdx, 1);
    }
  }

  public replaceLineWith(lineLoc: LocationInformation, newContents: FileInput): void {
    let contentIdx = this.contents.findIndex((aLine: FileInputLine) => aLine.location.matches(lineLoc));
    if (contentIdx !== -1) {
      this.contents.splice(contentIdx, 1, ...newContents.contents);
    }
  }

  public [Symbol.iterator]() {
    return this.contents[Symbol.iterator]();
  }
}

// vim: set ts=2 sw=2 expandtab:
