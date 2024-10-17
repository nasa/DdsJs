/**
 * \file CoreDX/LivelinessQosPolicy.cpp
 * \brief Contains the implementation for the \c LivelinessQosPolicyProxy class.
 * \author Rolando J. Nieves <rolando.j.nieves@nasa.gov>
 * \date 2024-01-31 16:40:18
 */

// --------------------------------------------------------------------------
// Local Definition
#include "LivelinessQosPolicy.hh"


namespace DdsJs
{

const char *LivelinessQosPolicyProxy::KindField::NAME = "kind";

const char *LivelinessQosPolicyProxy::LeaseDurationField::NAME = "lease_duration";

const char *LivelinessQosPolicyProxy::MODNAME = "DDS";

const char *LivelinessQosPolicyProxy::NAME = "LivelinessQosPolicy";

Napi::Object
LivelinessQosPolicyProxy::Init(Napi::Env env, Napi::Object exports, ConstructorRegistry *ctorReg)
{
    Napi::Function ctor_func = DefineClass(
        env,
        LivelinessQosPolicyProxy::NAME,
        {}
    );

    Napi::FunctionReference *ctor_ref = new Napi::FunctionReference();
    *ctor_ref = Napi::Persistent(ctor_func);
    ctorReg->setConstructorFor(DottedName({ LivelinessQosPolicyProxy::MODNAME, LivelinessQosPolicyProxy::NAME }), ctor_ref);

    exports.Set(LivelinessQosPolicyProxy::NAME, ctor_func);

    return exports;
}


LivelinessQosPolicyProxy::NapiContainer
LivelinessQosPolicyProxy::NewInstance(Napi::Env env)
{
    Napi::EscapableHandleScope scope(env);
    Napi::FunctionReference *ctor_ref = env.GetInstanceData< ConstructorRegistry >()->getConstructorFor(DottedName({ LivelinessQosPolicyProxy::MODNAME, LivelinessQosPolicyProxy::NAME }));
    if (nullptr == ctor_ref)
    {
        throw Napi::Error::New(env, "Internal error: Constructor for LivelinessQosPolicy not available.");
    }

    return scope.Escape((napi_value)ctor_ref->New({})).As< NapiContainer >();
}


LivelinessQosPolicyProxy::NapiContainer
LivelinessQosPolicyProxy::NewInstance(Napi::Env env, CppEntity const& cppInstance)
{
    NapiContainer result = NewInstance(env);
    FromCpp(env, cppInstance, result);

    return result;
}


void
LivelinessQosPolicyProxy::FromCpp(Napi::Env env, CppEntity const& cppVal, NapiContainer& jsValOut)
{
    jsValOut.Set(LivelinessQosPolicyProxy::KindField::NAME, LivelinessQosPolicyProxy::KindField::Proxy::NewInstance(env, cppVal.kind));
    jsValOut.Set(LivelinessQosPolicyProxy::LeaseDurationField::NAME, LivelinessQosPolicyProxy::LeaseDurationField::Proxy::NewInstance(env, cppVal.lease_duration));
}


void
LivelinessQosPolicyProxy::FromJs(Napi::Env env, NapiContainer const& jsVal, CppEntity& cppValOut)
{
    LivelinessQosPolicyProxy::KindField::Proxy::FromJs(env, jsVal.Get(LivelinessQosPolicyProxy::KindField::NAME).As< LivelinessQosPolicyProxy::KindField::Proxy::NapiContainer >(), cppValOut.kind);
    LivelinessQosPolicyProxy::LeaseDurationField::Proxy::FromJs(env, jsVal.Get(LivelinessQosPolicyProxy::LeaseDurationField::NAME).As< LivelinessQosPolicyProxy::LeaseDurationField::Proxy::NapiContainer >(), cppValOut.lease_duration);
}


LivelinessQosPolicyProxy::LivelinessQosPolicyProxy(Napi::CallbackInfo const& info):
    Napi::ObjectWrap< LivelinessQosPolicyProxy >(info)
{
    NapiContainer this_instance = info.This().As< NapiContainer >();
    this_instance.Set(LivelinessQosPolicyProxy::KindField::NAME, LivelinessQosPolicyProxy::KindField::Proxy::NewInstance(info.Env()));
    this_instance.Set(LivelinessQosPolicyProxy::LeaseDurationField::NAME, LivelinessQosPolicyProxy::LeaseDurationField::Proxy::NewInstance(info.Env()));
}

} // end namespace DdsJs

// vim: set ts=4 sw=4 expandtab:
