/**
 * @brief Contains the definition of the `StructCodecProxy` class.
 * @author Rolando J. Nieves
 * @date 2024-02-15 18:18:16
 */

import { DestinationFolder, CppNameGen, StructProxyHeader, StructProxyImplementation } from "../codegen";
import { BaseCodecProxy } from "./codec-proxy";
import { ModuleBundle } from "./module-bundle";
import { OwnedCodecProxy } from "./owned-codec-proxy";


export class StructProxyMember {
  public readonly innerStructName: string;

  public constructor(public readonly name: string, public readonly proxyType: BaseCodecProxy) {
    this.innerStructName = `${name.charAt(0).toUpperCase()}${name.slice(1)}Field`;
  }
}


export class StructCodecProxy extends OwnedCodecProxy {
  private members: StructProxyMember[] = [];
  
  public constructor(idlName: string, owner: ModuleBundle, proxyNameGen: CppNameGen) {
    super(idlName, "Napi::Object", owner);
    this._name = proxyNameGen.proxyNameFor(this);
  }

  public addMember(newMember: StructProxyMember): void {
    let searchResult = this.members.findIndex((aMember) => aMember.name == newMember.name);
    if (searchResult !== -1) {
      let msg = `Redefinition of member "${newMember.name}" in "${this.name}".`;
      throw new Error(msg);
    }
    this.members.push(newMember);
  }

  public emit(destination: DestinationFolder, providerHeader: string, providerName: string): void {
    this.providerHeader = providerHeader;
    if (this.headerFile === null) {
      this.headerFile = new StructProxyHeader(this, providerName);
    }

    if (this.implementationFile === null) {
      this.implementationFile = new StructProxyImplementation(this, providerName);
    }

    destination.write(this.headerFile, this);
    destination.write(this.implementationFile, this);
  }

  public memberIterator(): IterableIterator< StructProxyMember > {
    return this.members.values();
  }
}

// vim: set ts=2 sw=2 expandtab:
