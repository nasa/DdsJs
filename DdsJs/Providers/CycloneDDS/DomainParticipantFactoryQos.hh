/**
 * \file CycloneDDS/DomainParticipantFactoryQos.hh
 * \brief Contains the definition of the \c DdsJs::DomainParticipantFactoryQosProxy class.
 * \author Rolando J. Nieves
 * \date 2024-10-02 15:22:43
 */

#ifndef _DDSJS_DDSJS_PROVIDERS_CYCLONEDDS_DOMAINPARTICIPANTFACTORYQOS_HH_
#define _DDSJS_DDSJS_PROVIDERS_CYCLONEDDS_DOMAINPARTICIPANTFACTORYQOS_HH_

// --------------------------------------------------------------------------
// CycloneDDS C API
#include <dds/dds.h>

// --------------------------------------------------------------------------
// NodeJS Add-on API
#include <napi.h>

// --------------------------------------------------------------------------
// DdsJs CycloneDDS-Specific
#include <DdsJs/Providers/CycloneDDS/EntityFactoryQosPolicy.hh>


namespace DdsJs
{

class DomainParticipantFactoryQosProxy : public Napi::ObjectWrap< DomainParticipantFactoryQosProxy >
{
public:
    struct EntityFactoryField
    {
        using Proxy = EntityFactoryQosPolicyProxy;
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

    DomainParticipantFactoryQosProxy(Napi::CallbackInfo const& info);

    virtual ~DomainParticipantFactoryQosProxy() = default;
};

} // end namespace DdsJs

#endif /* !_DDSJS_DDSJS_PROVIDERS_CYCLONEDDS_DOMAINPARTICIPANTFACTORYQOS_HH_ */

// vim: set ts=4 sw=4 expandtab:
