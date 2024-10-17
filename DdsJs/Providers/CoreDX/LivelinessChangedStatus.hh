/**
 * \file CoreDX/LivelinessChangedStatus.hh
 * \brief Contains the definition of the \c LivelinessChangedStatusProxy class.
 * \author Rolando J. Nieves
 * \date 2024-03-11 10:29:14
 */

#ifndef _DDSJS_DDSJS_PROVIDERS_COREDX_LIVELINESSCHANGEDSTATUS_HH_
#define _DDSJS_DDSJS_PROVIDERS_COREDX_LIVELINESSCHANGEDSTATUS_HH_

// --------------------------------------------------------------------------
// CoreDX API Headers
#include <dds/dds.hh>
#include <dds/dds_builtin.hh>
#include <dds/dds_typesupport.hh>

// --------------------------------------------------------------------------
// DdsJs Generic
#include <DdsJs/ConstructorRegistry.hh>

// --------------------------------------------------------------------------
// DdsJs CoreDX-Specific
#include <DdsJs/Providers/CoreDX/InstanceHandle.hh>
#include <DdsJs/Providers/CoreDX/Primitives.hh>


namespace DdsJs
{

class LivelinessChangedStatusProxy : public Napi::ObjectWrap< LivelinessChangedStatusProxy >
{
public:
    struct AliveCountField
    {
        using Proxy = LongPrimitive;
        static const char *NAME;
    };

    struct NotAliveCountField
    {
        using Proxy = LongPrimitive;
        static const char *NAME;
    };

    struct AliveCountChangeField
    {
        using Proxy = LongPrimitive;
        static const char *NAME;
    };

    struct NotAliveCountChangeField
    {
        using Proxy = LongPrimitive;
        static const char *NAME;
    };

    struct LastPublicationHandleField
    {
        using Proxy = InstanceHandleProxy;
        static const char *NAME;
    };

    using CppEntity = ::DDS::LivelinessChangedStatus;
    using NapiContainer = Napi::Object;

    static const char *MODNAME;
    static const char *NAME;

    static Napi::Object Init(Napi::Env env, Napi::Object exports, ConstructorRegistry *ctorReg);

    static NapiContainer NewInstance(Napi::Env env);

    static NapiContainer NewInstance(Napi::Env env, CppEntity const& cppInstance);

    static void FromCpp(Napi::Env env, CppEntity const& cppVal, NapiContainer& jsValOut);

    static void FromJs(Napi::Env env, NapiContainer const& jsVal, CppEntity& cppValOut);

    LivelinessChangedStatusProxy(Napi::CallbackInfo const& info);

    virtual ~LivelinessChangedStatusProxy() = default;
};

} // end namespace DdsJs

#endif /* !_DDSJS_DDSJS_PROVIDERS_COREDX_LIVELINESSCHANGEDSTATUS_HH_ */

// vim: set ts=4 sw=4 expandtab:
