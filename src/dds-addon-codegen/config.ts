/**
 * @brief Contains the definition of the `CppGenConfiguration` interface.
 * @author Rolando J. Nieves
 * @date 2024-12-16 12:09:03
 */


export interface CppGenConfiguration {
  readonly buildSystem: string | null;
  readonly outputDirectory: string;
  readonly providerName: string;
}

// vim: set ts=2 sw=2 expandtab:
