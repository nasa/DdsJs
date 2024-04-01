/**
 * @brief Contains the definition of the `ScopeMember` interface.
 * @author Rolando J. Nieves
 * @date 2024-02-16 11:59:25
 */

import { ScopeContainer, isScopeContainer } from "./scope-container";


export interface ScopeMember {
  readonly idlName: string;
  readonly name: string;
  readonly owner: ScopeContainer;
}


export function isScopeMember(obj: any): obj is ScopeMember {
  return (typeof(obj) === "object") &&
    (obj.hasOwnProperty("idlName") && (typeof(obj.idlName) === "string")) &&
    (obj.hasOwnProperty("name") && (typeof(obj.name) === "string")) &&
    (obj.hasOwnProperty("owner") && isScopeContainer(obj.owner));
}

// vim: set ts=2 sw=2 expandtab:
