cmake_minimum_required(VERSION 3.11)

project(
    dds_hostmonitor
    VERSION 1.0.0
    LANGUAGES
        CXX
)

set(DDSJS_PROJECT_ROOT "${PROJECT_SOURCE_DIR}/.." CACHE PATH "DdsJs project root directory.")

list(APPEND CMAKE_MODULE_PATH "${DDSJS_PROJECT_ROOT}/cmake/Modules")

set(DdsJs_DIR "${DDSJS_PROJECT_ROOT}/build/DdsJs" CACHE PATH "DdsJs project import directory.")

find_package(DdsJs REQUIRED COMPONENTS DdsJsRuntime)
find_program(
    DDSJS_IDL_COMPILER
    ddsjs_idl
    PATHS
        "${DDSJS_PROJECT_ROOT}/build"
)
if (DDSJS_IDL_COMPILER STREQUAL "DDSJS_IDL_COMPILER-NOTFOUND")
    message(FATAL_ERROR "Could not find DDS.js IDL compiler.")
endif ()

if (WITH_DDS STREQUAL "CoreDX")
    set(ST_NAME "cdx_node")
else ()
    message(FATAL_ERROR "Unknown or unsupported DDS provider '${WITH_DDS}'.")
endif ()

add_library(${PROJECT_NAME} SHARED)
set_target_properties(
    ${PROJECT_NAME}
    PROPERTIES
        PREFIX ""
        SUFFIX ".node"
        LINKER_LANGUAGE "CXX"
)
target_include_directories(
    ${PROJECT_NAME}
    PRIVATE ${CMAKE_JS_INC}
)
include(TargetIDLSources)
target_idl_sources(
    ${PROJECT_NAME}
    DDS_PROVIDER ${WITH_DDS}
    IDL_SOURCES "HostMonitor.idl"
)
add_custom_command(
    OUTPUT "${CMAKE_CURRENT_BINARY_DIR}/HostMonitorJs.cpp"
    COMMAND
        "${DDSJS_IDL_COMPILER}"
        "-f" "${PROJECT_SOURCE_DIR}/HostMonitor.idl"
        "-t" "${ST_NAME}"
        "-o" "${CMAKE_CURRENT_BINARY_DIR}/HostMonitorJs.cpp"
)
set_property(
    TARGET ${PROJECT_NAME}
    APPEND PROPERTY SOURCES
        "${CMAKE_CURRENT_BINARY_DIR}/HostMonitorJs.cpp"
)
target_link_libraries(
    ${PROJECT_NAME}
    DdsJs::DdsJsRuntime
    ${WITH_DDS}::${DDS_PROVIDER_COMP}
    ${CMAKE_JS_LIB}
)
