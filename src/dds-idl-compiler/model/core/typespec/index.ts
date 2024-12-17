/**
 * @brief Contains the export amalgam for the `typespec` module.
 * @author Rolando J. Nieves
 * @date 2024-10-31 17:46:41
 */

export { BaseTypeSpec } from "./base";
export { DeclaredTypeSpec } from "./declared";
export {
  BasicCharType,
  BitWidth,
  BooleanType,
  CharBitWidth,
  DoublePrecisionFloatingPointType,
  FloatBitWidth,
  FloatingPointType,
  IntBitWidth,
  IntegerType,
  NumericType,
  Int8Type,
  Int16Type,
  Int32Type,
  Int64Type,
  OctetType,
  SignedIntegerType,
  SinglePrecisionFloatingPointType,
  Uint8Type,
  Uint16Type,
  Uint32Type,
  Uint64Type,
  UnsignedIntegerType,
  WideCharType
} from "./primitives"
export { BoundedSequenceType, UnboundedSequenceType } from "./sequence";
export {
  BasicBoundedStringType,
  BasicUnboundedStringType,
  BoundedStringType,
  StringType,
  UnboundedStringType,
  WideBoundedStringType,
  WideUnboundedStringType
} from "./string";
export { TemplateTypeSpec } from "./template";

// vim: set ts=2 sw=2 expandtab:
