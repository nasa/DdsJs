/**
 * @brief Contains the definition of the `dataImplAnnotationFactory()` function
 * @author Rolando J. Nieves
 * @date 2024-11-18 12:07:34
 */

import { Annotation, AnnotationParameters, KnownAnnotationClass } from "../annotation"
import { NestedAnnotation } from "./nested-annotation";


const dataImplAnnotationMap = new Map< string, KnownAnnotationClass >([
  [NestedAnnotation.NAME, NestedAnnotation]
]);


export function dataImplAnnotationFactory(name: string, params: AnnotationParameters): Annotation | undefined {
  let FoundClass = dataImplAnnotationMap.get(name);
  if (FoundClass !== undefined) {
    return new FoundClass(params);
  }
}

// vim: set ts=2 sw=2 expandtab:
