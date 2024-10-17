/**
 * \file DdsJs/InstanceHandle.hh
 * \brief Contains the definition of the \c InstanceHandleProxy alias.
 * \author Rolando J. Nieves
 * \date 2024-03-11 11:40:04
 */

#ifndef _DDSJS_DDSJS_PROVIDERS_CYCLONEDDS_INSTANCEHANDLE_HH_
#define _DDSJS_DDSJS_PROVIDERS_CYCLONEDDS_INSTANCEHANDLE_HH_

// --------------------------------------------------------------------------
// CycloneDDS C API
#include <dds/dds.h>

// --------------------------------------------------------------------------
// DdsJs CycloneDDS-Specific
#include <DdsJs/Providers/CycloneDDS/Primitives.hh>


namespace DdsJs
{

class InstanceHandleProxy : public Primitive< dds_instance_handle_t, Napi::BigInt >
{
public:
    static inline void FromCpp(Napi::Env env, CppEntity const& cppVal, NapiContainer& jsValOut)
    { UnsignedLongLongPrimitive::FromCpp(env, cppVal, jsValOut); }
    static inline void FromJs(Napi::Env env, NapiContainer const& jsVal, CppEntity& cppValOut)
    { UnsignedLongLongPrimitive::FromJs(env, jsVal, cppValOut); }
    static inline NapiContainer NewInstance(Napi::Env env)
    { return UnsignedLongLongPrimitive::NewInstance(env); }
    static inline NapiContainer NewInstance(Napi::Env env, CppEntity const& cppVal)
    { return UnsignedLongLongPrimitive::NewInstance(env, cppVal); }
};

} // end namespace DdsJs

#endif /* !_DDSJS_DDSJS_PROVIDERS_CYCLONEDDS_INSTANCEHANDLE_HH_ */

// vim: set ts=4 sw=4 expandtab:
