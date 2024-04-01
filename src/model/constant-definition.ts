/**
 * @brief Contains the definition of the `ConstantDefinition` class.
 * @author Rolando J. Nieves
 * @date 2024-02-26 15:52:47
 */

import { BaseCodecProxy } from "./codec-proxy";
import { ScopeContainer } from "./scope-container";
import { ScopeMember } from "./scope-member";


export class ConstantDefinition implements ScopeMember {
  public readonly idlName: string;

  public constructor(public readonly name: string, public readonly constantType: BaseCodecProxy, public readonly owner: ScopeContainer) {
    this.idlName = name;
  }
}

// vim: set ts=2 sw=2 expandtab:
