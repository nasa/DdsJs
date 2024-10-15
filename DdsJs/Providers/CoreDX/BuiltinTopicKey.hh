/**
 * \file DdsJs/BuiltinTopicKey.hh
 * \brief Contains the definition of the \c BuiltinTopicKeyProxy class.
 * \author Rolando J. Nieves
 * \date 2024-03-11 14:20:50
 */

#ifndef _DDSJS_DDSJS_BUILTINTOPICKEY_HH_
#define _DDSJS_DDSJS_BUILTINTOPICKEY_HH_

#include <DdsJs/ConstructorRegistry.hh>
#include <DdsJs/Providers/CoreDX/Arrays.hh>
#include <DdsJs/Providers/CoreDX/Primitives.hh>
#include <DdsJs/Providers/CoreDX/CoreDX.hh>


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

}
#endif /* !_DDSJS_DDSJS_BUILTINTOPICKEY_HH_ */

// vim: set ts=4 sw=4 expandtab:
