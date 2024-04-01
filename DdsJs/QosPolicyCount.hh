/**
 * \file DdsJs/QosPolicyCount.hh
 * \brief Contains the definition for the \c QosPolicyCountProxy class.
 * \author Rolando J. Nieves
 * \date 2024-03-11 16:16:29
 */

#ifndef _DDSJS_DDSJS_QOSPOLICYCOUNT_HH_
#define _DDSJS_DDSJS_QOSPOLICYCOUNT_HH_

#include <napi.h>

#include <DdsJs/ConstructorRegistry.hh>
#include <DdsJs/Primitives.hh>
#include <DdsJs/QosPolicyId.hh>
#include <DdsJs/dds_provider.hh>


namespace DdsJs
{

class QosPolicyCountProxy : public Napi::ObjectWrap< QosPolicyCountProxy >
{
public:
    struct PolicyIdField
    {
        using Proxy = QosPolicyIdProxy;
        static const char *NAME;
    };

    struct CountField
    {
        using Proxy = LongPrimitive;
        static const char *NAME;
    };

    using CppEntity = DDS::QosPolicyCount;
    using NapiContainer = Napi::Object;

    static const char *MODNAME;
    static const char *NAME;

    static Napi::Object Init(Napi::Env env, Napi::Object exports, ConstructorRegistry *ctorReg);

    static NapiContainer NewInstance(Napi::Env env);

    static NapiContainer NewInstance(Napi::Env env, CppEntity const& cppInstance);

    static void FromCpp(Napi::Env env, CppEntity const& cppVal, NapiContainer& jsValOut);

    static void FromJs(Napi::Env env, NapiContainer const& jsVal, CppEntity& cppValOut);

    QosPolicyCountProxy(Napi::CallbackInfo const& info);

    virtual ~QosPolicyCountProxy() = default;
};

} // end namespace DdsJs

#endif /* !_DDSJS_DDSJS_QOSPOLICYCOUNT_HH_ */

// vim: set ts=4 sw=4 expandtab:
