/**
 * \file CycloneDDS/LatencyBudgetQosPolicy.hh
 * \brief Contains the definition for the \c LatencyBudgetQosPolicyProxy class.
 * \author Rolando J. Nieves <rolando.j.nieves@nasa.gov>
 * \date 2024-10-03 12:47:26
 */

#ifndef _DDSJS_DDSJS_PROVIDERS_CYCLONEDDS_LATENCYBUDGETQOSPOLICY_HH_
#define _DDSJS_DDSJS_PROVIDERS_CYCLONEDDS_LATENCYBUDGETQOSPOLICY_HH_

#include <DdsJs/ConstructorRegistry.hh>
#include <DdsJs/Providers/CycloneDDS/Duration.hh>

#include <DdsJs/Providers/CycloneDDS/CycloneDDS.hh>


namespace DdsJs
{

class LatencyBudgetQosPolicyProxy : public Napi::ObjectWrap< LatencyBudgetQosPolicyProxy >
{
public:
    struct DurationField
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

    LatencyBudgetQosPolicyProxy(Napi::CallbackInfo const& info);

    virtual ~LatencyBudgetQosPolicyProxy() = default;
};

} // end namespace DdsJs

#endif /* !_DDSJS_DDSJS_PROVIDERS_CYCLONEDDS_LATENCYBUDGETQOSPOLICY_HH_ */

// vim: set ts=4 sw=4 expandtab:
