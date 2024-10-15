/**
 * \file CycloneDDS/DeadlineQosPolicy.hh
 * \brief Contains the definition of the \c DeadlineQosPolicyProxy class.
 * \author Rolando J. Nieves <rolando.j.nieves@nasa.gov>
 * \date 2024-10-03 12:38:10
 */

#ifndef _DDSJS_DDSJS_PROVIDERS_CYCLONEDDS_DEADLINEQOSPOLICY_HH_
#define _DDSJS_DDSJS_PROVIDERS_CYCLONEDDS_DEADLINEQOSPOLICY_HH_

#include <DdsJs/ConstructorRegistry.hh>
#include <DdsJs/Providers/CycloneDDS/Duration.hh>

#include <DdsJs/Providers/CycloneDDS/CycloneDDS.hh>


namespace DdsJs
{

class DeadlineQosPolicyProxy : public Napi::ObjectWrap< DeadlineQosPolicyProxy >
{
public:
    struct PeriodField
    {
        using Proxy = DurationProxy;
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

    DeadlineQosPolicyProxy(Napi::CallbackInfo const& info);

    virtual ~DeadlineQosPolicyProxy() = default;
};

} // end namespace DdsJs

#endif /* !_DDSJS_DDSJS_PROVIDERS_CYCLONEDDS_DEADLINEQOSPOLICY_HH_ */

// vim: set ts=4 sw=4 expandtab:
