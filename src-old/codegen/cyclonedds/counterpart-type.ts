/**
 * @brief Contains the definition of the type name generators for CycloneDDS code generation.
 * @author Rolando J. Nieves
 * @date 2024-10-22 11:35:23
 */

import {
  ArrayProxy,
  BaseCodecProxy,
  BooleanProxy,
  BoundedSequenceProxy,
  BoundedStringProxy,
  CharProxy,
  CppInstanceWrapper,
  DataReaderInstanceWrap,
  DataWriterInstanceWrap,
  DoubleProxy,
  FloatProxy,
  LongLongProxy,
  LongProxy,
  OctetProxy,
  OwnedCodecProxy,
  ShortProxy,
  TypeSupportInstanceWrap,
  UnboundedSequenceProxy,
  UnboundedStringProxy,
  UnsignedLongLongProxy,
  UnsignedLongProxy,
  UnsignedShortProxy
} from "../../model";


function cycloneDdsScopedNameToString(namespaceStack: string[], name: string): string {
  return namespaceStack.concat([name]).join("_");
}

function cycloneDdsSeqStackItemToString(proxy: BaseCodecProxy): string {
  if ((proxy instanceof BoundedSequenceProxy) || (proxy instanceof UnboundedSequenceProxy)) {
    return "sequence";
  } else if (proxy instanceof UnboundedStringProxy) {
    return "string";
  } else if (proxy instanceof BoundedStringProxy) {
    return `string${proxy.boundsExpr}`;
  } else if (proxy instanceof OwnedCodecProxy) {
    return cycloneDdsScopedNameToString(proxy.owner.namespaceStack, proxy.idlName);
  } else {
    return proxy.idlName;
  }
}

function cycloneDdsSequenceProxyCounterpartType(seqProxy: BoundedSequenceProxy | UnboundedSequenceProxy): string {
  // Build the type stack.
  let typeStack: BaseCodecProxy[] = [seqProxy];
  while ((typeStack[0] instanceof BoundedSequenceProxy) || (typeStack[0] instanceof UnboundedSequenceProxy)) {
    typeStack = [typeStack[0].elemProxy].concat(typeStack);
  }
  // Turn each type stack item into a string.
  let nameStack: string[] = typeStack.map(cycloneDdsSeqStackItemToString);
  nameStack.push("dds");
  nameStack.reverse();

  return nameStack.join("_");
}

export function cycloneDdsProxyCounterpartType(codecProxy: BaseCodecProxy): string {
  let result: string = "";

  if (codecProxy instanceof ArrayProxy) {
    let dimExpression = codecProxy.dimensions.map((aDimExpr) => `[${aDimExpr}]`).join("");
    result = `${cycloneDdsProxyCounterpartType(codecProxy.elemProxy)}${dimExpression}`;
  } else if (codecProxy instanceof BoundedSequenceProxy) {
    result = cycloneDdsSequenceProxyCounterpartType(codecProxy);
  } else if (codecProxy instanceof UnboundedSequenceProxy) {
    result = cycloneDdsSequenceProxyCounterpartType(codecProxy);
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
    result = cycloneDdsScopedNameToString(codecProxy.owner.namespaceStack, codecProxy.idlName);
  }

  return result;
}


export function cycloneDdsWrapperCounterpartClass(wrapper: CppInstanceWrapper): string {
  let result: string = "";

  if (wrapper instanceof TypeSupportInstanceWrap) {
    result = "dds_topic_descriptor_t";
  } else if (wrapper instanceof DataReaderInstanceWrap) {
    result = "dds_entity_t";
  } else if (wrapper instanceof DataWriterInstanceWrap) {
    result = "dds_entity_t";
  }

  return result;
}

// vim: set ts=2 sw=2 expandtab:
