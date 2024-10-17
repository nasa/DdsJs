/**
 * \file CoreDX/GroupDataQosPolicy.cpp
 * \brief Contains the implementation for the \c GroupDataQosPolicyProxy class.
 * \author Rolando J. Nieves <rolando.j.nieves@nasa.gov>
 * \date 2024-01-24 15:43:15
 */

// --------------------------------------------------------------------------
// Local Definition
#include "GroupDataQosPolicy.hh"


namespace DdsJs
{

const char* GroupDataQosPolicyProxy::ValueField::NAME = "value";

const char* GroupDataQosPolicyProxy::MODNAME = "DDS";

const char* GroupDataQosPolicyProxy::NAME = "GroupDataQosPolicy";

Napi::Object
GroupDataQosPolicyProxy::Init(Napi::Env env, Napi::Object exports, ConstructorRegistry *ctorReg)
{
    Napi::Function ctor_func = DefineClass(
        env,
        GroupDataQosPolicyProxy::NAME,
        {}
    );

    Napi::FunctionReference *ctor_ref = new Napi::FunctionReference();
    *ctor_ref = Napi::Persistent(ctor_func);
    ctorReg->setConstructorFor(DottedName({ GroupDataQosPolicyProxy::MODNAME, GroupDataQosPolicyProxy::NAME }), ctor_ref);

    exports.Set(GroupDataQosPolicyProxy::NAME, ctor_func);

    return exports;
}


GroupDataQosPolicyProxy::NapiContainer
GroupDataQosPolicyProxy::NewInstance(Napi::Env env)
{
    Napi::EscapableHandleScope scope(env);
    Napi::FunctionReference *ctor_ref = env.GetInstanceData< ConstructorRegistry >()->getConstructorFor(DottedName({ GroupDataQosPolicyProxy::MODNAME, GroupDataQosPolicyProxy::NAME }));
    if (nullptr == ctor_ref)
    {
        throw Napi::Error::New(env, "Internal error: Constructor for GroupDataQosPolicy not available.");
    }

    return scope.Escape((napi_value)ctor_ref->New({})).As< NapiContainer >();
}


GroupDataQosPolicyProxy::NapiContainer
GroupDataQosPolicyProxy::NewInstance(Napi::Env env, CppEntity const& cppInstance)
{
    NapiContainer result = NewInstance(env);
    FromCpp(env, cppInstance, result);

    return result;
}


void
GroupDataQosPolicyProxy::FromCpp(Napi::Env env, CppEntity const& cppVal, NapiContainer& jsValOut)
{
    jsValOut.Set(GroupDataQosPolicyProxy::ValueField::NAME, GroupDataQosPolicyProxy::ValueField::Proxy::NewInstance(env, cppVal.value));
}


void
GroupDataQosPolicyProxy::FromJs(Napi::Env env, NapiContainer const& jsVal, CppEntity& cppValOut)
{
    GroupDataQosPolicyProxy::ValueField::Proxy::FromJs(env, jsVal.Get(GroupDataQosPolicyProxy::ValueField::NAME).As< GroupDataQosPolicyProxy::ValueField::Proxy::NapiContainer >(), cppValOut.value);
}


GroupDataQosPolicyProxy::GroupDataQosPolicyProxy(Napi::CallbackInfo const& info):
    Napi::ObjectWrap< GroupDataQosPolicyProxy >(info)
{
    NapiContainer this_instance = info.This().As< NapiContainer >();
    this_instance.Set(GroupDataQosPolicyProxy::ValueField::NAME, GroupDataQosPolicyProxy::ValueField::Proxy::NewInstance(info.Env()));
}

} // end namespace DdsJs

// vim: set ts=4 sw=4 expandtab:
