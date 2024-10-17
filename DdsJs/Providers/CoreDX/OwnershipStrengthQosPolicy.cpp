/**
 * \file CoreDX/OwnershipStrengthQosPolicy.cpp
 * \brief Contains the implementation for the \c OwnershipStrengthQosPolicyProxy class.
 * \author Rolando J. Nieves <rolando.j.nieves@nasa.gov>
 * \date 2024-02-02 11:50:31
 */

// --------------------------------------------------------------------------
// Local Definition
#include "OwnershipStrengthQosPolicy.hh"


namespace DdsJs
{

const char *OwnershipStrengthQosPolicyProxy::ValueField::NAME = "value";

const char *OwnershipStrengthQosPolicyProxy::MODNAME = "DDS";

const char *OwnershipStrengthQosPolicyProxy::NAME = "OwnershipStrengthQosPolicy";

Napi::Object
OwnershipStrengthQosPolicyProxy::Init(Napi::Env env, Napi::Object exports, ConstructorRegistry *ctorReg)
{
    Napi::Function ctor_func = DefineClass(
        env,
        OwnershipStrengthQosPolicyProxy::NAME,
        {}
    );

    Napi::FunctionReference *ctor_ref = new Napi::FunctionReference();
    *ctor_ref = Napi::Persistent(ctor_func);
    ctorReg->setConstructorFor(DottedName({ OwnershipStrengthQosPolicyProxy::MODNAME, OwnershipStrengthQosPolicyProxy::NAME }), ctor_ref);

    exports.Set(OwnershipStrengthQosPolicyProxy::NAME, ctor_func);

    return exports;
}


OwnershipStrengthQosPolicyProxy::NapiContainer
OwnershipStrengthQosPolicyProxy::NewInstance(Napi::Env env)
{
    Napi::EscapableHandleScope scope(env);
    Napi::FunctionReference *ctor_ref = env.GetInstanceData< ConstructorRegistry >()->getConstructorFor(DottedName({ OwnershipStrengthQosPolicyProxy::MODNAME, OwnershipStrengthQosPolicyProxy::NAME }));
    if (nullptr == ctor_ref)
    {
        throw Napi::Error::New(env, "Internal error: Constructor for OwnershipStrengthQosPolicy not available.");
    }

    return scope.Escape((napi_value)ctor_ref->New({})).As< NapiContainer >();
}


OwnershipStrengthQosPolicyProxy::NapiContainer
OwnershipStrengthQosPolicyProxy::NewInstance(Napi::Env env, CppEntity const& cppInstance)
{
    NapiContainer result = NewInstance(env);
    FromCpp(env, cppInstance, result);

    return result;
}


void
OwnershipStrengthQosPolicyProxy::FromCpp(Napi::Env env, CppEntity const& cppVal, NapiContainer& jsValOut)
{
    jsValOut.Set(OwnershipStrengthQosPolicyProxy::ValueField::NAME, OwnershipStrengthQosPolicyProxy::ValueField::Proxy::NewInstance(env, cppVal.value));
}


void
OwnershipStrengthQosPolicyProxy::FromJs(Napi::Env env, NapiContainer const& jsVal, CppEntity& cppValOut)
{
    OwnershipStrengthQosPolicyProxy::ValueField::Proxy::FromJs(env, jsVal.Get(OwnershipStrengthQosPolicyProxy::ValueField::NAME).As< OwnershipStrengthQosPolicyProxy::ValueField::Proxy::NapiContainer >(), cppValOut.value);
}


OwnershipStrengthQosPolicyProxy::OwnershipStrengthQosPolicyProxy(Napi::CallbackInfo const& info):
    Napi::ObjectWrap< OwnershipStrengthQosPolicyProxy >(info)
{
    NapiContainer this_instance = info.This().As< NapiContainer >();
    this_instance.Set(OwnershipStrengthQosPolicyProxy::ValueField::NAME, OwnershipStrengthQosPolicyProxy::ValueField::Proxy::NewInstance(info.Env()));
}

} // end namespace DdsJs

// vim: set ts=4 sw=4 expandtab:
