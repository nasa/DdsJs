/**
 * \file CycloneDDS/DeadlineQosPolicy.cpp
 * \brief Contains the implementation for the \c DeadlineQosPolicyProxy class.
 * \author Rolando J. Nieves <rolando.j.nieves@nasa.gov>
 * \date 2024-10-03 12:39:59
 */

// --------------------------------------------------------------------------
// Local Definition
#include "DeadlineQosPolicy.hh"


namespace DdsJs
{

const char *DeadlineQosPolicyProxy::PeriodField::NAME = "period";

const char *DeadlineQosPolicyProxy::MODNAME = "DDS";

const char *DeadlineQosPolicyProxy::NAME = "DeadlineQosPolicy";

Napi::Object
DeadlineQosPolicyProxy::Init(Napi::Env env, Napi::Object exports, ConstructorRegistry *ctorReg)
{
    Napi::Function ctor_func = DefineClass(
        env,
        DeadlineQosPolicyProxy::NAME,
        {}
    );

    Napi::FunctionReference *ctor_ref = new Napi::FunctionReference();
    *ctor_ref = Napi::Persistent(ctor_func);
    ctorReg->setConstructorFor(DottedName({ DeadlineQosPolicyProxy::MODNAME, DeadlineQosPolicyProxy::NAME }), ctor_ref);

    exports.Set(DeadlineQosPolicyProxy::NAME, ctor_func);

    return exports;
}


DeadlineQosPolicyProxy::NapiContainer
DeadlineQosPolicyProxy::NewInstance(Napi::Env env)
{
    Napi::EscapableHandleScope scope(env);
    Napi::FunctionReference *ctor_ref = env.GetInstanceData< ConstructorRegistry >()->getConstructorFor(DottedName({ DeadlineQosPolicyProxy::MODNAME, DeadlineQosPolicyProxy::NAME }));
    if (nullptr == ctor_ref)
    {
        throw Napi::Error::New(env, "Internal error: Constructor for DeadlineQosPolicy not available.");
    }

    return scope.Escape((napi_value)ctor_ref->New({})).As< NapiContainer >();
}


DeadlineQosPolicyProxy::NapiContainer
DeadlineQosPolicyProxy::NewInstance(Napi::Env env, CppEntity const& cppInstance)
{
    NapiContainer result = NewInstance(env);
    FromCpp(env, cppInstance, result);

    return result;
}


void
DeadlineQosPolicyProxy::FromCpp(Napi::Env env, CppEntity const& cppVal, NapiContainer& jsValOut)
{
    DeadlineQosPolicyProxy::PeriodField::Proxy::CppEntity period;

    if (!dds_qget_deadline(cppVal, &period))
    {
        throw Napi::Error::New(env, "Internal error: Could not extract Deadline QoS policy information.");
    }
    jsValOut.Set(DeadlineQosPolicyProxy::PeriodField::NAME, DeadlineQosPolicyProxy::PeriodField::Proxy::NewInstance(env, period));
}


void
DeadlineQosPolicyProxy::FromJs(Napi::Env env, NapiContainer const& jsVal, CppEntity& cppValOut)
{
    DeadlineQosPolicyProxy::PeriodField::Proxy::CppEntity period;

    DeadlineQosPolicyProxy::PeriodField::Proxy::FromJs(env, jsVal.Get(DeadlineQosPolicyProxy::PeriodField::NAME).As< DeadlineQosPolicyProxy::PeriodField::Proxy::NapiContainer >(), period);

    dds_qset_deadline(cppValOut, period);
}


DeadlineQosPolicyProxy::DeadlineQosPolicyProxy(Napi::CallbackInfo const& info):
    Napi::ObjectWrap< DeadlineQosPolicyProxy >(info)
{
    NapiContainer this_instance = info.This().As< NapiContainer >();
    this_instance.Set(DeadlineQosPolicyProxy::PeriodField::NAME, DeadlineQosPolicyProxy::PeriodField::Proxy::NewInstance(info.Env()));
}

} // end namespace DdsJs

// vim: set ts=4 sw=4 expandtab:
