/**
 * @brief Contains the definition of the `TemplateTypeSpec` class.
 * @author Rolando J. Nieves
 * @date 2024-11-13 14:48:53
 */

import { NamingScope } from "../../scoping";
import { BaseTypeSpec } from "./base";


export class TemplateTypeSpec extends BaseTypeSpec {
  public constructor(public readonly definedInScope: NamingScope, public alias: string | null = null) {
    super();
  }
};

// vim: set ts=2 sw=2 expandtab:
