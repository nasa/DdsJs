/**
 * \file Duration.cpp
 * \brief Contains the implementation for the \c DurationProxy class.
 * \author Rolando J. Nieves <rolando.j.nieves@nasa.gov>
 * \date 2024-01-31 15:50:56
 */

#include "Duration.hh"


namespace DdsJs {

const char *DurationProxy::SecField::NAME = "sec";

const char *DurationProxy::NanosecField::NAME = "nanosec";

const char *DurationProxy::MODNAME = "DDS";

const char *DurationProxy::NAME = "Duration";

Napi::Object
DurationProxy::Init(Napi::Env env, Napi::Object exports, ConstructorRegistry *ctorReg)
{
    Napi::Function ctor_func = DefineClass(
        env,
        DurationProxy::NAME,
        {}
    );

    Napi::FunctionReference *ctor_ref = new Napi::FunctionReference();
    *ctor_ref = Napi::Persistent(ctor_func);
    ctorReg->setConstructorFor(DottedName({ DurationProxy::MODNAME, DurationProxy::NAME }), ctor_ref);

    exports.Set(DurationProxy::NAME, ctor_func);

    return exports;
}


DurationProxy::NapiContainer
DurationProxy::NewInstance(Napi::Env env)
{
    Napi::EscapableHandleScope scope(env);
    Napi::FunctionReference *ctor_ref = env.GetInstanceData< ConstructorRegistry >()->getConstructorFor(DottedName({ DurationProxy::MODNAME, DurationProxy::NAME }));
    if (nullptr == ctor_ref)
    {
        throw Napi::Error::New(env, "Internal error: Constructor for Duration not available.");
    }

    return scope.Escape((napi_value)ctor_ref->New({})).As< NapiContainer >();
}


DurationProxy::NapiContainer
DurationProxy::NewInstance(Napi::Env env, CppEntity const& cppInstance)
{
    NapiContainer result = NewInstance(env);
    FromCpp(env, cppInstance, result);

    return result;
}


void
DurationProxy::FromCpp(Napi::Env env, CppEntity const& cppVal, NapiContainer& jsValOut)
{
    jsValOut.Set(DurationProxy::SecField::NAME, DurationProxy::SecField::Proxy::NewInstance(env, cppVal.sec));
    jsValOut.Set(DurationProxy::NanosecField::NAME, DurationProxy::NanosecField::Proxy::NewInstance(env, cppVal.nanosec));
}


void
DurationProxy::FromJs(Napi::Env env, NapiContainer const& jsVal, CppEntity& cppValOut)
{
    DurationProxy::SecField::Proxy::FromJs(env, jsVal.Get(DurationProxy::SecField::NAME).As< DurationProxy::SecField::Proxy::NapiContainer >(), cppValOut.sec);
    DurationProxy::NanosecField::Proxy::FromJs(env, jsVal.Get(DurationProxy::NanosecField::NAME).As< DurationProxy::NanosecField::Proxy::NapiContainer >(), cppValOut.nanosec);
}


DurationProxy::DurationProxy(Napi::CallbackInfo const& info):
    Napi::ObjectWrap< DurationProxy >(info)
{
    NapiContainer this_instance = info.This().As< NapiContainer >();
    this_instance.Set(DurationProxy::SecField::NAME, DurationProxy::SecField::Proxy::NewInstance(info.Env()));
    this_instance.Set(DurationProxy::NanosecField::NAME, DurationProxy::NanosecField::Proxy::NewInstance(info.Env()));
}

} // end namespace DdsJs

// vim: set ts=4 sw=4 expandtab:
