/**
 * \file CoreDX/OwnershipStrengthQosPolicy.hh
 * \brief Contains the definition of the \c OwnershipStrengthQosPolicyProxy class.
 * \author Rolando J. Nieves <rolando.j.nieves@nasa.gov>
 * \date 2024-02-02 11:46:50
 */

#ifndef _DDSJS_DDSJS_PROVIDERS_COREDX_OWNERSHIPSTRENGTHQOSPOLICY_HH_
#define _DDSJS_DDSJS_PROVIDERS_COREDX_OWNERSHIPSTRENGTHQOSPOLICY_HH_

// --------------------------------------------------------------------------
// CoreDX API Headers
#include <dds/dds.hh>
#include <dds/dds_builtin.hh>
#include <dds/dds_typesupport.hh>

// --------------------------------------------------------------------------
// DdsJs Generic
#include <DdsJs/ConstructorRegistry.hh>

// --------------------------------------------------------------------------
// DdsJs CoreDX-Specific
#include <DdsJs/Providers/CoreDX/Primitives.hh>


namespace DdsJs
{

class OwnershipStrengthQosPolicyProxy : public Napi::ObjectWrap< OwnershipStrengthQosPolicyProxy >
{
public:
    struct ValueField
    {
        using Proxy = LongPrimitive;
        static const char *NAME;
    };

    using CppEntity = DDS::OwnershipStrengthQosPolicy;
    using NapiContainer = Napi::Object;

    static const char *MODNAME;
    
    static const char *NAME;

    static Napi::Object Init(Napi::Env env, Napi::Object exports, ConstructorRegistry *ctorReg);

    static NapiContainer NewInstance(Napi::Env env);

    static NapiContainer NewInstance(Napi::Env env, CppEntity const& cppInstance);

    static void FromCpp(Napi::Env env, CppEntity const& cppVal, NapiContainer& jsValOut);

    static void FromJs(Napi::Env env, NapiContainer const& jsVal, CppEntity& cppValOut);

    OwnershipStrengthQosPolicyProxy(Napi::CallbackInfo const& info);

    virtual ~OwnershipStrengthQosPolicyProxy() = default;
};

} // end namespace DdsJs

#endif /* !_DDSJS_DDSJS_PROVIDERS_COREDX_OWNERSHIPSTRENGTHQOSPOLICY_HH_ */

// vim: set ts=4 sw=4 expandtab:
