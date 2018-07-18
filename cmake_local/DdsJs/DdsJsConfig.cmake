include(${CMAKE_CURRENT_LIST_DIR}/DdsJsTargets.cmake)
include(CMakeFindDependencyMacro)
find_dependency(@WITH_DDS@ REQUIRED COMPONENTS @DDS_PROVIDER_COMP@)
set(WITH_DDS "@WITH_DDS@" CACHE STRING "Selected DDS provider.")
set(DDS_PROVIDER_COMP "@DDS_PROVIDER_COMP@" CACHE STRING "DDS provider-specific component.")
set(DDSJS_IDL_COMPILER "@DDSJS_IDL_COMPILER@" CACHE FILEPATH "DDS.js IDL compiler executable.")