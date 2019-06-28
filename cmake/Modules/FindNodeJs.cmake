# Try to find the NodeJS used by node-gyp

find_path(
	NODEJS_INCLUDE_DIR
	NAMES
		node.h uv.h v8.h
	HINTS
		"${NodeJS_ROOT_DIR}/${NODEJS_VERSION}/include/node"
		"$ENV{HOME}/.cmake-js/node-x64/v${NODEJS_VERSION}/include/node"
)

include(FindPackageHandleStandardArgs)
find_package_handle_standard_args(NodeJs DEFAULT_MSG NODEJS_INCLUDE_DIR)

mark_as_advanced(NODEJS_INCLUDE_DIR)
