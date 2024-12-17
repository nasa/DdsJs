/**
 * @brief Contains the definition of the `CmakeJsBuildFileContext` class.
 * @author Rolando J. Nieves
 * @date 2024-12-16 17:02:20
 */

import path from "node:path";
import { IdlFile } from "../../dds-idl-compiler";


export class CmakeJsBuildFileContext {
  public readonly createDate: string;
  public readonly fileName: string;

  public constructor(public readonly subject: IdlFile, public readonly sourceFiles: string[]) {
    this.createDate = new Date().toISOString();
    this.fileName = path.join("cmake-js", `${subject.idlName}AddonUtilities.cmake`);
  }
}

// vim: set ts=2 sw=2 expandtab:
