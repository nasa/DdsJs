/**
 * @brief Contains the definition of the `DataWriterWrapImplementation` class.
 * @author Rolando J. Nieves
 * @date 2024-03-15 12:57:14
 */

import { DataWriterInstanceWrap } from "../model";
import { ImplementationFileBase } from "./implementation-file";


export class DataWriterWrapImplementation extends ImplementationFileBase< DataWriterInstanceWrap > {
  public static readonly TEMPLATE_NAME: string = "data-writer-wrap.cpp.handlebars";

  public constructor(dataWriterWrap: DataWriterInstanceWrap, providerName: string) {
    super(DataWriterWrapImplementation.TEMPLATE_NAME, providerName, dataWriterWrap.name, dataWriterWrap.owner.namespaceStack);
  }
}

// vim: set ts=2 sw=2 expandtab:
