/**
 * \file CycloneDDS/ViewStateKind.cpp
 * \brief Contains the implementation for the \c DdsJs::ViewStateKind class.
 * \author Rolando J. Nieves
 * \date 2024-10-04 11:51:05
 */

#include "ViewStateKind.hh"


namespace DdsJs
{

Napi::Object
ViewStateKindProxy::Init(Napi::Env env, Napi::Object exports)
{
    exports.DefineProperties(
        {
            Napi::PropertyDescriptor::Value("NEW_VIEW_STATE", Napi::Number::New(env, dds_view_state::DDS_VST_NEW), napi_enumerable),
            Napi::PropertyDescriptor::Value("NOT_NEW_VIEW_STATE", Napi::Number::New(env, dds_view_state::DDS_VST_OLD), napi_enumerable),
            Napi::PropertyDescriptor::Value("ANY_VIEW_STATE", Napi::Number::New(env, dds_view_state::DDS_VST_NEW | dds_view_state::DDS_VST_OLD), napi_enumerable)
        }
    );

    return exports;
}


void
ViewStateKindProxy::FromCpp(Napi::Env env, CppEntity const& cppVal, NapiContainer& jsValOut)
{
    jsValOut = NewInstance(env, cppVal);
}


void
ViewStateKindProxy::FromJs(Napi::Env env, NapiContainer const& jsVal, CppEntity& cppValOut)
{
    cppValOut = static_cast< CppEntity >(jsVal.Int32Value());
}


ViewStateKindProxy::NapiContainer
ViewStateKindProxy::NewInstance(Napi::Env env)
{
    Napi::EscapableHandleScope scope(env);
    Napi::Number result = Napi::Number::New(env, dds_view_state::DDS_VST_NEW);
    return scope.Escape((napi_value)result).ToNumber();
}


ViewStateKindProxy::NapiContainer
ViewStateKindProxy::NewInstance(Napi::Env env, CppEntity const& cppVal)
{
    Napi::EscapableHandleScope scope(env);
    Napi::Number result = Napi::Number::New(env, cppVal);
    return scope.Escape((napi_value)result).ToNumber();
}

} // end namespace DdsJs

// vim: set ts=4 sw=4 expandtab:
