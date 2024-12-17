/**
 * @brief Contains the definition of the `tsTypeName` and `tsTypeNameWithDecl` Handlebars helpers.
 * @author Rolando J. Nieves
 * @date 2024-12-17 16:16:26
 */

import { ArrayDeclarator, BaseDeclarator, BaseTypeSpec, BasicBoundedStringType, BasicCharType, BasicUnboundedStringType, BooleanType, BoundedSequenceType, DeclaredTypeSpec, DoublePrecisionFloatingPointType, Enumeration, Int16Type, Int32Type, Int64Type, OctetType, SinglePrecisionFloatingPointType, Uint16Type, Uint32Type, Uint64Type, UnboundedSequenceType, WideCharType } from "../../dds-idl-compiler";
import { enumMnemonicValueType } from "./enum-mnemonic-val";


function declaredTypeTsTypeName(subject: DeclaredTypeSpec): string {
  let nameParts = subject.owningScope.scopedName.parts.map((aPart) => aPart.name.value);
  nameParts.splice(0, 1);
  if (subject instanceof Enumeration) {
    nameParts.push(enumMnemonicValueType(subject));
  } else {
    nameParts.push(subject.name.value);
  }
  return nameParts.join(".");
}

export function tsTypeName(subject: BaseTypeSpec): string {
  let result: string = "";

  if (subject instanceof DeclaredTypeSpec) {
    result = declaredTypeTsTypeName(subject);
  } else if ((subject instanceof BoundedSequenceType) || (subject instanceof UnboundedSequenceType)) {
    result = `Array< ${tsTypeName(subject.elementType)} >`;
  } else if ((subject instanceof BasicBoundedStringType) || (subject instanceof BasicUnboundedStringType)) {
    result = "string";
  } else if (subject instanceof BooleanType) {
    result = "boolean";
  } else if ((subject instanceof BasicCharType) || (subject instanceof WideCharType)) {
    result = "string";
  } else if (subject instanceof DoublePrecisionFloatingPointType) {
    result = "number";
  } else if (subject instanceof SinglePrecisionFloatingPointType) {
    result = "number";
  } else if (subject instanceof Int32Type) {
    result = "bigint";
  } else if (subject instanceof Int64Type) {
    result = "bigint";
  } else if (subject instanceof OctetType) {
    result = "number";
  } else if (subject instanceof Int16Type) {
    result = "bigint";
  } else if (subject instanceof Uint32Type) {
    result = "bigint";
  } else if (subject instanceof Uint64Type) {
    result = "bigint";
  } else if (subject instanceof Uint16Type) {
    result = "bigint";
  }

  return result;
}

export function tsTypeNameWithDecl(subject: BaseTypeSpec, decl: BaseDeclarator): string {
  let result = tsTypeName(subject);
  
  if (decl instanceof ArrayDeclarator) {
    result = `Array< ${result} >`;
  }

  return result;
}

// vim: set ts=2 sw=2 expandtab: