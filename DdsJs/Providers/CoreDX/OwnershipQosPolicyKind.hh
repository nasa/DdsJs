/**
 * \file CoreDX/OwnershipQosPolicyKind.hh
 * \brief Contains the definition of the \c OwnershipQosPolicyKindProxy class.
 * \author Rolando J. Nieves
 * \date 2024-02-02 10:01:44
 */

#ifndef _DDSJS_DDSJS_PROVIDERS_COREDX_OWNERSHIPQOSPOLICYKIND_HH_
#define _DDSJS_DDSJS_PROVIDERS_COREDX_OWNERSHIPQOSPOLICYKIND_HH_

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

class OwnershipQosPolicyKindProxy
{
public:
    using CppEntity = DDS::OwnershipQosPolicyKind;
    using NapiContainer = Napi::Number;

    static const char *NAME;

    static Napi::Object Init(Napi::Env env, Napi::Object exports);

    static NapiContainer NewInstance(Napi::Env env);

    static NapiContainer NewInstance(Napi::Env env, CppEntity const& cppInstance);

    static void FromCpp(Napi::Env env, CppEntity const& cppVal, NapiContainer& jsValOut);

    static void FromJs(Napi::Env env, NapiContainer const& jsVal, CppEntity& cppValOut);
};

} // end namespace DdsJs

#endif /* !_DDSJS_DDSJS_PROVIDERS_COREDX_OWNERSHIPQOSPOLICYKIND_HH_ */

// vim: set ts=4 sw=4 expandtab:
