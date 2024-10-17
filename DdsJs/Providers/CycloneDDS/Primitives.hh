/**
 * \file CycloneDDS/Primitives.hh
 * \brief Contains the primitive value translation classes between NodeJS and C++
 * \date 2023-12-15 16:05:11
 * \author Rolando J. Nieves
 */

#ifndef _DDSJS_DDSJS_PROVIDERS_CYCLONEDDS_PRIMITIVES_HH_
#define _DDSJS_DDSJS_PROVIDERS_CYCLONEDDS_PRIMITIVES_HH_

// --------------------------------------------------------------------------
// NodeJS Add-on API
#include <napi.h>


namespace DdsJs
{

template< typename CppPrimitiveType, typename NapiContainerType >
class Primitive
{
public:
    using CppEntity = CppPrimitiveType;
    using NapiContainer = NapiContainerType;

    static inline void FromCpp(Napi::Env env, CppPrimitiveType const& cppVal, NapiContainer& jsValOut);
    static inline void FromJs(Napi::Env env, NapiContainer const& jsVal, CppPrimitiveType& cppValOut);
    static inline NapiContainer NewInstance(Napi::Env env);
    static inline NapiContainer NewInstance(Napi::Env env, CppPrimitiveType const& cppVal);
};

using BooleanPrimitive = Primitive< bool, Napi::Boolean >;
using CharPrimitive = Primitive< char, Napi::String >;
using DoublePrimitive = Primitive< double, Napi::Number >;
using FloatPrimitive = Primitive< float, Napi::Number >;
using LongPrimitive = Primitive< int32_t, Napi::Number >;
using LongLongPrimitive = Primitive< int64_t, Napi::BigInt >;
using OctetPrimitive = Primitive< uint8_t, Napi::Number >;
using ShortPrimitive = Primitive< int16_t, Napi::Number >;
using UnsignedLongPrimitive = Primitive< uint32_t, Napi::Number >;
using UnsignedLongLongPrimitive = Primitive< uint64_t, Napi::BigInt >;
using UnsignedShortPrimitive = Primitive< uint16_t, Napi::Number >;

// ----------------------------------------------------------------------------
// BooleanPrimitiveWrap full specializations
// ----------------------------------------------------------------------------
template<>
void
BooleanPrimitive::FromCpp(Napi::Env env, const CppEntity &cppVal, NapiContainer &jsValOut);

template<>
void
BooleanPrimitive::FromJs(Napi::Env env, const NapiContainer &jsVal, CppEntity &cppValOut);

template<>
Napi::Boolean
BooleanPrimitive::NewInstance(Napi::Env env);

template<>
Napi::Boolean
BooleanPrimitive::NewInstance(Napi::Env env, CppEntity const& cppVal);

// ----------------------------------------------------------------------------
// CharPrimitiveWrap full specializations
// ----------------------------------------------------------------------------
template<>
void
CharPrimitive::FromCpp(Napi::Env env, const CppEntity &cppVal, NapiContainer &jsValOut);

template<>
void
CharPrimitive::FromJs(Napi::Env env, const NapiContainer &jsVal, CppEntity &cppValOut);

template<>
Napi::String
CharPrimitive::NewInstance(Napi::Env env);

template<>
Napi::String
CharPrimitive::NewInstance(Napi::Env env, CppEntity const& cppVal);


// ----------------------------------------------------------------------------
// DoublePrimitiveWrap full specializations
// ----------------------------------------------------------------------------
template<>
void
DoublePrimitive::FromCpp(Napi::Env env, const CppEntity &cppVal, NapiContainer &jsValOut);

template<>
void
DoublePrimitive::FromJs(Napi::Env env, const NapiContainer &jsVal, CppEntity &cppValOut);

template<>
Napi::Number
DoublePrimitive::NewInstance(Napi::Env env);

template<>
Napi::Number
DoublePrimitive::NewInstance(Napi::Env env, CppEntity const& cppVal);


// ----------------------------------------------------------------------------
// FloatPrimitiveWrap full specializations
// ----------------------------------------------------------------------------
template<>
void
FloatPrimitive::FromCpp(Napi::Env env, const CppEntity &cppVal, NapiContainer &jsValOut);

template<>
void
FloatPrimitive::FromJs(Napi::Env env, const NapiContainer &jsVal, CppEntity &cppValOut);

template<>
Napi::Number
FloatPrimitive::NewInstance(Napi::Env env);

template<>
Napi::Number
FloatPrimitive::NewInstance(Napi::Env env, CppEntity const& cppVal);


// ----------------------------------------------------------------------------
// LongPrimitiveWrap full specializations
// ----------------------------------------------------------------------------
template<>
void
LongPrimitive::FromCpp(Napi::Env env, const CppEntity &cppVal, NapiContainer &jsValOut);

template<>
void
LongPrimitive::FromJs(Napi::Env env, const NapiContainer &jsVal, CppEntity &cppValOut);

template<>
Napi::Number
LongPrimitive::NewInstance(Napi::Env env);

template<>
Napi::Number
LongPrimitive::NewInstance(Napi::Env env, CppEntity const& cppVal);


// ----------------------------------------------------------------------------
// LongLongPrimitiveWrap full specializations
// ----------------------------------------------------------------------------
template<>
void
LongLongPrimitive::FromCpp(Napi::Env env, const CppEntity &cppVal, NapiContainer &jsValOut);

template<>
void
LongLongPrimitive::FromJs(Napi::Env env, const NapiContainer &jsVal, CppEntity &cppValOut);

template<>
typename LongLongPrimitive::NapiContainer
LongLongPrimitive::NewInstance(Napi::Env env);

template<>
typename LongLongPrimitive::NapiContainer
LongLongPrimitive::NewInstance(Napi::Env env, CppEntity const& cppVal);


// ----------------------------------------------------------------------------
// OctetPrimitiveWrap full specializations
// ----------------------------------------------------------------------------
template<>
void
OctetPrimitive::FromCpp(Napi::Env env, const CppEntity &cppVal, NapiContainer &jsValOut);

template<>
void
OctetPrimitive::FromJs(Napi::Env env, const NapiContainer &jsVal, CppEntity &cppValOut);

template<>
Napi::Number
OctetPrimitive::NewInstance(Napi::Env env);

template<>
Napi::Number
OctetPrimitive::NewInstance(Napi::Env env, CppEntity const& cppVal);


// ----------------------------------------------------------------------------
// ShortPrimitiveWrap full specializations
// ----------------------------------------------------------------------------
template<>
void
ShortPrimitive::FromCpp(Napi::Env env, const CppEntity &cppVal, NapiContainer &jsValOut);

template<>
void
ShortPrimitive::FromJs(Napi::Env env, const NapiContainer &jsVal, CppEntity &cppValOut);

template<>
Napi::Number
ShortPrimitive::NewInstance(Napi::Env env);

template<>
Napi::Number
ShortPrimitive::NewInstance(Napi::Env env, CppEntity const& cppVal);


// ----------------------------------------------------------------------------
// UnsignedLongPrimitiveWrap full specializations
// ----------------------------------------------------------------------------
template<>
void
UnsignedLongPrimitive::FromCpp(Napi::Env env, const CppEntity &cppVal, NapiContainer &jsValOut);

template<>
void
UnsignedLongPrimitive::FromJs(Napi::Env env, const NapiContainer &jsVal, CppEntity &cppValOut);

template<>
Napi::Number
UnsignedLongPrimitive::NewInstance(Napi::Env env);

template<>
Napi::Number
UnsignedLongPrimitive::NewInstance(Napi::Env env, CppEntity const& cppVal);


// ----------------------------------------------------------------------------
// UnsignedLongLongPrimitiveWrap full specializations
// ----------------------------------------------------------------------------
template<>
void
UnsignedLongLongPrimitive::FromCpp(Napi::Env env, const CppEntity &cppVal, NapiContainer &jsValOut);

template<>
void
UnsignedLongLongPrimitive::FromJs(Napi::Env env, const NapiContainer &jsVal, CppEntity &cppValOut);

template<>
typename UnsignedLongLongPrimitive::NapiContainer
UnsignedLongLongPrimitive::NewInstance(Napi::Env env);

template<>
typename UnsignedLongLongPrimitive::NapiContainer
UnsignedLongLongPrimitive::NewInstance(Napi::Env env, CppEntity const& cppVal);


// ----------------------------------------------------------------------------
// UnsignedShortPrimitiveWrap full specializations
// ----------------------------------------------------------------------------
template<>
void
UnsignedShortPrimitive::FromCpp(Napi::Env env, const CppEntity &cppVal, NapiContainer &jsValOut);

template<>
void
UnsignedShortPrimitive::FromJs(Napi::Env env, const NapiContainer &jsVal, CppEntity &cppValOut);

template<>
Napi::Number
UnsignedShortPrimitive::NewInstance(Napi::Env env);

template<>
Napi::Number
UnsignedShortPrimitive::NewInstance(Napi::Env env, CppEntity const& cppVal);


} // end namespace DdsJs

#endif /* !_DDSJS_DDSJS_PROVIDERS_CYCLONEDDS_PRIMITIVES_HH_ */

// vim: set ts=4 sw=4 expandtab:
