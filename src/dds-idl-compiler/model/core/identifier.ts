/**
 * @brief Contains the definition of the `Identifier` class.
 * @author Rolando J. Nieves
 * @date 2024-10-24 17:17:29
 */


export class Identifier {
  public static readonly ROOT: Identifier = new Identifier("");
  
  public constructor(public readonly value: string) {}

  public matches(other: Identifier): boolean {
    return this.value == other.value;
  }

  public toString(): string {
    return this.value;
  }
}

// vim: set ts=2 sw=2 expandtab:
