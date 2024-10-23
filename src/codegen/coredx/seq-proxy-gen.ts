/**
 * @brief Contains the definition of the `coreDxSequenceProxyNameGen()` function.
 * @author Rolando J. Nieves
 * @date 2024-10-23 13:18:19
 */

import { BoundedSequenceProxy, UnboundedSequenceProxy } from "../../model";
import { ProxyNameGen } from "../proxy-name-gen";
import { coreDxProxyCounterpartType } from "./counterpart-type";


export function coreDxSequenceProxyNameGen(seqProxy: BoundedSequenceProxy | UnboundedSequenceProxy, proxyGen: ProxyNameGen): string {
  let boundsPolicy = `DdsJs::CoreDX::CppUnboundedSequencePolicy< ${coreDxProxyCounterpartType(seqProxy.elemProxy)} >`;
  if (seqProxy instanceof BoundedSequenceProxy) {
    boundsPolicy = `DdsJs::CoreDX::CppBoundedSequencePolicy< ${coreDxProxyCounterpartType(seqProxy.elemProxy)}, ${seqProxy.boundsExpr} >`;
  }
  
  return `DdsJs::CoreDX::SequenceProxy< ${proxyGen.proxyNameFor(seqProxy.elemProxy)}, ${boundsPolicy}, DdsJs::CoreDX::CppDirectContainmentPolicy< ${coreDxProxyCounterpartType(seqProxy.elemProxy)} > >`;
}

// vim: set ts=2 sw=2 expandtab:
