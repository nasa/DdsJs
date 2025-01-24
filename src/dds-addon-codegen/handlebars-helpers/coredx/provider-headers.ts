/**
 * @brief Contains the definition of the `providerHeaders` Handlebars helper for CoreDX.
 * @author Rolando J. Nieves
 * @date 2025-01-21 14:13:29
 */

import Handlebars from "handlebars";
import { IdlFile, ScopeMember } from "../../../dds-idl-compiler";


export function coreDxProviderHeaders(subject: ScopeMember, options: Handlebars.HelperOptions): string {
  let top = subject;

  while (top.owningScope !== null) {
    top = top.owningScope;
  }

  if (top instanceof IdlFile) {
    let headers = [".hh", "DataReader.hh", "DataWriter.hh", "TypeSupport.hh"].map((aSuffix: string) => `${top.idlName}${aSuffix}`);
    return headers.map((aHeader: string) => options.fn(aHeader)).join("");
  } else {
    return options.fn("unknown");
  }
}

// vim: set ts=2 sw=2 expandtab:
