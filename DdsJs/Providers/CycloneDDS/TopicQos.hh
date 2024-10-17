/**
 * \file CycloneDDS/TopicQos.hh
 * \brief Contains the definition for the \c TopicQosProxy class.
 * \author Rolando J. Nieves <rolando.j.nieves@nasa.gov>
 * \date 2024-10-03 17:27:01
 */

#ifndef _DDSJS_DDSJS_PROVIDERS_CYCLONEDDS_TOPICQOS_HH_
#define _DDSJS_DDSJS_PROVIDERS_CYCLONEDDS_TOPICQOS_HH_

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
#include <DdsJs/Providers/CycloneDDS/DeadlineQosPolicy.hh>
#include <DdsJs/Providers/CycloneDDS/DestinationOrderQosPolicy.hh>
#include <DdsJs/Providers/CycloneDDS/DurabilityQosPolicy.hh>
#include <DdsJs/Providers/CycloneDDS/DurabilityServiceQosPolicy.hh>
#include <DdsJs/Providers/CycloneDDS/HistoryQosPolicy.hh>
#include <DdsJs/Providers/CycloneDDS/LatencyBudgetQosPolicy.hh>
#include <DdsJs/Providers/CycloneDDS/LifespanQosPolicy.hh>
#include <DdsJs/Providers/CycloneDDS/LivelinessQosPolicy.hh>
#include <DdsJs/Providers/CycloneDDS/OwnershipQosPolicy.hh>
#include <DdsJs/Providers/CycloneDDS/ReliabilityQosPolicy.hh>
#include <DdsJs/Providers/CycloneDDS/ResourceLimitsQosPolicy.hh>
#include <DdsJs/Providers/CycloneDDS/TopicDataQosPolicy.hh>
#include <DdsJs/Providers/CycloneDDS/TransportPriorityQosPolicy.hh>


namespace DdsJs
{

class TopicQosProxy : public Napi::ObjectWrap< TopicQosProxy >
{
public:
    struct DeadlineField
    {
        using Proxy = DeadlineQosPolicyProxy;
        static const char *NAME;
    };

    struct DestinationOrderField
    {
        using Proxy = DestinationOrderQosPolicyProxy;
        static const char *NAME;
    };

    struct DurabilityField
    {
        using Proxy = DurabilityQosPolicyProxy;
        static const char *NAME;
    };

    struct DurabilityServiceField
    {
        using Proxy = DurabilityServiceQosPolicyProxy;
        static const char *NAME;
    };

    struct HistoryField
    {
        using Proxy = HistoryQosPolicyProxy;
        static const char *NAME;
    };

    struct LatencyBudgetField
    {
        using Proxy = LatencyBudgetQosPolicyProxy;
        static const char *NAME;
    };

    struct LifespanField
    {
        using Proxy = LifespanQosPolicyProxy;
        static const char *NAME;
    };

    struct LivelinessField
    {
        using Proxy = LivelinessQosPolicyProxy;
        static const char *NAME;
    };

    struct OwnershipField
    {
        using Proxy = OwnershipQosPolicyProxy;
        static const char *NAME;
    };

    struct ReliabilityField
    {
        using Proxy = ReliabilityQosPolicyProxy;
        static const char *NAME;
    };

    struct ResourceLimitsField
    {
        using Proxy = ResourceLimitsQosPolicyProxy;
        static const char *NAME;
    };

    struct TopicDataField
    {
        using Proxy = TopicDataQosPolicyProxy;
        static const char *NAME;
    };

    struct TransportPriorityField
    {
        using Proxy = TransportPriorityQosPolicyProxy;
        static const char *NAME;
    };

    using CppEntity = dds_qos_t*;

    using NapiContainer = Napi::Object;

    static const char *MODNAME;

    static const char *NAME;

    static void FromCpp(Napi::Env env, CppEntity const& cppVal, NapiContainer& jsValOut);

    static void FromJs(Napi::Env env, NapiContainer const& jsVal, CppEntity& cppValOut);

    static Napi::Object Init(Napi::Env env, Napi::Object exports, ConstructorRegistry *ctorReg);

    static NapiContainer NewInstance(Napi::Env env);

    static NapiContainer NewInstance(Napi::Env env, CppEntity const& cppInstance);

    TopicQosProxy(Napi::CallbackInfo const& info);

    virtual ~TopicQosProxy() = default;
};

} // end namespace DdsJs

#endif /* !_DDSJS_DDSJS_PROVIDERS_CYCLONEDDS_TOPICQOS_HH_ */

// vim: set ts=4 sw=4 expandtab:
