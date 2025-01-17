/**
 * \file CycloneDDS/DomainParticipantWrap.cpp
 * \brief Contains the implementation for the \c DdsJs::DomainParticipantWrap class.
 * \author Rolando J. Nieves
 * \date 2024-10-02 12:36:23
 */

// --------------------------------------------------------------------------
// Standard C++ Library
#include <sstream>

// --------------------------------------------------------------------------
// DdsJs CycloneDDS-Specific
#include <DdsJs/Providers/CycloneDDS/DomainParticipantQos.hh>
#include <DdsJs/Providers/CycloneDDS/InstanceHandle.hh>
#include <DdsJs/Providers/CycloneDDS/PublisherQos.hh>
#include <DdsJs/Providers/CycloneDDS/PublisherWrap.hh>
#include <DdsJs/Providers/CycloneDDS/SubscriberQos.hh>
#include <DdsJs/Providers/CycloneDDS/SubscriberWrap.hh>
#include <DdsJs/Providers/CycloneDDS/TopicQos.hh>
#include <DdsJs/Providers/CycloneDDS/TopicWrap.hh>
#include <DdsJs/Providers/CycloneDDS/dds_error_util.hh>
#include <DdsJs/Providers/CycloneDDS/dds_qos_util.hh>

// --------------------------------------------------------------------------
// Local Definition
#include "DomainParticipantWrap.hh"


namespace DdsJs
{

const char *DomainParticipantWrap::MODNAME = "DDS";

const char *DomainParticipantWrap::NAME = "DomainParticipant";

Napi::Object
DomainParticipantWrap::Init(Napi::Env env, Napi::Object exports, ConstructorRegistry *ctorReg)
{
    Napi::Function ctor_func = DefineClass(
        env,
        NAME,
        {
            InstanceMethod("createPublisher", &DomainParticipantWrap::CreatePublisher, napi_enumerable),
            InstanceMethod("createSubscriber", &DomainParticipantWrap::CreateSubscriber, napi_enumerable),
            InstanceMethod("createTopic", &DomainParticipantWrap::CreateTopic, napi_enumerable),
            InstanceMethod("getInstanceHandle", &DomainParticipantWrap::GetInstanceHandle, napi_enumerable),
            InstanceMethod("getQos", &DomainParticipantWrap::GetQos, napi_enumerable)
        }
    );

    Napi::FunctionReference *ctor_ref = new Napi::FunctionReference();
    *ctor_ref = Napi::Persistent(ctor_func);
    ctorReg->setConstructorFor(DottedName({ MODNAME, NAME }), ctor_ref);

    exports.Set(NAME, ctor_func);
    
    return exports;
}


Napi::Object
DomainParticipantWrap::NewInstance(Napi::Env env, dds_entity_t participant)
{
    Napi::EscapableHandleScope scope(env);
    Napi::External< dds_entity_t > participant_arg = Napi::External< dds_entity_t >::New(env, &participant);
    Napi::FunctionReference *ctor_ref = env.GetInstanceData< ConstructorRegistry >()->getConstructorFor(DottedName({ MODNAME, NAME }));
    if (nullptr == ctor_ref)
    {
        throw Napi::Error::New(env, "Internal error: Constructor for DomainParticipant not available.");
    }

    Napi::Object obj = ctor_ref->New({ participant_arg });

    return scope.Escape(napi_value(obj)).ToObject();
}

DomainParticipantWrap::~DomainParticipantWrap()
{
    dds_delete(m_participant);
    m_participant = DDS_ENTITY_NIL;
}


DomainParticipantWrap::DomainParticipantWrap(Napi::CallbackInfo const& info):
    Napi::ObjectWrap< DomainParticipantWrap >(info),
    m_participant(DDS_ENTITY_NIL)
{
    if (!info[0].IsExternal())
    {
        throw Napi::Error::New(info.Env(), "DomainParticipantWrap::DomainParticipantWrap(): Invalid argument provided to DomainParticipant constructor.");
    }
    m_participant = *(info[0].As< Napi::External< dds_entity_t > >().Data());
}


void
DomainParticipantWrap::registerTopicTypeInfo(CycloneDDS::TypeInformation typeInfo, std::string localAlias)
{
    if (localAlias.empty())
    {
        localAlias = typeInfo.typeName;
    }
    m_topicTypeInfo.emplace(localAlias, typeInfo);
}


Napi::Value
DomainParticipantWrap::CreatePublisher(Napi::CallbackInfo const& info)
{
    CycloneDDS::QosUniquePtr pub_qos;

    switch(info.Length())
    {
        case 1:
        {
            pub_qos.reset(dds_create_qos());
            // Temporary get to bare-bald pointer so we can bind to ref in FromJs()
            dds_qos_t *the_qos = pub_qos.get();
            PublisherQosProxy::FromJs(info.Env(), info[0].As< PublisherQosProxy::NapiContainer >(), the_qos);
            // Fall-through intentional
        }
        case 0:
            break;
        default:
            throw Napi::Error::New(info.Env(), "DomainParticipant.createPublisher(): Invalid number of arguments provided.");
    }

    dds_entity_t the_pub = dds_create_publisher(m_participant, pub_qos.get(), nullptr);
    if (the_pub < 0)
    {
        throw NewDdsError(info.Env(), NAME, "createPublisher", (dds_return_t)the_pub);
    }

    return PublisherWrap::NewInstance(info.Env(), the_pub, info.This().As< Napi::Object >());
}


Napi::Value
DomainParticipantWrap::CreateSubscriber(Napi::CallbackInfo const& info)
{
    CycloneDDS::QosUniquePtr sub_qos;

    switch(info.Length())
    {
        case 1:
        {
            sub_qos.reset(dds_create_qos());
            // Temporary get to bare-bald pointer so we can bind to ref in FromJs()
            dds_qos_t *the_qos = sub_qos.get();
            SubscriberQosProxy::FromJs(info.Env(), info[0].As< SubscriberQosProxy::NapiContainer >(), the_qos);
            // Fall-through intentional
        }
        case 0:
            break;
        default:
            throw Napi::Error::New(info.Env(), "DomainParticipant.createSubscriber(): Invalid number of arguments provided.");
    }

    dds_entity_t the_sub = dds_create_subscriber(m_participant, sub_qos.get(), nullptr);
    if (the_sub < 0)
    {
        throw NewDdsError(info.Env(), NAME, "createSubscriber", (dds_return_t)(-1 * the_sub));
    }

    return SubscriberWrap::NewInstance(info.Env(), the_sub, info.This().As< Napi::Object >());
}


Napi::Value
DomainParticipantWrap::CreateTopic(Napi::CallbackInfo const& info)
{
    std::string topic_name;
    std::string type_name;
    CycloneDDS::QosUniquePtr topic_qos;

    switch(info.Length())
    {
        case 3:
        {
            topic_qos.reset(dds_create_qos());
            // Temporary get to bare-bald pointer so we can bind to ref in FromJs()
            dds_qos_t *the_qos = topic_qos.get();
            TopicQosProxy::FromJs(info.Env(), info[2].As< TopicQosProxy::NapiContainer >(), the_qos);
            // Fall-through intentional
        }
        case 2:
            type_name = info[1].As< Napi::String >().Utf8Value();
            topic_name = info[0].As< Napi::String >().Utf8Value();
            break;
        
        default:
            throw Napi::Error::New(info.Env(), "DomainParticipant.createTopic(): Invalid number of arguments provided.");
    }

    if (topic_name.length() >= TopicWrap::TOPIC_NAME_MAX_LEN)
    {
        std::stringstream msg;

        msg << "DomainParticipant.createTopic(): Topic name length exceeds maximum of ("
            << TopicWrap::TOPIC_NAME_MAX_LEN
            << ")";
        throw Napi::Error::New(info.Env(), msg.str());
    }

    auto type_info_iter = m_topicTypeInfo.find(type_name);
    if (m_topicTypeInfo.end() == type_info_iter)
    {
        std::stringstream msg;
        msg << "DomainParticipant.createTopic(): Unknown type name \""
            << type_name
            << "\". Has it been registered?";
        throw Napi::Error::New(info.Env(), msg.str());
    }

    dds_entity_t the_topic = dds_create_topic(m_participant, (*type_info_iter).second.topicDesc, topic_name.c_str(), topic_qos.get(), nullptr);
    if (the_topic < 0)
    {
        throw NewDdsError(info.Env(), NAME, "createTopic", (dds_return_t)the_topic);
    }

    return TopicWrap::NewInstance(info.Env(), the_topic, topic_name, (*type_info_iter).second);
}


Napi::Value
DomainParticipantWrap::GetInstanceHandle(Napi::CallbackInfo const& info)
{
    typename InstanceHandleProxy::CppEntity participant_handle;

    dds_return_t retcode = dds_get_instance_handle(m_participant, &participant_handle);
    if (retcode != DDS_RETCODE_OK)
    {
        throw NewDdsError(info.Env(), NAME, "getInstanceHandle", retcode);
    }

    return InstanceHandleProxy::NewInstance(info.Env(), participant_handle);
}


Napi::Value
DomainParticipantWrap::GetQos(Napi::CallbackInfo const& info)
{
    CycloneDDS::QosUniquePtr dp_qos(dds_create_qos());

    dds_return_t retcode = dds_get_qos(m_participant, dp_qos.get());
    if (retcode != DDS_RETCODE_OK)
    {
        throw NewDdsError(info.Env(), NAME, "getQos", retcode);
    }

    return DomainParticipantQosProxy::NewInstance(info.Env(), dp_qos.get());
}

} // end namespace DdsJs

// vim: set ts=4 sw=4 expandtab:
