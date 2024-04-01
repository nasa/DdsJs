/**
 * @brief Contains the definition of the {@code DdsJsErrorListener} class.
 * @author Rolando J. Nieves
 * @date 2024-02-27 17:20:57
 */

import { ErrorListener, RecognitionException, Recognizer, Token } from "antlr4";
import { LocationInfo, LocationMap } from "../preproc";


export interface SemanticErrorInformation {
  readonly line?: number;
  readonly column?: number;
  readonly msg: string;
}

export class SemanticError extends Error implements SemanticErrorInformation {
  public readonly line: number;
  public readonly column: number;
  public readonly msg: string;
  public constructor(lineNumber: number, columnIdx: number, msg: string) {
    super(msg);
    this.line = lineNumber;
    this.column = columnIdx;
    this.msg = msg;
  }
}

export function extractSemanticErrorInfoFrom(obj: any, helpingContext?: Token): SemanticErrorInformation {
  let result = {
    line: undefined as (undefined | number),
    column: undefined as (undefined | number),
    msg: "<unknown>"
  };

  if (typeof(obj) === "object") {
    if (obj.hasOwnProperty("line") && (typeof(obj.line) === "number")) {
      result.line = obj.line;
    } else if (helpingContext !== undefined) {
      result.line = helpingContext.line;
    }
    if (obj.hasOwnProperty("column") && (typeof(obj.column) === "number")) {
      result.column = obj.column;
    } else if (helpingContext !== undefined) {
      result.column = helpingContext.column;
    }
    if (obj.hasOwnProperty("message") && (typeof(obj.message) === "string")) {
      result.msg = obj.message;
    }
  }

  return result as SemanticErrorInformation;
}

export class DdsJsErrorListener extends ErrorListener< any > {
  private _errorCount: number;

  public constructor(public readonly locationMap: LocationMap) {
    super();
    this._errorCount = 0;
  }

  public get errorCount(): number {
    return this._errorCount;
  }

  public hasErrors(): boolean {
    return this._errorCount > 0;
  }

  public semanticError(info: SemanticErrorInformation): void {
    const UNKNOWN_LOC = new LocationInfo("<unknown>", -1);
    let actualLoc: LocationInfo;
    if (info.line !== undefined) {
      actualLoc = this.locationMap.getLocation(info.line);
    } else {
      actualLoc = UNKNOWN_LOC;
    }
    let lineNumberText = (actualLoc.lineNumber > 0 ? `${actualLoc.lineNumber}` : "<unknown>");
    let columnIdxText = (info.column !== undefined ? `${info.column}` : "<unknown>");
    console.error(`${actualLoc.filePath}, line ${lineNumberText}, col ${columnIdxText}: ${info.msg}`);
    this._errorCount++;
  }

  public syntaxError(
    recognizer: Recognizer<any>,
    offendingSymbol: any,
    line: number,
    column: number,
    msg: string,
    e: RecognitionException | undefined
  ): void {
    let actualLoc = this.locationMap.getLocation(line);
    console.error(`${actualLoc.filePath}, line ${actualLoc.lineNumber}, col ${column}: Syntax Error: ${msg}`);
    this._errorCount++;
  }
}

// vim: set ts=2 sw=2 expandtab:
