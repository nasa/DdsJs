/**
 * \file DestinationOrderQosPolicyKind.cpp
 * \brief Contains the implementation for the \c DestinationOrderQosPolicyKindProxy class.
 * \author Rolando J. Nieves <rolando.j.nieves@nasa.gov>
 * \date 2024-01-31 16:58:08
 */

#include "DestinationOrderQosPolicyKind.hh"


namespace DdsJs {

const char *DestinationOrderQosPolicyKindProxy::NAME = "DestinationOrderQosPolicyKind";


Napi::Object
DestinationOrderQosPolicyKindProxy::Init(Napi::Env env, Napi::Object exports)
{
    Napi::Object enum_obj = Napi::Object::New(env);
    enum_obj.DefineProperties(
        {
            Napi::PropertyDescriptor::Value("BY_RECEPTION_TIMESTAMP_DESTINATIONORDER_QOS", Napi::Number::New(env, DDS::BY_RECEPTION_TIMESTAMP_DESTINATIONORDER_QOS), napi_enumerable),
            Napi::PropertyDescriptor::Value("BY_SOURCE_TIMESTAMP_DESTINATIONORDER_QOS", Napi::Number::New(env, DDS::BY_SOURCE_TIMESTAMP_DESTINATIONORDER_QOS), napi_enumerable)
        }
    );

    exports.Set(DestinationOrderQosPolicyKindProxy::NAME, enum_obj);

    return exports;
}


DestinationOrderQosPolicyKindProxy::NapiContainer
DestinationOrderQosPolicyKindProxy::NewInstance(Napi::Env env)
{
    Napi::EscapableHandleScope scope(env);
    Napi::Number result = Napi::Number::New(env, DDS::BY_RECEPTION_TIMESTAMP_DESTINATIONORDER_QOS);

    return scope.Escape((napi_value)result).ToNumber();
}


DestinationOrderQosPolicyKindProxy::NapiContainer
DestinationOrderQosPolicyKindProxy::NewInstance(Napi::Env env, CppEntity const& cppInstance)
{
    Napi::EscapableHandleScope scope(env);
    Napi::Number result = Napi::Number::New(env, cppInstance);

    return scope.Escape((napi_value)result).ToNumber();
}


void
DestinationOrderQosPolicyKindProxy::FromCpp(Napi::Env env, CppEntity const& cppVal, NapiContainer& jsValOut)
{
    jsValOut = NewInstance(env, cppVal);
}


void
DestinationOrderQosPolicyKindProxy::FromJs(Napi::Env env, NapiContainer const& jsVal, CppEntity& cppValOut)
{
    cppValOut = static_cast< CppEntity >(jsVal.Int32Value());
}

} // end namespace DdsJs

// vim: set ts=4 sw=4 expandtab:
