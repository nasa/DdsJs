/**
 * @brief Contains the definition for the `ContainerSearchScope` class.
 * @author Rolando J. Nieves
 * @date 2024-02-26 12:28:15
 */

import { ScopeContainer } from "./scope-container";
import { ScopeMember, isScopeMember } from "./scope-member";
import { ScopedName } from "./scoped-name";


export class ContainerSearchScope {
  private contents: ScopeContainer[];

  public constructor(public readonly forName: ScopedName, public readonly fromContainer: ScopeContainer) {
    this.contents = [];
    if (forName.parentName === null) {
      // No namespace explicitly offered, so search scope is the starting
      // container and all containers above it.
      let aMember: ScopeContainer | undefined = fromContainer;
      while (aMember !== undefined) {
        this.contents.push(aMember);
        if (isScopeMember(aMember)) {
          aMember = aMember.owner;
        } else {
          aMember = undefined;
        }
      }
    } else {
      // Namespace explicitly offered, so search scope is just that namespace,
      // located via the container registries of the starting container and all
      // above it.
      let aContainer: ScopeContainer | undefined = fromContainer;
      while (this.contents.length === 0 && aContainer !== undefined) {
        let aCandidate = aContainer.registry.lookup(forName.parentName.flatName);
        if (aCandidate !== undefined) {
          this.contents.push(aCandidate);
        }
        if (isScopeMember(aContainer)) {
          aContainer = aContainer.owner;
        } else {
          aContainer = undefined;
        }
      }
    }
  }

  public execute(): ScopeMember | undefined {
    let result: ScopeMember | undefined = undefined;
    let contentIter = this.contents.values();
    let nextInSearch = contentIter.next().value;
    while ((result === undefined) && (nextInSearch !== undefined)) {
      result = nextInSearch.memberByIdlName(this.forName.baseName);
      nextInSearch = contentIter.next().value;
    }

    return result;
  }
}

// vim: set ts=2 sw=2 expandtab:
