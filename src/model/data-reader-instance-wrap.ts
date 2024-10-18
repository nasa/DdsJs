/**
 * @brief Contains the definition of the `DataReaderInstanceWrap` class.
 * @author Rolando J. Nieves
 * @date 2024-03-08 16:45:41
 */

import { CppNameGen, DataReaderWrapHeader, DataReaderWrapImplementation, DestinationFolder } from "../codegen";
import { CppInstanceWrapper } from "./cpp-instance-wrap";
import { ModuleBundle } from "./module-bundle";
import { OwnedCodecProxy } from "./owned-codec-proxy";


export class DataReaderInstanceWrap extends CppInstanceWrapper {
  public readonly fullJsClassName: string;

  public constructor(supportedProxy: OwnedCodecProxy, nameGen: CppNameGen, public readonly owner: ModuleBundle) {
    super(supportedProxy, nameGen);
    this.fullJsClassName = owner.namespaceStack.join(".") + `.${this.cppCounterpartName}`;
  }

  public emit(destination: DestinationFolder, providerHeader: string, providerName: string): void {
    this.providerHeader = providerHeader;

    if (this.headerFile === null) {
      this.headerFile = new DataReaderWrapHeader(this, providerName);
    }

    if (this.implementationFile === null) {
      this.implementationFile = new DataReaderWrapImplementation(this, providerName);
    }

    destination.write(this.headerFile, this);
    destination.write(this.implementationFile, this);
  }
}

// vim: set ts=2 sw=2 expandtab:
