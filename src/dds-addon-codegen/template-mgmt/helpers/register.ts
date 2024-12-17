/**
 * @brief Contains the definition of the `registerTcpFactoryHelpers()` function.
 * @author Rolando J. Nieves
 * @date 2024-12-16 13:48:29
 */

import { TemplateContextPairFactory } from "../template-context-pair-factory";
import { addonMainTcpFactoryHelper } from "./addon-main-tcp-helper";
import { enumTcpFactoryHelper } from "./enum-tcp-helper";
import { moduleTcpFactoryHelper } from "./module-tcp-helper";
import { structTcpFactoryHelper } from "./struct-tcp-helper";
import { typeAliasTcpFactoryHelper } from "./type-alias-tcp-helper";
import { unionTcpFactoryHelper } from "./union-tcp-helper";


export function registerTcpFactoryHelpers(factory: TemplateContextPairFactory): void {
  factory.registerHelper(addonMainTcpFactoryHelper);
  factory.registerHelper(enumTcpFactoryHelper);
  factory.registerHelper(moduleTcpFactoryHelper);
  factory.registerHelper(structTcpFactoryHelper);
  factory.registerHelper(typeAliasTcpFactoryHelper);
  factory.registerHelper(unionTcpFactoryHelper);
}

// vim: set ts=2 sw=2 expandtab:
