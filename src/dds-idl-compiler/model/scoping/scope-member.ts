/**
 * @brief Contains the definition of the `ScopeMember` interface.
 * @author Rolando J. Nieves
 * @date 2024-10-24 17:38:44
 */

import { Identifier } from "../core";
import { isNamingScope, NamingScope } from "./naming-scope";
import { ScopedName } from "./scoped-name";


export interface ScopeMember {
  readonly name: Identifier;
  readonly owningScope: NamingScope | null;

  get fullyQualifiedName(): string;

  get scopedName(): ScopedName;
}

export function isScopeMember(obj: any): obj is ScopeMember {
  return (typeof obj === "object") &&
    (("name" in obj) && (obj.name instanceof Identifier)) &&
    (("owningScope" in obj) && ((obj.owningScope === null) || isNamingScope(obj.owningScope))) &&
    (("fullyQualifiedName" in obj) && (typeof obj.fullyQualifiedName === "string")) &&
    (("scopedName" in obj) && (obj.scopedName instanceof ScopedName));
}

// vim: set ts=2 sw=2 expandtab:
