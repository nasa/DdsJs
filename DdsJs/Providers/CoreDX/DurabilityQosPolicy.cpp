/**
 * \file CoreDX/DurabilityQosPolicy.cpp
 * \brief Contains the implementation for the \c DurabilityQosPolicyProxy class.
 * \author Rolando J. Nieves <rolando.j.nieves@nasa.gov>
 * \date 2024-01-31 15:18:00
 */

// --------------------------------------------------------------------------
// Local Definition
#include "DurabilityQosPolicy.hh"


namespace DdsJs
{

const char *DurabilityQosPolicyProxy::KindField::NAME = "kind";

const char *DurabilityQosPolicyProxy::MODNAME = "DDS";

const char *DurabilityQosPolicyProxy::NAME = "DurabilityQosPolicy";

Napi::Object
DurabilityQosPolicyProxy::Init(Napi::Env env, Napi::Object exports, ConstructorRegistry *ctorReg)
{
    Napi::Function ctor_func = DefineClass(
        env,
        DurabilityQosPolicyProxy::NAME,
        {}
    );

    Napi::FunctionReference *ctor_ref = new Napi::FunctionReference();
    *ctor_ref = Napi::Persistent(ctor_func);
    ctorReg->setConstructorFor(DottedName({ DurabilityQosPolicyProxy::MODNAME, DurabilityQosPolicyProxy::NAME }), ctor_ref);

    exports.Set(DurabilityQosPolicyProxy::NAME, ctor_func);

    return exports;
}


DurabilityQosPolicyProxy::NapiContainer
DurabilityQosPolicyProxy::NewInstance(Napi::Env env)
{
    Napi::EscapableHandleScope scope(env);
    Napi::FunctionReference *ctor_ref = env.GetInstanceData< ConstructorRegistry >()->getConstructorFor(DottedName({ DurabilityQosPolicyProxy::MODNAME, DurabilityQosPolicyProxy::NAME }));
    if (nullptr == ctor_ref)
    {
        throw Napi::Error::New(env, "Internal error: Constructor for DurabilityQosPolicy not available.");
    }

    return scope.Escape((napi_value)ctor_ref->New({})).As< NapiContainer >();
}


DurabilityQosPolicyProxy::NapiContainer
DurabilityQosPolicyProxy::NewInstance(Napi::Env env, CppEntity const& cppInstance)
{
    NapiContainer result = NewInstance(env);
    FromCpp(env, cppInstance, result);

    return result;
}


void
DurabilityQosPolicyProxy::FromCpp(Napi::Env env, CppEntity const& cppVal, NapiContainer& jsValOut)
{
    jsValOut.Set(DurabilityQosPolicyProxy::KindField::NAME, DurabilityQosPolicyProxy::KindField::Proxy::NewInstance(env, cppVal.kind));
}


void
DurabilityQosPolicyProxy::FromJs(Napi::Env env, NapiContainer const& jsVal, CppEntity& cppValOut)
{
    DurabilityQosPolicyProxy::KindField::Proxy::FromJs(env, jsVal.Get(DurabilityQosPolicyProxy::KindField::NAME).As< DurabilityQosPolicyProxy::KindField::Proxy::NapiContainer >(), cppValOut.kind);
}


DurabilityQosPolicyProxy::DurabilityQosPolicyProxy(Napi::CallbackInfo const& info):
    Napi::ObjectWrap< DurabilityQosPolicyProxy >(info)
{
    NapiContainer this_instance = info.This().As< NapiContainer >();
    this_instance.Set(DurabilityQosPolicyProxy::KindField::NAME, DurabilityQosPolicyProxy::KindField::Proxy::NewInstance(info.Env()));
}

} // end namespace DdsJs

// vim: set ts=4 sw=4 expandtab:
