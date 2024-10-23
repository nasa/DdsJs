/**
 * \file CoreDX/TopicDataQosPolicy.hh
 * \brief Contains the definition of the \c TopicDataQosPolicyProxy class.
 * \author Rolando J. Nieves <rolando.j.nieves@nasa.gov>
 * \date 2024-01-31 14:52:43
 */

#ifndef _DDSJS_DDSJS_PROVIDERS_COREDX_TOPICDATAQOSPOLICY_HH_
#define _DDSJS_DDSJS_PROVIDERS_COREDX_TOPICDATAQOSPOLICY_HH_

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
// #include <DdsJs/Sequences.hh>

// --------------------------------------------------------------------------
// DdsJs CoreDX-Specific
#include <DdsJs/Providers/CoreDX/Primitives.hh>
// #include <DdsJs/Providers/CoreDX/SequenceUtilities.hh>
#include <DdsJs/Providers/CoreDX/Sequence.hh>


namespace DdsJs
{

class TopicDataQosPolicyProxy : public Napi::ObjectWrap< TopicDataQosPolicyProxy >
{
public:
    struct ValueField
    {
        using SeqElemProxy = OctetPrimitive;
        using Proxy = CoreDX::SequenceProxy<
            SeqElemProxy,
            CoreDX::CppUnboundedSequencePolicy< typename SeqElemProxy::CppEntity >,
            CoreDX::CppDirectContainmentPolicy< typename SeqElemProxy::CppEntity >
        >;
        static const char* NAME;
    };

    using CppEntity = DDS::TopicDataQosPolicy;
    using NapiContainer = Napi::Object;

    static const char* MODNAME;
    static const char* NAME;

    static Napi::Object Init(Napi::Env env, Napi::Object exports, ConstructorRegistry *ctorReg);

    static NapiContainer NewInstance(Napi::Env env);

    static NapiContainer NewInstance(Napi::Env env, CppEntity const& cppInstance);

    static void FromCpp(Napi::Env env, CppEntity const& cppVal, NapiContainer& jsValOut);

    static void FromJs(Napi::Env env, NapiContainer const& jsVal, CppEntity& cppValOut);

    TopicDataQosPolicyProxy(Napi::CallbackInfo const& info);

    virtual ~TopicDataQosPolicyProxy() = default;
};

} // end namespace DdsJs

#endif /* !_DDSJS_DDSJS_PROVIDERS_COREDX_TOPICDATAQOSPOLICY_HH_ */

// vim: set ts=4 sw=4 expandtab:
