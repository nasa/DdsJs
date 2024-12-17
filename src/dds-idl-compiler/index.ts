/**
 * @brief Contains the export amalgam for the `dds-idl-compiler` package.
 * @author Rolando J. Nieves
 * @date 2024-11-01 17:45:56
 */

export { IdlProcessing } from "./idlproc";
export { FileInput } from "./input";
export { expandIncludes, collectPragmas } from "./preproc";
export { NamingScope, ScopeMember, ScopedName, isNamingScope, isScopeMember } from "./model/scoping";
export { BasicCaseCondition, CaseCondition, DefaultCaseCondition } from "./model/core";
export { CaseDefinition } from "./model/core";
export { ConstantDeclaration } from "./model/core";
export { BooleanConstantValue, CharacterConstantValue, ConstantValue, IntegerConstantValue, InvalidConstantValue, OctetConstantValue, RealConstantValue, StringConstantValue } from "./model/core";
export { ArrayDeclarator, BaseDeclarator, SimpleDeclarator } from "./model/core";
export { Enumeration } from "./model/core";
export { Enumerator } from "./model/core";
export { Identifier } from "./model/core";
export { IdlFile } from "./model/core";
export { Module } from "./model/core";
export { Structure } from "./model/core";
export { StructMember } from "./model/core";
export { TypeAlias } from "./model/core";
export { UnionDefinition } from "./model/core";
export { BaseTypeSpec } from "./model/core/typespec";
export { DeclaredTypeSpec } from "./model/core/typespec";
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
} from "./model/core/typespec"
export { BoundedSequenceType, UnboundedSequenceType } from "./model/core/typespec";
export {
  BasicBoundedStringType,
  BasicUnboundedStringType,
  BoundedStringType,
  StringType,
  UnboundedStringType,
  WideBoundedStringType,
  WideUnboundedStringType
} from "./model/core/typespec";
export { TemplateTypeSpec } from "./model/core/typespec";
export { NestedAnnotation } from "./model/annotations/data-impl";
export { KeyAnnotation } from "./model/annotations/data-modeling";
export { compileIdl } from "./compile";
export { CompilerConfiguration } from "./config";

// vim: set ts=2 sw=2 expandtab:
