/**
 * \file DomainParticipantQos.cpp
 * \brief Contains the implementation for the \c DomainParticipantQosProxy class.
 * \author Rolando J. Nieves
 * \date 2024-01-23 11:07:21
 */

#include "DomainParticipantQos.hh"


namespace DdsJs {

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
    jsValOut.Set(DomainParticipantQosProxy::EntityFactoryField::NAME, DomainParticipantQosProxy::EntityFactoryField::Proxy::NewInstance(env, cppVal.entity_factory));
    jsValOut.Set(DomainParticipantQosProxy::UserDataField::NAME, DomainParticipantQosProxy::UserDataField::Proxy::NewInstance(env, cppVal.user_data));
}


void
DomainParticipantQosProxy::FromJs(Napi::Env env, NapiContainer const& jsVal, CppEntity& cppValOut)
{
    DomainParticipantQosProxy::EntityFactoryField::Proxy::FromJs(env, jsVal.Get(DomainParticipantQosProxy::EntityFactoryField::NAME).As< DomainParticipantQosProxy::EntityFactoryField::Proxy::NapiContainer >(), cppValOut.entity_factory);
    DomainParticipantQosProxy::UserDataField::Proxy::FromJs(env, jsVal.Get(DomainParticipantQosProxy::UserDataField::NAME).As< DomainParticipantQosProxy::UserDataField::Proxy::NapiContainer >(), cppValOut.user_data);
}


DomainParticipantQosProxy::DomainParticipantQosProxy(Napi::CallbackInfo const& info):
    Napi::ObjectWrap< DomainParticipantQosProxy >(info)
{
    NapiContainer this_instance = info.This().As< NapiContainer >();
    this_instance.Set(DomainParticipantQosProxy::EntityFactoryField::NAME, DomainParticipantQosProxy::EntityFactoryField::Proxy::NewInstance(info.Env()));
    this_instance.Set(DomainParticipantQosProxy::UserDataField::NAME, DomainParticipantQosProxy::UserDataField::Proxy::NewInstance(info.Env()));
}

} // end namespace DdsJs

// vim: set ts=4 sw=4 expandtab:
