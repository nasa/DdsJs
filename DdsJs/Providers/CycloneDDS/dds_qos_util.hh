/**
 * \file CycloneDDS/dds_qos_util.hh
 * \brief Contains definitions for utility routines to manage QoS instances in CycloneDDS.
 * \author Rolando J. Nieves
 * \date 2024-12-06 11:39:25
 */

#ifndef _DDSJS_DDSJS_PROVIDERS_CYCLONEDDS_DDS_QOS_UTIL_HH_
#define _DDSJS_DDSJS_PROVIDERS_CYCLONEDDS_DDS_QOS_UTIL_HH_

// --------------------------------------------------------------------------
// Standard C++ Library
#include <memory>

// --------------------------------------------------------------------------
// CycloneDDS C API
#include <dds/dds.h>


namespace DdsJs
{

namespace CycloneDDS
{

struct qos_delete
{
    void operator()(dds_qos_t *theQos) const;
};

using QosUniquePtr = std::unique_ptr< dds_qos_t, qos_delete >;

} // end namespace CycloneDDS

} // end namespace DdsJs

#endif /* !_DDSJS_DDSJS_PROVIDERS_CYCLONEDDS_DDS_QOS_UTIL_HH_ */

// vim: set ts=4 sw=4 expandtab:
