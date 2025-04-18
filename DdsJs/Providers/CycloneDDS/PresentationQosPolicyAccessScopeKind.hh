/**
 * \file CycloneDDS/PresentationQosPolicyAccessScopeKind.hh
 * \brief Contains the definition of the \c PresentationQosPolicyAccessScopeKindProxy class.
 * \author Rolando J. Nieves <rolando.j.nieves@nasa.gov>
 * \date 2024-10-02 16:28:45
 */

#ifndef _DDSJS_DDSJS_PROVIDERS_CYCLONEDDS_PRESENTATIONQOSPOLICYACCESSSCOPEKIND_HH_
#define _DDSJS_DDSJS_PROVIDERS_CYCLONEDDS_PRESENTATIONQOSPOLICYACCESSSCOPEKIND_HH_

// --------------------------------------------------------------------------
// CycloneDDS C API
#include <dds/dds.h>

// --------------------------------------------------------------------------
// NodeJS Add-on API
#include <napi.h>


namespace DdsJs
{

class PresentationQosPolicyAccessScopeKindProxy
{
public:
    using CppEntity = dds_presentation_access_scope_kind_t;
    using NapiContainer = Napi::Number;

    static const char *NAME;

    static Napi::Object Init(Napi::Env env, Napi::Object exports);

    static NapiContainer NewInstance(Napi::Env env);

    static NapiContainer NewInstance(Napi::Env env, CppEntity const& cppInstance);

    static void FromCpp(Napi::Env env, CppEntity const& cppVal, NapiContainer& jsValOut);

    static void FromJs(Napi::Env env, NapiContainer const& jsVal, CppEntity& cppValOut);
};

} // end namespace DdsJs

#endif /* !_DDSJS_DDSJS_PROVIDERS_CYCLONEDDS_PRESENTATIONQOSPOLICYACCESSSCOPEKIND_HH_ */

// vim: set ts=4 sw=4 expandtab:
