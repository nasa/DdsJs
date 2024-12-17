/**
 * @brief Contains various internal utilities for the `handlebars-partials` module.
 * @author Rolando J. Nieves
 * @date 2024-12-06 15:37:11
 */

import { NestedAnnotation, Structure } from "./dds-idl-compiler";


// CODE ATTRIBUTION NOTICE
// Logic closely based from example offered in StackOverflow:
// https://stackoverflow.com/questions/6660977/convert-hyphens-to-camel-case-camelcase

export function dashToCamelCase(dashCase: string): string {
  // Including candidates that obviously would not be converted to upper case,
  // such as already upper case letters and numbers, so that the replacement
  // algorithm collapses the dashes all the same.
  return dashCase.replace(/-([a-zA-Z0-9])/g, (match, letter) => letter.toUpperCase());
}
// END CODE ATTRIBUTION NOTICE

export function isTopicTypeEligible(subject: Structure): boolean {
  let annotation = NestedAnnotation.PresentIn(subject);
  return (annotation === undefined) || !annotation.isNested
}

// vim: set ts=2 sw=2 expandtab:
