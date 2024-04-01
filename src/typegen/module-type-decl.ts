/**
 * @brief Contains the definition of the `IdlModuleDefinition` class.
 * @author Rolando J. Nieves
 * @date 2024-03-20 11:06:38
 */

import { ModuleBundle, StructCodecProxy, TypeAliasCodecProxy, EnumCodecProxy, UnionCodecProxy, TypeSupportInstanceWrap, DataReaderInstanceWrap, DataWriterInstanceWrap } from "../model";
import { IdlModuleTypeAlias } from "./alias-type-decl";
import { IdlModuleConstant } from "./const-type-decl";
import { IdlModuleDataReaderWrap } from "./dr-wrap-type-decl";
import { IdlModuleDataWriterWrap } from "./dw-wrap-type-decl";
import { IdlModuleEnumeration } from "./enum-type-decl";
import { HbPartialTemplate } from "./hb-partial-template";
import { IdlModuleStructMember, IdlModuleStruct } from "./struct-type-decl";
import { IdlModuleTypeSupportWrap } from "./ts-wrap-type-decl";
import { IdlModuleNamespaceContent } from "./type-decl-content";
import { IdlModuleUnion } from "./union-type-decl";


export class IdlModuleDefinition implements IdlModuleNamespaceContent {
  private static readonly NS_PARTIAL_NAME: string = "submoduleNsDefinition";
  private static readonly NS_PARTIAL_TEMPLATE: HbPartialTemplate = new HbPartialTemplate(IdlModuleDefinition.NS_PARTIAL_NAME, "submod-ns.partial.handlebars");
  public readonly name: string;
  public readonly nsContent: IdlModuleNamespaceContent[] = [];
  public readonly nsPartialName: string;

  public constructor(bundle: ModuleBundle)
  {
    this.name = bundle.idlName;
    this.nsPartialName = IdlModuleDefinition.NS_PARTIAL_NAME;
    for (let aCodec of bundle.codecProxyIter()) {
      if (aCodec instanceof StructCodecProxy) {
        let members: IdlModuleStructMember[] = [];
        for (let aStructMember of aCodec.memberIterator()) {
          members.push(new IdlModuleStructMember(aStructMember.name, aStructMember.proxyType.jsTypeName));
        }
        let theStruct = new IdlModuleStruct(aCodec.idlName, members, aCodec.owner.namespaceStack);
        this.nsContent.push(theStruct);
      } else if (aCodec instanceof TypeAliasCodecProxy) {
        this.nsContent.push(new IdlModuleTypeAlias(aCodec.idlName, aCodec.aliasFor.jsTypeName));
      } else if (aCodec instanceof EnumCodecProxy) {
        let mnemonics: string[] = [];
        for (let aMnemonic of aCodec.mnemonicList) {
          mnemonics.push(aMnemonic.name);
        }
        let theEnum = new IdlModuleEnumeration(aCodec.idlName, aCodec.jsTypeName, mnemonics, aCodec.owner.namespaceStack);
        this.nsContent.push(theEnum);
      } else if (aCodec instanceof UnionCodecProxy) {
        let cases: IdlModuleStructMember[] = [];
        for (let aUnionCase of aCodec.caseIter()) {
          cases.push(new IdlModuleStructMember(aUnionCase.name, aUnionCase.proxyType.jsTypeName))
        }
        let theUnion = new IdlModuleUnion(aCodec.idlName, aCodec.discriminatorProxy.jsTypeName, cases, aCodec.owner.namespaceStack);
        this.nsContent.push(theUnion);
      }
    }
    for (let aConst of bundle.constantDefinitionIter()) {
      this.nsContent.push(new IdlModuleConstant(aConst.idlName, aConst.constantType.jsTypeName));
    }
    for (let aWrap of bundle.wrapperIter()) {
      if (aWrap instanceof TypeSupportInstanceWrap) {
        let theTsWrap = new IdlModuleTypeSupportWrap(aWrap.cppCounterpartName, aWrap.owner.namespaceStack);
        this.nsContent.push(theTsWrap);
      } else if (aWrap instanceof DataReaderInstanceWrap) {
        let theDrWrap = new IdlModuleDataReaderWrap(aWrap.cppCounterpartName, aWrap.supportedProxy.jsTypeName, aWrap.owner.namespaceStack);
        this.nsContent.push(theDrWrap);
      } else if (aWrap instanceof DataWriterInstanceWrap) {
        let theDwWrap = new IdlModuleDataWriterWrap(aWrap.cppCounterpartName, aWrap.supportedProxy.jsTypeName, aWrap.owner.namespaceStack);
        this.nsContent.push(theDwWrap);
      }
    }
    for (let aScopeContainer of bundle.scopeContainerIter()) {
      if (aScopeContainer instanceof ModuleBundle) {
        let theModule = new IdlModuleDefinition(aScopeContainer);
        this.nsContent.push(theModule);
      }
    }
  }
}

// vim: set ts=2 sw=2 expandtab:
