/**
 * @brief Contains the definition of the `EnumDefinitionVisitor` class.
 * @author Rolando J. Nieves
 * @date 2024-02-27 15:38:14
 */

import { CppNameGen } from "../../codegen";
import { EnumCodecProxy, ModuleBundle } from "../../model";
import { EnumDefinitionContext } from "../DdsJsIdlParser";
import DdsJsIdlVisitor from "../DdsJsIdlVisitor";
import { SemanticError } from "../error-listener";
import { EnumLiteralVisitor } from "./enum-literal-visitor";


export class EnumDefinitionVisitor extends DdsJsIdlVisitor< EnumCodecProxy > {
  public constructor(public readonly contextOwner: ModuleBundle, public readonly proxyNameGen: CppNameGen) {
    super();

    this.visitEnumDefinition = EnumDefinitionVisitor.prototype.visitEnumDefinitionImpl.bind(this);
  }

  public visitEnumDefinitionImpl(ctx: EnumDefinitionContext): EnumCodecProxy {
    let result = new EnumCodecProxy(ctx.IDENTIFIER().getText(), this.contextOwner, this.proxyNameGen);
    for (let anEnumLiteralCtx of ctx.enumLiteral_list()) {
      try {
        result.addMnemonic(new EnumLiteralVisitor().visit(anEnumLiteralCtx));
      } catch (err) {
        // Doing the catch/throw here instead of higher up so we can get more
        // accurate location information.
        throw new SemanticError(anEnumLiteralCtx.start.line, anEnumLiteralCtx.start.column, `${err}`);
      }
    }

    return result;
  }
}

// vim: set ts=2 sw=2 expandtab:
