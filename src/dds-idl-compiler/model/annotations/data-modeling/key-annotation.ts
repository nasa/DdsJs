/**
 * @brief Contains the definition of the `KeyAnnotation` class.
 * @author Rolando J. Nieves
 * @date 2024-11-18 11:09:27
 */

import { Annotatable } from "../annotatable";
import { Annotation, AnnotationParameters } from "../annotation";


export interface KeyAnnotationParams extends AnnotationParameters {
  value: string;
}

export function isKeyAnnotationParams(obj: any): obj is KeyAnnotationParams {
  return (typeof obj === "object") &&
    (("value" in obj) && (typeof obj.value === "string"))
};

export class KeyAnnotation extends Annotation {
  public static readonly NAME = "key";
  public static readonly DEFAULT_PARAMS: AnnotationParameters = { "value": "TRUE" };
  public readonly isKey: boolean;

  public constructor(params: AnnotationParameters) {
    let finalParams: AnnotationParameters = Object.assign({}, KeyAnnotation.DEFAULT_PARAMS);
    finalParams = Object.assign(finalParams, params);
    super(KeyAnnotation.NAME, finalParams);
    if (isKeyAnnotationParams(this.parameters)) {
      this.isKey = (this.parameters.value === "TRUE");
    } else {
      let msg = "Invalid parameters to @key annotation";
      throw new Error(msg);
    }
  }

  public static PresentIn(target: Annotatable): KeyAnnotation | undefined {
    let result: KeyAnnotation | undefined = undefined;
    for (let anAnnotation of target.annotations()) {
      if (anAnnotation instanceof KeyAnnotation) {
        result = anAnnotation;
        break;
      }
    }

    return result;
  }
}

// vim: set ts=2 sw=2 expandtab:
