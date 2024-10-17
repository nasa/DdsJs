/**
 * \file CoreDX/WriterDataLifecycleQosPolicy.cpp
 * \brief Contains the implementation for the \c WriterDataLifecycleQosPolicyProxy class.
 * \author Rolando J. Nieves <rolando.j.nieves@nasa.gov>
 * \date 2024-02-02 11:57:07
 */

// --------------------------------------------------------------------------
// Local Definition
#include "WriterDataLifecycleQosPolicy.hh"


namespace DdsJs
{

const char *WriterDataLifecycleQosPolicyProxy::AutodisposeUnregisteredInstancesField::NAME = "autodispose_unregistered_instances";

const char *WriterDataLifecycleQosPolicyProxy::MODNAME = "DDS";

const char *WriterDataLifecycleQosPolicyProxy::NAME = "WriterDataLifecycleQosPolicy";

Napi::Object
WriterDataLifecycleQosPolicyProxy::Init(Napi::Env env, Napi::Object exports, ConstructorRegistry *ctorReg)
{
    Napi::Function ctor_func = DefineClass(
        env,
        WriterDataLifecycleQosPolicyProxy::NAME,
        {}
    );

    Napi::FunctionReference *ctor_ref = new Napi::FunctionReference();
    *ctor_ref = Napi::Persistent(ctor_func);
    ctorReg->setConstructorFor(DottedName({ WriterDataLifecycleQosPolicyProxy::MODNAME, WriterDataLifecycleQosPolicyProxy::NAME }), ctor_ref);

    exports.Set(WriterDataLifecycleQosPolicyProxy::NAME, ctor_func);

    return exports;
}


WriterDataLifecycleQosPolicyProxy::NapiContainer
WriterDataLifecycleQosPolicyProxy::NewInstance(Napi::Env env)
{
    Napi::EscapableHandleScope scope(env);
    Napi::FunctionReference *ctor_ref = env.GetInstanceData< ConstructorRegistry >()->getConstructorFor(DottedName({ WriterDataLifecycleQosPolicyProxy::MODNAME, WriterDataLifecycleQosPolicyProxy::NAME }));
    if (nullptr == ctor_ref)
    {
        throw Napi::Error::New(env, "Internal error: Constructor for WriterDataLifecycleQosPolicy not available.");
    }

    return scope.Escape((napi_value)ctor_ref->New({})).As< NapiContainer >();
}


WriterDataLifecycleQosPolicyProxy::NapiContainer
WriterDataLifecycleQosPolicyProxy::NewInstance(Napi::Env env, CppEntity const& cppInstance)
{
    NapiContainer result = NewInstance(env);
    FromCpp(env, cppInstance, result);

    return result;
}


void
WriterDataLifecycleQosPolicyProxy::FromCpp(Napi::Env env, CppEntity const& cppVal, NapiContainer& jsValOut)
{
    jsValOut.Set(WriterDataLifecycleQosPolicyProxy::AutodisposeUnregisteredInstancesField::NAME, WriterDataLifecycleQosPolicyProxy::AutodisposeUnregisteredInstancesField::Proxy::NewInstance(env, cppVal.autodispose_unregistered_instances));
}


void
WriterDataLifecycleQosPolicyProxy::FromJs(Napi::Env env, NapiContainer const& jsVal, CppEntity& cppValOut)
{
    WriterDataLifecycleQosPolicyProxy::AutodisposeUnregisteredInstancesField::Proxy::FromJs(env, jsVal.Get(WriterDataLifecycleQosPolicyProxy::AutodisposeUnregisteredInstancesField::NAME).As< WriterDataLifecycleQosPolicyProxy::AutodisposeUnregisteredInstancesField::Proxy::NapiContainer >(), cppValOut.autodispose_unregistered_instances);
}


WriterDataLifecycleQosPolicyProxy::WriterDataLifecycleQosPolicyProxy(Napi::CallbackInfo const& info):
    Napi::ObjectWrap< WriterDataLifecycleQosPolicyProxy >(info)
{
    NapiContainer this_instance = info.This().As< NapiContainer >();
    this_instance.Set(WriterDataLifecycleQosPolicyProxy::AutodisposeUnregisteredInstancesField::NAME, WriterDataLifecycleQosPolicyProxy::AutodisposeUnregisteredInstancesField::Proxy::NewInstance(info.Env()));
}

} // end namespace DdsJs

// vim: set ts=4 sw=4 expandtab:
