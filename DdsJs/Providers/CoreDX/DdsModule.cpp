/**
 * \file CoreDX/DdsModule.cpp
 * \brief Contains the implementation for the \c DdsModule class.
 * \author Rolando J. Nieves <rolando.j.nieves@nasa.gov>
 * \date 2024-02-07 11:54:11
 */

// --------------------------------------------------------------------------
// DdsJs CoreDX-Specific
#include <DdsJs/Providers/CoreDX/BuiltinTopicKey.hh>
#include <DdsJs/Providers/CoreDX/DataReaderQos.hh>
#include <DdsJs/Providers/CoreDX/DataWriterQos.hh>
#include <DdsJs/Providers/CoreDX/DeadlineQosPolicy.hh>
#include <DdsJs/Providers/CoreDX/DestinationOrderQosPolicy.hh>
#include <DdsJs/Providers/CoreDX/DestinationOrderQosPolicyKind.hh>
#include <DdsJs/Providers/CoreDX/DomainParticipantFactoryQos.hh>
#include <DdsJs/Providers/CoreDX/DomainParticipantQos.hh>
#include <DdsJs/Providers/CoreDX/DomainParticipantWrap.hh>
#include <DdsJs/Providers/CoreDX/DurabilityQosPolicy.hh>
#include <DdsJs/Providers/CoreDX/DurabilityQosPolicyKind.hh>
#include <DdsJs/Providers/CoreDX/DurabilityServiceQosPolicy.hh>
#include <DdsJs/Providers/CoreDX/Duration.hh>
#include <DdsJs/Providers/CoreDX/EntityFactoryQosPolicy.hh>
#include <DdsJs/Providers/CoreDX/GroupDataQosPolicy.hh>
#include <DdsJs/Providers/CoreDX/HistoryQosPolicy.hh>
#include <DdsJs/Providers/CoreDX/HistoryQosPolicyKind.hh>
#include <DdsJs/Providers/CoreDX/LatencyBudgetQosPolicy.hh>
#include <DdsJs/Providers/CoreDX/LifespanQosPolicy.hh>
#include <DdsJs/Providers/CoreDX/LivelinessQosPolicy.hh>
#include <DdsJs/Providers/CoreDX/OwnershipQosPolicy.hh>
#include <DdsJs/Providers/CoreDX/OwnershipQosPolicyKind.hh>
#include <DdsJs/Providers/CoreDX/OwnershipStrengthQosPolicy.hh>
#include <DdsJs/Providers/CoreDX/ParticipantBuiltinTopicData.hh>
#include <DdsJs/Providers/CoreDX/PartitionQosPolicy.hh>
#include <DdsJs/Providers/CoreDX/PresentationQosPolicy.hh>
#include <DdsJs/Providers/CoreDX/PresentationQosPolicyAccessScopeKind.hh>
#include <DdsJs/Providers/CoreDX/PublicationBuiltinTopicData.hh>
#include <DdsJs/Providers/CoreDX/PublisherQos.hh>
#include <DdsJs/Providers/CoreDX/PublisherWrap.hh>
#include <DdsJs/Providers/CoreDX/QosPolicyCount.hh>
#include <DdsJs/Providers/CoreDX/ReaderDataLifecycleQosPolicy.hh>
#include <DdsJs/Providers/CoreDX/ReliabilityQosPolicy.hh>
#include <DdsJs/Providers/CoreDX/ReliabilityQosPolicyKind.hh>
#include <DdsJs/Providers/CoreDX/RequestedIncompatibleQosStatus.hh>
#include <DdsJs/Providers/CoreDX/ResourceLimitsQosPolicy.hh>
#include <DdsJs/Providers/CoreDX/SampleInfo.hh>
#include <DdsJs/Providers/CoreDX/SampleLostStatus.hh>
#include <DdsJs/Providers/CoreDX/SampleRejectedStatus.hh>
#include <DdsJs/Providers/CoreDX/SampleRejectedStatusKind.hh>
#include <DdsJs/Providers/CoreDX/SubscriberQos.hh>
#include <DdsJs/Providers/CoreDX/SubscriberWrap.hh>
#include <DdsJs/Providers/CoreDX/SubscriptionBuiltinTopicData.hh>
#include <DdsJs/Providers/CoreDX/SubscriptionMatchedStatus.hh>
#include <DdsJs/Providers/CoreDX/Time.hh>
#include <DdsJs/Providers/CoreDX/TimeBasedFilterQosPolicy.hh>
#include <DdsJs/Providers/CoreDX/TopicDataQosPolicy.hh>
#include <DdsJs/Providers/CoreDX/TopicQos.hh>
#include <DdsJs/Providers/CoreDX/TopicWrap.hh>
#include <DdsJs/Providers/CoreDX/TransportPriorityQosPolicy.hh>
#include <DdsJs/Providers/CoreDX/UserDataQosPolicy.hh>
#include <DdsJs/Providers/CoreDX/WriterDataLifecycleQosPolicy.hh>
#include <DdsJs/Providers/CoreDX/CoreDX.hh>

// --------------------------------------------------------------------------
// Local Definition
#include "DdsModule.hh"


using std::stringstream;

namespace DdsJs
{

Napi::Value
DdsModule::CreateDomainParticipant(Napi::CallbackInfo const& info)
{
    DDS::DomainParticipantQos dp_qos;
    DDS::DomainId_t domain_id = 0;

    DDS::DomainParticipantFactory::get_instance()->get_default_participant_qos(dp_qos);

    switch(info.Length())
    {
        case 2:
            DomainParticipantQosProxy::FromJs(info.Env(), info[1].As< DomainParticipantQosProxy::NapiContainer >(), dp_qos);
            // fall-through intentional
        case 1:
            domain_id = info[0].As< Napi::Number >().Uint32Value();
            break;
        
        default:
            throw Napi::Error::New(info.Env(), "createDomainParticipant(): Invalid number of arguments provided.");
    }

    DDS::DomainParticipant *dp = DDS::DomainParticipantFactory::get_instance()->create_participant(domain_id, dp_qos, nullptr, 0);
    if (nullptr == dp)
    {
        stringstream msg;

        msg << "createDomainParticipant(): "
            << "Could not create DomainParticipant instance";
        throw Napi::Error::New(info.Env(), msg.str());
    }

    return DomainParticipantWrap::NewInstance(info.Env(), dp);
}


Napi::Value
DdsModule::GetDefaultParticipantQos(Napi::CallbackInfo const& info)
{
    DDS::DomainParticipantQos dp_qos;

    DDS::DomainParticipantFactory::get_instance()->get_default_participant_qos(dp_qos);

    return DomainParticipantQosProxy::NewInstance(info.Env(), dp_qos);
}


Napi::Value
DdsModule::GetDomainParticipantFactoryQos(Napi::CallbackInfo const& info)
{
    DDS::DomainParticipantFactoryQos dpf_qos;

    DDS::DomainParticipantFactory::get_instance()->get_qos(dpf_qos);

    return DomainParticipantFactoryQosProxy::NewInstance(info.Env(), dpf_qos);
}


Napi::Value
DdsModule::SetDefaultParticipantQos(Napi::CallbackInfo const& info)
{
    DDS::DomainParticipantQos dp_qos;

    switch (info.Length())
    {
        case 1:
            DomainParticipantQosProxy::FromJs(info.Env(), info[0].As< DomainParticipantQosProxy::NapiContainer >(), dp_qos);
            break;
        
        default:
            throw Napi::Error::New(info.Env(), "setDefaultDomainParticipantQos(): Invalid number of arguments provided.");
    }

    DDS::ReturnCode_t retcode = DDS::DomainParticipantFactory::get_instance()->set_default_participant_qos(dp_qos);

    return Napi::Number::New(info.Env(), retcode);
}


Napi::Value
DdsModule::SetDomainParticipantFactoryQos(Napi::CallbackInfo const& info)
{
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

    BuiltinTopicKeyProxy::Init(env, dds_module, ctorReg);
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
    LatencyBudgetQosPolicyProxy::Init(env, dds_module, ctorReg);
    LifespanQosPolicyProxy::Init(env, dds_module, ctorReg);
    LivelinessQosPolicyProxy::Init(env, dds_module, ctorReg);
    OwnershipQosPolicyProxy::Init(env, dds_module, ctorReg);
    OwnershipQosPolicyKindProxy::Init(env, dds_module);
    OwnershipStrengthQosPolicyProxy::Init(env, dds_module, ctorReg);
    ParticipantBuiltinTopicDataProxy::Init(env, dds_module, ctorReg);
    PartitionQosPolicyProxy::Init(env, dds_module, ctorReg);
    PresentationQosPolicyProxy::Init(env, dds_module, ctorReg);
    PresentationQosPolicyAccessScopeKindProxy::Init(env, dds_module);
    PublicationBuiltinTopicDataProxy::Init(env, dds_module, ctorReg);
    PublisherQosProxy::Init(env, dds_module, ctorReg);
    QosPolicyCountProxy::Init(env, dds_module, ctorReg);
    ReaderDataLifecycleQosPolicyProxy::Init(env, dds_module, ctorReg);
    ReliabilityQosPolicyProxy::Init(env, dds_module, ctorReg);
    ReliabilityQosPolicyKindProxy::Init(env, dds_module);
    RequestedIncompatibleQosStatusProxy::Init(env, dds_module, ctorReg);
    ResourceLimitsQosPolicyProxy::Init(env, dds_module, ctorReg);
    SampleInfoProxy::Init(env, dds_module, ctorReg);
    SampleLostStatusProxy::Init(env, dds_module, ctorReg);
    SampleRejectedStatusProxy::Init(env, dds_module, ctorReg);
    SampleRejectedStatusKindProxy::Init(env, dds_module);
    SubscriberQosProxy::Init(env, dds_module, ctorReg);
    SubscriptionBuiltinTopicDataProxy::Init(env, dds_module, ctorReg);
    SubscriptionMatchedStatusProxy::Init(env, dds_module, ctorReg);
    TimeProxy::Init(env, dds_module, ctorReg);
    TimeBasedFilterQosPolicyProxy::Init(env, dds_module, ctorReg);
    TopicDataQosPolicyProxy::Init(env, dds_module, ctorReg);
    TopicQosProxy::Init(env, dds_module, ctorReg);
    TransportPriorityQosPolicyProxy::Init(env, dds_module, ctorReg);
    UserDataQosPolicyProxy::Init(env, dds_module, ctorReg);
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
