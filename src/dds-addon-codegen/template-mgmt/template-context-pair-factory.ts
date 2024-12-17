/**
 * @brief Contains the definition of the `TemplateContextPairFactory` class.
 * @author Rolando J. Nieves
 * @date 2024-12-16 13:39:23
 */

import { ScopeMember } from "../../dds-idl-compiler";
import { TemplateContextPair } from "./template-context-pair";


type TcpFactoryHelper = (subject: ScopeMember, providerName: string, withTopicSupport: boolean) => TemplateContextPair[];

export class TemplateContextPairFactory {
  private helpers: TcpFactoryHelper[];

  public constructor(public readonly providerName: string) {
    this.helpers = [];
  }

  public registerHelper(helper: TcpFactoryHelper): void {
    this.helpers.push(helper);
  }

  public templateContextPairsFor(subject: ScopeMember, withTopicSupport: boolean): TemplateContextPair[] {
    let result: TemplateContextPair[] = [];

    for (let aHelper of this.helpers) {
      // First one to respond positively triggers loop exit
      result = aHelper(subject, this.providerName, withTopicSupport);
      if (result.length > 0) {
        break;
      }
    }

    return result;
  }
}

// vim: set ts=2 sw=2 expandtab:
