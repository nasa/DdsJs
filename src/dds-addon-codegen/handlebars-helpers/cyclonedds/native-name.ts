/**
 * @brief Contains the definition of the `nativeConstName` and `nativeTypeName` Handlebars helpers for CycloneDDS.
 * @author Rolando J. Nieves
 * @date 2024-11-19 17:01:25
 */

import { BaseTypeSpec, BasicCharType, BooleanType, BoundedSequenceType, BoundedStringType, ConstantDeclaration, DeclaredTypeSpec, DoublePrecisionFloatingPointType, Int16Type, Int32Type, Int64Type, OctetType, ScopeMember, SinglePrecisionFloatingPointType, TemplateTypeSpec, Uint16Type, Uint32Type, Uint64Type, UnboundedSequenceType, UnboundedStringType, WideCharType } from "../../../dds-idl-compiler";


function cycloneDdsAnonymousNativeTypeName(subject: TemplateTypeSpec, prefix: string): string {
  let result: string = "";

  if (subject instanceof BoundedSequenceType) {
    result = `${prefix}sequence_${cycloneDdsNativeTypeNameImpl(subject.elementType, "")}`;
  } else if (subject instanceof UnboundedSequenceType) {
    result = `${prefix}sequence_${cycloneDdsNativeTypeNameImpl(subject.elementType, "")}`;
  } else if (subject instanceof BoundedStringType) {
    result = "string";
  } else if (subject instanceof UnboundedStringType) {
    result = "string";
  }

  return result;
}

export function cycloneDdsNativeTypeNameImpl(subject: BaseTypeSpec, anonPrefix: string = "dds_"): string {
  let result: string = "";

  if (subject instanceof DeclaredTypeSpec) {
    let nameParts = subject.scopedName.parts.map((aPart) => aPart.name.value);
    nameParts.splice(0, 1);
    result = nameParts.join("_");
  } else if (subject instanceof TemplateTypeSpec) {
    if (subject.alias !== null) {
      let nameParts = subject.definedInScope.scopedName.parts.map((aPart) => aPart.name.value);
      nameParts.splice(0, 1);
      nameParts.push(subject.alias);
      result = nameParts.join("_");
    } else {
      result = cycloneDdsAnonymousNativeTypeName(subject, anonPrefix);
    }
  } else if (subject instanceof BooleanType) {
    result = "bool";
  } else if ((subject instanceof BasicCharType) || (subject instanceof WideCharType)) {
    result = "char";
  } else if (subject instanceof DoublePrecisionFloatingPointType) {
    result = "double";
  } else if (subject instanceof SinglePrecisionFloatingPointType) {
    result = "float";
  } else if (subject instanceof Int32Type) {
    result = "long";
  } else if (subject instanceof Int64Type) {
    result = "long_long";
  } else if (subject instanceof OctetType) {
    result = "octet";
  } else if (subject instanceof Int16Type) {
    result = "short";
  } else if (subject instanceof Uint32Type) {
    result = "unsigned_long";
  } else if (subject instanceof Uint64Type) {
    result = "unsigned_long_long";
  } else if (subject instanceof Uint16Type) {
    result = "unsigned_short";
  }

  return result;
}

export function cycloneDdsNativeTypeName(subject: BaseTypeSpec): string {
  return cycloneDdsNativeTypeNameImpl(subject);
}

export function cycloneDdsNativeConstName(subject: ScopeMember): string {
  let nameParts = subject.scopedName.parts.map((aPart) => aPart.name.value);
  nameParts.splice(0, 1);
  return nameParts.join("_");
}

// vim: set ts=2 sw=2 expandtab:
