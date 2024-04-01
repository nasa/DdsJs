/**
 * \file DdsJs/SampleRejectedStatusKind.cpp
 * \brief Contains the implementation for the \c SampleRejectedStatusKindProxy class.
 * \author Rolando J. Nieves
 * \date 2024-03-13 12:17:12
 */

#include "SampleRejectedStatusKind.hh"


namespace DdsJs
{

const char *SampleRejectedStatusKindProxy::NAME = "SampleRejectedStatusKind";


Napi::Object
SampleRejectedStatusKindProxy::Init(Napi::Env env, Napi::Object exports)
{
    Napi::Object enum_obj = Napi::Object::New(env);
    enum_obj.DefineProperties(
        {
            Napi::PropertyDescriptor::Value("NOT_REJECTED", Napi::Number::New(env, DDS::NOT_REJECTED), napi_enumerable),
            Napi::PropertyDescriptor::Value("REJECTED_BY_INSTANCE_LIMIT", Napi::Number::New(env, DDS::REJECTED_BY_INSTANCE_LIMIT), napi_enumerable),
            Napi::PropertyDescriptor::Value("REJECTED_BY_SAMPLES_LIMIT", Napi::Number::New(env, DDS::REJECTED_BY_SAMPLES_LIMIT), napi_enumerable),
            Napi::PropertyDescriptor::Value("REJECTED_BY_SAMPLES_PER_INSTANCE_LIMIT", Napi::Number::New(env, DDS::REJECTED_BY_SAMPLES_PER_INSTANCE_LIMIT), napi_enumerable)
        }
    );

    exports.Set(SampleRejectedStatusKindProxy::NAME, enum_obj);

    return exports;
}


SampleRejectedStatusKindProxy::NapiContainer
SampleRejectedStatusKindProxy::NewInstance(Napi::Env env)
{
    Napi::EscapableHandleScope scope(env);
    Napi::Number result = Napi::Number::New(env, DDS::INSTANCE_PRESENTATION_QOS);

    return scope.Escape((napi_value)result).ToNumber();
}


SampleRejectedStatusKindProxy::NapiContainer
SampleRejectedStatusKindProxy::NewInstance(Napi::Env env, CppEntity const& cppInstance)
{
    Napi::EscapableHandleScope scope(env);
    Napi::Number result = Napi::Number::New(env, cppInstance);

    return scope.Escape((napi_value)result).ToNumber();
}


void
SampleRejectedStatusKindProxy::FromCpp(Napi::Env env, CppEntity const& cppVal, NapiContainer& jsValOut)
{
    jsValOut = NewInstance(env, cppVal);
}


void
SampleRejectedStatusKindProxy::FromJs(Napi::Env env, NapiContainer const& jsVal, CppEntity& cppValOut)
{
    cppValOut = static_cast< CppEntity >(jsVal.Int32Value());
}

} // end namespace DdsJs

// vim: set ts=4 sw=4 expandtab:
