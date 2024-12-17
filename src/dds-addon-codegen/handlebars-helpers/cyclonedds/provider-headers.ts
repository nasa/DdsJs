/**
 * @brief Contains the definition of the `providerHeaders` Handlebars helper for CycloneDDS
 * @author Rolando J. Nieves
 * @date 2024-11-21 17:14:33
 */

import { IdlFile, ScopeMember } from "../../../dds-idl-compiler";


export function cycloneDdsProviderHeaders(subject: ScopeMember, options: Handlebars.HelperOptions): string {
  let top = subject;

  while (top.owningScope !== null) {
    top = top.owningScope;
  }

  if (top instanceof IdlFile) {
    return options.fn(`${top.idlName}.h`);
  } else {
    return options.fn("unknown");
  }
}

// vim: set ts=2 sw=2 expandtab:
