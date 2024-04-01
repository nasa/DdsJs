/**
 * @brief Contains the definition of the `ContainerRegistry` class.
 * @author Rolando J. Nieves
 * @date 2024-02-26 11:41:06
 */

import { ScopeContainer } from "./scope-container";
import { isScopeMember } from "./scope-member";
import { ScopedName } from "./scoped-name";


export class ContainerRegistry {
  private contents: Map< string, ScopeContainer >;

  public constructor(private readonly owner: ScopeContainer) {
    this.contents = new Map< string, ScopeContainer >();
  }

  public lookup(ddsModuleScopedName: string): ScopeContainer | undefined {
    return this.contents.get(ddsModuleScopedName);
  }
  
  public refresh() {
    this.contents.clear();
    for (let aContainer of this.owner.scopeContainerIter()) {
      if (isScopeMember(aContainer)) {
        this.contents.set(aContainer.idlName, aContainer);
        // Only the root namespace in the top-level `Addon` class can be
        // self-referential.
        if (!isScopeMember(this.owner)) {
          this.contents.set(`${ScopedName.NS_SEP}${aContainer.idlName}`, aContainer);
        }
        aContainer.registry.refresh();
        for (let anEntry of aContainer.registry.contents) {
          let namePrefix = `${aContainer.idlName}${ScopedName.NS_SEP}`;
          this.contents.set(`${namePrefix}${anEntry[0]}`, anEntry[1]);
          // Only the root namespace in the top-level `Addon` class can be
          // self-referential.
          if (!isScopeMember(this.owner)) {
            this.contents.set(`${ScopedName.NS_SEP}${namePrefix}${anEntry[0]}`, anEntry[1]);
          }
        }
      }
    }
  }
}

// vim: set ts=2 sw=2 expandtab:
