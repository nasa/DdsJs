/**
 * @brief Contains the definition of the `DdsIdlMessageListener` class.
 * @author Rolando J. Nieves
 * @date 2024-11-12 11:18:55
 */

import { ErrorListener, RecognitionException, Recognizer, Token } from "antlr4";
import { FileInput, LocationInformation } from "../input";
import { EventEmitter } from "node:events";


interface DdsIdlMessageEventMap {
  error: [string];
  warning: [string];
}


export class DdsIdlMessageListener extends ErrorListener< Token > {
  private errorCount: number;
  private warningCount: number;
  public readonly events: EventEmitter< DdsIdlMessageEventMap >;

  public constructor(public readonly input: FileInput) {
    super();
    this.errorCount = 0;
    this.warningCount = 0;
    this.events = new EventEmitter< DdsIdlMessageEventMap >();
  }

  public syntaxError(recognizer: Recognizer< Token >, offendingSymbol: Token, line: number, column: number, msg: string, e: RecognitionException | undefined): void {
    let loc = this.translateLocation(line);
    this.errorCount += 1;
    this.events.emit("error", `${loc.filePath}, line ${loc.lineNumber}, col ${column+1}: error: ${msg} ${e ? `, ${e.message}` : ""}`);
  }

  public warning(msg: string, offendingSymbol: Token): void {
    let loc = this.translateLocation(offendingSymbol.line);
    this.warningCount += 1;
    this.events.emit("warning", `${loc.filePath}, line ${loc.lineNumber}, col ${offendingSymbol.column+1}: warning: ${msg}`);
  }

  private translateLocation(rawLineNumber: number): LocationInformation {
    let loc = new LocationInformation("<unknown>", rawLineNumber);

    try {
      loc = this.input.locationForLine(rawLineNumber);
    } catch (err) {}

    return loc;
  }
}


export function exceptionMessage(err: any): string {
  if (err instanceof Error) {
    return err.message;
  } else {
    return `${err}`;
  }
}

// vim: set ts=2 sw=2 expandtab:
