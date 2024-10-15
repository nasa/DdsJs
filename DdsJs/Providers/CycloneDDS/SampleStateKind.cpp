/**
 * \file CycloneDDS/SampleStateKind.cpp
 * \brief Contains the implementation for the \c DdsJs::SampleStateKind class.
 * \author Rolando J. Nieves
 * \date 2024-10-04 11:27:57
 */

#include "SampleStateKind.hh"


namespace DdsJs
{

Napi::Object
SampleStateKindProxy::Init(Napi::Env env, Napi::Object exports)
{
    exports.DefineProperties(
        {
            Napi::PropertyDescriptor::Value("READ_SAMPLE_STATE", Napi::Number::New(env, dds_sample_state::DDS_SST_READ), napi_enumerable),
            Napi::PropertyDescriptor::Value("NOT_READ_SAMPLE_STATE", Napi::Number::New(env, dds_sample_state::DDS_SST_NOT_READ), napi_enumerable),
            Napi::PropertyDescriptor::Value("ANY_SAMPLE_STATE", Napi::Number::New(env, dds_sample_state::DDS_SST_READ | dds_sample_state::DDS_SST_NOT_READ), napi_enumerable)
        }
    );

    return exports;
}


void
SampleStateKindProxy::FromCpp(Napi::Env env, CppEntity const& cppVal, NapiContainer& jsValOut)
{
    jsValOut = NewInstance(env, cppVal);
}


void
SampleStateKindProxy::FromJs(Napi::Env env, NapiContainer const& jsVal, CppEntity& cppValOut)
{
    cppValOut = static_cast< CppEntity >(jsVal.Int32Value());
}


SampleStateKindProxy::NapiContainer
SampleStateKindProxy::NewInstance(Napi::Env env)
{
    Napi::EscapableHandleScope scope(env);
    Napi::Number result = Napi::Number::New(env, dds_view_state::DDS_VST_NEW);
    return scope.Escape((napi_value)result).ToNumber();
}


SampleStateKindProxy::NapiContainer
SampleStateKindProxy::NewInstance(Napi::Env env, CppEntity const& cppVal)
{
    Napi::EscapableHandleScope scope(env);
    Napi::Number result = Napi::Number::New(env, cppVal);
    return scope.Escape((napi_value)result).ToNumber();
}

} // end namespace DdsJs

// vim: set ts=4 sw=4 expandtab:
