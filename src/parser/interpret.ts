/**
 * @brief Contains the definition of the `interpretInput()` function.
 * @author Rolando J. Nieves
 * @date 2024-02-27 16:58:07
 */

import { CharStream, CommonTokenStream } from "antlr4";
import { DdsJsAddon } from "../model";
import { LocationMap } from "../preproc";
import DdsJsIdlLexer from "./DdsJsIdlLexer";
import DdsJsIdlParser from "./DdsJsIdlParser";
import { DdsJsErrorListener } from "./error-listener";
import { TranslationUnitVisitor } from "./visitors";
import path from "path";
import { CppNameGen } from "../codegen";


export function interpretInput(fileName: string, contents: string, locationMap: LocationMap, proxyNameGen: CppNameGen): DdsJsAddon {
  let inputStream = new CharStream(contents);
  let lexer = new DdsJsIdlLexer(inputStream);
  let tokens = new CommonTokenStream(lexer);
  let parser = new DdsJsIdlParser(tokens);
  let errorListener = new DdsJsErrorListener(locationMap);
  parser.removeErrorListeners();
  parser.addErrorListener(errorListener);
  let fileExt = path.extname(fileName);
  let fileBaseName = path.basename(fileName, fileExt);
  let addonBaseName = fileBaseName.replace(/[^A-Za-z0-9_]/g, "_");
  let visitor = new TranslationUnitVisitor(errorListener, addonBaseName, proxyNameGen);
  let result = visitor.visit(parser.translationUnit());

  if (errorListener.hasErrors()) {
    let msg = `${errorListener.errorCount} errors detected.`;
    throw new Error(msg);
  } else {
    return result;
  }
}

// vim: set ts=2 sw=2 expandtab:
