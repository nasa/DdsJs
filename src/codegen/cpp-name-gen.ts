/**
 * @brief Contains the definition for the `CppNameGen` class.
 * @author Rolando J. Nieves
 * @date 2024-03-12 15:27:26
 */

import { ArrayProxy, BaseCodecProxy, BooleanProxy, BoundedSequenceProxy, BoundedStringProxy, CharProxy, CppInstanceWrapper, DataReaderInstanceWrap, DataWriterInstanceWrap, DoubleProxy, FloatProxy, LongLongProxy, LongProxy, OctetProxy, OwnedCodecProxy, ShortProxy, TypeSupportInstanceWrap, UnboundedSequenceProxy, UnboundedStringProxy, UnsignedLongLongProxy, UnsignedLongProxy, UnsignedShortProxy } from "../model";
import { CounterpartTypeGen } from "./counterpart-type";
import { ProxyNameGen } from "./proxy-name-gen";
import { SequenceProxyNameGen } from "./seq-proxy-gen";


export class CppNameGen implements ProxyNameGen {
  public readonly seqProxyGen: SequenceProxyNameGen;
  public readonly typeGen: CounterpartTypeGen;

  public constructor(public readonly providerName: string) {
    this.typeGen = new CounterpartTypeGen(providerName);
    this.seqProxyGen = new SequenceProxyNameGen(providerName, this);
  }

  public baseWrapperNameFor(wrapper: CppInstanceWrapper): string {
    let result: string = "";

    if (wrapper instanceof TypeSupportInstanceWrap) {
      result = `::DdsJs::TypeSupportWrapBaseT< ${this.typeGen.forWrapper(wrapper)} >`;
    } else if (wrapper instanceof DataReaderInstanceWrap) {
      result = `::DdsJs::DataReaderWrapBaseT< ${this.typeGen.forWrapper(wrapper)}, ${wrapper.supportedProxy.name} >`;
    } else if (wrapper instanceof DataWriterInstanceWrap) {
      result = `::DdsJs::DataWriterWrapBaseT< ${this.typeGen.forWrapper(wrapper)}, ${wrapper.supportedProxy.name} >`;
    }

    return result;
  }

  public proxyNameFor(codecProxy: BaseCodecProxy): string {
    let result: string = "";
    
    if (codecProxy instanceof ArrayProxy) {
      result = `::DdsJs::FixedArray< ${this.proxyNameFor(codecProxy.elemProxy)}, ${codecProxy.dimensions.join(", ")} >`;
    } else if (codecProxy instanceof BoundedSequenceProxy) {
      result = this.seqProxyGen.proxyNameFor(codecProxy);
    } else if (codecProxy instanceof UnboundedSequenceProxy) {
      result = this.seqProxyGen.proxyNameFor(codecProxy);
    } else if (codecProxy instanceof BoundedStringProxy) {
      result = `::DdsJs::BoundedString< ::DdsJs::${this.providerName}::StringUtilities, ${codecProxy.boundsExpr} >`;
    } else if (codecProxy instanceof UnboundedStringProxy) {
      result = `::DdsJs::UnboundedString< ::DdsJs::${this.providerName}::StringUtilities >`;
    } else if (codecProxy instanceof BooleanProxy) {
      result = "::DdsJs::BooleanPrimitive";
    } else if (codecProxy instanceof CharProxy) {
      result = "::DdsJs::CharPrimitive";
    } else if (codecProxy instanceof DoubleProxy) {
      result = "::DdsJs::DoublePrimitive";
    } else if (codecProxy instanceof FloatProxy) {
      result = "::DdsJs::FloatPrimitive";
    } else if (codecProxy instanceof LongProxy) {
      result = "::DdsJs::LongPrimitive";
    } else if (codecProxy instanceof LongLongProxy) {
      result = "::DdsJs::LongLongPrimitive";
    } else if (codecProxy instanceof OctetProxy) {
      result = "::DdsJs::OctetPrimitive";
    } else if (codecProxy instanceof ShortProxy) {
      result = "::DdsJs::ShortPrimitive";
    } else if (codecProxy instanceof UnsignedLongProxy) {
      result = "::DdsJs::UnsignedLongPrimitive";
    } else if (codecProxy instanceof UnsignedLongLongProxy) {
      result = "::DdsJs::UnsignedLongLongPrimitive";
    } else if (codecProxy instanceof UnsignedShortProxy) {
      result = "::DdsJs::UnsignedShortPrimitive";
    } else if (codecProxy instanceof OwnedCodecProxy) {
      result = `${codecProxy.idlName}Proxy`;
    }

    return result;
  }

  public wrapperNameFor(wrapper: CppInstanceWrapper): string {
    let result: string = "";

    if (wrapper instanceof TypeSupportInstanceWrap) {
      result = `${wrapper.supportedProxy.idlName}TypeSupportWrap`;
    } else if (wrapper instanceof DataReaderInstanceWrap) {
      result = `${wrapper.supportedProxy.idlName}DataReaderWrap`;
    } else if (wrapper instanceof DataWriterInstanceWrap) {
      result = `${wrapper.supportedProxy.idlName}DataWriterWrap`;
    }

    return result;
  }
}

// vim: set ts=2 sw=2 expandtab:
