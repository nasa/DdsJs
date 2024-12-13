/**
 * @brief Contains the definition of the `ModuleMemberVisitor` class.
 * @author Rolando J. Nieves
 * @date 2024-02-26 14:45:08
 */

import { CppNameGen } from "../../codegen";
import { DataReaderInstanceWrap, DataWriterInstanceWrap, ModuleBundle, TypeSupportInstanceWrap } from "../../model";
import { ConstantModuleMemberContext, DataStructureModuleMemberContext, EnumModuleMemberContext, SubmoduleModuleMemberContext, TypeAliasModuleMemberContext, UnionModuleMemberContext } from "../DdsJsIdlParser";
import DdsJsIdlVisitor from "../DdsJsIdlVisitor";
import { DdsJsErrorListener } from "../error-listener";
import { ConstantDefinitionVisitor } from "./constant-definition-visitor";
import { DataStructureDefinitionVisitor } from "./data-structure-definition-visitor";
import { EnumDefinitionVisitor } from "./enum-definition-visitor";
import { ModuleVisitor } from "./module-visitor";
import { TypeAliasVisitor } from "./type-alias-visitor";
import { UnionDefinitionVisitor } from "./union-definition-visitor";


export class ModuleMemberVisitor extends DdsJsIdlVisitor< void > {
  public constructor(public readonly contextOwner: ModuleBundle, public readonly errorListener: DdsJsErrorListener, public readonly cppNameGen: CppNameGen) {
    super();

    this.visitConstantModuleMember = ModuleMemberVisitor.prototype.visitConstantModuleMemberImpl.bind(this);
    this.visitDataStructureModuleMember = ModuleMemberVisitor.prototype.visitDataStructureModuleMemberImpl.bind(this);
    this.visitEnumModuleMember = ModuleMemberVisitor.prototype.visitEnumModuleMemberImpl.bind(this);
    this.visitSubmoduleModuleMember = ModuleMemberVisitor.prototype.visitSubmoduleModuleMemberImpl.bind(this);
    this.visitTypeAliasModuleMember = ModuleMemberVisitor.prototype.visitTypeAliasModuleMemberImpl.bind(this);
    this.visitUnionModuleMember = ModuleMemberVisitor.prototype.visitUnionModuleMemberImpl.bind(this);
  }

  public visitConstantModuleMemberImpl(ctx: ConstantModuleMemberContext): void {
    let result = new ConstantDefinitionVisitor(this.contextOwner, this.cppNameGen).visit(ctx.constantDefinition());
    this.contextOwner.addConstantDefinition(result);
  }

  public visitDataStructureModuleMemberImpl(ctx: DataStructureModuleMemberContext): void {
    let result = new DataStructureDefinitionVisitor(this.contextOwner, this.errorListener, this.cppNameGen).visit(ctx.dataStructureDefinition());
    this.contextOwner.addOwnedCodecProxy(result);
    let drWrapper = new DataReaderInstanceWrap(result, this.cppNameGen, this.contextOwner);
    let dwWrapper = new DataWriterInstanceWrap(result, this.cppNameGen, this.contextOwner);
    let tsWrapper = new TypeSupportInstanceWrap(result, this.cppNameGen, drWrapper, dwWrapper, this.contextOwner);
    this.contextOwner.addWrapper(drWrapper);
    this.contextOwner.addWrapper(dwWrapper);
    this.contextOwner.addWrapper(tsWrapper);
  }

  public visitEnumModuleMemberImpl(ctx: EnumModuleMemberContext): void {
    let result = new EnumDefinitionVisitor(this.contextOwner, this.cppNameGen).visit(ctx.enumDefinition());
    this.contextOwner.addOwnedCodecProxy(result);
  }

  public visitSubmoduleModuleMemberImpl(ctx: SubmoduleModuleMemberContext): void {
    let result = new ModuleVisitor(
      this.contextOwner,
      this.errorListener,
      this.cppNameGen,
      this.contextOwner.findSubModuleByName(
        ModuleVisitor.ModuleNamePeek(ctx.module_())
      )
    ).visit(ctx.module_());
    this.contextOwner.addSubModule(result);
  }
  
  public visitTypeAliasModuleMemberImpl(ctx: TypeAliasModuleMemberContext): void {
    let result = new TypeAliasVisitor(this.contextOwner, this.cppNameGen).visit(ctx.typeAlias());
    this.contextOwner.addOwnedCodecProxy(result);
  }

  public visitUnionModuleMemberImpl(ctx: UnionModuleMemberContext): void {
    let result = new UnionDefinitionVisitor(this.contextOwner, this.errorListener, this.cppNameGen).visit(ctx.unionDefinition());
    this.contextOwner.addOwnedCodecProxy(result);
  }
}

// vim: set ts=2 sw=2 expandtab:
