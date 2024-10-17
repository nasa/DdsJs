/**
 * \file CycloneDDS/DestinationOrderQosPolicy.cpp
 * \brief Contains the implementation of the \c DestinationOrderQosPolicyProxy class.
 * \author Rolando J. Nieves <rolando.j.nieves@nasa.gov>
 * \date 2024-10-03 13:47:57
 */

// --------------------------------------------------------------------------
// Local Definition
#include "DestinationOrderQosPolicy.hh"


namespace DdsJs
{

const char *DestinationOrderQosPolicyProxy::KindField::NAME = "kind";

const char *DestinationOrderQosPolicyProxy::MODNAME = "DDS";

const char *DestinationOrderQosPolicyProxy::NAME = "DestinationOrderQosPolicy";

Napi::Object
DestinationOrderQosPolicyProxy::Init(Napi::Env env, Napi::Object exports, ConstructorRegistry *ctorReg)
{
    Napi::Function ctor_func = DefineClass(
        env,
        DestinationOrderQosPolicyProxy::NAME,
        {}
    );

    Napi::FunctionReference *ctor_ref = new Napi::FunctionReference();
    *ctor_ref = Napi::Persistent(ctor_func);
    ctorReg->setConstructorFor(DottedName({ DestinationOrderQosPolicyProxy::MODNAME, DestinationOrderQosPolicyProxy::NAME }), ctor_ref);

    exports.Set(DestinationOrderQosPolicyProxy::NAME, ctor_func);

    return exports;
}


DestinationOrderQosPolicyProxy::NapiContainer
DestinationOrderQosPolicyProxy::NewInstance(Napi::Env env)
{
    Napi::EscapableHandleScope scope(env);
    Napi::FunctionReference *ctor_ref = env.GetInstanceData< ConstructorRegistry >()->getConstructorFor(DottedName({ DestinationOrderQosPolicyProxy::MODNAME, DestinationOrderQosPolicyProxy::NAME }));
    if (nullptr == ctor_ref)
    {
        throw Napi::Error::New(env, "Internal error: Constructor for DestinationOrderQosPolicy not available.");
    }

    return scope.Escape((napi_value)ctor_ref->New({})).As< NapiContainer >();
}


DestinationOrderQosPolicyProxy::NapiContainer
DestinationOrderQosPolicyProxy::NewInstance(Napi::Env env, CppEntity const& cppInstance)
{
    NapiContainer result = NewInstance(env);
    FromCpp(env, cppInstance, result);

    return result;
}


void
DestinationOrderQosPolicyProxy::FromCpp(Napi::Env env, CppEntity const& cppVal, NapiContainer& jsValOut)
{
    DestinationOrderQosPolicyProxy::KindField::Proxy::CppEntity kind;

    if (!dds_qget_destination_order(cppVal, &kind))
    {
        throw Napi::Error::New(env, "Internal error: Could not extract Destination Order QoS policy information.");
    }
    jsValOut.Set(DestinationOrderQosPolicyProxy::KindField::NAME, DestinationOrderQosPolicyProxy::KindField::Proxy::NewInstance(env, kind));
}


void
DestinationOrderQosPolicyProxy::FromJs(Napi::Env env, NapiContainer const& jsVal, CppEntity& cppValOut)
{
    DestinationOrderQosPolicyProxy::KindField::Proxy::CppEntity kind;

    DestinationOrderQosPolicyProxy::KindField::Proxy::FromJs(env, jsVal.Get(DestinationOrderQosPolicyProxy::KindField::NAME).As< DestinationOrderQosPolicyProxy::KindField::Proxy::NapiContainer >(), kind);

    dds_qset_destination_order(cppValOut, kind);
}


DestinationOrderQosPolicyProxy::DestinationOrderQosPolicyProxy(Napi::CallbackInfo const& info):
    Napi::ObjectWrap< DestinationOrderQosPolicyProxy >(info)
{
    NapiContainer this_instance = info.This().As< NapiContainer >();
    this_instance.Set(DestinationOrderQosPolicyProxy::KindField::NAME, DestinationOrderQosPolicyProxy::KindField::Proxy::NewInstance(info.Env()));
}

} // end namespace DdsJs

// vim: set ts=4 sw=4 expandtab:
