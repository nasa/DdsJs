/**
 * \file CoreDX/SubscriberWrap.cpp
 * \brief Contains the implementation for the \c SubscriberWrap class.
 * \author Rolando J. Nieves <rolando.j.nieves@nasa.gov>
 * \date 2024-02-02 17:14:40
 */

// --------------------------------------------------------------------------
// DdsJs CoreDX-Specific
#include <DdsJs/Providers/CoreDX/DataReaderQos.hh>
#include <DdsJs/Providers/CoreDX/DataReaderWrap.hh>
#include <DdsJs/Providers/CoreDX/SubscriberQos.hh>
#include <DdsJs/Providers/CoreDX/TopicQos.hh>
#include <DdsJs/Providers/CoreDX/TopicWrap.hh>
#include <DdsJs/Providers/CoreDX/dds_error_util.hh>

// --------------------------------------------------------------------------
// Local Definition
#include "SubscriberWrap.hh"


namespace DdsJs
{

const char *SubscriberWrap::MODNAME = "DDS";

const char *SubscriberWrap::NAME = "Subscriber";


Napi::Value
SubscriberWrap::CopyFromTopicQos(Napi::CallbackInfo const& info)
{
    if (info.Length() != 1)
    {
        std::stringstream msg;

        msg << NAME
            << ".copyFromTopicQos() called with invalid number of arguments.";
        throw Napi::Error::New(info.Env(), msg.str());
    }

    DDS::DataReaderQos result;
    DDS::TopicQos input;

    TopicQosProxy::FromJs(info.Env(), info[0].As< TopicQosProxy::NapiContainer >(), input);

    DDS::ReturnCode_t retcode = m_subscriber.get(info.Env(), "copyFromTopicQos")->copy_from_topic_qos(result, input);
    if (retcode != DDS::RETCODE_OK)
    {
        throw NewDdsError(info.Env(), NAME, "copyFromTopicQos", retcode);
    }

    return DataReaderQosProxy::NewInstance(info.Env(), result);
}


Napi::Value
SubscriberWrap::CreateDataReader(Napi::CallbackInfo const& info)
{
    static const char *METHOD_NAME = "createDataReader";

    DDS::DataReaderQos dr_qos;
    DDS::Subscriber *the_pub = m_subscriber.get(info.Env(), METHOD_NAME);
    TopicWrap *topic_wrapper = nullptr;
    DDS::Topic *topic = nullptr;

    the_pub->get_default_datareader_qos(dr_qos);
    switch(info.Length())
    {
    case 2:
        DataReaderQosProxy::FromJs(info.Env(), info[1].As< DataReaderQosProxy::NapiContainer >(), dr_qos);
        // Fall-through intentional
    case 1:
        topic_wrapper = TopicWrap::Unwrap(info[0].As< Napi::Object >());
        topic = topic_wrapper->useTopic(info.Env(), "useTopic");
        break;
    default:
        {
            std::stringstream msg;

            msg << DottedName({ MODNAME, NAME, METHOD_NAME }).flat() << "(): Incorrect number of arguments.";

            throw Napi::Error::New(info.Env(), msg.str());
        }
    }

    DDS::DataReader *reader = the_pub->create_datareader(topic, dr_qos, nullptr, 0);
    if (nullptr == reader)
    {
        throw NewDdsError(info.Env(), DottedName({ MODNAME, NAME }).flat(), METHOD_NAME, DDS::RETCODE_ERROR);
    }

    return DataReaderWrapFactory::NewInstance(info.Env(), reader, topic_wrapper->getReaderJsClassName());
}


Napi::Value
SubscriberWrap::DeleteContainedEntities(Napi::CallbackInfo const& info)
{
    DDS::ReturnCode_t retcode = m_subscriber.get(info.Env(), "deleteContainedEntities")->delete_contained_entities();
    if (retcode != DDS::RETCODE_OK)
    {
        throw NewDdsError(info.Env(), NAME, "deleteContainedEntities", retcode);
    }

    return info.Env().Undefined();
}


Napi::Value
SubscriberWrap::DeleteDataReader(Napi::CallbackInfo const& info)
{
    throw Napi::Error::New(info.Env(), "Subscriber.deleteDataReader() not implemented.");
}


Napi::Value
SubscriberWrap::Enable(Napi::CallbackInfo const& info)
{
    DDS::ReturnCode_t retcode = m_subscriber.get(info.Env(), "enable")->enable();
    if (retcode != DDS::RETCODE_OK)
    {
        throw NewDdsError(info.Env(), NAME, "enable", retcode);
    }

    return info.Env().Undefined();
}


Napi::Value
SubscriberWrap::GetDefaultDataReaderQos(Napi::CallbackInfo const& info)
{
    DDS::DataReaderQos result;
    DDS::ReturnCode_t retcode = m_subscriber.get(info.Env(), "getDefaultDataReaderQos")->get_default_datareader_qos(result);
    if (retcode != DDS::RETCODE_OK)
    {
        throw NewDdsError(info.Env(), NAME, "getDefaultDataReaderQos", retcode);
    }

    return DataReaderQosProxy::NewInstance(info.Env(), result);
}


Napi::Value
SubscriberWrap::GetInstanceHandle(Napi::CallbackInfo const& info)
{
    throw Napi::Error::New(info.Env(), "Subscriber.getInstanceHandle() not implemented.");
}


Napi::Value
SubscriberWrap::GetParticipant(Napi::CallbackInfo const& info)
{
    return m_participantJsObj.get(info.Env(), "getParticipant");
}


Napi::Value
SubscriberWrap::GetQos(Napi::CallbackInfo const& info)
{
    DDS::SubscriberQos result;
    DDS::ReturnCode_t retcode = m_subscriber.get(info.Env(), "getQos")->get_qos(result);
    if (retcode != DDS::RETCODE_OK)
    {
        throw NewDdsError(info.Env(), NAME, "getQos", retcode);
    }

    return SubscriberQosProxy::NewInstance(info.Env(), result);
}


Napi::Value
SubscriberWrap::GetStatusChanges(Napi::CallbackInfo const& info)
{
    throw Napi::Error::New(info.Env(), "Subscriber.getStatusChanges() not implemented.");
}


Napi::Value
SubscriberWrap::LookupDataReader(Napi::CallbackInfo const& info)
{
    throw Napi::Error::New(info.Env(), "Subscriber.lookupDataReader() not implemented.");
}


Napi::Value
SubscriberWrap::SetDefaultDataReaderQos(Napi::CallbackInfo const& info)
{
    if (info.Length() != 1)
    {
        std::stringstream msg;

        msg << NAME
            << ".setDefaultDataReaderQos() called with invalid number of arguments.";
        throw Napi::Error::New(info.Env(), msg.str());
    }

    DDS::DataReaderQos input;
    DataReaderQosProxy::FromJs(info.Env(), info[0].As< DataReaderQosProxy::NapiContainer >(), input);
    DDS::ReturnCode_t retcode = m_subscriber.get(info.Env(), "setDefaultDataReaderQos")->set_default_datareader_qos(input);
    if (retcode != DDS::RETCODE_OK)
    {
        throw NewDdsError(info.Env(), NAME, "setDefaultDataReaderQos", retcode);
    }

    return info.Env().Undefined();
}


Napi::Value
SubscriberWrap::SetQos(Napi::CallbackInfo const& info)
{
    if (info.Length() != 1)
    {
        std::stringstream msg;

        msg << NAME
            << ".setQos() called with invalid number of arguments.";
        throw Napi::Error::New(info.Env(), msg.str());
    }

    DDS::SubscriberQos input;
    SubscriberQosProxy::FromJs(info.Env(), info[0].As< SubscriberQosProxy::NapiContainer >(), input);
    DDS::ReturnCode_t retcode = m_subscriber.get(info.Env(), "setQos")->set_qos(input);
    if (retcode != DDS::RETCODE_OK)
    {
        throw NewDdsError(info.Env(), NAME, "setQos", retcode);
    }

    return info.Env().Undefined();
}


Napi::Object
SubscriberWrap::Init(Napi::Env env, Napi::Object exports, ConstructorRegistry *ctorReg)
{
    Napi::Function ctor_func = DefineClass(
        env,
        NAME,
        {
            InstanceMethod("copyFromTopicQos", &SubscriberWrap::CopyFromTopicQos, napi_enumerable),
            InstanceMethod("createDataReader", &SubscriberWrap::CreateDataReader, napi_enumerable),
            InstanceMethod("deleteContainedEntities", &SubscriberWrap::DeleteContainedEntities, napi_enumerable),
            InstanceMethod("deleteDataReader", &SubscriberWrap::DeleteDataReader, napi_enumerable),
            InstanceMethod("enable", &SubscriberWrap::Enable, napi_enumerable),
            InstanceMethod("getDefaultDataReaderQos", &SubscriberWrap::GetDefaultDataReaderQos, napi_enumerable),
            InstanceMethod("getInstanceHandle", &SubscriberWrap::GetInstanceHandle, napi_enumerable),
            InstanceMethod("getParticipant", &SubscriberWrap::GetParticipant, napi_enumerable),
            InstanceMethod("getQos", &SubscriberWrap::GetQos, napi_enumerable),
            InstanceMethod("getStatusChanges", &SubscriberWrap::GetStatusChanges, napi_enumerable),
            InstanceMethod("lookupDataReader", &SubscriberWrap::LookupDataReader, napi_enumerable),
            InstanceMethod("setDefaultDataReaderQos", &SubscriberWrap::SetDefaultDataReaderQos, napi_enumerable),
            InstanceMethod("setQos", &SubscriberWrap::SetQos, napi_enumerable)
        }
    );

    Napi::FunctionReference *ctor_ref = new Napi::FunctionReference();
    *ctor_ref = Napi::Persistent(ctor_func);
    ctorReg->setConstructorFor(DottedName({ MODNAME, NAME }), ctor_ref);

    exports.Set(NAME, ctor_func);
    return exports;
}


Napi::Object
SubscriberWrap::NewInstance(Napi::Env env, DDS::Subscriber *subscriber, Napi::Object participantJsObj)
{
    Napi::EscapableHandleScope scope(env);

    Napi::External< DDS::Subscriber > publisher_ext = Napi::External< DDS::Subscriber >::New(env, subscriber);
    Napi::FunctionReference *ctor_ref = env.GetInstanceData< ConstructorRegistry >()->getConstructorFor(DottedName({ MODNAME, NAME }));
    if (nullptr == ctor_ref)
    {
        throw Napi::Error::New(env, "SubscriberWrap::NewInstance(): Internal error: Constructor for Subscriber not available.");
    }
    Napi::Object result = ctor_ref->New({ publisher_ext, participantJsObj });

    return scope.Escape((napi_value)result).As< Napi::Object >();
}


SubscriberWrap::SubscriberWrap(Napi::CallbackInfo const& info):
    Napi::ObjectWrap< SubscriberWrap >(info),
    m_participantJsObj(NAME, "Participant"),
    m_subscriber(NAME)
{
    if (info.Length() != 2)
    {
        throw Napi::Error::New(info.Env(), "Subscriber constructor provided insufficient arguments.");
    }

    if (!info[0].IsExternal())
    {
        throw Napi::Error::New(info.Env(), "Subscriber constructor passed invalid subscriber external argument.");
    }

    if (!info[1].IsObject())
    {
        throw Napi::Error::New(info.Env(), "Subscriber constructor passed invalid participant JS object argument.");
    }

    m_subscriber.reset(info[0].As< Napi::External< DDS::Subscriber > >().Data());
    m_participantJsObj.reset(info[1].As< Napi::Object >());
}

} // end namespace DdsJs

// vim: set ts=4 sw=4 expandtab:
