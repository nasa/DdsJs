/**
 * \file DdsJs/SampleRejectedStatus.hh
 * \brief Contains the definition of the \c SampleRejectedStatusProxy class.
 * \author Rolando J. Nieves
 * \date 2024-03-13 12:40:28
 */

#ifndef _DDSJS_DDSJS_SAMPLEREJECTEDSTATUS_HH_
#define _DDSJS_DDSJS_SAMPLEREJECTEDSTATUS_HH_

#include <DdsJs/ConstructorRegistry.hh>
#include <DdsJs/Providers/CoreDX/InstanceHandle.hh>
#include <DdsJs/Providers/CoreDX/Primitives.hh>
#include <DdsJs/Providers/CoreDX/SampleRejectedStatusKind.hh>


namespace DdsJs
{

class SampleRejectedStatusProxy : public Napi::ObjectWrap< SampleRejectedStatusProxy >
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

    struct LastReasonField
    {
        using Proxy = SampleRejectedStatusKindProxy;
        static const char *NAME;
    };

    struct LastInstanceHandleField
    {
        using Proxy = InstanceHandleProxy;
        static const char *NAME;
    };

    using CppEntity = DDS::SampleRejectedStatus;
    using NapiContainer = Napi::Object;

    static const char *MODNAME;
    static const char *NAME;

    static Napi::Object Init(Napi::Env env, Napi::Object exports, ConstructorRegistry *ctorReg);

    static NapiContainer NewInstance(Napi::Env env);

    static NapiContainer NewInstance(Napi::Env env, CppEntity const& cppInstance);

    static void FromCpp(Napi::Env env, CppEntity const& cppVal, NapiContainer& jsValOut);

    static void FromJs(Napi::Env env, NapiContainer const& jsVal, CppEntity& cppValOut);

    SampleRejectedStatusProxy(Napi::CallbackInfo const& info);

    virtual ~SampleRejectedStatusProxy() = default;
};

} // end namespace DdsJs

#endif /* !_DDSJS_DDSJS_SAMPLEREJECTEDSTATUS_HH_ */

// vim: set ts=4 sw=4 expandtab:
