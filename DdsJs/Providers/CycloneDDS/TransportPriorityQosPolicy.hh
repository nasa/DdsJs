/**
 * \file CycloneDDS/TransportPriorityQosPolicy.hh
 * \brief Contains the definition of the \c TransportPriorityQosPolicyProxy class.
 * \author Rolando J. Nieves <rolando.j.nieves@nasa.gov>
 * \date 2024-10-03 17:09:12
 */

#ifndef _DDSJS_DDSJS_PROVIDERS_CYCLONEDDS_TRANSPORTPOLICYQOSPOLICY_HH_
#define _DDSJS_DDSJS_PROVIDERS_CYCLONEDDS_TRANSPORTPOLICYQOSPOLICY_HH_

#include <DdsJs/ConstructorRegistry.hh>
#include <DdsJs/Providers/CycloneDDS/Primitives.hh>

#include <DdsJs/Providers/CycloneDDS/CycloneDDS.hh>


namespace DdsJs {

class TransportPriorityQosPolicyProxy : public Napi::ObjectWrap< TransportPriorityQosPolicyProxy >
{
public:
    struct ValueField
    {
        using Proxy = LongPrimitive;
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

    TransportPriorityQosPolicyProxy(Napi::CallbackInfo const& info);

    virtual ~TransportPriorityQosPolicyProxy() = default;
};

} // end namespace DdsJs

#endif /* !_DDSJS_DDSJS_PROVIDERS_CYCLONEDDS_TRANSPORTPOLICYQOSPOLICY_HH_ */

// vim: set ts=4 sw=4 expandtab:
