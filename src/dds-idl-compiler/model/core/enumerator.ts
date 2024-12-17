/**
 * @brief Contains the definition of the `Enumerator` class.
 * @author Rolando J. Nieves
 * @date 2024-11-12 16:28:17
 */

import { ScopeMember, ScopeMemberLogic, NamingScope, ScopedName } from "../scoping";
import { ConstantValue } from "./constant-value";
import { EnumeratorContainer } from "./enumerator-container";
import { Identifier } from "./identifier";


export class Enumerator extends ConstantValue implements ScopeMember {
  private smLogic: ScopeMemberLogic;

  public constructor(public readonly mnemonic: Identifier, public readonly owningScope: NamingScope, public readonly value: number, public readonly container: EnumeratorContainer) {
    super();
    this.smLogic = new ScopeMemberLogic();
  }

  public get name(): Identifier {
    return this.mnemonic;
  }

  public get fullyQualifiedName(): string {
    return this.smLogic.buildFullyQualifiedName(this);
  }

  public get scopedName(): ScopedName {
    return this.smLogic.scopedName(this);
  }

  public equals(other: ConstantValue): boolean {
    return ((other instanceof Enumerator) && (other.value == this.value));
  }
  
  public nextValue(): ConstantValue | undefined {
    return this.container.nextTo(this);
  }

  public previousValue(): ConstantValue | undefined {
    return this.container.priorTo(this);
  }

  public toString(): string {
    return this.mnemonic.value;
  }

  public valid(): boolean {
    return true;
  }
}

// vim: set ts=2 sw=2 expandtab:
