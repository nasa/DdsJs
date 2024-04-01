/**
 * @brief Contains the definition of the `ModuleBundleImplementation` class.
 * @author Rolando J. Nieves
 * @date 2024-03-01 16:26:47
 */

import { EnumCodecProxy, ModuleBundle, OwnedCodecProxy, TypeAliasCodecProxy } from "../model";
import { IdlModuleInfo, makeModuleInfo } from "./idl-module-info";
import { ImplementationFileBase } from "./implementation-file";


export interface CodecInitInfo {
  name: string;
  noCtorReg: boolean;
}

export class ModuleBundleImplementation extends ImplementationFileBase< ModuleBundle > {
  public static readonly TEMPLATE_NAME = "module.cpp.handlebars";
  public readonly hasCodecProxies: boolean;
  public readonly hasConstants: boolean;
  public readonly hasSubModules: boolean;
  public readonly hasWrappers: boolean;
  public readonly initEligibleProxies: CodecInitInfo[];
  public readonly subModuleMap: IdlModuleInfo[];

  public constructor(module: ModuleBundle) {
    super(ModuleBundleImplementation.TEMPLATE_NAME, module.name, module.namespaceStack);
    this.initEligibleProxies = Array.from(module.codecProxyIter())
    .filter((aProxy) => !(aProxy instanceof TypeAliasCodecProxy))
    .map< CodecInitInfo >((aProxy) => { return { name: aProxy.name, noCtorReg: (aProxy instanceof EnumCodecProxy) }; });
    this.hasCodecProxies = this.initEligibleProxies.length > 0;
    this.hasConstants = (module.constantDefinitionIter().next().value !== undefined);
    this.hasSubModules = (module.scopeContainerIter().next().value !== undefined);
    this.hasWrappers = (module.wrapperIter().next().value !== undefined);
    this.subModuleMap = Array.from(module.scopeContainerIter() as IterableIterator< ModuleBundle >).map((aSubModule) => makeModuleInfo(aSubModule));
  }
}

// vim: set ts=2 sw=2 expandtab:
