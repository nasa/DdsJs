/**
 * @brief Contains the definition of the name generator functions for CoreDX code generation.
 * @author Rolando J. Nieves
 * @date 2024-03-12 13:15:47
 */

import { ArrayProxy, BaseCodecProxy, BooleanProxy, BoundedSequenceProxy, BoundedStringProxy, CharProxy, CppInstanceWrapper, DataReaderInstanceWrap, DataWriterInstanceWrap, DoubleProxy, FloatProxy, LongLongProxy, LongProxy, OctetProxy, OwnedCodecProxy, ShortProxy, TypeSupportInstanceWrap, UnboundedSequenceProxy, UnboundedStringProxy, UnsignedLongLongProxy, UnsignedLongProxy, UnsignedShortProxy } from "../../model";


export function coreDxProxyCounterpartType(codecProxy: BaseCodecProxy): string {
  let result: string = "";

  if (codecProxy instanceof ArrayProxy) {
    let dimExpression = codecProxy.dimensions.map((aDimExpr) => `[${aDimExpr}]`).join("");
    result = `${coreDxProxyCounterpartType(codecProxy.elemProxy)}${dimExpression}`;
  } else if (codecProxy instanceof BoundedSequenceProxy) {
    result = `::DDS::bounded_sequence< ${coreDxProxyCounterpartType(codecProxy.elemProxy)}, ${codecProxy.boundsExpr} >`;
  } else if (codecProxy instanceof UnboundedSequenceProxy) {
    result = `::DDS::sequence< ${coreDxProxyCounterpartType(codecProxy.elemProxy)} >`;
  } else if (codecProxy instanceof BoundedStringProxy) {
    result = `char[ ${codecProxy.boundsExpr} + 1u ]`;
  } else if (codecProxy instanceof UnboundedStringProxy) {
    result = `char *`;
  } else if (codecProxy instanceof BooleanProxy) {
    result = "bool";
  } else if (codecProxy instanceof CharProxy) {
    result = "char";
  } else if (codecProxy instanceof DoubleProxy) {
    result = "double";
  } else if (codecProxy instanceof FloatProxy) {
    result = "float";
  } else if (codecProxy instanceof LongProxy) {
    result = "int32_t";
  } else if (codecProxy instanceof LongLongProxy) {
    result = "int64_t";
  } else if (codecProxy instanceof OctetProxy) {
    result = "uint8_t";
  } else if (codecProxy instanceof ShortProxy) {
    result = "int16_t";
  } else if (codecProxy instanceof UnsignedLongProxy) {
    result = "uint32_t";
  } else if (codecProxy instanceof UnsignedLongLongProxy) {
    result = "uint64_t";
  } else if (codecProxy instanceof UnsignedShortProxy) {
    result = "uint16_t";
  } else if (codecProxy instanceof OwnedCodecProxy) {
    result = codecProxy.idlName;
  }

  return result;
}


export function coreDxWrapperCounterpartClass(wrapper: CppInstanceWrapper): string {
  let result: string = "";

  if (wrapper instanceof TypeSupportInstanceWrap) {
    result = `${wrapper.supportedProxy.idlName}TypeSupport`;
  } else if (wrapper instanceof DataReaderInstanceWrap) {
    result = `${wrapper.supportedProxy.idlName}DataReader`;
  } else if (wrapper instanceof DataWriterInstanceWrap) {
    result = `${wrapper.supportedProxy.idlName}DataWriter`;
  }

  return result;
}
// vim: set ts=2 sw=2 expandtab:
