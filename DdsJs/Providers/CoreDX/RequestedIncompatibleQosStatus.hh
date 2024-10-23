/**
 * \file CoreDX/RequestedIncompatibleQosStatus.hh
 * \brief Contains the definition for the \c RequestedIncompatibleQosStatusProxy class.
 * \author Rolando J. Nieves
 * \date 2024-03-11 16:08:22
 */

#ifndef _DDSJS_DDSJS_PROVIDERS_COREDX_REQUESTEDINCOMPATIBLEQOSSTATUS_HH_
#define _DDSJS_DDSJS_PROVIDERS_COREDX_REQUESTEDINCOMPATIBLEQOSSTATUS_HH_

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
// #include <DdsJs/Sequences.hh>

// --------------------------------------------------------------------------
// DdsJs CoreDX-Specific
#include <DdsJs/Providers/CoreDX/Primitives.hh>
#include <DdsJs/Providers/CoreDX/QosPolicyCount.hh>
#include <DdsJs/Providers/CoreDX/QosPolicyId.hh>
// #include <DdsJs/Providers/CoreDX/SequenceUtilities.hh>
#include <DdsJs/Providers/CoreDX/Sequence.hh>


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
        using SeqElemProxy = QosPolicyCountProxy;
        using Proxy = CoreDX::SequenceProxy<
            SeqElemProxy,
            CoreDX::CStyleSequencePolicy< DDS_QosPolicyCountSeq >,
            CoreDX::CDirectContainmentPolicy< typename SeqElemProxy::CppEntity >
        >;
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

#endif /* !_DDSJS_DDSJS_PROVIDERS_COREDX_REQUESTEDINCOMPATIBLEQOSSTATUS_HH_ */

// vim: set ts=4 sw=4 expandtab: