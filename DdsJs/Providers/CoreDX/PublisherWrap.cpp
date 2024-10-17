/**
 * \file CoreDX/PublisherWrap.cpp
 * \brief Contains the implementation for the \c PublisherWrap class.
 * \author Rolando J. Nieves <rolando.j.nieves@nasa.gov>
 * \date 2024-02-02 14:01:06
 */

// --------------------------------------------------------------------------
// Standard C++ Library
#include <sstream>

// --------------------------------------------------------------------------
// DdsJs CoreDX-Specific
#include <DdsJs/Providers/CoreDX/DataWriterQos.hh>
#include <DdsJs/Providers/CoreDX/DataWriterWrap.hh>
#include <DdsJs/Providers/CoreDX/PublisherQos.hh>
#include <DdsJs/Providers/CoreDX/TopicQos.hh>
#include <DdsJs/Providers/CoreDX/TopicWrap.hh>
#include <DdsJs/Providers/CoreDX/dds_error_util.hh>

// --------------------------------------------------------------------------
// Local Definition
#include "PublisherWrap.hh"


namespace DdsJs
{

const char *PublisherWrap::MODNAME = "DDS";

const char *PublisherWrap::NAME = "Publisher";


Napi::Value
PublisherWrap::BeginCoherentChanges(Napi::CallbackInfo const& info)
{
    DDS::ReturnCode_t retcode = m_publisher.get(info.Env(), "beginCoherentChanges")->begin_coherent_changes();
    if (retcode != DDS::RETCODE_OK)
    {
        throw NewDdsError(info.Env(), NAME, "beginCoherentChanges", retcode);
    }

    return info.Env().Undefined();
}


Napi::Value
PublisherWrap::CopyFromTopicQos(Napi::CallbackInfo const& info)
{
    if (info.Length() != 1)
    {
        std::stringstream msg;

        msg << NAME
            << ".copyFromTopicQos() called with invalid number of arguments.";
        throw Napi::Error::New(info.Env(), msg.str());
    }

    DDS::DataWriterQos result;
    DDS::TopicQos input;

    TopicQosProxy::FromJs(info.Env(), info[0].As< TopicQosProxy::NapiContainer >(), input);

    DDS::ReturnCode_t retcode = m_publisher.get(info.Env(), "copyFromTopicQos")->copy_from_topic_qos(result, input);
    if (retcode != DDS::RETCODE_OK)
    {
        throw NewDdsError(info.Env(), NAME, "copyFromTopicQos", retcode);
    }

    return DataWriterQosProxy::NewInstance(info.Env(), result);
}


Napi::Value
PublisherWrap::CreateDataWriter(Napi::CallbackInfo const& info)
{
    static const char *METHOD_NAME = "createDataWriter";

    DDS::DataWriterQos dr_qos;
    DDS::Publisher *the_pub = m_publisher.get(info.Env(), METHOD_NAME);
    TopicWrap *topic_wrapper = nullptr;
    DDS::Topic *topic = nullptr;

    the_pub->get_default_datawriter_qos(dr_qos);
    switch(info.Length())
    {
    case 2:
        DataWriterQosProxy::FromJs(info.Env(), info[1].As< DataWriterQosProxy::NapiContainer >(), dr_qos);
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

    DDS::DataWriter *reader = the_pub->create_datawriter(topic, dr_qos, nullptr, 0);
    if (nullptr == reader)
    {
        throw NewDdsError(info.Env(), DottedName({ MODNAME, NAME }).flat(), METHOD_NAME, DDS::RETCODE_ERROR);
    }

    return DataWriterWrapFactory::NewInstance(info.Env(), reader, topic_wrapper->getWriterJsClassName());
}


Napi::Value
PublisherWrap::DeleteContainedEntities(Napi::CallbackInfo const& info)
{
    DDS::ReturnCode_t retcode = m_publisher.get(info.Env(), "deleteContainedEntities")->delete_contained_entities();
    if (retcode != DDS::RETCODE_OK)
    {
        throw NewDdsError(info.Env(), NAME, "deleteContainedEntities", retcode);
    }

    return info.Env().Undefined();
}


Napi::Value
PublisherWrap::DeleteDataWriter(Napi::CallbackInfo const& info)
{
    throw Napi::Error::New(info.Env(), "Publisher.deleteDataWriter() not implemented.");
}


Napi::Value
PublisherWrap::Enable(Napi::CallbackInfo const& info)
{
    DDS::ReturnCode_t retcode = m_publisher.get(info.Env(), "enable")->enable();
    if (retcode != DDS::RETCODE_OK)
    {
        throw NewDdsError(info.Env(), NAME, "enable", retcode);
    }

    return info.Env().Undefined();
}


Napi::Value
PublisherWrap::EndCoherentChanges(Napi::CallbackInfo const& info)
{
    DDS::ReturnCode_t retcode = m_publisher.get(info.Env(), "endCoherentChanges")->end_coherent_changes();
    if (retcode != DDS::RETCODE_OK)
    {
        throw NewDdsError(info.Env(), NAME, "endCoherentChanges", retcode);
    }

    return info.Env().Undefined();
}


Napi::Value
PublisherWrap::GetDefaultDataWriterQos(Napi::CallbackInfo const& info)
{
    DDS::DataWriterQos result;
    DDS::ReturnCode_t retcode = m_publisher.get(info.Env(), "getDefaultDataWriterQos")->get_default_datawriter_qos(result);
    if (retcode != DDS::RETCODE_OK)
    {
        throw NewDdsError(info.Env(), NAME, "getDefaultDataWriterQos", retcode);
    }

    return DataWriterQosProxy::NewInstance(info.Env(), result);
}


Napi::Value
PublisherWrap::GetInstanceHandle(Napi::CallbackInfo const& info)
{
    throw Napi::Error::New(info.Env(), "Publisher.getInstanceHandle() not implemented.");
}


Napi::Value
PublisherWrap::GetParticipant(Napi::CallbackInfo const& info)
{
    return m_participantJsObj.get(info.Env(), "getParticipant");
}


Napi::Value
PublisherWrap::GetQos(Napi::CallbackInfo const& info)
{
    DDS::PublisherQos result;
    DDS::ReturnCode_t retcode = m_publisher.get(info.Env(), "getQos")->get_qos(result);
    if (retcode != DDS::RETCODE_OK)
    {
        throw NewDdsError(info.Env(), NAME, "getQos", retcode);
    }

    return PublisherQosProxy::NewInstance(info.Env(), result);
}


Napi::Value
PublisherWrap::GetStatusChanges(Napi::CallbackInfo const& info)
{
    throw Napi::Error::New(info.Env(), "Publisher.getStatusChanges() not implemented.");
}


Napi::Value
PublisherWrap::LookupDataWriter(Napi::CallbackInfo const& info)
{
    throw Napi::Error::New(info.Env(), "Publisher.lookupDataWriter() not implemented.");
}


Napi::Value
PublisherWrap::ResumePublications(Napi::CallbackInfo const& info)
{
    DDS::ReturnCode_t retcode = m_publisher.get(info.Env(), "resumePublications")->resume_publications();
    if (retcode != DDS::RETCODE_OK)
    {
        throw NewDdsError(info.Env(), NAME, "resumePublications", retcode);
    }

    return info.Env().Undefined();
}


Napi::Value
PublisherWrap::SetDefaultDataWriterQos(Napi::CallbackInfo const& info)
{
    if (info.Length() != 1)
    {
        std::stringstream msg;

        msg << NAME
            << ".setDefaultDataWriterQos() called with invalid number of arguments.";
        throw Napi::Error::New(info.Env(), msg.str());
    }

    DDS::DataWriterQos input;
    DataWriterQosProxy::FromJs(info.Env(), info[0].As< DataWriterQosProxy::NapiContainer >(), input);
    DDS::ReturnCode_t retcode = m_publisher.get(info.Env(), "setDefaultDataWriterQos")->set_default_datawriter_qos(input);
    if (retcode != DDS::RETCODE_OK)
    {
        throw NewDdsError(info.Env(), NAME, "setDefaultDataWriterQos", retcode);
    }

    return info.Env().Undefined();
}


Napi::Value
PublisherWrap::SetQos(Napi::CallbackInfo const& info)
{
    if (info.Length() != 1)
    {
        std::stringstream msg;

        msg << NAME
            << ".setQos() called with invalid number of arguments.";
        throw Napi::Error::New(info.Env(), msg.str());
    }

    DDS::PublisherQos input;
    PublisherQosProxy::FromJs(info.Env(), info[0].As< PublisherQosProxy::NapiContainer >(), input);
    DDS::ReturnCode_t retcode = m_publisher.get(info.Env(), "setQos")->set_qos(input);
    if (retcode != DDS::RETCODE_OK)
    {
        throw NewDdsError(info.Env(), NAME, "setQos", retcode);
    }

    return info.Env().Undefined();
}


Napi::Value
PublisherWrap::SuspendPublications(Napi::CallbackInfo const& info)
{
    DDS::ReturnCode_t retcode = m_publisher.get(info.Env(), "suspendPublications")->suspend_publications();
    if (retcode != DDS::RETCODE_OK)
    {
        throw NewDdsError(info.Env(), NAME, "suspendPublications", retcode);
    }

    return info.Env().Undefined();
}


Napi::Object
PublisherWrap::Init(Napi::Env env, Napi::Object exports, ConstructorRegistry *ctorReg)
{
    Napi::Function ctor_func = DefineClass(
        env,
        NAME,
        {
            InstanceMethod("beginCoherentChanges", &PublisherWrap::BeginCoherentChanges, napi_enumerable),
            InstanceMethod("copyFromTopicQos", &PublisherWrap::CopyFromTopicQos, napi_enumerable),
            InstanceMethod("createDataWriter", &PublisherWrap::CreateDataWriter, napi_enumerable),
            InstanceMethod("deleteContainedEntities", &PublisherWrap::DeleteContainedEntities, napi_enumerable),
            InstanceMethod("deleteDataWriter", &PublisherWrap::DeleteDataWriter, napi_enumerable),
            InstanceMethod("enable", &PublisherWrap::Enable, napi_enumerable),
            InstanceMethod("endCoherentChanges", &PublisherWrap::EndCoherentChanges, napi_enumerable),
            InstanceMethod("getDefaultDataWriterQos", &PublisherWrap::GetDefaultDataWriterQos, napi_enumerable),
            InstanceMethod("getInstanceHandle", &PublisherWrap::GetInstanceHandle, napi_enumerable),
            InstanceMethod("getParticipant", &PublisherWrap::GetParticipant, napi_enumerable),
            InstanceMethod("getQos", &PublisherWrap::GetQos, napi_enumerable),
            InstanceMethod("getStatusChanges", &PublisherWrap::GetStatusChanges, napi_enumerable),
            InstanceMethod("lookupDataWriter", &PublisherWrap::LookupDataWriter, napi_enumerable),
            InstanceMethod("resumePublications", &PublisherWrap::ResumePublications, napi_enumerable),
            InstanceMethod("setDefaultDataWriterQos", &PublisherWrap::SetDefaultDataWriterQos, napi_enumerable),
            InstanceMethod("setQos", &PublisherWrap::SetQos, napi_enumerable),
            InstanceMethod("suspendPublications", &PublisherWrap::SuspendPublications, napi_enumerable)
        }
    );

    Napi::FunctionReference *ctor_ref = new Napi::FunctionReference();
    *ctor_ref = Napi::Persistent(ctor_func);
    ctorReg->setConstructorFor(DottedName({ MODNAME, NAME }), ctor_ref);

    exports.Set(NAME, ctor_func);
    return exports;
}

Napi::Object
PublisherWrap::NewInstance(Napi::Env env, DDS::Publisher *publisher, Napi::Object participantJsObj)
{
    Napi::EscapableHandleScope scope(env);

    Napi::External< DDS::Publisher > publisher_ext = Napi::External< DDS::Publisher >::New(env, publisher);
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
    m_publisher(NAME)
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

    m_publisher.reset(info[0].As< Napi::External< DDS::Publisher > >().Data());
    m_participantJsObj.reset(info[1].As< Napi::Object >());
}

} // end namespace DdsJs

// vim: set ts=4 sw=4 expandtab:
