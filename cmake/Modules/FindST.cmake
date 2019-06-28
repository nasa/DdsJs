# Try to find the StringTemplate JAR

find_jar(
    STRINGTEMPLATE_JAR
    ST-${ST_VERSION}
    PATHS
        "${ST_ROOT_DIR}/lib"
        "/usr/local/lib"
    DOC
        "StringTemplate JAR File"
)

include (FindPackageHandleStandardArgs)
find_package_handle_standard_args (StringTemplate DEFAULT_MSG STRINGTEMPLATE_JAR)

mark_as_advanced (STRINGTEMPLATE_JAR)