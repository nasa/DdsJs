/**
 * \file CoreDX/EntityFactoryQosPolicy.hh
 * \brief Contains the definition of the \c EntityFactoryQosPolicyProxy class.
 * \author Rolando J. Nieves <rolando.j.nieves@nasa.gov>
 * \date 2024-01-23 10:18:17
 */

#ifndef _DDSJS_DDSJS_PROVIDERS_COREDX_ENTITYFACTORYQOSPOLICY_HH_
#define _DDSJS_DDSJS_PROVIDERS_COREDX_ENTITYFACTORYQOSPOLICY_HH_

// --------------------------------------------------------------------------
// NodeJS Add-on API
#include <napi.h>

// --------------------------------------------------------------------------
// CoreDX API Headers
#include <dds/dds.hh>
#include <dds/dds_builtin.hh>
#include <dds/dds_typesupport.hh>

// --------------------------------------------------------------------------
// DdsJs Generic
#include <DdsJs/ConstructorRegistry.hh>

// --------------------------------------------------------------------------
// DdsJs CoreDX-Specific
#include <DdsJs/Providers/CoreDX/Primitives.hh>


namespace DdsJs
{

class EntityFactoryQosPolicyProxy : public Napi::ObjectWrap< EntityFactoryQosPolicyProxy >
{
public:
    struct AutoenableCreatedEntitiesField
    {
        using Proxy = BooleanPrimitive;
        static const char *NAME;
    };

    using CppEntity = DDS::EntityFactoryQosPolicy;
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

#endif /* !_DDSJS_DDSJS_PROVIDERS_COREDX_ENTITYFACTORYQOSPOLICY_HH_ */

// vim: set ts=4 sw=4 expandtab:
