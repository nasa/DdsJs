/**
 * \file CycloneDDS/ViewStateKind.hh
 * \brief Contains the definition of the \c DdsJs::ViewStateKindProxy class.
 * \author Rolando J. Nieves
 * \date 2024-10-04 11:50:49
 */

#ifndef _DDSJS_DDSJS_PROVIDERS_CYCLONEDDS_VIEWSTATEKIND_HH_
#define _DDSJS_DDSJS_PROVIDERS_CYCLONEDDS_VIEWSTATEKIND_HH_

// --------------------------------------------------------------------------
// CycloneDDS C API
#include <dds/dds.h>

// --------------------------------------------------------------------------
// NodeJS Add-on API
#include <napi.h>

// --------------------------------------------------------------------------
// DdsJs CycloneDDS-Specific
#include <DdsJs/Providers/CycloneDDS/Primitives.hh>


namespace DdsJs
{

class ViewStateKindProxy : public Primitive< dds_view_state_t, Napi::Number >
{
public:
    static Napi::Object Init(Napi::Env env, Napi::Object exports);

    static void FromCpp(Napi::Env env, CppEntity const& cppVal, NapiContainer& jsValOut);
    static void FromJs(Napi::Env env, NapiContainer const& jsVal, CppEntity& cppValOut);
    static NapiContainer NewInstance(Napi::Env env);
    static NapiContainer NewInstance(Napi::Env env, CppEntity const& cppVal);
};

} // end namespace DdsJs

#endif /* !_DDSJS_DDSJS_PROVIDERS_CYCLONEDDS_VIEWSTATEKIND_HH_ */

// vim: set ts=4 sw=4 expandtab:
