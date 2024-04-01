/**
 * \file DurabilityQosPolicyKind.cpp
 * \brief Contains the implementation for the \c DurabilityQosPolicyKindProxy class.
 * \author Rolando J. Nieves <rolando.j.nieves@nasa.gov>
 * \date 2024-01-31 15:03:59
 */

#include "DurabilityQosPolicyKind.hh"


namespace DdsJs {

const char *DurabilityQosPolicyKindProxy::NAME = "DurabilityQosPolicyKind";


Napi::Object
DurabilityQosPolicyKindProxy::Init(Napi::Env env, Napi::Object exports)
{
    Napi::Object enum_obj = Napi::Object::New(env);
    enum_obj.DefineProperties(
        {
            Napi::PropertyDescriptor::Value("VOLATILE_DURABILITY_QOS", Napi::Number::New(env, DDS::VOLATILE_DURABILITY_QOS), napi_enumerable),
            Napi::PropertyDescriptor::Value("TRANSIENT_LOCAL_DURABILITY_QOS", Napi::Number::New(env, DDS::TRANSIENT_LOCAL_DURABILITY_QOS), napi_enumerable),
            Napi::PropertyDescriptor::Value("TRANSIENT_DURABILITY_QOS", Napi::Number::New(env, DDS::TRANSIENT_DURABILITY_QOS), napi_enumerable),
            Napi::PropertyDescriptor::Value("PERSISTENT_DURABILITY_QOS", Napi::Number::New(env, DDS::PERSISTENT_DURABILITY_QOS), napi_enumerable)
        }
    );

    exports.Set(DurabilityQosPolicyKindProxy::NAME, enum_obj);

    return exports;
}


DurabilityQosPolicyKindProxy::NapiContainer
DurabilityQosPolicyKindProxy::NewInstance(Napi::Env env)
{
    Napi::EscapableHandleScope scope(env);
    Napi::Number result = Napi::Number::New(env, DDS::VOLATILE_DURABILITY_QOS);

    return scope.Escape((napi_value)result).ToNumber();
}


DurabilityQosPolicyKindProxy::NapiContainer
DurabilityQosPolicyKindProxy::NewInstance(Napi::Env env, CppEntity const& cppInstance)
{
    Napi::EscapableHandleScope scope(env);
    Napi::Number result = Napi::Number::New(env, cppInstance);

    return scope.Escape((napi_value)result).ToNumber();
}


void
DurabilityQosPolicyKindProxy::FromCpp(Napi::Env env, CppEntity const& cppVal, NapiContainer& jsValOut)
{
    jsValOut = NewInstance(env, cppVal);
}


void
DurabilityQosPolicyKindProxy::FromJs(Napi::Env env, NapiContainer const& jsVal, CppEntity& cppValOut)
{
    cppValOut = static_cast< CppEntity >(jsVal.Int32Value());
}

} // end namespace DdsJs

// vim: set ts=4 sw=4 expandtab:
