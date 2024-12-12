/**
 * \file CycloneDDS/DdsModule.cpp
 * \brief Contains the implementation for the \c DdsModule class.
 * \author Rolando J. Nieves <rolando.j.nieves@nasa.gov>
 * \date 2024-09-26 18:01:07
 */

// --------------------------------------------------------------------------
// CycloneDDS C API
#include <dds/dds.h>

// --------------------------------------------------------------------------
// DdsJs CycloneDDS-Specific
#include <DdsJs/Providers/CycloneDDS/DataReaderQos.hh>
#include <DdsJs/Providers/CycloneDDS/DataReaderWrap.hh>
#include <DdsJs/Providers/CycloneDDS/DataWriterQos.hh>
#include <DdsJs/Providers/CycloneDDS/DataWriterWrap.hh>
#include <DdsJs/Providers/CycloneDDS/dds_error_util.hh>
#include <DdsJs/Providers/CycloneDDS/dds_qos_util.hh>
#include <DdsJs/Providers/CycloneDDS/DeadlineQosPolicy.hh>
#include <DdsJs/Providers/CycloneDDS/DestinationOrderQosPolicy.hh>
#include <DdsJs/Providers/CycloneDDS/DestinationOrderQosPolicyKind.hh>
#include <DdsJs/Providers/CycloneDDS/DomainParticipantFactoryQos.hh>
#include <DdsJs/Providers/CycloneDDS/DomainParticipantQos.hh>
#include <DdsJs/Providers/CycloneDDS/DomainParticipantWrap.hh>
#include <DdsJs/Providers/CycloneDDS/DurabilityQosPolicy.hh>
#include <DdsJs/Providers/CycloneDDS/DurabilityQosPolicyKind.hh>
#include <DdsJs/Providers/CycloneDDS/DurabilityServiceQosPolicy.hh>
#include <DdsJs/Providers/CycloneDDS/Duration.hh>
#include <DdsJs/Providers/CycloneDDS/EntityFactoryQosPolicy.hh>
#include <DdsJs/Providers/CycloneDDS/GroupDataQosPolicy.hh>
#include <DdsJs/Providers/CycloneDDS/HistoryQosPolicy.hh>
#include <DdsJs/Providers/CycloneDDS/HistoryQosPolicyKind.hh>
#include <DdsJs/Providers/CycloneDDS/InconsistentTopicStatus.hh>
#include <DdsJs/Providers/CycloneDDS/InstanceHandle.hh>
#include <DdsJs/Providers/CycloneDDS/InstanceStateKind.hh>
#include <DdsJs/Providers/CycloneDDS/LatencyBudgetQosPolicy.hh>
#include <DdsJs/Providers/CycloneDDS/LifespanQosPolicy.hh>
#include <DdsJs/Providers/CycloneDDS/LivelinessQosPolicy.hh>
#include <DdsJs/Providers/CycloneDDS/LivelinessQosPolicyKind.hh>
#include <DdsJs/Providers/CycloneDDS/OwnershipQosPolicy.hh>
#include <DdsJs/Providers/CycloneDDS/OwnershipQosPolicyKind.hh>
#include <DdsJs/Providers/CycloneDDS/OwnershipStrengthQosPolicy.hh>
#include <DdsJs/Providers/CycloneDDS/PartitionQosPolicy.hh>
#include <DdsJs/Providers/CycloneDDS/PresentationQosPolicyAccessScopeKind.hh>
#include <DdsJs/Providers/CycloneDDS/PresentationQosPolicy.hh>
#include <DdsJs/Providers/CycloneDDS/Primitives.hh>
#include <DdsJs/Providers/CycloneDDS/PublicationMatchedStatus.hh>
#include <DdsJs/Providers/CycloneDDS/PublisherQos.hh>
#include <DdsJs/Providers/CycloneDDS/PublisherWrap.hh>
#include <DdsJs/Providers/CycloneDDS/ReaderDataLifecycleQosPolicy.hh>
#include <DdsJs/Providers/CycloneDDS/ReliabilityQosPolicy.hh>
#include <DdsJs/Providers/CycloneDDS/ReliabilityQosPolicyKind.hh>
#include <DdsJs/Providers/CycloneDDS/ResourceLimitsQosPolicy.hh>
#include <DdsJs/Providers/CycloneDDS/SampleInfo.hh>
#include <DdsJs/Providers/CycloneDDS/SampleStateKind.hh>
#include <DdsJs/Providers/CycloneDDS/SubscriberQos.hh>
#include <DdsJs/Providers/CycloneDDS/SubscriberWrap.hh>
#include <DdsJs/Providers/CycloneDDS/TimeBasedFilterQosPolicy.hh>
#include <DdsJs/Providers/CycloneDDS/Time.hh>
#include <DdsJs/Providers/CycloneDDS/TopicDataQosPolicy.hh>
#include <DdsJs/Providers/CycloneDDS/TopicQos.hh>
#include <DdsJs/Providers/CycloneDDS/TopicWrap.hh>
#include <DdsJs/Providers/CycloneDDS/TransportPriorityQosPolicy.hh>
#include <DdsJs/Providers/CycloneDDS/TypeInformation.hh>
#include <DdsJs/Providers/CycloneDDS/TypeSupportWrap.hh>
#include <DdsJs/Providers/CycloneDDS/UserDataQosPolicy.hh>
#include <DdsJs/Providers/CycloneDDS/ViewStateKind.hh>
#include <DdsJs/Providers/CycloneDDS/WriterDataLifecycleQosPolicy.hh>

// --------------------------------------------------------------------------
// Local Definition
#include "DdsModule.hh"


using std::stringstream;

namespace DdsJs
{

Napi::Value
DdsModule::CreateDomainParticipant(Napi::CallbackInfo const& info)
{
    CycloneDDS::QosUniquePtr dp_qos;
    dds_domainid_t domain_id = 0;

    switch(info.Length())
    {
        case 2:
        {
            dp_qos.reset(dds_create_qos());
            // Temporary get to bare-bald pointer so we can bind to ref in FromJs()
            dds_qos_t *the_qos = dp_qos.get();
            DomainParticipantQosProxy::FromJs(info.Env(), info[1].As< DomainParticipantQosProxy::NapiContainer >(), the_qos);
            // fall-through intentional
        }
        case 1:
            domain_id = info[0].As< Napi::Number >().Uint32Value();
            break;
        
        default:
            throw Napi::Error::New(info.Env(), "createDomainParticipant(): Invalid number of arguments provided.");
    }

    dds_entity_t dp = dds_create_participant(domain_id, dp_qos.get(), nullptr);
    if (dp < 0)
    {
        throw NewDdsError(info.Env(), "DDS", "createDomainParticipant()", (dds_return_t)dp);
    }

    return DomainParticipantWrap::NewInstance(info.Env(), dp);
}


Napi::Value
DdsModule::GetDefaultParticipantQos(Napi::CallbackInfo const& info)
{
    // As of 2024-10-02 CycloneDDS (0.10.5) does not provide an API to fetch
    // a "default" participant QoS, as there's no distinct domain participant
    // factory, so this function for CycloneDDS returns an empty QoS object.

    return DomainParticipantQosProxy::NewInstance(info.Env());
}


Napi::Value
DdsModule::GetDomainParticipantFactoryQos(Napi::CallbackInfo const& info)
{
    // As of 2024-10-02 CycloneDDS (0.10.5) does not provide a domain
    // participant factory entity, so this function for CycloneDDS returns an
    // empty QoS object.

    return DomainParticipantFactoryQosProxy::NewInstance(info.Env());
}


Napi::Value
DdsModule::SetDefaultParticipantQos(Napi::CallbackInfo const& info)
{
    // As of 2024-10-02 CycloneDDS (0.10.5) does not provide a domain
    // participant factory entity, so this function for CycloneDDS is a no-op.

    return info.Env().Undefined();
}


Napi::Value
DdsModule::SetDomainParticipantFactoryQos(Napi::CallbackInfo const& info)
{
    // As of 2024-10-02 CycloneDDS (0.10.5) does not provide a domain
    // participant factory entity, so this function for CycloneDDS is a no-op.

    return info.Env().Undefined();
}


Napi::Object
DdsModule::Init(Napi::Env env, Napi::Object exports, ConstructorRegistry *ctorReg)
{
    Napi::Object dds_module = Napi::Object::New(env);

    dds_module.DefineProperties(
        {
            Napi::PropertyDescriptor::Function(env, dds_module, "createDomainParticipant", &DdsModule::CreateDomainParticipant, napi_enumerable),
            Napi::PropertyDescriptor::Function(env, dds_module, "getDefaultParticipantQos", &DdsModule::GetDefaultParticipantQos, napi_enumerable),
            Napi::PropertyDescriptor::Function(env, dds_module, "getDomainParticipantFactoryQos", &DdsModule::GetDomainParticipantFactoryQos, napi_enumerable),
            Napi::PropertyDescriptor::Function(env, dds_module, "setDefaultParticipantQos", &DdsModule::SetDefaultParticipantQos, napi_enumerable),
            Napi::PropertyDescriptor::Function(env, dds_module, "setDomainParticipantFactoryQos", &DdsModule::SetDomainParticipantFactoryQos, napi_enumerable)
        }
    );

    // BuiltinTopicKeyProxy::Init(env, dds_module, ctorReg);
    DataReaderQosProxy::Init(env, dds_module, ctorReg);
    DataWriterQosProxy::Init(env, dds_module, ctorReg);
    DeadlineQosPolicyProxy::Init(env, dds_module, ctorReg);
    DestinationOrderQosPolicyProxy::Init(env, dds_module, ctorReg);
    DestinationOrderQosPolicyKindProxy::Init(env, dds_module);
    DomainParticipantFactoryQosProxy::Init(env, dds_module, ctorReg);
    DomainParticipantQosProxy::Init(env, dds_module, ctorReg);
    DurabilityQosPolicyProxy::Init(env, dds_module, ctorReg);
    DurabilityQosPolicyKindProxy::Init(env, dds_module);
    DurabilityServiceQosPolicyProxy::Init(env, dds_module, ctorReg);
    DurationProxy::Init(env, dds_module, ctorReg);
    EntityFactoryQosPolicyProxy::Init(env, dds_module, ctorReg);
    GroupDataQosPolicyProxy::Init(env, dds_module, ctorReg);
    HistoryQosPolicyProxy::Init(env, dds_module, ctorReg);
    HistoryQosPolicyKindProxy::Init(env, dds_module);
    InconsistentTopicStatusProxy::Init(env, dds_module, ctorReg);
    InstanceStateKindProxy::Init(env, dds_module);
    LatencyBudgetQosPolicyProxy::Init(env, dds_module, ctorReg);
    LifespanQosPolicyProxy::Init(env, dds_module, ctorReg);
    LivelinessQosPolicyProxy::Init(env, dds_module, ctorReg);
    LivelinessQosPolicyKindProxy::Init(env, dds_module);
    OwnershipQosPolicyProxy::Init(env, dds_module, ctorReg);
    OwnershipQosPolicyKindProxy::Init(env, dds_module);
    OwnershipStrengthQosPolicyProxy::Init(env, dds_module, ctorReg);
    // ParticipantBuiltinTopicDataProxy::Init(env, dds_module, ctorReg);
    PartitionQosPolicyProxy::Init(env, dds_module, ctorReg);
    PresentationQosPolicyProxy::Init(env, dds_module, ctorReg);
    PresentationQosPolicyAccessScopeKindProxy::Init(env, dds_module);
    // PublicationBuiltinTopicDataProxy::Init(env, dds_module, ctorReg);
    PublicationMatchedStatusProxy::Init(env, dds_module, ctorReg);
    PublisherQosProxy::Init(env, dds_module, ctorReg);
    // QosPolicyCountProxy::Init(env, dds_module, ctorReg);
    ReaderDataLifecycleQosPolicyProxy::Init(env, dds_module, ctorReg);
    ReliabilityQosPolicyProxy::Init(env, dds_module, ctorReg);
    ReliabilityQosPolicyKindProxy::Init(env, dds_module);
    // RequestedIncompatibleQosStatusProxy::Init(env, dds_module, ctorReg);
    ResourceLimitsQosPolicyProxy::Init(env, dds_module, ctorReg);
    SampleInfoProxy::Init(env, dds_module, ctorReg);
    // SampleLostStatusProxy::Init(env, dds_module, ctorReg);
    // SampleRejectedStatusProxy::Init(env, dds_module, ctorReg);
    // SampleRejectedStatusKindProxy::Init(env, dds_module);
    SampleStateKindProxy::Init(env, dds_module);
    SubscriberQosProxy::Init(env, dds_module, ctorReg);
    // SubscriptionBuiltinTopicDataProxy::Init(env, dds_module, ctorReg);
    // SubscriptionMatchedStatusProxy::Init(env, dds_module, ctorReg);
    TimeProxy::Init(env, dds_module, ctorReg);
    TimeBasedFilterQosPolicyProxy::Init(env, dds_module, ctorReg);
    TopicDataQosPolicyProxy::Init(env, dds_module, ctorReg);
    TopicQosProxy::Init(env, dds_module, ctorReg);
    TransportPriorityQosPolicyProxy::Init(env, dds_module, ctorReg);
    UserDataQosPolicyProxy::Init(env, dds_module, ctorReg);
    ViewStateKindProxy::Init(env, dds_module);
    WriterDataLifecycleQosPolicyProxy::Init(env, dds_module, ctorReg);

    DomainParticipantWrap::Init(env, dds_module, ctorReg);
    PublisherWrap::Init(env, dds_module, ctorReg);
    SubscriberWrap::Init(env, dds_module, ctorReg);
    TopicWrap::Init(env, dds_module, ctorReg);

    exports.DefineProperty(Napi::PropertyDescriptor::Value("DDS", dds_module, napi_enumerable));

    return exports;
}

} // end namespace DdsJs

// vim: set ts=4 sw=4 expandtab:
