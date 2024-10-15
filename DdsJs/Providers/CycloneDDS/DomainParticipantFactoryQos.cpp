/**
 * \file CycloneDDS/DomainParticipantFactoryQos.cpp
 * \brief Contains the implementation of the \c DdsJs::DomainParticipantFactoryQos class.
 * \author Rolando J. Nieves
 * \date 2024-10-02 15:27:49
 */

#include "DomainParticipantFactoryQos.hh"


namespace DdsJs
{

const char *DomainParticipantFactoryQosProxy::EntityFactoryField::NAME = "entity_factory";

const char *DomainParticipantFactoryQosProxy::MODNAME = "DDS";

const char *DomainParticipantFactoryQosProxy::NAME = "DomainParticipantFactoryQos";

Napi::Object
DomainParticipantFactoryQosProxy::Init(Napi::Env env, Napi::Object exports, ConstructorRegistry *ctorReg)
{
    Napi::Function ctor_func = DefineClass(
        env,
        DomainParticipantFactoryQosProxy::NAME,
        {}
    );

    Napi::FunctionReference *ctor_ref = new Napi::FunctionReference();
    *ctor_ref = Napi::Persistent(ctor_func);
    ctorReg->setConstructorFor(DottedName({ DomainParticipantFactoryQosProxy::MODNAME, DomainParticipantFactoryQosProxy::NAME }), ctor_ref);

    exports.Set(DomainParticipantFactoryQosProxy::NAME, ctor_func);

    return exports;
}


DomainParticipantFactoryQosProxy::NapiContainer
DomainParticipantFactoryQosProxy::NewInstance(Napi::Env env)
{
    Napi::EscapableHandleScope scope(env);
    Napi::FunctionReference *ctor_ref =env.GetInstanceData< ConstructorRegistry >()->getConstructorFor(DottedName({ DomainParticipantFactoryQosProxy::MODNAME, DomainParticipantFactoryQosProxy::NAME }));
    if (nullptr == ctor_ref)
    {
        throw Napi::Error::New(env, "Internal error: Constructor for DomainParticipantFactoryQos not available.");
    }

    return scope.Escape((napi_value)ctor_ref->New({})).As< NapiContainer >();
}


DomainParticipantFactoryQosProxy::NapiContainer
DomainParticipantFactoryQosProxy::NewInstance(Napi::Env env, CppEntity const& cppInstance)
{
    NapiContainer result = NewInstance(env);
    FromCpp(env, cppInstance, result);

    return result;
}


void
DomainParticipantFactoryQosProxy::FromCpp(Napi::Env env, CppEntity const& cppVal, NapiContainer& jsValOut)
{
    // As of 2024-10-03 CycloneDDS version 0.10.5 does not implement the
    // "entity_factory" QoS policy.
}


void
DomainParticipantFactoryQosProxy::FromJs(Napi::Env env, NapiContainer const& jsVal, CppEntity& cppValOut)
{
    // As of 2024-10-03 CycloneDDS version 0.10.5 does not implement the
    // "entity_factory" QoS policy.
}


DomainParticipantFactoryQosProxy::DomainParticipantFactoryQosProxy(Napi::CallbackInfo const& info):
    Napi::ObjectWrap< DomainParticipantFactoryQosProxy >(info)
{
    NapiContainer this_instance = info.This().As< NapiContainer >();
    this_instance.Set(DomainParticipantFactoryQosProxy::EntityFactoryField::NAME, info.Env().Undefined());
}

} // end namespace DdsJs

// vim: set ts=4 sw=4 expandtab:
