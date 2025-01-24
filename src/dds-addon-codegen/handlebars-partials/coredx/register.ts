/**
 * @brief Contains the definition of the `registerCoreDxPartials()` function.
 * @author Rolando J. Nieves
 * @date 2025-01-21 15:43:36
 */

import Handlebars from "handlebars";
import fs from "node:fs";
import path from "node:path";
import { dashToCamelCase } from "../../../utils";
import { TEMPLATE_ROOT } from "../../generate";


export function registerCoreDxPartials(): void {
  let partialsDir = path.normalize(path.join(TEMPLATE_ROOT, "partials", "coredx"));
  let candidates: fs.Dirent[] = fs.readdirSync(partialsDir, { encoding: "utf-8", withFileTypes: true });
  for (let aCandidate of candidates) {
    if (aCandidate && aCandidate.isFile() && (path.extname(aCandidate.name) == ".handlebars")) {
      let partialName = dashToCamelCase(path.parse(aCandidate.name).name);
      let partialContent = fs.readFileSync(path.join(partialsDir, aCandidate.name), { encoding: "utf-8" });
      Handlebars.registerPartial(partialName, partialContent);
    }
  }
}

// vim: set ts=2 sw=2 expandtab:
