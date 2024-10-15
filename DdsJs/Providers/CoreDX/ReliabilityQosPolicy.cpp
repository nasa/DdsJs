/**
 * \file ReliabilityQosPolicy.cpp
 * \brief Contains the implementation for the \c ReliabilityQosPolicyProxy class.
 * \author Rolando J. Nieves <rolando.j.nieves@nasa.gov>
 * \date 2024-01-31 16:52:46
 */

#include "ReliabilityQosPolicy.hh"


namespace DdsJs {

const char *ReliabilityQosPolicyProxy::KindField::NAME = "kind";

const char *ReliabilityQosPolicyProxy::MaxBlockingTimeField::NAME = "max_blocking_time";

const char *ReliabilityQosPolicyProxy::MODNAME = "DDS";

const char *ReliabilityQosPolicyProxy::NAME = "ReliabilityQosPolicy";

Napi::Object
ReliabilityQosPolicyProxy::Init(Napi::Env env, Napi::Object exports, ConstructorRegistry *ctorReg)
{
    Napi::Function ctor_func = DefineClass(
        env,
        ReliabilityQosPolicyProxy::NAME,
        {}
    );

    Napi::FunctionReference *ctor_ref = new Napi::FunctionReference();
    *ctor_ref = Napi::Persistent(ctor_func);
    ctorReg->setConstructorFor(DottedName({ ReliabilityQosPolicyProxy::MODNAME, ReliabilityQosPolicyProxy::NAME }), ctor_ref);

    exports.Set(ReliabilityQosPolicyProxy::NAME, ctor_func);

    return exports;
}


ReliabilityQosPolicyProxy::NapiContainer
ReliabilityQosPolicyProxy::NewInstance(Napi::Env env)
{
    Napi::EscapableHandleScope scope(env);
    Napi::FunctionReference *ctor_ref = env.GetInstanceData< ConstructorRegistry >()->getConstructorFor(DottedName({ ReliabilityQosPolicyProxy::MODNAME, ReliabilityQosPolicyProxy::NAME }));
    if (nullptr == ctor_ref)
    {
        throw Napi::Error::New(env, "Internal error: Constructor for ReliabilityQosPolicy not available.");
    }

    return scope.Escape((napi_value)ctor_ref->New({})).As< NapiContainer >();
}


ReliabilityQosPolicyProxy::NapiContainer
ReliabilityQosPolicyProxy::NewInstance(Napi::Env env, CppEntity const& cppInstance)
{
    NapiContainer result = NewInstance(env);
    FromCpp(env, cppInstance, result);

    return result;
}


void
ReliabilityQosPolicyProxy::FromCpp(Napi::Env env, CppEntity const& cppVal, NapiContainer& jsValOut)
{
    jsValOut.Set(ReliabilityQosPolicyProxy::KindField::NAME, ReliabilityQosPolicyProxy::KindField::Proxy::NewInstance(env, cppVal.kind));
    jsValOut.Set(ReliabilityQosPolicyProxy::MaxBlockingTimeField::NAME, ReliabilityQosPolicyProxy::MaxBlockingTimeField::Proxy::NewInstance(env, cppVal.max_blocking_time));
}


void
ReliabilityQosPolicyProxy::FromJs(Napi::Env env, NapiContainer const& jsVal, CppEntity& cppValOut)
{
    ReliabilityQosPolicyProxy::KindField::Proxy::FromJs(env, jsVal.Get(ReliabilityQosPolicyProxy::KindField::NAME).As< ReliabilityQosPolicyProxy::KindField::Proxy::NapiContainer >(), cppValOut.kind);
    ReliabilityQosPolicyProxy::MaxBlockingTimeField::Proxy::FromJs(env, jsVal.Get(ReliabilityQosPolicyProxy::MaxBlockingTimeField::NAME).As< ReliabilityQosPolicyProxy::MaxBlockingTimeField::Proxy::NapiContainer >(), cppValOut.max_blocking_time);
}


ReliabilityQosPolicyProxy::ReliabilityQosPolicyProxy(Napi::CallbackInfo const& info):
    Napi::ObjectWrap< ReliabilityQosPolicyProxy >(info)
{
    NapiContainer this_instance = info.This().As< NapiContainer >();
    this_instance.Set(ReliabilityQosPolicyProxy::KindField::NAME, ReliabilityQosPolicyProxy::KindField::Proxy::NewInstance(info.Env()));
    this_instance.Set(ReliabilityQosPolicyProxy::MaxBlockingTimeField::NAME, ReliabilityQosPolicyProxy::MaxBlockingTimeField::Proxy::NewInstance(info.Env()));
}

} // end namespace DdsJs

// vim: set ts=4 sw=4 expandtab:
