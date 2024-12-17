/**
 * @brief Contains the definition of the `topicSupport` Handlebars helper.
 * @author Rolando J. Nieves
 * @date 2024-12-17 16:58:05
 */

import Handlebars from "handlebars";
import { Structure } from "../../dds-idl-compiler";
import { isTopicTypeEligible } from "../../utils";


export function topicSupport(subject: Structure, options: Handlebars.HelperOptions): string {
  if (isTopicTypeEligible(subject)) {
    return options.fn(subject);
  } else {
    return options.inverse("");
  }
}

// vim: set ts=2 sw=2 expandtab:
