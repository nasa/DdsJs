/**
 * @brief Contains the definition for the `TypeSupportWrapHeader` class.
 * @author Rolando J. Nieves
 * @date 2024-03-08 15:36:31
 */

import { TypeSupportInstanceWrap } from "../model";
import { HeaderFileBase } from "./header-file";


export class TypeSupportWrapHeader extends HeaderFileBase< TypeSupportInstanceWrap > {
  public static readonly TEMPLATE_NAME: string = "type-support-wrap.hh.handlebars";

  public constructor(typeSupportWrap: TypeSupportInstanceWrap, providerName: string) {
    super(TypeSupportWrapHeader.TEMPLATE_NAME, providerName, typeSupportWrap.name, typeSupportWrap.owner.namespaceStack);
  }
}

// vim: set ts=2 sw=2 expandtab:
