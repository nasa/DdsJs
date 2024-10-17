/**
 * \file CoreDX/UserDataQosPolicy.cpp
 * \brief Contains the implementation of the \c UserDataQosPolicyProxy class.
 * \author Rolando J. Nieves <rolando.j.nieves@nasa.gov>
 * \date 2024-01-22 15:02:44
 */

// --------------------------------------------------------------------------
// Local Definition
#include "UserDataQosPolicy.hh"


namespace DdsJs
{

const char* UserDataQosPolicyProxy::ValueField::NAME = "value";

const char* UserDataQosPolicyProxy::MODNAME = "DDS";

const char* UserDataQosPolicyProxy::NAME = "UserDataQosPolicy";

Napi::Object
UserDataQosPolicyProxy::Init(Napi::Env env, Napi::Object exports, ConstructorRegistry *ctorReg)
{
    Napi::Function ctor_func = DefineClass(
        env,
        UserDataQosPolicyProxy::NAME,
        {}
    );

    Napi::FunctionReference *ctor_ref = new Napi::FunctionReference();
    *ctor_ref = Napi::Persistent(ctor_func);
    ctorReg->setConstructorFor(DottedName({ UserDataQosPolicyProxy::MODNAME, UserDataQosPolicyProxy::NAME }), ctor_ref);

    exports.Set(UserDataQosPolicyProxy::NAME, ctor_func);

    return exports;
}


UserDataQosPolicyProxy::NapiContainer
UserDataQosPolicyProxy::NewInstance(Napi::Env env)
{
    Napi::EscapableHandleScope scope(env);
    Napi::FunctionReference *ctor_ref = env.GetInstanceData< ConstructorRegistry >()->getConstructorFor(DottedName({ UserDataQosPolicyProxy::MODNAME, UserDataQosPolicyProxy::NAME }));
    if (nullptr == ctor_ref)
    {
        throw Napi::Error::New(env, "Internal error: Constructor for UserDataQosPolicy not available.");
    }

    return scope.Escape((napi_value)ctor_ref->New({})).As< NapiContainer >();
}


UserDataQosPolicyProxy::NapiContainer
UserDataQosPolicyProxy::NewInstance(Napi::Env env, CppEntity const& cppInstance)
{
    NapiContainer result = NewInstance(env);
    FromCpp(env, cppInstance, result);

    return result;
}


void
UserDataQosPolicyProxy::FromCpp(Napi::Env env, CppEntity const& cppVal, NapiContainer& jsValOut)
{
    jsValOut.Set(UserDataQosPolicyProxy::ValueField::NAME, UserDataQosPolicyProxy::ValueField::Proxy::NewInstance(env, cppVal.value));
}


void
UserDataQosPolicyProxy::FromJs(Napi::Env env, NapiContainer const& jsVal, CppEntity& cppValOut)
{
    UserDataQosPolicyProxy::ValueField::Proxy::FromJs(env, jsVal.Get(UserDataQosPolicyProxy::ValueField::NAME).As< UserDataQosPolicyProxy::ValueField::Proxy::NapiContainer >(), cppValOut.value);
}


UserDataQosPolicyProxy::UserDataQosPolicyProxy(Napi::CallbackInfo const& info):
    Napi::ObjectWrap< UserDataQosPolicyProxy >(info)
{
    NapiContainer this_instance = info.This().As< NapiContainer >();
    this_instance.Set(UserDataQosPolicyProxy::ValueField::NAME, UserDataQosPolicyProxy::ValueField::Proxy::NewInstance(info.Env()));
}

} // end namespace DdsJs

// vim: set ts=4 sw=4 expandtab:
