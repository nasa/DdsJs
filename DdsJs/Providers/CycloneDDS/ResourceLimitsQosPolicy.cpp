/**
 * \file CycloneDDS/ResourceLimitsQosPolicy.cpp
 * \brief Contains the implementation for the \c ResourceLimitsQosPolicyProxy class.
 * \author Rolando J. Nieves <rolando.j.nieves@nasa.gov>
 * \date 2024-10-03 17:03:23
 */

#include "ResourceLimitsQosPolicy.hh"


namespace DdsJs
{

const char *ResourceLimitsQosPolicyProxy::MaxSamplesField::NAME = "max_samples";

const char *ResourceLimitsQosPolicyProxy::MaxInstancesField::NAME = "max_instances";

const char *ResourceLimitsQosPolicyProxy::MaxSamplesPerInstanceField::NAME = "max_samples_per_instance";

const char *ResourceLimitsQosPolicyProxy::MODNAME = "DDS";

const char *ResourceLimitsQosPolicyProxy::NAME = "ResourceLimitsQosPolicy";

Napi::Object
ResourceLimitsQosPolicyProxy::Init(Napi::Env env, Napi::Object exports, ConstructorRegistry *ctorReg)
{
    Napi::Function ctor_func = DefineClass(
        env,
        ResourceLimitsQosPolicyProxy::NAME,
        {}
    );

    Napi::FunctionReference *ctor_ref = new Napi::FunctionReference();
    *ctor_ref = Napi::Persistent(ctor_func);
    ctorReg->setConstructorFor(DottedName({ ResourceLimitsQosPolicyProxy::MODNAME, ResourceLimitsQosPolicyProxy::NAME }), ctor_ref);

    exports.Set(ResourceLimitsQosPolicyProxy::NAME, ctor_func);

    return exports;
}


ResourceLimitsQosPolicyProxy::NapiContainer
ResourceLimitsQosPolicyProxy::NewInstance(Napi::Env env)
{
    Napi::EscapableHandleScope scope(env);
    Napi::FunctionReference *ctor_ref = env.GetInstanceData< ConstructorRegistry >()->getConstructorFor(DottedName({ ResourceLimitsQosPolicyProxy::MODNAME, ResourceLimitsQosPolicyProxy::NAME }));
    if (nullptr == ctor_ref)
    {
        throw Napi::Error::New(env, "Internal error: Constructor for ResourceLimitsQosPolicy not available.");
    }

    return scope.Escape((napi_value)ctor_ref->New({})).As< NapiContainer >();
}


ResourceLimitsQosPolicyProxy::NapiContainer
ResourceLimitsQosPolicyProxy::NewInstance(Napi::Env env, CppEntity const& cppInstance)
{
    NapiContainer result = NewInstance(env);
    FromCpp(env, cppInstance, result);

    return result;
}


void
ResourceLimitsQosPolicyProxy::FromCpp(Napi::Env env, CppEntity const& cppVal, NapiContainer& jsValOut)
{
    ResourceLimitsQosPolicyProxy::MaxSamplesField::Proxy::CppEntity max_samples;
    ResourceLimitsQosPolicyProxy::MaxInstancesField::Proxy::CppEntity max_instances;
    ResourceLimitsQosPolicyProxy::MaxSamplesPerInstanceField::Proxy::CppEntity max_samples_per_instance;

    if (!dds_qget_resource_limits(cppVal, &max_samples, &max_instances, &max_samples_per_instance))
    {
        throw Napi::Error::New(env, "Internal error: Could not fetch Resource Limits QoS policy information.");
    }
    jsValOut.Set(ResourceLimitsQosPolicyProxy::MaxSamplesField::NAME, ResourceLimitsQosPolicyProxy::MaxSamplesField::Proxy::NewInstance(env, max_samples));
    jsValOut.Set(ResourceLimitsQosPolicyProxy::MaxInstancesField::NAME, ResourceLimitsQosPolicyProxy::MaxInstancesField::Proxy::NewInstance(env, max_instances));
    jsValOut.Set(ResourceLimitsQosPolicyProxy::MaxSamplesPerInstanceField::NAME, ResourceLimitsQosPolicyProxy::MaxSamplesPerInstanceField::Proxy::NewInstance(env, max_samples_per_instance));
}


void
ResourceLimitsQosPolicyProxy::FromJs(Napi::Env env, NapiContainer const& jsVal, CppEntity& cppValOut)
{
    ResourceLimitsQosPolicyProxy::MaxSamplesField::Proxy::CppEntity max_samples;
    ResourceLimitsQosPolicyProxy::MaxInstancesField::Proxy::CppEntity max_instances;
    ResourceLimitsQosPolicyProxy::MaxSamplesPerInstanceField::Proxy::CppEntity max_samples_per_instance;

    ResourceLimitsQosPolicyProxy::MaxSamplesField::Proxy::FromJs(env, jsVal.Get(ResourceLimitsQosPolicyProxy::MaxSamplesField::NAME).As< ResourceLimitsQosPolicyProxy::MaxSamplesField::Proxy::NapiContainer >(), max_samples);
    ResourceLimitsQosPolicyProxy::MaxInstancesField::Proxy::FromJs(env, jsVal.Get(ResourceLimitsQosPolicyProxy::MaxInstancesField::NAME).As< ResourceLimitsQosPolicyProxy::MaxInstancesField::Proxy::NapiContainer >(), max_instances);
    ResourceLimitsQosPolicyProxy::MaxSamplesPerInstanceField::Proxy::FromJs(env, jsVal.Get(ResourceLimitsQosPolicyProxy::MaxSamplesPerInstanceField::NAME).As< ResourceLimitsQosPolicyProxy::MaxSamplesPerInstanceField::Proxy::NapiContainer >(), max_samples_per_instance);

    dds_qset_resource_limits(cppValOut, max_samples, max_instances, max_samples_per_instance);
}


ResourceLimitsQosPolicyProxy::ResourceLimitsQosPolicyProxy(Napi::CallbackInfo const& info):
    Napi::ObjectWrap< ResourceLimitsQosPolicyProxy >(info)
{
    NapiContainer this_instance = info.This().As< NapiContainer >();
    this_instance.Set(ResourceLimitsQosPolicyProxy::MaxSamplesField::NAME, ResourceLimitsQosPolicyProxy::MaxSamplesField::Proxy::NewInstance(info.Env()));
    this_instance.Set(ResourceLimitsQosPolicyProxy::MaxInstancesField::NAME, ResourceLimitsQosPolicyProxy::MaxInstancesField::Proxy::NewInstance(info.Env()));
    this_instance.Set(ResourceLimitsQosPolicyProxy::MaxSamplesPerInstanceField::NAME, ResourceLimitsQosPolicyProxy::MaxSamplesPerInstanceField::Proxy::NewInstance(info.Env()));
}

} // end namespace DdsJs

// vim: set ts=4 sw=4 expandtab:
