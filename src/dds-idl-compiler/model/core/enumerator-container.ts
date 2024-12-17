/**
 * @brief Contains the definition of the `EnumeratorContainer` interface.
 * @author Rolando J. Nieves
 * @date 2024-11-27 11:57:03
 */

import { Enumerator } from "./enumerator";


export interface EnumeratorContainer {
  priorTo(theEnum: Enumerator): Enumerator | undefined;
  nextTo(theEnum: Enumerator): Enumerator | undefined;
}

// vim: set ts=2 sw=2 expandtab:
