/**
 * \file CoreDX/TopicDataQosPolicy.cpp
 * \brief Contains the implementation for the \c TopicDataQosPolicyProxy class.
 * \author Rolando J. Nieves <rolando.j.nieves@nasa.gov>
 * \date 2024-01-31 14:56:41
 */

// --------------------------------------------------------------------------
// Local Definition
#include "TopicDataQosPolicy.hh"


namespace DdsJs
{

const char* TopicDataQosPolicyProxy::ValueField::NAME = "value";

const char* TopicDataQosPolicyProxy::MODNAME = "DDS";

const char* TopicDataQosPolicyProxy::NAME = "TopicDataQosPolicy";

Napi::Object
TopicDataQosPolicyProxy::Init(Napi::Env env, Napi::Object exports, ConstructorRegistry *ctorReg)
{
    Napi::Function ctor_func = DefineClass(
        env,
        TopicDataQosPolicyProxy::NAME,
        {}
    );

    Napi::FunctionReference *ctor_ref = new Napi::FunctionReference();
    *ctor_ref = Napi::Persistent(ctor_func);
    ctorReg->setConstructorFor(DottedName({ TopicDataQosPolicyProxy::MODNAME, TopicDataQosPolicyProxy::NAME }), ctor_ref);

    exports.Set(TopicDataQosPolicyProxy::NAME, ctor_func);

    return exports;
}


TopicDataQosPolicyProxy::NapiContainer
TopicDataQosPolicyProxy::NewInstance(Napi::Env env)
{
    Napi::EscapableHandleScope scope(env);
    Napi::FunctionReference *ctor_ref = env.GetInstanceData< ConstructorRegistry >()->getConstructorFor(DottedName({ TopicDataQosPolicyProxy::MODNAME, TopicDataQosPolicyProxy::NAME }));
    if (nullptr == ctor_ref)
    {
        throw Napi::Error::New(env, "Internal error: Constructor for TopicDataQosPolicy not available.");
    }

    return scope.Escape((napi_value)ctor_ref->New({})).As< NapiContainer >();
}


TopicDataQosPolicyProxy::NapiContainer
TopicDataQosPolicyProxy::NewInstance(Napi::Env env, CppEntity const& cppInstance)
{
    NapiContainer result = NewInstance(env);
    FromCpp(env, cppInstance, result);

    return result;
}


void
TopicDataQosPolicyProxy::FromCpp(Napi::Env env, CppEntity const& cppVal, NapiContainer& jsValOut)
{
    jsValOut.Set(TopicDataQosPolicyProxy::ValueField::NAME, TopicDataQosPolicyProxy::ValueField::Proxy::NewInstance(env, cppVal.value));
}


void
TopicDataQosPolicyProxy::FromJs(Napi::Env env, NapiContainer const& jsVal, CppEntity& cppValOut)
{
    TopicDataQosPolicyProxy::ValueField::Proxy::FromJs(env, jsVal.Get(TopicDataQosPolicyProxy::ValueField::NAME).As< TopicDataQosPolicyProxy::ValueField::Proxy::NapiContainer >(), cppValOut.value);
}


TopicDataQosPolicyProxy::TopicDataQosPolicyProxy(Napi::CallbackInfo const& info):
    Napi::ObjectWrap< TopicDataQosPolicyProxy >(info)
{
    NapiContainer this_instance = info.This().As< NapiContainer >();
    this_instance.Set(TopicDataQosPolicyProxy::ValueField::NAME, TopicDataQosPolicyProxy::ValueField::Proxy::NewInstance(info.Env()));
}

} // end namespace DdsJs

// vim: set ts=4 sw=4 expandtab:
