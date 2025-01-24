/**
 * @brief Contains the definition for the `nativeConstName`, `nativeTypeName`, and `seqElemNativeTypeName` Handlebars helpers for CoreDX.
 * @author Rolando J. Nieves
 * @date 2025-01-21 11:17:57
 */

import { BaseTypeSpec, BasicCharType, BooleanType, BoundedSequenceType, BoundedStringType, DeclaredTypeSpec, DoublePrecisionFloatingPointType, Int16Type, Int32Type, Int64Type, OctetType, ScopeMember, SinglePrecisionFloatingPointType, TemplateTypeSpec, Uint16Type, Uint32Type, Uint64Type, UnboundedSequenceType, UnboundedStringType, WideCharType } from "../../../dds-idl-compiler";


const NATIVE_SCOPE_SEPARATOR: string = "::";

function coreDxAnonymousNativeTypeName(subject: TemplateTypeSpec): string {
  let result: string = "";

  if ((subject instanceof UnboundedSequenceType) || (subject instanceof BoundedSequenceType)) {
    let elemNativeTypeName = coreDxNativeTypeNameImpl(subject.elementType);
    if (subject.elementType instanceof OctetType) {
      // CoreDX is weird about octet ... refuses to use uint8_t ...
      // :shrug:
      elemNativeTypeName = "unsigned__char";
    } else if (subject.elementType instanceof BoundedStringType) {
      // Trim out the "_t" generated by nativeTypeName
      elemNativeTypeName = elemNativeTypeName.slice(0, -2);
    } else if (subject.elementType instanceof UnboundedStringType) {
      // CoreDX DDL generator replaces char* with string when describing
      // unbounded string sequence elements.
      elemNativeTypeName = elemNativeTypeName.replace("char*", "string");
      elemNativeTypeName = `${subject.definedInScope.scopedName.toString()}${NATIVE_SCOPE_SEPARATOR}${elemNativeTypeName}`;
    }
    let nameParts = elemNativeTypeName.split(NATIVE_SCOPE_SEPARATOR);
    if (nameParts[0].length === 0) {
      // Trim out the empty "root" namespace
      nameParts.shift();
    }
    result = `${subject.definedInScope.scopedName.toString()}${NATIVE_SCOPE_SEPARATOR}${nameParts.join("_")}Seq`;
    if (subject instanceof BoundedSequenceType) {
      result = `${result}${subject.upperBound}`;
    }
  } else if (subject instanceof BoundedStringType) {
    result = `${subject.definedInScope.scopedName.toString()}${NATIVE_SCOPE_SEPARATOR}fixedstring${subject.upperBound}_t`;
  } else if (subject instanceof UnboundedStringType) {
    result = "char*";
  }

  return result;
}

export function coreDxNativeConstName(subject: ScopeMember): string {
  return subject.scopedName.toString();
}

export function coreDxNativeTypeNameImpl(subject: BaseTypeSpec): string {
  let result: string = "";

  if (subject instanceof DeclaredTypeSpec) {
    result = subject.scopedName.toString();
  } else if (subject instanceof TemplateTypeSpec) {
    if (subject.alias !== null) {
      result = `${subject.definedInScope.scopedName.toString()}${NATIVE_SCOPE_SEPARATOR}${subject.alias}`;
    } else {
      result = coreDxAnonymousNativeTypeName(subject);
    }
  } else if (subject instanceof BooleanType) {
    result = "bool";
  } else if ((subject instanceof BasicCharType) || (subject instanceof WideCharType)) {
    result = "char";
  } else if (subject instanceof DoublePrecisionFloatingPointType) {
    result = "double";
  } else if (subject instanceof SinglePrecisionFloatingPointType) {
    result = "float";
  } else if (subject instanceof Int16Type) {
    result = "int16_t";
  } else if (subject instanceof Int32Type) {
    result = "int32_t";
  } else if (subject instanceof Int64Type) {
    result = "int64_t";
  } else if (subject instanceof OctetType) {
    result = "unsigned char";
  } else if (subject instanceof Uint16Type) {
    result = "uint16_t";
  } else if (subject instanceof Uint32Type) {
    result = "uint32_t";
  } else if (subject instanceof Uint64Type) {
    result = "uint64_t";
  }

  return result;
}

export function coreDxNativeTypeName(subject: BaseTypeSpec): string {
  return coreDxNativeTypeNameImpl(subject);
}

// vim: set ts=2 sw=2 expandtab:
