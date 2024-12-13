/**
 * @brief Contains the definition of the `HeaderFileBase` class.
 * @author Rolando J. Nieves
 * @date 2024-02-29 16:36:33
 */

import path from "node:path";
import { v4 as uuidv4 } from "uuid";
import { TemplateGeneratedSource } from "./template-generated-source";


export interface HeaderFileInformation {
  readonly headerFileName: string;
}

export abstract class HeaderFileBase< TemplateContext = any > extends TemplateGeneratedSource< TemplateContext > implements HeaderFileInformation {
  public readonly headerFileName: string;
  public readonly includeGuard: string;

  public constructor(templateName: string, providerName: string, baseName: string, dirPath: string[]) {
    super(templateName, providerName);
    let fileNameComponents = dirPath.concat(`${baseName}.hh`);
    this.headerFileName = path.join(...fileNameComponents);
    this.includeGuard = `_${baseName}_hh_${uuidv4().replace(/\-/g, "_")}_`.toUpperCase();
  }

  public get filePath(): string {
    return this.headerFileName;
  }
}

// vim: set ts=2 sw=2 expandtab:
