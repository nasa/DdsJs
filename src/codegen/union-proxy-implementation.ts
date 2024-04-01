/**
 * @brief Contains the definition of the `UnionProxyImplementation` class.
 * @author Rolando J. Nieves
 * @date 2024-03-08 11:47:44
 */

import { UnionCodecProxy, UnionProxyCase } from "../model";
import { HeaderDependency } from "./header-dependency";
import { ImplementationFileBase } from "./implementation-file";


export class UnionProxyImplementation extends ImplementationFileBase< UnionCodecProxy > {
  public static readonly TEMPLATE_NAME: string = "union-codec.cpp.handlebars";
  public discrValForCtor: string;
  public caseForCtor: UnionProxyCase;
  public discrHeaderFile: string | null;

  public constructor(unionCodec: UnionCodecProxy) {
    super(UnionProxyImplementation.TEMPLATE_NAME, unionCodec.name, unionCodec.owner.namespaceStack);
    this.caseForCtor = unionCodec.caseIter().next().value;
    this.discrValForCtor = this.caseForCtor.caseLabels[0];
    this.discrHeaderFile = new HeaderDependency(unionCodec.discriminatorProxy).gather();
  }
}

// vim: set ts=2 sw=2 expandtab:
