/**
 * @brief Contains the definition of the `EnumProxyHeader` class.
 * @author Rolando J. Nieves
 * @date 2024-03-04 12:07:28
 */

import { EnumCodecProxy } from "../model";
import { HeaderFileBase } from "./header-file";


export class EnumProxyHeader extends HeaderFileBase< EnumCodecProxy > {
  public static readonly TEMPLATE_NAME: string = "enum-proxy.hh.handlebars";

  public constructor(enumProxy: EnumCodecProxy, providerName: string) {
    super(EnumProxyHeader.TEMPLATE_NAME, providerName, enumProxy.name, enumProxy.owner.namespaceStack);
  }
}

// vim: set ts=2 sw=2 expandtab:
