/**
 * \file CycloneDDS/GroupDataQosPolicy.cpp
 * \brief Contains the implementation of the \c GroupDataQosPolicyProxy class.
 * \author Rolando J. Nieves <rolando.j.nieves@nasa.gov>
 * \date 2024-01-22 15:02:44
 */


#include <DdsJs/Providers/CycloneDDS/Primitives.hh>

#include "GroupDataQosPolicy.hh"


namespace DdsJs {

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
    uint8_t *value_contents = nullptr;
    size_t value_length = 1u;

    if (!dds_qget_groupdata(cppVal, (void**)&value_contents, &value_length))
    {
        throw Napi::Error::New(env, "Internal error: No GroupData QoS policy found on input.");
    }
    Napi::Array value_field = Napi::Array::New(env, value_length);
    for (int idx = 0; idx < value_length; idx++)
    {
        value_field[idx] = Napi::Number::New(env, value_contents[idx]);
    }
    jsValOut.Set(GroupDataQosPolicyProxy::ValueField::NAME, value_field);

    dds_free(value_contents);
    value_contents = nullptr;
}


void
GroupDataQosPolicyProxy::FromJs(Napi::Env env, NapiContainer const& jsVal, CppEntity& cppValOut)
{
    Napi::Array value_field = jsVal.Get(GroupDataQosPolicyProxy::ValueField::NAME).As< Napi::Array >();
    uint8_t *value_contents = (uint8_t *)dds_alloc(value_field.Length() + 1u);
    for (int idx = 0; idx < value_field.Length(); idx++)
    {
        value_contents[idx] = value_field.Get(idx).As< Napi::Number >().Uint32Value();
    }
    dds_qset_groupdata(cppValOut, value_contents, value_field.Length());
    
    dds_free(value_contents);
    value_contents = nullptr;
}


GroupDataQosPolicyProxy::GroupDataQosPolicyProxy(Napi::CallbackInfo const& info):
    Napi::ObjectWrap< GroupDataQosPolicyProxy >(info)
{
    NapiContainer this_instance = info.This().As< NapiContainer >();
    this_instance.Set(GroupDataQosPolicyProxy::ValueField::NAME, Napi::Array::New(info.Env()));
}

} // end namespace DdsJs

// vim: set ts=4 sw=4 expandtab:
