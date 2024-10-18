/**
 * \file CycloneDDS\heap_mem_utils.hh
 * \brief Contains utility function definitions to help manage heap-allocated constructed types.
 * \author Rolando J. Nieves
 * \date 2024-10-18 10:41:18
 */

#ifndef _DDSJS_DDSJS_PROVIDERS_CYCLONEDDS_HEAP_MEM_UTILS_HH_
#define _DDSJS_DDSJS_PROVIDERS_CYCLONEDDS_HEAP_MEM_UTILS_HH_

// --------------------------------------------------------------------------
// CycloneDDS C API
#include <dds/dds.h>


namespace DdsJs
{

namespace CycloneDDS
{

/**
 * \brief Free any heap-allocated contents in the constructed value.
 *
 * This function is meant to safely de-allocated any heap space occupied by
 * constructed type instances (structures, sequences, and unions). The default
 * implementation is a no-op. The intention is to have a full specialization
 * for any constructed type that has heap-allocated content. As of this writing
 * (2024-10-18), for CycloneDDS C API, heap-allocated content includes
 * unbounded strings and sequence buffers.
 *
 * \param constructedVal - Reference to the constructed type that should have
 *        its heap-allocated content freed.
 */
template< typename ConstructedType >
void
FreeHeapContents(ConstructedType& constructedVal)
{
    // The IDL-to-C++ code generator in this package is expected to provide a
    // full specialization of this template function for all constructed types.
}

} // end namespace CycloneDDS

} // end namespace DdsJs

#endif /* !_DDSJS_DDSJS_PROVIDERS_CYCLONEDDS_HEAP_MEM_UTILS_HH_ */

// vim: set ts=4 sw=4 expandtab: