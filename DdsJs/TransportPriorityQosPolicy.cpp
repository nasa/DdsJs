/**
 * \file TransportPriorityQosPolicy.cpp
 * \brief Contains the implementation for the \c TransportPriorityQosPolicyProxy class.
 * \author Rolando J. Nieves <rolando.j.nieves@nasa.gov>
 * \date 2024-01-31 17:17:58
 */

#include "TransportPriorityQosPolicy.hh"


namespace DdsJs {

const char *TransportPriorityQosPolicyProxy::ValueField::NAME = "value";

const char *TransportPriorityQosPolicyProxy::MODNAME = "DDS";

const char *TransportPriorityQosPolicyProxy::NAME = "TransportPriorityQosPolicy";

Napi::Object
TransportPriorityQosPolicyProxy::Init(Napi::Env env, Napi::Object exports, ConstructorRegistry *ctorReg)
{
    Napi::Function ctor_func = DefineClass(
        env,
        TransportPriorityQosPolicyProxy::NAME,
        {}
    );

    Napi::FunctionReference *ctor_ref = new Napi::FunctionReference();
    *ctor_ref = Napi::Persistent(ctor_func);
    ctorReg->setConstructorFor(DottedName({ TransportPriorityQosPolicyProxy::MODNAME, TransportPriorityQosPolicyProxy::NAME }), ctor_ref);

    exports.Set(TransportPriorityQosPolicyProxy::NAME, ctor_func);

    return exports;
}


TransportPriorityQosPolicyProxy::NapiContainer
TransportPriorityQosPolicyProxy::NewInstance(Napi::Env env)
{
    Napi::EscapableHandleScope scope(env);
    Napi::FunctionReference *ctor_ref = env.GetInstanceData< ConstructorRegistry >()->getConstructorFor(DottedName({ TransportPriorityQosPolicyProxy::MODNAME, TransportPriorityQosPolicyProxy::NAME }));
    if (nullptr == ctor_ref)
    {
        throw Napi::Error::New(env, "Internal error: Constructor for TransportPriorityQosPolicy not available.");
    }

    return scope.Escape((napi_value)ctor_ref->New({})).As< NapiContainer >();
}


TransportPriorityQosPolicyProxy::NapiContainer
TransportPriorityQosPolicyProxy::NewInstance(Napi::Env env, CppEntity const& cppInstance)
{
    NapiContainer result = NewInstance(env);
    FromCpp(env, cppInstance, result);

    return result;
}


void
TransportPriorityQosPolicyProxy::FromCpp(Napi::Env env, CppEntity const& cppVal, NapiContainer& jsValOut)
{
    jsValOut.Set(TransportPriorityQosPolicyProxy::ValueField::NAME, TransportPriorityQosPolicyProxy::ValueField::Proxy::NewInstance(env, cppVal.value));
}


void
TransportPriorityQosPolicyProxy::FromJs(Napi::Env env, NapiContainer const& jsVal, CppEntity& cppValOut)
{
    TransportPriorityQosPolicyProxy::ValueField::Proxy::FromJs(env, jsVal.Get(TransportPriorityQosPolicyProxy::ValueField::NAME).As< TransportPriorityQosPolicyProxy::ValueField::Proxy::NapiContainer >(), cppValOut.value);
}


TransportPriorityQosPolicyProxy::TransportPriorityQosPolicyProxy(Napi::CallbackInfo const& info):
    Napi::ObjectWrap< TransportPriorityQosPolicyProxy >(info)
{
    NapiContainer this_instance = info.This().As< NapiContainer >();
    this_instance.Set(TransportPriorityQosPolicyProxy::ValueField::NAME, TransportPriorityQosPolicyProxy::ValueField::Proxy::NewInstance(info.Env()));
}

} // end namespace DdsJs

// vim: set ts=4 sw=4 expandtab:
