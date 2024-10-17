/**
 * \file CycloneDDS/LifespanQosPolicy.cpp
 * \brief Contains the implementation for the \c LifespanQosPolicyProxy class.
 * \author Rolando J. Nieves <rolando.j.nieves@nasa.gov>
 * \date 2024-10-03 17:16:03
 */

// --------------------------------------------------------------------------
// Local Definition
#include "LifespanQosPolicy.hh"


namespace DdsJs
{

const char *LifespanQosPolicyProxy::DurationField::NAME = "duration";

const char *LifespanQosPolicyProxy::MODNAME = "DDS";

const char *LifespanQosPolicyProxy::NAME = "LifespanQosPolicy";

Napi::Object
LifespanQosPolicyProxy::Init(Napi::Env env, Napi::Object exports, ConstructorRegistry *ctorReg)
{
    Napi::Function ctor_func = DefineClass(
        env,
        LifespanQosPolicyProxy::NAME,
        {}
    );

    Napi::FunctionReference *ctor_ref = new Napi::FunctionReference();
    *ctor_ref = Napi::Persistent(ctor_func);
    ctorReg->setConstructorFor(DottedName({ LifespanQosPolicyProxy::MODNAME, LifespanQosPolicyProxy::NAME }), ctor_ref);

    exports.Set(LifespanQosPolicyProxy::NAME, ctor_func);

    return exports;
}


LifespanQosPolicyProxy::NapiContainer
LifespanQosPolicyProxy::NewInstance(Napi::Env env)
{
    Napi::EscapableHandleScope scope(env);
    Napi::FunctionReference *ctor_ref = env.GetInstanceData< ConstructorRegistry >()->getConstructorFor(DottedName({ LifespanQosPolicyProxy::MODNAME, LifespanQosPolicyProxy::NAME }));
    if (nullptr == ctor_ref)
    {
        throw Napi::Error::New(env, "Internal error: Constructor for LifespanQosPolicy not available.");
    }

    return scope.Escape((napi_value)ctor_ref->New({})).As< NapiContainer >();
}


LifespanQosPolicyProxy::NapiContainer
LifespanQosPolicyProxy::NewInstance(Napi::Env env, CppEntity const& cppInstance)
{
    NapiContainer result = NewInstance(env);
    FromCpp(env, cppInstance, result);

    return result;
}


void
LifespanQosPolicyProxy::FromCpp(Napi::Env env, CppEntity const& cppVal, NapiContainer& jsValOut)
{
    LifespanQosPolicyProxy::DurationField::Proxy::CppEntity duration;

    if (!dds_qget_lifespan(cppVal, &duration))
    {
        throw Napi::Error::New(env, "Internal error: Could not retrieve Lifespan QoS policy information.");
    }
    jsValOut.Set(LifespanQosPolicyProxy::DurationField::NAME, LifespanQosPolicyProxy::DurationField::Proxy::NewInstance(env, duration));
}


void
LifespanQosPolicyProxy::FromJs(Napi::Env env, NapiContainer const& jsVal, CppEntity& cppValOut)
{
    LifespanQosPolicyProxy::DurationField::Proxy::CppEntity duration;

    LifespanQosPolicyProxy::DurationField::Proxy::FromJs(env, jsVal.Get(LifespanQosPolicyProxy::DurationField::NAME).As< LifespanQosPolicyProxy::DurationField::Proxy::NapiContainer >(), duration);

    dds_qset_lifespan(cppValOut, duration);
}


LifespanQosPolicyProxy::LifespanQosPolicyProxy(Napi::CallbackInfo const& info):
    Napi::ObjectWrap< LifespanQosPolicyProxy >(info)
{
    NapiContainer this_instance = info.This().As< NapiContainer >();
    this_instance.Set(LifespanQosPolicyProxy::DurationField::NAME, LifespanQosPolicyProxy::DurationField::Proxy::NewInstance(info.Env()));
}

} // end namespace DdsJs

// vim: set ts=4 sw=4 expandtab:
