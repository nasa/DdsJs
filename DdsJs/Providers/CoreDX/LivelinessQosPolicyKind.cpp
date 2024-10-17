/**
 * \file CoreDX/LivelinessQosPolicyKind.cpp
 * \brief Contains the implementation for the \c LivelinessQosPolicyKindProxy class.
 * \author Rolando J. Nieves <rolando.j.nieves@nasa.gov>
 * \date 2024-01-31 16:33:32
 */

// --------------------------------------------------------------------------
// Local Definition
#include "LivelinessQosPolicyKind.hh"


namespace DdsJs
{

const char *LivelinessQosPolicyKindProxy::NAME = "LivelinessQosPolicyKind";


Napi::Object
LivelinessQosPolicyKindProxy::Init(Napi::Env env, Napi::Object exports)
{
    Napi::Object enum_obj = Napi::Object::New(env);
    enum_obj.DefineProperties(
        {
            Napi::PropertyDescriptor::Value("AUTOMATIC_LIVELINESS_QOS", Napi::Number::New(env, DDS::AUTOMATIC_LIVELINESS_QOS), napi_enumerable),
            Napi::PropertyDescriptor::Value("MANUAL_BY_PARTICIPANT_LIVELINESS_QOS", Napi::Number::New(env, DDS::MANUAL_BY_PARTICIPANT_LIVELINESS_QOS), napi_enumerable),
            Napi::PropertyDescriptor::Value("MANUAL_BY_TOPIC_LIVELINESS_QOS", Napi::Number::New(env, DDS::MANUAL_BY_TOPIC_LIVELINESS_QOS), napi_enumerable)
        }
    );

    exports.Set(LivelinessQosPolicyKindProxy::NAME, enum_obj);

    return exports;
}


LivelinessQosPolicyKindProxy::NapiContainer
LivelinessQosPolicyKindProxy::NewInstance(Napi::Env env)
{
    Napi::EscapableHandleScope scope(env);
    Napi::Number result = Napi::Number::New(env, DDS::INSTANCE_PRESENTATION_QOS);

    return scope.Escape((napi_value)result).ToNumber();
}


LivelinessQosPolicyKindProxy::NapiContainer
LivelinessQosPolicyKindProxy::NewInstance(Napi::Env env, CppEntity const& cppInstance)
{
    Napi::EscapableHandleScope scope(env);
    Napi::Number result = Napi::Number::New(env, cppInstance);

    return scope.Escape((napi_value)result).ToNumber();
}


void
LivelinessQosPolicyKindProxy::FromCpp(Napi::Env env, CppEntity const& cppVal, NapiContainer& jsValOut)
{
    jsValOut = NewInstance(env, cppVal);
}


void
LivelinessQosPolicyKindProxy::FromJs(Napi::Env env, NapiContainer const& jsVal, CppEntity& cppValOut)
{
    cppValOut = static_cast< CppEntity >(jsVal.Int32Value());
}

} // end namespace DdsJs

// vim: set ts=4 sw=4 expandtab:
