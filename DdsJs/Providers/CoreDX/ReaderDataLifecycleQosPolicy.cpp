/**
 * \file CoreDX/ReaderDataLifecycleQosPolicy.cpp
 * \brief Contains the implementation for the \c ReaderDataLifecycleQosPolicyProxy class.
 * \author Rolando J. Nieves <rolando.j.nieves@nasa.gov>
 * \date 2024-02-02 12:37:16
 */

// --------------------------------------------------------------------------
// Local Definition
#include "ReaderDataLifecycleQosPolicy.hh"


namespace DdsJs
{

const char *ReaderDataLifecycleQosPolicyProxy::AutopurgeNowriterSamplesDelayField::NAME = "autopurge_nowriter_samples_delay";

const char *ReaderDataLifecycleQosPolicyProxy::AutopurgeDisposedSamplesDelayField::NAME = "autopurge_disposed_samples_delay";

const char *ReaderDataLifecycleQosPolicyProxy::MODNAME = "DDS";

const char *ReaderDataLifecycleQosPolicyProxy::NAME = "ReaderDataLifecycleQosPolicy";

Napi::Object
ReaderDataLifecycleQosPolicyProxy::Init(Napi::Env env, Napi::Object exports, ConstructorRegistry *ctorReg)
{
    Napi::Function ctor_func = DefineClass(
        env,
        ReaderDataLifecycleQosPolicyProxy::NAME,
        {}
    );

    Napi::FunctionReference *ctor_ref = new Napi::FunctionReference();
    *ctor_ref = Napi::Persistent(ctor_func);
    ctorReg->setConstructorFor(DottedName({ ReaderDataLifecycleQosPolicyProxy::MODNAME, ReaderDataLifecycleQosPolicyProxy::NAME }), ctor_ref);

    exports.Set(ReaderDataLifecycleQosPolicyProxy::NAME, ctor_func);

    return exports;
}


ReaderDataLifecycleQosPolicyProxy::NapiContainer
ReaderDataLifecycleQosPolicyProxy::NewInstance(Napi::Env env)
{
    Napi::EscapableHandleScope scope(env);
    Napi::FunctionReference *ctor_ref = env.GetInstanceData< ConstructorRegistry >()->getConstructorFor(DottedName({ ReaderDataLifecycleQosPolicyProxy::MODNAME, ReaderDataLifecycleQosPolicyProxy::NAME }));
    if (nullptr == ctor_ref)
    {
        throw Napi::Error::New(env, "Internal error: Constructor for ReaderDataLifecycleQosPolicy not available.");
    }

    return scope.Escape((napi_value)ctor_ref->New({})).As< NapiContainer >();
}


ReaderDataLifecycleQosPolicyProxy::NapiContainer
ReaderDataLifecycleQosPolicyProxy::NewInstance(Napi::Env env, CppEntity const& cppInstance)
{
    NapiContainer result = NewInstance(env);
    FromCpp(env, cppInstance, result);

    return result;
}


void
ReaderDataLifecycleQosPolicyProxy::FromCpp(Napi::Env env, CppEntity const& cppVal, NapiContainer& jsValOut)
{
    jsValOut.Set(ReaderDataLifecycleQosPolicyProxy::AutopurgeNowriterSamplesDelayField::NAME, ReaderDataLifecycleQosPolicyProxy::AutopurgeNowriterSamplesDelayField::Proxy::NewInstance(env, cppVal.autopurge_nowriter_samples_delay));
    jsValOut.Set(ReaderDataLifecycleQosPolicyProxy::AutopurgeDisposedSamplesDelayField::NAME, ReaderDataLifecycleQosPolicyProxy::AutopurgeDisposedSamplesDelayField::Proxy::NewInstance(env, cppVal.autopurge_disposed_samples_delay));
}


void
ReaderDataLifecycleQosPolicyProxy::FromJs(Napi::Env env, NapiContainer const& jsVal, CppEntity& cppValOut)
{
    ReaderDataLifecycleQosPolicyProxy::AutopurgeNowriterSamplesDelayField::Proxy::FromJs(env, jsVal.Get(ReaderDataLifecycleQosPolicyProxy::AutopurgeNowriterSamplesDelayField::NAME).As< ReaderDataLifecycleQosPolicyProxy::AutopurgeNowriterSamplesDelayField::Proxy::NapiContainer >(), cppValOut.autopurge_nowriter_samples_delay);
    ReaderDataLifecycleQosPolicyProxy::AutopurgeDisposedSamplesDelayField::Proxy::FromJs(env, jsVal.Get(ReaderDataLifecycleQosPolicyProxy::AutopurgeDisposedSamplesDelayField::NAME).As< ReaderDataLifecycleQosPolicyProxy::AutopurgeDisposedSamplesDelayField::Proxy::NapiContainer >(), cppValOut.autopurge_disposed_samples_delay);
}


ReaderDataLifecycleQosPolicyProxy::ReaderDataLifecycleQosPolicyProxy(Napi::CallbackInfo const& info):
    Napi::ObjectWrap< ReaderDataLifecycleQosPolicyProxy >(info)
{
    NapiContainer this_instance = info.This().As< NapiContainer >();
    this_instance.Set(ReaderDataLifecycleQosPolicyProxy::AutopurgeNowriterSamplesDelayField::NAME, ReaderDataLifecycleQosPolicyProxy::AutopurgeNowriterSamplesDelayField::Proxy::NewInstance(info.Env()));
    this_instance.Set(ReaderDataLifecycleQosPolicyProxy::AutopurgeDisposedSamplesDelayField::NAME, ReaderDataLifecycleQosPolicyProxy::AutopurgeDisposedSamplesDelayField::Proxy::NewInstance(info.Env()));
}

} // end namespace DdsJs

// vim: set ts=4 sw=4 expandtab:
