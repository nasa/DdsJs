/**
 * @brief Contains the definition of the `BaseCodecProxy` class.
 * @author Rolando J. Nieves
 * @date 2022-02-15 17:37:36
 */


export class BaseCodecProxy {
  protected _name: string = "";

  public constructor(public readonly idlName: string, public readonly napiContainerName: string, public readonly jsTypeName: string) {}

  public get name(): string {
    return this._name;
  }
}

// vim: set ts=2 sw=2 expandtab:
