/**
 * @brief Contains the definition of the `definitionHeadersWithin` Handlebars helper.
 * @author Rolando J. Nieves
 * @date 2024-11-25 10:14:15
 */

import Handlebars from "handlebars";
import { BoundedSequenceType, CaseDefinition, DeclaredTypeSpec, IdlFile, isScopeMember, Module, ScopeMember, StructMember, Structure, TemplateTypeSpec, TypeAlias, UnboundedSequenceType, UnionDefinition } from "../../dds-idl-compiler";
import { HeaderFileContext } from "../context";
import { TemplateContextPair, TemplateContextPairFactory } from "../template-mgmt";


function namingScopeInnerDefinitions(subject: IdlFile | Module): ScopeMember[] {
  let result: ScopeMember[] = [];

  for (let aMember of subject.members) {
    if ((aMember instanceof DeclaredTypeSpec) || (aMember instanceof Module)) {
      result.push(aMember);
    }
  }

  return result;
}

function structInnerDefinitions(subject: Structure): ScopeMember[] {
  let result: ScopeMember[] = [];

  for (let aField of subject.members as StructMember[]) {
    if (isScopeMember(aField.typespec)) {
      result.push(aField.typespec);
    }
  }

  return result;
}

function templateTypeInnerDefinitions(subject: TemplateTypeSpec): ScopeMember[] {
  let result: ScopeMember[] = [];

  if ((subject instanceof UnboundedSequenceType) || (subject instanceof BoundedSequenceType)) {
    if (isScopeMember(subject.elementType)) {
      result.push(subject.elementType);
    }
  }

  return result;
}

function typeAliasInnerDefinitions(subject: TypeAlias): ScopeMember[] {
  let result: ScopeMember[] = [];

  if (isScopeMember(subject.typespec)) {
    result.push(subject.typespec);
  } else if (subject.typespec instanceof TemplateTypeSpec) {
    result = templateTypeInnerDefinitions(subject.typespec);
  }

  return result;
}

function unionInnerDefinitions(subject: UnionDefinition): ScopeMember[] {
  let result: ScopeMember[] = [];

  if (isScopeMember(subject.switchTypeSpec)) {
    result.push(subject.switchTypeSpec);
  }
  
  for (let aField of subject.members as CaseDefinition[]) {
    if (isScopeMember(aField.typespec)) {
      result.push(aField.typespec);
    }
  }

  return result;
}

function getInnerDefinitions(subject: ScopeMember): ScopeMember[] {
  if ((subject instanceof IdlFile) || (subject instanceof Module)) {
    return namingScopeInnerDefinitions(subject);
  } else if (subject instanceof Structure) {
    return structInnerDefinitions(subject);
  } else if (subject instanceof TemplateTypeSpec) {
    return templateTypeInnerDefinitions(subject);
  } else if (subject instanceof TypeAlias) {
    return typeAliasInnerDefinitions(subject);
  } else if (subject instanceof UnionDefinition) {
    return unionInnerDefinitions(subject);
  } else {
    return [] as ScopeMember[];
  }
}

export function definitionHeadersWithin(subject: ScopeMember, options: Handlebars.HelperOptions, tcpFactory: TemplateContextPairFactory): string {
  let result: string = "";
  let data: any;
  let withTopicSupport: boolean = ("withTopicSupport" in options.hash) && (options.hash["withTopicSupport"].toLowerCase() == "yes");

  if (options.data) {
    data = Handlebars.createFrame(options.data);
  }

  let pairs: TemplateContextPair[] = [];
  for (let aMember of getInnerDefinitions(subject)) {
    pairs = pairs.concat(tcpFactory.templateContextPairsFor(aMember, withTopicSupport));
  }

  // Squelch duplicates by feeding the list of filenames to the Set
  // constructor, then creating an array from the resulting set.
  let headerFiles: string[] = Array.from(
    new Set< string >(
      pairs
      .filter((aPair) => aPair.context instanceof HeaderFileContext)
      .map((aPair) => aPair.context.fileName)
    )
  );

  for (let idx = 0, total = headerFiles.length; idx < total; idx++) {
    if (data) {
      data.last = (idx == (total - 1));
    }
    result += options.fn(headerFiles[idx], { data: data });
  }

  if (headerFiles.length === 0) {
    result = options.inverse("");
  }

  return result;
}

// vim: set ts=2 sw=2 expandtab:
