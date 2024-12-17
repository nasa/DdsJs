/**
 * @brief Contains the definition of the `DdsIdlMsgHandlingVisitor` class.
 * @author Rolando J. Nieves
 * @date 2024-11-12 11:31:59
 */

import DdsIdlVisitor from "../DdsIdlVisitor";
import { DdsIdlMessageListener } from "../msg-listener";


export class DdsIdlMsgHandlingVisitor< Result > extends DdsIdlVisitor< Result > {
  public constructor(public readonly msgListener: DdsIdlMessageListener) {
    super();
  }
}

// vim: set ts=2 sw=2 expandtab:
