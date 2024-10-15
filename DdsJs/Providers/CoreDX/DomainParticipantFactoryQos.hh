/**
 * \file DomainParticipantFactoryQos.hh
 * \brief Contains the definition of the \c DomainParticipantFactoryQosProxy class.
 * \author Rolando J. Nieves <rolando.j.nieves@nasa.gov>
 * \date 2024-02-05 15:55:50
 */

#ifndef _DDSJS_DDSJS_DOMAINPARTICIPANTFACTORYQOS_HH_
#define _DDSJS_DDSJS_DOMAINPARTICIPANTFACTORYQOS_HH_

#include <napi.h>

#include <DdsJs/ConstructorRegistry.hh>
#include <DdsJs/Providers/CoreDX/EntityFactoryQosPolicy.hh>

#include <DdsJs/Providers/CoreDX/CoreDX.hh>


namespace DdsJs {

class DomainParticipantFactoryQosProxy : public Napi::ObjectWrap< DomainParticipantFactoryQosProxy >
{
public:
    struct EntityFactoryField
    {
        using Proxy = EntityFactoryQosPolicyProxy;
        static const char *NAME;
    };

    using CppEntity = DDS::DomainParticipantFactoryQos;
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

#endif /* !_DDSJS_DDSJS_DOMAINPARTICIPANTFACTORYQOS_HH_ */

// vim: set ts=4 sw=4 expandtab:
