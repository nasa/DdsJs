/**
 * \file CycloneDDS/PublisherWrap.hh
 * \brief Contains the definition of the \c DdsJs::PublisherWrap class.
 * \author Rolando J. Nieves
 * \date 2024-10-02 16:59:53
 */

#ifndef _DDSJS_DDSJS_PROVIDERS_CYCLONEDDS_PUBLISHERWRAP_HH_
#define _DDSJS_DDSJS_PROVIDERS_CYCLONEDDS_PUBLISHERWRAP_HH_

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

class PublisherWrap : public Napi::ObjectWrap< PublisherWrap >
{
private:
    JsWrapperInstanceRef m_participantJsObj;
    dds_entity_t m_publisher;

public:
    static const char *MODNAME;

    static const char *NAME;

    static Napi::Object Init(Napi::Env env, Napi::Object exports, ConstructorRegistry *ctorReg);

    static Napi::Object NewInstance(Napi::Env env, dds_entity_t publisher, Napi::Object participantJsObj);

    PublisherWrap(Napi::CallbackInfo const& info);

    virtual ~PublisherWrap();
};

} // end namespace DdsJs

#endif /* !_DDSJS_DDSJS_PROVIDERS_CYCLONEDDS_PUBLISHERWRAP_HH_ */

// vim: set ts=4 sw=4 expandtab:
