/**
 * @brief Contains the definition of the `ImplementationFileContext` class.
 * @author Rolando J. Nieves
 * @date 2024-11-22 10:09:10
 */
import path from "node:path";
import { IdlFile, Module, ScopeMember } from "../../dds-idl-compiler";
import { HeaderFileContext } from "./header-file";


export class ImplementationFileContext {
  public readonly companionHeaderFile: string;
  public readonly createDate: string;
  public readonly fileName: string;
  public readonly namespaceStack: string[];

  public constructor(public readonly providerName: string, public readonly subject: ScopeMember, public readonly suffix: string = "") {
    this.createDate = new Date().toISOString();
    this.namespaceStack = subject.owningScope?.scopedName.parts.map((aPart) => aPart.name.value) || [];
    this.companionHeaderFile = new HeaderFileContext(providerName, subject, suffix).fileName;
    if (subject instanceof IdlFile) {
      // File name calculation of the top-level IdlFile subjec is peculiar.
      this.fileName = `${subject.idlName}Addon.cpp`;
    } else {
      // Trim off the `IdlFile` top-level naming scope. It does not show up as a namespace
      this.namespaceStack.splice(0, 1);
      if (subject instanceof Module) {
        this.namespaceStack.push(`${subject.name}`);
      }
      this.fileName = path.join(...this.namespaceStack, `${subject.name}${suffix}.cpp`);
    }
  }
}

// vim: set ts=2 sw=2 expandtab:
