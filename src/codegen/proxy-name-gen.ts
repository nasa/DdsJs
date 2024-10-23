/**
 * @brief Contains the definition of the `ProxyNameGen` class.
 * @author Rolando J. Nieves
 * @date 2024-10-23 13:29:49
 */

import { BaseCodecProxy } from "../model";


export interface ProxyNameGen {
  proxyNameFor(codecProxy: BaseCodecProxy): string;
}

// vim: set ts=2 sw=2 expandtab:
