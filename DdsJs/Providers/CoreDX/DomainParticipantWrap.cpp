/**
 * \file CoreDX/DomainParticipantWrap.cpp
 * \brief Contains the implementation for the \c DomainParticipantWrap class.
 * \author Rolando J. Nieves
 * \date 2014-07-28 16:06:08
 */

// --------------------------------------------------------------------------
// DdsJs CoreDX-Specific
#include <DdsJs/Providers/CoreDX/InstanceHandle.hh>
#include <DdsJs/Providers/CoreDX/ParticipantBuiltinTopicData.hh>
#include <DdsJs/Providers/CoreDX/PublisherQos.hh>
#include <DdsJs/Providers/CoreDX/PublisherWrap.hh>
#include <DdsJs/Providers/CoreDX/SequenceUtilities.hh>
#include <DdsJs/Providers/CoreDX/SubscriberQos.hh>
#include <DdsJs/Providers/CoreDX/SubscriberWrap.hh>
#include <DdsJs/Providers/CoreDX/TopicQos.hh>
#include <DdsJs/Providers/CoreDX/TopicWrap.hh>
#include <DdsJs/Providers/CoreDX/TypeSupportWrap.hh>

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
    /**
     * The list of methods included in the JavaScript object prototype are
     * derived, for the most part, from an appropriate counterpart in 
     * \c DDS::DomainParticipant:
     * - \c createPublisher() - \c DDS::DomainParticipant::create_publisher()
     * - \c createSubscriber() - \c DDS::DomainParticipant::create_subscriber()
     * - \c createTopic() - \c DDS::DomainParticipant::create_topic()
     * - \c deleteContainedEntities() - \c DDS::DomainParticipant::delete_contained_entities()
     * - \c enable() - \c DDS::DomainParticipant::enable()
     * - \c getDefaultPublisherQos() - \c DDS::DomainParticipant::get_default_publisher_qos()
     * - \c getDefaultSubscriberQos() - \c DDS::DomainParticipant::get_default_subscriber_qos()
     * - \c getDiscoveredParticipantData() - \c DDS::DomainParticipant::get_discovered_participant_data()
     * - \c getDiscoveredParticipants() - \c DDS::DomainParticipant::get_discovered_participants()
     * - \c getInstanceHandle() - \c DDS::DomainParticipant::get_instance_handle()
     * - \c ignoreParticipant() - \c DDS::DomainParticipant::ignore_participant()
     */
    Napi::Function ctor_func = DefineClass(
        env,
        NAME,
        {
            InstanceMethod("createPublisher", &DomainParticipantWrap::CreatePublisher, napi_enumerable),
            InstanceMethod("createSubscriber", &DomainParticipantWrap::CreateSubscriber, napi_enumerable),
            InstanceMethod("createTopic", &DomainParticipantWrap::CreateTopic, napi_enumerable),
            InstanceMethod("deleteContainedEntities", &DomainParticipantWrap::DeleteContainedEntities, napi_enumerable),
            InstanceMethod("enable", &DomainParticipantWrap::Enable, napi_enumerable),
            InstanceMethod("getDefaultPublisherQos", &DomainParticipantWrap::GetDefaultPublisherQos, napi_enumerable),
            InstanceMethod("getDefaultSubscriberQos", &DomainParticipantWrap::GetDefaultSubscriberQos, napi_enumerable),
            InstanceMethod("getDiscoveredParticipantData", &DomainParticipantWrap::GetDiscoveredParticipantData, napi_enumerable),
            InstanceMethod("getDiscoveredParticipants", &DomainParticipantWrap::GetDiscoveredParticipants, napi_enumerable),
            InstanceMethod("getInstanceHandle", &DomainParticipantWrap::GetInstanceHandle, napi_enumerable),
            InstanceMethod("ignoreParticipant", &DomainParticipantWrap::IgnoreParticipant, napi_enumerable)
        }
    );

    Napi::FunctionReference *ctor_ref = new Napi::FunctionReference();
    *ctor_ref = Napi::Persistent(ctor_func);
    ctorReg->setConstructorFor(DottedName({ MODNAME, NAME }), ctor_ref);

    exports.Set(NAME, ctor_func);
    return exports;
}

Napi::Object
DomainParticipantWrap::NewInstance(Napi::Env env, DDS::DomainParticipant* participant)
{
    Napi::EscapableHandleScope scope(env);
    Napi::External< DDS::DomainParticipant > participant_arg = Napi::External< DDS::DomainParticipant >::New(env, participant);
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
    m_registeredTypes.clear();
    
    if (m_participant.valid())
    {
        // Will not throw ... we just checked with ".valid()"
        DDS::DomainParticipant *participant = m_participant.get("~DomainParticipantWrap");
        /**
         * In addition to resetting internal fields, the destructor for
         * \c DomainParticipantWrap attempts to clean up the underlying
         * C++ object tree created by the CoreDX library.
         */
        participant->delete_contained_entities();
        DDS::DomainParticipantFactory::get_instance()->delete_participant(participant);
        m_participant.reset(nullptr);
    }
}

DomainParticipantWrap::DomainParticipantWrap(Napi::CallbackInfo const& info):
    Napi::ObjectWrap< DomainParticipantWrap >(info),
    m_participant(NAME)
{
    // TODO: Once type tagging is implemented, check that too.
    if (!info[0].IsExternal())
    {
        throw Napi::Error::New(info.Env(), "DomainParticipantWrap::DomainParticipantWrap(): Invalid argument provided to DomainParticipant constructor.");
    }
    m_participant.reset(info[0].As< Napi::External< DDS::DomainParticipant > >().Data());
}


void
DomainParticipantWrap::rememberTypeAssoc(std::string const& typeName, std::weak_ptr< TypeSupportAssociations > assoc)
{
    m_registeredTypes.emplace(typeName, assoc);
}


std::string
DomainParticipantWrap::readerJsClassNameFor(std::string const& typeName) const
{
    std::string result;

    auto type_map_iter = m_registeredTypes.find(typeName);
    if ((type_map_iter != m_registeredTypes.end()) && !(*type_map_iter).second.expired())
    {
        std::shared_ptr< TypeSupportAssociations > assoc_ptr = (*type_map_iter).second.lock();
        result = assoc_ptr->readerJsClassName;
    }

    return result;
}


std::string
DomainParticipantWrap::writerJsClassNameFor(std::string const& typeName) const
{
    std::string result;

    auto type_map_iter = m_registeredTypes.find(typeName);
    if ((type_map_iter != m_registeredTypes.end()) && !(*type_map_iter).second.expired())
    {
        std::shared_ptr< TypeSupportAssociations > assoc_ptr = (*type_map_iter).second.lock();
        result = assoc_ptr->writerJsClassName;
    }
    
    return result;
}


Napi::Value
DomainParticipantWrap::CreatePublisher(Napi::CallbackInfo const& info)
{
    DDS::PublisherQos pub_qos;
    DDS::DomainParticipant *participant = m_participant.get(info.Env(), "CreatePublisher");

    participant->get_default_publisher_qos(pub_qos);

    switch(info.Length())
    {
        case 1:
            PublisherQosProxy::FromJs(info.Env(), info[0].As< PublisherQosProxy::NapiContainer >(), pub_qos);
        // Fall-through intentional
        case 0:
            break;
        default:
            throw Napi::Error::New(info.Env(), "DomainParticipantWrap::createPublisher(): Invalid number of arguments provided.");
    }

    DDS::Publisher *the_pub = participant->create_publisher(pub_qos, nullptr, 0);
    if (nullptr == the_pub)
    {
        throw NewDdsError(info.Env(), NAME, "createPublisher", DDS::RETCODE_ERROR);
    }
    return PublisherWrap::NewInstance(info.Env(), the_pub, info.This().As< Napi::Object >());
}


Napi::Value
DomainParticipantWrap::CreateSubscriber(Napi::CallbackInfo const& info)
{
    DDS::SubscriberQos sub_qos;
    DDS::DomainParticipant *participant = m_participant.get(info.Env(), "CreateSubscriber");

    participant->get_default_subscriber_qos(sub_qos);

    switch(info.Length())
    {
        case 1:
            SubscriberQosProxy::FromJs(info.Env(), info[0].As< SubscriberQosProxy::NapiContainer >(), sub_qos);
        // Fall-through intentional
        case 0:
            break;
        default:
            throw Napi::Error::New(info.Env(), "DomainParticipantWrap::createSubscriber(): Invalid number of arguments provided.");
    }

    DDS::Subscriber *the_sub = participant->create_subscriber(sub_qos, nullptr, 0);
    if (nullptr == the_sub)
    {
        throw NewDdsError(info.Env(), NAME, "createSubscriber", DDS::RETCODE_ERROR);
    }
    return SubscriberWrap::NewInstance(info.Env(), the_sub, info.This().As< Napi::Object >());
}


Napi::Value
DomainParticipantWrap::CreateTopic(Napi::CallbackInfo const& info)
{
    DDS::TopicQos topic_qos;
    DDS::DomainParticipant *participant = m_participant.get(info.Env(), "CreateTopic");
    std::string type_name;
    std::string topic_name;

    participant->get_default_topic_qos(topic_qos);

    switch(info.Length())
    {
        case 3:
            TopicQosProxy::FromJs(info.Env(), info[2].As< TopicQosProxy::NapiContainer >(), topic_qos);
        // Fall-through intentional
        case 2:
            type_name = info[1].As< Napi::String >().Utf8Value();
            topic_name = info[0].As< Napi::String >().Utf8Value();
            break;
        default:
            throw Napi::Error::New(info.Env(), "DomainParticipantWrap::createSubscriber(): Invalid number of arguments provided.");
    }

    DDS::Topic *the_topic = participant->create_topic(topic_name.c_str(), type_name.c_str(), topic_qos, nullptr, 0);
    if (nullptr == the_topic)
    {
        throw NewDdsError(info.Env(), NAME, "createTopic", DDS::RETCODE_ERROR);
    }
    return TopicWrap::NewInstance(info.Env(), the_topic, info.This().As< Napi::Object >());
}


Napi::Value
DomainParticipantWrap::DeleteContainedEntities(Napi::CallbackInfo const& info)
{
    DDS::DomainParticipant *participant = m_participant.get(info.Env(), "DeleteContainedEntities");

    DDS::ReturnCode_t retcode = participant->delete_contained_entities();
    if (retcode != DDS::RETCODE_OK)
    {
        throw NewDdsError(info.Env(), NAME, "deleteContainedEntities", retcode);
    }

    return info.Env().Undefined();
}


Napi::Value
DomainParticipantWrap::Enable(Napi::CallbackInfo const& info)
{
    DDS::DomainParticipant *participant = m_participant.get(info.Env(), "Enable");

    DDS::ReturnCode_t retcode = participant->enable();
    if (retcode != DDS::RETCODE_OK)
    {
        throw NewDdsError(info.Env(), NAME, "deleteContainedEntities", retcode);
    }

    return info.Env().Undefined();
}


Napi::Value
DomainParticipantWrap::GetDiscoveredParticipantData(Napi::CallbackInfo const& info)
{
    static constexpr size_t VALID_ARG_COUNT = 1u;
    static const char *METHOD_NAME = "getDiscoveredParticipantData";
    DDS::ParticipantBuiltinTopicData participant_info;
    DDS::DomainParticipant *participant = m_participant.get(info.Env(), "GetDiscoveredParticipantData");

    if (info.Length() != VALID_ARG_COUNT)
    {
        std::stringstream msg;

        msg << MODNAME << "." << NAME << "." << METHOD_NAME << "(): Invalid number of arguments provided. Expected (" << VALID_ARG_COUNT << ")";

        throw Napi::Error::New(info.Env(), msg.str());
    }

    typename InstanceHandleProxy::CppEntity participant_handle;
    InstanceHandleProxy::FromJs(info.Env(), info[0].As< InstanceHandleProxy::NapiContainer >(), participant_handle);
    DDS::ReturnCode_t result = participant->get_discovered_participant_data(&participant_info, participant_handle);
    if (DDS::RETCODE_OK != result)
    {
        throw NewDdsError(info.Env(), DottedName({ MODNAME, NAME }).flat(), METHOD_NAME, result);
    }

    return ParticipantBuiltinTopicDataProxy::NewInstance(info.Env(), participant_info);
}


Napi::Value
DomainParticipantWrap::GetDiscoveredParticipants(Napi::CallbackInfo const& info)
{
    DDS::InstanceHandleSeq discovered_participants;
    DDS::DomainParticipant *participant = m_participant.get(info.Env(), "GetDiscoveredParticipants");

    DDS::ReturnCode_t retcode = participant->get_discovered_participants(&discovered_participants);
    if ((retcode != DDS::RETCODE_OK) && (retcode != DDS::RETCODE_NO_DATA))
    {
        throw NewDdsError(info.Env(), NAME, "getDiscoveredParticipants", retcode);
    }

    return UnboundedSequence< InstanceHandleProxy, DDS::InstanceHandleSeq, CoreDX::SequenceUtilities >::NewInstance(info.Env(), discovered_participants);
}


Napi::Value
DomainParticipantWrap::GetDefaultPublisherQos(Napi::CallbackInfo const& info)
{
    DDS::PublisherQos pub_qos;
    DDS::DomainParticipant *participant = m_participant.get(info.Env(), "GetDefaultPublisherQos");

    participant->get_default_publisher_qos(pub_qos);

    return PublisherQosProxy::NewInstance(info.Env(), pub_qos);
}


Napi::Value
DomainParticipantWrap::GetDefaultSubscriberQos(Napi::CallbackInfo const& info)
{
    DDS::SubscriberQos sub_qos;
    DDS::DomainParticipant *participant = m_participant.get(info.Env(), "GetDefaultSubscriberQos");

    participant->get_default_subscriber_qos(sub_qos);

    return SubscriberQosProxy::NewInstance(info.Env(), sub_qos);
}


Napi::Value
DomainParticipantWrap::GetInstanceHandle(Napi::CallbackInfo const& info)
{
    DDS::DomainParticipant *participant = m_participant.get(info.Env(), "GetInstanceHandle");

    DDS::InstanceHandle_t participant_handle = participant->get_instance_handle();

    return InstanceHandleProxy::NewInstance(info.Env(), participant_handle);
}


Napi::Value
DomainParticipantWrap::IgnoreParticipant(Napi::CallbackInfo const& info)
{
    static constexpr size_t VALID_ARG_COUNT = 1u;
    static const char *METHOD_NAME = "ignoreParticipant";
    DDS::DomainParticipant *participant = m_participant.get(info.Env(), "IgnoreParticipant");

    if (info.Length() != VALID_ARG_COUNT)
    {
        std::stringstream msg;

        msg << MODNAME << "." << NAME << "." << METHOD_NAME << "(): Invalid number of arguments provided. Expected (" << VALID_ARG_COUNT << ")";

        throw Napi::Error::New(info.Env(), msg.str());
    }

    typename InstanceHandleProxy::CppEntity to_ignore;
    InstanceHandleProxy::FromJs(info.Env(), info[0].As< InstanceHandleProxy::NapiContainer >(), to_ignore);
    DDS::ReturnCode_t retcode = participant->ignore_participant(to_ignore);
    if (retcode != DDS::RETCODE_OK)
    {
        throw NewDdsError(info.Env(), DottedName({ MODNAME, NAME }).flat(), METHOD_NAME, retcode);
    }

    return info.Env().Undefined();
}

} // end namespace DdsJs

// vim: set ts=4 sw=4 expandtab:
