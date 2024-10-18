/**
 * @brief Contains the definition of the `ModuleBundle` class.
 * @date 2022-02-15 17:33:04
 * @author Rolando J. Nieves
 */

import { DestinationFolder, ModuleBundleHeader, ModuleBundleImplementation } from "../codegen";
import { ConstantDefinition } from "./constant-definition";
import { ContainerRegistry } from "./container-registry";
import { CppInstanceWrapper } from "./cpp-instance-wrap";
import { OwnedCodecProxy } from "./owned-codec-proxy";
import { ScopeContainer } from "./scope-container";
import { ScopeMember, isScopeMember } from "./scope-member";
import { ScopedName } from "./scoped-name";


export class ModuleBundle implements ScopeContainer, ScopeMember {
  private codecProxyList: OwnedCodecProxy[] = [];
  private constantList: ConstantDefinition[] = [];
  public headerFile: ModuleBundleHeader | null;
  public implementationFile: ModuleBundleImplementation | null;
  public readonly registry: ContainerRegistry;
  private subModuleList: ModuleBundle[] = [];
  private wrapperList: CppInstanceWrapper[] = [];
  public readonly name: string;
  public readonly idlName: string;
  public readonly fullyScopedName: string;
  public readonly fullyScopedJsName: string;
  public readonly namespaceStack: string[];
  public providerHeader: string | null;

  public constructor(idlName: string, public readonly owner: ScopeContainer) {
    this.registry = new ContainerRegistry(this);
    this.idlName = idlName;
    this.name = `${idlName}Module`;
    this.namespaceStack = [];
    let parent: ScopeContainer = this;
    while (parent instanceof ModuleBundle) {
      this.namespaceStack.unshift(parent.idlName);
      parent = parent.owner;
    }
    this.fullyScopedName = `${ScopedName.NS_SEP}${this.namespaceStack.join(ScopedName.NS_SEP)}${ScopedName.NS_SEP}${this.name}`;
    this.fullyScopedJsName = this.namespaceStack.join(".");
    this.headerFile = null;
    this.implementationFile = null;
    this.providerHeader = null;
  }

  public addConstantDefinition(constantDef: ConstantDefinition): void {
    let searchResult = this.constantList.findIndex((aConstant) => aConstant.name === constantDef.name);
    if (searchResult !== -1) {
      let msg = `Constant definition with name "${constantDef.name}" already exists in "${this.name}"`;
      throw new Error(msg);
    }
    this.constantList.push(constantDef);
  }

  public addOwnedCodecProxy(codecProxy: OwnedCodecProxy): void {
    let searchResult = this.codecProxyList.findIndex((aProxy) => aProxy.name === codecProxy.name);
    if (searchResult !== -1) {
      let msg = `Codec proxy with name "${codecProxy.name}" already exists in "${this.name}"`;
      throw new Error(msg);
    }
    this.codecProxyList.push(codecProxy);
  }

  public addSubModule(subModule: ModuleBundle): void {
    let searchResult = this.findSubModuleByName(subModule.name);
    if (searchResult !== undefined) {
      // If we find a module with the same name in our list, it better be the
      // same instance, or something went really wrong in the compilation
      // processing.
      if (subModule !== searchResult) {
        let msg = `Internal error: Re-opening of module "${subModule.name}" failed.`;
        throw new Error(msg);
      }
    } else {
      // Add new module
      this.subModuleList.push(subModule);
    }
  }

  public addWrapper(newWrapper: CppInstanceWrapper): void {
    let searchResult = this.wrapperList.findIndex((aWrapper) => aWrapper.name === newWrapper.name);
    if (searchResult !== -1) {
      let msg = `C++ wrapper with name "${newWrapper.name}" already exists in "${this.name}".`
      throw new Error(msg);
    }
    this.wrapperList.push(newWrapper);
  }

  public collectSourceFiles(): string[] {
    let result: string[] = [];

    // Collect the source files from all the submodules.
    for (let aSubmodule of this.subModuleList) {
      result = result.concat(aSubmodule.collectSourceFiles());
    }

    // Collect the source files from all our proxies.
    for (let aCodecProxy of this.codecProxyList) {
      if (aCodecProxy.implementationFile !== null) {
        result.push(aCodecProxy.implementationFile.cppFileName);
      }
    }

    // Collect the source files from all our C++ wrappers.
    for (let aWrapper of this.wrapperList) {
      if (aWrapper.implementationFile !== null) {
        result.push(aWrapper.implementationFile.cppFileName);
      }
    }

    // Add our module bundle source file.
    if (this.implementationFile !== null) {
      result.push(this.implementationFile.cppFileName);
    }

    return result.sort();
  }

  public constantDefinitionIter(): IterableIterator< ConstantDefinition > {
    return this.constantList.values();
  }
  
  public codecProxyIter(): IterableIterator< OwnedCodecProxy > {
    return this.codecProxyList.values();
  }

  public emit(destination: DestinationFolder, providerHeader: string, providerName: string): void {
    this.providerHeader = providerHeader;
    for (let aCodecProxy of this.codecProxyList) {
      aCodecProxy.emit(destination, this.providerHeader, providerName);
    }
    for (let aWrapper of this.wrapperList) {
      aWrapper.emit(destination, this.providerHeader, providerName);
    }
    for (let aSubmodule of this.subModuleList) {
      aSubmodule.emit(destination, this.providerHeader, providerName);
    }
    if (this.headerFile === null) {
      this.headerFile = new ModuleBundleHeader(this);
    }
    if (this.implementationFile === null) {
      this.implementationFile = new ModuleBundleImplementation(this);
    }

    destination.write(this.headerFile, this);
    destination.write(this.implementationFile, this);
  }

  public findSubModuleByName(moduleName: string): ModuleBundle | undefined {
    return this.subModuleList.find((aSubModule) => aSubModule.name == moduleName);
  }

  public memberByName(memberName: string): ScopeMember | undefined {
    let result: ScopeMember | undefined = undefined;

    for (let aCodecProxy of this.codecProxyList) {
      if (aCodecProxy.name === memberName) {
        result = aCodecProxy;
        break;
      }
    }

    return result;
  }

  public memberByIdlName(idlName: string): ScopeMember | undefined {
    let result: ScopeMember | undefined = undefined;

    for (let aCodecProxy of this.codecProxyList) {
      if (aCodecProxy.idlName === idlName) {
        result = aCodecProxy;
        break;
      }
    }

    return result;
  }

  public refreshRegistryHierarchy(): void {
    this.registry.refresh();
    let parentContainer: ScopeContainer | undefined = this.owner;
    while (parentContainer !== undefined) {
      parentContainer.registry.refresh();
      if (isScopeMember(parentContainer)) {
        parentContainer = parentContainer.owner;
      } else {
        parentContainer = undefined;
      }
    }
  }

  public scopeContainerIter(): IterableIterator< ScopeContainer > {
    return this.subModuleList.values();
  }

  public wrapperIter(): IterableIterator< CppInstanceWrapper > {
    return this.wrapperList.values();
  }
}

// vim: set ts=2 sw=2 expandtab:
