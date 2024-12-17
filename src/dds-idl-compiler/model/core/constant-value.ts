/**
 * @brief Contains the definition of the `ConstantValue` class and derivatives.
 * @author Rolando J. Nieves
 * @date 2024-11-05 12:18:53
 */


const SHIFT_LIMIT: number = 63;

export abstract class ConstantValue {
  public abstract equals(other: ConstantValue): boolean;
  public abstract nextValue(): ConstantValue | undefined;
  public abstract previousValue(): ConstantValue | undefined;
  public abstract toString(): string;
  public abstract valid(): boolean;
}

export class InvalidConstantValue extends ConstantValue{
  public equals(other: ConstantValue): boolean {
    throw new Error("Invalid constant cannot be compared for equality.");
  }

  public nextValue(): ConstantValue | undefined {
    throw new Error("Invalid constant does not have a next value.");
  }

  public previousValue(): ConstantValue | undefined {
    throw new Error("Invalid constant does not have a previous value.");
  }

  public toString(): string {
    throw new Error("Invalid constant cannot be expressed as a string.");
  }

  public valid(): boolean {
    return false;
  }
}

export class IntegerConstantValue extends ConstantValue {
  public readonly value: bigint;

  public constructor(input: number | string | bigint) {
    super();
    this.value = BigInt(input);
  }

  public equals(other: ConstantValue): boolean {
    return ((other instanceof IntegerConstantValue) && (other.value == this.value));
  }

  public nextValue(): ConstantValue | undefined {
    return new IntegerConstantValue(this.value + 1n);
  }

  public previousValue(): ConstantValue | undefined {
    return new IntegerConstantValue(this.value - 1n);
  }

  public toString(): string {
    return this.value.toString();
  }

  public valid(): boolean {
    return true;
  }

  public static Coerce(other: ConstantValue): IntegerConstantValue {
    if (other instanceof IntegerConstantValue) {
      return new IntegerConstantValue(other.value);
    } else if (other instanceof RealConstantValue) {
      return new IntegerConstantValue(BigInt(Math.floor(other.value)));
    } else {
      throw new Error("Cannot coerce constant value to integer.");
    }
  }
}

export class RealConstantValue extends ConstantValue {
  public readonly value: number;

  public constructor(input: number | string | bigint) {
    super();
    this.value = Number(input).valueOf();
  }
  
  public equals(other: ConstantValue): boolean {
    return ((other instanceof RealConstantValue) && (other.value == this.value));
  }

  public nextValue(): ConstantValue | undefined {
    return undefined;
  }

  public previousValue(): ConstantValue | undefined {
    return undefined;
  }

  public toString(): string {
    return this.value.toString();
  }

  public valid(): boolean {
    return isNaN(this.value);
  }

  public static Coerce(other: ConstantValue): RealConstantValue {
    if (other instanceof RealConstantValue) {
      return new RealConstantValue(other.value);
    } else if (other instanceof IntegerConstantValue) {
      if ((other.value > Number.MAX_SAFE_INTEGER) || (other.value < Number.MIN_SAFE_INTEGER)) {
        // TODO: Warn about possible loss of information
      }
      return new RealConstantValue(Number(other.value).valueOf());
    } else {
      throw new Error("Cannot coerce constant value to floating point.");
    }
  }
}

export class ConstantOperations {
  // Applying the following arithmetic conversion rules from C/C++:
  // https://en.cppreference.com/w/cpp/language/usual_arithmetic_conversions

  public static add(left: ConstantValue, right: ConstantValue): ConstantValue {
    if ((left instanceof IntegerConstantValue) && (right instanceof IntegerConstantValue)) {
      return new IntegerConstantValue(left.value + right.value);
    } else if ((left instanceof IntegerConstantValue) && (right instanceof RealConstantValue)) {
      return new RealConstantValue(RealConstantValue.Coerce(left).value + right.value);
    } else if ((left instanceof RealConstantValue) && (right instanceof IntegerConstantValue)) {
      return new RealConstantValue(left.value + RealConstantValue.Coerce(right).value);
    } else if ((left instanceof RealConstantValue) && (right instanceof RealConstantValue)) {
      return new RealConstantValue(left.value + right.value);
    } else {
      throw new Error("Incompatible types on ADD operation.");
    }
  }

  public static subtract(left: ConstantValue, right: ConstantValue): ConstantValue {
    if ((left instanceof IntegerConstantValue) && (right instanceof IntegerConstantValue)) {
      return new IntegerConstantValue(left.value - right.value);
    } else if ((left instanceof IntegerConstantValue) && (right instanceof RealConstantValue)) {
      return new RealConstantValue(RealConstantValue.Coerce(left).value - right.value);
    } else if ((left instanceof RealConstantValue) && (right instanceof IntegerConstantValue)) {
      return new RealConstantValue(left.value - RealConstantValue.Coerce(right).value);
    } else if ((left instanceof RealConstantValue) && (right instanceof RealConstantValue)) {
      return new RealConstantValue(left.value - right.value);
    } else {
      throw new Error("Incompatible types on SUBTRACT operation.");
    }
  }

  public static multiply(left: ConstantValue, right: ConstantValue): ConstantValue {
    if ((left instanceof IntegerConstantValue) && (right instanceof IntegerConstantValue)) {
      return new IntegerConstantValue(left.value * right.value);
    } else if ((left instanceof IntegerConstantValue) && (right instanceof RealConstantValue)) {
      return new RealConstantValue(RealConstantValue.Coerce(left).value * right.value);
    } else if ((left instanceof RealConstantValue) && (right instanceof IntegerConstantValue)) {
      return new RealConstantValue(left.value * RealConstantValue.Coerce(right).value);
    } else if ((left instanceof RealConstantValue) && (right instanceof RealConstantValue)) {
      return new RealConstantValue(left.value * right.value);
    } else {
      throw new Error("Incompatible types on MULTIPLY operation.");
    }
  }

  public static divide(left: ConstantValue, right: ConstantValue): ConstantValue {
    if ((left instanceof IntegerConstantValue) && (right instanceof IntegerConstantValue)) {
      return new IntegerConstantValue(left.value / right.value);
    } else if ((left instanceof IntegerConstantValue) && (right instanceof RealConstantValue)) {
      return new RealConstantValue(RealConstantValue.Coerce(left).value / right.value);
    } else if ((left instanceof RealConstantValue) && (right instanceof IntegerConstantValue)) {
      return new RealConstantValue(left.value / RealConstantValue.Coerce(right).value);
    } else if ((left instanceof RealConstantValue) && (right instanceof RealConstantValue)) {
      return new RealConstantValue(left.value / right.value);
    } else {
      throw new Error("Incompatible types on DIVIDE operation.");
    }
  }

  public static modulo(left: ConstantValue, right: ConstantValue): ConstantValue {
    if ((left instanceof IntegerConstantValue) && (right instanceof IntegerConstantValue)) {
      return new IntegerConstantValue(left.value % right.value);
    } else if ((left instanceof IntegerConstantValue) && (right instanceof RealConstantValue)) {
      return new RealConstantValue(RealConstantValue.Coerce(left).value % right.value);
    } else if ((left instanceof RealConstantValue) && (right instanceof IntegerConstantValue)) {
      return new RealConstantValue(left.value % RealConstantValue.Coerce(right).value);
    } else if ((left instanceof RealConstantValue) && (right instanceof RealConstantValue)) {
      return new RealConstantValue(left.value % right.value);
    } else {
      throw new Error("Incompatible types on DIVIDE operation.");
    }
  }

  public static shiftLeft(target: ConstantValue, shiftBy: ConstantValue): ConstantValue {
    if (shiftBy instanceof IntegerConstantValue) {
      if (shiftBy.value > SHIFT_LIMIT) {
        // TODO: Warn about total loss of information
      }
      if (target instanceof IntegerConstantValue) {
        return new IntegerConstantValue(target.value << shiftBy.value);
      } else if (target instanceof RealConstantValue) {
        // Floating point value has fractional part dropped before shift.
        return new IntegerConstantValue(IntegerConstantValue.Coerce(target).value << shiftBy.value)
      } else {
        throw new Error("Incompatible shift target in SHIFT LEFT operation.");
      }
    } else {
      throw new Error("Incompatible shift-by value in SHIFT LEFT operation.");
    }
  }

  public static shiftRight(target: ConstantValue, shiftBy: ConstantValue): ConstantValue {
    if (shiftBy instanceof IntegerConstantValue) {
      if (shiftBy.value > SHIFT_LIMIT) {
        // TODO: Warn about total loss of information
      }
      if (target instanceof IntegerConstantValue) {
        return new IntegerConstantValue(target.value >> shiftBy.value);
      } else if (target instanceof RealConstantValue) {
        // Floating point value has fractional part dropped before shift.
        return new IntegerConstantValue(IntegerConstantValue.Coerce(target).value >> shiftBy.value)
      } else {
        throw new Error("Incompatible shift target in SHIFT LEFT operation.");
      }
    } else {
      throw new Error("Incompatible shift-by value in SHIFT LEFT operation.");
    }
  }

  public static not(target: ConstantValue): ConstantValue {
    // Floating point value has fractional part dropped before bitwise operation
    return new IntegerConstantValue(~IntegerConstantValue.Coerce(target).value);
  }

  public static bitwiseAnd(left: ConstantValue, right: ConstantValue): ConstantValue {
    // Floating point value has fractional part dropped before bitwise operation
    return new IntegerConstantValue(
      IntegerConstantValue.Coerce(left).value &
      IntegerConstantValue.Coerce(right).value
    );
  }

  public static bitwiseOr(left: ConstantValue, right: ConstantValue): ConstantValue {
    // Floating point value has fractional part dropped before bitwise operation
    return new IntegerConstantValue(
      IntegerConstantValue.Coerce(left).value |
      IntegerConstantValue.Coerce(right).value
    );
  }

  public static bitwiseXor(left: ConstantValue, right: ConstantValue): ConstantValue {
    // Floating point value has fractional part dropped before bitwise operation
    return new IntegerConstantValue(
      IntegerConstantValue.Coerce(left).value ^
      IntegerConstantValue.Coerce(right).value
    );
  }

  public static unaryPlus(target: ConstantValue): ConstantValue {
    if ((target instanceof IntegerConstantValue) || (target instanceof RealConstantValue)) {
      return target;
    } else {
      throw new Error("Incompatible argument to UNARY PLUS operation.");
    }
  }

  public static unaryMinus(target: ConstantValue): ConstantValue {
    if (target instanceof IntegerConstantValue) {
      return new IntegerConstantValue(-1n * target.value);
    } else if (target instanceof RealConstantValue) {
      return new RealConstantValue(-1.0 * target.value);
    } else {
      throw new Error("Incompatible argument to UNARY MINUS operation.");
    }
  }
}

export class CharacterConstantValue extends ConstantValue {
  public constructor(public readonly value: string) {
    super();
  }

  public equals(other: ConstantValue): boolean {
    return ((other instanceof CharacterConstantValue) && (other.value == this.value));
  }

  public nextValue(): ConstantValue | undefined {
    let ourCharCode = this.value.charCodeAt(0);
    if (ourCharCode < 0xFFFF) {
      return new CharacterConstantValue(String.fromCharCode(ourCharCode + 1));
    }
  }

  public previousValue(): ConstantValue | undefined {
    let ourCharCode = this.value.charCodeAt(0);
    if (ourCharCode > 0x0000) {
      return new CharacterConstantValue(String.fromCharCode(ourCharCode - 1));
    }
  }

  public toString(): string {
    return this.value;
  }

  public valid(): boolean {
    return this.value.length == 1;
  }

  public static Coerce(other: ConstantValue): ConstantValue {
    if (!(other instanceof CharacterConstantValue) || (other.value.length !== 1)) {
      let msg = "Cannot coerce constant value to character.";
      throw new Error(msg);
    }

    return new CharacterConstantValue(other.value);
  }
}

export class StringConstantValue extends ConstantValue {
  public constructor(public readonly value: string) {
    super();
  }

  public equals(other: ConstantValue): boolean {
    return ((other instanceof StringConstantValue) && (other.value == this.value));
  }

  public nextValue(): ConstantValue | undefined {
    return undefined;
  }

  public previousValue(): ConstantValue | undefined {
    return undefined;
  }

  public toString(): string {
    return this.value;
  }

  public valid(): boolean {
    return this.value.length >= 1;
  }

  public static Coerce(other: ConstantValue): ConstantValue {
    if (!(other instanceof StringConstantValue)) {
      let msg = "Cannot coerce constant value to string.";
      throw new Error(msg);
    }

    return new StringConstantValue(other.value);
  }
}


export class BooleanConstantValue extends ConstantValue {
  public constructor(public readonly value: boolean) {
    super();
  }

  public equals(other: ConstantValue): boolean {
    return ((other instanceof BooleanConstantValue) && (other.value == this.value));
  }

  public nextValue(): ConstantValue | undefined {
    if (this.value === false) {
      return new BooleanConstantValue(true);
    }
  }

  public previousValue(): ConstantValue | undefined {
    if (this.value === true) {
      return new BooleanConstantValue(false);
    }
  }

  public toString(): string {
    return `${this.value}`;
  }

  public valid(): boolean {
    return true;
  }

  public static Coerce(other: ConstantValue): ConstantValue {
    // Perhaps revisions could be more lenient and accept "truthy" constant
    // values as valid. For now, doing the strict thing.
    if (!(other instanceof BooleanConstantValue)) {
      let msg = "Cannot coerce constant value to boolean.";
      throw new Error(msg);
    }

    return new BooleanConstantValue(other.value);
  }
}


export class OctetConstantValue extends IntegerConstantValue {
  public constructor(value: number | string | bigint) {
    super(value);
  }

  public equals(other: ConstantValue): boolean {
    return ((other instanceof OctetConstantValue) && (other.value == this.value));
  }
  
  public nextValue(): ConstantValue | undefined {
    if (this.value < 0xFF) {
      return new OctetConstantValue(this.value + 1n);
    }
  }

  public previousValue(): ConstantValue | undefined {
    if (this.value > 0x00) {
      return new OctetConstantValue(this.value - 1n);
    }
  }

  public static Coerce(other: ConstantValue): IntegerConstantValue {
    if (!(other instanceof IntegerConstantValue)) {
      let msg = "Cannot coerce constant value to octet.";
      throw new Error(msg);
    }
    return new OctetConstantValue(new Uint8Array([Number(other.value).valueOf()])[0]);
  }
}

// vim: set ts=2 sw=2 expandtab:
