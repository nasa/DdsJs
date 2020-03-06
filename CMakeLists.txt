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
    VERSION 1.1.0
    LANGUAGES
        CXX
        Java
    DESCRIPTION "DDS binding facilities for NodeJS"
)
list(APPEND
    CMAKE_MODULE_PATH
    "${PROJECT_SOURCE_DIR}/cmake/Modules"
)

find_package(Java)
include(UseJava)
include(CheckSymbolExists)
include(FindThreads)

if (CMAKE_INSTALL_PREFIX_INITIALIZED_TO_DEFAULT)
    set(CMAKE_INSTALL_PREFIX "$ENV{HOME}/ASTRA" CACHE PATH "Installation prefix." FORCE)
endif ()

set(WITH_DDS "CoreDX" CACHE STRING "Selected DDS provider (CoreDX is the default).")

# NOTE: For now, we only support CoreDX
if (WITH_DDS STREQUAL "CoreDX")
    set(DDS_PROVIDER_COMP "Cxxcf")
    set(DDS_PROVIDER_ST "cdx_node")
    set(DDS_PROVIDER "DDS_PROVIDER_COREDX")
# elseif (WITH_DDS STREQUAL "OpenSplice")
#     set (DDS_PROVIDER_COMP "Sacpp")
# elseif (WITH_DDS STREQUAL "OpenDDS")
#     set (DDS_PROVIDER_COMP "Dcps")
else ()
    message (FATAL_ERROR "Missing or unknown DDS provider '${WITH_DDS}'.")
endif ()
find_package(${WITH_DDS} REQUIRED COMPONENTS ${DDS_PROVIDER_COMP})

find_package(NodeJs REQUIRED)
find_package(ANTLR4 REQUIRED)
find_package(CommonsCLI REQUIRED)
find_package(ST REQUIRED)

get_filename_component(ANTLR4_JAR_FILE ${ANTLR4_JAR} NAME)
get_filename_component(STRINGTEMPLATE_JAR_FILE ${STRINGTEMPLATE_JAR} NAME)
get_filename_component(COMMONS_CLI_JAR_FILE ${COMMONS_CLI_JAR} NAME)

# ===========================================================================
# DdsJs IDL Compiler
# ===========================================================================

## IDL Compiler JAR file build plan -----------------------------------------
list(APPEND DDSJS_COMPILER_SOURCES
    "Compiler/gov/nasa/ksc/ddsjs/model/IdlUnionCase.java"
    "Compiler/gov/nasa/ksc/ddsjs/model/IdlEnumDefinition.java"
    "Compiler/gov/nasa/ksc/ddsjs/model/IdlTypeDefReceiver.java"
    "Compiler/gov/nasa/ksc/ddsjs/model/IdlSizeDefReceiver.java"
    "Compiler/gov/nasa/ksc/ddsjs/model/IdlSequenceType.java"
    "Compiler/gov/nasa/ksc/ddsjs/model/IdlConstantExpression.java"
    "Compiler/gov/nasa/ksc/ddsjs/model/IdlStringType.java"
    "Compiler/gov/nasa/ksc/ddsjs/model/IdlModuleDefinition.java"
    "Compiler/gov/nasa/ksc/ddsjs/model/IdlUnionDefinition.java"
    "Compiler/gov/nasa/ksc/ddsjs/model/IdlStructureDefinition.java"
    "Compiler/gov/nasa/ksc/ddsjs/model/IdlStructFieldReceiver.java"
    "Compiler/gov/nasa/ksc/ddsjs/model/IdlPrimitiveType.java"
    "Compiler/gov/nasa/ksc/ddsjs/model/IdlArrayType.java"
    "Compiler/gov/nasa/ksc/ddsjs/model/IdlTypeAlias.java"
    "Compiler/gov/nasa/ksc/ddsjs/model/IdlStructureField.java"
    "Compiler/gov/nasa/ksc/ddsjs/idlc/IdlParserListener.java"
    "Compiler/gov/nasa/ksc/ddsjs/idlc/IdlStCompiler.java"
    "Compiler/gov/nasa/ksc/ddsjs/parser/DdsJsIdlListener.java"
    "Compiler/gov/nasa/ksc/ddsjs/parser/DdsJsIdlParser.java"
    "Compiler/gov/nasa/ksc/ddsjs/parser/DdsJsIdlBaseListener.java"
    "Compiler/gov/nasa/ksc/ddsjs/parser/DdsJsIdlLexer.java"
)
add_custom_command(
    OUTPUT
        "Compiler/gov/nasa/ksc/ddsjs/parser/DdsJsIdlListener.java"
        "Compiler/gov/nasa/ksc/ddsjs/parser/DdsJsIdlParser.java"
        "Compiler/gov/nasa/ksc/ddsjs/parser/DdsJsIdlBaseListener.java"
        "Compiler/gov/nasa/ksc/ddsjs/parser/DdsJsIdlLexer.java"
        "Compiler/gov/nasa/ksc/ddsjs/parser/DdsJsIdl.tokens"
        "Compiler/gov/nasa/ksc/ddsjs/parser/DdsJsIdlLexer.tokens"
    COMMAND
        ${Java_JAVA_EXECUTABLE}
        "-jar" "${ANTLR4_JAR}"
        "-package" "gov.nasa.ksc.ddsjs.parser"
        "DdsJsIdl.g4"
    MAIN_DEPENDENCY
        "${PROJECT_SOURCE_DIR}/Compiler/gov/nasa/ksc/ddsjs/parser/DdsJsIdl.g4"
    WORKING_DIRECTORY
        "${PROJECT_SOURCE_DIR}/Compiler/gov/nasa/ksc/ddsjs/parser"
    COMMENT
        "Generating Parser Source from ANTLR Grammar"
)
add_jar(ddsjs_compiler
    SOURCES
        ${DDSJS_COMPILER_SOURCES}
    INCLUDE_JARS
        ${ANTLR4_JAR}
        ${COMMONS_CLI_JAR}
        ${STRINGTEMPLATE_JAR}
    ENTRY_POINT
        "gov.nasa.ksc.ddsjs.idlc.IdlStCompiler"
)
get_property(DDSJS_COMPILER_JAR
    TARGET ddsjs_compiler
    PROPERTY JAR_FILE
)
get_filename_component(
    DDSJS_COMPILER_JAR_FILE
    ${DDSJS_COMPILER_JAR} NAME
)

## --------------------------------------------------------------------------

## IDL Compiler Convenience Scripts -----------------------------------------
get_target_property(
    DDSJS_COMPILER_JAR
    ddsjs_compiler
    JAR_FILE
)
get_filename_component(
    DDSJS_COMPILER_JAR_FILE
    "${DDSJS_COMPILER_JAR}"
    NAME
)
set(DDSJS_IDL_BUILD_CLASSPATH "${DDSJS_COMPILER_JAR}:${ANTLR4_JAR}:${COMMONS_CLI_JAR}:${STRINGTEMPLATE_JAR}")
set(DDSJS_IDL_BUILD_DATADIR "${PROJECT_SOURCE_DIR}/Compiler/gov/nasa/ksc/ddsjs/idlc")
set(DDSJS_IDL_BUILD_COMPILER "${PROJECT_BINARY_DIR}/ddsjs_idl")
set(DDSJS_IDL_INSTALL_CLASSPATH "${CMAKE_INSTALL_PREFIX}/libexec/${DDSJS_COMPILER_JAR_FILE}:\
${CMAKE_INSTALL_PREFIX}/libexec/${ANTLR4_JAR_FILE}:\
${CMAKE_INSTALL_PREFIX}/libexec/${COMMONS_CLI_JAR_FILE}:\
${CMAKE_INSTALL_PREFIX}/libexec/${STRINGTEMPLATE_JAR_FILE}"
)
set(DDSJS_IDL_INSTALL_DATADIR "${CMAKE_INSTALL_PREFIX}/share")
set(DDSJS_IDL_INSTALL_COMPILER "${CMAKE_INSTALL_PREFIX}/bin/ddsjs_idl")
if (UNIX)
    add_custom_target(
        ddsjs_idl_for_build_create
        ALL
        "cmake"
        "-DDDSJS_IDL_CLASSPATH=${DDSJS_IDL_BUILD_CLASSPATH}"
        "-DDDSJS_IDL_DATADIR=${DDSJS_IDL_BUILD_DATADIR}"
        "-DINPUT_FILE=${CMAKE_CURRENT_SOURCE_DIR}/Compiler/ddsjs_idl.sh"
        "-DOUTPUT_FILE=${CMAKE_CURRENT_BINARY_DIR}/ddsjs_idl"
        "-DNL_STYLE=UNIX"
        "-P" "${PROJECT_SOURCE_DIR}/cmake_local/DdsJs/ConfigureFileScript.cmake"
        COMMENT "DDS.js compiler executable script for build environment."
        COMMAND_EXPAND_LISTS
    )
    add_custom_target(
        ddsjs_idl_for_build_make_exec
        ALL
        "cmake"
        "-DSCRIPT_FILE=${PROJECT_BINARY_DIR}/ddsjs_idl"
        "-P" "${PROJECT_SOURCE_DIR}/cmake_local/DdsJs/MakeScriptExecutable.cmake"
    )
    add_dependencies(
        ddsjs_idl_for_build_make_exec
        ddsjs_idl_for_build_create
    )
    add_custom_target(
        ddsjs_idl_for_install
        ALL
        "cmake"
        "-DDDSJS_IDL_CLASSPATH=${DDSJS_IDL_INSTALL_CLASSPATH}"
        "-DDDSJS_IDL_DATADIR=${DDSJS_IDL_INSTALL_DATADIR}"
        "-DINPUT_FILE=${CMAKE_CURRENT_SOURCE_DIR}/Compiler/ddsjs_idl.sh"
        "-DOUTPUT_FILE=${CMAKE_CURRENT_BINARY_DIR}/for_install/ddsjs_idl"
        "-DNL_STYLE=UNIX"
        "-P" "${PROJECT_SOURCE_DIR}/cmake_local/DdsJs/ConfigureFileScript.cmake"
        COMMENT "DDS.js compiler executable script for install environment."
        COMMAND_EXPAND_LISTS
    )
elseif (WIN32)
    add_custom_target(
        ddsjs_idl.bat
        ALL
        COMMENT "DDS.js compiler executable script."
    )
    configure_file(
        "Compiler/ddsjs_idl.bat"
        "ddsjs_idl.bat"
        @ONLY
        NEWLINE_STYLE WIN32
    )
endif ()
## --------------------------------------------------------------------------

## IDL Compiler Installation Plan -------------------------------------------
install_jar(
    ddsjs_compiler
    DESTINATION "libexec"
    COMPONENT Dev
)
install(
    FILES
        "${PROJECT_SOURCE_DIR}/Compiler/gov/nasa/ksc/ddsjs/idlc/cdx_node.stg"
    DESTINATION
        "share"
    COMPONENT
        Dev
)
install(
    FILES
        ${ANTLR4_JAR}
        ${COMMONS_CLI_JAR}
        ${STRINGTEMPLATE_JAR}
    DESTINATION
        "libexec"
    COMPONENT
        Dev
)
if (UNIX)
    install(
        PROGRAMS
            "${PROJECT_BINARY_DIR}/for_install/ddsjs_idl"
        DESTINATION
            "bin"
        PERMISSIONS
            OWNER_READ
            OWNER_WRITE
            OWNER_EXECUTE
            GROUP_READ
            GROUP_EXECUTE
            WORLD_READ
            WORLD_EXECUTE
        COMPONENT
            Dev
    )
elseif (WIN32)
    install(
        PROGRAMS
            ${PROJECT_BINARY_DIR}/ddsjs_idl.bat
        DESTINATION
            "bin"
        COMPONENT
            Dev
    )
endif ()
install(
    FILES
        "${PROJECT_SOURCE_DIR}/cmake/Modules/TargetIDLSources.cmake"
        "${PROJECT_SOURCE_DIR}/cmake/Modules/FindCoreDX.cmake"
        "${PROJECT_SOURCE_DIR}/cmake_local/DdsJs/AddNodeJsModuleTarget.cmake"
    DESTINATION
        "lib/cmake/Modules"
    COMPONENT
        Dev
)
## --------------------------------------------------------------------------

# ===========================================================================
# DdsJsRuntime library
# ===========================================================================

## Runtime Shared Library ---------------------------------------------------
configure_file(
    "DdsJs/dds_provider.h.in"
    "DdsJs/dds_provider.h"
    @ONLY
)
list(APPEND DDSJS_RUNTIME_SOURCES
    "DdsJs/ddsjs_base.cpp"
    "DdsJs/ddsjs.cpp"
    "DdsJs/DomainParticipantWrap.cpp"
    "DdsJs/PublisherWrap.cpp"
    "DdsJs/SubscriberWrap.cpp"
    "DdsJs/TypeUtility.cpp"
)
add_custom_command(
    OUTPUT
        "${PROJECT_SOURCE_DIR}/DdsJs/ddsjs_base.cpp"
        "${PROJECT_SOURCE_DIR}/DdsJs/ddsjs_base.hh"
    COMMAND
        ${Java_JAVA_EXECUTABLE}
        "-cp" "${ANTLR4_JAR}:${COMMONS_CLI_JAR}:${STRINGTEMPLATE_JAR}:${DDSJS_COMPILER_JAR}"
        "gov.nasa.ksc.ddsjs.idlc.IdlStCompiler"
        "-T" "${PROJECT_SOURCE_DIR}/Compiler/gov/nasa/ksc/ddsjs/idlc"
        "-c" "ddsjs_base.hh"
        "-f" "ddsjs.idl"
        "-n"
        "-o" "ddsjs_base.cpp"
        "-p"
        "-i"
        "-r"
        "-t" ${DDS_PROVIDER_ST}
    COMMAND
        ${Java_JAVA_EXECUTABLE}
        "-cp"
        "${ANTLR4_JAR}:${COMMONS_CLI_JAR}:${STRINGTEMPLATE_JAR}:${DDSJS_COMPILER_JAR}"
        "gov.nasa.ksc.ddsjs.idlc.IdlStCompiler"
        "-T" "${PROJECT_SOURCE_DIR}/Compiler/gov/nasa/ksc/ddsjs/idlc"
        "-h"
        "-f" "ddsjs.idl"
        "-n"
        "-o" "ddsjs_base.hh"
        "-p"
        "-i"
        "-r"
        "-t" ${DDS_PROVIDER_ST}
    MAIN_DEPENDENCY "${PROJECT_SOURCE_DIR}/DdsJs/ddsjs.idl"
    DEPENDS ddsjs_compiler
    WORKING_DIRECTORY "${PROJECT_SOURCE_DIR}/DdsJs"
    COMMENT "Generating DDS JS Base from IDL File"
)
add_library(DdsJsRuntime SHARED
    ${DDSJS_RUNTIME_SOURCES}
)
add_dependencies(DdsJsRuntime ddsjs_compiler)
target_include_directories(DdsJsRuntime
    PRIVATE
        "${PROJECT_SOURCE_DIR}/DdsJs"
    PUBLIC
        ${NODEJS_INCLUDE_DIR}
        $<BUILD_INTERFACE:${PROJECT_SOURCE_DIR}>
        $<BUILD_INTERFACE:${PROJECT_BINARY_DIR}>
        $<INSTALL_INTERFACE:include>
)
target_compile_definitions(DdsJsRuntime
    PUBLIC
        "$<$<CONFIG:Debug>:DEBUG;_DEBUG>"
        "_LARGEFILE_SOURCE"
        "_FILE_OFFSET_BITS=64"
        "BUILDING_NODE_EXTENSION"
)
target_compile_features(DdsJsRuntime
    PUBLIC cxx_std_11
)
set_target_properties(
    DdsJsRuntime
    PROPERTIES
        SOVERSION "0"
        VERSION ${PROJECT_VERSION}
)
target_link_libraries(DdsJsRuntime ${WITH_DDS}::${DDS_PROVIDER_COMP})
## ----------------------------------------------------------------------------

## Runtime Library Installation Plan ------------------------------------------
install(
    TARGETS DdsJsRuntime
    EXPORT DdsJsTargets
    COMPONENT Bin
    LIBRARY DESTINATION "lib"
    INCLUDES DESTINATION "include"
)
list(APPEND DDSJS_INSTALLABLE_HEADERS
    "DdsJs/ddsjs.hh"
    "DdsJs/ddsjs_base.hh"
    "DdsJs/DomainParticipantWrap.hh"
    "DdsJs/PublisherWrap.hh"
    "DdsJs/SubscriberWrap.hh"
    "DdsJs/DataWriterWrap.hh"
    "DdsJs/DataReaderWrap.hh"
    "DdsJs/TypeUtility.hh"
    "${PROJECT_BINARY_DIR}/DdsJs/dds_provider.h"
)
if (WITH_DDS STREQUAL "CoreDX")
    list(APPEND DDSJS_INSTALLABLE_HEADERS "DdsJs/coredx_missing.hh")
endif ()
install(
    FILES ${DDSJS_INSTALLABLE_HEADERS}
    DESTINATION "include/DdsJs"
    COMPONENT Dev
)
## --------------------------------------------------------------------------

# =============================================================================
# Package configuration file
# =============================================================================

## Package configuration build plan -------------------------------------------
add_custom_target(
    package_config_for_build
    ALL
    "cmake"
    "-DWITH_DDS=${WITH_DDS}"
    "-DDDS_PROVIDER_COMP=${DDS_PROVIDER_COMP}"
    "-DDDSJS_IDL_COMPILER=${DDSJS_IDL_BUILD_COMPILER}"
    "-DDDSJS_CMAKE_MODULE_PATH=${PROJECT_SOURCE_DIR}/cmake/Modules\\;${PROJECT_SOURCE_DIR}/cmake_local/DdsJs"
    "-DDDS_PROVIDER_ST=${DDS_PROVIDER_ST}"
    "-DINPUT_FILE=${PROJECT_SOURCE_DIR}/cmake_local/DdsJs/DdsJsConfig.cmake"
    "-DOUTPUT_FILE=${PROJECT_BINARY_DIR}/DdsJs/DdsJsConfig.cmake"
    "-DNL_STYLE=UNIX"
    "-P" "${PROJECT_SOURCE_DIR}/cmake_local/DdsJs/ConfigureFileScript.cmake"
    COMMENT "DDS.js package configuration file (for build tree use)."
)

add_custom_target(
    package_config_for_install
    ALL
    "cmake"
    "-DWITH_DDS=${WITH_DDS}"
    "-DDDS_PROVIDER_COMP=${DDS_PROVIDER_COMP}"
    "-DDDSJS_IDL_COMPILER=${DDSJS_IDL_INSTALL_COMPILER}"
    "-DDDSJS_CMAKE_MODULE_PATH=${CMAKE_INSTALL_PREFIX}/lib/cmake/Modules"
    "-DDDS_PROVIDER_ST=${DDS_PROVIDER_ST}"
    "-DINPUT_FILE=${PROJECT_SOURCE_DIR}/cmake_local/DdsJs/DdsJsConfig.cmake"
    "-DOUTPUT_FILE=${PROJECT_BINARY_DIR}/for_install/DdsJsConfig.cmake"
    "-DNL_STYLE=UNIX"
    "-P" "${PROJECT_SOURCE_DIR}/cmake_local/DdsJs/ConfigureFileScript.cmake"
    COMMENT "DDS.js package configuration file (for install tree use)."
)

include(CMakePackageConfigHelpers)
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

set(ConfigPackageLocation "lib/cmake/DdsJs")
install(EXPORT DdsJsTargets
	FILE
		DdsJsTargets.cmake
	NAMESPACE
		DdsJs::
	DESTINATION
        "${ConfigPackageLocation}"
    COMPONENT
        Dev
)
install(
	FILES
		"${CMAKE_CURRENT_BINARY_DIR}/for_install/DdsJsConfig.cmake"
		"${CMAKE_CURRENT_BINARY_DIR}/DdsJs/DdsJsConfigVersion.cmake"
	DESTINATION
		"${ConfigPackageLocation}"
	COMPONENT
		Dev
)
## ----------------------------------------------------------------------------

# ===========================================================================
# Package Definition
# ===========================================================================

string(TOLOWER ${PROJECT_NAME} CPACK_PACKAGE_NAME)
set(CPACK_PACKAGE_DESCRIPTION_SUMMARY "${CPACK_PACKAGE_NAME} - Compiler and runtime to integrate DDS into NodeJS")
set(CPACK_PACKAGE_VENDOR "UBR3-KSC-NASA")
set(CPACK_PACKAGE_VERSION ${PROJECT_VERSION})
set(CPACK_PACKAGE_VERSION_MAJOR ${PROJECT_VERSION_MAJOR})
set(CPACK_PACKAGE_VERSION_MINOR ${PROJECT_VERSION_MINOR})
set(CPACK_PACKAGE_VERSION_PATCH ${PROJECT_VERSION_PATCH})
set(CPACK_PACKAGE_FILE_NAME "${CPACK_PACKAGE_NAME}-${CPACK_PACKAGE_VERSION}-${CMAKE_SYSTEM_NAME}-${CMAKE_SYSTEM_PROCESSOR}")
set(CPACK_PACKAGE_CONTACT "Rolando J. Nieves <rolando.j.nieves@nasa.gov>")
if (CMAKE_SYSTEM_NAME STREQUAL "Linux" AND CMAKE_SYSTEM_PROCESSOR STREQUAL "x86_64")
    set(CPACK_GENERATOR "DEB")
elseif (CMAKE_SYSTEM_NAME STREQUAL "Linux")
    set(CPACK_GENERATOR "TGZ")
endif ()
set(CPACK_ARCHIVE_COMPONENT_INSTALL ON)
set(CPACK_DEB_COMPONENT_INSTALL ON)
set(CPACK_COMPONENT_Bin_REQUIRED ON)
set(CPACK_PACKAGING_INSTALL_PREFIX "/opt/ASTRA")
set(CPACK_DEBIAN_PACKAGE_NAME "${PROJECT_NAME}-${WITH_DDS}")
set(CPACK_DEBIAN_PACKAGE_RELEASE "custom")
set(CPACK_DEBIAN_FILE_NAME "DEB-DEFAULT")
include(CPack)
include(CPackComponent)
