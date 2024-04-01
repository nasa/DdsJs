/**
 * @brief Contains the definition of the `DataStructureDefinitionVisitor` class.
 * @author Rolando J. Nieves
 * @date 2024-02-27 16:02:29
 */

import { CppNameGen } from "../../codegen";
import { ModuleBundle, StructCodecProxy } from "../../model";
import { DataStructureDefinitionContext } from "../DdsJsIdlParser";
import DdsJsIdlVisitor from "../DdsJsIdlVisitor";
import { DdsJsErrorListener, extractSemanticErrorInfoFrom } from "../error-listener";
import { MemberDefinitionVisitor } from "./member-definition-visitor";


export class DataStructureDefinitionVisitor extends DdsJsIdlVisitor< StructCodecProxy > {
  public constructor(public readonly contextOwner: ModuleBundle, public readonly errorListener: DdsJsErrorListener, public readonly proxyNameGen: CppNameGen) {
    super();

    this.visitDataStructureDefinition = DataStructureDefinitionVisitor.prototype.visitDataStructureDefinitionImpl.bind(this);
  }

  public visitDataStructureDefinitionImpl(ctx: DataStructureDefinitionContext): StructCodecProxy {
    let result = new StructCodecProxy(ctx.IDENTIFIER().getText(), this.contextOwner, this.proxyNameGen);

    for (let aStructMember of ctx.memberDefinition_list()) {
      try {
        result.addMember(new MemberDefinitionVisitor(this.contextOwner, this.proxyNameGen).visit(aStructMember));
      } catch (err) {
        this.errorListener.semanticError(extractSemanticErrorInfoFrom(err, aStructMember.start));
      }
    }

    return result;
  }
}

// vim: set ts=2 sw=2 expandtab:
