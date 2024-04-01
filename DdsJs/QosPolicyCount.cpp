/**
 * \file DdsJs/QosPolicyCount.cpp
 * \brief Contains the implementation for the \c QosPolicyCountProxy class.
 * \author Rolando J. Nieves
 * \date 2024-03-11 16:26:15
 */

#include "QosPolicyCount.hh"


namespace DdsJs
{

const char *QosPolicyCountProxy::PolicyIdField::NAME = "policy_id";
const char *QosPolicyCountProxy::CountField::NAME = "count";

const char *QosPolicyCountProxy::MODNAME = "DDS";
const char *QosPolicyCountProxy::NAME = "QosPolicyCount";

Napi::Object
QosPolicyCountProxy::Init(Napi::Env env, Napi::Object exports, ConstructorRegistry *ctorReg)
{
    Napi::Function ctor_func = DefineClass(
        env,
        QosPolicyCountProxy::NAME,
        {}
    );

    Napi::FunctionReference *ctor_ref = new Napi::FunctionReference();
    *ctor_ref = Napi::Persistent(ctor_func);
    ctorReg->setConstructorFor(DottedName({ QosPolicyCountProxy::MODNAME, QosPolicyCountProxy::NAME }), ctor_ref);

    exports.Set(QosPolicyCountProxy::NAME, ctor_func);

    return exports;
}


QosPolicyCountProxy::NapiContainer
QosPolicyCountProxy::NewInstance(Napi::Env env)
{
    Napi::EscapableHandleScope scope(env);
    Napi::FunctionReference *ctor_ref = env.GetInstanceData< ConstructorRegistry >()->getConstructorFor(DottedName({ QosPolicyCountProxy::MODNAME, QosPolicyCountProxy::NAME }));
    if (nullptr == ctor_ref)
    {
        throw Napi::Error::New(env, "Internal error: Constructor for QosPolicyCount not available.");
    }

    return scope.Escape((napi_value)ctor_ref->New({})).As< NapiContainer >();
}


QosPolicyCountProxy::NapiContainer
QosPolicyCountProxy::NewInstance(Napi::Env env, CppEntity const& cppInstance)
{
    NapiContainer result = NewInstance(env);
    FromCpp(env, cppInstance, result);

    return result;
}


void
QosPolicyCountProxy::FromCpp(Napi::Env env, CppEntity const& cppVal, NapiContainer& jsValOut)
{
    jsValOut.Set(PolicyIdField::NAME, PolicyIdField::Proxy::NewInstance(env, cppVal.policy_id));
    jsValOut.Set(CountField::NAME, CountField::Proxy::NewInstance(env, cppVal.count));
}


void
QosPolicyCountProxy::FromJs(Napi::Env env, NapiContainer const& jsVal, CppEntity& cppValOut)
{
    PolicyIdField::Proxy::FromJs(env, jsVal.Get(PolicyIdField::NAME).As< PolicyIdField::Proxy::NapiContainer >(), cppValOut.policy_id);
    CountField::Proxy::FromJs(env, jsVal.Get(CountField::NAME).As< CountField::Proxy::NapiContainer >(), cppValOut.count);
}


QosPolicyCountProxy::QosPolicyCountProxy(Napi::CallbackInfo const& info):
    Napi::ObjectWrap< QosPolicyCountProxy >(info)
{
    NapiContainer this_instance = info.This().As< NapiContainer >();
    CppEntity blank_value;
    FromCpp(info.Env(), blank_value, this_instance);
}

} // end namespace DdsJs

// vim: set ts=4 sw=4 expandtab:
