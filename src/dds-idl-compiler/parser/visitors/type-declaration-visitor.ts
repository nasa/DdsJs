/**
 * @brief Contains the definition of the `DdsIdlTypeDeclarationVisitor` class.
 * @author Rolando J. Nieves
 * @date 2024-11-01 13:52:44
 */

import { NamingScope, ScopeMember } from "../../model/scoping";
import { TypeDeclarationContext } from "../DdsIdlParser";
import { DdsIdlMessageListener } from "../msg-listener";
import { DdsIdlConstructedTypeDeclarationVisitor } from "./constructed-type-declaration-visitor";
import { DdsIdlMsgHandlingVisitor } from "./msg-handling-visitor";
import { DdsIdlTypeAliasDeclarationVisitor } from "./type-alias-declaration-visitor";


export class DdsIdlTypeDeclarationVisitor extends DdsIdlMsgHandlingVisitor< ScopeMember | ScopeMember[] > {
  public constructor(public readonly owner: NamingScope, msgHandler: DdsIdlMessageListener) {
    super(msgHandler);

    this.visitTypeDeclaration = DdsIdlTypeDeclarationVisitor.prototype.visitTypeDeclarationImpl.bind(this);
  }

  public visitTypeDeclarationImpl(ctx: TypeDeclarationContext): ScopeMember[] {
    let result: ScopeMember[] = [];
    if (ctx.typeAliasDeclaration()) {
      result = new DdsIdlTypeAliasDeclarationVisitor(this.owner, this.msgListener).visit(ctx.typeAliasDeclaration());
    } else {
      let constructedTypeMaybe = new DdsIdlConstructedTypeDeclarationVisitor(this.owner, this.msgListener).visit(ctx.constructedTypeDeclaration());
      if (constructedTypeMaybe !== undefined) {
        result.push(constructedTypeMaybe);
      }
    }

    return result;
  }
}

// vim: set ts=2 sw=2 expandtab:
