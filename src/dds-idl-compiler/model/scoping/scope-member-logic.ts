/**
 * @brief Contains the definition of the `ScopeMemberLogic` class.
 * @author Rolando J. Nieves
 * @date 2024-10-28 09:49:40
 */

import { ScopeMember } from "./scope-member";
import { ScopedName, ScopedNamePart } from "./scoped-name";


export class ScopeMemberLogic {
  public static readonly SCOPE_SEP: string = "::";

  public buildFullyQualifiedName(member: ScopeMember): string {
    return this.scopedName(member).parts.map((aPart: ScopedNamePart) => aPart.name.value).join(ScopeMemberLogic.SCOPE_SEP);
  }

  public scopedName(member: ScopeMember): ScopedName {
    let nameParts: ScopedNamePart[] = [];
    let current: ScopeMember | null = member;

    while (current !== null) {
      nameParts.unshift({ name: current.name, entity: current });
      current = current.owningScope;
    }

    return ScopedName.FromParts(nameParts);
  }
}

// vim: set ts=2 sw=2 expandtab:
