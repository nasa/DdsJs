/**
 * \file CycloneDDS/SubscriberWrap.cpp
 * \brief Contains the implementation of the \c DdsJs::SubscriberWrap for CycloneDDS.
 * \author Rolando J. Nieves
 * \date 2024-12-06 13:33:12
 */

// --------------------------------------------------------------------------
// Standard C++ Library
 #include <string>

// --------------------------------------------------------------------------
// DdsJs CycloneDDS-Specific
#include <DdsJs/Providers/CycloneDDS/DataReaderQos.hh>
#include <DdsJs/Providers/CycloneDDS/DataReaderWrap.hh>
#include <DdsJs/Providers/CycloneDDS/SubscriberQos.hh>
#include <DdsJs/Providers/CycloneDDS/TopicWrap.hh>
#include <DdsJs/Providers/CycloneDDS/dds_error_util.hh>
#include <DdsJs/Providers/CycloneDDS/dds_qos_util.hh>

// --------------------------------------------------------------------------
// Local Definition
#include "SubscriberWrap.hh"


namespace DdsJs
{

const char *SubscriberWrap::MODNAME = "DDS";

const char *SubscriberWrap::NAME = "Subscriber";


Napi::Value
SubscriberWrap::CreateDataReader(Napi::CallbackInfo const& info)
{
    TopicWrap *topic_wrap_maybe = nullptr;
    CycloneDDS::QosUniquePtr dr_qos;

    switch(info.Length())
    {
        case 2:
        {
            dr_qos.reset(dds_create_qos());
            // Temporary get to bare-bald pointer so we can bind to ref in FromJs()
            dds_qos_t *the_qos = dr_qos.get();
            DataReaderQosProxy::FromJs(info.Env(), info[1].As< DataReaderQosProxy::NapiContainer >(), the_qos);
            // Fall-through intentional
        }
        case 1:
            topic_wrap_maybe = TopicWrap::Unwrap(info[0].As< Napi::Object >());
            break;
        default:
            throw Napi::Error::New(info.Env(), "Subscriber.createDataReader(): Invalid number of arguments provided.");
    }

    if (nullptr == topic_wrap_maybe)
    {
        throw Napi::Error::New(info.Env(), "Subscriber.createDataReader(): Topic object unavailable.");
    }

    dds_entity_t the_reader = dds_create_reader(m_subscriber, topic_wrap_maybe->useTopic(), dr_qos.get(), nullptr);
    if (the_reader <= 0)
    {
        throw NewDdsError(info.Env(), DottedName({ MODNAME, NAME }).flat(), "createDataReader", (dds_return_t)the_reader);
    }

    return DataReaderWrapFactory::NewInstance(info.Env(), the_reader, topic_wrap_maybe->readerClassName());
}


Napi::Value
SubscriberWrap::GetParticipant(Napi::CallbackInfo const& info)
{
    return m_participantJsObj.get(info.Env(), "getParticipant");
}


Napi::Value
SubscriberWrap::GetQos(Napi::CallbackInfo const& info)
{
    CycloneDDS::QosUniquePtr sub_qos(dds_create_qos());

    dds_return_t get_result = dds_get_qos(m_subscriber, sub_qos.get());
    if (get_result != DDS_RETCODE_OK)
    {
        throw NewDdsError(info.Env(), DottedName({ MODNAME, NAME }).flat(), "getQos", get_result);
    }

    return SubscriberQosProxy::NewInstance(info.Env(), sub_qos.get());
}


Napi::Object
SubscriberWrap::Init(Napi::Env env, Napi::Object exports, ConstructorRegistry *ctorReg)
{
    Napi::Function ctor_func = DefineClass(
        env,
        NAME,
        {
            InstanceMethod("createDataReader", &SubscriberWrap::CreateDataReader, napi_enumerable),
            InstanceMethod("getParticipant", &SubscriberWrap::GetParticipant, napi_enumerable),
            InstanceMethod("getQos", &SubscriberWrap::GetQos, napi_enumerable)
        }
    );

    Napi::FunctionReference *ctor_ref = new Napi::FunctionReference();
    *ctor_ref = Napi::Persistent(ctor_func);
    ctorReg->setConstructorFor(DottedName({ MODNAME, NAME }), ctor_ref);

    exports.Set(NAME, ctor_func);

    return exports;
}


Napi::Object
SubscriberWrap::NewInstance(Napi::Env env, dds_entity_t publisher, Napi::Object participantJsObj)
{
    Napi::EscapableHandleScope scope(env);

    Napi::External< dds_entity_t > publisher_ext = Napi::External< dds_entity_t >::New(env, &publisher);
    Napi::FunctionReference *ctor_ref = env.GetInstanceData< ConstructorRegistry >()->getConstructorFor(DottedName({ MODNAME, NAME }));
    if (nullptr == ctor_ref)
    {
        throw Napi::Error::New(env, "TopicWrap::NewInstance(): Internal error: Constructor for Subscriber not available.");
    }
    Napi::Object result = ctor_ref->New({ publisher_ext, participantJsObj });

    return scope.Escape((napi_value)result).As< Napi::Object >();
}


SubscriberWrap::SubscriberWrap(Napi::CallbackInfo const& info):
    Napi::ObjectWrap< SubscriberWrap >(info),
    m_participantJsObj(NAME, "Participant"),
    m_subscriber(DDS_ENTITY_NIL)
{
    if (info.Length() != 2)
    {
        throw Napi::Error::New(info.Env(), "Subscriber constructor provided insufficient arguments.");
    }

    if (!info[0].IsExternal())
    {
        throw Napi::Error::New(info.Env(), "Subscriber constructor passed invalid publisher external argument.");
    }

    if (!info[1].IsObject())
    {
        throw Napi::Error::New(info.Env(), "Subscriber constructor passed invalid participant JS object argument.");
    }

    m_subscriber = *(info[0].As< Napi::External< dds_entity_t > >().Data());
    m_participantJsObj.reset(info[1].As< Napi::Object >());
}

SubscriberWrap::~SubscriberWrap()
{
    dds_delete(m_subscriber);

    m_subscriber = DDS_ENTITY_NIL;
}

} // end namespace DdsJs

// vim: set ts=4 sw=4 expandtab: