/**
 * @brief Contains the definition for the `StructProxyImplementation` class.
 * @author Rolando J. Nieves
 * @date 2024-03-04 13:59:48
 */

import { StructCodecProxy } from "../model";
import { ImplementationFileBase } from "./implementation-file";


export class StructProxyImplementation extends ImplementationFileBase< StructCodecProxy > {
  public static readonly TEMPLATE_NAME = "struct-codec.cpp.handlebars";

  public constructor(structProxy: StructCodecProxy) {
    super(StructProxyImplementation.TEMPLATE_NAME, structProxy.name, structProxy.owner.namespaceStack);
  }
}

// vim: set ts=2 sw=2 expandtab: