/**
 * \file DomainParticipantQos.hh
 * \brief Contains the definition of the \c DomainParticipantQosProxy class.
 * \author Rolando J. Nieves <rolando.j.nieves@nasa.gov>
 * \date 2024-01-23 10:09:49
 */

#ifndef _DDSJS_DDSJS_DOMAINPARTICIPANTQOS_HH_
#define _DDSJS_DDSJS_DOMAINPARTICIPANTQOS_HH_

#include <napi.h>

#include <DdsJs/ConstructorRegistry.hh>
#include <DdsJs/Providers/CoreDX/EntityFactoryQosPolicy.hh>
#include <DdsJs/Providers/CoreDX/UserDataQosPolicy.hh>

#include <DdsJs/Providers/CoreDX/CoreDX.hh>


namespace DdsJs {

class DomainParticipantQosProxy : public Napi::ObjectWrap< DomainParticipantQosProxy >
{
public:
    struct EntityFactoryField
    {
        using Proxy = EntityFactoryQosPolicyProxy;
        static const char *NAME;
    };

    struct UserDataField
    {
        using Proxy = UserDataQosPolicyProxy;
        static const char *NAME;
    };

    using CppEntity = DDS::DomainParticipantQos;
    using NapiContainer = Napi::Object;

    static const char *MODNAME;

    static const char *NAME;

    static Napi::Object Init(Napi::Env env, Napi::Object exports, ConstructorRegistry *ctorReg);

    static NapiContainer NewInstance(Napi::Env env);

    static NapiContainer NewInstance(Napi::Env env, CppEntity const& cppInstance);

    static void FromCpp(Napi::Env env, CppEntity const& cppVal, NapiContainer& jsValOut);

    static void FromJs(Napi::Env env, NapiContainer const& jsVal, CppEntity& cppValOut);

    DomainParticipantQosProxy(Napi::CallbackInfo const& info);

    virtual ~DomainParticipantQosProxy() = default;
};

} // end namespace DdsJs

#endif /* !_DDSJS_DDSJS_DOMAINPARTICIPANTQOS_HH_ */

// vim: set ts=4 sw=4 expandtab:
