/**
 * @brief Contains the definition of the `UnionCodecProxy` class.
 * @author Rolando J. Nieves
 * @date 2024-03-06 14:14:56
 */

import { DestinationFolder, CppNameGen, UnionProxyHeader, UnionProxyImplementation } from "../codegen";
import { BooleanProxy, CharProxy, LongProxy, ShortProxy, UnsignedLongProxy, UnsignedShortProxy } from "./built-in-proxies";
import { BaseCodecProxy } from "./codec-proxy";
import { EnumCodecProxy } from "./enum-codec-proxy";
import { ModuleBundle } from "./module-bundle";
import { OwnedCodecProxy } from "./owned-codec-proxy";
import { StructProxyMember } from "./struct-codec-proxy";
import { TypeAliasCodecProxy } from "./type-alias-codec-proxy";


export class UnionProxyCase extends StructProxyMember {
  public readonly newInstanceMethodName: string;
  public discriminatorProxyName: string | null;

  public constructor(
    public readonly caseLabels: string[],
    name: string,
    proxyType: BaseCodecProxy
  ) {
    super(name, proxyType);
    this.newInstanceMethodName = `${name.charAt(0).toUpperCase()}${name.slice(1)}NewInstance`;
    this.discriminatorProxyName = null;
  }
}

export class UnionCodecProxy extends OwnedCodecProxy {
  private cases: UnionProxyCase[] = [];
  private defaultCase: UnionProxyCase | null = null;
  public providerHeader: string | null = null;

  public constructor(idlName: string, public readonly discriminatorProxy: BaseCodecProxy, owner: ModuleBundle, proxyNameGen: CppNameGen) {
    super(idlName, "Napi::Object", owner);
    this._name = proxyNameGen.proxyNameFor(this);

    let resolvedProxy = discriminatorProxy;
    while (resolvedProxy instanceof TypeAliasCodecProxy) {
      resolvedProxy = resolvedProxy.aliasFor;
    }

    let validDiscriminatorType = (
      (resolvedProxy instanceof BooleanProxy) ||
      (resolvedProxy instanceof CharProxy) ||
      (resolvedProxy instanceof EnumCodecProxy) ||
      (resolvedProxy instanceof LongProxy) ||
      (resolvedProxy instanceof ShortProxy) ||
      (resolvedProxy instanceof UnsignedLongProxy) ||
      (resolvedProxy instanceof UnsignedShortProxy)
    );

    if (!validDiscriminatorType) {
      let msg = `Discriminator for union "${idlName}" must be one of "bool", "char", "enum", "long", "short", "unsigned long", or "unsigned short"`;
      throw new Error(msg);
    }
  }

  public addCase(newCase: UnionProxyCase): void {
    for (let anExistingCase of this.cases) {
      let caseIntersection = anExistingCase.caseLabels.filter((aCaseLabel) => newCase.caseLabels.includes(aCaseLabel));
      if (caseIntersection.length > 0) {
        let msg = `Redefinition of union case labels ${JSON.stringify(caseIntersection)}`;
        throw new Error(msg);
      }

      if (anExistingCase.name === newCase.name) {
        let msg = `Redefinition of union member "${anExistingCase.name}"`;
        throw new Error(msg);
      }
    }
    newCase.discriminatorProxyName = this.discriminatorProxy.name;
    this.cases.push(newCase);
  }

  public addDefaultCase(newDefaultCase: UnionProxyCase): void {
    if (this.defaultCase !== null) {
      let msg = `Redefinition of union default case`;
      throw new Error(msg);
    }

    this.defaultCase = newDefaultCase;
  }

  public caseIter(): IterableIterator< UnionProxyCase > {
    return this.cases.values();
  }

  public emit(destination: DestinationFolder, providerHeaders: string[], providerName: string): void {
    this.providerHeaders = providerHeaders;
    this.providerName = providerName;

    if (this.headerFile === null) {
      this.headerFile = new UnionProxyHeader(this, providerName);
    }

    if (this.implementationFile === null) {
      this.implementationFile = new UnionProxyImplementation(this, providerName);
    }

    destination.write(this.headerFile, this);
    destination.write(this.implementationFile, this);
  }
}

// vim: set ts=2 sw=2 expandtab:
