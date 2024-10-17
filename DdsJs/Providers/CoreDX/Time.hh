/**
 * \file CoreDX/Time.hh
 * \brief Contains the definition of the \c TimeProxy class.
 * \author Rolando J. Nieves <rolando.j.nieves@nasa.gov>
 * \date 2024-03-20 15:55:42
 */

#ifndef _DDSJS_DDSJS_PROVIDERS_COREDX_TIME_HH_
#define _DDSJS_DDSJS_PROVIDERS_COREDX_TIME_HH_

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

class TimeProxy : public Napi::ObjectWrap< TimeProxy >
{
public:
    struct SecField
    {
        using Proxy = LongPrimitive;
        static const char *NAME;
    };

    struct NanosecField
    {
        using Proxy = UnsignedLongPrimitive;
        static const char *NAME;
    };

    using CppEntity = DDS_Time_t;
    using NapiContainer = Napi::Object;

    static const char *MODNAME;
    static const char *NAME;

    static Napi::Object Init(Napi::Env env, Napi::Object exports, ConstructorRegistry *ctorReg);

    static NapiContainer NewInstance(Napi::Env env);

    static NapiContainer NewInstance(Napi::Env env, CppEntity const& cppInstance);

    static void FromCpp(Napi::Env env, CppEntity const& cppVal, NapiContainer& jsValOut);

    static void FromJs(Napi::Env env, NapiContainer const& jsVal, CppEntity& cppValOut);

    TimeProxy(Napi::CallbackInfo const& info);

    virtual ~TimeProxy() = default;
};

} // end namespace DdsJs

#endif /* !_DDSJS_DDSJS_PROVIDERS_COREDX_TIME_HH_ */

// vim: set ts=4 sw=4 expandtab:
