/**
 * \file DdsModule.cpp
 * \brief Contains the implementation for the \c DdsModule class.
 * \author Rolando J. Nieves <rolando.j.nieves@nasa.gov>
 * \date 2024-02-07 11:54:11
 */

#include <DdsJs/BuiltinTopicKey.hh>
#include <DdsJs/DataReaderQos.hh>
#include <DdsJs/DataWriterQos.hh>
#include <DdsJs/DeadlineQosPolicy.hh>
#include <DdsJs/DestinationOrderQosPolicy.hh>
#include <DdsJs/DestinationOrderQosPolicyKind.hh>
#include <DdsJs/DomainParticipantFactoryQos.hh>
#include <DdsJs/DomainParticipantQos.hh>
#include <DdsJs/DomainParticipantWrap.hh>
#include <DdsJs/DurabilityQosPolicy.hh>
#include <DdsJs/DurabilityQosPolicyKind.hh>
#include <DdsJs/DurabilityServiceQosPolicy.hh>
#include <DdsJs/Duration.hh>
#include <DdsJs/EntityFactoryQosPolicy.hh>
#include <DdsJs/GroupDataQosPolicy.hh>
#include <DdsJs/HistoryQosPolicy.hh>
#include <DdsJs/HistoryQosPolicyKind.hh>
#include <DdsJs/LatencyBudgetQosPolicy.hh>
#include <DdsJs/LifespanQosPolicy.hh>
#include <DdsJs/LivelinessQosPolicy.hh>
#include <DdsJs/OwnershipQosPolicy.hh>
#include <DdsJs/OwnershipQosPolicyKind.hh>
#include <DdsJs/OwnershipStrengthQosPolicy.hh>
#include <DdsJs/PartitionQosPolicy.hh>
#include <DdsJs/PresentationQosPolicy.hh>
#include <DdsJs/PresentationQosPolicyAccessScopeKind.hh>
#include <DdsJs/PublicationBuiltinTopicData.hh>
#include <DdsJs/PublisherQos.hh>
#include <DdsJs/PublisherWrap.hh>
#include <DdsJs/QosPolicyCount.hh>
#include <DdsJs/ReaderDataLifecycleQosPolicy.hh>
#include <DdsJs/ReliabilityQosPolicy.hh>
#include <DdsJs/ReliabilityQosPolicyKind.hh>
#include <DdsJs/RequestedIncompatibleQosStatus.hh>
#include <DdsJs/ResourceLimitsQosPolicy.hh>
#include <DdsJs/SampleInfo.hh>
#include <DdsJs/SampleLostStatus.hh>
#include <DdsJs/SampleRejectedStatus.hh>
#include <DdsJs/SampleRejectedStatusKind.hh>
#include <DdsJs/SubscriberQos.hh>
#include <DdsJs/SubscriberWrap.hh>
#include <DdsJs/SubscriptionBuiltinTopicData.hh>
#include <DdsJs/SubscriptionMatchedStatus.hh>
#include <DdsJs/Time.hh>
#include <DdsJs/TimeBasedFilterQosPolicy.hh>
#include <DdsJs/TopicDataQosPolicy.hh>
#include <DdsJs/TopicQos.hh>
#include <DdsJs/TopicWrap.hh>
#include <DdsJs/TransportPriorityQosPolicy.hh>
#include <DdsJs/UserDataQosPolicy.hh>
#include <DdsJs/WriterDataLifecycleQosPolicy.hh>
#include <DdsJs/dds_provider.hh>

#include "DdsModule.hh"


using std::stringstream;

namespace DdsJs {

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
