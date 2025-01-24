/**
 * @brief Contains the definition of the `registerHandlebarsPartials()` function.
 * @author Rolando J. Nieves
 * @date 2024-12-06 15:22:28
 */

import { registerCoreDxPartials } from "./coredx/register";
import { registerCycloneDdsPartials } from "./cyclonedds/register";


export function registerHandlebarsPartials(providerName: string): void {
  if (providerName == "CycloneDDS") {
    registerCycloneDdsPartials();
  } else if (providerName === "CoreDX") {
    registerCoreDxPartials();
  }
}

// vim: set ts=2 sw=2 expandtab:
