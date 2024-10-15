/**
 * \file DdsJs/LivelinessChangedStatus.cpp
 * \brief Contains the implementation for the \c LivelinessChangedStatus class.
 * \author Rolando J. Nieves
 * \date 2024-03-11 12:03:54
 */

#include "LivelinessChangedStatus.hh"


namespace DdsJs
{

const char *LivelinessChangedStatusProxy::AliveCountChangeField::NAME = "alive_count_change";
const char *LivelinessChangedStatusProxy::AliveCountField::NAME = "alive_count";
const char *LivelinessChangedStatusProxy::LastPublicationHandleField::NAME = "last_publication_handle";
const char *LivelinessChangedStatusProxy::NotAliveCountChangeField::NAME = "not_alive_count_change";
const char *LivelinessChangedStatusProxy::NotAliveCountField::NAME = "not_alive_count";

const char *LivelinessChangedStatusProxy::MODNAME = "DDS";
const char *LivelinessChangedStatusProxy::NAME = "LivelinessChangedStatus";

Napi::Object
LivelinessChangedStatusProxy::Init(Napi::Env env, Napi::Object exports, ConstructorRegistry *ctorReg)
{
    Napi::Function ctor_func = DefineClass(
        env,
        LivelinessChangedStatusProxy::NAME,
        {}
    );

    Napi::FunctionReference *ctor_ref = new Napi::FunctionReference();
    *ctor_ref = Napi::Persistent(ctor_func);
    ctorReg->setConstructorFor(DottedName({ LivelinessChangedStatusProxy::MODNAME, LivelinessChangedStatusProxy::NAME }), ctor_ref);

    exports.Set(LivelinessChangedStatusProxy::NAME, ctor_func);

    return exports;
}


LivelinessChangedStatusProxy::NapiContainer
LivelinessChangedStatusProxy::NewInstance(Napi::Env env)
{
    Napi::EscapableHandleScope scope(env);
    Napi::FunctionReference *ctor_ref = env.GetInstanceData< ConstructorRegistry >()->getConstructorFor(DottedName({ LivelinessChangedStatusProxy::MODNAME, LivelinessChangedStatusProxy::NAME }));
    if (nullptr == ctor_ref)
    {
        throw Napi::Error::New(env, "Internal error: Constructor for LivelinessChangedStatus not available.");
    }

    return scope.Escape((napi_value)ctor_ref->New({})).As< NapiContainer >();
}


LivelinessChangedStatusProxy::NapiContainer
LivelinessChangedStatusProxy::NewInstance(Napi::Env env, CppEntity const& cppInstance)
{
    NapiContainer result = NewInstance(env);
    FromCpp(env, cppInstance, result);

    return result;
}


void
LivelinessChangedStatusProxy::FromCpp(Napi::Env env, CppEntity const& cppVal, NapiContainer& jsValOut)
{
    jsValOut.Set(LivelinessChangedStatusProxy::AliveCountField::NAME, LivelinessChangedStatusProxy::AliveCountField::Proxy::NewInstance(env, cppVal.alive_count));
    jsValOut.Set(LivelinessChangedStatusProxy::NotAliveCountField::NAME, LivelinessChangedStatusProxy::NotAliveCountField::Proxy::NewInstance(env, cppVal.not_alive_count));
    jsValOut.Set(LivelinessChangedStatusProxy::AliveCountChangeField::NAME, LivelinessChangedStatusProxy::AliveCountChangeField::Proxy::NewInstance(env, cppVal.alive_count_change));
    jsValOut.Set(LivelinessChangedStatusProxy::NotAliveCountChangeField::NAME, LivelinessChangedStatusProxy::NotAliveCountChangeField::Proxy::NewInstance(env, cppVal.not_alive_count_change));
    jsValOut.Set(LivelinessChangedStatusProxy::LastPublicationHandleField::NAME, LivelinessChangedStatusProxy::LastPublicationHandleField::Proxy::NewInstance(env, cppVal.last_publication_handle));
}


void
LivelinessChangedStatusProxy::FromJs(Napi::Env env, NapiContainer const& jsVal, CppEntity& cppValOut)
{
    LivelinessChangedStatusProxy::AliveCountField::Proxy::FromJs(env, jsVal.Get(LivelinessChangedStatusProxy::AliveCountField::NAME).As< LivelinessChangedStatusProxy::AliveCountField::Proxy::NapiContainer >(), cppValOut.alive_count);
    LivelinessChangedStatusProxy::NotAliveCountField::Proxy::FromJs(env, jsVal.Get(LivelinessChangedStatusProxy::NotAliveCountField::NAME).As< LivelinessChangedStatusProxy::NotAliveCountField::Proxy::NapiContainer >(), cppValOut.not_alive_count);
    LivelinessChangedStatusProxy::AliveCountChangeField::Proxy::FromJs(env, jsVal.Get(LivelinessChangedStatusProxy::AliveCountChangeField::NAME).As< LivelinessChangedStatusProxy::AliveCountChangeField::Proxy::NapiContainer >(), cppValOut.alive_count_change);
    LivelinessChangedStatusProxy::NotAliveCountChangeField::Proxy::FromJs(env, jsVal.Get(LivelinessChangedStatusProxy::NotAliveCountChangeField::NAME).As< LivelinessChangedStatusProxy::NotAliveCountChangeField::Proxy::NapiContainer >(), cppValOut.not_alive_count_change);
    LivelinessChangedStatusProxy::LastPublicationHandleField::Proxy::FromJs(env, jsVal.Get(LivelinessChangedStatusProxy::LastPublicationHandleField::NAME).As< LivelinessChangedStatusProxy::LastPublicationHandleField::Proxy::NapiContainer >(), cppValOut.last_publication_handle);
}


LivelinessChangedStatusProxy::LivelinessChangedStatusProxy(Napi::CallbackInfo const& info):
    Napi::ObjectWrap< LivelinessChangedStatusProxy >(info)
{
    NapiContainer this_instance = info.This().As< NapiContainer >();
    CppEntity empty_entity;
    FromCpp(info.Env(), empty_entity, this_instance);
}

} // end namespace DdsJs

// vim: set ts=4 sw=4 expandtab:
