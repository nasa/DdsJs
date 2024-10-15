/**
 * \file DdsJs/SubscriptionBuiltinTopicData.hh
 * \brief Contains the definition of the \c SubscriptionBuiltinTopicDataProxy class.
 * \author Rolando J. Nieves
 * \date 2024-03-15 12:05:23
 */

#ifndef _DDSJS_DDSJS_SUBSCRIPTIONBUILTINTOPICDATA_HH_
#define _DDSJS_DDSJS_SUBSCRIPTIONBUILTINTOPICDATA_HH_

#include <DdsJs/Providers/CoreDX/BuiltinTopicKey.hh>
#include <DdsJs/Providers/CoreDX/DeadlineQosPolicy.hh>
#include <DdsJs/Providers/CoreDX/DestinationOrderQosPolicy.hh>
#include <DdsJs/Providers/CoreDX/DurabilityQosPolicy.hh>
#include <DdsJs/Providers/CoreDX/GroupDataQosPolicy.hh>
#include <DdsJs/Providers/CoreDX/LatencyBudgetQosPolicy.hh>
#include <DdsJs/Providers/CoreDX/LivelinessQosPolicy.hh>
#include <DdsJs/Providers/CoreDX/OwnershipQosPolicy.hh>
#include <DdsJs/Providers/CoreDX/PartitionQosPolicy.hh>
#include <DdsJs/Providers/CoreDX/PresentationQosPolicy.hh>
#include <DdsJs/Providers/CoreDX/ReliabilityQosPolicy.hh>
#include <DdsJs/Providers/CoreDX/Strings.hh>
#include <DdsJs/Providers/CoreDX/TimeBasedFilterQosPolicy.hh>
#include <DdsJs/Providers/CoreDX/TopicDataQosPolicy.hh>
#include <DdsJs/Providers/CoreDX/UserDataQosPolicy.hh>


namespace DdsJs
{

class SubscriptionBuiltinTopicDataProxy : public Napi::ObjectWrap< SubscriptionBuiltinTopicDataProxy >
{
public:
    struct KeyField
    {
        using Proxy = BuiltinTopicKeyProxy;
        static const char *NAME;
    };

    struct ParticipantKeyField
    {
        using Proxy = BuiltinTopicKeyProxy;
        static const char *NAME;
    };

    struct TopicNameField
    {
        using Proxy = UnboundedString;
        static const char *NAME;
    };

    struct TypeNameField
    {
        using Proxy = UnboundedString;
        static const char *NAME;
    };

    struct DurabilityField
    {
        using Proxy = DurabilityQosPolicyProxy;
        static const char *NAME;
    };

    struct DeadlineField
    {
        using Proxy = DeadlineQosPolicyProxy;
        static const char *NAME;
    };

    struct LatencyBudgetField
    {
        using Proxy = LatencyBudgetQosPolicyProxy;
        static const char *NAME;
    };

    struct LivelinessField
    {
        using Proxy = LivelinessQosPolicyProxy;
        static const char *NAME;
    };

    struct ReliabilityField
    {
        using Proxy = ReliabilityQosPolicyProxy;
        static const char *NAME;
    };

    struct OwnershipField
    {
        using Proxy = OwnershipQosPolicyProxy;
        static const char *NAME;
    };

    struct DestinationOrderField
    {
        using Proxy = DestinationOrderQosPolicyProxy;
        static const char *NAME;
    };

    struct UserDataField
    {
        using Proxy = UserDataQosPolicyProxy;
        static const char *NAME;
    };

    struct TimeBasedFilterField
    {
        using Proxy = TimeBasedFilterQosPolicyProxy;
        static const char *NAME;
    };

    struct PresentationField
    {
        using Proxy = PresentationQosPolicyProxy;
        static const char *NAME;
    };

    struct PartitionField
    {
        using Proxy = PartitionQosPolicyProxy;
        static const char *NAME;
    };

    struct TopicDataField
    {
        using Proxy = TopicDataQosPolicyProxy;
        static const char *NAME;
    };

    struct GroupDataField
    {
        using Proxy = GroupDataQosPolicyProxy;
        static const char *NAME;
    };

    using CppEntity = DDS::SubscriptionBuiltinTopicData;
    using NapiContainer = Napi::Object;

    static const char *MODNAME;
    static const char *NAME;

    static void FromCpp(Napi::Env env, CppEntity const& cppVal, NapiContainer& jsValOut);

    static void FromJs(Napi::Env env, NapiContainer const& jsVal, CppEntity& cppValOut);

    static Napi::Object Init(Napi::Env env, Napi::Object exports, ConstructorRegistry *ctorReg);

    static NapiContainer NewInstance(Napi::Env env);

    static NapiContainer NewInstance(Napi::Env env, CppEntity const& cppInstance);

    SubscriptionBuiltinTopicDataProxy(Napi::CallbackInfo const& info);

    virtual ~SubscriptionBuiltinTopicDataProxy() = default;
};

} // end namespace DdsJs

#endif /* !_DDSJS_DDSJS_SUBSCRIPTIONBUILTINTOPICDATA_HH_ */

// vim: set ts=4 sw=4 expandtab:
