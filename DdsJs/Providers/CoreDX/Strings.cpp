/**
 * \file Strings.cpp
 * \brief Contains the implementation for string proxies in DdsJs.
 * \author Rolando J. Nieves <rolando.j.nieves@nasa.gov>
 * \date 2024-01-23 15:27:26
 */

#include "Strings.hh"


namespace DdsJs {

UnboundedString::NapiContainer
UnboundedString::NewInstance(Napi::Env env)
{
    Napi::EscapableHandleScope scope(env);
    NapiContainer result = NapiContainer::New(env, "");

    return scope.Escape((napi_value)result).As< NapiContainer >();
}


void
UnboundedString::FromCpp(Napi::Env env, CppEntity const& cppVal, NapiContainer &jsValOut)
{
    jsValOut = NewInstance(env, cppVal);
}


void
UnboundedString::FromJs(Napi::Env env, NapiContainer const& jsVal, CppEntity& cppValOut)
{
    std::string text = jsVal.Utf8Value();
    // SetContents() is expected to always receive the source string as a C++
    // std::string and convert as necessary.
    MyStrUtil::SetContents(text, cppValOut);
}


UnboundedString::NapiContainer
UnboundedString::NewInstance(Napi::Env env, CppEntity const& cppInstance)
{
    Napi::EscapableHandleScope scope(env);
    // ConstContents() is expected to return a Napi::String::New(...) compatible
    // value.
    NapiContainer result = NapiContainer::New(env, MyStrUtil::ConstContents(cppInstance));

    return scope.Escape((napi_value)result).As< NapiContainer >();
}

} // end namespace DdsJs

// vim: set ts=4 sw=4 expandtab:
