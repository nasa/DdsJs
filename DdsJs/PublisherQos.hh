/**
 * \file PublisherQos.hh
 * \brief Contains the definition of the \c PublisherQosProxy class.
 * \author Rolando J. Nieves <rolando.j.nieves@nasa.gov>
 * \date 2024-01-24 15:46:11
 */

#ifndef _DDSJS_DDSJS_PUBLISHERQOS_HH_
#define _DDSJS_DDSJS_PUBLISHERQOS_HH_

#include <napi.h>

#include <DdsJs/ConstructorRegistry.hh>
#include <DdsJs/EntityFactoryQosPolicy.hh>
#include <DdsJs/GroupDataQosPolicy.hh>
#include <DdsJs/PartitionQosPolicy.hh>
#include <DdsJs/PresentationQosPolicy.hh>

#include <DdsJs/dds_provider.hh>


namespace DdsJs {

class PublisherQosProxy : public Napi::ObjectWrap< PublisherQosProxy >
{
public:
    struct EntityFactoryField
    {
        using Proxy = EntityFactoryQosPolicyProxy;
        static const char *NAME;
    };

    struct GroupDataField
    {
        using Proxy = GroupDataQosPolicyProxy;
        static const char *NAME;
    };

    struct PartitionField
    {
        using Proxy = PartitionQosPolicyProxy;
        static const char *NAME;
    };

    struct PresentationField
    {
        using Proxy = PresentationQosPolicyProxy;
        static const char *NAME;
    };

    using CppEntity = DDS::PublisherQos;

    using NapiContainer = Napi::Object;

    static const char *MODNAME;

    static const char *NAME;

    static void FromCpp(Napi::Env env, CppEntity const& cppVal, NapiContainer& jsValOut);

    static void FromJs(Napi::Env env, NapiContainer const& jsVal, CppEntity& cppValOut);

    static Napi::Object Init(Napi::Env env, Napi::Object exports, ConstructorRegistry *ctorReg);

    static NapiContainer NewInstance(Napi::Env env);

    static NapiContainer NewInstance(Napi::Env env, CppEntity const& cppInstance);

    PublisherQosProxy(Napi::CallbackInfo const& info);

    virtual ~PublisherQosProxy() = default;
};

} // end namespace DdsJs

#endif /* !_DDSJS_DDSJS_PUBLISHERQOS_HH_ */

// vim: set ts=4 sw=4 expandtab:
