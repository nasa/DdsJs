/**
 * \file CoreDX/DurabilityServiceQosPolicy.hh
 * \brief Contains the definition of the \c DurabilityServiceQosPolicyProxy class.
 * \author Rolando J. Nieves <rolando.j.nieves@nasa.gov>
 * \date 2024-01-31 15:56:29
 */

#ifndef _DDSJS_DDSJS_PROVIDERS_COREDX_DURABILITYSERVICEQOSPOLICY_HH_
#define _DDSJS_DDSJS_PROVIDERS_COREDX_DURABILITYSERVICEQOSPOLICY_HH_

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

// --------------------------------------------------------------------------
// DdsJs CoreDX-Specific
#include <DdsJs/Providers/CoreDX/Duration.hh>
#include <DdsJs/Providers/CoreDX/HistoryQosPolicyKind.hh>
#include <DdsJs/Providers/CoreDX/Primitives.hh>


namespace DdsJs
{

class DurabilityServiceQosPolicyProxy : public Napi::ObjectWrap< DurabilityServiceQosPolicyProxy >
{
public:
    struct ServiceCleanupDelayField
    {
        using Proxy = DurationProxy;
        static const char *NAME;
    };

    struct HistoryKindField
    {
        using Proxy = HistoryQosPolicyKindProxy;
        static const char *NAME;
    };

    struct HistoryDepthField
    {
        using Proxy = LongPrimitive;
        static const char *NAME;
    };

    struct MaxSamplesField
    {
        using Proxy = LongPrimitive;
        static const char *NAME;
    };

    struct MaxInstancesField
    {
        using Proxy = LongPrimitive;
        static const char *NAME;
    };

    struct MaxSamplesPerInstanceField
    {
        using Proxy = LongPrimitive;
        static const char *NAME;
    };

    using CppEntity = DDS::DurabilityServiceQosPolicy;
    using NapiContainer = Napi::Object;

    static const char *MODNAME;
    
    static const char *NAME;

    static Napi::Object Init(Napi::Env env, Napi::Object exports, ConstructorRegistry *ctorReg);

    static NapiContainer NewInstance(Napi::Env env);

    static NapiContainer NewInstance(Napi::Env env, CppEntity const& cppInstance);

    static void FromCpp(Napi::Env env, CppEntity const& cppVal, NapiContainer& jsValOut);

    static void FromJs(Napi::Env env, NapiContainer const& jsVal, CppEntity& cppValOut);

    DurabilityServiceQosPolicyProxy(Napi::CallbackInfo const& info);

    virtual ~DurabilityServiceQosPolicyProxy() = default;
};

} // end namespace DdsJs

#endif /* !_DDSJS_DDSJS_PROVIDERS_COREDX_DURABILITYSERVICEQOSPOLICY_HH_ */

// vim: set ts=4 sw=4 expandtab:
