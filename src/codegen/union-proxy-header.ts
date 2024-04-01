/**
 * @brief Contains the definition of the `UnionProxyHeader` class.
 * @author Rolando J. Nieves
 * @date 2024-03-06 17:51:32
 */

import { UnionCodecProxy } from "../model";
import { HeaderDependency } from "./header-dependency";
import { HeaderFileBase } from "./header-file";


export class UnionProxyHeader extends HeaderFileBase< UnionCodecProxy > {
  public static readonly TEMPLATE_NAME: string = "union-codec.hh.handlebars";
  public readonly memberHeaderFiles: string[];

  public constructor(unionDef: UnionCodecProxy) {
    super(UnionProxyHeader.TEMPLATE_NAME, unionDef.name, unionDef.owner.namespaceStack);
    let headerFileSet: Set< string > = new Set< string >();

    for (let aCase of unionDef.caseIter()) {
      headerFileSet.add(new HeaderDependency(aCase.proxyType).gather() || "");
    }
    headerFileSet.delete("");
    this.memberHeaderFiles = Array.from(headerFileSet.values()).sort();
  }
}

// vim: set ts=2 sw=2 expandtab:
