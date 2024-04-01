/**
 * @brief Contains the definition of the `PreProcessResult` class.
 * @author Rolando J. Nieves
 * @date 2024-02-12 17:10:04
 */

import { LocationInfo, UNKNOWN_LOCATION } from "./locinfo";


export class LocationMap extends Map< number, LocationInfo > {
  public getLocation(lineNumber: number): LocationInfo {
    return this.get(lineNumber) || UNKNOWN_LOCATION;
  }
};

export class PreProcessResult {
  public constructor(public readonly processedContents: string, public readonly locationMap: LocationMap) {}
}

// vim: set ts=2 sw=2 expandtab:
