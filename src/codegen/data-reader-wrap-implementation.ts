/**
 * @brief Contains the definition of the `DataReaderWrapImplementation` class.
 * @author Rolando J. Nieves
 * @date 2024-03-14 12:29:25
 */

import { DataReaderInstanceWrap } from "../model";
import { ImplementationFileBase } from "./implementation-file";


export class DataReaderWrapImplementation extends ImplementationFileBase< DataReaderInstanceWrap > {
  public static readonly TEMPLATE_NAME: string = "data-reader-wrap.cpp.handlebars";

  public constructor(dataReaderWrap: DataReaderInstanceWrap) {
    super(DataReaderWrapImplementation.TEMPLATE_NAME, dataReaderWrap.name, dataReaderWrap.owner.namespaceStack);
  }
}

// vim: set ts=2 sw=2 expandtab:
