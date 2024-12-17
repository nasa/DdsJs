/**
 * @brief Contains the definition of the `HeaderFileContext` class.
 * @author Rolando J. Nieves
 * @date 2024-11-19 14:45:16
 */

import { IdlFile, Module, ScopeMember } from "../../dds-idl-compiler";
import path from "node:path";
import { v4 as uuidv4 } from "uuid";


export class HeaderFileContext {
  public readonly createDate: string;
  public readonly fileName: string;
  public readonly includeGuard: string;
  public readonly namespaceStack: string[];

  public constructor(public readonly providerName: string, public readonly subject: ScopeMember, public readonly suffix: string = "") {
    this.createDate = new Date().toISOString();
    this.namespaceStack = subject.owningScope?.scopedName.parts.map((aPart) => aPart.name.value) || [];
    if (subject instanceof IdlFile) {
      // File name calculation of the top-level IdlFile subjec is peculiar.
      this.fileName = `${subject.idlName}Addon.hh`;
    } else {
      // Trim off the `IdlFile` top-level naming scope. It does not show up as a namespace
      this.namespaceStack.splice(0, 1);
      if (subject instanceof Module) {
        this.namespaceStack.push(`${subject.name}`);
      }
      this.fileName = path.join(...this.namespaceStack, `${subject.name}${suffix}.hh`);
    }
    let headerUuid = uuidv4();
    this.includeGuard = `_${this.fileName}_${headerUuid}_`.replace(/[^a-zA-Z0-9_]/g, "_").toUpperCase();
  }
}

// vim: set ts=2 sw=2 expandtab:
