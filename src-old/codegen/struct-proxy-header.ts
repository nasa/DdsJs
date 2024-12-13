/**
 * @brief Contains the definition of the `StructProxyHeader` class.
 * @author Rolando J. Nieves
 * @date 2024-03-04 13:54:41
 */

import { StructCodecProxy } from "../model";
import { HeaderDependency } from "./header-dependency";
import { HeaderFileBase } from "./header-file";


export class StructProxyHeader extends HeaderFileBase< StructCodecProxy > {
  public static readonly TEMPLATE_NAME: string = "struct-codec.hh.handlebars";
  public readonly memberHeaderFiles: string[];

  public constructor(structProxy: StructCodecProxy, providerName: string) {
    super(StructProxyHeader.TEMPLATE_NAME, providerName, structProxy.name, structProxy.owner.namespaceStack);
    let headerFileSet: Set< string > = new Set< string >();
    for (let aMember of structProxy.memberIterator()) {
      headerFileSet.add(new HeaderDependency(aMember.proxyType).gather() || "");
    }
    headerFileSet.delete("");
    this.memberHeaderFiles = Array.from(headerFileSet.values()).sort();
  }
}

// vim: set ts=2 sw=2 expandtab: