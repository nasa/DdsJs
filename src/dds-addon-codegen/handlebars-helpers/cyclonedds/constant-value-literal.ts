/**
 * @brief Contains the definition of the `constantValueLiteral` Handlebars helper for CycloneDDS.
 * @author Rolando J. Nieves
 * @date 2024-11-25 15:08:00
 */

import { BooleanConstantValue, ConstantValue, Enumerator, IntegerConstantValue, OctetConstantValue } from "../../../dds-idl-compiler";
import { cycloneDdsNativeConstName } from "./native-name";


export function cycloneDdsConstantValueLiteral(subject: ConstantValue): string {
  let result: string = "";

  if ((subject instanceof IntegerConstantValue) || (subject instanceof BooleanConstantValue) || (subject instanceof OctetConstantValue)) {
    result = subject.toString();
  } else if (subject instanceof Enumerator) {
    result = cycloneDdsNativeConstName(subject);
  } else {
    result = `'${subject.toString()}'`
  }

  return result;
}

// vim: set ts=2 sw=2 expandtab:
