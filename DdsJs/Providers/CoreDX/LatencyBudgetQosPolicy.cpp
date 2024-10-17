/**
 * \file CoreDX/LatencyBudgetQosPolicy.cpp
 * \brief Contains the implementation for the \c LatencyBudgetQosPolicyProxy class.
 * \author Rolando J. Nieves <rolando.j.nieves@nasa.gov>
 * \date 2024-01-31 16:27:52
 */

// --------------------------------------------------------------------------
// Local Definition
#include "LatencyBudgetQosPolicy.hh"


namespace DdsJs
{

const char *LatencyBudgetQosPolicyProxy::DurationField::NAME = "duration";

const char *LatencyBudgetQosPolicyProxy::MODNAME = "DDS";

const char *LatencyBudgetQosPolicyProxy::NAME = "LatencyBudgetQosPolicy";

Napi::Object
LatencyBudgetQosPolicyProxy::Init(Napi::Env env, Napi::Object exports, ConstructorRegistry *ctorReg)
{
    Napi::Function ctor_func = DefineClass(
        env,
        LatencyBudgetQosPolicyProxy::NAME,
        {}
    );

    Napi::FunctionReference *ctor_ref = new Napi::FunctionReference();
    *ctor_ref = Napi::Persistent(ctor_func);
    ctorReg->setConstructorFor(DottedName({ LatencyBudgetQosPolicyProxy::MODNAME, LatencyBudgetQosPolicyProxy::NAME }), ctor_ref);

    exports.Set(LatencyBudgetQosPolicyProxy::NAME, ctor_func);

    return exports;
}


LatencyBudgetQosPolicyProxy::NapiContainer
LatencyBudgetQosPolicyProxy::NewInstance(Napi::Env env)
{
    Napi::EscapableHandleScope scope(env);
    Napi::FunctionReference *ctor_ref = env.GetInstanceData< ConstructorRegistry >()->getConstructorFor(DottedName({ LatencyBudgetQosPolicyProxy::MODNAME, LatencyBudgetQosPolicyProxy::NAME }));
    if (nullptr == ctor_ref)
    {
        throw Napi::Error::New(env, "Internal error: Constructor for LatencyBudgetQosPolicy not available.");
    }

    return scope.Escape((napi_value)ctor_ref->New({})).As< NapiContainer >();
}


LatencyBudgetQosPolicyProxy::NapiContainer
LatencyBudgetQosPolicyProxy::NewInstance(Napi::Env env, CppEntity const& cppInstance)
{
    NapiContainer result = NewInstance(env);
    FromCpp(env, cppInstance, result);

    return result;
}


void
LatencyBudgetQosPolicyProxy::FromCpp(Napi::Env env, CppEntity const& cppVal, NapiContainer& jsValOut)
{
    jsValOut.Set(LatencyBudgetQosPolicyProxy::DurationField::NAME, LatencyBudgetQosPolicyProxy::DurationField::Proxy::NewInstance(env, cppVal.duration));
}


void
LatencyBudgetQosPolicyProxy::FromJs(Napi::Env env, NapiContainer const& jsVal, CppEntity& cppValOut)
{
    LatencyBudgetQosPolicyProxy::DurationField::Proxy::FromJs(env, jsVal.Get(LatencyBudgetQosPolicyProxy::DurationField::NAME).As< LatencyBudgetQosPolicyProxy::DurationField::Proxy::NapiContainer >(), cppValOut.duration);
}


LatencyBudgetQosPolicyProxy::LatencyBudgetQosPolicyProxy(Napi::CallbackInfo const& info):
    Napi::ObjectWrap< LatencyBudgetQosPolicyProxy >(info)
{
    NapiContainer this_instance = info.This().As< NapiContainer >();
    this_instance.Set(LatencyBudgetQosPolicyProxy::DurationField::NAME, LatencyBudgetQosPolicyProxy::DurationField::Proxy::NewInstance(info.Env()));
}

} // end namespace DdsJs

// vim: set ts=4 sw=4 expandtab:
