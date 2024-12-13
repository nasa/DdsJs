/**
 * @brief Contains the definition of the `ScopeContainer` interface.
 * @author Rolando J. Nieves
 * @date 2024-02-16 12:01:20
 */

import { ContainerRegistry } from "./container-registry";
import { ScopeMember } from "./scope-member";


export interface ScopeContainer {
  readonly namespaceStack: string[];
  readonly registry: ContainerRegistry;
  memberByIdlName(idlName: string): ScopeMember | undefined;
  memberByName(memberName: string): ScopeMember | undefined;
  scopeContainerIter(): IterableIterator< ScopeContainer >;
}


export function isScopeContainer(obj: any): obj is ScopeContainer {
  return (typeof(obj) === "object") &&
    (obj.hasOwnProperty("namespaceStack") && Array.isArray(obj.namespaceStack)) &&
    (obj.hasOwnProperty("registry") && (obj.registry instanceof ContainerRegistry)) &&
    (("memberByIdlName" in obj) && (typeof(obj.memberByIdlName) === "function")) &&
    (("memberByName" in obj) && (typeof(obj.memberByName) === "function")) &&
    (("scopeContainerIter" in obj) && (typeof(obj.scopeContainerIter) === "function"));
}

// vim: set ts=2 sw=2 expandtab:
