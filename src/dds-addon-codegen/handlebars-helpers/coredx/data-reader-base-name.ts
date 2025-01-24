/**
 * @brief Contains the definition of the `dataReaderBaseName` Handlebars helper for CoreDX.
 * @author Rolando J. Nieves
 * @date 2025-01-21 13:34:05
 */

import { Structure } from "../../../dds-idl-compiler";
import { typespecProxyName } from "../proxy-name";


export function coreDxDataReaderBaseName(subject: Structure): string {
  return `::DdsJs::DataReaderWrapBaseT< ${subject.name}DataReader, ${typespecProxyName(subject, false)} >`;
}

// vim: set ts=2 sw=2 expandtab:
