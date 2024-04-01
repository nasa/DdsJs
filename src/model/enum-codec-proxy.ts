/**
 * @brief Contains the definition of the `EnumCodecProxy` and `EnumPneumonic` classes.
 * @author Rolando J. Nieves
 * @date 2022-02-15 17:40:18
 */

import { DestinationFolder, EnumProxyHeader, EnumProxyImplementation, CppNameGen } from "../codegen";
import { LongProxy } from "./built-in-proxies";
import { ModuleBundle } from "./module-bundle";
import { OwnedCodecProxy } from "./owned-codec-proxy";


export class EnumMnemonic {
  public constructor(public readonly name: string) {}
};

export class EnumCodecProxy extends OwnedCodecProxy {
  public readonly mnemonicList: EnumMnemonic[] = [];

  public constructor(idlName: string, owner: ModuleBundle, proxyNameGen: CppNameGen) {
    super(idlName, new LongProxy(proxyNameGen).napiContainerName, owner, `${idlName}MnemonicValue`);
    this._name = proxyNameGen.proxyNameFor(this);
  }

  public addMnemonic(name: string) {
    let searchResult = this.mnemonicList.findIndex((aMnemonic) => aMnemonic.name == name);
    if (searchResult !== -1) {
      let msg = `Redefinition of mnemonic "${name}" in enum "${this.name}".`;
      throw new Error(msg);
    }
    this.mnemonicList.push(new EnumMnemonic(name));
  }

  public emit(destination: DestinationFolder, providerHeader: string): void {
    this.providerHeader = providerHeader;
    if (this.headerFile === null) {
      this.headerFile = new EnumProxyHeader(this);
    }
    if (this.implementationFile === null) {
      this.implementationFile = new EnumProxyImplementation(this);
    }

    destination.write(this.headerFile, this);
    destination.write(this.implementationFile, this);
  }
}

// vim: set ts=2 sw=2 expandtab:
