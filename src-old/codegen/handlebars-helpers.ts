/**
 * @brief Contains the definition of Handlebars helpers used in code generation.
 * @author Rolando J. Nieves
 * @date 2024-03-07 10:29:18
 */

import Handlebars from "handlebars";


export function itemsInReverse(context: any[], options: Handlebars.HelperOptions): string {
  let result: string = "";
  let reversedContext: any[] = ([] as any[]).concat(context).reverse();
  for (let anItem of reversedContext) {
    result = result + options.fn(anItem);
  }

  return result;
}

// vim: set ts=2 sw=2 expandtab:
