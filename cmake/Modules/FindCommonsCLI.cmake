# Try to find the CommonsCLI JAR file

find_jar(
    COMMONS_CLI_JAR
    commons-cli-${COMMONS_CLI_VERSION}
    PATHS
        "${CommonCLI_ROOT_DIR}/lib"
        "/usr/local/lib"
    ENV
        CLASSPATH
    DOC
        "CommonsCLI JAR File"
)

include(FindPackageHandleStandardArgs)
find_package_handle_standard_args(CommonsCLI DEFAULT_MSG COMMONS_CLI_JAR)

mark_as_advanced(COMMONS_CLI_JAR)
