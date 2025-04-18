/**
 * \file CycloneDDS/LivelinessQosPolicy.hh
 * \brief Contains the definition of the \c LivelinessQosPolicyProxy class.
 * \author Rolando J. Nieves <rolando.j.nieves@nasa.gov>
 * \date 2024-10-03 12:56:43
 */

#ifndef _DDSJS_DDSJS_PROVIDERS_CYCLONEDDS_LIVELINESSQOSPOLICY_HH_
#define _DDSJS_DDSJS_PROVIDERS_CYCLONEDDS_LIVELINESSQOSPOLICY_HH_

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
#include <DdsJs/Providers/CycloneDDS/LivelinessQosPolicyKind.hh>


namespace DdsJs
{

class LivelinessQosPolicyProxy : public Napi::ObjectWrap< LivelinessQosPolicyProxy >
{
public:
    struct KindField
    {
        using Proxy = LivelinessQosPolicyKindProxy;
        static const char *NAME;
    };

    struct LeaseDurationField
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

    LivelinessQosPolicyProxy(Napi::CallbackInfo const& info);

    virtual ~LivelinessQosPolicyProxy() = default;
};

} // end namespace DdsJs

#endif /* !_DDSJS_DDSJS_PROVIDERS_CYCLONEDDS_LIVELINESSQOSPOLICY_HH_ */

// vim: set ts=4 sw=4 expandtab:
