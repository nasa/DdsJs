/**
 * @brief Contains the definition of the `HeaderDependency` class.
 * @author Rolando J. Nieves
 * @date 2024-03-12 17:12:35
 */

import { ArrayProxy, BaseCodecProxy, BoundedSequenceProxy, OwnedCodecProxy, StructCodecProxy, UnboundedSequenceProxy, UnionCodecProxy } from "../model";


export class HeaderDependency {
  public constructor(public readonly startingFrom: BaseCodecProxy) {}

  public gather(): string | null {
    let result: string | null = null;

    if ((this.startingFrom instanceof OwnedCodecProxy) && (this.startingFrom.headerFile !== null)) {
      result = this.startingFrom.headerFile.headerFileName;
    } else if (this.startingFrom instanceof UnboundedSequenceProxy) {
      result = new HeaderDependency(this.startingFrom.elemProxy).gather();
    } else if (this.startingFrom instanceof BoundedSequenceProxy) {
      result = new HeaderDependency(this.startingFrom.elemProxy).gather();
    } else if (this.startingFrom instanceof ArrayProxy) {
      result = new HeaderDependency(this.startingFrom.elemProxy).gather();
    }

    return result;
  }
}

// vim: set ts=2 sw=2 expandtab:
