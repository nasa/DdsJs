/**
 * \file DdsJs/RequestedIncompatibleQosStatus.hh
 * \brief Contains the definition for the \c RequestedIncompatibleQosStatusProxy class.
 * \author Rolando J. Nieves
 * \date 2024-03-11 16:08:22
 */

#ifndef _DDSJS_DDSJS_REQUESTEDINCOMPATIBLEQOSSTATUS_HH_
#define _DDSJS_DDSJS_REQUESTEDINCOMPATIBLEQOSSTATUS_HH_

#include <napi.h>

#include <DdsJs/Primitives.hh>
#include <DdsJs/QosPolicyCount.hh>
#include <DdsJs/QosPolicyId.hh>
#include <DdsJs/Sequences.hh>


namespace DdsJs
{

class RequestedIncompatibleQosStatusProxy : public Napi::ObjectWrap< RequestedIncompatibleQosStatusProxy >
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

    struct LastPolicyIdField
    {
        using Proxy = QosPolicyIdProxy;
        static const char *NAME;
    };

    struct PoliciesField
    {
        using Proxy = UnboundedSequence< QosPolicyCountProxy, decltype(DDS::RequestedIncompatibleQosStatus::policies) >;
        static const char *NAME;
    };

    using CppEntity = DDS::RequestedIncompatibleQosStatus;
    using NapiContainer = Napi::Object;

    static const char *MODNAME;
    static const char *NAME;

    static Napi::Object Init(Napi::Env env, Napi::Object exports, ConstructorRegistry *ctorReg);

    static NapiContainer NewInstance(Napi::Env env);

    static NapiContainer NewInstance(Napi::Env env, CppEntity const& cppInstance);

    static void FromCpp(Napi::Env env, CppEntity const& cppVal, NapiContainer& jsValOut);

    static void FromJs(Napi::Env env, NapiContainer const& jsVal, CppEntity& cppValOut);

    RequestedIncompatibleQosStatusProxy(Napi::CallbackInfo const& info);

    virtual ~RequestedIncompatibleQosStatusProxy() = default;
};

} // end namespace DdsJs

#endif /* !_DDSJS_DDSJS_REQUESTEDINCOMPATIBLEQOSSTATUS_HH_ */

// vim: set ts=4 sw=4 expandtab: