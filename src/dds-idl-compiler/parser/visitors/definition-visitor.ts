/**
 * @brief Contains the definition of the `DdsIdlDefinitionVisitor` class.
 * @author Rolando J. Nieves
 * @date 2024-11-01 12:51:51
 */

import { isAnnotatable } from "../../model/annotations/annotatable";
import { NamingScope, ScopeMember } from "../../model/scoping";
import { DefinitionContext } from "../DdsIdlParser";
import { DdsIdlMessageListener } from "../msg-listener";
import { DdsIdlAnnotationApplicationsVisitor } from "./annotation-applications-visitor";
import { DdsIdlConstantDeclarationVisitor } from "./constant-declaration-visitor";
import { DdsIdlModuleVisitor } from "./module-visitor";
import { DdsIdlMsgHandlingVisitor } from "./msg-handling-visitor";
import { DdsIdlTypeDeclarationVisitor } from "./type-declaration-visitor";


export class DdsIdlDefinitionVisitor extends DdsIdlMsgHandlingVisitor< ScopeMember[] > {
  public constructor(public readonly owner: NamingScope, msgHandler: DdsIdlMessageListener) {
    super(msgHandler);

    this.visitDefinition = DdsIdlDefinitionVisitor.prototype.visitDefinitionImpl.bind(this);
  }

  public visitDefinitionImpl(ctx: DefinitionContext): ScopeMember[] {
    let annotations = new DdsIdlAnnotationApplicationsVisitor(this.msgListener).visit(ctx.annotationApplications());
    let result: ScopeMember | ScopeMember[] = [];

    if (ctx.module_()) {
      result = new DdsIdlModuleVisitor(this.owner, this.msgListener).visit(ctx.module_());
    } else if (ctx.typeDeclaration()) {
      result = new DdsIdlTypeDeclarationVisitor(this.owner, this.msgListener).visit(ctx.typeDeclaration());
    } else if (ctx.constantDeclaration()) {
      result = new DdsIdlConstantDeclarationVisitor(this.owner, this.msgListener).visit(ctx.constantDeclaration());
    } else {
      ctx.parser?.notifyErrorListeners("Definition not supported.", ctx.start, undefined);
    }

    if (!Array.isArray(result)) {
      result = [result];
    }

    for (let aResult of result) {
      if (isAnnotatable(aResult)) {
        aResult.replaceAnnotations(annotations);
      }
    }

    return result;
  }
}

// vim: set ts=2 sw=2 expandtab:
