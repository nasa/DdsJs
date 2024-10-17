/**
 * \file CoreDX/PresentationQosPolicyAccessScopeKind.hh
 * \brief Contains the definition of the \c PresentationQosPolicyAccessScopeKindProxy class.
 * \author Rolando J. Nieves <rolando.j.nieves@nasa.gov>
 * \date 2024-01-23 11:35:37
 */

#ifndef _DDSJS_DDSJS_PROVIDERS_COREDX_PRESENTATIONQOSPOLICYACCESSSCOPEKIND_HH_
#define _DDSJS_DDSJS_PROVIDERS_COREDX_PRESENTATIONQOSPOLICYACCESSSCOPEKIND_HH_

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

class PresentationQosPolicyAccessScopeKindProxy
{
public:
    using CppEntity = DDS::PresentationQosPolicyAccessScopeKind;
    using NapiContainer = Napi::Number;

    static const char *NAME;

    static Napi::Object Init(Napi::Env env, Napi::Object exports);

    static NapiContainer NewInstance(Napi::Env env);

    static NapiContainer NewInstance(Napi::Env env, CppEntity const& cppInstance);

    static void FromCpp(Napi::Env env, CppEntity const& cppVal, NapiContainer& jsValOut);

    static void FromJs(Napi::Env env, NapiContainer const& jsVal, CppEntity& cppValOut);
};

} // end namespace DdsJs

#endif /* !_DDSJS_DDSJS_PROVIDERS_COREDX_PRESENTATIONQOSPOLICYACCESSSCOPEKIND_HH_ */

// vim: set ts=4 sw=4 expandtab:
