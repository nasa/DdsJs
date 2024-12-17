/**
 * @brief Contains the definition of the `Annotatable` interface.
 * @author Rolando J. Nieves
 * @date 2024-11-18 10:45:46
 */

import { Annotation } from "./annotation";


export interface Annotatable {
  annotations(): { [Symbol.iterator]: () => Iterator< Annotation > };
  replaceAnnotations(newAnnotations: Annotation[]): void;
}

export function isAnnotatable(obj: any): obj is Annotatable {
  return (typeof obj === "object") &&
    (("annotations" in obj) && (typeof obj.annotations === "function")) &&
    (("replaceAnnotations" in obj) && (typeof obj.replaceAnnotations === "function"));
}

// vim: set ts=2 sw=2 expandtab:
