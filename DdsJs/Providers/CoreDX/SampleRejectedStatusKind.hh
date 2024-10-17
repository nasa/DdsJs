/**
 * \file CoreDX/SampleRejectedStatusKind.hh
 * \brief Contains the definition of the \c SampleRejectedStatusKindProxy class.
 * \author Rolando J. Nieves
 * \date 2024-03-13 12:13:57
 */

#ifndef _DDSJS_DDSJS_PROVIDERS_COREDX_SAMPLEREJECTEDSTATUSKIND_HH_
#define _DDSJS_DDSJS_PROVIDERS_COREDX_SAMPLEREJECTEDSTATUSKIND_HH_

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

class SampleRejectedStatusKindProxy
{
public:
    using CppEntity = DDS::SampleRejectedStatusKind;
    using NapiContainer = Napi::Number;

    static const char *NAME;

    static Napi::Object Init(Napi::Env env, Napi::Object exports);

    static NapiContainer NewInstance(Napi::Env env);

    static NapiContainer NewInstance(Napi::Env env, CppEntity const& cppInstance);

    static void FromCpp(Napi::Env env, CppEntity const& cppVal, NapiContainer& jsValOut);

    static void FromJs(Napi::Env env, NapiContainer const& jsVal, CppEntity& cppValOut);
};

} // end namespace DdsJs

#endif /* !_DDSJS_DDSJS_PROVIDERS_COREDX_SAMPLEREJECTEDSTATUSKIND_HH_ */

// vim: set ts=4 sw=4 expandtab:
