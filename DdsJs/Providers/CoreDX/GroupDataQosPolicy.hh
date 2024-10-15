/**
 * \file GroupDataQosPolicy.hh
 * \brief Contains the definition of the \c GroupDataQosPolicyProxy class.
 * \author Rolando J. Nieves
 * \date 2024-01-24 15:40:36
 */

#ifndef _DDSJS_DDSJS_GROUPDATAQOSPOLICY_HH_
#define _DDSJS_DDSJS_GROUPDATAQOSPOLICY_HH_

#include <napi.h>

#include <DdsJs/ConstructorRegistry.hh>
#include <DdsJs/Providers/CoreDX/Primitives.hh>
#include <DdsJs/Providers/CoreDX/Sequences.hh>

#include <DdsJs/Providers/CoreDX/CoreDX.hh>


namespace DdsJs {

class GroupDataQosPolicyProxy : public Napi::ObjectWrap< GroupDataQosPolicyProxy >
{
public:
    struct ValueField
    {
        using Proxy = UnboundedSequence< OctetPrimitive, decltype(DDS::GroupDataQosPolicy::value) >;
        static const char* NAME;
    };

    using CppEntity = DDS::GroupDataQosPolicy;
    using NapiContainer = Napi::Object;

    static const char *MODNAME;

    static const char* NAME;

    static Napi::Object Init(Napi::Env env, Napi::Object exports, ConstructorRegistry *ctorReg);

    static NapiContainer NewInstance(Napi::Env env);

    static NapiContainer NewInstance(Napi::Env env, CppEntity const& cppInstance);

    static void FromCpp(Napi::Env env, CppEntity const& cppVal, NapiContainer& jsValOut);

    static void FromJs(Napi::Env env, NapiContainer const& jsVal, CppEntity& cppValOut);

    GroupDataQosPolicyProxy(Napi::CallbackInfo const& info);

    virtual ~GroupDataQosPolicyProxy() = default;
};

} // end namespace DdsJs

#endif /* _DDSJS_DDSJS_GROUPDATAQOSPOLICY_HH_ */

// vim: set ts=4 sw=4 expandtab: