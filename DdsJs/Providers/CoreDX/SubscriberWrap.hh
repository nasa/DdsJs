/**
 * \file SubscriberWrap.hh
 * \brief Contains the definition for the \c SubscriberWrap class.
 * \author Rolando J. Nieves <rolando.j.nieves@nasa.gov>
 * \date 2024-02-02 17:01:55
 */

#ifndef _DDSJS_DDSJS_SUBSCRIBERWRAP_HH_
#define _DDSJS_DDSJS_SUBSCRIBERWRAP_HH_

#include <napi.h>

#include <DdsJs/ConstructorRegistry.hh>
#include <DdsJs/CppBackingInstance.hh>
#include <DdsJs/JsWrapperInstanceRef.hh>

#include <DdsJs/Providers/CoreDX/CoreDX.hh>


namespace DdsJs {

/**
 * \brief Wrap the \c DDS::Subscriber class for Node.js
 *
 * The \c SubscriberWrap class is used to create a JavaScript object
 * prototype and host the appropriate behavior of object instances that
 * eventually utilize the \c DDS::Subscriber class provided by
 * CoreDX.
 */
class SubscriberWrap : public Napi::ObjectWrap< SubscriberWrap >
{
private:
    JsWrapperInstanceRef m_participantJsObj;
    CppBackingInstance< DDS::Subscriber > m_subscriber;

    Napi::Value CopyFromTopicQos(Napi::CallbackInfo const& info);

    Napi::Value CreateDataReader(Napi::CallbackInfo const& info);

    Napi::Value DeleteContainedEntities(Napi::CallbackInfo const& info);

    Napi::Value DeleteDataReader(Napi::CallbackInfo const& info);

    Napi::Value Enable(Napi::CallbackInfo const& info);

    Napi::Value GetDefaultDataReaderQos(Napi::CallbackInfo const& info);

    Napi::Value GetInstanceHandle(Napi::CallbackInfo const& info);

    Napi::Value GetParticipant(Napi::CallbackInfo const& info);

    Napi::Value GetQos(Napi::CallbackInfo const& info);

    Napi::Value GetStatusChanges(Napi::CallbackInfo const& info);

    Napi::Value LookupDataReader(Napi::CallbackInfo const& info);

    Napi::Value SetDefaultDataReaderQos(Napi::CallbackInfo const& info);

    Napi::Value SetQos(Napi::CallbackInfo const& info);

public:
    static const char *MODNAME;
    
    static const char *NAME;

    static Napi::Object Init(Napi::Env env, Napi::Object exports, ConstructorRegistry *ctorReg);

    static Napi::Object NewInstance(Napi::Env env, DDS::Subscriber *subscriber, Napi::Object participantJsObj);

    SubscriberWrap(Napi::CallbackInfo const& info);

    virtual ~SubscriberWrap() = default;
};

} // end namespace DdsJs

#endif /* !_DDSJS_DDSJS_SUBSCRIBERWRAP_HH_ */

// vim: set ts=4 sw=4 expandtab:
