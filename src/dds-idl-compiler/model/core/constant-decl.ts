/**
 * @brief Contains the definition of the `ConstantDeclaration` class.
 * @author Rolando J. Nieves
 * @date 2024-11-05 15:31:58
 */

import { NamingScope, ScopedName, ScopeMember, ScopeMemberLogic } from "../scoping";
import { BooleanConstantValue, CharacterConstantValue, ConstantValue, IntegerConstantValue, OctetConstantValue, RealConstantValue, StringConstantValue } from "./constant-value";
import { Identifier } from "./identifier";
import { TypeAlias } from "./type-alias";
import { BaseTypeSpec, BasicCharType, BooleanType, FloatingPointType, IntegerType, OctetType, StringType, WideCharType } from "./typespec";


export class ConstantDeclaration implements ScopeMember {
  public readonly constantValue: ConstantValue;
  private smLogic: ScopeMemberLogic;

  public constructor(public readonly owningScope: NamingScope, public readonly name: Identifier, public readonly constantType: BaseTypeSpec, constantValue: ConstantValue) {
    this.smLogic = new ScopeMemberLogic();
    this.constantValue = this.coerceConstantValue(constantType, constantValue);
  }

  public get fullyQualifiedName(): string {
    return this.smLogic.buildFullyQualifiedName(this);
  }

  public get scopedName(): ScopedName {
    return this.smLogic.scopedName(this);
  }

  public coerceConstantValue(typespec: BaseTypeSpec, constantValue: ConstantValue): ConstantValue {
    if (typespec instanceof TypeAlias) {
      typespec = typespec.resolvesTo();
    }
    if (typespec instanceof IntegerType) {
      return IntegerConstantValue.Coerce(constantValue);
    } else if (typespec instanceof FloatingPointType) {
      return RealConstantValue.Coerce(constantValue);
    } else if (typespec instanceof BasicCharType) {
      return CharacterConstantValue.Coerce(constantValue);
    } else if (typespec instanceof WideCharType) {
      return CharacterConstantValue.Coerce(constantValue);
    } else if (typespec instanceof BooleanType) {
      return BooleanConstantValue.Coerce(constantValue);
    } else if (typespec instanceof OctetType) {
      return OctetConstantValue.Coerce(constantValue);
    } else if (typespec instanceof StringType) {
      // For now, we're not treating basic and wide strings differently.
      return StringConstantValue.Coerce(constantValue);
    } else {
      let msg = "Incompatible type for constant.";
      throw new Error(msg);
    }
  }
}

// vim: set ts=2 sw=2 expandtab:
