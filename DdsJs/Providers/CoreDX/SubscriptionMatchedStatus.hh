/**
 * \file CoreDX/SubscriptionMatchedStatus.hh
 * \brief Contains the defintion of the \c SubscriptionMatchedStatusProxy class.
 * \author Rolando J. Nieves
 * \date 2024-03-13 13:24:49
 */

#ifndef _DDSJS_DDSJS_PROVIDERS_COREDX_SUBSCRIPTIONMATCHEDSTATUS_HH_
#define _DDSJS_DDSJS_PROVIDERS_COREDX_SUBSCRIPTIONMATCHEDSTATUS_HH_

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
#include <DdsJs/Providers/CoreDX/Primitives.hh>


namespace DdsJs
{

class SubscriptionMatchedStatusProxy : public Napi::ObjectWrap< SubscriptionMatchedStatusProxy >
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

    struct CurrentCountField
    {
        using Proxy = LongPrimitive;
        static const char *NAME;
    };

    struct CurrentCountChangeField
    {
        using Proxy = LongPrimitive;
        static const char *NAME;
    };

    struct LastPublicationHandleField
    {
        using Proxy = InstanceHandleProxy;
        static const char *NAME;
    };

    using CppEntity = DDS::SubscriptionMatchedStatus;
    using NapiContainer = Napi::Object;

    static const char *MODNAME;
    static const char *NAME;

    static Napi::Object Init(Napi::Env env, Napi::Object exports, ConstructorRegistry *ctorReg);

    static NapiContainer NewInstance(Napi::Env env);

    static NapiContainer NewInstance(Napi::Env env, CppEntity const& cppInstance);

    static void FromCpp(Napi::Env env, CppEntity const& cppVal, NapiContainer& jsValOut);

    static void FromJs(Napi::Env env, NapiContainer const& jsVal, CppEntity& cppValOut);

    SubscriptionMatchedStatusProxy(Napi::CallbackInfo const& info);

    virtual ~SubscriptionMatchedStatusProxy() = default;
};

} // end namespace DdsJs

#endif /* !_DDSJS_DDSJS_PROVIDERS_COREDX_SUBSCRIPTIONMATCHEDSTATUS_HH_ */