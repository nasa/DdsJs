/**
 * @brief Contains the definition of the `annotationFactory()` function.
 * @author Rolando J. Nieves
 * @date 2024-11-18 11:33:46
 */

import { Annotation, AnnotationParameters } from "./annotation";
import { dataImplAnnotationFactory } from "./data-impl";
import { dataModelingAnnotationFactory } from "./data-modeling";


type FactoryFunction = (name: string, params: AnnotationParameters) => Annotation | undefined;

const SPECIFIC_FACTORIES: Array< FactoryFunction > = [
  dataModelingAnnotationFactory,
  dataImplAnnotationFactory
];

export function annotationFactory(name: string, params: AnnotationParameters): Annotation | undefined {
  let result: Annotation | undefined = undefined;
  for (let aFactoryFunction of SPECIFIC_FACTORIES) {
    result = aFactoryFunction(name, params);
    if (result !== undefined) {
      break;
    }
  }

  return result;
}

// vim: set ts=2 sw=2 expandtab:
