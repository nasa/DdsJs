/**
 * @brief Contains the definition of the `proxyName` and `proxyNameForTypespecDeclaratorPair` Handlebars helpers.
 * @author Rolando J. Nieves
 * @date 2024-11-19 14:29:40
 */

import Handlebars from "handlebars";
import { ArrayDeclarator, BaseDeclarator, BaseTypeSpec, BasicCharType, BooleanType, BoundedSequenceType, BoundedStringType, CaseDefinition, DeclaredTypeSpec, DoublePrecisionFloatingPointType, Int16Type, Int32Type, Int64Type, isScopeMember, OctetType, ScopeMember, SinglePrecisionFloatingPointType, StructMember, TemplateTypeSpec, TypeAlias, Uint16Type, Uint32Type, Uint64Type, UnboundedSequenceType, UnboundedStringType, WideCharType } from "../../dds-idl-compiler";


export function typespecProxyName(typespec: BaseTypeSpec, fullyQualified: boolean): string {
  let result: string = "";

  if (typespec instanceof DeclaredTypeSpec) {
    if (fullyQualified) {
      result = `${typespec.fullyQualifiedName}Proxy`;
    } else {
      result = `${typespec.name}Proxy`;
    }
  } else if (typespec instanceof TemplateTypeSpec) {
    if (typespec instanceof BoundedSequenceType) {
      result = Handlebars.compile< BoundedSequenceType >("{{> boundedSeqProxyName . }}")(typespec);
    } else if (typespec instanceof UnboundedSequenceType) {
      result = Handlebars.compile< UnboundedSequenceType >("{{> unboundedSeqProxyName }}")(typespec);
    } else if (typespec instanceof BoundedStringType) {
      result = Handlebars.compile< BoundedStringType >("{{> boundedStrProxyName . }}")(typespec);
    } else if (typespec instanceof UnboundedStringType) {
      result = Handlebars.compile< UnboundedStringType >("{{> unboundedStrProxyName . }}")(typespec);
    }
  } else {
    if (typespec instanceof BooleanType) {
      result = "::DdsJs::BooleanPrimitive";
    } else if ((typespec instanceof BasicCharType) || (typespec instanceof WideCharType)) {
      result = "::DdsJs::CharPrimitive";
    } else if (typespec instanceof DoublePrecisionFloatingPointType) {
      result = "::DdsJs::DoublePrimitive";
    } else if (typespec instanceof SinglePrecisionFloatingPointType) {
      result = "::DdsJs::FloatPrimitive";
    } else if (typespec instanceof Int32Type) {
      result = "::DdsJs::LongPrimitive";
    } else if (typespec instanceof Int64Type) {
      result = "::DdsJs::LongLongPrimitive";
    } else if (typespec instanceof OctetType) {
      result = "::DdsJs::OctetPrimitive";
    } else if (typespec instanceof Int16Type) {
      result = "::DdsJs::ShortPrimitive";
    } else if (typespec instanceof Uint32Type) {
      result = "::DdsJs::UnsignedLongPrimitive";
    } else if (typespec instanceof Uint64Type) {
      result = "::DdsJs::UnsignedLongLongPrimitive";
    } else if (typespec instanceof Uint16Type) {
      result = "::DdsJs::UnsignedShortPrimitive";
    }
  }

  return result;
}

export function proxyNameWithDeclImpl(typespec: BaseTypeSpec, decl: BaseDeclarator, fullyQualified: boolean): string {
  let result: string = typespecProxyName(typespec, fullyQualified);

  if (decl instanceof ArrayDeclarator) {
    let dimsInReverse = ([] as number[]).concat(decl.arrayDims).reverse();
    for (let aDim of dimsInReverse) {
      result = `::DdsJs::FixedArray< ${result}, ${aDim} >`;
    }
  }

  return result;
}

export function proxyNameWithDecl(typespec: BaseTypeSpec, decl: BaseDeclarator, options: Handlebars.HelperOptions): string {
  let fullyQualified: boolean = ("fullyQualified" in options.hash) && (options.hash["fullyQualified"].toLowerCase() == "yes");

  return proxyNameWithDeclImpl(typespec, decl, fullyQualified);
}

export function proxyName(typespec: BaseTypeSpec, options: Handlebars.HelperOptions): string {
  let fullyQualified: boolean = ("fullyQualified" in options.hash) && (options.hash["fullyQualified"].toLowerCase() == "yes");

  return typespecProxyName(typespec, fullyQualified);
}

// vim: set ts=2 sw=2 expandtab:
