/**
 * @brief Contains the definition of the `generatedDataReaderName` Handlebars helper for CoreDX.
 * @author Rolando J. Nieves
 * @date 2025-01-21 16:46:01
 */

import { Structure } from "../../../dds-idl-compiler";


export function coreDxGeneratedDataReaderName(subject: Structure): string {
  return `${subject.name}DataReader`;
}

// vim: set ts=2 sw=2 expandtab:
