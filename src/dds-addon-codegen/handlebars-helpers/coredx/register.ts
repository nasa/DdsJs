/**
 * @brief Contains the definition of the `registerCoreDxHelpers()` function.
 * @author Rolando J. Nieves
 * @date 2025-01-21 10:54:29
 */

import Handlebars from "handlebars";
import { coreDxConstantValueLiteral } from "./constant-value-literal";
import { coreDxDataReaderBaseName } from "./data-reader-base-name";
import { coreDxDataWriterBaseName } from "./data-writer-base-name";
import { coreDxFieldRef } from "./field-ref";
import { coreDxGeneratedDataReaderName } from "./generated-data-reader-name";
import { coreDxNativeConstName, coreDxNativeTypeName } from "./native-name";
import { coreDxProviderHeaders } from "./provider-headers";
import { coreDxSeqContainmentPolicy } from "./seq-containment-policy";
import { coreDxTypeSupportBaseName } from "./type-support-base-name";
import { coreDxUnionDiscriminatorGet } from "./union-discriminator-get";
import { coreDxUnionDiscriminatorSet } from "./union-discriminator-set";
import { coreDxUnionFieldGet } from "./union-field-get";
import { coreDxUnionFieldSet } from "./union-field-set";


export function registerCoreDxHelpers(): void {
  Handlebars.registerHelper("constantValueLiteral", coreDxConstantValueLiteral);
  Handlebars.registerHelper("dataReaderBaseName", coreDxDataReaderBaseName);
  Handlebars.registerHelper("dataWriterBaseName", coreDxDataWriterBaseName);
  Handlebars.registerHelper("fieldRef", coreDxFieldRef);
  Handlebars.registerHelper("generatedDataReaderName", coreDxGeneratedDataReaderName);
  Handlebars.registerHelper("nativeConstName", coreDxNativeConstName);
  Handlebars.registerHelper("nativeTypeName", coreDxNativeTypeName);
  Handlebars.registerHelper("providerHeaders", coreDxProviderHeaders);
  Handlebars.registerHelper("seqContainmentPolicy", coreDxSeqContainmentPolicy);
  Handlebars.registerHelper("typeSupportBaseName", coreDxTypeSupportBaseName);
  Handlebars.registerHelper("unionDiscriminatorGet", coreDxUnionDiscriminatorGet);
  Handlebars.registerHelper("unionDiscriminatorSet", coreDxUnionDiscriminatorSet);
  Handlebars.registerHelper("unionFieldGet", coreDxUnionFieldGet);
  Handlebars.registerHelper("unionFieldSet", coreDxUnionFieldSet);
}

// vim: set ts=2 sw=2 expandtab:
