/**
 * \file CycloneDDS/WriterDataLifecycleQosPolicy.hh
 * \brief Contains the definition of the \c WriterDataLifecycleQosPolicyProxy class.
 * \author Rolando J. Nieves <rolando.j.nieves@nasa.gov>
 * \date 2024-10-03 17:53:55
 */

#ifndef _DDSJS_DDSJS_PROVIDERS_CYCLONEDDS_WRITERDATALIFECYCLEQOSPOLICY_HH_
#define _DDSJS_DDSJS_PROVIDERS_CYCLONEDDS_WRITERDATALIFECYCLEQOSPOLICY_HH_

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

class WriterDataLifecycleQosPolicyProxy : public Napi::ObjectWrap< WriterDataLifecycleQosPolicyProxy >
{
public:
    struct AutodisposeUnregisteredInstancesField
    {
        using Proxy = BooleanPrimitive;
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

    WriterDataLifecycleQosPolicyProxy(Napi::CallbackInfo const& info);

    virtual ~WriterDataLifecycleQosPolicyProxy() = default;
};

} // end namespace DdsJs

#endif /* !_DDSJS_DDSJS_PROVIDERS_CYCLONEDDS_WRITERDATALIFECYCLEQOSPOLICY_HH_ */

// vim: set ts=4 sw=4 expandtab:
