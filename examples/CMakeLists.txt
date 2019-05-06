cmake_minimum_required(VERSION 3.11)

project(
    host_monitor
    VERSION 1.0.0
    LANGUAGES
        CXX
)

find_package(DdsJs REQUIRED COMPONENTS DdsJsRuntime)

include(AddNodeJsModuleTarget)

add_nodejs_module(${PROJECT_NAME} "${PROJECT_SOURCE_DIR}/HostMonitor.idl")
