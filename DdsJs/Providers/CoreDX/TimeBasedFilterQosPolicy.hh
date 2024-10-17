/**
 * \file CoreDX/TimeBasedFilterQosPolicy.hh
 * \brief Contains the definition of the \c TimeBasedFilterQosPolicyProxy class.
 * \author Rolando J. Nieves <rolando.j.nieves@nasa.gov>
 * \date 2024-02-02 12:12:18
 */

#ifndef _DDSJS_DDSJS_PROVIDERS_COREDX_TIMEBASEDFILTERQOSPOLICY_HH_
#define _DDSJS_DDSJS_PROVIDERS_COREDX_TIMEBASEDFILTERQOSPOLICY_HH_

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
#include <DdsJs/Providers/CoreDX/Duration.hh>


namespace DdsJs
{

class TimeBasedFilterQosPolicyProxy : public Napi::ObjectWrap< TimeBasedFilterQosPolicyProxy >
{
public:
    struct MinimumSeparationField
    {
        using Proxy = DurationProxy;
        static const char *NAME;
    };

    using CppEntity = DDS::TimeBasedFilterQosPolicy;
    using NapiContainer = Napi::Object;

    static const char *MODNAME;

    static const char *NAME;

    static Napi::Object Init(Napi::Env env, Napi::Object exports, ConstructorRegistry *ctorReg);

    static NapiContainer NewInstance(Napi::Env env);

    static NapiContainer NewInstance(Napi::Env env, CppEntity const& cppInstance);

    static void FromCpp(Napi::Env env, CppEntity const& cppVal, NapiContainer& jsValOut);

    static void FromJs(Napi::Env env, NapiContainer const& jsVal, CppEntity& cppValOut);

    TimeBasedFilterQosPolicyProxy(Napi::CallbackInfo const& info);

    virtual ~TimeBasedFilterQosPolicyProxy() = default;
};

} // end namespace DdsJs

#endif /* !_DDSJS_DDSJS_PROVIDERS_COREDX_TIMEBASEDFILTERQOSPOLICY_HH_ */

// vim: set ts=4 sw=4 expandtab:
