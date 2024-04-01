/**
 * \file DurabilityServiceQosPolicy.cpp
 * \brief Contains the implementation for the \c DurabilityServiceQosPolicyProxy class.
 * \author Rolando J. Nieves <rolando.j.nieves@nasa.gov>
 * \date 2024-01-31 16:02:20
 */

#include "DurabilityServiceQosPolicy.hh"


namespace DdsJs {

const char *DurabilityServiceQosPolicyProxy::ServiceCleanupDelayField::NAME = "service_cleanup_delay";

const char *DurabilityServiceQosPolicyProxy::HistoryKindField::NAME = "history_kind";

const char *DurabilityServiceQosPolicyProxy::HistoryDepthField::NAME = "history_depth";

const char *DurabilityServiceQosPolicyProxy::MaxSamplesField::NAME = "max_samples";

const char *DurabilityServiceQosPolicyProxy::MaxInstancesField::NAME = "max_instances";

const char *DurabilityServiceQosPolicyProxy::MaxSamplesPerInstanceField::NAME = "max_samples_per_instance";

const char *DurabilityServiceQosPolicyProxy::MODNAME = "DDS";

const char *DurabilityServiceQosPolicyProxy::NAME = "DurabilityServiceQosPolicy";

Napi::Object
DurabilityServiceQosPolicyProxy::Init(Napi::Env env, Napi::Object exports, ConstructorRegistry *ctorReg)
{
    Napi::Function ctor_func = DefineClass(
        env,
        DurabilityServiceQosPolicyProxy::NAME,
        {}
    );

    Napi::FunctionReference *ctor_ref = new Napi::FunctionReference();
    *ctor_ref = Napi::Persistent(ctor_func);
    ctorReg->setConstructorFor(DottedName({ DurabilityServiceQosPolicyProxy::MODNAME, DurabilityServiceQosPolicyProxy::NAME }), ctor_ref);

    exports.Set(DurabilityServiceQosPolicyProxy::NAME, ctor_func);

    return exports;
}


DurabilityServiceQosPolicyProxy::NapiContainer
DurabilityServiceQosPolicyProxy::NewInstance(Napi::Env env)
{
    Napi::EscapableHandleScope scope(env);
    Napi::FunctionReference *ctor_ref = env.GetInstanceData< ConstructorRegistry >()->getConstructorFor(DottedName({ DurabilityServiceQosPolicyProxy::MODNAME, DurabilityServiceQosPolicyProxy::NAME }));
    if (nullptr == ctor_ref)
    {
        throw Napi::Error::New(env, "Internal error: Constructor for DurabilityServiceQosPolicy not available.");
    }

    return scope.Escape((napi_value)ctor_ref->New({})).As< NapiContainer >();
}


DurabilityServiceQosPolicyProxy::NapiContainer
DurabilityServiceQosPolicyProxy::NewInstance(Napi::Env env, CppEntity const& cppInstance)
{
    NapiContainer result = NewInstance(env);
    FromCpp(env, cppInstance, result);

    return result;
}


void
DurabilityServiceQosPolicyProxy::FromCpp(Napi::Env env, CppEntity const& cppVal, NapiContainer& jsValOut)
{
    jsValOut.Set(DurabilityServiceQosPolicyProxy::ServiceCleanupDelayField::NAME, DurabilityServiceQosPolicyProxy::ServiceCleanupDelayField::Proxy::NewInstance(env, cppVal.service_cleanup_delay));
    jsValOut.Set(DurabilityServiceQosPolicyProxy::HistoryKindField::NAME, DurabilityServiceQosPolicyProxy::HistoryKindField::Proxy::NewInstance(env, cppVal.history_kind));
    jsValOut.Set(DurabilityServiceQosPolicyProxy::HistoryDepthField::NAME, DurabilityServiceQosPolicyProxy::HistoryDepthField::Proxy::NewInstance(env, cppVal.history_depth));
    jsValOut.Set(DurabilityServiceQosPolicyProxy::MaxSamplesField::NAME, DurabilityServiceQosPolicyProxy::MaxSamplesField::Proxy::NewInstance(env, cppVal.max_samples));
    jsValOut.Set(DurabilityServiceQosPolicyProxy::MaxInstancesField::NAME, DurabilityServiceQosPolicyProxy::MaxInstancesField::Proxy::NewInstance(env, cppVal.max_instances));
    jsValOut.Set(DurabilityServiceQosPolicyProxy::MaxSamplesPerInstanceField::NAME, DurabilityServiceQosPolicyProxy::MaxSamplesPerInstanceField::Proxy::NewInstance(env, cppVal.max_samples_per_instance));
}


void
DurabilityServiceQosPolicyProxy::FromJs(Napi::Env env, NapiContainer const& jsVal, CppEntity& cppValOut)
{
    DurabilityServiceQosPolicyProxy::ServiceCleanupDelayField::Proxy::FromJs(env, jsVal.Get(DurabilityServiceQosPolicyProxy::ServiceCleanupDelayField::NAME).As< DurabilityServiceQosPolicyProxy::ServiceCleanupDelayField::Proxy::NapiContainer >(), cppValOut.service_cleanup_delay);
    DurabilityServiceQosPolicyProxy::HistoryKindField::Proxy::FromJs(env, jsVal.Get(DurabilityServiceQosPolicyProxy::HistoryKindField::NAME).As< DurabilityServiceQosPolicyProxy::HistoryKindField::Proxy::NapiContainer >(), cppValOut.history_kind);
    DurabilityServiceQosPolicyProxy::HistoryDepthField::Proxy::FromJs(env, jsVal.Get(DurabilityServiceQosPolicyProxy::HistoryDepthField::NAME).As< DurabilityServiceQosPolicyProxy::HistoryDepthField::Proxy::NapiContainer >(), cppValOut.history_depth);
    DurabilityServiceQosPolicyProxy::MaxSamplesField::Proxy::FromJs(env, jsVal.Get(DurabilityServiceQosPolicyProxy::MaxSamplesField::NAME).As< DurabilityServiceQosPolicyProxy::MaxSamplesField::Proxy::NapiContainer >(), cppValOut.max_samples);
    DurabilityServiceQosPolicyProxy::MaxInstancesField::Proxy::FromJs(env, jsVal.Get(DurabilityServiceQosPolicyProxy::MaxInstancesField::NAME).As< DurabilityServiceQosPolicyProxy::MaxInstancesField::Proxy::NapiContainer >(), cppValOut.max_instances);
    DurabilityServiceQosPolicyProxy::MaxSamplesPerInstanceField::Proxy::FromJs(env, jsVal.Get(DurabilityServiceQosPolicyProxy::MaxSamplesPerInstanceField::NAME).As< DurabilityServiceQosPolicyProxy::MaxSamplesPerInstanceField::Proxy::NapiContainer >(), cppValOut.max_samples_per_instance);
}


DurabilityServiceQosPolicyProxy::DurabilityServiceQosPolicyProxy(Napi::CallbackInfo const& info):
    Napi::ObjectWrap< DurabilityServiceQosPolicyProxy >(info)
{
    NapiContainer this_instance = info.This().As< NapiContainer >();
    this_instance.Set(DurabilityServiceQosPolicyProxy::ServiceCleanupDelayField::NAME, DurabilityServiceQosPolicyProxy::ServiceCleanupDelayField::Proxy::NewInstance(info.Env()));
    this_instance.Set(DurabilityServiceQosPolicyProxy::HistoryKindField::NAME, DurabilityServiceQosPolicyProxy::HistoryKindField::Proxy::NewInstance(info.Env()));
    this_instance.Set(DurabilityServiceQosPolicyProxy::HistoryDepthField::NAME, DurabilityServiceQosPolicyProxy::HistoryDepthField::Proxy::NewInstance(info.Env()));
    this_instance.Set(DurabilityServiceQosPolicyProxy::MaxSamplesField::NAME, DurabilityServiceQosPolicyProxy::MaxSamplesField::Proxy::NewInstance(info.Env()));
    this_instance.Set(DurabilityServiceQosPolicyProxy::MaxInstancesField::NAME, DurabilityServiceQosPolicyProxy::MaxInstancesField::Proxy::NewInstance(info.Env()));
    this_instance.Set(DurabilityServiceQosPolicyProxy::MaxSamplesPerInstanceField::NAME, DurabilityServiceQosPolicyProxy::MaxSamplesPerInstanceField::Proxy::NewInstance(info.Env()));
}

} // end namespace DdsJs

// vim: set ts=4 sw=4 expandtab:
