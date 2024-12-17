/**
 * @brief Contains the definition for the `CaseCondition` class and derivatives.
 * @author Rolando J. Nieves
 * @date 2024-11-15 12:28:33
 */

import { ConstantValue, IntegerConstantValue, InvalidConstantValue } from "./constant-value";
import { BaseTypeSpec, IntegerType } from "./typespec";


function conditionUsesConstant(theConst: ConstantValue, condition: CaseCondition): boolean {
  return condition.conditionConstant.equals(theConst);
}

function evaluatePlaceholderCandidate(candidate: ConstantValue | undefined, typespec: BaseTypeSpec, collection: ConstantValue[]): void {
  if (candidate !== undefined) {
    if (typespec instanceof IntegerType) {
      if ((candidate instanceof IntegerConstantValue) && (typespec.valueInRange(candidate.value))) {
        collection.push(candidate);
      }
    } else {
      collection.push(candidate);
    }
  }
}

export abstract class CaseCondition {
  public abstract readonly conditionConstant: ConstantValue;
}

export class DefaultCaseCondition extends CaseCondition {
  private selectedPlaceholder?: ConstantValue;

  public constructor() {
    super();
  }

  public get conditionConstant(): ConstantValue {
    if (!this.selectedPlaceholder) {
      return new InvalidConstantValue();
    } else {
      return this.selectedPlaceholder;
    }
  }

  public selectPlaceholder(switchTypespec: BaseTypeSpec, selectedRange: CaseCondition[]): void {
    let result: ConstantValue | undefined = undefined;
    let candidates: ConstantValue[] = [];

    for (let aCond of selectedRange) {
      evaluatePlaceholderCandidate(aCond.conditionConstant.previousValue(), switchTypespec, candidates);
      evaluatePlaceholderCandidate(aCond.conditionConstant.nextValue(), switchTypespec, candidates);
    }

    for (let aCandidate of candidates) {
      let predicate = conditionUsesConstant.bind(undefined, aCandidate);
      if (selectedRange.find(predicate) === undefined) {
        result = aCandidate;
        break;
      }
    }

    this.selectedPlaceholder = result;
  }
}

export class BasicCaseCondition extends CaseCondition {
  public constructor(public readonly conditionConstant: ConstantValue) {
    super();
  }
}

export class InvalidCaseCondition extends CaseCondition {
  public readonly conditionConstant: ConstantValue = new InvalidConstantValue();
}

// vim: set ts=2 sw=2 expandtab:
