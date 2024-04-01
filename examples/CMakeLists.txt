cmake_minimum_required(VERSION 3.16)

project(
    "hostmonitor"
    VERSION "1.0.0"
    LANGUAGES
        CXX
)
set(DDSJS_ROOT "$ENV{npm_config_local_prefix}/node_modules/dds-js-devkit" CACHE PATH "Root of dds-js-devkit package.")
set(ADDON_GEN_ROOT "${PROJECT_SOURCE_DIR}/native/addon" CACHE PATH "Directory where C++ add-on source files will go.")
set(PROVIDER_ROOT "${PROJECT_SOURCE_DIR}/native/${WITH_DDS}" CACHE PATH "Directory where DDS provider deposits generated C++.")
list(APPEND CMAKE_MODULE_PATH "${PROJECT_SOURCE_DIR}/cmake" "${DDSJS_ROOT}/cmake-js" "${ADDON_GEN_ROOT}/cmake-js")

include(DdsJsUtilities)
include(HostMonitorAddonUtilities)
include(TargetIDLSources)

if ("${WITH_DDS}" STREQUAL "CoreDX")
    find_package(CoreDX REQUIRED COMPONENTS Cxxcf)
    set(PROVIDER_COMPONENT "CoreDX::Cxxcf")
endif ()

# ==============================================================================
# Derive the include path for node-addon-api.
# ==============================================================================
execute_process(
    COMMAND node -p "require('node-addon-api').include"
    WORKING_DIRECTORY "${CMAKE_SOURCE_DIR}"
    OUTPUT_VARIABLE NODE_ADDON_API_DIR
)

string(REPLACE "\n" "" NODE_ADDON_API_DIR ${NODE_ADDON_API_DIR})
string(REPLACE "\"" "" NODE_ADDON_API_DIR ${NODE_ADDON_API_DIR})
message(STATUS "node-addon-api headers at ${NODE_ADDON_API_DIR}")

# ==============================================================================
# Derive the module platform tuple from the host NodeJS environment.
# ==============================================================================
execute_process(
    COMMAND node -p "\`node-\${process.platform}-\${process.arch}\`"
    WORKING_DIRECTORY ${CMAKE_SOURCE_DIR}
    OUTPUT_VARIABLE NODE_MODULE_TUPLE
)       
string(REPLACE "\n" "" NODE_MODULE_TUPLE ${NODE_MODULE_TUPLE})
message(STATUS "NodeJS module tuple: ${NODE_MODULE_TUPLE}")

# ==============================================================================
# NodeJS module library target.
# ==============================================================================
add_library("${PROJECT_NAME}" SHARED ${CMAKE_JS_SRC})
add_ddsjs_sources("${PROJECT_NAME}" "${DDSJS_ROOT}")
prepare_provider_header("CoreDX" "${DDSJS_ROOT}" "${DDSJS_ROOT}/DdsJs")
add_HostMonitorAddon_sources("${PROJECT_NAME}" "${ADDON_GEN_ROOT}")
target_idl_sources(
    "${PROJECT_NAME}"
    BINDING "CXX"
    DDS_PROVIDER "${WITH_DDS}"
    IDL_SOURCES "${PROJECT_SOURCE_DIR}/HostMonitor.idl"
    OUTPUT_DIR "${PROVIDER_ROOT}"
    USE_EXISTING
)

set_target_properties(
    ${PROJECT_NAME}
    PROPERTIES
        PREFIX ""
        SUFFIX ".node"
        LIBRARY_OUTPUT_DIRECTORY "${PROJECT_BINARY_DIR}/${NODE_MODULE_TUPLE}"
)
target_link_libraries(${PROJECT_NAME} ${CMAKE_JS_LIB} ${PROVIDER_COMPONENT})
target_include_directories(
    ${PROJECT_NAME}
    PUBLIC
        "${PROJECT_SOURCE_DIR}/native"
        ${ADDON_GEN_ROOT}
        ${PROVIDER_ROOT}
        ${DDSJS_ROOT}
        ${CMAKE_JS_INC}
        ${NODE_ADDON_API_DIR}
)
target_compile_definitions(
    "${PROJECT_NAME}"
    PUBLIC
        "$<$<CONFIG:Debug>:DEBUG;_DEBUG>"
        "NAPI_VERSION=6"
        "_LARGEFILE_SOURCE"
        "_FILE_OFFSET_BITS=64"
        "BUILDING_NODE_EXTENSION"
)
target_compile_features(
    "${PROJECT_NAME}"
    PUBLIC
        cxx_std_17
)

# ==============================================================================
# Compiler information pseudo-target.
# ==============================================================================
if (UNIX AND CMAKE_EXPORT_COMPILE_COMMANDS)
    add_custom_target(
        compile_commands ALL
        COMMAND
            "${CMAKE_COMMAND}"
            "-E"
            "create_symlink"
            "${PROJECT_BINARY_DIR}/compile_commands.json"
            "${PROJECT_SOURCE_DIR}/compile_commands.json"
        DEPENDS
            "${PROJECT_BINARY_DIR}/compile_commands.json"
    )
endif ()

# vim: set ts=4 sw=4 expandtab:
