/**
 * @brief Contains the definition of the `DataWriterWrapHeader` class.
 * @author Rolando J. Nieves
 * @date 2024-03-15 12:56:45
 */

import { DataWriterInstanceWrap } from "../model";
import { HeaderFileBase } from "./header-file";


export class DataWriterWrapHeader extends HeaderFileBase< DataWriterInstanceWrap > {
  public static readonly TEMPLATE_NAME: string = "data-writer-wrap.hh.handlebars";
  public proxyTypeHeader: string | undefined;

  public constructor(drWrap: DataWriterInstanceWrap, providerName: string) {
    super(DataWriterWrapHeader.TEMPLATE_NAME, providerName, drWrap.name, drWrap.owner.namespaceStack);
    this.proxyTypeHeader = drWrap.supportedProxy.headerFile?.headerFileName;
  }
}

// vim: set ts=2 sw=2 expandtab:
