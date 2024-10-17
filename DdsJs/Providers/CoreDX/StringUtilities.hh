/**
 * \file CoreDX/StringUtilities.hh
 * \brief Contains the definition of the \c DdsJs::CoreDX::StringUtilities template class.
 * \author Rolando J. Nieves
 * \date 2024-10-16 13:12:46
 */

#ifndef _DDSJS_DDSJS_PROVIDERS_COREDX_STRINGUTILITIES_HH_
#define _DDSJS_DDSJS_PROVIDERS_COREDX_STRINGUTILITIES_HH_

// --------------------------------------------------------------------------
// Standard C++ Library
#include <string>

// --------------------------------------------------------------------------
// CoreDX API Headers
#include <dds/dds.hh>
#include <dds/dds_builtin.hh>
#include <dds/dds_typesupport.hh>


namespace DdsJs
{

namespace CoreDX
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
        // For bounded strings, CoreDX is expected to "pre-allocate" the space
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
        // For unbounded strings, CoreDX is expected to "adopt" the memory
        // allocated for the new value.
        size_t alloc_size = source.length() + 1u;
        delete [] destination;
        destination = new char[alloc_size];
        memset(destination, 0x00, alloc_size);
        memcpy(destination, source.c_str(), source.length());
    }
};

} // end namespace CoreDX

} // end namespace DdsJs

#endif /* !_DDSJS_DDSJS_PROVIDERS_COREDX_STRINGUTILITIES_HH_ */

// vim: set ts=4 sw=4 expandtab:
