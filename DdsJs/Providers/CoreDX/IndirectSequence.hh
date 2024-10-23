/**
 * \file CoreDX/IndirectSequence.hh
 * \brief Contains the definition of the \c DdsJs::CoreDX::IndirectSequence class.
 * \author Rolando J. Nieves
 * \date 2024-10-22 18:31:35
 */

#ifndef _DDSJS_DDSJS_PROVIDERS_COREDX_INDIRECTSEQUENCE_HH_
#define _DDSJS_DDSJS_PROVIDERS_COREDX_INDIRECTSEQUENCE_HH_

// --------------------------------------------------------------------------
// NodeJS Add-on API
#include <napi.h>

// --------------------------------------------------------------------------
// CoreDX API Headers
#include <dds/dds.hh>
#include <dds/dds_builtin.hh>
#include <dds/dds_typesupport.hh>


namespace DdsJs
{

namespace CoreDX
{

template< typename ElementCodecType, typename CppHolderType >
class UnboundedIndirectSequence
{
public:
    using CppEntity = DDS::sequence< CppHolderType >;
    using NapiContainer = Napi::Array;

    static void FromCpp(Napi::Env env, CppEntity const& cppVal, NapiContainer& jsValOut);

    static void FromJs(Napi::Env env, NapiContainer const& jsVal, CppEntity& cppValOut);

    static NapiContainer NewInstance(Napi::Env env);

    static NapiContainer NewInstance(Napi::Env env, CppEntity const& cppVal);
};


template< typename ElementCodecType, typename CppHolderType, unsigned Bounds >
class BoundedIndirectSequence
{
public:
    using CppEntity = DDS::bounded_sequence< CppHolderType, Bounds >;
    using NapiContainer = Napi::Array;

    static void FromCpp(Napi::Env env, CppEntity const& cppVal, NapiContainer& jsValOut);

    static void FromJs(Napi::Env env, NapiContainer const& jsVal, CppEntity& cppValOut);

    static NapiContainer NewInstance(Napi::Env env);

    static NapiContainer NewInstance(Napi::Env env, CppEntity const& cppVal);
};

} // end namespace CoreDX

} // end namespace DdsJs

#endif /* !_DDSJS_DDSJS_PROVIDERS_COREDX_INDIRECTSEQUENCE_HH_ */

// vim: set ts=4 sw=4 expandtab:
