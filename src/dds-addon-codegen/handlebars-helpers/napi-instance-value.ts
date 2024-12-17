/**
 * @brief Contains the definition of the `napiInstanceValue` Handlebars helper.
 * @author Rolando J. Nieves
 * @date 2024-11-22 15:48:20
 */

import { BooleanConstantValue, CharacterConstantValue, ConstantDeclaration, IntegerConstantValue, Module, OctetConstantValue, RealConstantValue, StringConstantValue, UnsignedIntegerType } from "../../dds-idl-compiler";
import { moduleNsVarName } from "./module-ns-var-name";


export function napiInstanceValue(subject: Module | ConstantDeclaration): string {
  let result = "";

  if (subject instanceof Module) {
    result = moduleNsVarName(subject);
  } else {
    if (subject.constantValue instanceof IntegerConstantValue) {
      let typecast: string = "(int64_t)";
      if (subject.constantType instanceof UnsignedIntegerType) {
        typecast = "(uint64_t)";
      }
      return `::Napi::BigInt::New(env, ${typecast}${subject.constantValue.toString()})`;
    } else if (subject.constantValue instanceof RealConstantValue) {
      return `::Napi::Number::New(env, ${subject.constantValue.toString()})`;
    } else if (subject.constantValue instanceof StringConstantValue) {
      return `::Napi::String::New(env, "${subject.constantValue.toString()}")`;
    } else if (subject.constantValue instanceof BooleanConstantValue) {
      return `::Napi::Boolean::New(env, ${subject.constantValue.toString()})`;
    } else if (subject.constantValue instanceof OctetConstantValue) {
      return `::Napi::Number::New(env, ${subject.constantValue.toString()})`;
    } else if (subject.constantValue instanceof CharacterConstantValue) {
      return `::Napi::String::New(env, "${subject.constantValue.toString()}")`;
    }
  }

  return result;
}

// vim: set ts=2 sw=2 expandtab:
