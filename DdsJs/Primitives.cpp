/**
 * \file Primitives.cpp
 * \brief Contains the implementation for the primitive value translation classes between NodeJS and C++
 * \date 2023-12-15 16:14:46
 * \author Rolando J. Nieves
 */


#include "Primitives.hh"

namespace DdsJs
{

// Typically, the NewInstance method that takes a C++ value for initialization
// would rely on the FromCpp() method to initialize the object contents.
// However, with primitive values in JavaScript being immutable, the wrapping
// of primitives reverses this dependency. In the case of primitive values, the
// FromCpp() method relies on the NewInstance() method, since primitive value
// instances can't have their values changed.

// ----------------------------------------------------------------------------
// ██████╗  ██████╗  ██████╗ ██╗     
// ██╔══██╗██╔═══██╗██╔═══██╗██║     
// ██████╔╝██║   ██║██║   ██║██║     
// ██╔══██╗██║   ██║██║   ██║██║     
// ██████╔╝╚██████╔╝╚██████╔╝███████╗
// ╚═════╝  ╚═════╝  ╚═════╝ ╚══════╝
// ----------------------------------------------------------------------------

template<>
void
BooleanPrimitive::FromCpp(
    Napi::Env env,
    CppEntity const& cppVal,
    Napi::Boolean& jsValOut
)
{
    jsValOut = BooleanPrimitive::NewInstance(env, cppVal);
}


template<>
void
BooleanPrimitive::FromJs(
    Napi::Env env,
    Napi::Boolean const& jsVal,
    CppEntity& cppValOut
)
{
    cppValOut = jsVal.Value();
}


template<>
Napi::Boolean
BooleanPrimitive::NewInstance(Napi::Env env)
{
    Napi::EscapableHandleScope scope(env);
    Napi::Boolean result = Napi::Boolean::New(env, false);
    return scope.Escape((napi_value)result).ToBoolean();
}


template<>
Napi::Boolean
BooleanPrimitive::NewInstance(Napi::Env env, CppEntity const& cppVal)
{
    Napi::EscapableHandleScope scope(env);
    Napi::Boolean result = Napi::Boolean::New(env, (cppVal != 0));
    return scope.Escape((napi_value)result).ToBoolean();
}

// ----------------------------------------------------------------------------
//  ██████╗██╗  ██╗ █████╗ ██████╗ 
// ██╔════╝██║  ██║██╔══██╗██╔══██╗
// ██║     ███████║███████║██████╔╝
// ██║     ██╔══██║██╔══██║██╔══██╗
// ╚██████╗██║  ██║██║  ██║██║  ██║
//  ╚═════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝
// ----------------------------------------------------------------------------

template<>
void
CharPrimitive::FromCpp(
    Napi::Env env,
    CppEntity const& cppVal,
    Napi::String& jsValOut
)
{
    jsValOut = CharPrimitive::NewInstance(env, cppVal);
}


template<>
void
CharPrimitive::FromJs(
    Napi::Env env,
    Napi::String const& jsVal,
    CppEntity& cppValOut
)
{
    cppValOut = jsVal.IsEmpty() ? 0x00 : jsVal.Utf8Value()[0];
}


template<>
Napi::String
CharPrimitive::NewInstance(Napi::Env env)
{
    Napi::EscapableHandleScope scope(env);
    Napi::String result = Napi::String::New(env, "");
    return scope.Escape((napi_value)result).ToString();
}


template<>
Napi::String
CharPrimitive::NewInstance(Napi::Env env, CppEntity const& cppVal)
{
    Napi::EscapableHandleScope scope(env);
    Napi::String result = Napi::String::New(env, std::string((std::string::size_type)1, cppVal));
    return scope.Escape((napi_value)result).ToString();
}

// ----------------------------------------------------------------------------
// ██████╗  ██████╗ ██╗   ██╗██████╗ ██╗     ███████╗
// ██╔══██╗██╔═══██╗██║   ██║██╔══██╗██║     ██╔════╝
// ██║  ██║██║   ██║██║   ██║██████╔╝██║     █████╗  
// ██║  ██║██║   ██║██║   ██║██╔══██╗██║     ██╔══╝  
// ██████╔╝╚██████╔╝╚██████╔╝██████╔╝███████╗███████╗
// ╚═════╝  ╚═════╝  ╚═════╝ ╚═════╝ ╚══════╝╚══════╝
// ----------------------------------------------------------------------------

template<>
void
DoublePrimitive::FromCpp(
    Napi::Env env,
    CppEntity const& cppVal,
    Napi::Number& jsValOut
)
{
    jsValOut = DoublePrimitive::NewInstance(env, cppVal);
}


template<>
void
DoublePrimitive::FromJs(
    Napi::Env env,
    Napi::Number const& jsVal,
    CppEntity& cppValOut
)
{
    cppValOut = jsVal.DoubleValue();
}


template<>
Napi::Number
DoublePrimitive::NewInstance(Napi::Env env)
{
    Napi::EscapableHandleScope scope(env);
    Napi::Number result = Napi::Number::New(env, 0.0);
    return scope.Escape((napi_value)result).ToNumber();
}


template<>
Napi::Number
DoublePrimitive::NewInstance(Napi::Env env, CppEntity const& cppVal)
{
    Napi::EscapableHandleScope scope(env);
    Napi::Number result = Napi::Number::New(env, cppVal);
    return scope.Escape((napi_value)result).ToNumber();
}

// ----------------------------------------------------------------------------
// ███████╗██╗      ██████╗  █████╗ ████████╗
// ██╔════╝██║     ██╔═══██╗██╔══██╗╚══██╔══╝
// █████╗  ██║     ██║   ██║███████║   ██║   
// ██╔══╝  ██║     ██║   ██║██╔══██║   ██║   
// ██║     ███████╗╚██████╔╝██║  ██║   ██║   
// ╚═╝     ╚══════╝ ╚═════╝ ╚═╝  ╚═╝   ╚═╝   
// ----------------------------------------------------------------------------

template<>
void
FloatPrimitive::FromCpp(
    Napi::Env env,
    CppEntity const& cppVal,
    Napi::Number& jsValOut
)
{
    jsValOut = FloatPrimitive::NewInstance(env, cppVal);
}


template<>
void
FloatPrimitive::FromJs(
    Napi::Env env,
    Napi::Number const& jsVal,
    CppEntity& cppValOut
)
{
    cppValOut = jsVal.FloatValue();
}


template<>
Napi::Number
FloatPrimitive::NewInstance(Napi::Env env)
{
    Napi::EscapableHandleScope scope(env);
    Napi::Number result = Napi::Number::New(env, 0.0);
    return scope.Escape((napi_value)result).ToNumber();
}


template<>
Napi::Number
FloatPrimitive::NewInstance(Napi::Env env, CppEntity const& cppVal)
{
    Napi::EscapableHandleScope scope(env);
    Napi::Number result = Napi::Number::New(env, cppVal);
    return scope.Escape((napi_value)result).ToNumber();
}

// ----------------------------------------------------------------------------
// ██╗      ██████╗ ███╗   ██╗ ██████╗ 
// ██║     ██╔═══██╗████╗  ██║██╔════╝ 
// ██║     ██║   ██║██╔██╗ ██║██║  ███╗
// ██║     ██║   ██║██║╚██╗██║██║   ██║
// ███████╗╚██████╔╝██║ ╚████║╚██████╔╝
// ╚══════╝ ╚═════╝ ╚═╝  ╚═══╝ ╚═════╝ 
// ----------------------------------------------------------------------------

template<>
void
LongPrimitive::FromCpp(
    Napi::Env env,
    CppEntity const& cppVal,
    Napi::Number& jsValOut
)
{
    jsValOut = LongPrimitive::NewInstance(env, cppVal);
}


template<>
void
LongPrimitive::FromJs(
    Napi::Env env,
    Napi::Number const& jsVal,
    CppEntity& cppValOut
)
{
    cppValOut = jsVal.Int32Value();
}


template<>
Napi::Number
LongPrimitive::NewInstance(Napi::Env env)
{
    Napi::EscapableHandleScope scope(env);
    Napi::Number result = Napi::Number::New(env, 0);
    return scope.Escape((napi_value)result).ToNumber();
}


template<>
Napi::Number
LongPrimitive::NewInstance(Napi::Env env, CppEntity const& cppVal)
{
    Napi::EscapableHandleScope scope(env);
    Napi::Number result = Napi::Number::New(env, cppVal);
    return scope.Escape((napi_value)result).ToNumber();
}

// ----------------------------------------------------------------------------
// ██╗      ██████╗ ███╗   ██╗ ██████╗     ██╗      ██████╗ ███╗   ██╗ ██████╗ 
// ██║     ██╔═══██╗████╗  ██║██╔════╝     ██║     ██╔═══██╗████╗  ██║██╔════╝ 
// ██║     ██║   ██║██╔██╗ ██║██║  ███╗    ██║     ██║   ██║██╔██╗ ██║██║  ███╗
// ██║     ██║   ██║██║╚██╗██║██║   ██║    ██║     ██║   ██║██║╚██╗██║██║   ██║
// ███████╗╚██████╔╝██║ ╚████║╚██████╔╝    ███████╗╚██████╔╝██║ ╚████║╚██████╔╝
// ╚══════╝ ╚═════╝ ╚═╝  ╚═══╝ ╚═════╝     ╚══════╝ ╚═════╝ ╚═╝  ╚═══╝ ╚═════╝ 
// ----------------------------------------------------------------------------

template<>
void
LongLongPrimitive::FromCpp(
    Napi::Env env,
    CppEntity const& cppVal,
    NapiContainer& jsValOut
)
{
    jsValOut = LongLongPrimitive::NewInstance(env, cppVal);
}


template<>
void
LongLongPrimitive::FromJs(
    Napi::Env env,
    NapiContainer const& jsVal,
    CppEntity& cppValOut
)
{
    bool was_lossless = true;

    cppValOut = jsVal.Int64Value(&was_lossless);
}


template<>
typename LongLongPrimitive::NapiContainer
LongLongPrimitive::NewInstance(Napi::Env env)
{
    Napi::EscapableHandleScope scope(env);
    Napi::BigInt result = Napi::BigInt::New(env, static_cast< int64_t >(0));
    return scope.Escape((napi_value)result).As< NapiContainer >();
}


template<>
typename LongLongPrimitive::NapiContainer
LongLongPrimitive::NewInstance(Napi::Env env, CppEntity const& cppVal)
{
    Napi::EscapableHandleScope scope(env);
    Napi::Number result = Napi::Number::New(env, cppVal);
    return scope.Escape((napi_value)result).As< NapiContainer >();
}

// ----------------------------------------------------------------------------
//  ██████╗  ██████╗████████╗███████╗████████╗
// ██╔═══██╗██╔════╝╚══██╔══╝██╔════╝╚══██╔══╝
// ██║   ██║██║        ██║   █████╗     ██║   
// ██║   ██║██║        ██║   ██╔══╝     ██║   
// ╚██████╔╝╚██████╗   ██║   ███████╗   ██║   
//  ╚═════╝  ╚═════╝   ╚═╝   ╚══════╝   ╚═╝   
// ----------------------------------------------------------------------------

template<>
void
OctetPrimitive::FromCpp(
    Napi::Env env,
    CppEntity const& cppVal,
    Napi::Number& jsValOut
)
{
    jsValOut = OctetPrimitive::NewInstance(env, cppVal);
}


template<>
void
OctetPrimitive::FromJs(
    Napi::Env env,
    Napi::Number const& jsVal,
    CppEntity& cppValOut
)
{
    cppValOut = static_cast< CppEntity >(jsVal.Uint32Value());
}


template<>
Napi::Number
OctetPrimitive::NewInstance(Napi::Env env)
{
    Napi::EscapableHandleScope scope(env);
    Napi::Number result = Napi::Number::New(env, 0u);
    return scope.Escape((napi_value)result).ToNumber();
}


template<>
Napi::Number
OctetPrimitive::NewInstance(Napi::Env env, CppEntity const& cppVal)
{
    Napi::EscapableHandleScope scope(env);
    Napi::Number result = Napi::Number::New(env, cppVal);
    return scope.Escape((napi_value)result).ToNumber();
}

// ----------------------------------------------------------------------------
// ███████╗██╗  ██╗ ██████╗ ██████╗ ████████╗
// ██╔════╝██║  ██║██╔═══██╗██╔══██╗╚══██╔══╝
// ███████╗███████║██║   ██║██████╔╝   ██║   
// ╚════██║██╔══██║██║   ██║██╔══██╗   ██║   
// ███████║██║  ██║╚██████╔╝██║  ██║   ██║   
// ╚══════╝╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═╝   ╚═╝   
// ----------------------------------------------------------------------------

template<>
void
ShortPrimitive::FromCpp(
    Napi::Env env,
    CppEntity const& cppVal,
    Napi::Number& jsValOut
)
{
    jsValOut = ShortPrimitive::NewInstance(env, cppVal);
}


template<>
void
ShortPrimitive::FromJs(
    Napi::Env env,
    Napi::Number const& jsVal,
    CppEntity& cppValOut
)
{
    cppValOut = static_cast< CppEntity >(jsVal.Int32Value());
}


template<>
Napi::Number
ShortPrimitive::NewInstance(Napi::Env env)
{
    Napi::EscapableHandleScope scope(env);
    Napi::Number result = Napi::Number::New(env, 0);
    return scope.Escape((napi_value)result).ToNumber();
}

template<>
Napi::Number
ShortPrimitive::NewInstance(Napi::Env env, CppEntity const& cppVal)
{
    Napi::EscapableHandleScope scope(env);
    Napi::Number result = Napi::Number::New(env, cppVal);
    return scope.Escape((napi_value)result).ToNumber();
}

// ----------------------------------------------------------------------------
// ██╗   ██╗███╗   ██╗    ██╗      ██████╗ ███╗   ██╗ ██████╗ 
// ██║   ██║████╗  ██║    ██║     ██╔═══██╗████╗  ██║██╔════╝ 
// ██║   ██║██╔██╗ ██║    ██║     ██║   ██║██╔██╗ ██║██║  ███╗
// ██║   ██║██║╚██╗██║    ██║     ██║   ██║██║╚██╗██║██║   ██║
// ╚██████╔╝██║ ╚████║    ███████╗╚██████╔╝██║ ╚████║╚██████╔╝
//  ╚═════╝ ╚═╝  ╚═══╝    ╚══════╝ ╚═════╝ ╚═╝  ╚═══╝ ╚═════╝ 
// ----------------------------------------------------------------------------

template<>
void
UnsignedLongPrimitive::FromCpp(
    Napi::Env env,
    CppEntity const& cppVal,
    Napi::Number& jsValOut
)
{
    jsValOut = UnsignedLongPrimitive::NewInstance(env, cppVal);
}


template<>
void
UnsignedLongPrimitive::FromJs(
    Napi::Env env,
    Napi::Number const& jsVal,
    CppEntity& cppValOut
)
{
    cppValOut = static_cast< CppEntity >(jsVal.Uint32Value());
}


template<>
Napi::Number
UnsignedLongPrimitive::NewInstance(Napi::Env env)
{
    Napi::EscapableHandleScope scope(env);
    Napi::Number result = Napi::Number::New(env, 0u);
    return scope.Escape((napi_value)result).ToNumber();
}


template<>
Napi::Number
UnsignedLongPrimitive::NewInstance(Napi::Env env, CppEntity const& cppVal)
{
    Napi::EscapableHandleScope scope(env);
    Napi::Number result = Napi::Number::New(env, cppVal);
    return scope.Escape((napi_value)result).ToNumber();
}

// ----------------------------------------------------------------------------
// ██╗   ██╗███╗   ██╗    ██╗            ██╗      ██████╗ ███╗   ██╗ ██████╗ 
// ██║   ██║████╗  ██║    ██║            ██║     ██╔═══██╗████╗  ██║██╔════╝ 
// ██║   ██║██╔██╗ ██║    ██║            ██║     ██║   ██║██╔██╗ ██║██║  ███╗
// ██║   ██║██║╚██╗██║    ██║            ██║     ██║   ██║██║╚██╗██║██║   ██║
// ╚██████╔╝██║ ╚████║    ███████╗██╗    ███████╗╚██████╔╝██║ ╚████║╚██████╔╝
//  ╚═════╝ ╚═╝  ╚═══╝    ╚══════╝╚═╝    ╚══════╝ ╚═════╝ ╚═╝  ╚═══╝ ╚═════╝ 
// ----------------------------------------------------------------------------

template<>
void
UnsignedLongLongPrimitive::FromCpp(
    Napi::Env env,
    CppEntity const& cppVal,
    NapiContainer& jsValOut
)
{
    jsValOut = UnsignedLongLongPrimitive::NewInstance(env, cppVal);
}


template<>
void
UnsignedLongLongPrimitive::FromJs(
    Napi::Env env,
    NapiContainer const& jsVal,
    CppEntity& cppValOut
)
{
    bool was_lossless = true;

    cppValOut = static_cast< CppEntity >(jsVal.Uint64Value(&was_lossless));
}


template<>
typename UnsignedLongLongPrimitive::NapiContainer
UnsignedLongLongPrimitive::NewInstance(Napi::Env env)
{
    Napi::EscapableHandleScope scope(env);
    Napi::BigInt result = Napi::BigInt::New(env, static_cast< CppEntity >(0u));
    return scope.Escape((napi_value)result).As< NapiContainer >();
}


template<>
typename UnsignedLongLongPrimitive::NapiContainer
UnsignedLongLongPrimitive::NewInstance(Napi::Env env, CppEntity const& cppVal)
{
    Napi::EscapableHandleScope scope(env);
    Napi::BigInt result = Napi::BigInt::New(env, cppVal);
    return scope.Escape((napi_value)result).As< NapiContainer >();
}

// ----------------------------------------------------------------------------
// ██╗   ██╗███╗   ██╗    ███████╗██╗  ██╗ ██████╗ ██████╗ ████████╗
// ██║   ██║████╗  ██║    ██╔════╝██║  ██║██╔═══██╗██╔══██╗╚══██╔══╝
// ██║   ██║██╔██╗ ██║    ███████╗███████║██║   ██║██████╔╝   ██║   
// ██║   ██║██║╚██╗██║    ╚════██║██╔══██║██║   ██║██╔══██╗   ██║   
// ╚██████╔╝██║ ╚████║    ███████║██║  ██║╚██████╔╝██║  ██║   ██║   
//  ╚═════╝ ╚═╝  ╚═══╝    ╚══════╝╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═╝   ╚═╝   
// ----------------------------------------------------------------------------

template<>
void
UnsignedShortPrimitive::FromCpp(
    Napi::Env env,
    CppEntity const& cppVal,
    Napi::Number& jsValOut
)
{
    jsValOut = UnsignedShortPrimitive::NewInstance(env, cppVal);
}


template<>
void
UnsignedShortPrimitive::FromJs(
    Napi::Env env,
    Napi::Number const& jsVal,
    CppEntity& cppValOut
)
{
    cppValOut = static_cast< CppEntity >(jsVal.Uint32Value());
}


template<>
Napi::Number
UnsignedShortPrimitive::NewInstance(Napi::Env env)
{
    Napi::EscapableHandleScope scope(env);
    Napi::Number result = Napi::Number::New(env, 0u);
    return scope.Escape((napi_value)result).ToNumber();
}


template<>
Napi::Number
UnsignedShortPrimitive::NewInstance(Napi::Env env, CppEntity const& cppVal)
{
    Napi::EscapableHandleScope scope(env);
    Napi::Number result = Napi::Number::New(env, cppVal);
    return scope.Escape((napi_value)result).ToNumber();
}

} // end namespace DdsJs

// vim: set ts=4 sw=4 expandtab:
