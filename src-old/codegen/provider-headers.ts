/**
 * @brief Contains the definition of the `enumerateProviderHeaders` function.
 * @author Rolando J. Nieves
 * @date 2024-10-22
 */

import { coreDxEnumerateProviderHeaders } from "./coredx";
import { cycloneDdsEnumerateProviderHeaders } from "./cyclonedds";


export function enumerateProviderHeaders(providerName: string, inputFileName: string): string[] {
  if (providerName === "CoreDX") {
    return coreDxEnumerateProviderHeaders(inputFileName);
  } else if (providerName === "CycloneDDS") {
    return cycloneDdsEnumerateProviderHeaders(inputFileName);
  } else {
    let msg = `Unsupported DDS provider "${providerName}".`;
    throw new Error(msg);
  }
}

// vim: set ts=2 sw=2 expandtab:
