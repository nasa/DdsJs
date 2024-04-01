/**
 * \file OwnershipQosPolicy.cpp
 * \brief Contains the implementation for the \c OwnershipQosPolicyProxy class.
 * \author Rolando J. Nieves <rolando.j.nieves@nasa.gov>
 * \date 2024-02-02 10:11:29
 */

#include "OwnershipQosPolicy.hh"


namespace DdsJs {

const char *OwnershipQosPolicyProxy::KindField::NAME = "kind";

const char *OwnershipQosPolicyProxy::MODNAME = "DDS";

const char *OwnershipQosPolicyProxy::NAME = "OwnershipQosPolicy";

Napi::Object
OwnershipQosPolicyProxy::Init(Napi::Env env, Napi::Object exports, ConstructorRegistry *ctorReg)
{
    Napi::Function ctor_func = DefineClass(
        env,
        OwnershipQosPolicyProxy::NAME,
        {}
    );

    Napi::FunctionReference *ctor_ref = new Napi::FunctionReference();
    *ctor_ref = Napi::Persistent(ctor_func);
    ctorReg->setConstructorFor(DottedName({ OwnershipQosPolicyProxy::MODNAME, OwnershipQosPolicyProxy::NAME }), ctor_ref);

    exports.Set(OwnershipQosPolicyProxy::NAME, ctor_func);

    return exports;
}


OwnershipQosPolicyProxy::NapiContainer
OwnershipQosPolicyProxy::NewInstance(Napi::Env env)
{
    Napi::EscapableHandleScope scope(env);
    Napi::FunctionReference *ctor_ref = env.GetInstanceData< ConstructorRegistry >()->getConstructorFor(DottedName({ OwnershipQosPolicyProxy::MODNAME, OwnershipQosPolicyProxy::NAME }));
    if (nullptr == ctor_ref)
    {
        throw Napi::Error::New(env, "Internal error: Constructor for OwnershipQosPolicy not available.");
    }

    return scope.Escape((napi_value)ctor_ref->New({})).As< NapiContainer >();
}


OwnershipQosPolicyProxy::NapiContainer
OwnershipQosPolicyProxy::NewInstance(Napi::Env env, CppEntity const& cppInstance)
{
    NapiContainer result = NewInstance(env);
    FromCpp(env, cppInstance, result);

    return result;
}


void
OwnershipQosPolicyProxy::FromCpp(Napi::Env env, CppEntity const& cppVal, NapiContainer& jsValOut)
{
    jsValOut.Set(OwnershipQosPolicyProxy::KindField::NAME, OwnershipQosPolicyProxy::KindField::Proxy::NewInstance(env, cppVal.kind));
}


void
OwnershipQosPolicyProxy::FromJs(Napi::Env env, NapiContainer const& jsVal, CppEntity& cppValOut)
{
    OwnershipQosPolicyProxy::KindField::Proxy::FromJs(env, jsVal.Get(OwnershipQosPolicyProxy::KindField::NAME).As< OwnershipQosPolicyProxy::KindField::Proxy::NapiContainer >(), cppValOut.kind);
}


OwnershipQosPolicyProxy::OwnershipQosPolicyProxy(Napi::CallbackInfo const& info):
    Napi::ObjectWrap< OwnershipQosPolicyProxy >(info)
{
    NapiContainer this_instance = info.This().As< NapiContainer >();
    this_instance.Set(OwnershipQosPolicyProxy::KindField::NAME, OwnershipQosPolicyProxy::KindField::Proxy::NewInstance(info.Env()));
}

} // end namespace DdsJs

// vim: set ts=4 sw=4 expandtab:
