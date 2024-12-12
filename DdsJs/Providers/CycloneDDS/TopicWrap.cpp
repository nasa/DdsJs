/**
 * \file CycloneDDS/TopicWrap.cpp
 * \brief Contains the implementation of the \c DdsJs::TopicWrap class for CycloneDDS.
 * \author Rolando J. Nieves
 * \date 2024-12-06 09:18:36
 */

// --------------------------------------------------------------------------
// Standard C++ Library
#include <cstring>

// --------------------------------------------------------------------------
// DdsJs CycloneDDS-Specific
#include <DdsJs/Providers/CycloneDDS/TopicQos.hh>
#include <DdsJs/Providers/CycloneDDS/dds_error_util.hh>
#include <DdsJs/Providers/CycloneDDS/dds_qos_util.hh>

// --------------------------------------------------------------------------
// Local Definition
#include "TopicWrap.hh"


namespace DdsJs
{

const char *TopicWrap::MODNAME = "DDS";

const char *TopicWrap::NAME = "Topic";

Napi::Value
TopicWrap::GetName(Napi::CallbackInfo const& info)
{
    char topic_name_buffer[TopicWrap::TOPIC_NAME_MAX_LEN + 1u];

    memset(topic_name_buffer, 0x00, TopicWrap::TOPIC_NAME_MAX_LEN + 1u);
    dds_return_t result = dds_get_name(m_topic, topic_name_buffer, TopicWrap::TOPIC_NAME_MAX_LEN);
    if (result < 0)
    {
        throw NewDdsError(info.Env(), DottedName({ MODNAME, NAME }).flat(), "getName", result);
    }

    return Napi::String::New(info.Env(), topic_name_buffer);
}


Napi::Value
TopicWrap::GetTypeName(Napi::CallbackInfo const& info)
{
    char type_name_buffer[TopicWrap::TOPIC_NAME_MAX_LEN + 1u];

    memset(type_name_buffer, 0x00, TopicWrap::TOPIC_NAME_MAX_LEN + 1u);
    dds_return_t result = dds_get_type_name(m_topic, type_name_buffer, TopicWrap::TOPIC_NAME_MAX_LEN);
    if (result < 0)
    {
        throw NewDdsError(info.Env(), DottedName({ MODNAME, NAME }).flat(), "getTypeName", result);
    }

    return Napi::String::New(info.Env(), type_name_buffer);
}


Napi::Value
TopicWrap::GetQos(Napi::CallbackInfo const& info)
{
    CycloneDDS::QosUniquePtr dp_qos(dds_create_qos());

    dds_return_t retcode = dds_get_qos(m_topic, dp_qos.get());
    if (retcode != DDS_RETCODE_OK)
    {
        throw NewDdsError(info.Env(), DottedName({ MODNAME, NAME }).flat(), "getQos", retcode);
    }

    return TopicQosProxy::NewInstance(info.Env(), dp_qos.get());
}


Napi::Object
TopicWrap::Init(Napi::Env env, Napi::Object exports, ConstructorRegistry *ctorReg)
{
    Napi::Function ctor_func = DefineClass(
        env,
        NAME,
        {
            InstanceMethod("getName", &TopicWrap::GetName, napi_enumerable),
            InstanceMethod("getTypeName", &TopicWrap::GetTypeName, napi_enumerable),
            InstanceMethod("getQos", &TopicWrap::GetQos, napi_enumerable)
        }
    );

    Napi::FunctionReference *ctor_ref = new Napi::FunctionReference();
    *ctor_ref = Napi::Persistent(ctor_func);
    ctorReg->setConstructorFor(DottedName({ MODNAME, NAME }), ctor_ref);

    exports.Set(NAME, ctor_func);
    
    return exports;
}


Napi::Object
TopicWrap::NewInstance(Napi::Env env, dds_entity_t topic, std::string const& name, CycloneDDS::TypeInformation typeInfo)
{
    Napi::EscapableHandleScope scope(env);
    Napi::External< dds_entity_t > topic_arg = Napi::External< dds_entity_t >::New(env, &topic);
    Napi::External< CycloneDDS::TypeInformation > type_info_arg = Napi::External< CycloneDDS::TypeInformation >::New(env, &typeInfo);
    Napi::FunctionReference *ctor_ref = env.GetInstanceData< ConstructorRegistry >()->getConstructorFor(DottedName({ MODNAME, NAME }));
    if (nullptr == ctor_ref)
    {
        throw Napi::Error::New(env, "Internal error: Constructor for Topic not available.");
    }

    Napi::Object obj = ctor_ref->New({ topic_arg, type_info_arg });

    return scope.Escape(napi_value(obj)).ToObject();
}


TopicWrap::TopicWrap(Napi::CallbackInfo const& info):
    Napi::ObjectWrap< TopicWrap >(info),
    m_participantJsObj(DottedName({ MODNAME, NAME }).flat(), "Participant"),
    m_topic(DDS_ENTITY_NIL)
{
    if (info.Length() != 2)
    {
        throw Napi::Error::New(info.Env(), "Topic constructor: Invalid number of arguments provided.");
    }

    if (!info[0].IsExternal())
    {
        throw Napi::Error::New(info.Env(), "Topic constructor: Invalid first argument provided.");
    }

    if (!info[1].IsExternal())
    {
        throw Napi::Error::New(info.Env(), "Topic constructor: Invalid second argument provided.");
    }

    dds_entity_t *topic_maybe = info[0].As< Napi::External< dds_entity_t > >().Data();
    if (nullptr == topic_maybe)
    {
        throw Napi::Error::New(info.Env(), "Topic constructor: Native topic instance not available.");
    }
    m_topic = *topic_maybe;

    CycloneDDS::TypeInformation const* type_info_maybe = info[1].As< Napi::External< CycloneDDS::TypeInformation > >().Data();
    if (nullptr == type_info_maybe)
    {
        throw Napi::Error::New(info.Env(), "Topic constructor: Type information not available.");
    }

    m_readerClassName = type_info_maybe->jsReaderFqn;
    m_writerClassName = type_info_maybe->jsWriterFqn;
}

} // end namespace DdsJs

// vim: set ts=4 sw=4 expandtab:
