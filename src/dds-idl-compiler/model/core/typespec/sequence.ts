/**
 * @brief Contains the definition of the `BoundedSequenceType` and `UnboundedSequenceType` classes.
 * @author Rolando J. Nieves
 * @date 2024-10-31 17:55:46
 */

import { NamingScope } from "../../scoping";
import { BaseTypeSpec } from "./base";
import { TemplateTypeSpec } from "./template";


export class UnboundedSequenceType extends TemplateTypeSpec {
  public constructor(definedInScope: NamingScope, public readonly elementType: BaseTypeSpec) {
    super(definedInScope);
  }
}


export class BoundedSequenceType extends UnboundedSequenceType {
  public constructor(definedInScope: NamingScope, elementType: BaseTypeSpec, public readonly upperBound: number) {
    super(definedInScope, elementType);
  }
}

// vim: set ts=2 sw=2 expandtab:
