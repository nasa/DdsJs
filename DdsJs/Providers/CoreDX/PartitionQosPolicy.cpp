/**
 * \file CoreDX/PartitionQosPolicy.cpp
 * \brief Contains the implementation for the \c PartitionQosPolicyProxy class.
 * \author Rolando J. Nieves <rolando.j.nieves@nasa.gov>
 * \date 2024-01-24 15:25:39
 */

// --------------------------------------------------------------------------
// Local Definition
#include "PartitionQosPolicy.hh"


namespace DdsJs
{

const char *PartitionQosPolicyProxy::NameField::NAME = "name";

const char *PartitionQosPolicyProxy::MODNAME = "DDS";

const char *PartitionQosPolicyProxy::NAME = "PartitionQosPolicy";


Napi::Object
PartitionQosPolicyProxy::Init(Napi::Env env, Napi::Object exports, ConstructorRegistry *ctorReg)
{
    Napi::Function ctor_func = DefineClass(
        env,
        PartitionQosPolicyProxy::NAME,
        {}
    );

    Napi::FunctionReference *ctor_ref = new Napi::FunctionReference();
    *ctor_ref = Napi::Persistent(ctor_func);
    ctorReg->setConstructorFor(DottedName({ PartitionQosPolicyProxy::MODNAME, PartitionQosPolicyProxy::NAME }), ctor_ref);

    exports.Set(PartitionQosPolicyProxy::NAME, ctor_func);

    return exports;
}


PartitionQosPolicyProxy::NapiContainer
PartitionQosPolicyProxy::NewInstance(Napi::Env env)
{
    Napi::EscapableHandleScope scope(env);
    Napi::FunctionReference *ctor_ref = env.GetInstanceData< ConstructorRegistry >()->getConstructorFor(DottedName({ PartitionQosPolicyProxy::MODNAME, PartitionQosPolicyProxy::NAME }));
    if (nullptr == ctor_ref)
    {
        throw Napi::Error::New(env, "Internal error: Constructor for PartitionQosPolicy not available.");
    }

    return scope.Escape((napi_value)ctor_ref->New({})).As< NapiContainer >();
}


PartitionQosPolicyProxy::NapiContainer
PartitionQosPolicyProxy::NewInstance(Napi::Env env, CppEntity const& cppInstance)
{
    NapiContainer result = NewInstance(env);
    FromCpp(env, cppInstance, result);

    return result;
}


void
PartitionQosPolicyProxy::FromCpp(Napi::Env env, CppEntity const& cppVal, NapiContainer& jsValOut)
{
    jsValOut.Set(PartitionQosPolicyProxy::NameField::NAME, PartitionQosPolicyProxy::NameField::Proxy::NewInstance(env, cppVal.name));
}


void
PartitionQosPolicyProxy::FromJs(Napi::Env env, NapiContainer const& jsVal, CppEntity& cppValOut)
{
    PartitionQosPolicyProxy::NameField::Proxy::FromJs(env, jsVal.Get(PartitionQosPolicyProxy::NameField::NAME).As< PartitionQosPolicyProxy::NameField::Proxy::NapiContainer >(), cppValOut.name);
}


PartitionQosPolicyProxy::PartitionQosPolicyProxy(Napi::CallbackInfo const& info):
    Napi::ObjectWrap< PartitionQosPolicyProxy >(info)
{
    NapiContainer this_instance = info.This().As< NapiContainer >();
    this_instance.Set(PartitionQosPolicyProxy::NameField::NAME, PartitionQosPolicyProxy::NameField::Proxy::NewInstance(info.Env()));
}

} // end namespace DdsJs

// vim: set ts=4 sw=4 expandtab:
