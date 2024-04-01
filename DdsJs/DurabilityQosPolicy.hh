/**
 * \file DurabilityQosPolicy.hh
 * \brief Contains the definition of the \c DurabilityQosPolicyProxy class.
 * \author Rolando J. Nieves <rolando.j.nieves@nasa.gov>
 * \date 2024-01-31 15:14:59
 */

#ifndef _DDSJS_DDSJS_DURABILITYQOSPOLICY_HH_
#define _DDSJS_DDSJS_DURABILITYQOSPOLICY_HH_

#include <napi.h>

#include <DdsJs/ConstructorRegistry.hh>
#include <DdsJs/DurabilityQosPolicyKind.hh>
#include <DdsJs/Primitives.hh>

#include <DdsJs/dds_provider.hh>


namespace DdsJs {

class DurabilityQosPolicyProxy : public Napi::ObjectWrap< DurabilityQosPolicyProxy >
{
public:
    struct KindField
    {
        using Proxy = DurabilityQosPolicyKindProxy;
        static const char *NAME;
    };

    using CppEntity = DDS::DurabilityQosPolicy;
    using NapiContainer = Napi::Object;

    static const char *MODNAME;
    
    static const char *NAME;

    static Napi::Object Init(Napi::Env env, Napi::Object exports, ConstructorRegistry *ctorReg);

    static NapiContainer NewInstance(Napi::Env env);

    static NapiContainer NewInstance(Napi::Env env, CppEntity const& cppInstance);

    static void FromCpp(Napi::Env env, CppEntity const& cppVal, NapiContainer& jsValOut);

    static void FromJs(Napi::Env env, NapiContainer const& jsVal, CppEntity& cppValOut);

    DurabilityQosPolicyProxy(Napi::CallbackInfo const& info);

    virtual ~DurabilityQosPolicyProxy() = default;
};

} // end namespace DdsJs

#endif /* !_DDSJS_DDSJS_DURABILITYQOSPOLICY_HH_ */

// vim: set ts=4 sw=4 expandtab:
