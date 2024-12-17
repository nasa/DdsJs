/**
 * @brief Contains the definition of the `unionDiscriminatorGet` Handlebars helper for CycloneDDS
 * @author Rolando J. Nieves
 * @date 2024-11-25 14:45:19
 */

import { UnionDefinition } from "../../../dds-idl-compiler";


export function cycloneDdsUnionDiscriminatorGet(subject: UnionDefinition): string {
  return "_d";
}

// vim: set ts=2 sw=2 expandtab:
