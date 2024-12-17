/**
 * @brief Contains the definition of the `BoundedStringType` and `UnboundedStringType` classes.
 * @author Rolando J. Nieves
 * @date 2024-10-31 18:00:00
 */

import { NamingScope } from "../../scoping";
import { CharBitWidth } from "./primitives";
import { TemplateTypeSpec } from "./template";


export class StringType extends TemplateTypeSpec {
  public constructor(definedInScope: NamingScope, public readonly bounded: boolean, public readonly width: CharBitWidth) {
    super(definedInScope);
  }
}


export class UnboundedStringType extends StringType {
  public constructor(definedInScope: NamingScope, width: CharBitWidth) {
    super(definedInScope, false, width);
  }
}


export class BoundedStringType extends StringType {
  public constructor(definedInScope: NamingScope, public readonly upperBound: number, width: CharBitWidth) {
    super(definedInScope, true, width);
  }
}


export class BasicUnboundedStringType extends UnboundedStringType {
  public constructor(definedInScope: NamingScope) {
    super(definedInScope, 8);
  }
}


export class BasicBoundedStringType extends BoundedStringType {
  public constructor(definedInScope: NamingScope, upperBound: number) {
    super(definedInScope, upperBound, 8);
  }
}


export class WideUnboundedStringType extends UnboundedStringType {
  public constructor(definedInScope: NamingScope) {
    super(definedInScope, 16);
  }
}


export class WideBoundedStringType extends BoundedStringType {
  public constructor(definedInScope: NamingScope, upperBound: number) {
    super(definedInScope, upperBound, 16);
  }
}

// vim: set ts=2 sw=2 expandtab:
