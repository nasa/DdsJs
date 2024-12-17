/**
 * @brief Contains the definition of the `DdsIdlStructMemberVisitor` class.
 * @author Rolando J. Nieves
 * @date 2024-11-14 17:52:19
 */

import { BaseDeclarator, StructMember } from "../../model/core";
import { NamingScope } from "../../model/scoping";
import { StructMemberContext } from "../DdsIdlParser";
import { DdsIdlMessageListener } from "../msg-listener";
import { DdsIdlAnnotationApplicationsVisitor } from "./annotation-applications-visitor";
import { DdsIdlDeclaratorsVisitor } from "./declarators-visitor";
import { DdsIdlMsgHandlingVisitor } from "./msg-handling-visitor";
import { DdsIdlTypeSpecificationVisitor } from "./type-specification-visitor";


export class DdsIdlStructMemberVisitor extends DdsIdlMsgHandlingVisitor< StructMember[] > {
  public constructor(public owner: NamingScope, msgHandler: DdsIdlMessageListener) {
    super(msgHandler);

    this.visitStructMember = DdsIdlStructMemberVisitor.prototype.visitStructMemberImpl.bind(this);
  }

  public visitStructMemberImpl(ctx: StructMemberContext): StructMember[] {
    let annotations = new DdsIdlAnnotationApplicationsVisitor(this.msgListener).visit(ctx.annotationApplications());
    let typespec = new DdsIdlTypeSpecificationVisitor(this.owner, this.msgListener).visit(ctx.typeSpecification());
    let decls = new DdsIdlDeclaratorsVisitor(this.owner, this.msgListener).visit(ctx.annotatableDeclarators());

    return decls.map((aDecl: BaseDeclarator): StructMember => new StructMember(typespec, aDecl, this.owner, annotations));
  }
}

// vim: set ts=2 sw=2 expandtab:
