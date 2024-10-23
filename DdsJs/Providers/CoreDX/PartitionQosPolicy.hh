/**
 * \file CoreDX/PartitionQosPolicy.hh
 * \brief Contains the definition of the \c PartitionQosPolicyProxy class.
 * \author Rolando J. Nieves <rolando.j.nieves@nasa.gov>
 * \date 2024-01-24 13:36:14
 */

#ifndef _DDSJS_DDSJS_PROVIDERS_COREDX_PARTITIONQOSPOLICY_HH_
#define _DDSJS_DDSJS_PROVIDERS_COREDX_PARTITIONQOSPOLICY_HH_

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
#include <DdsJs/Strings.hh>

// --------------------------------------------------------------------------
// DdsJs CoreDX-Specific
// #include <DdsJs/Providers/CoreDX/SequenceUtilities.hh>
#include <DdsJs/Providers/CoreDX/Sequence.hh>
#include <DdsJs/Providers/CoreDX/StringUtilities.hh>


namespace DdsJs
{

class PartitionQosPolicyProxy : public Napi::ObjectWrap< PartitionQosPolicyProxy >
{
public:
    struct NameField
    {
        using SeqElemProxy = UnboundedString< CoreDX::StringUtilities >;
        using Proxy = CoreDX::SequenceProxy<
            SeqElemProxy,
            CoreDX::CppUnboundedSequencePolicy< typename SeqElemProxy::CppEntity >,
            CoreDX::CppDirectContainmentPolicy< typename SeqElemProxy::CppEntity >
        >;
        static const char *NAME;
    };

    using CppEntity = DDS::PartitionQosPolicy;
    using NapiContainer = Napi::Object;

    static const char *MODNAME;
    
    static const char *NAME;

    static Napi::Object Init(Napi::Env env, Napi::Object exports, ConstructorRegistry *ctorReg);

    static NapiContainer NewInstance(Napi::Env env);

    static NapiContainer NewInstance(Napi::Env env, CppEntity const& cppInstance);

    static void FromCpp(Napi::Env env, CppEntity const& cppVal, NapiContainer& jsValOut);

    static void FromJs(Napi::Env env, NapiContainer const& jsVal, CppEntity& cppValOut);

    PartitionQosPolicyProxy(Napi::CallbackInfo const& info);

    virtual ~PartitionQosPolicyProxy() = default;
};

} // end namespace DdsJs

#endif /* !_DDSJS_DDSJS_PROVIDERS_COREDX_PARTITIONQOSPOLICY_HH_ */

// vim: set ts=4 sw=4 expandtab:
