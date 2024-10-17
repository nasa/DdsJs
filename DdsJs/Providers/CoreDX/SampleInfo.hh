/**
 * \file CoreDX/SampleInfo.hh
 * \brief Contains the definition of the \c SampleInfoProxy class.
 * \author Rolando J. Nieves
 * \date 2024-03-14 13:44:14
 */

#ifndef _DDSJS_DDSJS_PROVIDERS_COREDX_SAMPLEINFO_HH_
#define _DDSJS_DDSJS_PROVIDERS_COREDX_SAMPLEINFO_HH_

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
#include <DdsJs/Providers/CoreDX/InstanceHandle.hh>
#include <DdsJs/Providers/CoreDX/InstanceStateKind.hh>
#include <DdsJs/Providers/CoreDX/Primitives.hh>
#include <DdsJs/Providers/CoreDX/SampleStateKind.hh>
#include <DdsJs/Providers/CoreDX/Time.hh>
#include <DdsJs/Providers/CoreDX/ViewStateKind.hh>


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
        using Proxy = LongPrimitive;
        static const char *NAME;
    };

    struct NoWritersGenerationCountField
    {
        using Proxy = LongPrimitive;
        static const char *NAME;
    };

    struct SampleRankField
    {
        using Proxy = LongPrimitive;
        static const char *NAME;
    };

    struct GenerationRankField
    {
        using Proxy = LongPrimitive;
        static const char *NAME;
    };

    struct AbsoluteGenerationRankField
    {
        using Proxy = LongPrimitive;
        static const char *NAME;
    };

    struct ValidDataField
    {
        using Proxy = BooleanPrimitive;
        static const char *NAME;
    };

    using CppEntity = DDS::SampleInfo;
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

#endif /* !_DDSJS_DDSJS_PROVIDERS_COREDX_SAMPLEINFO_HH_ */

// vim: set ts=4 sw=4 expandtab:
