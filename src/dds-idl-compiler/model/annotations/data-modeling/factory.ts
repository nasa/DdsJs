/**
 * @brief Contains the definition of the `dataModelingAnnotationFactory()` function.
 * @author Rolando J. Nieves
 * @date 2024-11-18 11:20:55
 */

import { Annotation, AnnotationParameters, KnownAnnotationClass } from "../annotation"
import { KeyAnnotation } from "./key-annotation";


const dataModelingAnnotationMap = new Map< string, KnownAnnotationClass >([
  [KeyAnnotation.NAME, KeyAnnotation]
]);


export function dataModelingAnnotationFactory(name: string, params: AnnotationParameters): Annotation | undefined {
  let FoundClass = dataModelingAnnotationMap.get(name);
  if (FoundClass !== undefined) {
    return new FoundClass(params);
  }
}

// vim: set ts=2 sw=2 expandtab:
