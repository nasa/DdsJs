/**
 * \file SubscriptionMatchedStatus.hh
 * \brief Contains the defintion of the \c SubscriptionMatchedStatusProxy class.
 * \author Rolando J. Nieves
 * \date 2024-03-13 13:24:49
 */

#ifndef _DDSJS_DDSJS_SUBSCRIPTIONMATCHEDSTATUS_HH_
#define _DDSJS_DDSJS_SUBSCRIPTIONMATCHEDSTATUS_HH_

#include <napi.h>

#include <DdsJs/ConstructorRegistry.hh>
#include <DdsJs/Providers/CoreDX/InstanceHandle.hh>
#include <DdsJs/Providers/CoreDX/Primitives.hh>
#include <DdsJs/Providers/CoreDX/CoreDX.hh>


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

#endif /* !_DDSJS_DDSJS_SUBSCRIPTIONMATCHEDSTATUS_HH_ */