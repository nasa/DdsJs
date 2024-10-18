/**
 * @brief Contains the definition of the `DdsJsAddon` class.
 * @author Rolando J. Nieves
 * @date 2022-02-15 17:32:08
 */

import { AddonMainHeader, AddonMainImplementation, DestinationFolder } from "../codegen";
import { ContainerRegistry } from "./container-registry";
import { ModuleBundle } from "./module-bundle";
import { ScopeContainer } from "./scope-container";
import { ScopeMember } from "./scope-member";


export class DdsJsAddon implements ScopeContainer {
  private modules: ModuleBundle[] = [];
  public readonly registry: ContainerRegistry;
  public readonly name: string;
  public readonly namespaceStack: string[] = [];
  public headerFile: AddonMainHeader | null;
  public implementationFile: AddonMainImplementation | null;
  public providerHeader: string | null;

  public constructor(public readonly idlName: string) {
    this.registry = new ContainerRegistry(this);
    this.name = `${idlName}Addon`;
    this.headerFile = null;
    this.implementationFile = null;
    this.providerHeader = null;
  }

  public addModule(newModule: ModuleBundle): void {
    let searchResult = this.findModuleByIdlName(newModule.idlName);
    if (searchResult !== undefined) {
      // If we find a module with the same name in our list, it better be the
      // same instance, or something went really wrong in the compilation
      // processing.
      if (newModule !== searchResult) {
        let msg = `Internal error: Re-opening of module "${newModule.idlName}" failed.`;
        throw new Error(msg);
      }
    } else {
      // Add new module
      this.modules.push(newModule);
    }
  }

  public collectSourceFiles(): string[] {
    let result: string[] = [];

    for (let aModule of this.modules) {
      result = result.concat(aModule.collectSourceFiles());
    }

    if (this.implementationFile !== null) {
      result.push(this.implementationFile.cppFileName);
    }

    return result.sort();
  }
  
  public emit(destination: DestinationFolder, providerHeader: string, providerName: string): void {
    this.providerHeader = providerHeader;
    for (let aModule of this.modules) {
      aModule.emit(destination, this.providerHeader, providerName);
    }
    if (this.headerFile === null) {
      this.headerFile = new AddonMainHeader(this.name, providerName);
    }
    if (this.implementationFile === null) {
      this.implementationFile = new AddonMainImplementation(this, providerName);
    }
    destination.write(this.headerFile, this);
    destination.write(this.implementationFile, this);
  }

  public findModuleByIdlName(idlName: string): ModuleBundle | undefined {
    return this.modules.find((aModule) => aModule.idlName == idlName);
  }

  public memberByIdlName(idlName: string): ScopeMember | undefined {
    return undefined;
  }

  public memberByName(memberName: string): ScopeMember | undefined {
    return undefined;
  }

  public moduleIter(): IterableIterator< ModuleBundle > {
    return this.modules.values();
  }

  public scopeContainerIter(): IterableIterator< ScopeContainer > {
    return this.modules.values();
  }
}

// vim: set ts=2 sw=2 expandtab:
