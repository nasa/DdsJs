/**
 * \file CoreDX/SequenceUtilities.hh
 * \brief Contains the definition of the \c DdsJs::SequenceUtilities class.
 * \author Rolando J. Nieves
 * \date 2024-10-16 11:15:14
 */

#ifndef _DDSJS_DDSJS_PROVIDERS_COREDX_SEQUENCEUTILITIES_HH_
#define _DDSJS_DDSJS_PROVIDERS_COREDX_SEQUENCEUTILITIES_HH_

#include <vector>

#include <DdsJs/Providers/CoreDX/CoreDX.hh>


namespace DdsJs
{

namespace CoreDX
{

template< typename SequenceType, typename ElementType >
class SequenceUtilities
{
public:
    using CppEntity = SequenceType;

    static ElementType& At(CppEntity& theSeq, size_t idx)
    { ElementType *result = *(seq_at(&theSeq, idx)); return *result; }

    static void Clear(CppEntity& theSeq)
    { seq_clear(&theSeq); }

    static ElementType const& ConstAt(CppEntity const& theSeq, size_t idx)
    { ElementType *result = *(seq_at(&theSeq, idx)); return *result; }

    static size_t ConstSize(CppEntity const& theSeq)
    { return seq_get_size(&theSeq); }

    static void Init(CppEntity& theSeq)
    { DDS_SEQ_INIT(theSeq); }

    static void Resize(CppEntity& theSeq, size_t newSize)
    { seq_set_size(&theSeq, newSize); }

    static size_t Size(CppEntity& theSeq)
    { return seq_get_size(&theSeq); }
};


template< typename ElementType >
class SequenceUtilities< DDS::sequence< ElementType >, ElementType >
{
public:
    using CppEntity = DDS::sequence< ElementType >;

    static ElementType& At(DDS::sequence< ElementType >& theSeq, size_t idx)
    { return theSeq[idx]; }

    static void Clear(DDS::sequence< ElementType >& theSeq)
    { theSeq.clear(); }

    static ElementType const& ConstAt(DDS::sequence< ElementType > const& theSeq, size_t idx)
    { return theSeq[idx]; }

    static size_t ConstSize(DDS::sequence< ElementType > const& theSeq)
    { return theSeq.size(); }

    static void Init(DDS::sequence< ElementType >& theSeq)
    { /* no-op for C++ */ return; }

    static void Resize(DDS::sequence< ElementType >& theSeq, size_t newSize)
    { theSeq.resize(newSize); }

    static size_t Size(DDS::sequence< ElementType >& theSeq)
    { return theSeq.size(); }
};


template< typename ElementType, unsigned Bounds >
class SequenceUtilities< DDS::bounded_sequence< ElementType, Bounds >, ElementType >
{
public:
    using CppEntity = DDS::bounded_sequence< ElementType, Bounds >;

    static ElementType& At(CppEntity& theSeq, size_t idx)
    { return theSeq[idx]; }

    static void Clear(CppEntity& theSeq)
    { theSeq.clear(); }

    static ElementType const& ConstAt(CppEntity const& theSeq, size_t idx)
    { return theSeq[idx]; }

    static size_t ConstSize(CppEntity const& theSeq)
    { return theSeq.size(); }

    static void Init(CppEntity& theSeq)
    { /* no-op for C++ */ return; }

    static void Resize(CppEntity& theSeq, size_t newSize)
    { theSeq.resize(newSize); }

    static size_t Size(CppEntity& theSeq)
    { return theSeq.size(); }
};

} // end namespace CoreDX

} // end namespace DdsJs

#endif /* !_DDSJS_DDSJS_PROVIDERS_COREDX_SEQUENCEUTILITIES_HH_ */

// vim: set ts=4 sw=4 expandtab:
