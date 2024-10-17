/**
 * \file CoreDX/TopicQos.hh
 * \brief Contains the definition for the \c TopicQosProxy class.
 * \author Rolando J. Nieves <rolando.j.nieves@nasa.gov>
 * \date 2024-02-02 10:18:41
 */

#ifndef _DDSJS_DDSJS_PROVIDERS_COREDX_TOPICQOS_HH_
#define _DDSJS_DDSJS_PROVIDERS_COREDX_TOPICQOS_HH_

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
#include <DdsJs/Providers/CoreDX/DeadlineQosPolicy.hh>
#include <DdsJs/Providers/CoreDX/DestinationOrderQosPolicy.hh>
#include <DdsJs/Providers/CoreDX/DurabilityQosPolicy.hh>
#include <DdsJs/Providers/CoreDX/DurabilityServiceQosPolicy.hh>
#include <DdsJs/Providers/CoreDX/HistoryQosPolicy.hh>
#include <DdsJs/Providers/CoreDX/LatencyBudgetQosPolicy.hh>
#include <DdsJs/Providers/CoreDX/LifespanQosPolicy.hh>
#include <DdsJs/Providers/CoreDX/LivelinessQosPolicy.hh>
#include <DdsJs/Providers/CoreDX/OwnershipQosPolicy.hh>
#include <DdsJs/Providers/CoreDX/ReliabilityQosPolicy.hh>
#include <DdsJs/Providers/CoreDX/ResourceLimitsQosPolicy.hh>
#include <DdsJs/Providers/CoreDX/TopicDataQosPolicy.hh>
#include <DdsJs/Providers/CoreDX/TransportPriorityQosPolicy.hh>


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

    using CppEntity = DDS::TopicQos;

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

#endif /* !_DDSJS_DDSJS_PROVIDERS_COREDX_TOPICQOS_HH_ */

// vim: set ts=4 sw=4 expandtab:
