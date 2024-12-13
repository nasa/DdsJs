/**
 * @brief Contains the definition of the `PreProcessorLine` class.
 * @author Rolando J. Nieves
 * @date 2024-02-13 13:19:58
 */

export class PreProcessorLine {
  public readonly lineNumber: number = -1;
  public readonly fileName: string = "";
  
  public constructor(lineContents: string) {
    const enum ParseStates {
      POUND_SIGN,
      EMPTY_SPC_TO_LINE_NUMBER,
      LINE_NUMBER,
      EMPTY_SPC_TO_FILE_NAME,
      FILE_NAME_CONTENT,
      FILE_NAME_CONTENT_ESCAPE,
      SUCCESS,
      UNRECOGNIZED
    };

    let parseState: number = ParseStates.POUND_SIGN;
    let lineNumStr: string = "";
    let fileNameStr: string = "";
    let errorMsg: string = "";
    lineContents = lineContents.trimStart();
    let charIdx: number = 0;
    while (charIdx < lineContents.length) {
      let aChar = lineContents[charIdx];
      switch (parseState) {
        case ParseStates.POUND_SIGN:
          if (aChar === "#") {
            // Consume pound sign
            charIdx++;
          } else if (aChar.match(/[ \t\r\n]/) !== null) {
            // Do NOT consume char. Move to empty space between pound and line
            // number.
            parseState = ParseStates.EMPTY_SPC_TO_LINE_NUMBER;
          } else {
            // Not a preproc line ... just skip
            parseState = ParseStates.UNRECOGNIZED;
            charIdx = lineContents.length;
          }
          break;
        case ParseStates.EMPTY_SPC_TO_LINE_NUMBER:
          if (aChar.match(/[ \t\r\n]/) !== null) {
            // Consume empty space
            charIdx++;
          } else if (aChar.match(/[0-9]/) !== null) {
            // Do NOT consume char. Move to line number
            parseState = ParseStates.LINE_NUMBER;
          } else {
            // Unexpected character ... just skip
            parseState = ParseStates.UNRECOGNIZED;
            charIdx = lineContents.length;
          }
          break;
        case ParseStates.LINE_NUMBER:
          if (aChar.match(/[0-9]/) !== null) {
            // Consume line number digit
            lineNumStr += aChar;
            charIdx++;
          } else if (aChar.match(/[ \t\r\n]/) !== null) {
            // Do NOT consume char. Move to empty space between line number and
            // file name.
            parseState = ParseStates.EMPTY_SPC_TO_FILE_NAME;
          } else {
            // Unexpected character ... just skip
            parseState = ParseStates.UNRECOGNIZED;
            charIdx = lineContents.length;
          }
          break;
        case ParseStates.EMPTY_SPC_TO_FILE_NAME:
          if (aChar.match(/[ \t\r\n]/) !== null) {
            // Consume empty space
            charIdx++;
          } else if (aChar === "\"") {
            // Consume quote. Move to file name content.
            charIdx++;
            parseState = ParseStates.FILE_NAME_CONTENT;
          } else {
            // Unexpected character ... just skip
            parseState = ParseStates.UNRECOGNIZED;
            charIdx = lineContents.length;
          }
          break;
        case ParseStates.FILE_NAME_CONTENT:
          if (aChar === "\\") {
            // Consume escaping backslash. Move to content escape.
            charIdx++;
            parseState = ParseStates.FILE_NAME_CONTENT_ESCAPE;
          } else if (aChar === "\"") {
            // Consume rest of the line and finish
            parseState = ParseStates.SUCCESS;
            charIdx = lineContents.length;
          } else {
            // Consume and save character. Stay.
            fileNameStr += aChar;
            charIdx++;
          }
          break;
        case ParseStates.FILE_NAME_CONTENT_ESCAPE:
          // Consume and save escaped character. Move to file name content.
          fileNameStr += aChar;
          charIdx++;
          parseState = ParseStates.FILE_NAME_CONTENT;
          break;
      }
    }

    if (parseState === ParseStates.SUCCESS) {
      this.fileName = fileNameStr;
      this.lineNumber = Number(lineNumStr).valueOf();
    }
  }

  public valid(): boolean {
    return (this.lineNumber > 0) && (this.fileName.length > 0);
  }
}

// vim: set ts=2 sw=2 expandtab:
