/**
 * \file CoreDX/PresentationQosPolicyAccessScopeKind.cpp
 * \brief Contains the implementation of the \c PresentationQosPolicyAccessScopeKindProxy class.
 * \author Rolando J. Nieves <rolando.j.nieves@nasa.gov>
 * \date 2024-01-23 11:41:02
 */

// --------------------------------------------------------------------------
// Local Definition
#include "PresentationQosPolicyAccessScopeKind.hh"


namespace DdsJs
{

const char *PresentationQosPolicyAccessScopeKindProxy::NAME = "PresentationQosPolicyAccessScopeKind";


Napi::Object
PresentationQosPolicyAccessScopeKindProxy::Init(Napi::Env env, Napi::Object exports)
{
    Napi::Object enum_obj = Napi::Object::New(env);
    enum_obj.DefineProperties(
        {
            Napi::PropertyDescriptor::Value("INSTANCE_PRESENTATION_QOS", Napi::Number::New(env, DDS::INSTANCE_PRESENTATION_QOS), napi_enumerable),
            Napi::PropertyDescriptor::Value("TOPIC_PRESENTATION_QOS", Napi::Number::New(env, DDS::TOPIC_PRESENTATION_QOS), napi_enumerable),
            Napi::PropertyDescriptor::Value("GROUP_PRESENTATION_QOS", Napi::Number::New(env, DDS::GROUP_PRESENTATION_QOS), napi_enumerable)
        }
    );

    exports.Set(PresentationQosPolicyAccessScopeKindProxy::NAME, enum_obj);

    return exports;
}


PresentationQosPolicyAccessScopeKindProxy::NapiContainer
PresentationQosPolicyAccessScopeKindProxy::NewInstance(Napi::Env env)
{
    Napi::EscapableHandleScope scope(env);
    Napi::Number result = Napi::Number::New(env, DDS::INSTANCE_PRESENTATION_QOS);

    return scope.Escape((napi_value)result).ToNumber();
}


PresentationQosPolicyAccessScopeKindProxy::NapiContainer
PresentationQosPolicyAccessScopeKindProxy::NewInstance(Napi::Env env, CppEntity const& cppInstance)
{
    Napi::EscapableHandleScope scope(env);
    Napi::Number result = Napi::Number::New(env, cppInstance);

    return scope.Escape((napi_value)result).ToNumber();
}


void
PresentationQosPolicyAccessScopeKindProxy::FromCpp(Napi::Env env, CppEntity const& cppVal, NapiContainer& jsValOut)
{
    jsValOut = NewInstance(env, cppVal);
}


void
PresentationQosPolicyAccessScopeKindProxy::FromJs(Napi::Env env, NapiContainer const& jsVal, CppEntity& cppValOut)
{
    cppValOut = static_cast< CppEntity >(jsVal.Int32Value());
}

} // end namespace DdsJs

// vim: set ts=4 sw=4 expandtab:
