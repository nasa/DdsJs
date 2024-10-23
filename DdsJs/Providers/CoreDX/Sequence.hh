/**
 * \file CoreDX/Sequence.hh
 * \brief Contains the definition of the \c DdsJs::CoreDX::SequenceProxy class.
 * \author Rolando J. Nieves
 * \date 2024-10-22 18:27:46
 */

#ifndef _DDSJS_DDSJS_PROVIDERS_COREDX_DIRECTSEQUENCE_HH_
#define _DDSJS_DDSJS_PROVIDERS_COREDX_DIRECTSEQUENCE_HH_

// --------------------------------------------------------------------------
// Standard C++ Library
#include <sstream>
#include <stdexcept>

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

// template< typename ElementCodecType >
// class UnboundedDirectSequence
// {
// public:
//     using CppEntity = DDS::sequence< typename ElementCodecType::CppEntity >;
//     using NapiContainer = Napi::Array;

//     static void FromCpp(Napi::Env env, CppEntity const& cppVal, NapiContainer& jsValOut);

//     static void FromJs(Napi::Env env, NapiContainer const& jsVal, CppEntity& cppValOut);

//     static NapiContainer NewInstance(Napi::Env env);

//     static NapiContainer NewInstance(Napi::Env env, CppEntity const& cppVal);
// };


// template< typename ElementCodecType, unsigned Bounds >
// class BoundedDirectSequence
// {
// public:
//     using CppEntity = DDS::bounded_sequence< typename ElementCodecType::CppEntity, Bounds >;
//     using NapiContainer = Napi::Array;

//     static void FromCpp(Napi::Env env, CppEntity const& cppVal, NapiContainer& jsValOut);

//     static void FromJs(Napi::Env env, NapiContainer const& jsVal, CppEntity& cppValOut);

//     static NapiContainer NewInstance(Napi::Env env);

//     static NapiContainer NewInstance(Napi::Env env, CppEntity const& cppVal);
// };


// template< typename ElementCodecType >
// void
// UnboundedDirectSequence< ElementCodecType >::FromCpp(Napi::Env env, CppEntity const& cppVal, NapiContainer& jsValOut)
// {
//     // Whatever values were present in the JS array prior to this call will be
//     // erased and replaced with fresh values.
//     uint32_t jsValSize = jsValOut.Length();
//     while ((jsValSize > 0) && (jsValSize > cppVal.length()))
//     {
//         jsValOut.Delete(jsValSize - 1u);
//         jsValSize = jsValOut.Length();
//     }
//     for (size_t idx = 0u; idx < cppVal.length(); idx++)
//     {
//         jsValOut[idx] = ElementCodecType::NewInstance(env, cppVal[idx]);
//     }
// }


// template< typename ElementCodecType >
// void
// UnboundedDirectSequence< ElementCodecType >::FromJs(Napi::Env env, NapiContainer const& jsVal, CppEntity& cppValOut)
// {
//     // Whatever values were present in the C++ array prior to this call will be
//     // erased and replaced with fresh values.
//     cppValOut.clear();
//     cppValOut.resize(jsVal.Length());
//     for (size_t idx = 0u; idx < jsVal.Length(); idx++)
//     {
//         ElementCodecType::FromJs(env, jsVal[idx].As< typename ElementCodecType::NapiContainer >(), cppValOut.at(idx));
//     }
// }


// template< typename ElementCodecType >
// typename UnboundedDirectSequence< ElementCodecType >::NapiContainer
// UnboundedDirectSequence< ElementCodecType >::NewInstance(Napi::Env env)
// {
//     Napi::EscapableHandleScope scope(env);
//     return scope.Escape(NapiContainer::New(env)).As< NapiContainer >();
// }


// template< typename ElementCodecType >
// typename UnboundedDirectSequence< ElementCodecType >::NapiContainer
// UnboundedDirectSequence< ElementCodecType >::NewInstance(Napi::Env env, CppEntity const& cppVal)
// {
//     NapiContainer result = NewInstance(env);
//     FromCpp(env, cppVal, result);
//     return result;
// }


template< typename CSeqType >
class CStyleSequencePolicy
{
public:
    static constexpr unsigned MAX_SIZE = 0u;

    using CppContainer = CSeqType;

    static bool WithinBounds(CppContainer const& sequence, unsigned size)
    { return true; }
};


template< typename CppElementType >
class CppUnboundedSequencePolicy
{
public:
    static constexpr unsigned MAX_SIZE = 0u;

    using CppContainer = DDS::sequence< CppElementType >;

    static bool WithinBounds(CppContainer const& sequence, unsigned size)
    { return true; }
};


template< typename CppElementType, unsigned Bounds >
class CppBoundedSequencePolicy
{
public:
    static constexpr unsigned MAX_SIZE = Bounds;

    using CppContainer = DDS::bounded_sequence< CppElementType, Bounds >;

    static bool WithinBounds(CppContainer const& sequence, unsigned size)
    { return size < Bounds; }
};


class CppStyleContainmentPolicy
{
public:
    template< typename CppContainerType >
    static unsigned Length(CppContainerType const& sequence)
    { return sequence.length(); }

    template< typename CppContainerType >
    static void Resize(CppContainerType& sequence, unsigned newSize)
    { sequence.resize(newSize); }
};


template< typename CppElementType >
class CppDirectContainmentPolicy : public CppStyleContainmentPolicy
{
public:
    template< typename CppContainerType >
    static CppElementType& At(CppContainerType& sequence, unsigned idx)
    { return sequence.at(idx); }

    template< typename CppContainerType >
    static CppElementType const& ConstAt(CppContainerType const& sequence, unsigned idx)
    { return sequence.at(idx); }
};


template< typename SeqHolderType, typename CppElementType >
class CppIndirectContainmentPolicy : public CppStyleContainmentPolicy
{
public:
    template< typename CppContainerType >
    static CppElementType& At(CppContainerType& sequence, unsigned idx)
    { return sequence.at(idx).value; }

    template< typename CppContainerType >
    static CppElementType const& ConstAt(CppContainerType const& sequence, unsigned idx)
    { return sequence.at(idx).value; }
};


template< typename CppElementType >
class CStyleContainmentPolicy
{
public:
    template< typename CppContainerType >
    static unsigned Length(CppContainerType const& sequence)
    { CppContainerType *seq_p = const_cast< CppContainerType* >(&sequence); return seq_get_length(seq_p); }

    template< typename CppContainerType >
    static void Resize(CppContainerType& sequence, unsigned newSize)
    { seq_set_size(&sequence, newSize); }
};


template< typename CppElementType >
class CDirectContainmentPolicy : public CStyleContainmentPolicy< CppElementType >
{
public:
    template< typename CppContainerType >
    static CppElementType& At(CppContainerType& sequence, unsigned idx)
    { CppContainerType *seq_p = &sequence; CppElementType *elem = *seq_at(seq_p, idx); return *elem; }

    template< typename CppContainerType >
    static CppElementType const& ConstAt(CppContainerType const& sequence, unsigned idx)
    { CppContainerType *seq_p = const_cast< CppContainerType* >(&sequence); CppElementType *elem = *seq_at(seq_p, idx); return *elem; }
};


template< typename ElementCodecType, typename BoundsPolicy, typename ContainmentPolicy >
class SequenceProxy
{
public:
    using CppEntity = typename BoundsPolicy::CppContainer;
    using NapiContainer = Napi::Array;

    static void FromCpp(Napi::Env env, CppEntity const& cppVal, NapiContainer& jsValOut);

    static void FromJs(Napi::Env env, NapiContainer const& jsVal, CppEntity& cppValOut);

    static NapiContainer NewInstance(Napi::Env env);

    static NapiContainer NewInstance(Napi::Env env, CppEntity const& cppVal);
};


template< typename ElementCodecType, typename BoundsPolicy, typename ContainmentPolicy >
void
SequenceProxy< ElementCodecType, BoundsPolicy, ContainmentPolicy >::FromCpp(Napi::Env env, CppEntity const& cppVal, NapiContainer& jsValOut)
{
    // Whatever values were present in the JS array prior to this call will be
    // erased and replaced with fresh values.
    uint32_t jsValSize = jsValOut.Length();
    while ((jsValSize > 0) && (jsValSize > ContainmentPolicy::Length(cppVal)))
    {
        jsValOut.Delete(jsValSize - 1u);
        jsValSize = jsValOut.Length();
    }
    for (size_t idx = 0u; idx < ContainmentPolicy::Length(cppVal); idx++)
    {
        jsValOut[idx] = ElementCodecType::NewInstance(env, ContainmentPolicy::ConstAt(cppVal, idx));
    }
}


template< typename ElementCodecType, typename BoundsPolicy, typename ContainmentPolicy >
void
SequenceProxy< ElementCodecType, BoundsPolicy, ContainmentPolicy >::FromJs(Napi::Env env, NapiContainer const& jsVal, CppEntity& cppValOut)
{
    if (!BoundsPolicy::WithinBounds(cppValOut, jsVal.Length()))
    {
        std::stringstream error_msg;
        error_msg
            <<  "Array too big for DDS sequence with bounded size of ("
            << BoundsPolicy::MAX_SIZE
            << ") elements";
        throw Napi::Error::New(env, error_msg.str().c_str());
    }

    // Whatever values were present in the C++ array prior to this call will be
    // erased and replaced with fresh values.
    ContainmentPolicy::Resize(cppValOut, jsVal.Length());
    for (size_t idx = 0u; idx < jsVal.Length(); idx++)
    {
        ElementCodecType::FromJs(env, jsVal[idx].As< typename ElementCodecType::NapiContainer >(), ContainmentPolicy::At(cppValOut, idx));
    }
}


template< typename ElementCodecType, typename BoundsPolicy, typename ContainmentPolicy >
typename SequenceProxy< ElementCodecType, BoundsPolicy, ContainmentPolicy >::NapiContainer
SequenceProxy< ElementCodecType, BoundsPolicy, ContainmentPolicy >::NewInstance(Napi::Env env)
{
    Napi::EscapableHandleScope scope(env);
    return scope.Escape(NapiContainer::New(env)).As< NapiContainer >();
}


template< typename ElementCodecType, typename BoundsPolicy, typename ContainmentPolicy >
typename SequenceProxy< ElementCodecType, BoundsPolicy, ContainmentPolicy >::NapiContainer
SequenceProxy< ElementCodecType, BoundsPolicy, ContainmentPolicy >::NewInstance(Napi::Env env, CppEntity const& cppVal)
{
    NapiContainer result = NewInstance(env);
    FromCpp(env, cppVal, result);
    return result;
}

} // end namespace CoreDX

} // end namespace DdsJs

#endif /* !_DDSJS_DDSJS_PROVIDERS_COREDX_DIRECTSEQUENCE_HH_ */

// vim: set ts=4 sw=4 expandtab:
