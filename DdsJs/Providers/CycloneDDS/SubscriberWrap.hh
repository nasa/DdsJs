/**
 * \file CycloneDDS/SubscriberWrap.hh
 * \brief Contains the definition of the \c DdsJs::SubscriberWrap class for CycloneDDS.
 * \author Rolando J. Nieves
 * \date 2024-12-06 13:30:15
 */

#ifndef _DDSJS_DDSJS_PROVIDERS_CYCLONEDDS_SUBSCRIBERWRAP_HH_
#define _DDSJS_DDSJS_PROVIDERS_CYCLONEDDS_SUBSCRIBERWRAP_HH_

// --------------------------------------------------------------------------
// CycloneDDS C API
#include <dds/dds.h>

// --------------------------------------------------------------------------
// NodeJS Add-on API
#include <napi.h>

// --------------------------------------------------------------------------
// DdsJs Generic
#include <DdsJs/ConstructorRegistry.hh>
#include <DdsJs/JsWrapperInstanceRef.hh>


namespace DdsJs
{

class SubscriberWrap : public Napi::ObjectWrap< SubscriberWrap >
{
private:
    JsWrapperInstanceRef m_participantJsObj;
    dds_entity_t m_subscriber;

    Napi::Value CreateDataReader(Napi::CallbackInfo const& info);

    Napi::Value GetParticipant(Napi::CallbackInfo const& info);

    Napi::Value GetQos(Napi::CallbackInfo const& info);

public:
    static const char *MODNAME;

    static const char *NAME;

    static Napi::Object Init(Napi::Env env, Napi::Object exports, ConstructorRegistry *ctorReg);

    static Napi::Object NewInstance(Napi::Env env, dds_entity_t subscriber, Napi::Object participantJsObj);

    SubscriberWrap(Napi::CallbackInfo const& info);

    virtual ~SubscriberWrap();
};

} // end namespace DdsJs

#endif /* !_DDSJS_DDSJS_PROVIDERS_CYCLONEDDS_SUBSCRIBERWRAP_HH_ */

// vim: set ts=4 sw=4 expandtab:
