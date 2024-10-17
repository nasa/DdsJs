/**
 * \file CoreDX/DeadlineQosPolicy.hh
 * \brief Contains the definition of the \c DeadlineQosPolicyProxy class.
 * \author Rolando J. Nieves <rolando.j.nieves@nasa.gov>
 * \date 2024-01-31 16:13:56
 */

#ifndef _DDSJS_DDSJS_PROVIDERS_COREDX_DEADLINEQOSPOLICY_HH_
#define _DDSJS_DDSJS_PROVIDERS_COREDX_DEADLINEQOSPOLICY_HH_

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
#include <DdsJs/Providers/CoreDX/Duration.hh>


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

    using CppEntity = DDS::DeadlineQosPolicy;
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

#endif /* !_DDSJS_DDSJS_PROVIDERS_COREDX_DEADLINEQOSPOLICY_HH_ */

// vim: set ts=4 sw=4 expandtab:
