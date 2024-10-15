/**
 * \file DdsJs/SampleLostStatus.cpp
 * \brief Contains the implementation for the \c SampleLostStatusProxy class.
 * \author Rolando J. Nieves
 * \date 2024-03-12 18:05:31
 */


#include "SampleLostStatus.hh"


namespace DdsJs
{

const char *SampleLostStatusProxy::TotalCountField::NAME = "total_count";
const char *SampleLostStatusProxy::TotalCountChangeField::NAME = "total_count_change";

const char *SampleLostStatusProxy::MODNAME = "DDS";
const char *SampleLostStatusProxy::NAME = "SampleLostStatus";

Napi::Object
SampleLostStatusProxy::Init(Napi::Env env, Napi::Object exports, ConstructorRegistry *ctorReg)
{
    Napi::Function ctor_func = DefineClass(
        env,
        SampleLostStatusProxy::NAME,
        {}
    );

    Napi::FunctionReference *ctor_ref = new Napi::FunctionReference();
    *ctor_ref = Napi::Persistent(ctor_func);
    ctorReg->setConstructorFor(DottedName({ SampleLostStatusProxy::MODNAME, SampleLostStatusProxy::NAME }), ctor_ref);

    exports.Set(SampleLostStatusProxy::NAME, ctor_func);

    return exports;
}


SampleLostStatusProxy::NapiContainer
SampleLostStatusProxy::NewInstance(Napi::Env env)
{
    Napi::EscapableHandleScope scope(env);
    Napi::FunctionReference *ctor_ref = env.GetInstanceData< ConstructorRegistry >()->getConstructorFor(DottedName({ SampleLostStatusProxy::MODNAME, SampleLostStatusProxy::NAME }));
    if (nullptr == ctor_ref)
    {
        throw Napi::Error::New(env, "Internal error: Constructor for SampleLostStatus not available.");
    }

    return scope.Escape((napi_value)ctor_ref->New({})).As< NapiContainer >();
}


SampleLostStatusProxy::NapiContainer
SampleLostStatusProxy::NewInstance(Napi::Env env, CppEntity const& cppInstance)
{
    NapiContainer result = NewInstance(env);
    FromCpp(env, cppInstance, result);

    return result;
}


void
SampleLostStatusProxy::FromCpp(Napi::Env env, CppEntity const& cppVal, NapiContainer& jsValOut)
{
    jsValOut.Set(TotalCountField::NAME, TotalCountField::Proxy::NewInstance(env, cppVal.total_count));
    jsValOut.Set(TotalCountChangeField::NAME, TotalCountChangeField::Proxy::NewInstance(env, cppVal.total_count_change));
}


void
SampleLostStatusProxy::FromJs(Napi::Env env, NapiContainer const& jsVal, CppEntity& cppValOut)
{
    TotalCountField::Proxy::FromJs(env, jsVal.Get(TotalCountField::NAME).As< TotalCountField::Proxy::NapiContainer >(), cppValOut.total_count);
    TotalCountChangeField::Proxy::FromJs(env, jsVal.Get(TotalCountChangeField::NAME).As< TotalCountChangeField::Proxy::NapiContainer >(), cppValOut.total_count_change);
}


SampleLostStatusProxy::SampleLostStatusProxy(Napi::CallbackInfo const& info):
    Napi::ObjectWrap< SampleLostStatusProxy >(info)
{
    NapiContainer this_instance = info.This().As< NapiContainer >();
    CppEntity blank_value;

    FromCpp(info.Env(), blank_value, this_instance);
}

} // end namespace DdsJs

// vim: set ts=4 sw=4 expandtab:
