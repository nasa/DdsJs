/**
 * @brief Contains the definition of the `ImplementationFileBase` class.
 * @author Rolando J. Nieves
 * @date 2024-02-29 17:25:53
 */

import path from "node:path";
import { HeaderFileInformation } from "./header-file";
import { TemplateGeneratedSource } from "./template-generated-source";


export abstract class ImplementationFileBase< TemplateContext = any > extends TemplateGeneratedSource< TemplateContext > {
  public readonly cppFileName: string;

  public constructor(templateName: string, baseName: string, dirPath: string[]) {
    super(templateName);
    let fileNameComponents = dirPath.concat(`${baseName}.cpp`);
    this.cppFileName = path.join(...fileNameComponents);
  }

  public get filePath(): string {
    return this.cppFileName;
  }
}

// vim: set ts=2 sw=2 expandtab:
