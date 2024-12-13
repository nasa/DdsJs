/**
 * @brief Contains the definition of the `UnionDefinitionVisitor` class.
 * @author Rolando J. Nieves
 * @date 2024-03-06 17:37:19
 */

import { CppNameGen } from "../../codegen";
import { ModuleBundle, UnionCodecProxy } from "../../model";
import { UnionDefinitionContext } from "../DdsJsIdlParser";
import DdsJsIdlVisitor from "../DdsJsIdlVisitor";
import { DdsJsErrorListener, extractSemanticErrorInfoFrom } from "../error-listener";
import { UnionDiscriminatorVisitor } from "./union-discriminator-visitor";
import { UnionMemberDefinitionVisitor } from "./union-member-definition-visitor";


export class UnionDefinitionVisitor extends DdsJsIdlVisitor< UnionCodecProxy > {
  public constructor(public readonly contextOwner: ModuleBundle, public readonly errorListener: DdsJsErrorListener, public readonly proxyNameGen: CppNameGen) {
    super();

    this.visitUnionDefinition = UnionDefinitionVisitor.prototype.visitUnionDefinitionImpl.bind(this);
  }

  public visitUnionDefinitionImpl(ctx: UnionDefinitionContext): UnionCodecProxy {
    let result = new UnionCodecProxy(
      ctx.IDENTIFIER().getText(),
      new UnionDiscriminatorVisitor(this.contextOwner, this.proxyNameGen).visit(ctx.unionDiscriminator()),
      this.contextOwner,
      this.proxyNameGen
    );

    for (let aMemberCtx of ctx.unionMemberDefinition_list()) {
      try {
        let unionCase = new UnionMemberDefinitionVisitor(this.contextOwner, this.proxyNameGen).visit(aMemberCtx);
        if (unionCase.caseLabels.length === 0) {
          result.addDefaultCase(unionCase);
        } else {
          result.addCase(unionCase);
        }
      } catch (err) {
        this.errorListener.semanticError(extractSemanticErrorInfoFrom(err, aMemberCtx.start));
      }
    }
    
    return result;
  }
}

// vim: set ts=2 sw=2 expandtab:
