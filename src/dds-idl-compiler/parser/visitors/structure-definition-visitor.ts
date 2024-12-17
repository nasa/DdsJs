/**
 * @brief Contains the definition of the `DdsIdlStructureDefinitionVisitor` class.
 * @author Rolando J. Nieves
 * @date 2024-11-14 17:58:16
 */

import { Identifier, StructMember, Structure } from "../../model/core";
import { NamingScope } from "../../model/scoping";
import { BasicStructureDefinitionContext, DerivedStructureDefinitionContext, EmptyStructureDefinitionContext } from "../DdsIdlParser";
import { DdsIdlMessageListener, exceptionMessage } from "../msg-listener";
import { DdsIdlIdentifierVisitor } from "./identifier-visitor";
import { DdsIdlMsgHandlingVisitor } from "./msg-handling-visitor";
import { DdsIdlStructMemberVisitor } from "./struct-member-visitor";


export class DdsIdlStructureDefinitionVisitor extends DdsIdlMsgHandlingVisitor< Structure > {
  public constructor(public readonly owner: NamingScope, msgHandler: DdsIdlMessageListener) {
    super(msgHandler);

    this.visitDerivedStructureDefinition = DdsIdlStructureDefinitionVisitor.prototype.visitDerivedStructureDefinitionImpl.bind(this);
    this.visitEmptyStructureDefinition = DdsIdlStructureDefinitionVisitor.prototype.visitEmptyStructureDefinitionImpl.bind(this);
    this.visitBasicStructureDefinition = DdsIdlStructureDefinitionVisitor.prototype.visitBasicStructureDefinitionImpl.bind(this);
  }

  public visitDerivedStructureDefinitionImpl(ctx: DerivedStructureDefinitionContext): Structure {
    ctx.parser?.notifyErrorListeners("Derived structures not supported at this time.", ctx.start, undefined);
    return new Structure(new Identifier(""), this.owner);
  }

  public visitEmptyStructureDefinitionImpl(ctx: EmptyStructureDefinitionContext): Structure {
    ctx.parser?.notifyErrorListeners("Empty structures not supported at this time.", ctx.start, undefined);
    return new Structure(new Identifier(""), this.owner);
  }

  public visitBasicStructureDefinitionImpl(ctx: BasicStructureDefinitionContext): Structure {
    let ident = new DdsIdlIdentifierVisitor(this.msgListener).visit(ctx.identifier());
    let result = new Structure(ident, this.owner);

    for (let aMember of ctx.structMember_list()) {
      try {
        let newMembers: StructMember[] = new DdsIdlStructMemberVisitor(result, this.msgListener).visit(aMember);
        newMembers.forEach((aMember: StructMember) => result.addMember(aMember));
      } catch (err) {
        ctx.parser?.notifyErrorListeners(exceptionMessage(err), aMember.start, undefined);
      }
    }

    return result;
  }
}

// vim: set ts=2 sw=2 expandtab:
