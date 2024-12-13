/**
 * @brief Contains the definition for the `TypeSupportInstanceWrap` class.
 * @author Rolando J. Nieves
 * @date 2024-02-16 09:23:54
 */

import { CppNameGen, DestinationFolder, TypeSupportWrapHeader, TypeSupportWrapImplementation } from "../codegen";
import { CppInstanceWrapper } from "./cpp-instance-wrap";
import { DataReaderInstanceWrap } from "./data-reader-instance-wrap";
import { DataWriterInstanceWrap } from "./data-writer-instance-wrap";
import { ModuleBundle } from "./module-bundle";
import { OwnedCodecProxy } from "./owned-codec-proxy";


export class TypeSupportInstanceWrap extends CppInstanceWrapper {
  public constructor(supportedProxy: OwnedCodecProxy, nameGen: CppNameGen, public readonly readerWrap: DataReaderInstanceWrap, public readonly writerWrap: DataWriterInstanceWrap, public readonly owner: ModuleBundle) {
    super(supportedProxy, nameGen);
  }

  public emit(destination: DestinationFolder, providerHeaders: string[], providerName: string): void {
    this.providerHeaders = providerHeaders;
    this.providerName = providerName;

    if (this.headerFile === null) {
      this.headerFile = new TypeSupportWrapHeader(this, providerName);
    }

    if (this.implementationFile === null) {
      this.implementationFile = new TypeSupportWrapImplementation(this, providerName);
    }

    destination.write(this.headerFile, this);
    destination.write(this.implementationFile, this);
  }
}

// vim: set ts=2 sw=2 expandtab:
