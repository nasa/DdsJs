/**
 * \file CoreDX/DomainParticipantFactoryQos.cpp
 * \brief Contains the implementation for the \c DomainParticipantFactoryQosProxy class.
 * \author Rolando J. Nieves <rolando.j.nieves@nasa.gov>
 * \date 2024-02-05 16:11:19
 */

// --------------------------------------------------------------------------
// Local Definition
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
    jsValOut.Set(DomainParticipantFactoryQosProxy::EntityFactoryField::NAME, DomainParticipantFactoryQosProxy::EntityFactoryField::Proxy::NewInstance(env, cppVal.entity_factory));
}


void
DomainParticipantFactoryQosProxy::FromJs(Napi::Env env, NapiContainer const& jsVal, CppEntity& cppValOut)
{
    DomainParticipantFactoryQosProxy::EntityFactoryField::Proxy::FromJs(env, jsVal.Get(DomainParticipantFactoryQosProxy::EntityFactoryField::NAME).As< DomainParticipantFactoryQosProxy::EntityFactoryField::Proxy::NapiContainer >(), cppValOut.entity_factory);
}


DomainParticipantFactoryQosProxy::DomainParticipantFactoryQosProxy(Napi::CallbackInfo const& info):
    Napi::ObjectWrap< DomainParticipantFactoryQosProxy >(info)
{
    NapiContainer this_instance = info.This().As< NapiContainer >();
    this_instance.Set(DomainParticipantFactoryQosProxy::EntityFactoryField::NAME, DomainParticipantFactoryQosProxy::EntityFactoryField::Proxy::NewInstance(info.Env()));
}

} // end namespace DdsJs

// vim: set ts=4 sw=4 expandtab:
