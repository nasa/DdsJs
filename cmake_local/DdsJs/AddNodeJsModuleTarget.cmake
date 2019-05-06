include (TargetIDLSources)

macro(add_nodejs_module MODULE_NAME IDL_SOURCE_FILE)
    get_filename_component(IDL_BASENAME "${IDL_SOURCE_FILE}" NAME_WE)
    set(CPP_OUTPUT_NAME "${IDL_BASENAME}Js.cpp")
    add_custom_command(
        OUTPUT
            "${CMAKE_CURRENT_BINARY_DIR}/${CPP_OUTPUT_NAME}"
        COMMAND
            "${DDSJS_IDL_COMPILER}"
            "-f" "${IDL_SOURCE_FILE}"
            "-t" "${DDS_PROVIDER_ST}"
            "-o" "${CMAKE_CURRENT_BINARY_DIR}/${CPP_OUTPUT_NAME}"
    )
    add_library (${MODULE_NAME} SHARED
        "${CMAKE_CURRENT_BINARY_DIR}/${CPP_OUTPUT_NAME}"
    )
    set_target_properties(
        ${MODULE_NAME}
        PROPERTIES
            PREFIX ""
            SUFFIX ".node"
            LINKER_LANGUAGE CXX
    )
    target_include_directories(
        ${MODULE_NAME}
        PRIVATE
            ${CMAKE_JS_INC}
    )
    target_idl_sources(
        ${MODULE_NAME}
        DDS_PROVIDER ${WITH_DDS}
        IDL_SOURCES ${IDL_SOURCE_FILE}
    )
    target_link_libraries(
        ${MODULE_NAME}
        DdsJs::DdsJsRuntime
        ${WITH_DDS}::${DDS_PROVIDER_COMP}
        ${CMAKE_JS_LIB}
    )
endmacro(add_nodejs_module)

# vim: set ts=4 sw=4 expandtab:
