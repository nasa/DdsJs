/**
 * \file CycloneDDS/PublicationMatchedStatus.cpp
 * \brief Contains the implementation for the \c DdsJs::PublicationMatchedStatusProxy class.
 * \author Rolando J. Nieves
 * \date 2024-10-15 14:25:07
 */

#include "PublicationMatchedStatus.hh"


namespace DdsJs
{

const char *PublicationMatchedStatusProxy::TotalCountField::NAME = "total_count";
const char *PublicationMatchedStatusProxy::TotalCountChangeField::NAME = "total_count_change";

const char *PublicationMatchedStatusProxy::MODNAME = "DDS";
const char *PublicationMatchedStatusProxy::NAME = "PublicationMatchedStatus";

Napi::Object
PublicationMatchedStatusProxy::Init(Napi::Env env, Napi::Object exports, ConstructorRegistry *ctorReg)
{
    Napi::Function ctor_func = DefineClass(
        env,
        NAME,
        {}
    );

    Napi::FunctionReference *ctor_ref = new Napi::FunctionReference();
    *ctor_ref = Napi::Persistent(ctor_func);
    ctorReg->setConstructorFor(DottedName({ MODNAME, NAME }), ctor_ref);

    exports.Set(NAME, ctor_func);

    return exports;
}


PublicationMatchedStatusProxy::NapiContainer
PublicationMatchedStatusProxy::NewInstance(Napi::Env env)
{
    Napi::EscapableHandleScope scope(env);
    Napi::FunctionReference *ctor_ref = env.GetInstanceData< ConstructorRegistry >()->getConstructorFor(DottedName({ MODNAME, NAME }));

    if (nullptr == ctor_ref)
    {
        throw Napi::Error::New(env, "Internal error: Constructor for PublicationMatchedStatus not available.");
    }

    return scope.Escape((napi_value)ctor_ref->New({})).As< NapiContainer >();
}


PublicationMatchedStatusProxy::NapiContainer
PublicationMatchedStatusProxy::NewInstance(Napi::Env env, CppEntity const& cppVal)
{
    NapiContainer result = NewInstance(env);
    FromCpp(env, cppVal, result);

    return result;
}


void
PublicationMatchedStatusProxy::FromCpp(Napi::Env env, CppEntity const& cppVal, NapiContainer& jsValOut)
{
    jsValOut.Set(TotalCountField::NAME, TotalCountField::Proxy::NewInstance(env, cppVal.total_count));
    jsValOut.Set(TotalCountChangeField::NAME, TotalCountChangeField::Proxy::NewInstance(env, cppVal.total_count_change));
    jsValOut.Set(CurrentCountField::NAME, CurrentCountField::Proxy::NewInstance(env, cppVal.current_count));
    jsValOut.Set(CurrentCountChangeField::NAME, CurrentCountChangeField::Proxy::NewInstance(env, cppVal.current_count_change));
    jsValOut.Set(LastSubscriptionHandleField::NAME, LastSubscriptionHandleField::Proxy::NewInstance(env, cppVal.last_subscription_handle));
}


void
PublicationMatchedStatusProxy::FromJs(Napi::Env env, NapiContainer const& jsVal, CppEntity& cppValOut)
{
    TotalCountField::Proxy::FromJs(env, jsVal.Get(TotalCountField::NAME).As< TotalCountField::Proxy::NapiContainer >(), cppValOut.total_count);
    TotalCountChangeField::Proxy::FromJs(env, jsVal.Get(TotalCountChangeField::NAME).As< TotalCountChangeField::Proxy::NapiContainer >(), cppValOut.total_count_change);
    CurrentCountField::Proxy::FromJs(env, jsVal.Get(CurrentCountField::NAME).As< CurrentCountField::Proxy::NapiContainer >(), cppValOut.current_count);
    CurrentCountChangeField::Proxy::FromJs(env, jsVal.Get(CurrentCountChangeField::NAME).As< CurrentCountChangeField::Proxy::NapiContainer >(), cppValOut.current_count_change);
    LastSubscriptionHandleField::Proxy::FromJs(env, jsVal.Get(LastSubscriptionHandleField::NAME).As< LastSubscriptionHandleField::Proxy::NapiContainer >(), cppValOut.last_subscription_handle);
}


PublicationMatchedStatusProxy::PublicationMatchedStatusProxy(Napi::CallbackInfo const& info):
    Napi::ObjectWrap< PublicationMatchedStatusProxy >(info)
{
    NapiContainer this_instance = info.This().As< NapiContainer >();

    this_instance.Set(TotalCountField::NAME, TotalCountField::Proxy::NewInstance(info.Env()));
    this_instance.Set(TotalCountChangeField::NAME, TotalCountChangeField::Proxy::NewInstance(info.Env()));
    this_instance.Set(CurrentCountField::NAME, CurrentCountField::Proxy::NewInstance(info.Env()));
    this_instance.Set(CurrentCountChangeField::NAME, CurrentCountChangeField::Proxy::NewInstance(info.Env()));
    this_instance.Set(LastSubscriptionHandleField::NAME, LastSubscriptionHandleField::Proxy::NewInstance(info.Env()));
}

} // end namespace DdsJs

// vim: set ts=4 sw=4 expandtab:
