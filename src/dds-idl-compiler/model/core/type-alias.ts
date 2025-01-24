/**
 * @brief Contains the definition of the `TypeAlias` class.
 * @author Rolando J. Nieves
 * @date 2024-10-24 18:37:22
 */

import { ArrayDeclarator, BaseDeclarator } from "./declarator";
import { BaseTypeSpec, DeclaredTypeSpec, TemplateTypeSpec } from "./typespec";


export class TypeAlias extends DeclaredTypeSpec {
  public constructor(public readonly typespec: BaseTypeSpec, public readonly decl: BaseDeclarator) {
    super(decl);
    if (typespec instanceof TemplateTypeSpec) {
      typespec.alias = decl.name.value;
    }
  }

  public resolvesTo(): BaseTypeSpec {
    let result: BaseTypeSpec = this;
    while (result instanceof TypeAlias) {
      // Stop once we find an ArrayDeclarator, as descending further will
      // result in information loss.
      if (result.decl instanceof ArrayDeclarator) {
        break;
      }
      result = result.typespec;
    }

    return result;
  }
}

// vim: set ts=2 sw=2 expandtab:
