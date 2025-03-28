/**
 * \file CoreDX/dds_error_util.hh
 * \brief Contains the definition of multiple DDS error handling utility routines.
 * \author Rolando J. Nieves <rolando.j.nieves@nasa.gov>
 * \date 2024-02-07 13:36:28
 */

#ifndef _DDSJS_DDSJS_PROVIDER_COREDX_DDS_ERROR_UTIL_HH_
#define _DDSJS_DDSJS_PROVIDER_COREDX_DDS_ERROR_UTIL_HH_

// --------------------------------------------------------------------------
// NodeJS Add-on API
#include <napi.h>

// --------------------------------------------------------------------------
// CoreDX API Headers
#include <dds/dds.hh>
#include <dds/dds_builtin.hh>
#include <dds/dds_typesupport.hh>


namespace DdsJs
{

Napi::Error NewDdsError(Napi::Env env, std::string const& className, std::string const& methodName, DDS::ReturnCode_t retcode);

} // end namespace DdsJs

#endif /* !_DDSJS_DDSJS_PROVIDER_COREDX_DDS_ERROR_UTIL_HH_ */

// vim: set ts=4 sw=4 expandtab:
