/**
 * @brief Contains the name constants for all available Napi C++ containers.
 * @author Rolando J. Nieves
 * @date 2024-02-15 18:05:49
 */

import { CppNameGen } from "../codegen";
import { BaseCodecProxy } from "./codec-proxy";


// ----------------------------------------------------------------------------
//  █████╗ ██████╗ ██████╗  █████╗ ██╗   ██╗
// ██╔══██╗██╔══██╗██╔══██╗██╔══██╗╚██╗ ██╔╝
// ███████║██████╔╝██████╔╝███████║ ╚████╔╝ 
// ██╔══██║██╔══██╗██╔══██╗██╔══██║  ╚██╔╝  
// ██║  ██║██║  ██║██║  ██║██║  ██║   ██║   
// ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝   
// ----------------------------------------------------------------------------
export class ArrayProxy extends BaseCodecProxy {
  public constructor(public readonly elemProxy: BaseCodecProxy, public readonly dimensions: string[], proxyNameGen: CppNameGen) {
    if (dimensions.length > 1) {
      let msg = "Multi-dimensional arrays currently not supported.";
      throw new Error(msg);
    }
    let cppDims = dimensions.map((aDim) => `[${aDim}]`).join("");
    super(`${elemProxy.idlName}${cppDims}`, "Napi::Array", `${elemProxy.jsTypeName}[]`);
    this._name = proxyNameGen.proxyNameFor(this);
  }
}


// ----------------------------------------------------------------------------
// ███████╗███████╗ ██████╗ ██╗   ██╗███████╗███╗   ██╗ ██████╗███████╗
// ██╔════╝██╔════╝██╔═══██╗██║   ██║██╔════╝████╗  ██║██╔════╝██╔════╝
// ███████╗█████╗  ██║   ██║██║   ██║█████╗  ██╔██╗ ██║██║     █████╗  
// ╚════██║██╔══╝  ██║▄▄ ██║██║   ██║██╔══╝  ██║╚██╗██║██║     ██╔══╝  
// ███████║███████╗╚██████╔╝╚██████╔╝███████╗██║ ╚████║╚██████╗███████╗
// ╚══════╝╚══════╝ ╚══▀▀═╝  ╚═════╝ ╚══════╝╚═╝  ╚═══╝ ╚═════╝╚══════╝
// ----------------------------------------------------------------------------
export class BoundedSequenceProxy extends BaseCodecProxy {
  public constructor(public readonly elemProxy: BaseCodecProxy, public readonly boundsExpr: string, proxyNameGen: CppNameGen) {
    super(`sequence< ${elemProxy.idlName}, ${boundsExpr} >`, "Napi::Array", `${elemProxy.jsTypeName}[]`);
    this._name = proxyNameGen.proxyNameFor(this);
  }
}


export class UnboundedSequenceProxy extends BaseCodecProxy {
  public constructor(public readonly elemProxy: BaseCodecProxy, proxyNameGen: CppNameGen) {
    super(`sequence< ${elemProxy.idlName} >`, "Napi::Array", `${elemProxy.jsTypeName}[]`);
    this._name = proxyNameGen.proxyNameFor(this);
  }
}


// ----------------------------------------------------------------------------
// ███████╗████████╗██████╗ ██╗███╗   ██╗ ██████╗ 
// ██╔════╝╚══██╔══╝██╔══██╗██║████╗  ██║██╔════╝ 
// ███████╗   ██║   ██████╔╝██║██╔██╗ ██║██║  ███╗
// ╚════██║   ██║   ██╔══██╗██║██║╚██╗██║██║   ██║
// ███████║   ██║   ██║  ██║██║██║ ╚████║╚██████╔╝
// ╚══════╝   ╚═╝   ╚═╝  ╚═╝╚═╝╚═╝  ╚═══╝ ╚═════╝ 
// ----------------------------------------------------------------------------
export class BoundedStringProxy extends BaseCodecProxy {
  public constructor(public readonly boundsExpr: string, proxyNameGen: CppNameGen) {
    super(`string< ${boundsExpr} >`, "Napi::String", "string");
    this._name = proxyNameGen.proxyNameFor(this);
  }
}


export class UnboundedStringProxy extends BaseCodecProxy {
  public constructor(proxyNameGen: CppNameGen) {
    super("string", "Napi::String", "string");
    this._name = proxyNameGen.proxyNameFor(this);
  }
}


// ----------------------------------------------------------------------------
// ██████╗ ██████╗ ██╗███╗   ███╗██╗████████╗██╗██╗   ██╗███████╗
// ██╔══██╗██╔══██╗██║████╗ ████║██║╚══██╔══╝██║██║   ██║██╔════╝
// ██████╔╝██████╔╝██║██╔████╔██║██║   ██║   ██║██║   ██║█████╗  
// ██╔═══╝ ██╔══██╗██║██║╚██╔╝██║██║   ██║   ██║╚██╗ ██╔╝██╔══╝  
// ██║     ██║  ██║██║██║ ╚═╝ ██║██║   ██║   ██║ ╚████╔╝ ███████╗
// ╚═╝     ╚═╝  ╚═╝╚═╝╚═╝     ╚═╝╚═╝   ╚═╝   ╚═╝  ╚═══╝  ╚══════╝
// ----------------------------------------------------------------------------
export class BooleanProxy extends BaseCodecProxy {
  public constructor(proxyNameGen: CppNameGen) {
    super("bool", "Napi::Boolean", "boolean");
    this._name = proxyNameGen.proxyNameFor(this);
  }
}


export class CharProxy extends BaseCodecProxy {
  public constructor(proxyNameGen: CppNameGen) {
    super("char", "Napi::String", "string");
    this._name = proxyNameGen.proxyNameFor(this);
  }
}


export class DoubleProxy extends BaseCodecProxy {
  public constructor(proxyNameGen: CppNameGen) {
    super("double", "Napi::Number", "number");
    this._name = proxyNameGen.proxyNameFor(this);
  }
}


export class FloatProxy extends BaseCodecProxy {
  public constructor(proxyNameGen: CppNameGen) {
    super("float", "Napi::Number", "number");
    this._name = proxyNameGen.proxyNameFor(this);
  }
}


export class LongProxy extends BaseCodecProxy {
  public constructor(proxyNameGen: CppNameGen) {
    super("long", "Napi::Number", "number");
    this._name = proxyNameGen.proxyNameFor(this);
  }
}


export class LongLongProxy extends BaseCodecProxy {
  public constructor(proxyNameGen: CppNameGen) {
    super("long long", "Napi::BigInt", "BigInt");
    this._name = proxyNameGen.proxyNameFor(this);
  }
}


export class OctetProxy extends BaseCodecProxy {
  public constructor(proxyNameGen: CppNameGen) {
    super("octet", "Napi::Number", "number");
    this._name = proxyNameGen.proxyNameFor(this);
  }
}


export class ShortProxy extends BaseCodecProxy {
  public constructor(proxyNameGen: CppNameGen) {
    super("short", "Napi::Number", "number");
    this._name = proxyNameGen.proxyNameFor(this);
  }
}


export class UnsignedLongProxy extends BaseCodecProxy {
  public constructor(proxyNameGen: CppNameGen) {
    super("unsigned long", "Napi::Number", "number");
    this._name = proxyNameGen.proxyNameFor(this);
  }
}


export class UnsignedLongLongProxy extends BaseCodecProxy {
  public constructor(proxyNameGen: CppNameGen) {
    super("unsigned long long", "Napi::BigInt", "BigInt");
    this._name = proxyNameGen.proxyNameFor(this);
  }
}


export class UnsignedShortProxy extends BaseCodecProxy {
  public constructor(proxyNameGen: CppNameGen) {
    super("unsigned short", "Napi::Number", "number");
    this._name = proxyNameGen.proxyNameFor(this);
  }
}

// vim: set ts=2 sw=2 expandtab:
