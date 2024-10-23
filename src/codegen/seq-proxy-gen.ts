/**
 * @brief Contains the definition of the `SequenceProxyNameGen` class.
 * @author Rolando J. Nieves
 * @date 2024-10-23 13:21:59
 */

import { BoundedSequenceProxy, UnboundedSequenceProxy } from "../model";
import { coreDxSequenceProxyNameGen } from "./coredx";
import { ProxyNameGen } from "./proxy-name-gen";


export class SequenceProxyNameGen {
  public constructor(public readonly providerName: string, public readonly proxyGen: ProxyNameGen) {}

  public proxyNameFor(seqProxy: BoundedSequenceProxy | UnboundedSequenceProxy): string {
    if (this.providerName === "CoreDX") {
      return coreDxSequenceProxyNameGen(seqProxy, this.proxyGen);
    }  else {
      let msg = `Unsupported DDS provider "${this.providerName}".`;
      throw new Error(msg);
    }
  }
}

// vim: set ts=2 sw=2 expandtab:
