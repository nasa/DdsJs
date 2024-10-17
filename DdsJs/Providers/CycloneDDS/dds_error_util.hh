/**
 * \file CycloneDDS/dds_error_util.hh
 * \brief Contains the definition of multiple DDS error handling utility routines.
 * \author Rolando J. Nieves <rolando.j.nieves@nasa.gov>
 * \date 2024-02-07 13:36:28
 */

#ifndef _DDSJS_DDSJS_PROVIDERS_CYCLONEDDS_DDS_ERROR_UTIL_HH_
#define _DDSJS_DDSJS_PROVIDERS_CYCLONEDDS_DDS_ERROR_UTIL_HH_

// --------------------------------------------------------------------------
// CycloneDDS C API
#include <dds/dds.h>

// --------------------------------------------------------------------------
// NodeJS Add-on API
#include <napi.h>


namespace DdsJs
{

Napi::Error NewDdsError(Napi::Env env, std::string const& className, std::string const& methodName, dds_return_t retcode);

} // end namespace DdsJs

#endif /* !_DDSJS_DDSJS_PROVIDERS_CYCLONEDDS_DDS_ERROR_UTIL_HH_ */

// vim: set ts=4 sw=4 expandtab:
