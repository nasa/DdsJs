/**
 * \file CycloneDDS/Arrays.hh
 * \brief Contains the definition of the \c DdsJs::FixedArray template class.
 * \author Rolando J. Nieves
 * \date 2024-12;12 09:17:17
 */

#ifndef _DDSJS_DDSJS_PROVIDERS_CYCLONEDDS_ARRAYS_HH_
#define _DDSJS_DDSJS_PROVIDERS_CYCLONEDDS_ARRAYS_HH_

// --------------------------------------------------------------------------
// Standard C++ Library
#include <algorithm>
#include <cstring>

// --------------------------------------------------------------------------
// NodeJS Add-on API
#include <napi.h>


namespace DdsJs
{

template< typename ElementProxy, unsigned Size >
class FixedArray
{
public:
    using CppEntity = typename ElementProxy::CppEntity[Size];
    using NapiContainer = Napi::Array;

    static void FromCpp(Napi::Env env, CppEntity const& cppVal, NapiContainer& jsValOut);

    static void FromJs(Napi::Env env, NapiContainer const& jsVal, CppEntity& cppValOut);

    static NapiContainer NewInstance(Napi::Env env);

    static NapiContainer NewInstance(Napi::Env env, CppEntity const& cppVal);
};


template< typename ElementProxy, unsigned Size >
void
FixedArray< ElementProxy, Size >::FromCpp(Napi::Env env, CppEntity const& cppVal, NapiContainer& jsValOut)
{
    for (unsigned idx = 0u; idx < jsValOut.Length(); idx++)
    {
        jsValOut.Delete(idx);
    }

    for (unsigned idx = 0u; idx < Size; idx++)
    {
        jsValOut.Set(idx, ElementProxy::NewInstance(env, cppVal[idx]));
    }
}


template< typename ElementProxy, unsigned Size >
void
FixedArray< ElementProxy, Size >::FromJs(Napi::Env env, NapiContainer const& jsVal, CppEntity& cppValOut)
{
    memset(&cppValOut, 0x00, sizeof(cppValOut));
    const unsigned iter_limit = std::min(jsVal.Length(), Size);

    for (unsigned idx = 0u; idx < iter_limit; idx++)
    {
        ElementProxy::FromJs(env, jsVal[idx].As< typename ElementProxy::NapiContainer >(), cppValOut[idx]);
    }
}


template< typename ElementProxy, unsigned Size >
typename FixedArray< ElementProxy, Size >::NapiContainer
FixedArray< ElementProxy, Size >::NewInstance(Napi::Env env)
{
    Napi::EscapableHandleScope scope(env);

    NapiContainer result = NapiContainer::New(env);

    return scope.Escape(result).As< NapiContainer >();
}


template< typename ElementProxy, unsigned Size >
typename FixedArray< ElementProxy, Size >::NapiContainer
FixedArray< ElementProxy, Size >::NewInstance(Napi::Env env, CppEntity const& cppVal)
{
    NapiContainer result = NewInstance(env);
    FromCpp(env, cppVal, result);

    return result;
}

} // end namespace DdsJs

#endif /* !_DDSJS_DDSJS_PROVIDERS_CYCLONEDDS_ARRAYS_HH_ */

// vim: set ts=4 sw=4 expandtab:
