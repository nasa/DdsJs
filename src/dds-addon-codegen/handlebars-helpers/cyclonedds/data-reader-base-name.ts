/**
 * @brief Contains the definition of the `dataReaderBaseName` Handlebars helper for CycloneDDS.
 * @author Rolando J. Nieves
 * @date 2024-12-09 14:39:58
 */

import { Structure } from "../../../dds-idl-compiler";
import { typespecProxyName } from "../proxy-name";


export function cycloneDdsDataReaderBaseName(subject: Structure): string {
  return `::DdsJs::DataReaderWrapBaseT< ${typespecProxyName(subject, false)} >`;
}

// vim: set ts=2 sw=2 expandtab:
