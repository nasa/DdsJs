/**
 * \file CycloneDDS/dds_qos_util.cpp
 * \brief Contains the implementation for utility routines to manage QoS instances in CycloneDDS.
 * \author Rolando J. Nieves
 * \date 2024-12-06 11:43:52
 */

// --------------------------------------------------------------------------
// Local Definition
#include "dds_qos_util.hh"


namespace DdsJs
{

namespace CycloneDDS
{

void
qos_delete::operator()(dds_qos_t *theQos) const
{
    dds_delete_qos(theQos);
}

} // end namespace CycloneDDS

} // end namespace DdsJs

// vim: set ts=4 sw=4 expandtab:
