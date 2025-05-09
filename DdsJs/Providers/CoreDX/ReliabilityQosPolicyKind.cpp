/**
 * \file CoreDX/ReliabilityQosPolicyKind.cpp
 * \brief Contains the implementation for the \c ReliabilityQosPolicyKindProxy class.
 * \author Rolando J. Nieves <rolando.j.nieves@nasa.gov>
 * \date 2024-01-31 16:47:08
 */

// --------------------------------------------------------------------------
// Local Definition
#include "ReliabilityQosPolicyKind.hh"


namespace DdsJs
{

const char *ReliabilityQosPolicyKindProxy::NAME = "ReliabilityQosPolicyKind";


Napi::Object
ReliabilityQosPolicyKindProxy::Init(Napi::Env env, Napi::Object exports)
{
    Napi::Object enum_obj = Napi::Object::New(env);
    enum_obj.DefineProperties(
        {
            Napi::PropertyDescriptor::Value("BEST_EFFORT_RELIABILITY_QOS", Napi::Number::New(env, DDS::BEST_EFFORT_RELIABILITY_QOS), napi_enumerable),
            Napi::PropertyDescriptor::Value("RELIABLE_RELIABILITY_QOS", Napi::Number::New(env, DDS::RELIABLE_RELIABILITY_QOS), napi_enumerable)
        }
    );

    exports.Set(ReliabilityQosPolicyKindProxy::NAME, enum_obj);

    return exports;
}


ReliabilityQosPolicyKindProxy::NapiContainer
ReliabilityQosPolicyKindProxy::NewInstance(Napi::Env env)
{
    Napi::EscapableHandleScope scope(env);
    Napi::Number result = Napi::Number::New(env, DDS::INSTANCE_PRESENTATION_QOS);

    return scope.Escape((napi_value)result).ToNumber();
}


ReliabilityQosPolicyKindProxy::NapiContainer
ReliabilityQosPolicyKindProxy::NewInstance(Napi::Env env, CppEntity const& cppInstance)
{
    Napi::EscapableHandleScope scope(env);
    Napi::Number result = Napi::Number::New(env, cppInstance);

    return scope.Escape((napi_value)result).ToNumber();
}


void
ReliabilityQosPolicyKindProxy::FromCpp(Napi::Env env, CppEntity const& cppVal, NapiContainer& jsValOut)
{
    jsValOut = NewInstance(env, cppVal);
}


void
ReliabilityQosPolicyKindProxy::FromJs(Napi::Env env, NapiContainer const& jsVal, CppEntity& cppValOut)
{
    cppValOut = static_cast< CppEntity >(jsVal.Int32Value());
}

} // end namespace DdsJs

// vim: set ts=4 sw=4 expandtab:
