/**
 * @brief Contains the definition for the `ModuleVisitor` class.
 * @author Rolando J. Nieves
 * @date 2024-02-26 14:22:40
 */

import { CppNameGen } from "../../codegen";
import { ModuleBundle, ScopeContainer } from "../../model";
import { ModuleContext } from "../DdsJsIdlParser";
import DdsJsIdlVisitor from "../DdsJsIdlVisitor";
import { DdsJsErrorListener, extractSemanticErrorInfoFrom } from "../error-listener";
import { ModuleMemberVisitor } from "./module-member-visitor";


export class ModuleVisitor extends DdsJsIdlVisitor< ModuleBundle > {
  public static ModuleNamePeek(ctx: ModuleContext): string {
    return ctx.IDENTIFIER().getText();
  }

  public constructor(public readonly contextOwner: ScopeContainer, public readonly errorListener: DdsJsErrorListener, public readonly proxyNameGen: CppNameGen, public readonly existingModule?: ModuleBundle) {
    super();

    this.visitModule = ModuleVisitor.prototype.visitModuleImpl.bind(this);
  }

  public visitModuleImpl(ctx: ModuleContext): ModuleBundle {
    let result = this.existingModule || new ModuleBundle(ctx.IDENTIFIER().getText(), this.contextOwner);

    for (let aMember of ctx.moduleMember_list()) {
      // The ModuleMemberVisitor instance will take care of adding the module
      // member to the module.
      try {
        let visitor = new ModuleMemberVisitor(result, this.errorListener, this.proxyNameGen)
        visitor.visit(aMember);
      } catch (err) {
        this.errorListener.semanticError(extractSemanticErrorInfoFrom(err, aMember.start));
      }
    }

    return result;
  }
}

// vim: set ts=2 sw=2 expandtab:
