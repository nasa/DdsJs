/**
 * \file CycloneDDS/Duration.hh
 * \brief Contains the definition of the \c DdsJs::DurationProxy type.
 * \author Rolando J. Nieves
 * \date 2024-09-26 17:28:20
 */

#ifndef _DDSJS_DDSJS_PROVIDERS_CYCLONEDDS_DURATION_HH_
#define _DDSJS_DDSJS_PROVIDERS_CYCLONEDDS_DURATION_HH_

#include <DdsJs/ConstructorRegistry.hh>
#include <DdsJs/Providers/CycloneDDS/Primitives.hh>
#include <DdsJs/Providers/CycloneDDS/CycloneDDS.hh>


namespace DdsJs
{

class DurationProxy : public Napi::ObjectWrap< DurationProxy >
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

    using CppEntity = dds_duration_t;
    using NapiContainer = Napi::Object;

    static const char *MODNAME;
    static const char *NAME;

    static Napi::Object Init(Napi::Env env, Napi::Object exports, ConstructorRegistry *ctorReg);

    static NapiContainer NewInstance(Napi::Env env);

    static NapiContainer NewInstance(Napi::Env env, CppEntity const& cppInstance);

    static void FromCpp(Napi::Env env, CppEntity const& cppVal, NapiContainer& jsValOut);

    static void FromJs(Napi::Env env, NapiContainer const& jsVal, CppEntity& cppValOut);

    DurationProxy(Napi::CallbackInfo const& info);

    virtual ~DurationProxy() = default;
};

} // end namespace DdsJs

#endif /* !_DDSJS_DDSJS_PROVIDERS_CYCLONEDDS_DURATION_HH_*/

// vim: set ts=4 sw=4 expandtab: