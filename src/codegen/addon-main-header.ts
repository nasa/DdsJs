/**
 * @brief Contains the definition of the `AddonMainHeader` class.
 * @author Rolando J. Nieves
 * @date 2024-02-29 16:28:43
 */

import { DdsJsAddon } from "../model";
import { HeaderFileBase } from "./header-file";


export class AddonMainHeader extends HeaderFileBase< DdsJsAddon > {
  public static readonly TEMPLATE_NAME = "addon-main.hh.handlebars";

  public constructor(addonName: string) {
    super(AddonMainHeader.TEMPLATE_NAME, addonName, []);
  }
}

// vim: set ts=2 sw=2 expandtab:
