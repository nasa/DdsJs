/**
 * \file CoreDX/PublicationBuiltinTopicData.hh
 * \brief Contains the definition of the \c PublicationBuiltinTopicDataProxy class.
 * \author Rolando J. Nieves
 * \date 2024-03-11 14:58:05
 */

#ifndef _DDSJS_DDSJS_PROVIDERS_COREDX_PUBLICATIONBUILTINTOPICDATA_HH_
#define _DDSJS_DDSJS_PROVIDERS_COREDX_PUBLICATIONBUILTINTOPICDATA_HH_

// --------------------------------------------------------------------------
// DdsJs Generic
#include <DdsJs/Strings.hh>

// --------------------------------------------------------------------------
// DdsJs CoreDX-Specific
#include <DdsJs/Providers/CoreDX/BuiltinTopicKey.hh>
#include <DdsJs/Providers/CoreDX/DeadlineQosPolicy.hh>
#include <DdsJs/Providers/CoreDX/DestinationOrderQosPolicy.hh>
#include <DdsJs/Providers/CoreDX/DurabilityQosPolicy.hh>
#include <DdsJs/Providers/CoreDX/DurabilityServiceQosPolicy.hh>
#include <DdsJs/Providers/CoreDX/GroupDataQosPolicy.hh>
#include <DdsJs/Providers/CoreDX/LatencyBudgetQosPolicy.hh>
#include <DdsJs/Providers/CoreDX/LifespanQosPolicy.hh>
#include <DdsJs/Providers/CoreDX/LivelinessQosPolicy.hh>
#include <DdsJs/Providers/CoreDX/OwnershipQosPolicy.hh>
#include <DdsJs/Providers/CoreDX/OwnershipStrengthQosPolicy.hh>
#include <DdsJs/Providers/CoreDX/PartitionQosPolicy.hh>
#include <DdsJs/Providers/CoreDX/PresentationQosPolicy.hh>
#include <DdsJs/Providers/CoreDX/ReliabilityQosPolicy.hh>
#include <DdsJs/Providers/CoreDX/StringUtilities.hh>
#include <DdsJs/Providers/CoreDX/TopicDataQosPolicy.hh>
#include <DdsJs/Providers/CoreDX/UserDataQosPolicy.hh>


namespace DdsJs
{

class PublicationBuiltinTopicDataProxy : public Napi::ObjectWrap< PublicationBuiltinTopicDataProxy >
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
        using Proxy = UnboundedString< CoreDX::StringUtilities >;
        static const char *NAME;
    };

    struct TypeNameField
    {
        using Proxy = UnboundedString< CoreDX::StringUtilities >;
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

    struct LifespanField
    {
        using Proxy = LifespanQosPolicyProxy;
        static const char *NAME;
    };

    struct UserDataField
    {
        using Proxy = UserDataQosPolicyProxy;
        static const char *NAME;
    };

    struct OwnershipField
    {
        using Proxy = OwnershipQosPolicyProxy;
        static const char *NAME;
    };

    struct OwnershipStrengthField
    {
        using Proxy = OwnershipStrengthQosPolicyProxy;
        static const char *NAME;
    };

    struct DestinationOrderField
    {
        using Proxy = DestinationOrderQosPolicyProxy;
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

    using CppEntity = DDS::PublicationBuiltinTopicData;
    using NapiContainer = Napi::Object;

    static const char *MODNAME;
    static const char *NAME;

    static void FromCpp(Napi::Env env, CppEntity const& cppVal, NapiContainer& jsValOut);

    static void FromJs(Napi::Env env, NapiContainer const& jsVal, CppEntity& cppValOut);

    static Napi::Object Init(Napi::Env env, Napi::Object exports, ConstructorRegistry *ctorReg);

    static NapiContainer NewInstance(Napi::Env env);

    static NapiContainer NewInstance(Napi::Env env, CppEntity const& cppInstance);

    PublicationBuiltinTopicDataProxy(Napi::CallbackInfo const& info);

    virtual ~PublicationBuiltinTopicDataProxy() = default;
};

} // end namespace DdsJs

#endif /* !_DDSJS_DDSJS_PROVIDERS_COREDX_PUBLICATIONBUILTINTOPICDATA_HH_ */

// vim: set ts=4 sw=4 expandtab:
