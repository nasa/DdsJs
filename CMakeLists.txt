# -----------------------------------------------------------------------------
# DDS NodeJS Interface Library
#
# Part of the software suite deployed for customers of the Avionics and Software
# Technology Research and Application (ASTRA) team within the KSC Applied
# Sciences branch (UB-R3), in the Exploration, Research and Technology KSC
# Directorate (UB).
# -----------------------------------------------------------------------------

cmake_minimum_required(VERSION 3.12)
project(
    DdsJs
    VERSION "$ENV{npm_package_version}"
    LANGUAGES
        CXX
    DESCRIPTION "DDS binding facilities for NodeJS"
)
list(APPEND
    CMAKE_MODULE_PATH
    "${PROJECT_SOURCE_DIR}/cmake/Modules"
    "${PROJECT_SOURCE_DIR}/cmake-js"
)

include(CheckSymbolExists)
include(FindThreads)
include(DdsJsUtilities)

set(WITH_DDS "CoreDX" CACHE STRING "Selected DDS provider (CoreDX is the default).")

set (DDS_DEPENDENCIES "")

if (WITH_DDS STREQUAL "CoreDX")
    find_package(CoreDX REQUIRED COMPONENTS Cxx)
    list  (APPEND DDS_DEPENDENCIES "CoreDX::Cxx")
elseif (WITH_DDS STREQUAL "CycloneDDS")
    find_package(CycloneDDS REQUIRED)
    list (APPEND DDS_DEPENDENCIES "CycloneDDS::ddsc")
else ()
    message (FATAL_ERROR "Missing or unknown DDS provider '${WITH_DDS}'.")
endif ()

# =============================================================================
# Derive the include path for node-addon-api.
# =============================================================================
execute_process(
    COMMAND node -p "require('node-addon-api').include"
    WORKING_DIRECTORY "${CMAKE_SOURCE_DIR}"
    OUTPUT_VARIABLE NODE_ADDON_API_DIR
)
string(REPLACE "\n" "" NODE_ADDON_API_DIR ${NODE_ADDON_API_DIR})
string(REPLACE "\"" "" NODE_ADDON_API_DIR ${NODE_ADDON_API_DIR})
message(STATUS "node-addon-api headers at ${NODE_ADDON_API_DIR}")

# =============================================================================
# DdsJsRuntime library
# =============================================================================

## Runtime Library Build Plan -------------------------------------------------
add_library(DdsJsRuntime STATIC
    ${CMAKE_JS_SRC}
)
add_ddsjs_sources(
    TARGET DdsJsRuntime
    DDSJS_ROOT "${PROJECT_SOURCE_DIR}"
    DDS_PROVIDER ${WITH_DDS}
)

target_include_directories(DdsJsRuntime
    PRIVATE
        "${PROJECT_SOURCE_DIR}/DdsJs"
        ${CMAKE_JS_INC}
        ${NODE_ADDON_API_DIR}
    PUBLIC
        $<BUILD_INTERFACE:${PROJECT_SOURCE_DIR}>
        $<BUILD_INTERFACE:${PROJECT_BINARY_DIR}>
)
# N-API must be at least 6 to have the required object wrapping facilities.
target_compile_definitions(DdsJsRuntime
    PUBLIC
        "$<$<CONFIG:Debug>:DEBUG;_DEBUG>"
        "NAPI_VERSION=6"
        "_LARGEFILE_SOURCE"
        "_FILE_OFFSET_BITS=64"
        "BUILDING_NODE_EXTENSION"
)
target_compile_features(DdsJsRuntime
    PUBLIC cxx_std_17
)
set_target_properties(
    DdsJsRuntime
    PROPERTIES
        POSITION_INDEPENDENT_CODE True
)
target_link_libraries(DdsJsRuntime ${DDS_DEPENDENCIES} ${CMAKE_JS_LIB})
## ----------------------------------------------------------------------------

## Runtime Library Installation Plan ------------------------------------------
install(
    TARGETS DdsJsRuntime
    EXPORT DdsJsTargets
)
## --------------------------------------------------------------------------

# =============================================================================
# Package configuration file
# =============================================================================

## Package configuration build plan -------------------------------------------
include(CMakePackageConfigHelpers)
configure_package_config_file(
    "${CMAKE_CURRENT_SOURCE_DIR}/cmake_local/DdsJsConfig.cmake.in"
    "${CMAKE_CURRENT_BINARY_DIR}/DdsJs/DdsJsConfig.cmake"
    INSTALL_DESTINATION "${CMAKE_CURRENT_BINARY_DIR}/DdsJs"
)
write_basic_package_version_file(
	"${CMAKE_CURRENT_BINARY_DIR}/DdsJs/DdsJsConfigVersion.cmake"
	VERSION "${PROJECT_VERSION}"
	COMPATIBILITY SameMajorVersion
)
## ----------------------------------------------------------------------------

## Package configuration install plan -----------------------------------------
export(EXPORT DdsJsTargets
	FILE "${CMAKE_CURRENT_BINARY_DIR}/DdsJs/DdsJsTargets.cmake"
	NAMESPACE DdsJs::
)
## ----------------------------------------------------------------------------

# =============================================================================
# Compile command information pseudo-target
# =============================================================================
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