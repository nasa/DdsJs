/**
 * \file CycloneDDS/Sequences.hh
 * \brief Contains the definition of the \c DdsJs::SequenceProxy class for CycloneDDS.
 * \author Rolando J. Nieves
 * \date 2024-12-12 09:51:22
 */

#ifndef _DDSJS_DDSJS_PROVIDERS_CYCLONEDDS_SEQUENCES_HH_
#define _DDSJS_DDSJS_PROVIDERS_CYCLONEDDS_SEQUENCES_HH_

// --------------------------------------------------------------------------
// NodeJS Add-on API
#include <napi.h>


namespace DdsJs
{

// As of this writing, CycloneDDS emits sequence types that observe the
// common structure:
// {
//     uint32_t _maximum;
//     uint32_t _length;
//     <element type> *_buffer;
//     bool _release;
// }
// and bring the following utility functions:
// <sequence type>__alloc();
// <sequence type>_allocbuf(size);

template< typename NativeSequenceType, typename ElementProxy, unsigned Bounds >
class SequenceProxy
{
public:
    using CppEntity = NativeSequenceType;
    using NapiContainer = Napi::Array;

    static void FromCpp(Napi::Env env, CppEntity const& cppVal, NapiContainer& jsValOut);

    static void FromJs(Napi::Env env, NapiContainer const& jsVal, CppEntity& cppValOut);

    static NapiContainer NewInstance(Napi::Env env);

    static NapiContainer NewInstance(Napi::Env env, CppEntity const& cppVal);
};


template< typename NativeSequenceType, typename ElementProxy, unsigned Bounds >
void
SequenceProxy< NativeSequenceType, ElementProxy, Bounds >::FromCpp(Napi::Env env, CppEntity const& cppVal, NapiContainer& jsValOut)
{
    for (unsigned idx = 0u; idx < jsValOut.Length(); idx++)
    {
        jsValOut.Delete(idx);
    }

    for (unsigned idx = 0u; idx < cppVal._length; idx++)
    {
        jsValOut.Set(idx, ElementProxy::NewInstance(env, cppVal._buffer[idx]));
    }
}


template< typename NativeSequenceType, typename ElementProxy, unsigned Bounds >
void
SequenceProxy< NativeSequenceType, ElementProxy, Bounds >::FromJs(Napi::Env env, NapiContainer const& jsVal, CppEntity& cppValOut)
{
    // NOTE: Risk of leak: If the input CppEntity already has content,
    // it cannot be deallocated reliably, and it will leak. Care must be taken
    // that input CppEntity instances provided as input are empty.
    cppValOut._maximum = jsVal.Length();
    cppValOut._length = jsVal.Length();
    cppValOut._buffer = reinterpret_cast< typename ElementProxy::CppEntity* >(dds_alloc(cppValOut._length * sizeof(typename ElementProxy::CppEntity)));

    for (unsigned idx = 0u; idx < jsVal.Length(); idx++)
    {
        ElementProxy::FromJs(env, jsVal.Get(idx).As< typename ElementProxy::NapiContainer >(), cppValOut._buffer[idx]);
    }
}


template< typename NativeSequenceType, typename ElementProxy, unsigned Bounds >
typename SequenceProxy< NativeSequenceType, ElementProxy, Bounds >::NapiContainer
SequenceProxy< NativeSequenceType, ElementProxy, Bounds >::NewInstance(Napi::Env env)
{
    Napi::EscapableHandleScope scope(env);

    NapiContainer result = NapiContainer::New(env);

    return scope.Escape(result).As< NapiContainer >();
}


template< typename NativeSequenceType, typename ElementProxy, unsigned Bounds >
typename SequenceProxy< NativeSequenceType, ElementProxy, Bounds >::NapiContainer
SequenceProxy< NativeSequenceType, ElementProxy, Bounds >::NewInstance(Napi::Env env, CppEntity const& cppVal)
{
    NapiContainer result = NewInstance(env);

    FromCpp(env, cppVal, result);

    return result;
}

} // end namespace DdsJs

#endif /* !_DDSJS_DDSJS_PROVIDERS_CYCLONEDDS_SEQUENCES_HH_ */

// vim: set ts=4 sw=4 expandtab:
