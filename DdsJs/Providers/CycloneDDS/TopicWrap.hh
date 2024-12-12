/**
 * \file CycloneDDS/TopicWrap.hh
 * \brief Contains the definition of the \c DdsJs::TopicWrap class for CycloneDDS.
 * \author Rolando J. Nieves
 * \date 2024-12-05 13:42:20
 */

#ifndef _DDSJS_DDSJS_PROVIDERS_CYCLONEDDS_TOPICWRAP_HH_
#define _DDSJS_DDSJS_PROVIDERS_CYCLONEDDS_TOPICWRAP_HH_

// --------------------------------------------------------------------------
// Standard C++ Library
#include <cstdint>
#include <memory>
#include <string>

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

// --------------------------------------------------------------------------
// DdsJs CycloneDDS-Specific
#include <DdsJs/Providers/CycloneDDS/TypeInformation.hh>


namespace DdsJs
{

class TopicWrap : public Napi::ObjectWrap< TopicWrap >
{
private:
    JsWrapperInstanceRef m_participantJsObj;
    dds_entity_t m_topic;
    std::string m_readerClassName;
    std::string m_writerClassName;

    Napi::Value GetName(Napi::CallbackInfo const& info);
    Napi::Value GetTypeName(Napi::CallbackInfo const& info);
    Napi::Value GetQos(Napi::CallbackInfo const& info);

public:
    static const char *MODNAME;

    static const char *NAME;

    static constexpr std::size_t TOPIC_NAME_MAX_LEN = 512u;

    static Napi::Object Init(Napi::Env env, Napi::Object exports, ConstructorRegistry *ctorReg);

    static Napi::Object NewInstance(Napi::Env env, dds_entity_t topic, std::string const& name, CycloneDDS::TypeInformation typeInfo);

    TopicWrap(Napi::CallbackInfo const& info);

    TopicWrap(TopicWrap const& other) = delete;
    
    TopicWrap(TopicWrap&& other) = delete;

    virtual ~TopicWrap() = default;

    inline dds_entity_t useTopic()
    { return m_topic; }

    inline std::string const& readerClassName() const
    { return m_readerClassName; }

    inline std::string const& writerClassName() const
    { return m_writerClassName; }

    TopicWrap& operator=(TopicWrap const& other) = delete;

    TopicWrap& operator=(TopicWrap&& other) = delete;
};

} // end namespace DdsJs

#endif /* !_DDSJS_DDSJS_PROVIDERS_CYCLONEDDS_TOPICWRAP_HH_ */

// vim: set ts=4 sw=4 expandtab:
