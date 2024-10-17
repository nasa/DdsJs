/**
 * \file CycloneDDS/StringUtilities.hh
 * \brief Contains the definition of the \c DdsJs::CycloneDDS::StringUtilities template class.
 * \author Rolando J. Nieves
 * \date 2024-10-17 13:50:58
 */

#ifndef _DDSJS_DDSJS_PROVIDERS_CYCLONEDDS_STRINGUTILITIES_HH_
#define _DDSJS_DDSJS_PROVIDERS_CYCLONEDDS_STRINGUTILITIES_HH_

// --------------------------------------------------------------------------
// Standard C++ Library
#include <cstring>
#include <string>

// --------------------------------------------------------------------------
// CycloneDDS C API
#include <dds/dds.h>


namespace DdsJs
{

namespace CycloneDDS
{

template< unsigned Bounds >
class StringUtilities
{
public:
    using CppEntity = char[Bounds + 1u];

    static std::string ConstContents(CppEntity const& theString)
    { return std::string(theString); }

    static void SetContents(std::string const& source, CppEntity& destination)
    {
        // For bounded strings, CycloneDDS effectively pre-allocates the space
        // by making the struct field a stack-allocated array.
        // Truncate any extraneous content based on the maximum string bounds.
        size_t copy_size = std::min(
            static_cast< size_t >(source.length()),
            static_cast< size_t >(Bounds)
        );
        memset(destination, 0x00, Bounds + 1u);
        memcpy(destination, source.c_str(), copy_size);
    }
};


template<>
class StringUtilities< 0 >
{
public:
    using CppEntity = char*;

    static std::string ConstContents(CppEntity const& theString)
    { return std::string((nullptr == theString ? "" : theString)); }

    static void SetContents(std::string const& source, CppEntity& destination)
    {
        // For unbounded strings, as long as the sample that contains the
        // character string is disposed of using dds_sample_free() with the
        // DDS_FREE_CONTENTS_BIT in the "op" field, it will be freed.
        dds_string_free(destination);
        destination = dds_string_dup(source.c_str());
    }
};

} // end namespace CycloneDDS

} // end namespace DdsJs

#endif /* !_DDSJS_DDSJS_PROVIDERS_CYCLONEDDS_STRINGUTILITIES_HH_ */

// vim: set ts=4 sw=4 expandtab:
