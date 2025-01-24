/**
 * \file CoreDX/GroupDataQosPolicy.hh
 * \brief Contains the definition of the \c GroupDataQosPolicyProxy class.
 * \author Rolando J. Nieves
 * \date 2024-01-24 15:40:36
 */

#ifndef _DDSJS_DDSJS_PROVIDERS_COREDX_GROUPDATAQOSPOLICY_HH_
#define _DDSJS_DDSJS_PROVIDERS_COREDX_GROUPDATAQOSPOLICY_HH_

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
// #include <DdsJs/Sequences.hh>

// --------------------------------------------------------------------------
// DdsJs CoreDX-Specific
#include <DdsJs/Providers/CoreDX/Primitives.hh>
#include <DdsJs/Providers/CoreDX/Sequence.hh>


namespace DdsJs
{

class GroupDataQosPolicyProxy : public Napi::ObjectWrap< GroupDataQosPolicyProxy >
{
public:
    struct ValueField
    {
        using Proxy = CoreDX::SequenceProxy<
            OctetPrimitive,
            CoreDX::CppUnboundedSequencePolicy< decltype(DDS::GroupDataQosPolicy::value) >,
            CoreDX::CppDirectContainmentPolicy< typename OctetPrimitive::CppEntity >
        >;
        static const char* NAME;
    };

    using CppEntity = DDS::GroupDataQosPolicy;
    using NapiContainer = Napi::Object;

    static const char *MODNAME;

    static const char* NAME;

    static Napi::Object Init(Napi::Env env, Napi::Object exports, ConstructorRegistry *ctorReg);

    static NapiContainer NewInstance(Napi::Env env);

    static NapiContainer NewInstance(Napi::Env env, CppEntity const& cppInstance);

    static void FromCpp(Napi::Env env, CppEntity const& cppVal, NapiContainer& jsValOut);

    static void FromJs(Napi::Env env, NapiContainer const& jsVal, CppEntity& cppValOut);

    GroupDataQosPolicyProxy(Napi::CallbackInfo const& info);

    virtual ~GroupDataQosPolicyProxy() = default;
};

} // end namespace DdsJs

#endif /* _DDSJS_DDSJS_PROVIDERS_COREDX_GROUPDATAQOSPOLICY_HH_ */

// vim: set ts=4 sw=4 expandtab: