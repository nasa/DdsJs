/**
 * @brief Contains the definition of the `DataReaderWrapHeader` class.
 * @author Rolando J. Nieves
 * @date 2024-03-13 14:00:15
 */

import { DataReaderInstanceWrap } from "../model";
import { HeaderFileBase } from "./header-file";


export class DataReaderWrapHeader extends HeaderFileBase< DataReaderInstanceWrap > {
  public static readonly TEMPLATE_NAME: string = "data-reader-wrap.hh.handlebars";
  public proxyTypeHeader: string | undefined;

  public constructor(drWrap: DataReaderInstanceWrap, providerName: string) {
    super(DataReaderWrapHeader.TEMPLATE_NAME, providerName, drWrap.name, drWrap.owner.namespaceStack);
    this.proxyTypeHeader = drWrap.supportedProxy.headerFile?.headerFileName;
  }
}

// vim: set ts=2 sw=2 expandtab:
