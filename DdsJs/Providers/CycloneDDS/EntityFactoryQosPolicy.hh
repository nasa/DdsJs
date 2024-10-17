/**
 * \file CycloneDDS/EntityFactoryQosPolicy.hh
 * \brief Contains the definition of the \c EntityFactoryQosPolicyProxy class.
 * \author Rolando J. Nieves <rolando.j.nieves@nasa.gov>
 * \date 2024-10-02 10:16:03
 */

#ifndef _DDSJS_DDSJS_PROVIDERS_CYCLONEDDS_ENTITYFACTORYQOSPOLICY_HH_
#define _DDSJS_DDSJS_PROVIDERS_CYCLONEDDS_ENTITYFACTORYQOSPOLICY_HH_

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

class EntityFactoryQosPolicyProxy : public Napi::ObjectWrap< EntityFactoryQosPolicyProxy >
{
public:
    struct AutoenableCreatedEntitiesField
    {
        static const char *NAME;
    };

    using CppEntity = dds_qos_t*;
    using NapiContainer = Napi::Object;

    static const char *MODNAME;
    
    static const char *NAME;

    static Napi::Object Init(Napi::Env env, Napi::Object exports, ConstructorRegistry *ctorReg);

    static NapiContainer NewInstance(Napi::Env env);

    static NapiContainer NewInstance(Napi::Env env, CppEntity const& cppInstance);

    static void FromCpp(Napi::Env env, CppEntity const& cppVal, NapiContainer& jsValOut);

    static void FromJs(Napi::Env env, NapiContainer const& jsVal, CppEntity& cppValOut);

    EntityFactoryQosPolicyProxy(Napi::CallbackInfo const& info);

    virtual ~EntityFactoryQosPolicyProxy() = default;
};

} // end namespace DdsJs

#endif /* !_DDSJS_DDSJS_PROVIDERS_CYCLONEDDS_ENTITYFACTORYQOSPOLICY_HH_ */

// vim: set ts=4 sw=4 expandtab:
