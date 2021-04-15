# Licensed for U.S. Government use only.
#.rst:
# GuessEndianness
# ---------------
#
# Attempt to determine target system endianness just by using the
# `CMAKE_SYSTEM_PROCESSOR` variable. 
#
# The function prototype is as follows::
#
#   guess_endianness(<output_var>)
#
# Where::
#
# * <output_var>: Variable that will hold either `BIG` or `LITTLE` depending on
#                 the perceived endianness. Set on the system cache.

function(GUESS_ENDIANNESS OUTPUT_VAR)
    message(STATUS "Attempting to guess endianness for processor: ${CMAKE_SYSTEM_PROCESSOR}")
    string(TOLOWER "${CMAKE_SYSTEM_PROCESSOR}" PROC_NAME)
    if(PROC_NAME MATCHES "^x86.*"
        OR PROC_NAME MATCHES "^arm.*"
        OR PROC_NAME MATCHES "^i[3456]86")
            set (result "LITTLE")
    elseif(PROC_NAME MATCHES "^ppc.*")
        set (result "BIG")
    else()
        # If all else fails, majority goes to little.
        set (result "LITTLE")
    endif()
    set (${OUTPUT_VAR} "${result}" CACHE STRING "Target system endianness.")
    message(STATUS "Processor ${CMAKE_SYSTEM_PROCESSOR} is perceived to be ${result} ENDIAN.")
endfunction(GUESS_ENDIANNESS)