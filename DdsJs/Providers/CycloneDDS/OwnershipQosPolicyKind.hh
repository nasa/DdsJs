/**
 * \file CycloneDDS/OwnershipQosPolicyKind.hh
 * \brief Contains the definition of the \c OwnershipQosPolicyKindProxy class.
 * \author Rolando J. Nieves
 * \date 2024-10-03 17:19:47
 */

#ifndef _DDSJS_DDSJS_PROVIDERS_CYCLONEDDS_OWNERSHIPQOSPOLICYKIND_HH_
#define _DDSJS_DDSJS_PROVIDERS_CYCLONEDDS_OWNERSHIPQOSPOLICYKIND_HH_

#include <napi.h>

#include <DdsJs/Providers/CycloneDDS/CycloneDDS.hh>


namespace DdsJs
{

class OwnershipQosPolicyKindProxy
{
public:
    using CppEntity = dds_ownership_kind_t;
    using NapiContainer = Napi::Number;

    static const char *NAME;

    static Napi::Object Init(Napi::Env env, Napi::Object exports);

    static NapiContainer NewInstance(Napi::Env env);

    static NapiContainer NewInstance(Napi::Env env, CppEntity const& cppInstance);

    static void FromCpp(Napi::Env env, CppEntity const& cppVal, NapiContainer& jsValOut);

    static void FromJs(Napi::Env env, NapiContainer const& jsVal, CppEntity& cppValOut);
};

} // end namespace DdsJs

#endif /* !_DDSJS_DDSJS_PROVIDERS_CYCLONEDDS_OWNERSHIPQOSPOLICYKIND_HH_ */

// vim: set ts=4 sw=4 expandtab:
