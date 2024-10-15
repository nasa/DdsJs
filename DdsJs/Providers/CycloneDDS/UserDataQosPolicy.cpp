/**
 * \file CycloneDDS/UserDataQosPolicy.cpp
 * \brief Contains the implementation of the \c UserDataQosPolicyProxy class.
 * \author Rolando J. Nieves <rolando.j.nieves@nasa.gov>
 * \date 2024-01-22 15:02:44
 */


#include <DdsJs/Providers/CycloneDDS/Primitives.hh>

#include "UserDataQosPolicy.hh"


namespace DdsJs {

const char* UserDataQosPolicyProxy::ValueField::NAME = "value";

const char* UserDataQosPolicyProxy::MODNAME = "DDS";

const char* UserDataQosPolicyProxy::NAME = "UserDataQosPolicy";

Napi::Object
UserDataQosPolicyProxy::Init(Napi::Env env, Napi::Object exports, ConstructorRegistry *ctorReg)
{
    Napi::Function ctor_func = DefineClass(
        env,
        UserDataQosPolicyProxy::NAME,
        {}
    );

    Napi::FunctionReference *ctor_ref = new Napi::FunctionReference();
    *ctor_ref = Napi::Persistent(ctor_func);
    ctorReg->setConstructorFor(DottedName({ UserDataQosPolicyProxy::MODNAME, UserDataQosPolicyProxy::NAME }), ctor_ref);

    exports.Set(UserDataQosPolicyProxy::NAME, ctor_func);

    return exports;
}


UserDataQosPolicyProxy::NapiContainer
UserDataQosPolicyProxy::NewInstance(Napi::Env env)
{
    Napi::EscapableHandleScope scope(env);
    Napi::FunctionReference *ctor_ref = env.GetInstanceData< ConstructorRegistry >()->getConstructorFor(DottedName({ UserDataQosPolicyProxy::MODNAME, UserDataQosPolicyProxy::NAME }));
    if (nullptr == ctor_ref)
    {
        throw Napi::Error::New(env, "Internal error: Constructor for UserDataQosPolicy not available.");
    }

    return scope.Escape((napi_value)ctor_ref->New({})).As< NapiContainer >();
}


UserDataQosPolicyProxy::NapiContainer
UserDataQosPolicyProxy::NewInstance(Napi::Env env, CppEntity const& cppInstance)
{
    NapiContainer result = NewInstance(env);
    FromCpp(env, cppInstance, result);

    return result;
}


void
UserDataQosPolicyProxy::FromCpp(Napi::Env env, CppEntity const& cppVal, NapiContainer& jsValOut)
{
    uint8_t *value_contents = nullptr;
    size_t value_length = 1u;

    if (!dds_qget_userdata(cppVal, (void**)&value_contents, &value_length))
    {
        throw Napi::Error::New(env, "Internal error: No UserData QoS policy found on input.");
    }
    Napi::Array value_field = Napi::Array::New(env, value_length);
    for (int idx = 0; idx < value_length; idx++)
    {
        value_field[idx] = Napi::Number::New(env, value_contents[idx]);
    }
    jsValOut.Set(UserDataQosPolicyProxy::ValueField::NAME, value_field);

    dds_free(value_contents);
    value_contents = nullptr;
}


void
UserDataQosPolicyProxy::FromJs(Napi::Env env, NapiContainer const& jsVal, CppEntity& cppValOut)
{
    Napi::Array value_field = jsVal.Get(UserDataQosPolicyProxy::ValueField::NAME).As< Napi::Array >();
    uint8_t *value_contents = (uint8_t *)dds_alloc(value_field.Length() + 1u);
    for (int idx = 0; idx < value_field.Length(); idx++)
    {
        value_contents[idx] = value_field.Get(idx).As< Napi::Number >().Uint32Value();
    }
    dds_qset_userdata(cppValOut, value_contents, value_field.Length());
    
    dds_free(value_contents);
    value_contents = nullptr;
}


UserDataQosPolicyProxy::UserDataQosPolicyProxy(Napi::CallbackInfo const& info):
    Napi::ObjectWrap< UserDataQosPolicyProxy >(info)
{
    NapiContainer this_instance = info.This().As< NapiContainer >();
    this_instance.Set(UserDataQosPolicyProxy::ValueField::NAME, Napi::Array::New(info.Env()));
}

} // end namespace DdsJs

// vim: set ts=4 sw=4 expandtab:
