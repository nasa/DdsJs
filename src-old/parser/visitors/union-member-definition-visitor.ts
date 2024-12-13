/**
 * @brief Contains the definition of the `UnionMemberDefinitionVisitor` class.
 * @author Rolando J. Nieves
 * @date 2024-03-06 17:24:52
 */

import { CppNameGen } from "../../codegen";
import { ModuleBundle, UnionProxyCase } from "../../model";
import { DefaultUnionMemberDefinitionContext, SpecificUnionMemberDefinitionContext } from "../DdsJsIdlParser";
import DdsJsIdlVisitor from "../DdsJsIdlVisitor";
import { MemberDefinitionVisitor } from "./member-definition-visitor";
import { UnionCaseLabelVisitor } from "./union-case-label-visitor";


export class UnionMemberDefinitionVisitor extends DdsJsIdlVisitor< UnionProxyCase > {
  public constructor(public readonly contextOwner: ModuleBundle, public readonly proxyNameGen: CppNameGen) {
    super();

    this.visitDefaultUnionMemberDefinition = UnionMemberDefinitionVisitor.prototype.visitDefaultUnionMemberDefinitionImpl.bind(this);
    this.visitSpecificUnionMemberDefinition = UnionMemberDefinitionVisitor.prototype.visitSpecificUnionMemberDefinitionImpl.bind(this);
  }

  public visitDefaultUnionMemberDefinitionImpl(ctx: DefaultUnionMemberDefinitionContext): UnionProxyCase {
    let memberDef = new MemberDefinitionVisitor(this.contextOwner, this.proxyNameGen).visit(ctx.memberDefinition());

    return new UnionProxyCase([], memberDef.name, memberDef.proxyType);
  }

  public visitSpecificUnionMemberDefinitionImpl(ctx: SpecificUnionMemberDefinitionContext): UnionProxyCase {
    let caseLabels: string[] = [];

    for (let aUnionCaseLabelCtx of ctx.unionCaseLabel_list()) {
      caseLabels.push(new UnionCaseLabelVisitor().visit(aUnionCaseLabelCtx));
    }

    let memberDef = new MemberDefinitionVisitor(this.contextOwner, this.proxyNameGen).visit(ctx.memberDefinition());

    return new UnionProxyCase(caseLabels, memberDef.name, memberDef.proxyType);
  }
}

// vim: set ts=2 sw=2 expandtab:
