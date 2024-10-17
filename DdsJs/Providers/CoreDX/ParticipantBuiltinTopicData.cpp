/**
 * \file CoreDX/ParticipantBuiltinTopicData.cpp
 * \brief Contains the implementation for the \c ParticipantBuiltinTopicData class.
 * \author Rolando J. Nieves
 * \date 2024-06-12 14:49:13
 */

// --------------------------------------------------------------------------
// Local Definition
#include "ParticipantBuiltinTopicData.hh"


namespace DdsJs
{

const char *ParticipantBuiltinTopicDataProxy::KeyField::NAME = "key";
const char *ParticipantBuiltinTopicDataProxy::UserDataField::NAME = "user_data";

const char *ParticipantBuiltinTopicDataProxy::MODNAME = "DDS";
const char *ParticipantBuiltinTopicDataProxy::NAME = "ParticipantBuiltinTopicData";


void
ParticipantBuiltinTopicDataProxy::FromCpp(Napi::Env env, CppEntity const& cppVal, NapiContainer& jsValOut)
{
    jsValOut.Set(KeyField::NAME, KeyField::Proxy::NewInstance(env, cppVal.key));
    jsValOut.Set(UserDataField::NAME, UserDataField::Proxy::NewInstance(env, cppVal.user_data));
}


void
ParticipantBuiltinTopicDataProxy::FromJs(Napi::Env env, NapiContainer const& jsVal, CppEntity& cppValOut)
{
    KeyField::Proxy::FromJs(env, jsVal.Get(KeyField::NAME).As< KeyField::Proxy::NapiContainer >(), cppValOut.key);
    UserDataField::Proxy::FromJs(env, jsVal.Get(UserDataField::NAME).As< UserDataField::Proxy::NapiContainer >(), cppValOut.user_data);
}


Napi::Object
ParticipantBuiltinTopicDataProxy::Init(Napi::Env env, Napi::Object exports, ConstructorRegistry *ctorReg)
{
    Napi::Function ctor_func = DefineClass(
        env,
        ParticipantBuiltinTopicDataProxy::NAME,
        {}
    );

    Napi::FunctionReference *ctor_ref = new Napi::FunctionReference();
    *ctor_ref = Napi::Persistent(ctor_func);
    ctorReg->setConstructorFor(DottedName({ ParticipantBuiltinTopicDataProxy::MODNAME, ParticipantBuiltinTopicDataProxy::NAME }), ctor_ref);

    exports.Set(ParticipantBuiltinTopicDataProxy::NAME, ctor_func);

    return exports;
}


ParticipantBuiltinTopicDataProxy::NapiContainer
ParticipantBuiltinTopicDataProxy::NewInstance(Napi::Env env)
{
    Napi::EscapableHandleScope scope(env);
    Napi::FunctionReference *ctor_ref = env.GetInstanceData< ConstructorRegistry >()->getConstructorFor(DottedName({ ParticipantBuiltinTopicDataProxy::MODNAME, ParticipantBuiltinTopicDataProxy::NAME }));
    if (nullptr == ctor_ref)
    {
        throw Napi::Error::New(env, "Internal error: Constructor for ParticipantBuiltinTopicData not available.");
    }

    return scope.Escape((napi_value)ctor_ref->New({})).As< NapiContainer >();
}


ParticipantBuiltinTopicDataProxy::NapiContainer
ParticipantBuiltinTopicDataProxy::NewInstance(Napi::Env env, CppEntity const& cppInstance)
{
    NapiContainer result = NewInstance(env);
    FromCpp(env, cppInstance, result);

    return result;
}


ParticipantBuiltinTopicDataProxy::ParticipantBuiltinTopicDataProxy(Napi::CallbackInfo const& info):
    Napi::ObjectWrap< ParticipantBuiltinTopicDataProxy >(info)
{
    NapiContainer this_instance = info.This().As< NapiContainer >();
    CppEntity blank_value;
    FromCpp(info.Env(), blank_value, this_instance);
}

} // end namespace DdsJs

// vim: set ts=4 sw=4 expandtab:
