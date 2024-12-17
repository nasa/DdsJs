/**
 * @brief Contains the definition of the `DestinationFolder` class.
 * @author Rolando J. Nieves
 * @date 2024-03-01 14:11:36
 */

import fs from "node:fs";
import path from "node:path";


export class DestinationFolder {
  public constructor(public readonly folderPath: string) {}

  public write(content: string, relativeDestination: string): void {
    let destinationPath = path.join(this.folderPath, relativeDestination);
    fs.mkdirSync(path.dirname(destinationPath), { recursive: true });
    fs.writeFileSync(destinationPath, content, { encoding: "utf-8" });
  }
}

// vim: set ts=2 sw=2 expandtab:
