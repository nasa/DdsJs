/**
 * @brief Contains the definition of the `ScopedName` class.
 * @author Rolando J. Nieves
 * @date 2024-02-16 12:24:48
 */


export class ScopedName {
  public static readonly NS_SEP: string = "::";
  public readonly baseName: string;
  public readonly parentName: ScopedName | null;

  public constructor(public readonly flatName: string) {
    let parts = flatName.split(ScopedName.NS_SEP);

    this.baseName = parts.pop() || "";
    if (parts.length > 0) {
      this.parentName = new ScopedName(parts.join(ScopedName.NS_SEP));
    } else {
      this.parentName = null;
    }
  }

  public static Eq(left: ScopedName, right: ScopedName): boolean {
    let result: boolean = (left.baseName === right.baseName);
    result = result && (left.local() === right.local());
    if (result && (left.parentName !== null) && (right.parentName !== null)) {
      result = result && ScopedName.Eq(left.parentName, right.parentName);
    }

    return result;
  }

  public local(): boolean {
    return this.parentName === null;
  }

  public root(): boolean {
    return this.baseName.length > 0;
  }

  public toString(): string {
    return this.flatName;
  }
}

// vim: set ts=2 sw=2 expandtab:
