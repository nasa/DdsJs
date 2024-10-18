/**
 * @brief Contains the definition of the `TypeAliasProxyHeader` class.
 * @author Rolando J. Nieves
 * @date 2024-03-01 17:01:37
 */

import { BoundedSequenceProxy, OwnedCodecProxy, TypeAliasCodecProxy, UnboundedSequenceProxy } from "../model";
import { HeaderDependency } from "./header-dependency";
import { HeaderFileBase } from "./header-file";


export class TypeAliasProxyHeader extends HeaderFileBase< TypeAliasCodecProxy > {
  public static readonly TEMPLATE_NAME: string = "type-alias.hh.handlebars";
  public readonly aliasForHeader: string | null;

  public constructor(typeAlias: TypeAliasCodecProxy, providerName: string) {
    super(TypeAliasProxyHeader.TEMPLATE_NAME, providerName, typeAlias.name, typeAlias.owner.namespaceStack);
    this.aliasForHeader = new HeaderDependency(typeAlias.aliasFor).gather();
  }
}

// vim: set ts=2 sw=2 expandtab:
