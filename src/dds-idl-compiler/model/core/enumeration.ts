/**
 * @brief Contains the definition of the `Enumeration` class.
 * @author Rolando J. Nieves
 * @date 2024-11-12 16:25:09
 */

import { NamingScope, ScopeMember } from "../scoping";
import { SimpleDeclarator } from "./declarator";
import { Enumerator } from "./enumerator";
import { EnumeratorContainer } from "./enumerator-container";
import { Identifier } from "./identifier";
import { DeclaredTypeSpec } from "./typespec";


export class Enumeration extends DeclaredTypeSpec implements EnumeratorContainer {
  private enumerators: Enumerator[];

  public constructor(name: Identifier, owningScope: NamingScope) {
    super(new SimpleDeclarator(name, owningScope));
    this.enumerators = [];
  }

  public createEnumerator(mnemonic: Identifier): void {
    let enumerator = new Enumerator(mnemonic, this.owningScope, this.enumerators.length, this);
    this.owningScope.addMember(enumerator);
    this.enumerators.push(enumerator);
  }

  public isOwnEnumerator(member: ScopeMember): boolean {
    return (member instanceof Enumerator) &&
      (this.enumerators.indexOf(member) !== -1);
  }

  public nextTo(theEnum: Enumerator): Enumerator | undefined {
    let enumIdx = theEnum.value;
    let enumCount = this.enumerators.length;
    if ((enumCount > 0) && (enumIdx < (enumCount - 1))) {
      return this.enumerators[++enumIdx];
    }
  }

  public priorTo(theEnum: Enumerator): Enumerator | undefined {
    let enumIdx = theEnum.value;
    if (enumIdx > 0) {
      return this.enumerators[--enumIdx];
    }
  }

  public [Symbol.iterator]() {
    return this.enumerators[Symbol.iterator]();
  }
}

// vim: set ts=2 sw=2 expandtab:
