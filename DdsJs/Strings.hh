/**
 * \file Strings.hh
 * \brief Contains the string proxy definitions for DdsJs.
 * \author Rolando J. Nieves <rolando.j.nieves@nasa.gov>
 * \date 2024-01-23 12:38:31
 */

#ifndef _DDSJS_DDSJS_STRINGS_HH_
#define _DDSJS_DDSJS_STRINGS_HH_

#include <sstream>

#include <napi.h>


namespace DdsJs {

template< template < unsigned Bounds > typename StringUtilities >
class UnboundedString
{
public:
    using NapiContainer = Napi::String;
    using MyStrUtil = StringUtilities< 0 >;
    using CppEntity = typename MyStrUtil::CppEntity;

    static void FromCpp(Napi::Env env, CppEntity const& cppVal, NapiContainer& jsValOut);

    static void FromJs(Napi::Env env, NapiContainer const& jsVal, CppEntity& cppValOut);

    static NapiContainer NewInstance(Napi::Env env);

    static NapiContainer NewInstance(Napi::Env env, CppEntity const& cppInstance);
};


template< template < unsigned Bounds > typename StringUtilities, unsigned Bounds >
class BoundedString
{
public:
    using NapiContainer = Napi::String;
    using MyStrUtil = StringUtilities< Bounds >;
    using CppEntity = typename MyStrUtil::CppEntity;

    static void FromCpp(Napi::Env env, CppEntity const& cppVal, NapiContainer& jsValOut);

    static void FromJs(Napi::Env env, NapiContainer const& jsVal, CppEntity& cppValOut);

    static NapiContainer NewInstance(Napi::Env env);

    // Even though CoreDX defines bounded strings as fixed arrays, when the
    // fixed strings are used as union members, the result of the union getter
    // is `const char*` instead of the fixed size typedef.
    static NapiContainer NewInstance(Napi::Env env, const char* cppInstance);
};


template< template < unsigned Bounds > typename StringUtilities >
typename UnboundedString< StringUtilities >::NapiContainer
UnboundedString< StringUtilities >::NewInstance(Napi::Env env)
{
    Napi::EscapableHandleScope scope(env);
    NapiContainer result = NapiContainer::New(env, "");

    return scope.Escape((napi_value)result).As< NapiContainer >();
}


template< template < unsigned Bounds > typename StringUtilities >
void
UnboundedString< StringUtilities >::FromCpp(Napi::Env env, CppEntity const& cppVal, NapiContainer &jsValOut)
{
    jsValOut = NewInstance(env, cppVal);
}


template< template < unsigned Bounds > typename StringUtilities >
void
UnboundedString< StringUtilities >::FromJs(Napi::Env env, NapiContainer const& jsVal, CppEntity& cppValOut)
{
    std::string text = jsVal.Utf8Value();
    // SetContents() is expected to always receive the source string as a C++
    // std::string and convert as necessary.
    MyStrUtil::SetContents(text, cppValOut);
}


template< template < unsigned Bounds > typename StringUtilities >
typename UnboundedString< StringUtilities >::NapiContainer
UnboundedString< StringUtilities >::NewInstance(Napi::Env env, CppEntity const& cppInstance)
{
    Napi::EscapableHandleScope scope(env);
    // ConstContents() is expected to return a Napi::String::New(...) compatible
    // value.
    NapiContainer result = NapiContainer::New(env, MyStrUtil::ConstContents(cppInstance));

    return scope.Escape((napi_value)result).As< NapiContainer >();
}


template< template < unsigned Bounds > typename StringUtilities, unsigned Bounds >
void
BoundedString< StringUtilities, Bounds >::FromCpp(Napi::Env env, CppEntity const& cppVal, NapiContainer& jsValOut)
{
    // ConstContents() is expected to return a Napi::String::New(...) compatible
    // value.
    jsValOut = NewInstance(env, MyStrUtil::ConstContents(cppVal));
}


template< template < unsigned Bounds > typename StringUtilities, unsigned Bounds >
void
BoundedString< StringUtilities, Bounds >::FromJs(Napi::Env env, NapiContainer const& jsVal, CppEntity& cppValOut)
{
    std::string text = jsVal.Utf8Value();
    // SetContents() is expected to always receive the source string as a C++
    // std::string and convert as necessary.
    MyStrUtil::SetContents(text, cppValOut);
}


template< template < unsigned Bounds > typename StringUtilities, unsigned Bounds >
typename BoundedString< StringUtilities, Bounds >::NapiContainer
BoundedString< StringUtilities, Bounds >::NewInstance(Napi::Env env)
{
    Napi::EscapableHandleScope scope(env);
    NapiContainer result = NapiContainer::New(env, "");

    return scope.Escape((napi_value)result).As< NapiContainer >();
}


// Even though CoreDX defines bounded strings as fixed arrays, when the
// fixed strings are used as union members, the result of the union getter
// is `const char*` instead of the fixed size typedef.
template< template < unsigned Bounds > typename StringUtilities, unsigned Bounds >
typename BoundedString< StringUtilities, Bounds >::NapiContainer
BoundedString< StringUtilities, Bounds >::NewInstance(Napi::Env env, const char* cppInstance)
{
    Napi::EscapableHandleScope scope(env);

    // ConstContents() is expected to return a Napi::String::New(...) compatible
    // value.
    NapiContainer result = NapiContainer::New(env, cppInstance);

    return scope.Escape((napi_value)result).As< NapiContainer >();
}

} // end namespace DdsJs

#endif /* !_DDSJS_DDSJS_STRINGS_HH_ */

// vim: set ts=4 sw=4 expandtab:
