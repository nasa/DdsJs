/**
 * @brief Contains the definition of the `ScopedName` class.
 * @author Rolando J. Nieves
 * @date 2024-10-28 10:39:44
 */

import { Identifier } from "../core";
import { ScopeMember } from "./scope-member";
import { ScopeMemberLogic } from "./scope-member-logic";


export interface ScopedNamePart {
  name: Identifier;
  entity: ScopeMember | null;
}

export class ScopedName {
  public readonly parts: ScopedNamePart[];

  public constructor(names: Identifier[]) {
    this.parts = names.map((aName: Identifier) => { return { name: aName, entity: null } });
  }

  public isResolved(): boolean {
    return this.parts.reduce((prev: boolean, current: ScopedNamePart) => prev && (current.entity !== null), true);
  }

  public leafEntity(): ScopeMember | null {
    let partCount = this.parts.length;
    if (partCount > 0) {
      return this.parts[partCount - 1].entity;
    } else {
      return null;
    }
  }

  public toString(): string {
    return this.parts.map((aPart: ScopedNamePart) => aPart.name.value).join(ScopeMemberLogic.SCOPE_SEP);
  }

  public static Concat(prevScopedName: ScopedName, nextName: Identifier): ScopedName {
    let result = new ScopedName(prevScopedName.parts.map((aPart: ScopedNamePart) => aPart.name).concat(nextName));
    for (let partIdx = 0; partIdx < prevScopedName.parts.length; partIdx++) {
      result.parts[partIdx].entity = prevScopedName.parts[partIdx].entity;
    }

    return result;
  }
  
  public static FromStrings(values: string[]): ScopedName {
    return new ScopedName(values.map((aVal: string) => new Identifier(aVal)));
  }

  public static FromParts(parts: ScopedNamePart[]): ScopedName {
    let result = new ScopedName(parts.map((aPart: ScopedNamePart) => aPart.name));
    for (let partIdx = 0; partIdx < parts.length; partIdx++) {
      result.parts[partIdx] = parts[partIdx];
    }
    return result;
  }
}

// vim: set ts=2 sw=2 expandtab:
