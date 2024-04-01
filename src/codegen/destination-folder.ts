/**
 * @brief Contains the definition of the `DestinationFolder` class.
 * @author Rolando J. Nieves
 * @date 2024-03-01 14:11:36
 */

import fs from "node:fs";
import path from "node:path";
import { TemplateGeneratedSource } from "./template-generated-source";


export class DestinationFolder {
  public constructor(public readonly folderPath: string) {}

  public write< TemplateContext = any >(sourceFile: TemplateGeneratedSource< TemplateContext >, context: TemplateContext): void {
    let destinationPath = path.join(this.folderPath, sourceFile.filePath);
    fs.mkdirSync(path.dirname(destinationPath), { recursive: true });
    fs.writeFileSync(destinationPath, sourceFile.generate(context), { encoding: "utf-8" });
  }
}