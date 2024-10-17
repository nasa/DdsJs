/**
 * \file CoreDX/TimeBasedFilterQosPolicy.cpp
 * \brief Contains the implementation for the \c TimeBasedFilterQosPolicyProxy class.
 * \author Rolando J. Nieves <rolando.j.nieves@nasa.gov>
 * \date 2024-02-02 12:17:26
 */

// --------------------------------------------------------------------------
// Local Definition
#include "TimeBasedFilterQosPolicy.hh"


namespace DdsJs
{

const char *TimeBasedFilterQosPolicyProxy::MinimumSeparationField::NAME = "minimum_separation";

const char *TimeBasedFilterQosPolicyProxy::MODNAME = "DDS";

const char *TimeBasedFilterQosPolicyProxy::NAME = "TimeBasedFilterQosPolicy";

Napi::Object
TimeBasedFilterQosPolicyProxy::Init(Napi::Env env, Napi::Object exports, ConstructorRegistry *ctorReg)
{
    Napi::Function ctor_func = DefineClass(
        env,
        TimeBasedFilterQosPolicyProxy::NAME,
        {}
    );

    Napi::FunctionReference *ctor_ref = new Napi::FunctionReference();
    *ctor_ref = Napi::Persistent(ctor_func);
    ctorReg->setConstructorFor(DottedName({ TimeBasedFilterQosPolicyProxy::MODNAME, TimeBasedFilterQosPolicyProxy::NAME }), ctor_ref);

    exports.Set(TimeBasedFilterQosPolicyProxy::NAME, ctor_func);

    return exports;
}


TimeBasedFilterQosPolicyProxy::NapiContainer
TimeBasedFilterQosPolicyProxy::NewInstance(Napi::Env env)
{
    Napi::EscapableHandleScope scope(env);
    Napi::FunctionReference *ctor_ref = env.GetInstanceData< ConstructorRegistry >()->getConstructorFor(DottedName({ TimeBasedFilterQosPolicyProxy::MODNAME, TimeBasedFilterQosPolicyProxy::NAME }));
    if (nullptr == ctor_ref)
    {
        throw Napi::Error::New(env, "Internal error: Constructor for TimeBasedFilterQosPolicy not available.");
    }

    return scope.Escape((napi_value)ctor_ref->New({})).As< NapiContainer >();
}


TimeBasedFilterQosPolicyProxy::NapiContainer
TimeBasedFilterQosPolicyProxy::NewInstance(Napi::Env env, CppEntity const& cppInstance)
{
    NapiContainer result = NewInstance(env);
    FromCpp(env, cppInstance, result);

    return result;
}


void
TimeBasedFilterQosPolicyProxy::FromCpp(Napi::Env env, CppEntity const& cppVal, NapiContainer& jsValOut)
{
    jsValOut.Set(TimeBasedFilterQosPolicyProxy::MinimumSeparationField::NAME, TimeBasedFilterQosPolicyProxy::MinimumSeparationField::Proxy::NewInstance(env, cppVal.minimum_separation));
}


void
TimeBasedFilterQosPolicyProxy::FromJs(Napi::Env env, NapiContainer const& jsVal, CppEntity& cppValOut)
{
    TimeBasedFilterQosPolicyProxy::MinimumSeparationField::Proxy::FromJs(env, jsVal.Get(TimeBasedFilterQosPolicyProxy::MinimumSeparationField::NAME).As< TimeBasedFilterQosPolicyProxy::MinimumSeparationField::Proxy::NapiContainer >(), cppValOut.minimum_separation);
}


TimeBasedFilterQosPolicyProxy::TimeBasedFilterQosPolicyProxy(Napi::CallbackInfo const& info):
    Napi::ObjectWrap< TimeBasedFilterQosPolicyProxy >(info)
{
    NapiContainer this_instance = info.This().As< NapiContainer >();
    this_instance.Set(TimeBasedFilterQosPolicyProxy::MinimumSeparationField::NAME, TimeBasedFilterQosPolicyProxy::MinimumSeparationField::Proxy::NewInstance(info.Env()));
}

} // end namespace DdsJs

// vim: set ts=4 sw=4 expandtab:
