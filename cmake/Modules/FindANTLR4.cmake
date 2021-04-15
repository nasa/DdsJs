# Try to find the ANTLR 4 JAR file

find_jar(
    ANTLR4_JAR
    antlr-${ANTLR_VERSION}-complete
    PATHS
        "${ANTLR4_ROOT_DIR}/lib"
        "/usr/local/lib"
    DOC
        "ANTLR4 JAR File"
)

include(FindPackageHandleStandardArgs)
find_package_handle_standard_args(ANTLR4 DEFAULT_MSG ANTLR4_JAR)

mark_as_advanced(ANTLR4_JAR)
