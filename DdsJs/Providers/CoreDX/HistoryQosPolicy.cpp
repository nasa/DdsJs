/**
 * \file HistoryQosPolicy.cpp
 * \brief Contains the implementation for the \c HistoryQosPolicyProxy class.
 * \author Rolando J. Nieves <rolando.j.nieves@nasa.gov>
 * \date 2024-01-31 15:37:16
 */

#include "HistoryQosPolicy.hh"


namespace DdsJs {

const char *HistoryQosPolicyProxy::KindField::NAME = "kind";

const char *HistoryQosPolicyProxy::DepthField::NAME = "depth";

const char *HistoryQosPolicyProxy::MODNAME = "DDS";

const char *HistoryQosPolicyProxy::NAME = "HistoryQosPolicy";

Napi::Object
HistoryQosPolicyProxy::Init(Napi::Env env, Napi::Object exports, ConstructorRegistry *ctorReg)
{
    Napi::Function ctor_func = DefineClass(
        env,
        HistoryQosPolicyProxy::NAME,
        {}
    );

    Napi::FunctionReference *ctor_ref = new Napi::FunctionReference();
    *ctor_ref = Napi::Persistent(ctor_func);
    ctorReg->setConstructorFor(DottedName({ HistoryQosPolicyProxy::MODNAME, HistoryQosPolicyProxy::NAME }), ctor_ref);

    exports.Set(HistoryQosPolicyProxy::NAME, ctor_func);

    return exports;
}


HistoryQosPolicyProxy::NapiContainer
HistoryQosPolicyProxy::NewInstance(Napi::Env env)
{
    Napi::EscapableHandleScope scope(env);
    Napi::FunctionReference *ctor_ref = env.GetInstanceData< ConstructorRegistry >()->getConstructorFor(DottedName({ HistoryQosPolicyProxy::MODNAME, HistoryQosPolicyProxy::NAME }));
    if (nullptr == ctor_ref)
    {
        throw Napi::Error::New(env, "Internal error: Constructor for HistoryQosPolicy not available.");
    }

    return scope.Escape((napi_value)ctor_ref->New({})).As< NapiContainer >();
}


HistoryQosPolicyProxy::NapiContainer
HistoryQosPolicyProxy::NewInstance(Napi::Env env, CppEntity const& cppInstance)
{
    NapiContainer result = NewInstance(env);
    FromCpp(env, cppInstance, result);

    return result;
}


void
HistoryQosPolicyProxy::FromCpp(Napi::Env env, CppEntity const& cppVal, NapiContainer& jsValOut)
{
    jsValOut.Set(HistoryQosPolicyProxy::KindField::NAME, HistoryQosPolicyProxy::KindField::Proxy::NewInstance(env, cppVal.kind));
    jsValOut.Set(HistoryQosPolicyProxy::DepthField::NAME, HistoryQosPolicyProxy::DepthField::Proxy::NewInstance(env, cppVal.depth));
}


void
HistoryQosPolicyProxy::FromJs(Napi::Env env, NapiContainer const& jsVal, CppEntity& cppValOut)
{
    HistoryQosPolicyProxy::KindField::Proxy::FromJs(env, jsVal.Get(HistoryQosPolicyProxy::KindField::NAME).As< HistoryQosPolicyProxy::KindField::Proxy::NapiContainer >(), cppValOut.kind);
    HistoryQosPolicyProxy::DepthField::Proxy::FromJs(env, jsVal.Get(HistoryQosPolicyProxy::DepthField::NAME).As< HistoryQosPolicyProxy::DepthField::Proxy::NapiContainer >(), cppValOut.depth);
}


HistoryQosPolicyProxy::HistoryQosPolicyProxy(Napi::CallbackInfo const& info):
    Napi::ObjectWrap< HistoryQosPolicyProxy >(info)
{
    NapiContainer this_instance = info.This().As< NapiContainer >();
    this_instance.Set(HistoryQosPolicyProxy::KindField::NAME, HistoryQosPolicyProxy::KindField::Proxy::NewInstance(info.Env()));
    this_instance.Set(HistoryQosPolicyProxy::DepthField::NAME, HistoryQosPolicyProxy::DepthField::Proxy::NewInstance(info.Env()));
}

} // end namespace DdsJs

// vim: set ts=4 sw=4 expandtab:
