get_filename_component(
    SCRIPT_DEST_DIR
    "${SCRIPT_FILE}"
    DIRECTORY
)

get_filename_component(
    SCRIPT_FILE_NAME
    "${SCRIPT_FILE}"
    NAME
)

file(MAKE_DIRECTORY "${SCRIPT_DEST_DIR}/mkexec")

file(RENAME "${SCRIPT_FILE}" "${SCRIPT_DEST_DIR}/mkexec/${SCRIPT_FILE_NAME}")

file(
    COPY
    "${SCRIPT_DEST_DIR}/mkexec/${SCRIPT_FILE_NAME}"
    DESTINATION "${SCRIPT_DEST_DIR}"
    FILE_PERMISSIONS
        OWNER_READ
        OWNER_WRITE
        OWNER_EXECUTE
        GROUP_READ
        GROUP_EXECUTE
        WORLD_READ
        WORLD_EXECUTE
)

file(
    REMOVE_RECURSE
    "${SCRIPT_DEST_DIR}/mkexec"
)
