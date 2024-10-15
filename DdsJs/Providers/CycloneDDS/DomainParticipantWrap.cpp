/**
 * \file CycloneDDS/DomainParticipantWrap.cpp
 * \brief Contains the implementation for the \c DdsJs::DomainParticipantWrap class.
 * \author Rolando J. Nieves
 * \date 2024-10-02 12:36:23
 */

#include <DdsJs/Providers/CycloneDDS/DomainParticipantQos.hh>
#include <DdsJs/Providers/CycloneDDS/InstanceHandle.hh>
#include <DdsJs/Providers/CycloneDDS/PublisherQos.hh>
#include <DdsJs/Providers/CycloneDDS/PublisherWrap.hh>
#include <DdsJs/Providers/CycloneDDS/dds_error_util.hh>

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


Napi::Value
DomainParticipantWrap::CreatePublisher(Napi::CallbackInfo const& info)
{
    dds_qos_t *pub_qos = nullptr;

    switch(info.Length())
    {
        case 1:
            pub_qos = dds_create_qos();
            PublisherQosProxy::FromJs(info.Env(), info[0].As< PublisherQosProxy::NapiContainer >(), pub_qos);
            // fall-through intentional
        case 0:
            break;
        default:
            throw Napi::Error::New(info.Env(), "DomainParticipantWrap::createPublisher(): Invalid number of arguments provided.");
    }

    dds_entity_t the_pub = dds_create_publisher(m_participant, pub_qos, nullptr);
    if (the_pub < 0)
    {
        throw NewDdsError(info.Env(), NAME, "createPublisher", (dds_return_t)the_pub);
    }

    return PublisherWrap::NewInstance(info.Env(), the_pub, info.This().As< Napi::Object >());
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
    dds_qos_t *dp_qos = dds_create_qos();

    dds_return_t retcode = dds_get_qos(m_participant, dp_qos);
    if (retcode != DDS_RETCODE_OK)
    {
        dds_delete_qos(dp_qos);
        dp_qos = nullptr;
        throw NewDdsError(info.Env(), NAME, "getQos", retcode);
    }

    typename DomainParticipantQosProxy::NapiContainer result = DomainParticipantQosProxy::NewInstance(info.Env(), dp_qos);
    dds_delete_qos(dp_qos);
    dp_qos = nullptr;

    return result;
}

}

// vim: set ts=4 sw=4 expandtab:
