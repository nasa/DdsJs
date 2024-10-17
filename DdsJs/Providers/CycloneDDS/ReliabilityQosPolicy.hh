/**
 * \file ReliabilityQosPolicy.hh
 * \brief Contains the definition of the \c ReliabilityQosPolicyProxy class.
 * \author Rolando J. Nieves <rolando.j.nieves@nasa.gov>
 * \date 2024-09-26 18:08:51
 */

#ifndef _DDSJS_DDSJS_PROVIDERS_CYCLONEDDS_RELIABILITYQOSPOLICY_HH_
#define _DDSJS_DDSJS_PROVIDERS_CYCLONEDDS_RELIABILITYQOSPOLICY_HH_

// --------------------------------------------------------------------------
// CycloneDDS C API
#include <dds/dds.h>

// --------------------------------------------------------------------------
// NodeJS Add-on API
#include <napi.h>

// --------------------------------------------------------------------------
// DdsJs Generic
#include <DdsJs/ConstructorRegistry.hh>

// --------------------------------------------------------------------------
// DdsJs CycloneDDS-Specific
#include <DdsJs/Providers/CycloneDDS/Duration.hh>
#include <DdsJs/Providers/CycloneDDS/ReliabilityQosPolicyKind.hh>


namespace DdsJs
{

class ReliabilityQosPolicyProxy : public Napi::ObjectWrap< ReliabilityQosPolicyProxy >
{
public:
    struct KindField
    {
        using Proxy = ReliabilityQosPolicyKindProxy;
        static const char *NAME;
    };

    struct MaxBlockingTimeField
    {
        using Proxy = DurationProxy;
        static const char *NAME;
    };

    using CppEntity = dds_qos_t*;
    using NapiContainer = Napi::Object;

    static const char *MODNAME;

    static const char *NAME;

    static Napi::Object Init(Napi::Env env, Napi::Object exports, ConstructorRegistry *ctorReg);

    static NapiContainer NewInstance(Napi::Env env);

    static NapiContainer NewInstance(Napi::Env env, CppEntity const& cppInstance);

    static void FromCpp(Napi::Env env, CppEntity const& cppVal, NapiContainer& jsValOut);

    static void FromJs(Napi::Env env, NapiContainer const& jsVal, CppEntity& cppValOut);

    ReliabilityQosPolicyProxy(Napi::CallbackInfo const& info);

    virtual ~ReliabilityQosPolicyProxy() = default;
};

} // end namespace DdsJs

#endif /* !_DDSJS_DDSJS_PROVIDERS_CYCLONEDDS_RELIABILITYQOSPOLICY_HH_ */

// vim: set ts=4 sw=4 expandtab:
