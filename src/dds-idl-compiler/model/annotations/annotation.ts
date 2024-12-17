/**
 * @brief Contains the definition of the `Annotation` class.
 * @author Rolando J. Nieves
 * @date 2024-11-18 11:00:50
 */


export type AnnotationParameters = { [key: string]: string };

export type KnownAnnotationClass = {
  new(params: AnnotationParameters): Annotation
}

export class Annotation {
  public constructor(public readonly name: string, public readonly parameters: AnnotationParameters) {}
}

// vim: set ts=2 sw=2 expandtab:
