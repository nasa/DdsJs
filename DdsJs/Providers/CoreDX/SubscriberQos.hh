/**
 * \file SubscriberQos.hh
 * \brief Contains the definition of the \c SubscriberQosProxy class.
 * \author Rolando J. Nieves <rolando.j.nieves@nasa.gov>
 * \date 2024-02-02 11:10:57
 */

#ifndef _DDSJS_DDSJS_SUBSCRIBERQOS_HH_
#define _DDSJS_DDSJS_SUBSCRIBERQOS_HH_

#include <napi.h>

#include <DdsJs/ConstructorRegistry.hh>
#include <DdsJs/Providers/CoreDX/EntityFactoryQosPolicy.hh>
#include <DdsJs/Providers/CoreDX/GroupDataQosPolicy.hh>
#include <DdsJs/Providers/CoreDX/PartitionQosPolicy.hh>
#include <DdsJs/Providers/CoreDX/PresentationQosPolicy.hh>

#include <DdsJs/Providers/CoreDX/CoreDX.hh>


namespace DdsJs {

class SubscriberQosProxy : public Napi::ObjectWrap< SubscriberQosProxy >
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

    using CppEntity = DDS::SubscriberQos;

    using NapiContainer = Napi::Object;

    static const char *MODNAME;
    
    static const char *NAME;

    static void FromCpp(Napi::Env env, CppEntity const& cppVal, NapiContainer& jsValOut);

    static void FromJs(Napi::Env env, NapiContainer const& jsVal, CppEntity& cppValOut);

    static Napi::Object Init(Napi::Env env, Napi::Object exports, ConstructorRegistry *ctorReg);

    static NapiContainer NewInstance(Napi::Env env);

    static NapiContainer NewInstance(Napi::Env env, CppEntity const& cppInstance);

    SubscriberQosProxy(Napi::CallbackInfo const& info);

    virtual ~SubscriberQosProxy() = default;
};

} // end namespace DdsJs

#endif /* !_DDSJS_DDSJS_SUBSCRIBERQOS_HH_ */

// vim: set ts=4 sw=4 expandtab:
