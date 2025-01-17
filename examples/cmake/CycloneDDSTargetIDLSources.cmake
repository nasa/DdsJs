#.rst:
# CycloneDDSTargetIDLSources
# ----------------------
#
# Add sources generated from IDL compilation to a project target (executable or
# library).
#
# The function prototype is as follows::
# 
#   cyclonedds_target_idl_sources(
#     <target_name>
#     [ INCLUDE_PATH_LIST <list_var> ]
#     [ OUTPUT_DIR <directory> ]
#     [ USE_EXISTING ]
#     IDL_SOURCES <source_file> ...
#   )
#
# Where the arguments carry the following meaning::
#
# * <target_name>: Attach the language binding generated source files to
#                  `<target_name>`.
# * INCLUDE_PATH_LIST <list_var>: Name of CMake list variable that contains all
#                                 of the directoires to use as the include file
#                                 search path when compiling the IDL sources.
#                                 Defaults to the target's 
#                                 `INCLUDE_DIRECTORIES` property.
# * OUTPUT_DIR <directory>: Output language binding sources to the directory
#                           `<directory>`. If not specified, defaults to the
#                           current binary directory. An output directory 
#                           specified as a relative path is assumed to be
#                           relative to the current binary directory.
# * USE_EXISTING: If found, the TARGET will be modified such that the
#                 appropriate language binding source files are added to it, but
#                 the language bindings will not be automatically generated
#                 during a build. Instead, the language binding source files
#                 will be expected to already be present. The special 
#                 '${TARGET}_binding' and 'clean_${TARGET}_binding' custom 
#                 targets will still be created so that language binding source
#                 file regeneration can still be done manually. Should only be
#                 used when the bindings are in the source tree, at the
#                 directory pointed to by 'OUTPUT_DIR'.
# * IDL_SOURCES <source_file> ...: Names of the IDL source files to compile.
#                                  Any source files specified as a relative
#                                  path are assumed to be relative to the
#                                  current source directory.
#

function(CYCLONEDDS_TARGET_IDL_SOURCES TargetName)
    cmake_parse_arguments(
        PARSE_ARGV 1
        "CYC_TIS"
        "USE_EXISTING"
        "INCLUDE_PATH_LIST;OUTPUT_DIR"
        "IDL_SOURCES"
    )

    get_property(TARGET_DEFINED TARGET ${TargetName} PROPERTY NAME SET)

    if (NOT TARGET_DEFINED)
        message(FATAL_ERROR "cyclonedds_target_idl_sources(): Unknown target '${TargetName}'.")
    endif ()

    if (NOT CYC_TIS_IDL_SOURCES)
        message(FATAL_ERROR "cyclonedds_target_idl_sources(): No IDL sources identified.")
    endif ()

    foreach (AN_IDL_FILE IN LISTS CYC_TIS_IDL_SOURCES)
        if (NOT IS_ABSOLUTE ${AN_IDL_FILE})
            set(AN_IDL_FILE "${CMAKE_CURRENT_SOURCE_DIR}/${AN_IDL_FILE}")
        endif ()
        list(APPEND XformedIdlFiles "${AN_IDL_FILE}")
        if (NOT EXISTS ${AN_IDL_FILE})
            message(FATAL_ERROR "cyclonedds_target_idl_sources(): Cannot find IDL source file '${AN_IDL_FILE}'.")
        endif ()
    endforeach ()
    set(CYC_TIS_IDL_SOURCES ${XformedIdlFiles})

    if (NOT CYC_TIS_OUTPUT_DIR)
        set(CYC_TIS_OUTPUT_DIR "${CMAKE_CURRENT_BINARY_DIR}")
    endif ()

    if (NOT CYC_TIS_INCLUDE_PATH_LIST)
        get_property(CYC_TIS_INCLUDE_PATH_LIST TARGET ${TargetName} PROPERTY INCLUDE_DIRECTORIES)
    else ()
        set(CYC_TIS_INCLUDE_PATH_LIST ${${CYC_TIS_INCLUDE_PATH_LIST}})
    endif ()

    define_property(
        TARGET
        PROPERTY IDL_LANG_BINDING_HEADERS
        BRIEF_DOCS "List of header files produced from IDL file."
        FULL_DOCS "List of header files produced from IDL file."
    )

    # For each IDL source file, add the appropriate "custom command" that
    # produces the language binding source files, as well as add said source
    # files to the named target.
    foreach (IDL_FILE IN LISTS CYC_TIS_IDL_SOURCES)
        get_filename_component (IDL_BASENAME ${IDL_FILE} NAME_WE)
        
        set (SrcSuffix "c")
        set (HdrSuffix "h")
        
        list (APPEND LANG_BINDING_HEADERS
            "${CYC_TIS_OUTPUT_DIR}/${IDL_BASENAME}.${HdrSuffix}"
        )
        list (APPEND LANG_BINDING_SOURCES
            "${CYC_TIS_OUTPUT_DIR}/${IDL_BASENAME}.${SrcSuffix}"
        )
        if (CYC_TIS_USE_EXISTING)
            add_custom_target(
                ${TargetName}_binding
                    CycloneDDS::idlc
                    "-l" "c"
                    "-o" "${CYC_TIS_OUTPUT_DIR}"
                    "-x" "final"
                    "$<$<BOOL:${CYC_TIS_INCLUDE_PATH_LIST}>:-I$<JOIN:${CYC_TIS_INCLUDE_PATH_LIST},;-I>>"
                    "${IDL_FILE}"
                COMMENT "Re-generating C source files from ${IDL_FILE}."
                COMMAND_EXPAND_LISTS
                WORKING_DIRECTORY "${CYC_TIS_OUTPUT_DIR}"
            )
            add_custom_target(
                clean_${TargetName}_binding
                "cmake"
                "-E"
                "remove"
                ${LANG_BINDING_HEADERS}
                ${LANG_BINDING_SOURCES}
                COMMAND_EXPAND_LISTS
                COMMENT "Cleaning out C source files generated from ${IDL_FILE}."
            )
            # Add placeholder files that emit an error so that configuration can succeed.
            foreach (BINDING_FILE IN LISTS LANG_BINDING_HEADERS LANG_BINDING_SOURCES)
                if (NOT EXISTS "${BINDING_FILE}")
                    file (WRITE "${BINDING_FILE}" "#error Must run ${TargetName}_binding target before building.")
                endif ()
            endforeach ()
        else ()
            add_custom_command(
                OUTPUT
                    ${LANG_BINDING_HEADERS}
                    ${LANG_BINDING_SOURCES}
                COMMAND CycloneDDS::idlc ARGS
                    "-l" "c"
                    "-o" "${CYC_TIS_OUTPUT_DIR}"
                    "-x" "final"
                    "$<$<BOOL:${CYC_TIS_INCLUDE_PATH_LIST}>:-I$<JOIN:${CYC_TIS_INCLUDE_PATH_LIST},;-I>>"
                    "${IDL_FILE}"
                MAIN_DEPENDENCY "${IDL_FILE}"
                COMMENT "Generating C source files from ${IDL_FILE}."
                COMMAND_EXPAND_LISTS
                WORKING_DIRECTORY "${CYC_TIS_OUTPUT_DIR}"
            )
            add_custom_target(
                ${TargetName}_binding
                DEPENDS
                    ${LANG_BINDING_HEADERS}
                    ${LANG_BINDING_SOURCES}
                COMMENT "Re-generating C source files from ${IDL_FILE}."
            )
            add_custom_target(
                clean_${TargetName}_binding
                "cmake"
                "-E"
                "remove"
                ${LANG_BINDING_HEADERS}
                ${LANG_BINDING_SOURCES}
                COMMAND_EXPAND_LISTS
            )
        endif ()
        set_property (
            TARGET ${TargetName} 
            APPEND PROPERTY SOURCES
                ${LANG_BINDING_HEADERS}
                ${LANG_BINDING_SOURCES}
        )
        set_property(
            TARGET ${TargetName}
            APPEND PROPERTY IDL_LANG_BINDING_HEADERS
                ${LANG_BINDING_HEADERS}
        )
    endforeach ()
endfunction(CYCLONEDDS_TARGET_IDL_SOURCES)

# vim: set ts=4 sw=4 expandtab:
