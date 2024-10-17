/**
 * \file CoreDX/SubscriberQos.cpp
 * \brief Contains the implementation for the \c SubscriberQosProxy class.
 * \author Rolando J. Nieves <rolando.j.nieves@nasa.gov>
 * \date 2024-02-02 11:13:57
 */

// --------------------------------------------------------------------------
// Local Definition
#include "SubscriberQos.hh"


namespace DdsJs
{

const char *SubscriberQosProxy::EntityFactoryField::NAME = "entity_factory";

const char *SubscriberQosProxy::GroupDataField::NAME = "group_data";

const char *SubscriberQosProxy::PartitionField::NAME = "partition";

const char *SubscriberQosProxy::PresentationField::NAME = "presentation";

const char *SubscriberQosProxy::MODNAME = "DDS";

const char *SubscriberQosProxy::NAME = "SubscriberQos";


void
SubscriberQosProxy::FromCpp(Napi::Env env, CppEntity const& cppVal, NapiContainer& jsValOut)
{
    jsValOut.Set(EntityFactoryField::NAME, EntityFactoryField::Proxy::NewInstance(env, cppVal.entity_factory));
    jsValOut.Set(GroupDataField::NAME, GroupDataField::Proxy::NewInstance(env, cppVal.group_data));
    jsValOut.Set(PartitionField::NAME, PartitionField::Proxy::NewInstance(env, cppVal.partition));
    jsValOut.Set(PresentationField::NAME, PresentationField::Proxy::NewInstance(env, cppVal.presentation));
}


void
SubscriberQosProxy::FromJs(Napi::Env env, NapiContainer const& jsVal, CppEntity& cppValOut)
{
    EntityFactoryField::Proxy::FromJs(env, jsVal.Get(EntityFactoryField::NAME).As< EntityFactoryField::Proxy::NapiContainer >(), cppValOut.entity_factory);
    GroupDataField::Proxy::FromJs(env, jsVal.Get(GroupDataField::NAME).As< GroupDataField::Proxy::NapiContainer >(), cppValOut.group_data);
    PartitionField::Proxy::FromJs(env, jsVal.Get(PartitionField::NAME).As< PartitionField::Proxy::NapiContainer >(), cppValOut.partition);
    PresentationField::Proxy::FromJs(env, jsVal.Get(PresentationField::NAME).As< PresentationField::Proxy::NapiContainer >(), cppValOut.presentation);
}


Napi::Object
SubscriberQosProxy::Init(Napi::Env env, Napi::Object exports, ConstructorRegistry *ctorReg)
{
    Napi::Function ctor_func = DefineClass(
        env,
        SubscriberQosProxy::NAME,
        {}
    );

    Napi::FunctionReference *ctor_ref = new Napi::FunctionReference();
    *ctor_ref = Napi::Persistent(ctor_func);
    ctorReg->setConstructorFor(DottedName({ SubscriberQosProxy::MODNAME, SubscriberQosProxy::NAME }), ctor_ref);

    exports.Set(SubscriberQosProxy::NAME, ctor_func);

    return exports;
}


SubscriberQosProxy::NapiContainer
SubscriberQosProxy::NewInstance(Napi::Env env)
{
    Napi::EscapableHandleScope scope(env);
    Napi::FunctionReference *ctor_ref = env.GetInstanceData< ConstructorRegistry >()->getConstructorFor(DottedName({ SubscriberQosProxy::MODNAME, SubscriberQosProxy::NAME }));
    if (nullptr == ctor_ref)
    {
        throw Napi::Error::New(env, "Internal error: Constructor for SubscriberQos not available.");
    }

    return scope.Escape((napi_value)ctor_ref->New({})).As< NapiContainer >();
}


SubscriberQosProxy::NapiContainer
SubscriberQosProxy::NewInstance(Napi::Env env, CppEntity const& cppInstance)
{
    NapiContainer result = NewInstance(env);
    FromCpp(env, cppInstance, result);

    return result;
}


SubscriberQosProxy::SubscriberQosProxy(Napi::CallbackInfo const& info):
    Napi::ObjectWrap< SubscriberQosProxy >(info)
{
    NapiContainer this_instance = info.This().As< NapiContainer >();
    this_instance.Set(EntityFactoryField::NAME, EntityFactoryField::Proxy::NewInstance(info.Env()));
    this_instance.Set(GroupDataField::NAME, GroupDataField::Proxy::NewInstance(info.Env()));
    this_instance.Set(PartitionField::NAME, PartitionField::Proxy::NewInstance(info.Env()));
    this_instance.Set(PresentationField::NAME, PresentationField::Proxy::NewInstance(info.Env()));
}

} // end namespace DdsJs

// vim: set ts=4 sw=4 expandtab:
