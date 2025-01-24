/**
 * @brief Contains the definition of the `constantValueLiteral` Handlebars helper for CoreDX.
 * @author Rolando J. Nieves
 * @date 2025-01-21 11:04:05
 */

import { BooleanConstantValue, ConstantValue, Enumerator, IntegerConstantValue, RealConstantValue } from "../../../dds-idl-compiler";
import { coreDxNativeConstName } from "./native-name";


export function coreDxConstantValueLiteral(subject: ConstantValue): string {
  let result: string = "";

  if ((subject instanceof IntegerConstantValue) || (subject instanceof BooleanConstantValue) || (subject instanceof RealConstantValue)) {
    result = subject.toString();
  } else if (subject instanceof Enumerator) {
    result = coreDxNativeConstName(subject);
  } else {
    // All that is left is a character constant value. IDL does not support
    // defining string constant values.
    result = `'${subject.toString()}'`;
  }

  return result;
}

// vim: set ts=2 sw=2 expandtab:
