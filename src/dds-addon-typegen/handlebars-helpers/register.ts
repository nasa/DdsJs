/**
 * @brief Contains the definition of the `registerHandlebarsHelpers()` function.
 * @author Rolando J. Nieves
 * @date 2024-12-17 16:34:17
 */

import Handlebars from "handlebars";
import { tsTypeName, tsTypeNameWithDecl } from "./ts-type-name";
import { topicSupport } from "./topic-support";
import { enumMnemonicValueType } from "./enum-mnemonic-val";
import { topLevel } from "./top-level";


export function registerHandlebarsHelpers(): void {
  Handlebars.registerHelper("enumMnemonicValueType", enumMnemonicValueType);
  Handlebars.registerHelper("topLevel", topLevel);
  Handlebars.registerHelper("topicSupport", topicSupport);
  Handlebars.registerHelper("tsTypeName", tsTypeName);
  Handlebars.registerHelper("tsTypeNameWithDecl", tsTypeNameWithDecl);
}

// vim: set ts=2 sw=2 expandtab:
