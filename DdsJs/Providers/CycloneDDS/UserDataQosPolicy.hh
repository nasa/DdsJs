/**
 * \file CylconeDDS/UserDataQosPolicy.hh
 * \brief Contains the definition of the \c UserDataQosPolicyProxy class.
 * \author Rolando J. Nieves <rolando.j.nieves@nasa.gov>
 * \date 2024-10-01 16:33:17
 */

#ifndef _DDSJS_DDSJS_PROVIDERS_CYCLONEDDS_USERDATAQOSPOLICY_HH_
#define _DDSJS_DDSJS_PROVIDERS_CYCLONEDDS_USERDATAQOSPOLICY_HH_

// --------------------------------------------------------------------------
// CycloneDDS C API
#include <dds/dds.h>

// --------------------------------------------------------------------------
// NodeJS Add-on API
#include <napi.h>

// --------------------------------------------------------------------------
// DdsJs Generic
#include <DdsJs/ConstructorRegistry.hh>


namespace DdsJs
{

class UserDataQosPolicyProxy : public Napi::ObjectWrap< UserDataQosPolicyProxy >
{
public:
    struct ValueField
    {
        static const char* NAME;
    };

    using CppEntity = dds_qos_t*;
    using NapiContainer = Napi::Object;

    static const char* MODNAME;

    static const char* NAME;

    static Napi::Object Init(Napi::Env env, Napi::Object exports, ConstructorRegistry *ctorReg);

    static NapiContainer NewInstance(Napi::Env env);

    static NapiContainer NewInstance(Napi::Env env, CppEntity const& cppInstance);

    static void FromCpp(Napi::Env env, CppEntity const& cppVal, NapiContainer& jsValOut);

    static void FromJs(Napi::Env env, NapiContainer const& jsVal, CppEntity& cppValOut);

    UserDataQosPolicyProxy(Napi::CallbackInfo const& info);

    virtual ~UserDataQosPolicyProxy() = default;
};

} // end namespace DdsJs

#endif /* !_DDSJS_DDSJS_PROVIDERS_CYCLONEDDS_USERDATAQOSPOLICY_HH_ */

// vim: set ts=4 sw=4 expandtab:
