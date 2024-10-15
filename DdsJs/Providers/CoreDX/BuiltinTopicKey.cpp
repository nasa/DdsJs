/**
 * \file DdsJs/BuiltinTopicKey.cpp
 * \brief Contains the implementation for the \c BuiltinTopicKeyProxy class.
 * \author Rolando J. Nieves
 * \date 2024-03-11 14:44:40
 */

#include "BuiltinTopicKey.hh"


namespace DdsJs
{

const char *BuiltinTopicKeyProxy::ValueField::NAME = "value";

const char *BuiltinTopicKeyProxy::MODNAME = "DDS";
const char *BuiltinTopicKeyProxy::NAME = "BuiltinTopicKey";

Napi::Object
BuiltinTopicKeyProxy::Init(Napi::Env env, Napi::Object exports, ConstructorRegistry *ctorReg)
{
    Napi::Function ctor_func = DefineClass(
        env,
        BuiltinTopicKeyProxy::NAME,
        {}
    );

    Napi::FunctionReference *ctor_ref = new Napi::FunctionReference();
    *ctor_ref = Napi::Persistent(ctor_func);
    ctorReg->setConstructorFor(DottedName({ BuiltinTopicKeyProxy::MODNAME, BuiltinTopicKeyProxy::NAME }), ctor_ref);

    exports.Set(BuiltinTopicKeyProxy::NAME, ctor_func);

    return exports;
}


BuiltinTopicKeyProxy::NapiContainer
BuiltinTopicKeyProxy::NewInstance(Napi::Env env)
{
    Napi::EscapableHandleScope scope(env);
    Napi::FunctionReference *ctor_ref = env.GetInstanceData< ConstructorRegistry >()->getConstructorFor(DottedName({ BuiltinTopicKeyProxy::MODNAME, BuiltinTopicKeyProxy::NAME }));
    if (nullptr == ctor_ref)
    {
        throw Napi::Error::New(env, "Internal error: Constructor for BuiltinTopicKey not available.");
    }

    return scope.Escape((napi_value)ctor_ref->New({})).As< NapiContainer >();
}


BuiltinTopicKeyProxy::NapiContainer
BuiltinTopicKeyProxy::NewInstance(Napi::Env env, CppEntity const& cppInstance)
{
    NapiContainer result = NewInstance(env);
    FromCpp(env, cppInstance, result);

    return result;
}


void
BuiltinTopicKeyProxy::FromCpp(Napi::Env env, CppEntity const& cppVal, NapiContainer& jsValOut)
{
    jsValOut.Set(BuiltinTopicKeyProxy::ValueField::NAME, BuiltinTopicKeyProxy::ValueField::Proxy::NewInstance(env, cppVal.value));
}


void
BuiltinTopicKeyProxy::FromJs(Napi::Env env, NapiContainer const& jsVal, CppEntity& cppValOut)
{
    BuiltinTopicKeyProxy::ValueField::Proxy::FromJs(env, jsVal.Get(BuiltinTopicKeyProxy::ValueField::NAME).As< BuiltinTopicKeyProxy::ValueField::Proxy::NapiContainer >(), cppValOut.value);
}


BuiltinTopicKeyProxy::BuiltinTopicKeyProxy(Napi::CallbackInfo const& info):
    Napi::ObjectWrap< BuiltinTopicKeyProxy >(info)
{
    NapiContainer this_instance = info.This().As< NapiContainer >();
    this_instance.Set(BuiltinTopicKeyProxy::ValueField::NAME, BuiltinTopicKeyProxy::ValueField::Proxy::NewInstance(info.Env()));
}

} // end namespace DdsJs

// vim: set ts=4 sw=4 expandtab:
