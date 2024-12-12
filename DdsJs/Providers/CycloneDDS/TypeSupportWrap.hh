/**
 * \file CycloneDDS/TypeSupportWrap.hh
 * \brief Contains the definition of the \c DdsJs::TypeSupportWrap class for CycloneDDS.
 * \author Rolando J. Nieves
 * \date 2024-12-16 08:30:39
 */

#ifndef _DDSJS_DDSJS_PROVIDERS_CYCLONEDDS_TYPESUPPORTWRAP_HH_
#define _DDSJS_DDSJS_PROVIDERS_CYCLONEDDS_TYPESUPPORTWRAP_HH_

// --------------------------------------------------------------------------
// NodeJS Add-on API
#include <napi.h>

// --------------------------------------------------------------------------
// DdsJs CycloneDDS-Specific
#include <DdsJs/Providers/CycloneDDS/TypeInformation.hh>


namespace DdsJs
{

class TypeSupportWrapBase
{
protected:
    CycloneDDS::TypeInformation m_typeInfo;

    Napi::Value GetTypeName(Napi::CallbackInfo const& info);

    Napi::Value RegisterType(Napi::CallbackInfo const& info);

public:
    TypeSupportWrapBase(CycloneDDS::TypeInformation const& typeInfo);

    virtual ~TypeSupportWrapBase() = default;
};

} // end namespace DdsJs

#endif /* !_DDSJS_DDSJS_PROVIDERS_CYCLONEDDS_TYPESUPPORTWRAP_HH_ */

// vim: set ts=4 sw=4 expandtab:
