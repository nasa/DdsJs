/**
 * \file CycloneDDS/Duration.cpp
 * \brief Contains the implementation for the \c DdsJs::DurationProxy class.
 * \author Rolando J. Nieves
 * \date 2024-10-04 16:19:27
 */

// --------------------------------------------------------------------------
// Local Definition
#include "Duration.hh"


namespace DdsJs
{

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
    // Adapt the single, 64-bit UNIX epoch in nanoseconds value used by
    // CycloneDDS into the broken down seconds/nanoseconds tuple described in
    // the DDS API IDL.
    SecField::Proxy::CppEntity sec_value = cppVal / DDS_NSECS_IN_SEC;
    NanosecField::Proxy::CppEntity nanosec_value = cppVal % DDS_NSECS_IN_SEC;

    jsValOut.Set(SecField::NAME, SecField::Proxy::NewInstance(env, sec_value));
    jsValOut.Set(NanosecField::NAME, NanosecField::Proxy::NewInstance(env, nanosec_value));
}


void
DurationProxy::FromJs(Napi::Env env, NapiContainer const& jsVal, CppEntity& cppValOut)
{
    // Adapt the seconds/nanoseconds tuple described in the DDS API IDL to the
    // single, 64-bit UNIX epoch in nanoseconds value used by CycloneDDS.

    SecField::Proxy::CppEntity sec_value;
    NanosecField::Proxy::CppEntity nanosec_value;

    SecField::Proxy::FromJs(env, jsVal.Get(SecField::NAME).As< SecField::Proxy::NapiContainer >(), sec_value);
    NanosecField::Proxy::FromJs(env, jsVal.Get(NanosecField::NAME).As< NanosecField::Proxy::NapiContainer >(), nanosec_value);

    cppValOut = (sec_value * DDS_NSECS_IN_SEC) + nanosec_value;
}


DurationProxy::DurationProxy(Napi::CallbackInfo const& info):
    Napi::ObjectWrap< DurationProxy >(info)
{
    NapiContainer this_instance = info.This().As< NapiContainer >();
    CppEntity blank_value;

    FromCpp(info.Env(), blank_value, this_instance);
}

} // end namespace DdsJs

// vim: set ts=4 sw=4 expandtab:
