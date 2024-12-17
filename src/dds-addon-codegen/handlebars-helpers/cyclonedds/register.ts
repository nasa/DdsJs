/**
 * @brief Contains the definition of the `registerCycloneDdsHelpers()` function.
 * @author Rolando J. Nieves
 * @date 2024-11-19 17:04:41
 */

import Handlebars from "handlebars";
import { cycloneDdsConstantValueLiteral } from "./constant-value-literal";
import { cycloneDdsDataReaderBaseName } from "./data-reader-base-name";
import { cycloneDdsDataWriterBaseName } from "./data-writer-base-name";
import { cycloneDdsFieldRef } from "./field-ref";
import { cycloneDdsNativeConstName, cycloneDdsNativeTypeName } from "./native-name";
import { cycloneDdsProviderHeaders } from "./provider-headers";
import { cycloneDdsTopicDescriptorName } from "./topic-descriptor-name";
import { cycloneDdsTypeSupportBaseName } from "./type-support-base-name";
import { cycloneDdsUnionDiscriminatorGet } from "./union-discriminator-get";
import { cycloneDdsUnionDiscriminatorSet } from "./union-discriminator-set";
import { cycloneDdsUnionFieldGet } from "./union-field-get";
import { cycloneDdsUnionFieldSet } from "./union-field-set";


export function registerCycloneDdsHelpers(): void {
  Handlebars.registerHelper("constantValueLiteral", cycloneDdsConstantValueLiteral);
  Handlebars.registerHelper("dataReaderBaseName", cycloneDdsDataReaderBaseName);
  Handlebars.registerHelper("dataWriterBaseName", cycloneDdsDataWriterBaseName);
  Handlebars.registerHelper("fieldRef", cycloneDdsFieldRef);
  Handlebars.registerHelper("nativeConstName", cycloneDdsNativeConstName);
  Handlebars.registerHelper("nativeTypeName", cycloneDdsNativeTypeName);
  Handlebars.registerHelper("providerHeaders", cycloneDdsProviderHeaders);
  Handlebars.registerHelper("topicDescriptorName", cycloneDdsTopicDescriptorName);
  Handlebars.registerHelper("typeSupportBaseName", cycloneDdsTypeSupportBaseName);
  Handlebars.registerHelper("unionDiscriminatorGet", cycloneDdsUnionDiscriminatorGet);
  Handlebars.registerHelper("unionDiscriminatorSet", cycloneDdsUnionDiscriminatorSet);
  Handlebars.registerHelper("unionFieldGet", cycloneDdsUnionFieldGet);
  Handlebars.registerHelper("unionFieldSet", cycloneDdsUnionFieldSet);
}

// vim: set ts=2 sw=2 expandtab:
