/**
 * @brief Contains the definition of the `TypeSupportWrapImplementation` class.
 * @author Rolando J. Nieves
 * @date 2024-03-08 16:13:51
 */

import { TypeSupportInstanceWrap } from "../model";
import { ImplementationFileBase } from "./implementation-file";


export class TypeSupportWrapImplementation extends ImplementationFileBase< TypeSupportInstanceWrap > {
  public static readonly TEMPLATE_NAME: string = "type-support-wrap.cpp.handlebars";

  public constructor(typeSupportWrap: TypeSupportInstanceWrap) {
    super(TypeSupportWrapImplementation.TEMPLATE_NAME, typeSupportWrap.name, typeSupportWrap.owner.namespaceStack);
  }
}

// vim: set ts=2 sw=2 expandtab:
