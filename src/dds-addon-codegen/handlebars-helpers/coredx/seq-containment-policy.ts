/**
 * @brief Contains the definition of the `seqContainmentPolicy` Handlebars helper for CoreDX.
 * @author Rolando J. Nieves
 * @date 2025-01-23 14:57:54
 */

import { ArrayDeclarator, BaseTypeSpec, BoundedStringType, DeclaredTypeSpec, TypeAlias } from "../../../dds-idl-compiler";
import { coreDxNativeTypeNameImpl } from "./native-name";


function hasArrayLikeRoot(subject: BaseTypeSpec): boolean {
  let rootTypeSpec: BaseTypeSpec = (subject instanceof TypeAlias ? subject.resolvesTo() : subject);
  let result: boolean = (
    ((rootTypeSpec instanceof DeclaredTypeSpec) && (rootTypeSpec.decl instanceof ArrayDeclarator)) ||
    (rootTypeSpec instanceof BoundedStringType)
  );

  return result;
}

export function coreDxSeqContainmentPolicy(subject: BaseTypeSpec): string {
  let templateClassName = "::DdsJs::CoreDX::CppDirectContainmentPolicy";
  if (hasArrayLikeRoot(subject)) {
    templateClassName = "::DdsJs::CoreDX::CppIndirectContainmentPolicy";
  }

  return `${templateClassName}< ${coreDxNativeTypeNameImpl(subject)} >`;
}

// vim: set ts=2 sw=2 expandtab: