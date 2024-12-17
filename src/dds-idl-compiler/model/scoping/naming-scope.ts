/**
 * @brief Contains the definition of the `NamingScope` interface.
 * @author Rolando J. Nieves
 * @date 2024-10-24 17:40:46
 */

import { Identifier } from "../core";
import { ScopeMember } from "./scope-member";
import { ScopedName } from "./scoped-name";


export interface NamingScope extends ScopeMember {
  readonly members: ScopeMember[];
  readonly guests: ScopeMember[];

  addMember(candidate: ScopeMember): void;
  findMember(name: Identifier): ScopeMember | undefined;
  introduceGuest(candidate: ScopeMember): void;
  search(term: ScopedName): boolean;
}

export function isNamingScope(obj: any): obj is NamingScope {
  return (typeof(obj) === "object") &&
    (obj !== null) &&
    ("members" in obj && Array.isArray(obj.members)) &&
    ("guests" in obj && Array.isArray(obj.guests));
}

// vim: set ts=2 sw=2 expandtab:
