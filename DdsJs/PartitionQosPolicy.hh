/**
 * \file PartitionQosPolicy.hh
 * \brief Contains the definition of the \c PartitionQosPolicyProxy class.
 * \author Rolando J. Nieves <rolando.j.nieves@nasa.gov>
 * \date 2024-01-24 13:36:14
 */

#ifndef _DDSJS_DDSJS_PARTITIONQOSPOLICY_HH_
#define _DDSJS_DDSJS_PARTITIONQOSPOLICY_HH_

#include <napi.h>

#include <DdsJs/ConstructorRegistry.hh>
#include <DdsJs/Sequences.hh>
#include <DdsJs/Strings.hh>

#include <DdsJs/dds_provider.hh>


namespace DdsJs {

class PartitionQosPolicyProxy : public Napi::ObjectWrap< PartitionQosPolicyProxy >
{
public:
    struct NameField
    {
        using Proxy = UnboundedSequence< UnboundedString, decltype(DDS::PartitionQosPolicy::name) >;
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

#endif /* !_DDSJS_DDSJS_PARTITIONQOSPOLICY_HH_ */

// vim: set ts=4 sw=4 expandtab:
