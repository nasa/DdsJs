/**
 * \file HistoryQosPolicy.hh
 * \brief Contains the definition of the \c HistoryQosPolicyProxy class.
 * \author Rolando J. Nieves <rolando.j.nieves@nasa.gov>
 * \date 2024-01-31 15:32:02
 */

#ifndef _DDSJS_DDSJS_HISTORYQOSPOLICY_HH_
#define _DDSJS_DDSJS_HISTORYQOSPOLICY_HH_

#include <napi.h>

#include <DdsJs/ConstructorRegistry.hh>
#include <DdsJs/HistoryQosPolicyKind.hh>
#include <DdsJs/Primitives.hh>

#include <DdsJs/dds_provider.hh>


namespace DdsJs {

class HistoryQosPolicyProxy : public Napi::ObjectWrap< HistoryQosPolicyProxy >
{
public:
    struct KindField
    {
        using Proxy = HistoryQosPolicyKindProxy;
        static const char *NAME;
    };

    struct DepthField
    {
        using Proxy = LongPrimitive;
        static const char *NAME;
    };

    using CppEntity = DDS::HistoryQosPolicy;
    using NapiContainer = Napi::Object;

    static const char *MODNAME;
    
    static const char *NAME;

    static Napi::Object Init(Napi::Env env, Napi::Object exports, ConstructorRegistry *ctorReg);

    static NapiContainer NewInstance(Napi::Env env);

    static NapiContainer NewInstance(Napi::Env env, CppEntity const& cppInstance);

    static void FromCpp(Napi::Env env, CppEntity const& cppVal, NapiContainer& jsValOut);

    static void FromJs(Napi::Env env, NapiContainer const& jsVal, CppEntity& cppValOut);

    HistoryQosPolicyProxy(Napi::CallbackInfo const& info);

    virtual ~HistoryQosPolicyProxy() = default;
};

} // end namespace DdsJs

#endif /* !_DDSJS_DDSJS_HISTORYQOSPOLICY_HH_ */

// vim: set ts=4 sw=4 expandtab:
