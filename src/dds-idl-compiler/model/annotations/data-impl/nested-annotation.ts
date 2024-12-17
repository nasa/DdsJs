/**
 * @brief Contains the definition of the `NestedAnnotation` class.
 * @author Rolando J. Nieves
 * @date 2024-11-18 12:03:10
 */

import { Annotatable } from "../annotatable";
import { Annotation, AnnotationParameters } from "../annotation";


export interface NestedAnnotationParams extends AnnotationParameters {
  value: string;
}

export function isNestedAnnotationParams(obj: any): obj is NestedAnnotationParams {
  return (typeof obj === "object") &&
    (("value" in obj) && (typeof obj.value === "string"))
};

export class NestedAnnotation extends Annotation {
  public static readonly NAME = "nested";
  public static readonly DEFAULT_PARAMS: AnnotationParameters = { "value": "TRUE" };
  public readonly isNested: boolean;

  public constructor(params: AnnotationParameters) {
    let finalParams: AnnotationParameters = Object.assign({}, NestedAnnotation.DEFAULT_PARAMS);
    finalParams = Object.assign(finalParams, params);
    super(NestedAnnotation.NAME, finalParams);
    if (isNestedAnnotationParams(this.parameters)) {
      this.isNested = (this.parameters.value === "TRUE");
    } else {
      let msg = "Invalid parameters to @nested annotation";
      throw new Error(msg);
    }
  }

  public static PresentIn(target: Annotatable): NestedAnnotation | undefined {
    let result: NestedAnnotation | undefined = undefined;
    for (let anAnnotation of target.annotations()) {
      if (anAnnotation instanceof NestedAnnotation) {
        result = anAnnotation;
        break;
      }
    }

    return result;
  }
}

// vim: set ts=2 sw=2 expandtab:
