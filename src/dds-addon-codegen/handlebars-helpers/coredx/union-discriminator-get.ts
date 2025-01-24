/**
 * @brief Contains the definition of the `unionDiscriminatorGet` Handlebars helper for CoreDX.
 * @author Rolando J. Nieves
 * @date 2025-01-21 14:51:48
 */

import { UnionDefinition } from "../../../dds-idl-compiler";


export function coreDxUnionDiscriminatorGet(subject: UnionDefinition): string {
  return "discriminator()";
}

// vim: set ts=2 sw=2 expandtab:
