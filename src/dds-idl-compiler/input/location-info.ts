/**
 * @brief Contains the definition of the `LocationInformation` class.
 * @author Rolando J. Nieves
 * @date 2024-11-07 14:53:35
 */


export class LocationInformation {
  public constructor(public readonly filePath: string, public readonly lineNumber: number) {}

  public matches(other: LocationInformation): boolean {
    return (other.filePath == this.filePath) && (other.lineNumber == this.lineNumber);
  }
}

// vim: set ts=2 sw=2 expandtab:
