/**
 * \file CoreDX/InstanceHandle.hh
 * \brief Contains the definition of the \c InstanceHandleProxy alias.
 * \author Rolando J. Nieves
 * \date 2024-03-11 11:40:04
 */

#ifndef _DDSJS_DDSJS_PROVIDERS_COREDX_INSTANCEHANDLE_HH_
#define _DDSJS_DDSJS_PROVIDERS_COREDX_INSTANCEHANDLE_HH_

// --------------------------------------------------------------------------
// DdsJs CoreDX-Specific
#include <DdsJs/Providers/CoreDX/Primitives.hh>


namespace DdsJs
{

#if __INTPTR_WIDTH__ == 64
using InstanceHandleProxy = LongLongPrimitive;
#else
using InstanceHandleProxy = LongPrimitive;
#endif /* __INTPTR_WIDTH__ == 64 */

} // end namespace DdsJs

#endif /* !_DDSJS_DDSJS_PROVIDERS_COREDX_INSTANCEHANDLE_HH_ */

// vim: set ts=4 sw=4 expandtab:
