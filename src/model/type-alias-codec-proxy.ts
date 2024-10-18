/**
 * @brief Contains the definition of the `TypeAliasCodecProxy` class.
 * @author Rolando J. Nieves
 * @date 2024-02-15 18:13:23
 */

import { DestinationFolder, CppNameGen, TypeAliasProxyHeader } from "../codegen";
import { BaseCodecProxy } from "./codec-proxy";
import { ModuleBundle } from "./module-bundle";
import { OwnedCodecProxy } from "./owned-codec-proxy";


export class TypeAliasCodecProxy extends OwnedCodecProxy {

  public constructor(idlName: string, public readonly aliasFor: BaseCodecProxy, owner: ModuleBundle, proxyNameGen: CppNameGen) {
    super(idlName, `${aliasFor.name}::NapiContainer`, owner);
    this._name = proxyNameGen.proxyNameFor(this);
  }

  public emit(destination: DestinationFolder, providerHeader: string, providerName: string): void {
    this.providerHeader = providerHeader;
    if (this.headerFile === null) {
      this.headerFile = new TypeAliasProxyHeader(this);
    }

    destination.write(this.headerFile, this);
  }
}

// vim: set ts=2 sw=2 expandtab:
