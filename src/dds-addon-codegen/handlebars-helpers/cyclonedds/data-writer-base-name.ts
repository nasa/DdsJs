/**
 * @brief Contains the definition of the `dataWriterBaseName` Handlebars helper for CycloneDDS.
 * @author Rolando J. Nieves
 * @date 2024-12-09 10:32:36
 */

import { Structure } from "../../../dds-idl-compiler";
import { typespecProxyName } from "../proxy-name";


export function cycloneDdsDataWriterBaseName(subject: Structure): string {
  return `::DdsJs::DataWriterWrapBaseT< ${typespecProxyName(subject, false)} >`;
}

// vim: set ts=2 sw=2 expandtab:
