/**
 * @brief Contains the definition of the `processIdl()` function.
 * @author Rolando J. Nieves
 * @date 2024-11-01 17:36:16
 */

import { CharStream, CommonTokenStream } from "antlr4";
import { IdlFile } from "./model/core";
import { DdsIdlLexer, DdsIdlMessageListener, DdsIdlParser } from "./parser";
import { DdsIdlSpecificationVisitor } from "./parser/visitors";
import { FileInput } from "./input";


export class IdlProcessing {
  public constructor(public readonly input: FileInput, public readonly msgHandler: DdsIdlMessageListener) {
    this.msgHandler = new DdsIdlMessageListener(input);
  }

  public process(): IdlFile {
    let parser = new DdsIdlParser(
      new CommonTokenStream(
        new DdsIdlLexer(
          new CharStream(this.input.flatten())
        )
      )
    );
    parser.removeErrorListeners();
    parser.addErrorListener(this.msgHandler);
  
    let result = new DdsIdlSpecificationVisitor(this.input.nameStem, this.msgHandler).visit(parser.specification());
  
    if (parser.syntaxErrorsCount !== 0) {
      throw new Error("IDL file compilation failed.");
    }
  
    return result;
  }
}

// vim: set ts=2 sw=2 expandtab:
