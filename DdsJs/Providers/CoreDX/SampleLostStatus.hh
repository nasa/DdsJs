/**
 * \file CoreDX/SampleLostStatus.hh
 * \brief Contains the definition of the \c SampleLostStatusProxy class.
 * \author Rolando J. Nieves
 * \date 2024-03-12 17:59:35
 */

#ifndef _DDSJS_DDSJS_PROVIDERS_COREDX_SAMPLELOSTSTATUS_HH_
#define _DDSJS_DDSJS_PROVIDERS_COREDX_SAMPLELOSTSTATUS_HH_

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

class SampleLostStatusProxy : public Napi::ObjectWrap< SampleLostStatusProxy >
{
public:
    struct TotalCountField
    {
        using Proxy = LongPrimitive;
        static const char *NAME;
    };

    struct TotalCountChangeField
    {
        using Proxy = LongPrimitive;
        static const char *NAME;
    };

    using CppEntity = DDS::SampleLostStatus;
    using NapiContainer = Napi::Object;

    static const char *MODNAME;
    static const char *NAME;

    static Napi::Object Init(Napi::Env env, Napi::Object exports, ConstructorRegistry *ctorReg);

    static NapiContainer NewInstance(Napi::Env env);

    static NapiContainer NewInstance(Napi::Env env, CppEntity const& cppInstance);

    static void FromCpp(Napi::Env env, CppEntity const& cppVal, NapiContainer& jsValOut);

    static void FromJs(Napi::Env env, NapiContainer const& jsVal, CppEntity& cppValOut);

    SampleLostStatusProxy(Napi::CallbackInfo const& info);

    virtual ~SampleLostStatusProxy() = default;
};

} // end namespace DdsJs

#endif /* !_DDSJS_DDSJS_PROVIDERS_COREDX_SAMPLELOSTSTATUS_HH_ */

// vim: set ts=4 sw=4 expandtab:
