/**
 * \file CoreDX/RequestedIncompatibleQosStatus.cpp
 * \brief Contains the implementation for the \c RequestedIncompatibleQosStatusProxy class.
 * \author Rolando J. Nieves
 * \date 2024-03-11 16:38:56
 */

// --------------------------------------------------------------------------
// Local Definition
#include "RequestedIncompatibleQosStatus.hh"


namespace DdsJs
{

const char *RequestedIncompatibleQosStatusProxy::TotalCountField::NAME = "total_count";
const char *RequestedIncompatibleQosStatusProxy::TotalCountChangeField::NAME = "total_count_change";
const char *RequestedIncompatibleQosStatusProxy::LastPolicyIdField::NAME = "last_policy_id";
const char *RequestedIncompatibleQosStatusProxy::PoliciesField::NAME = "policies";

const char *RequestedIncompatibleQosStatusProxy::MODNAME = "DDS";
const char *RequestedIncompatibleQosStatusProxy::NAME = "RequestedIncompatibleQosStatus";

Napi::Object
RequestedIncompatibleQosStatusProxy::Init(Napi::Env env, Napi::Object exports, ConstructorRegistry *ctorReg)
{
    Napi::Function ctor_func = DefineClass(
        env,
        RequestedIncompatibleQosStatusProxy::NAME,
        {}
    );

    Napi::FunctionReference *ctor_ref = new Napi::FunctionReference();
    *ctor_ref = Napi::Persistent(ctor_func);
    ctorReg->setConstructorFor(DottedName({ RequestedIncompatibleQosStatusProxy::MODNAME, RequestedIncompatibleQosStatusProxy::NAME }), ctor_ref);

    exports.Set(RequestedIncompatibleQosStatusProxy::NAME, ctor_func);

    return exports;
}


RequestedIncompatibleQosStatusProxy::NapiContainer
RequestedIncompatibleQosStatusProxy::NewInstance(Napi::Env env)
{
    Napi::EscapableHandleScope scope(env);
    Napi::FunctionReference *ctor_ref = env.GetInstanceData< ConstructorRegistry >()->getConstructorFor(DottedName({ RequestedIncompatibleQosStatusProxy::MODNAME, RequestedIncompatibleQosStatusProxy::NAME }));
    if (nullptr == ctor_ref)
    {
        throw Napi::Error::New(env, "Internal error: Constructor for RequestedIncompatibleQosStatus not available.");
    }

    return scope.Escape((napi_value)ctor_ref->New({})).As< NapiContainer >();
}


RequestedIncompatibleQosStatusProxy::NapiContainer
RequestedIncompatibleQosStatusProxy::NewInstance(Napi::Env env, CppEntity const& cppInstance)
{
    NapiContainer result = NewInstance(env);
    FromCpp(env, cppInstance, result);

    return result;
}


void
RequestedIncompatibleQosStatusProxy::FromCpp(Napi::Env env, CppEntity const& cppVal, NapiContainer& jsValOut)
{
    jsValOut.Set(TotalCountField::NAME, TotalCountField::Proxy::NewInstance(env, cppVal.total_count));
    jsValOut.Set(TotalCountChangeField::NAME, TotalCountChangeField::Proxy::NewInstance(env, cppVal.total_count_change));
    jsValOut.Set(LastPolicyIdField::NAME, LastPolicyIdField::Proxy::NewInstance(env, cppVal.last_policy_id));
    jsValOut.Set(PoliciesField::NAME, PoliciesField::Proxy::NewInstance(env, cppVal.policies));
}


void
RequestedIncompatibleQosStatusProxy::FromJs(Napi::Env env, NapiContainer const& jsVal, CppEntity& cppValOut)
{
    TotalCountField::Proxy::FromJs(env, jsVal.Get(TotalCountField::NAME).As< TotalCountField::Proxy::NapiContainer >(), cppValOut.total_count);
    TotalCountChangeField::Proxy::FromJs(env, jsVal.Get(TotalCountChangeField::NAME).As< TotalCountChangeField::Proxy::NapiContainer >(), cppValOut.total_count_change);
    LastPolicyIdField::Proxy::FromJs(env, jsVal.Get(LastPolicyIdField::NAME).As< LastPolicyIdField::Proxy::NapiContainer >(), cppValOut.last_policy_id);
    PoliciesField::Proxy::FromJs(env, jsVal.Get(PoliciesField::NAME).As< PoliciesField::Proxy::NapiContainer >(), cppValOut.policies);
}


RequestedIncompatibleQosStatusProxy::RequestedIncompatibleQosStatusProxy(Napi::CallbackInfo const& info):
    Napi::ObjectWrap< RequestedIncompatibleQosStatusProxy >(info)
{
    NapiContainer this_instance = info.This().As< NapiContainer >();
    CppEntity blank_value;
    PoliciesField::Proxy::MySeqUtil::Init(blank_value.policies);

    FromCpp(info.Env(), blank_value, this_instance);
}

} // end namespace DdsJs

// vim: set ts=4 sw=4 expandtab:
