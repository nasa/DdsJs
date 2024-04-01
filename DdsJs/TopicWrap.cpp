/**
 * \file TopicWrap.cpp
 * \brief Contains the implementation for the \c TopicWrap class.
 * \author Rolando J. Nieves <rolando.j.nieves@nasa.gov>
 * \date 2024-01-31 13:44:55
 */

#include <sstream>

#include <DdsJs/DomainParticipantWrap.hh>
#include <DdsJs/dds_error_util.hh>

#include "TopicWrap.hh"


namespace DdsJs {

const char *TopicWrap::MODNAME = "DDS";

const char *TopicWrap::NAME = "Topic";


Napi::Value
TopicWrap::Enable(Napi::CallbackInfo const& info)
{
    DDS::ReturnCode_t result = m_topic.get(info.Env(), "enable")->enable();
    if (result != DDS::RETCODE_OK)
    {
        throw NewDdsError(info.Env(), DottedName({ TopicWrap::MODNAME, TopicWrap::NAME }).flat(), "enable", result);
    }

    return info.Env().Undefined();
}


Napi::Value
TopicWrap::GetInconsistentTopicStatus(Napi::CallbackInfo const& info)
{
    throw Napi::Error::New(info.Env(), "Topic.getInconsistentTopicStatus() not implemented.");
}


Napi::Value
TopicWrap::GetName(Napi::CallbackInfo const& info)
{
    return Napi::String::New(info.Env(), m_topic.get(info.Env(), "getName")->get_name());
}


Napi::Value
TopicWrap::GetParticipant(Napi::CallbackInfo const& info)
{
    return m_participantJsObj.get(info.Env(), "getParticipant");
}


Napi::Value
TopicWrap::GetQos(Napi::CallbackInfo const& info)
{
    throw Napi::Error::New(info.Env(), "Topic.getQos() not implemented.");
}


Napi::Value
TopicWrap::GetStatusChanges(Napi::CallbackInfo const& info)
{
    throw Napi::Error::New(info.Env(), "Topic.getStatusChanges() not implemented.");
}


Napi::Value
TopicWrap::GetTypeName(Napi::CallbackInfo const& info)
{
    return Napi::String::New(info.Env(), m_topic.get(info.Env(), "getTypeName")->get_type_name());
}


Napi::Value
TopicWrap::SetQos(Napi::CallbackInfo const& info)
{
    throw Napi::Error::New(info.Env(), "Topic.setQos() not implemented.");
}


Napi::Object
TopicWrap::Init(Napi::Env env, Napi::Object exports, ConstructorRegistry *ctorReg)
{
    Napi::Function ctor_func = DefineClass(
        env,
        NAME,
        {
            InstanceMethod("enable", &TopicWrap::Enable, napi_enumerable),
            InstanceMethod("getInconsistentTopicStatus", &TopicWrap::GetInconsistentTopicStatus, napi_enumerable),
            InstanceMethod("getName", &TopicWrap::GetName, napi_enumerable),
            InstanceMethod("geParticipant", &TopicWrap::GetParticipant, napi_enumerable),
            InstanceMethod("getQos", &TopicWrap::GetQos, napi_enumerable),
            InstanceMethod("getStatusChanges", &TopicWrap::GetStatusChanges, napi_enumerable),
            InstanceMethod("getTypeName", &TopicWrap::GetTypeName, napi_enumerable),
            InstanceMethod("setQos", &TopicWrap::SetQos, napi_enumerable)
        }
    );

    Napi::FunctionReference *ctor_ref = new Napi::FunctionReference();
    *ctor_ref = Napi::Persistent(ctor_func);
    ctorReg->setConstructorFor(DottedName({ MODNAME, NAME }), ctor_ref);

    exports.Set(NAME, ctor_func);
    return exports;
}


Napi::Object
TopicWrap::NewInstance(Napi::Env env, DDS::Topic *topic, Napi::Object participantJsObj)
{
    Napi::EscapableHandleScope scope(env);

    Napi::External< DDS::Topic > topic_ext = Napi::External< DDS::Topic >::New(env, topic);
    Napi::FunctionReference *ctor_ref = env.GetInstanceData< ConstructorRegistry >()->getConstructorFor(DottedName({ MODNAME, NAME }));
    if (nullptr == ctor_ref)
    {
        throw Napi::Error::New(env, "TopicWrap::NewInstance(): Internal error: Constructor for Topic not available.");
    }
    Napi::Object result = ctor_ref->New({ topic_ext, participantJsObj });

    return scope.Escape((napi_value)result).As< Napi::Object >();
}


TopicWrap::TopicWrap(Napi::CallbackInfo const& info):
    Napi::ObjectWrap< TopicWrap >(info),
    m_topic(DottedName({ MODNAME, NAME }).flat()),
    m_participantJsObj(DottedName({ MODNAME, NAME }).flat(), "participant")
{
    if (info.Length() != 2)
    {
        throw Napi::Error::New(info.Env(), "Topic constructor provided insufficient arguments.");
    }

    if (!info[0].IsExternal())
    {
        throw Napi::Error::New(info.Env(), "Topic constructor passed invalid topic external argument.");
    }

    if (!info[1].IsObject())
    {
        throw Napi::Error::New(info.Env(), "Topic constructor passed invalid participant JS object argument.");
    }

    m_topic.reset(info[0].As< Napi::External< DDS::Topic > >().Data());
    m_participantJsObj.reset(info[1].As< Napi::Object >());
}


std::string
TopicWrap::getReaderJsClassName() const
{
    DomainParticipantWrap *particip_wrap = m_participantJsObj.getWrapped< DomainParticipantWrap >("getWriterJsClassName");

    return particip_wrap->readerJsClassNameFor(m_topic.get("getReaderJsClassName")->get_type_name());
}


std::string
TopicWrap::getWriterJsClassName() const
{
    DomainParticipantWrap *particip_wrap = m_participantJsObj.getWrapped< DomainParticipantWrap >("getWriterJsClassName");

    return particip_wrap->writerJsClassNameFor(m_topic.get("getWriterJsClassName")->get_type_name());
}

} // end namespace DdsJs

// vim: set ts=4 sw=4 expandtab:
