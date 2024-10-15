/**
 * \file CycloneDDS/InstanceStateKind.cpp
 * \brief Contains the implementation for the \c DdsJs::InstanceStateKind class.
 * \author Rolando J. Nieves
 * \date 2024-10-04 12:05:08
 */

#include "InstanceStateKind.hh"


namespace DdsJs
{

Napi::Object
InstanceStateKindProxy::Init(Napi::Env env, Napi::Object exports)
{
    exports.DefineProperties(
        {
            Napi::PropertyDescriptor::Value("ALIVE_INSTANCE_STATE", Napi::Number::New(env, dds_instance_state::DDS_IST_ALIVE), napi_enumerable),
            Napi::PropertyDescriptor::Value("NOT_ALIVE_DISPOSED_INSTANCE_STATE", Napi::Number::New(env, dds_instance_state::DDS_IST_NOT_ALIVE_DISPOSED), napi_enumerable),
            Napi::PropertyDescriptor::Value("NOT_ALIVE_NO_WRITERS_INSTANCE_STATE", Napi::Number::New(env, dds_instance_state::DDS_IST_NOT_ALIVE_NO_WRITERS), napi_enumerable),
            Napi::PropertyDescriptor::Value("ANY_INSTANCE_STATE", Napi::Number::New(env, dds_instance_state::DDS_IST_ALIVE | dds_instance_state::DDS_IST_NOT_ALIVE_DISPOSED | dds_instance_state::DDS_IST_NOT_ALIVE_NO_WRITERS), napi_enumerable),
            Napi::PropertyDescriptor::Value("NOT_ALIVE_INSTANCE_STATE", Napi::Number::New(env, dds_instance_state::DDS_IST_NOT_ALIVE_DISPOSED | dds_instance_state::DDS_IST_NOT_ALIVE_NO_WRITERS), napi_enumerable)
        }
    );

    return exports;
}


void
InstanceStateKindProxy::FromCpp(Napi::Env env, CppEntity const& cppVal, NapiContainer& jsValOut)
{
    jsValOut = NewInstance(env, cppVal);
}


void
InstanceStateKindProxy::FromJs(Napi::Env env, NapiContainer const& jsVal, CppEntity& cppValOut)
{
    cppValOut = static_cast< CppEntity >(jsVal.Int32Value());
}


InstanceStateKindProxy::NapiContainer
InstanceStateKindProxy::NewInstance(Napi::Env env)
{
    Napi::EscapableHandleScope scope(env);
    Napi::Number result = Napi::Number::New(env, dds_view_state::DDS_VST_NEW);
    return scope.Escape((napi_value)result).ToNumber();
}


InstanceStateKindProxy::NapiContainer
InstanceStateKindProxy::NewInstance(Napi::Env env, CppEntity const& cppVal)
{
    Napi::EscapableHandleScope scope(env);
    Napi::Number result = Napi::Number::New(env, cppVal);
    return scope.Escape((napi_value)result).ToNumber();
}

} // end namespace DdsJs

// vim: set ts=4 sw=4 expandtab:
