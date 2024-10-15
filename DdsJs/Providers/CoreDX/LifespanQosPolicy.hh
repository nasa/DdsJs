/**
 * \file LifespanQosPolicy.hh
 * \brief Contains the definition of the \c LifespanQosPolicyProxy class.
 * \author Rolando J. Nieves <rolando.j.nieves@nasa.gov>
 * \date 2024-02-02 09:52:46
 */

#ifndef _DDSJS_DDSJS_LIFESPANQOSPOLICY_HH_
#define _DDSJS_DDSJS_LIFESPANQOSPOLICY_HH_

#include <DdsJs/ConstructorRegistry.hh>
#include <DdsJs/Providers/CoreDX/Duration.hh>

#include <DdsJs/Providers/CoreDX/CoreDX.hh>


namespace DdsJs {

class LifespanQosPolicyProxy : public Napi::ObjectWrap< LifespanQosPolicyProxy >
{
public:
    struct DurationField
    {
        using Proxy = DurationProxy;
        static const char *NAME;
    };

    using CppEntity = DDS::LifespanQosPolicy;
    using NapiContainer = Napi::Object;

    static const char *MODNAME;
    
    static const char *NAME;

    static Napi::Object Init(Napi::Env env, Napi::Object exports, ConstructorRegistry *ctorReg);

    static NapiContainer NewInstance(Napi::Env env);

    static NapiContainer NewInstance(Napi::Env env, CppEntity const& cppInstance);

    static void FromCpp(Napi::Env env, CppEntity const& cppVal, NapiContainer& jsValOut);

    static void FromJs(Napi::Env env, NapiContainer const& jsVal, CppEntity& cppValOut);

    LifespanQosPolicyProxy(Napi::CallbackInfo const& info);

    virtual ~LifespanQosPolicyProxy() = default;
};

} // end namespace DdsJs

#endif /* !_DDSJS_DDSJS_LIFESPANQOSPOLICY_HH_ */

// vim: set ts=4 sw=4 expandtab:
