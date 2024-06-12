/**
 * \file ParticipantBuiltinTopicData.hh
 * \brief Contains the definition of the \c ParticipantBuiltinTopicData class.
 * \author Rolando J. Nieves
 * \date 2024-06-12 14:40:49
 */

#ifndef _DDSJS_DDSJS_PARTICIPANTBUILTINTOPICDATA_HH_
#define _DDSJS_DDSJS_PARTICIPANTBUILTINTOPICDATA_HH_

#include <DdsJs/BuiltinTopicKey.hh>
#include <DdsJs/UserDataQosPolicy.hh>


namespace DdsJs
{

class ParticipantBuiltinTopicDataProxy : public Napi::ObjectWrap< ParticipantBuiltinTopicDataProxy >
{
public:
    struct KeyField
    {
        using Proxy = BuiltinTopicKeyProxy;
        static const char *NAME;
    };

    struct UserDataField
    {
        using Proxy = UserDataQosPolicyProxy;
        static const char *NAME;
    };

    using CppEntity = DDS::ParticipantBuiltinTopicData;
    using NapiContainer = Napi::Object;

    static const char *MODNAME;
    static const char *NAME;

    static void FromCpp(Napi::Env env, CppEntity const& cppVal, NapiContainer& jsValOut);

    static void FromJs(Napi::Env env, NapiContainer const& jsVal, CppEntity& cppValOut);

    static Napi::Object Init(Napi::Env env, Napi::Object exports, ConstructorRegistry *ctorReg);

    static NapiContainer NewInstance(Napi::Env env);

    static NapiContainer NewInstance(Napi::Env env, CppEntity const& cppInstance);

    ParticipantBuiltinTopicDataProxy(Napi::CallbackInfo const& info);

    virtual ~ParticipantBuiltinTopicDataProxy() = default;
};

} // end namespace DdsJs

#endif /* !_DDSJS_DDSJS_PARTICIPANTBUILTINTOPICDATA_HH_ */

// vim: set ts=4 sw=4 expandtab:
