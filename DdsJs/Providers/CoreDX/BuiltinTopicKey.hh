/**
 * \file CoreDX/BuiltinTopicKey.hh
 * \brief Contains the definition of the \c BuiltinTopicKeyProxy class.
 * \author Rolando J. Nieves
 * \date 2024-03-11 14:20:50
 */

#ifndef _DDSJS_DDSJS_PROVIDERS_COREDX_BUILTINTOPICKEY_HH_
#define _DDSJS_DDSJS_PROVIDERS_COREDX_BUILTINTOPICKEY_HH_

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
#include <DdsJs/Providers/CoreDX/Arrays.hh>
#include <DdsJs/Providers/CoreDX/Primitives.hh>


namespace DdsJs
{

class BuiltinTopicKeyProxy : public Napi::ObjectWrap< BuiltinTopicKeyProxy >
{
public:
    struct ValueField
    {
        static constexpr size_t VALUE_SIZE = 3u;
        using Proxy = FixedArray< LongPrimitive, VALUE_SIZE >;
        static const char *NAME;
    };

    using CppEntity = DDS::BuiltinTopicKey_t;
    using NapiContainer = Napi::Object;

    static const char *MODNAME;
    static const char *NAME;

    static Napi::Object Init(Napi::Env env, Napi::Object exports, ConstructorRegistry *ctorReg);

    static NapiContainer NewInstance(Napi::Env env);

    static NapiContainer NewInstance(Napi::Env env, CppEntity const& cppInstance);

    static void FromCpp(Napi::Env env, CppEntity const& cppVal, NapiContainer& jsValOut);

    static void FromJs(Napi::Env env, NapiContainer const& jsVal, CppEntity& cppValOut);

    BuiltinTopicKeyProxy(Napi::CallbackInfo const& info);

    virtual ~BuiltinTopicKeyProxy() = default;
};

} // end namespace DdsJs

#endif /* !_DDSJS_DDSJS_PROVIDERS_COREDX_BUILTINTOPICKEY_HH_ */

// vim: set ts=4 sw=4 expandtab:
