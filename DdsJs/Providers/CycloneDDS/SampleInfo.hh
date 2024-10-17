/**
 * \file CycloneDDS/SampleInfo.hh
 * \brief Contains the definition of the \c SampleInfoProxy class.
 * \author Rolando J. Nieves
 * \date 2024-10-04 12:19:40
 */

#ifndef _DDSJS_DDSJS_PROVIDERS_CYCLONEDDS_SAMPLEINFO_HH_
#define _DDSJS_DDSJS_PROVIDERS_CYCLONEDDS_SAMPLEINFO_HH_

// --------------------------------------------------------------------------
// CycloneDDS C API
#include <dds/dds.h>

// --------------------------------------------------------------------------
// NodeJS Add-on API
#include <napi.h>

// --------------------------------------------------------------------------
// DdsJs Generic
#include <DdsJs/ConstructorRegistry.hh>

// --------------------------------------------------------------------------
// DdsJs CycloneDDS-Specific
#include <DdsJs/Providers/CycloneDDS/InstanceHandle.hh>
#include <DdsJs/Providers/CycloneDDS/InstanceStateKind.hh>
#include <DdsJs/Providers/CycloneDDS/Primitives.hh>
#include <DdsJs/Providers/CycloneDDS/SampleStateKind.hh>
#include <DdsJs/Providers/CycloneDDS/Time.hh>
#include <DdsJs/Providers/CycloneDDS/ViewStateKind.hh>


namespace DdsJs
{

class SampleInfoProxy : public Napi::ObjectWrap< SampleInfoProxy >
{
public:
    struct SampleStateField
    {
        using Proxy = SampleStateKindProxy;
        static const char *NAME;
    };

    struct ViewStateField
    {
        using Proxy = ViewStateKindProxy;
        static const char *NAME;
    };

    struct InstanceStateField
    {
        using Proxy = InstanceStateKindProxy;
        static const char *NAME;
    };

    struct SourceTimestampField
    {
        using Proxy = TimeProxy;
        static const char *NAME;
    };

    struct InstanceHandleField
    {
        using Proxy = InstanceHandleProxy;
        static const char *NAME;
    };

    struct PublicationHandleField
    {
        using Proxy = InstanceHandleProxy;
        static const char *NAME;
    };

    struct DisposedGenerationCountField
    {
        using Proxy = UnsignedLongPrimitive;
        static const char *NAME;
    };

    struct NoWritersGenerationCountField
    {
        using Proxy = UnsignedLongPrimitive;
        static const char *NAME;
    };

    struct SampleRankField
    {
        using Proxy = UnsignedLongPrimitive;
        static const char *NAME;
    };

    struct GenerationRankField
    {
        using Proxy = UnsignedLongPrimitive;
        static const char *NAME;
    };

    struct AbsoluteGenerationRankField
    {
        using Proxy = UnsignedLongPrimitive;
        static const char *NAME;
    };

    struct ValidDataField
    {
        using Proxy = BooleanPrimitive;
        static const char *NAME;
    };

    using CppEntity = dds_sample_info_t;
    using NapiContainer = Napi::Object;

    static const char *MODNAME;
    static const char *NAME;

    static Napi::Object Init(Napi::Env env, Napi::Object exports, ConstructorRegistry *ctorReg);

    static NapiContainer NewInstance(Napi::Env env);

    static NapiContainer NewInstance(Napi::Env env, CppEntity const& cppInstance);

    static void FromCpp(Napi::Env env, CppEntity const& cppVal, NapiContainer& jsValOut);

    static void FromJs(Napi::Env env, NapiContainer const& jsVal, CppEntity& cppValOut);

    SampleInfoProxy(Napi::CallbackInfo const& info);

    virtual ~SampleInfoProxy() = default;
};

} // end namespace DdsJs

#endif /* !_DDSJS_DDSJS_SAMPLEINFO_HH_ */

// vim: set ts=4 sw=4 expandtab:
