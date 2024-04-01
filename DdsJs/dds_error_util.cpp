/**
 * \file dds_error_util.cpp
 * \brief Contains the implementation of the DDS error handling utility functions.
 * \author Rolando J. Nieves
 * \date 2024-02-07 13:39:07
 */

#include <sstream>

#include "dds_error_util.hh"


namespace DdsJs {

Napi::Error NewDdsError(Napi::Env env, std::string const& className, std::string const& methodName, DDS::ReturnCode_t retcode)
{
    std::stringstream msg;

    msg << className
        << "."
        << methodName
        << "(): DDS Error: "
#if DDS_PROVIDER_COREDX
        << DDS_error(retcode)
        << " ("
        << retcode
        << ")";
#else
        << "error code ("
        << retcode
        << ")";
#endif /* DDS_PROVIDER_COREDX */
    return Napi::Error::New(env, msg.str());
}

} // end namespace DdsJs

// vim: set ts=4 sw=4 expandtab:
