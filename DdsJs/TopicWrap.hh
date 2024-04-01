/**
 * \file TopicWrap.hh
 * \brief Contains the definition of the \c TopicWrap class.
 * \author Rolando J. Nieves <rolando.j.nieves@nasa.gov>
 * \date 2024-01-31 13:22:25
 */

#ifndef _DDSJS_DDSJS_TOPICWRAP_HH_
#define _DDSJS_DDSJS_TOPICWRAP_HH_

#include <napi.h>

#include <DdsJs/ConstructorRegistry.hh>
#include <DdsJs/CppBackingInstance.hh>
#include <DdsJs/JsWrapperInstanceRef.hh>

#include <DdsJs/dds_provider.hh>


namespace DdsJs {

class TopicWrap : public Napi::ObjectWrap< TopicWrap >
{
private:
    JsWrapperInstanceRef m_participantJsObj;
    CppBackingInstance< DDS::Topic > m_topic;

    Napi::Value Enable(Napi::CallbackInfo const& info);

    Napi::Value GetInconsistentTopicStatus(Napi::CallbackInfo const& info);

    Napi::Value GetName(Napi::CallbackInfo const& info);

    Napi::Value GetParticipant(Napi::CallbackInfo const& info);

    Napi::Value GetQos(Napi::CallbackInfo const& info);

    Napi::Value GetStatusChanges(Napi::CallbackInfo const& info);

    Napi::Value GetTypeName(Napi::CallbackInfo const& info);

    Napi::Value SetQos(Napi::CallbackInfo const& info);

public:
    static const char *MODNAME;
    
    static const char *NAME;

    static Napi::Object Init(Napi::Env env, Napi::Object exports, ConstructorRegistry *ctorReg);

    static Napi::Object NewInstance(Napi::Env env, DDS::Topic *topic, Napi::Object participantJsObj);

    TopicWrap(Napi::CallbackInfo const& info);

    virtual ~TopicWrap() = default;

    std::string getReaderJsClassName() const;

    std::string getWriterJsClassName() const;

    inline DDS::Topic *useTopic(Napi::Env env, std::string const& methodName)
    { return m_topic.get(env, methodName); }
};

} // end namespace DdsJs

#endif /* !_DDSJS_DDSJS_TOPICWRAP_HH_ */

// vim: set ts=4 sw=4 expandtab:
