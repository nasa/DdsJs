/**
 * \file CycloneDDS/PublisherWrap.cpp
 * \brief Contains the implementation for the \c DdsJs::PublisherWrap class.
 * \author Rolando J. Nieves
 * \date 2024-10-02 17:04:22
 */

// --------------------------------------------------------------------------
// Standard C++ Library
 #include <string>

// --------------------------------------------------------------------------
// DdsJs CycloneDDS-Specific
#include <DdsJs/Providers/CycloneDDS/DataWriterQos.hh>
#include <DdsJs/Providers/CycloneDDS/DataWriterWrap.hh>
#include <DdsJs/Providers/CycloneDDS/PublisherQos.hh>
#include <DdsJs/Providers/CycloneDDS/TopicWrap.hh>
#include <DdsJs/Providers/CycloneDDS/dds_error_util.hh>
#include <DdsJs/Providers/CycloneDDS/dds_qos_util.hh>

// --------------------------------------------------------------------------
// Local Definition
#include "PublisherWrap.hh"


namespace DdsJs
{

const char *PublisherWrap::MODNAME = "DDS";

const char *PublisherWrap::NAME = "Publisher";


Napi::Value
PublisherWrap::CreateDataWriter(Napi::CallbackInfo const& info)
{
    TopicWrap *topic_wrap_maybe = nullptr;
    CycloneDDS::QosUniquePtr dw_qos;

    switch(info.Length())
    {
        case 2:
        {
            dw_qos.reset(dds_create_qos());
            // Temporary get to bare-bald pointer so we can bind to ref in FromJs()
            dds_qos_t *the_qos = dw_qos.get();
            DataWriterQosProxy::FromJs(info.Env(), info[1].As< DataWriterQosProxy::NapiContainer >(), the_qos);
            // Fall-through intentional
        }
        case 1:
            topic_wrap_maybe = TopicWrap::Unwrap(info[0].As< Napi::Object >());
            break;
        default:
            throw Napi::Error::New(info.Env(), "Publisher.createDataWriter(): Invalid number of arguments provided.");
    }

    if (nullptr == topic_wrap_maybe)
    {
        throw Napi::Error::New(info.Env(), "Publisher.createDataWriter(): Topic object unavailable.");
    }

    dds_entity_t the_writer = dds_create_writer(m_publisher, topic_wrap_maybe->useTopic(), dw_qos.get(), nullptr);
    dw_qos = nullptr;
    if (the_writer <= 0)
    {
        throw NewDdsError(info.Env(), DottedName({ MODNAME, NAME }).flat(), "createDataWriter", (dds_return_t)the_writer);
    }

    return DataWriterWrapFactory::NewInstance(info.Env(), the_writer, topic_wrap_maybe->writerClassName());
}


Napi::Value
PublisherWrap::GetParticipant(Napi::CallbackInfo const& info)
{
    return m_participantJsObj.get(info.Env(), "getParticipant");
}


Napi::Value
PublisherWrap::GetQos(Napi::CallbackInfo const& info)
{
    CycloneDDS::QosUniquePtr pub_qos(dds_create_qos());

    dds_return_t get_result = dds_get_qos(m_publisher, pub_qos.get());
    if (get_result != DDS_RETCODE_OK)
    {
        throw NewDdsError(info.Env(), DottedName({ MODNAME, NAME }).flat(), "getQos", get_result);
    }

    return PublisherQosProxy::NewInstance(info.Env(), pub_qos.get());
}


Napi::Object
PublisherWrap::Init(Napi::Env env, Napi::Object exports, ConstructorRegistry *ctorReg)
{
    Napi::Function ctor_func = DefineClass(
        env,
        NAME,
        {
            InstanceMethod("createDataWriter", &PublisherWrap::CreateDataWriter, napi_enumerable),
            InstanceMethod("getParticipant", &PublisherWrap::GetParticipant, napi_enumerable),
            InstanceMethod("getQos", &PublisherWrap::GetQos, napi_enumerable)
        }
    );

    Napi::FunctionReference *ctor_ref = new Napi::FunctionReference();
    *ctor_ref = Napi::Persistent(ctor_func);
    ctorReg->setConstructorFor(DottedName({ MODNAME, NAME }), ctor_ref);

    exports.Set(NAME, ctor_func);

    return exports;
}


Napi::Object
PublisherWrap::NewInstance(Napi::Env env, dds_entity_t publisher, Napi::Object participantJsObj)
{
    Napi::EscapableHandleScope scope(env);

    Napi::External< dds_entity_t > publisher_ext = Napi::External< dds_entity_t >::New(env, &publisher);
    Napi::FunctionReference *ctor_ref = env.GetInstanceData< ConstructorRegistry >()->getConstructorFor(DottedName({ MODNAME, NAME }));
    if (nullptr == ctor_ref)
    {
        throw Napi::Error::New(env, "TopicWrap::NewInstance(): Internal error: Constructor for Publisher not available.");
    }
    Napi::Object result = ctor_ref->New({ publisher_ext, participantJsObj });

    return scope.Escape((napi_value)result).As< Napi::Object >();
}


PublisherWrap::PublisherWrap(Napi::CallbackInfo const& info):
    Napi::ObjectWrap< PublisherWrap >(info),
    m_participantJsObj(NAME, "Participant"),
    m_publisher(DDS_ENTITY_NIL)
{
    if (info.Length() != 2)
    {
        throw Napi::Error::New(info.Env(), "Publisher constructor provided insufficient arguments.");
    }

    if (!info[0].IsExternal())
    {
        throw Napi::Error::New(info.Env(), "Publisher constructor passed invalid publisher external argument.");
    }

    if (!info[1].IsObject())
    {
        throw Napi::Error::New(info.Env(), "Publisher constructor passed invalid participant JS object argument.");
    }

    m_publisher = *(info[0].As< Napi::External< dds_entity_t > >().Data());
    m_participantJsObj.reset(info[1].As< Napi::Object >());
}

PublisherWrap::~PublisherWrap()
{
    dds_delete(m_publisher);

    m_publisher = DDS_ENTITY_NIL;
}

} // end namespace DdsJs

// vim: set ts=4 sw=4 expandtab:
