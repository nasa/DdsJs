/**
 * @brief Contains the definition of the `DdsIdlConstructedTypeDeclarationVisitor` class.
 * @author Rolando J. Nieves
 * @date 2024-11-12 16:47:52
 */

import { NamingScope, ScopeMember } from "../../model/scoping";
import { ConstructedTypeDeclarationContext } from "../DdsIdlParser";
import { DdsIdlMessageListener } from "../msg-listener";
import { DdsIdlEnumDeclarationVisitor } from "./enum-declaration-visitor";
import { DdsIdlMsgHandlingVisitor } from "./msg-handling-visitor";
import { DdsIdlStructureDefinitionVisitor } from "./structure-definition-visitor";
import { DdsIdlUnionDefinitionVisitor } from "./union-definition-visitor";


export class DdsIdlConstructedTypeDeclarationVisitor extends DdsIdlMsgHandlingVisitor< ScopeMember | undefined > {
  public constructor(public readonly owner: NamingScope, msgHandler: DdsIdlMessageListener) {
    super(msgHandler);

    this.visitConstructedTypeDeclaration = DdsIdlConstructedTypeDeclarationVisitor.prototype.visitConstructedTypeDeclarationImpl.bind(this);
  }

  public visitConstructedTypeDeclarationImpl(ctx: ConstructedTypeDeclarationContext): ScopeMember | undefined {
    if (ctx.enumDeclaration()) {
      return new DdsIdlEnumDeclarationVisitor(this.owner, this.msgListener).visit(ctx.enumDeclaration());
    } else if (ctx.structureDeclaration()) {
      if (ctx.structureDeclaration().structureForwardDeclaration()) {
        ctx.parser?.notifyErrorListeners("Structure forward declarations not supported at this time.", ctx.structureDeclaration().structureForwardDeclaration().start, undefined);
      } else {
        return new DdsIdlStructureDefinitionVisitor(this.owner, this.msgListener).visit(ctx.structureDeclaration().structureDefinition());
      }
    } else if (ctx.unionDeclaration()) {
      if (ctx.unionDeclaration().unionForwardDeclaration()) {
        ctx.parser?.notifyErrorListeners("Union forward declarations not supported at this time.", ctx.unionDeclaration().unionForwardDeclaration().start, undefined);
      } else {
        return new DdsIdlUnionDefinitionVisitor(this.owner, this.msgListener).visit(ctx.unionDeclaration().unionDefinition());
      }
    } else {
      ctx.parser?.notifyErrorListeners(`Constructed type declaration not supported at this time.`, ctx.start, undefined);
    }
  }
}

// vim: set ts=2 sw=2 expandtab:
