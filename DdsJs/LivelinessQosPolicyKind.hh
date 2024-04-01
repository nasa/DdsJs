/**
 * \file LivelinessQosPolicyKind.hh
 * \brief Contains the definition of the \c LivelinessQosPolicyKindProxy class.
 * \author Rolando J. Nieves <rolando.j.nieves@nasa.gov>
 * \date 2024-01-31 16:31:20
 */

#ifndef _DDSJS_DDSJS_LIVELINESSQOSPOLICYKIND_HH_
#define _DDSJS_DDSJS_LIVELINESSQOSPOLICYKIND_HH_

#include <napi.h>

#include <DdsJs/dds_provider.hh>


namespace DdsJs {

class LivelinessQosPolicyKindProxy
{
public:
    using CppEntity = DDS::LivelinessQosPolicyKind;
    using NapiContainer = Napi::Number;

    static const char *NAME;

    static Napi::Object Init(Napi::Env env, Napi::Object exports);

    static NapiContainer NewInstance(Napi::Env env);

    static NapiContainer NewInstance(Napi::Env env, CppEntity const& cppInstance);

    static void FromCpp(Napi::Env env, CppEntity const& cppVal, NapiContainer& jsValOut);

    static void FromJs(Napi::Env env, NapiContainer const& jsVal, CppEntity& cppValOut);
};

} // end namespace DdsJs

#endif /* !_DDSJS_DDSJS_LIVELINESSQOSPOLICYKIND_HH_ */

// vim: set ts=4 sw=4 expandtab:
