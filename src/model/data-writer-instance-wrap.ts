/**
 * @brief Contains the definition of the `DataWriterInstanceWrap` class.
 * @author Rolando J. Nieves
 * @date 2024-03-08 16:55:50
 */

import { CppNameGen, DestinationFolder } from "../codegen";
import { DataWriterWrapHeader } from "../codegen/data-writer-wrap-header";
import { DataWriterWrapImplementation } from "../codegen/data-writer-wrap-implementation";
import { CppInstanceWrapper } from "./cpp-instance-wrap";
import { ModuleBundle } from "./module-bundle";
import { OwnedCodecProxy } from "./owned-codec-proxy";


export class DataWriterInstanceWrap extends CppInstanceWrapper {
  public readonly fullJsClassName: string;

  public constructor(supportedProxy: OwnedCodecProxy, nameGen: CppNameGen, public readonly owner: ModuleBundle) {
    super(supportedProxy, nameGen);
    this.fullJsClassName = owner.namespaceStack.join(".") + `.${this.cppCounterpartName}`;
  }

  public emit(destination: DestinationFolder, providerHeader: string, providerName: string): void {
    this.providerHeader = providerHeader;

    if (this.headerFile === null) {
      this.headerFile = new DataWriterWrapHeader(this, providerName);
    }

    if (this.implementationFile === null) {
      this.implementationFile = new DataWriterWrapImplementation(this, providerName);
    }

    destination.write(this.headerFile, this);
    destination.write(this.implementationFile, this);
  }
}

// vim: set ts=2 sw=2 expandtab:
