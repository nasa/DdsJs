/**
 * \file CycloneDDS/InconsistentTopicStatus.hh
 * \brief Contains the definition of the \c DdsJs::InconsistentTopicStatusProxy class.
 * \author Rolando J. Nieves
 * \date 2024-10-15 13:39:07
 */

#ifndef _DDSJS_DDSJS_PROVIDERS_CYCLONEDDS_INCONSISTENTTOPICSTATUS_HH_
#define _DDSJS_DDSJS_PROVIDERS_CYCLONEDDS_INCONSISTENTTOPICSTATUS_HH_

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
#include <DdsJs/Providers/CycloneDDS/Primitives.hh>


namespace DdsJs
{

class InconsistentTopicStatusProxy : public Napi::ObjectWrap< InconsistentTopicStatusProxy >
{
public:
    struct TotalCountField
    {
        using Proxy = UnsignedLongPrimitive;
        static const char *NAME;
    };

    struct TotalCountChangeField
    {
        using Proxy = LongPrimitive;
        static const char *NAME;
    };

    using CppEntity = dds_inconsistent_topic_status_t;
    using NapiContainer = Napi::Object;

    static const char *MODNAME;

    static const char *NAME;

    static Napi::Object Init(Napi::Env env, Napi::Object exports, ConstructorRegistry *ctorReg);

    static NapiContainer NewInstance(Napi::Env env);

    static NapiContainer NewInstance(Napi::Env env, CppEntity const& cppInstance);

    static void FromCpp(Napi::Env env, CppEntity const& cppVal, NapiContainer& jsValOut);

    static void FromJs(Napi::Env env, NapiContainer const& jsVal, CppEntity& cppValOut);

    InconsistentTopicStatusProxy(Napi::CallbackInfo const& info);

    virtual ~InconsistentTopicStatusProxy() = default;
};

} // end namespace DdsJs

#endif /* !_DDSJS_DDSJS_PROVIDERS_CYCLONEDDS_INCONSISTENTTOPICSTATUS_HH_ */

// vim: set ts=4 sw=4 expandtab:
