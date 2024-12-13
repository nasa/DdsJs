/**
 * @brief Contains the definition for the `TranslationUnitVisitor` class.
 * @author Rolando J. Nieves
 * @date 2024-02-26 14:12:39
 */

import { CppNameGen } from "../../codegen";
import { DdsJsAddon } from "../../model";
import { TranslationUnitContext } from "../DdsJsIdlParser";
import DdsJsIdlVisitor from "../DdsJsIdlVisitor";
import { DdsJsErrorListener } from "../error-listener";
import { ModuleVisitor } from "./module-visitor";


export class TranslationUnitVisitor extends DdsJsIdlVisitor< DdsJsAddon > {
  public constructor(public readonly errorListener: DdsJsErrorListener, public readonly addonName: string, public readonly proxyNameGen: CppNameGen) {
    super();
    this.visitTranslationUnit = TranslationUnitVisitor.prototype.visitTranslationUnitImpl.bind(this);
  }

  public visitTranslationUnitImpl(ctx: TranslationUnitContext): DdsJsAddon {
    let result = new DdsJsAddon(this.addonName);

    for (let aModuleCtx of ctx.module__list()) {
      let moduleName = ModuleVisitor.ModuleNamePeek(aModuleCtx);
      let moduleVisitor = new ModuleVisitor(result, this.errorListener, this.proxyNameGen, result.findModuleByIdlName(moduleName));
      let aModule = moduleVisitor.visit(aModuleCtx);
      // Unlike the pattern seen in "ModuleMemberVisitor", we have to add the
      // new module to the add-on here because the ModuleVisitor class only
      // knows that its "containerScope" is just a "ScopeContainer"-implementing
      // instance, and that interface does not provide a way to add
      // "ScopeMember"s
      result.addModule(aModule);
    }

    return result;
  }
}

// vim: set ts=2 sw=2 expandtab:
