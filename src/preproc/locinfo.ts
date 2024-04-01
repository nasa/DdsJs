/**
 * @brief Contains the definition of the `LocationInfo` class.
 * @author Rolando J. Nieves
 * @date 2024-02-12 16:57:02
 */


export class LocationInfo {
  public constructor(public readonly filePath: string, public readonly lineNumber: number) {}

  public makeNext(): LocationInfo {
    return new LocationInfo(this.filePath, this.lineNumber + 1);
  }
}

export const UNKNOWN_LOCATION = new LocationInfo("<unknown>", 0);

// vim: set ts=2 sw=2 expandtab: