/**
 * @brief Contains the main entry point for the DDS NodeJS add-on.
 * @author Rolando J. Nieves
 * @date 2024-03-08 14:54:08
 */

const bindings = require("bindings");


const ADDON_NAME = "hostmonitor.node";
const LOCATION_HINT = [ "module_root", "build", `node-${process.platform}-${process.arch}`, "bindings" ];
const MINIMUM_NAPI_VERSION = 6;

function main() {
  if (process.versions.napi < MINIMUM_NAPI_VERSION) {
    let msg = `The HostMonitor DDS add-on requires NodeJS with support for N-API version ${MINIMUM_NAPI_VERSION} or higher.`;
    throw new Error(msg);
  }

  return bindings({ bindings: ADDON_NAME, try: [ LOCATION_HINT ] });
}

module.exports = main();

// vim: set ts=2 sw=2 expandtab:
