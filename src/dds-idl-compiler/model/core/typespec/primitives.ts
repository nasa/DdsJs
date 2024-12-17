/**
 * @brief Contains the definition for primitive IDL types.
 * @author Rolando J. Nieves
 * @date 2024-10-31 17:30:41
 */

import { BaseTypeSpec } from "./base";


export type BitWidth = 8 | 16 | 32 | 64 | 128;

export type IntBitWidth = 8 | 16 | 32 | 64;

export type FloatBitWidth = 32 | 64 | 128;

export type CharBitWidth = 8 | 16;

export class NumericType extends BaseTypeSpec {
  public constructor(public readonly integer: boolean, public readonly signed: boolean, public readonly width: BitWidth) {
    super();
  }
}


export abstract class IntegerType extends NumericType {
  public constructor(signed: boolean, width: IntBitWidth) {
    super(true, signed, width);
  }

  public abstract get lowLimit(): bigint;

  public abstract get highLimit(): bigint;

  public valueInRange(value: number | bigint): boolean {
    return (value >= this.lowLimit) && (value <= this.highLimit);
  }
}


export class SignedIntegerType extends IntegerType {
  public readonly lowLimit: bigint;
  public readonly highLimit: bigint;

  public constructor(width: IntBitWidth) {
    super(true, width);
    this.lowLimit = -1n * BigInt(0b1 << (this.width - 1));
    this.highLimit = BigInt(0b1 << (this.width - 1));
  }
}


export class UnsignedIntegerType extends IntegerType {
  public readonly lowLimit: bigint;
  public readonly highLimit: bigint;

  public constructor(width: IntBitWidth) {
    super(false, width);
    this.lowLimit = 0n;
    this.highLimit = BigInt(0b1 << this.width);
  }
}


export class Int8Type extends SignedIntegerType {
  public constructor() {
    super(8);
  }
}


export class Int16Type extends SignedIntegerType {
  public constructor() {
    super(16);
  }
}


export class Int32Type extends SignedIntegerType {
  public constructor() {
    super(32);
  }
}


export class Int64Type extends SignedIntegerType {
  public constructor() {
    super(64);
  }
}


export class Uint8Type extends UnsignedIntegerType {
  public constructor() {
    super(8);
  }
}


export class Uint16Type extends UnsignedIntegerType {
  public constructor() {
    super(16);
  }
}


export class Uint32Type extends UnsignedIntegerType {
  public constructor() {
    super(32);
  }
}

export class Uint64Type extends UnsignedIntegerType {
  public constructor() {
    super(64);
  }
}


export class FloatingPointType extends NumericType {
  public constructor(width: FloatBitWidth) {
    super(false, true, width);
  }
}


export class SinglePrecisionFloatingPointType extends FloatingPointType {
  public constructor() {
    super(32);
  }
}


export class DoublePrecisionFloatingPointType extends FloatingPointType {
  public constructor() {
    super(64);
  }
}


export class QuadPrecisionFloatingPointType extends FloatingPointType {
  public constructor() {
    super(128);
  }
}


export class OctetType extends UnsignedIntegerType {
  public constructor() {
    super(8);
  }
}


export class CharacterType extends BaseTypeSpec {
  public constructor(public readonly width: CharBitWidth) {
    super();
  }
}


export class BasicCharType extends CharacterType {
  public constructor() {
    super(8);
  }
}


export class WideCharType extends CharacterType {
  public constructor() {
    super(16);
  }
}


export class BooleanType extends BaseTypeSpec {
  public constructor() {
    super();
  }
}

// vim: set ts=2 sw=2 expandtab:
