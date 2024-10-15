/**
 * \file CycloneDDS/DomainParticipantQos.cpp
 * \brief Contains the implementation for the \c DomainParticipantQosProxy class.
 * \author Rolando J. Nieves
 * \date 2024-10-02 11:09:39
 */

#include "DomainParticipantQos.hh"


namespace DdsJs
{

const char *DomainParticipantQosProxy::EntityFactoryField::NAME = "entity_factory";

const char *DomainParticipantQosProxy::UserDataField::NAME = "user_data";

const char *DomainParticipantQosProxy::MODNAME = "DDS";

const char *DomainParticipantQosProxy::NAME = "DomainParticipantQos";

Napi::Object
DomainParticipantQosProxy::Init(Napi::Env env, Napi::Object exports, ConstructorRegistry *ctorReg)
{
    Napi::Function ctor_func = DefineClass(
        env,
        DomainParticipantQosProxy::NAME,
        {}
    );

    Napi::FunctionReference *ctor_ref = new Napi::FunctionReference();
    *ctor_ref = Napi::Persistent(ctor_func);
    ctorReg->setConstructorFor(DottedName({ DomainParticipantQosProxy::MODNAME, DomainParticipantQosProxy::NAME }), ctor_ref);

    exports.Set(DomainParticipantQosProxy::NAME, ctor_func);

    return exports;
}


DomainParticipantQosProxy::NapiContainer
DomainParticipantQosProxy::NewInstance(Napi::Env env)
{
    Napi::EscapableHandleScope scope(env);
    Napi::FunctionReference *ctor_ref =env.GetInstanceData< ConstructorRegistry >()->getConstructorFor(DottedName({ DomainParticipantQosProxy::MODNAME, DomainParticipantQosProxy::NAME }));
    if (nullptr == ctor_ref)
    {
        throw Napi::Error::New(env, "Internal error: Constructor for DomainParticipantQos not available.");
    }

    return scope.Escape((napi_value)ctor_ref->New({})).As< NapiContainer >();
}


DomainParticipantQosProxy::NapiContainer
DomainParticipantQosProxy::NewInstance(Napi::Env env, CppEntity const& cppInstance)
{
    NapiContainer result = NewInstance(env);
    FromCpp(env, cppInstance, result);

    return result;
}


void
DomainParticipantQosProxy::FromCpp(Napi::Env env, CppEntity const& cppVal, NapiContainer& jsValOut)
{
    // As of 2024-10-03 CycloneDDS version 0.10.5 does not implement the
    // "entity_factory" QoS policy.

    if (dds_qget_userdata(cppVal, nullptr, nullptr))
    {
        jsValOut.Set(DomainParticipantQosProxy::UserDataField::NAME, DomainParticipantQosProxy::UserDataField::Proxy::NewInstance(env, cppVal));
    }
}


void
DomainParticipantQosProxy::FromJs(Napi::Env env, NapiContainer const& jsVal, CppEntity& cppValOut)
{
    // As of 2024-10-03 CycloneDDS version 0.10.5 does not implement the
    // "entity_factory" QoS policy.

    auto user_data_field = jsVal.Get(DomainParticipantQosProxy::UserDataField::NAME);
    if (!user_data_field.IsUndefined())
    {
        DomainParticipantQosProxy::UserDataField::Proxy::FromJs(env, user_data_field.As< DomainParticipantQosProxy::UserDataField::Proxy::NapiContainer >(), cppValOut);
    }
}


DomainParticipantQosProxy::DomainParticipantQosProxy(Napi::CallbackInfo const& info):
    Napi::ObjectWrap< DomainParticipantQosProxy >(info)
{
    NapiContainer this_instance = info.This().As< NapiContainer >();

    this_instance.Set(DomainParticipantQosProxy::EntityFactoryField::NAME, info.Env().Undefined());
    this_instance.Set(DomainParticipantQosProxy::UserDataField::NAME, info.Env().Undefined());
}

} // end namespace DdsJs

// vim: set ts=4 sw=4 expandtab:
