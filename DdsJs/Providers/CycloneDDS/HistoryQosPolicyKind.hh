/**
 * \file CycloneDDS/HistoryQosPolicyKind.hh
 * \brief Contains the definition of the \c HistoryQosPolicyKindProxy class.
 * \author Rolando J. Nieves <rolando.j.nieves@nasa.gov>
 * \date 2024-10-03 12:26:31
 */

#ifndef _DDSJS_DDSJS_PROVIDERS_CYCLONEDDS_HISTORYQOSPOLICYKIND_HH_
#define _DDSJS_DDSJS_PROVIDERS_CYCLONEDDS_HISTORYQOSPOLICYKIND_HH_

// --------------------------------------------------------------------------
// CycloneDDS C API
#include <dds/dds.h>

// --------------------------------------------------------------------------
// NodeJS Add-on API
#include <napi.h>


namespace DdsJs
{

class HistoryQosPolicyKindProxy
{
public:
    using CppEntity = dds_history_kind_t;
    using NapiContainer = Napi::Number;

    static const char *NAME;

    static Napi::Object Init(Napi::Env env, Napi::Object exports);

    static NapiContainer NewInstance(Napi::Env env);

    static NapiContainer NewInstance(Napi::Env env, CppEntity const& cppInstance);

    static void FromCpp(Napi::Env env, CppEntity const& cppVal, NapiContainer& jsValOut);

    static void FromJs(Napi::Env env, NapiContainer const& jsVal, CppEntity& cppValOut);
};

} // end namespace DdsJs

#endif /* !_DDSJS_DDSJS_PROVIDERS_CYCLONEDDS_HISTORYQOSPOLICYKIND_HH_ */

// vim: set ts=4 sw=4 expandtab:
