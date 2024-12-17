/**
 * @brief Contains the definition of the `TemplateContextPair` interface.
 * @author Rolando J. Nieves
 * @date 2024-12-16 13:37:55
 */

import { HeaderFileContext, ImplementationFileContext } from "../context";


export interface TemplateContextPair {
  templateName: string;
  context: HeaderFileContext | ImplementationFileContext;
}

// vim: set ts=2 sw=2 expandtab:
