/**
 * \file CycloneDDS/SubscriberQos.cpp
 * \brief Contains the implementation for the \c SubscriberQosProxy class.
 * \author Rolando J. Nieves <rolando.j.nieves@nasa.gov>
 * \date 2024-10-03 11:57:55
 */

#include "SubscriberQos.hh"


namespace DdsJs {

const char *SubscriberQosProxy::EntityFactoryField::NAME = "entity_factory";

const char *SubscriberQosProxy::GroupDataField::NAME = "group_data";

const char *SubscriberQosProxy::PartitionField::NAME = "partition";

const char *SubscriberQosProxy::PresentationField::NAME = "presentation";

const char *SubscriberQosProxy::MODNAME = "DDS";

const char *SubscriberQosProxy::NAME = "SubscriberQos";


void
SubscriberQosProxy::FromCpp(Napi::Env env, CppEntity const& cppVal, NapiContainer& jsValOut)
{
    // As of 2024-10-03 CycloneDDS version 0.10.5 does not implement the
    // "entity_factory" QoS policy.

    if (dds_qget_groupdata(cppVal, nullptr, nullptr))
    {
        jsValOut.Set(GroupDataField::NAME, GroupDataField::Proxy::NewInstance(env, cppVal));
    }

    if (dds_qget_partition(cppVal, nullptr, nullptr))
    {
        jsValOut.Set(PartitionField::NAME, PartitionField::Proxy::NewInstance(env, cppVal));
    }

    if (dds_qget_presentation(cppVal, nullptr, nullptr, nullptr))
    {
        jsValOut.Set(PresentationField::NAME, PresentationField::Proxy::NewInstance(env, cppVal));
    }
}


void
SubscriberQosProxy::FromJs(Napi::Env env, NapiContainer const& jsVal, CppEntity& cppValOut)
{
    // As of 2024-10-03 CycloneDDS version 0.10.5 does not implement the
    // "entity_factory" QoS policy.

    auto group_data_field = jsVal.Get(GroupDataField::NAME);
    if (!group_data_field.IsUndefined())
    {
        GroupDataField::Proxy::FromJs(env, group_data_field.As< GroupDataField::Proxy::NapiContainer >(), cppValOut);
    }

    auto partition_field = jsVal.Get(PartitionField::NAME);
    if (!partition_field.IsUndefined())
    {
        PartitionField::Proxy::FromJs(env, partition_field.As< PartitionField::Proxy::NapiContainer >(), cppValOut);
    }

    auto presentation_field = jsVal.Get(PresentationField::NAME);
    if (!presentation_field.IsUndefined())
    {
        PresentationField::Proxy::FromJs(env, presentation_field.As< PresentationField::Proxy::NapiContainer >(), cppValOut);
    }
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
    this_instance.Set(EntityFactoryField::NAME, info.Env().Undefined());
    this_instance.Set(GroupDataField::NAME, info.Env().Undefined());
    this_instance.Set(PartitionField::NAME, info.Env().Undefined());
    this_instance.Set(PresentationField::NAME, info.Env().Undefined());
}

} // end namespace DdsJs

// vim: set ts=4 sw=4 expandtab:
