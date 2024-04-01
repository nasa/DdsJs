/**
 * \file EntityFactoryQosPolicy.hh
 * \brief Contains the definition of the \c EntityFactoryQosPolicyProxy class.
 * \author Rolando J. Nieves <rolando.j.nieves@nasa.gov>
 * \date 2024-01-23 10:18:17
 */

#ifndef _DDSJS_DDSJS_ENTITYFACTORYQOSPOLICY_HH_
#define _DDSJS_DDSJS_ENTITYFACTORYQOSPOLICY_HH_

#include <napi.h>

#include <DdsJs/ConstructorRegistry.hh>
#include <DdsJs/Primitives.hh>

#include <DdsJs/dds_provider.hh>


namespace DdsJs {

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

#endif /* !_DDSJS_DDSJS_ENTITYFACTORYQOSPOLICY_HH_ */

// vim: set ts=4 sw=4 expandtab:
