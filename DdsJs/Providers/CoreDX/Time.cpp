/**
 * \file Time.cpp
 * \brief Contains the implementation for the \c TimeProxy class.
 * \author Rolando J. Nieves <rolando.j.nieves@nasa.gov>
 * \date 2024-03-20 15:56:38
 */

#include "Time.hh"


namespace DdsJs {

const char *TimeProxy::SecField::NAME = "sec";

const char *TimeProxy::NanosecField::NAME = "nanosec";

const char *TimeProxy::MODNAME = "DDS";

const char *TimeProxy::NAME = "Time";

Napi::Object
TimeProxy::Init(Napi::Env env, Napi::Object exports, ConstructorRegistry *ctorReg)
{
    Napi::Function ctor_func = DefineClass(
        env,
        TimeProxy::NAME,
        {}
    );

    Napi::FunctionReference *ctor_ref = new Napi::FunctionReference();
    *ctor_ref = Napi::Persistent(ctor_func);
    ctorReg->setConstructorFor(DottedName({ TimeProxy::MODNAME, TimeProxy::NAME }), ctor_ref);

    exports.Set(TimeProxy::NAME, ctor_func);

    return exports;
}


TimeProxy::NapiContainer
TimeProxy::NewInstance(Napi::Env env)
{
    Napi::EscapableHandleScope scope(env);
    Napi::FunctionReference *ctor_ref = env.GetInstanceData< ConstructorRegistry >()->getConstructorFor(DottedName({ TimeProxy::MODNAME, TimeProxy::NAME }));
    if (nullptr == ctor_ref)
    {
        throw Napi::Error::New(env, "Internal error: Constructor for Time not available.");
    }

    return scope.Escape((napi_value)ctor_ref->New({})).As< NapiContainer >();
}


TimeProxy::NapiContainer
TimeProxy::NewInstance(Napi::Env env, CppEntity const& cppInstance)
{
    NapiContainer result = NewInstance(env);
    FromCpp(env, cppInstance, result);

    return result;
}


void
TimeProxy::FromCpp(Napi::Env env, CppEntity const& cppVal, NapiContainer& jsValOut)
{
    jsValOut.Set(TimeProxy::SecField::NAME, TimeProxy::SecField::Proxy::NewInstance(env, cppVal.sec));
    jsValOut.Set(TimeProxy::NanosecField::NAME, TimeProxy::NanosecField::Proxy::NewInstance(env, cppVal.nanosec));
}


void
TimeProxy::FromJs(Napi::Env env, NapiContainer const& jsVal, CppEntity& cppValOut)
{
    TimeProxy::SecField::Proxy::FromJs(env, jsVal.Get(TimeProxy::SecField::NAME).As< TimeProxy::SecField::Proxy::NapiContainer >(), cppValOut.sec);
    TimeProxy::NanosecField::Proxy::FromJs(env, jsVal.Get(TimeProxy::NanosecField::NAME).As< TimeProxy::NanosecField::Proxy::NapiContainer >(), cppValOut.nanosec);
}


TimeProxy::TimeProxy(Napi::CallbackInfo const& info):
    Napi::ObjectWrap< TimeProxy >(info)
{
    NapiContainer this_instance = info.This().As< NapiContainer >();
    this_instance.Set(TimeProxy::SecField::NAME, TimeProxy::SecField::Proxy::NewInstance(info.Env()));
    this_instance.Set(TimeProxy::NanosecField::NAME, TimeProxy::NanosecField::Proxy::NewInstance(info.Env()));
}

} // end namespace DdsJs

// vim: set ts=4 sw=4 expandtab:
