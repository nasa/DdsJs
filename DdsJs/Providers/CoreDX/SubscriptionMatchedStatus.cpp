/**
 * \file CoreDX/SubscriptionMatchedStatus.cpp
 * \brief Contains the implementation for the \c SubscriptionMatchedStatusProxy class.
 * \author Rolando J. Nieves
 * \date 2024-03-13 13:32:40
 */

// --------------------------------------------------------------------------
// Local Definition
#include "SubscriptionMatchedStatus.hh"


namespace DdsJs
{

const char *SubscriptionMatchedStatusProxy::TotalCountField::NAME = "total_count";
const char *SubscriptionMatchedStatusProxy::TotalCountChangeField::NAME = "total_count_change";
const char *SubscriptionMatchedStatusProxy::CurrentCountField::NAME = "current_count";
const char *SubscriptionMatchedStatusProxy::CurrentCountChangeField::NAME = "current_count_change";
const char *SubscriptionMatchedStatusProxy::LastPublicationHandleField::NAME = "last_publication_handle";

const char *SubscriptionMatchedStatusProxy::MODNAME = "DDS";
const char *SubscriptionMatchedStatusProxy::NAME = "SubscriptionMatchedStatus";

Napi::Object
SubscriptionMatchedStatusProxy::Init(Napi::Env env, Napi::Object exports, ConstructorRegistry *ctorReg)
{
    Napi::Function ctor_func = DefineClass(
        env,
        SubscriptionMatchedStatusProxy::NAME,
        {}
    );

    Napi::FunctionReference *ctor_ref = new Napi::FunctionReference();
    *ctor_ref = Napi::Persistent(ctor_func);
    ctorReg->setConstructorFor(DottedName({ SubscriptionMatchedStatusProxy::MODNAME, SubscriptionMatchedStatusProxy::NAME }), ctor_ref);

    exports.Set(SubscriptionMatchedStatusProxy::NAME, ctor_func);

    return exports;
}


SubscriptionMatchedStatusProxy::NapiContainer
SubscriptionMatchedStatusProxy::NewInstance(Napi::Env env)
{
    Napi::EscapableHandleScope scope(env);
    Napi::FunctionReference *ctor_ref = env.GetInstanceData< ConstructorRegistry >()->getConstructorFor(DottedName({ SubscriptionMatchedStatusProxy::MODNAME, SubscriptionMatchedStatusProxy::NAME }));
    if (nullptr == ctor_ref)
    {
        throw Napi::Error::New(env, "Internal error: Constructor for SubscriptionMatchedStatus not available.");
    }

    return scope.Escape((napi_value)ctor_ref->New({})).As< NapiContainer >();
}


SubscriptionMatchedStatusProxy::NapiContainer
SubscriptionMatchedStatusProxy::NewInstance(Napi::Env env, CppEntity const& cppInstance)
{
    NapiContainer result = NewInstance(env);
    FromCpp(env, cppInstance, result);

    return result;
}


void
SubscriptionMatchedStatusProxy::FromCpp(Napi::Env env, CppEntity const& cppVal, NapiContainer& jsValOut)
{
    jsValOut.Set(TotalCountField::NAME, TotalCountField::Proxy::NewInstance(env, cppVal.total_count));
    jsValOut.Set(TotalCountChangeField::NAME, TotalCountChangeField::Proxy::NewInstance(env, cppVal.total_count_change));
    jsValOut.Set(CurrentCountField::NAME, CurrentCountField::Proxy::NewInstance(env, cppVal.current_count));
    jsValOut.Set(CurrentCountChangeField::NAME, CurrentCountChangeField::Proxy::NewInstance(env, cppVal.current_count_change));
    jsValOut.Set(LastPublicationHandleField::NAME, LastPublicationHandleField::Proxy::NewInstance(env, cppVal.last_publication_handle));
}


void
SubscriptionMatchedStatusProxy::FromJs(Napi::Env env, NapiContainer const& jsVal, CppEntity& cppValOut)
{
    TotalCountField::Proxy::FromJs(env, jsVal.Get(TotalCountField::NAME).As< TotalCountField::Proxy::NapiContainer >(), cppValOut.total_count);
    TotalCountChangeField::Proxy::FromJs(env, jsVal.Get(TotalCountChangeField::NAME).As< TotalCountChangeField::Proxy::NapiContainer >(), cppValOut.total_count_change);
    CurrentCountField::Proxy::FromJs(env, jsVal.Get(CurrentCountField::NAME).As< CurrentCountField::Proxy::NapiContainer >(), cppValOut.current_count);
    CurrentCountChangeField::Proxy::FromJs(env, jsVal.Get(CurrentCountChangeField::NAME).As< CurrentCountChangeField::Proxy::NapiContainer >(), cppValOut.current_count_change);
    LastPublicationHandleField::Proxy::FromJs(env, jsVal.Get(LastPublicationHandleField::NAME).As< LastPublicationHandleField::Proxy::NapiContainer >(), cppValOut.last_publication_handle);
}


SubscriptionMatchedStatusProxy::SubscriptionMatchedStatusProxy(Napi::CallbackInfo const& info):
    Napi::ObjectWrap< SubscriptionMatchedStatusProxy >(info)
{
    NapiContainer this_instance = info.This().As< NapiContainer >();
    CppEntity blank_value;

    FromCpp(info.Env(), blank_value, this_instance);
}

} // end namespace DdsJs

// vim: set ts=4 sw=4 expandtab:
