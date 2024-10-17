/**
 * \file CoreDX/UserDataQosPolicy.hh
 * \brief Contains the definition of the \c UserDataQosPolicyProxy class.
 * \author Rolando J. Nieves <rolando.j.nieves@nasa.gov>
 * \date 2024-01-22 12:23:59
 */

#ifndef _DDSJS_DDSJS_PROVIDERS_COREDX_USERDATAQOSPOLICY_HH_
#define _DDSJS_DDSJS_PROVIDERS_COREDX_USERDATAQOSPOLICY_HH_

// --------------------------------------------------------------------------
// NodeJS Add-on API
#include <napi.h>

// --------------------------------------------------------------------------
// CoreDX API Headers
#include <dds/dds.hh>
#include <dds/dds_builtin.hh>
#include <dds/dds_typesupport.hh>

// --------------------------------------------------------------------------
// DdsJs Generic
#include <DdsJs/ConstructorRegistry.hh>
#include <DdsJs/Sequences.hh>

// --------------------------------------------------------------------------
// DdsJs CoreDX-Specific
#include <DdsJs/Providers/CoreDX/Primitives.hh>
#include <DdsJs/Providers/CoreDX/SequenceUtilities.hh>


namespace DdsJs
{

class UserDataQosPolicyProxy : public Napi::ObjectWrap< UserDataQosPolicyProxy >
{
public:
    struct ValueField
    {
        using Proxy = UnboundedSequence< OctetPrimitive, decltype(DDS::UserDataQosPolicy::value), CoreDX::SequenceUtilities >;
        static const char* NAME;
    };

    using CppEntity = DDS::UserDataQosPolicy;
    using NapiContainer = Napi::Object;

    static const char* MODNAME;

    static const char* NAME;

    static Napi::Object Init(Napi::Env env, Napi::Object exports, ConstructorRegistry *ctorReg);

    static NapiContainer NewInstance(Napi::Env env);

    static NapiContainer NewInstance(Napi::Env env, CppEntity const& cppInstance);

    static void FromCpp(Napi::Env env, CppEntity const& cppVal, NapiContainer& jsValOut);

    static void FromJs(Napi::Env env, NapiContainer const& jsVal, CppEntity& cppValOut);

    UserDataQosPolicyProxy(Napi::CallbackInfo const& info);

    virtual ~UserDataQosPolicyProxy() = default;
};

} // end namespace DdsJs

#endif /* !_DDSJS_DDSJS_PROVIDERS_COREDX_USERDATAQOSPOLICY_HH_ */

// vim: set ts=4 sw=4 expandtab:
