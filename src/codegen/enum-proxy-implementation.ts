/**
 * @brief Contains the definition of the `EnumProxyImplementation` class.
 * @author Rolando J. Nieves
 * @date 2024-03-04 12:11:53
 */

import { EnumCodecProxy, EnumMnemonic } from "../model";
import { ImplementationFileBase } from "./implementation-file";


export class EnumProxyImplementation extends ImplementationFileBase< EnumCodecProxy > {
  public static readonly TEMPLATE_NAME: string = "enum-proxy.cpp.handlebars";
  public defaultMnemonic: EnumMnemonic;

  public constructor(enumProxy: EnumCodecProxy, providerName: string) {
    super(EnumProxyImplementation.TEMPLATE_NAME, providerName, enumProxy.name, enumProxy.owner.namespaceStack);
    this.defaultMnemonic = enumProxy.mnemonicList[0];
  }
}

// vim: set ts=2 sw=2 expandtab:
