/**
 * @brief Contains the definition of the `dataWriterBaseName` Handlebars helper for CoreDX.
 * @author Rolando J. Nieves
 * @date 2025-01-21 14:01:53
 */

import { Structure } from "../../../dds-idl-compiler";
import { typespecProxyName } from "../proxy-name";


export function coreDxDataWriterBaseName(subject: Structure): string {
  return `::DdsJs::DataWriterWrapBaseT< ${subject.name}DataWriter, ${typespecProxyName(subject, false)} >`;
}

// vim: set ts=2 sw=2 expandtab:
