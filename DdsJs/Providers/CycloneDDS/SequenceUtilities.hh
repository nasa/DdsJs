/**
 * \file CycloneDDS/SequenceUtilities.hh
 * \brief Contains the definition of the \c DdsJs::CycloneDDS::SequenceUtilities template class.
 * \author Rolando J. Nieves
 * \date 2024-10-17 15:07:19
 */

#ifndef _DDSJS_DDSJS_PROVIDERS_CYCLONEDDS_SEQUENCEUTILITIES_HH_
#define _DDSJS_DDSJS_PROVIDERS_CYCLONEDDS_SEQUENCEUTILITIES_HH_

// --------------------------------------------------------------------------
// Standard C++ Library
#include <cstdint>
#include <sstream>
#include <stdexcept>

// --------------------------------------------------------------------------
// DdsJs CycloneDDS-Specific
#include <DdsJs/Providers/CycloneDDS/heap_mem_utils.hh>


namespace DdsJs
{

namespace CycloneDDS
{

template< typename SequenceType, typename ElementType, unsigned Bounds >
class SequenceUtilities
{
public:
    using CppEntity = SequenceType;

    static ElementType& At(CppEntity& theSeq, std::size_t idx);

    static void Clear(CppEntity& theSeq);

    static ElementType const& ConstAt(CppEntity const& theSeq, std::size_t idx);

    static std::size_t ConstSize(CppEntity const& theSeq);

    static void Init(CppEntity& theSeq);

    static void Resize(CppEntity& theSeq, std::size_t newSize);

    static std::size_t Size(CppEntity& theSeq);
};


template< typename SequenceType, typename ElementType, unsigned Bounds >
ElementType&
SequenceUtilities< SequenceType, ElementType, Bounds >::At(CppEntity& theSeq, std::size_t idx)
{
    if (idx < theSeq._length)
    {
        return *theSeq._buffer[idx];
    }
    else
    {
        std::stringstream error_msg;

        error_msg << "Index (" << idx << ") out of range on sequence with length (" << theSeq._length << ")";

        throw std::out_of_range(error_msg.str());
    }
}


template< typename SequenceType, typename ElementType, unsigned Bounds >
void
SequenceUtilities< SequenceType, ElementType, Bounds >::Clear(CppEntity& theSeq)
{
    FreeHeapContents(theSeq);
}

} // end namespace CycloneDDS

} // end namespace DdsJs

#endif /* !_DDSJS_DDSJS_PROVIDERS_CYCLONEDDS_SEQUENCEUTILITIES_HH_ */

// vim: set ts=4 sw=4 expandtab:
