/**
 * @brief Contains the definition of the `topicDescriptorName` Handlebars helper for CycloneDDS.
 * @author Rolando J. Nieves
 * @date 2024-12-06 16:10:07
 */

import { Structure } from "../../../dds-idl-compiler";


export function cycloneDdsTopicDescriptorName(subject: Structure): string {
  let tdNameParts = subject.scopedName.parts.map((aPart) => aPart.name.value);
  // Remove the top-level, zero-length-name scope.
  tdNameParts.shift();
  tdNameParts.push("desc");
  return tdNameParts.join("_");
}

// vim: set ts=2 sw=2 expandtab:
