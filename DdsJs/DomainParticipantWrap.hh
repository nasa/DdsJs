/**
 * \file DomainParticipantWrap.hh
 * \brief Contains the definition of the \c DomainParticipantWrap class.
 * \author Rolando J. Nieves
 * \date 2014-07-28 16:02:00
 */
#ifndef _DDS_JS_DOMAIN_PARTICIPANT_WRAP_HH_
#define _DDS_JS_DOMAIN_PARTICIPANT_WRAP_HH_

#include <map>

#include <napi.h>

#include <DdsJs/ConstructorRegistry.hh>
#include <DdsJs/CppBackingInstance.hh>
#include <DdsJs/dds_provider.hh>


namespace DdsJs {

struct TypeSupportAssociations;

class DomainParticipantWrap : public Napi::ObjectWrap< DomainParticipantWrap >
{
public:
    static const char *MODNAME;

    static const char *NAME;
    
    static Napi::Object Init(Napi::Env env, Napi::Object exports, ConstructorRegistry *ctorReg);
    
    static Napi::Object NewInstance(Napi::Env env, DDS::DomainParticipant* participant);

    DomainParticipantWrap(Napi::CallbackInfo const& info);

    virtual ~DomainParticipantWrap();

    void rememberTypeAssoc(std::string const& typeName, std::weak_ptr< TypeSupportAssociations > assoc);

    std::string readerJsClassNameFor(std::string const& typeName) const;

    inline DDS::DomainParticipant* useParticipant(Napi::Env env)
    { return m_participant.get(env, "useParticipant"); }
    
    std::string writerJsClassNameFor(std::string const& typeName) const;
    
private:
    using TypeSupportMap = std::map< std::string, std::weak_ptr< TypeSupportAssociations > >;

    CppBackingInstance< DDS::DomainParticipant > m_participant;
    TypeSupportMap m_registeredTypes;

    Napi::Value CreatePublisher(Napi::CallbackInfo const& info);
    Napi::Value CreateSubscriber(Napi::CallbackInfo const& info);
    Napi::Value CreateTopic(Napi::CallbackInfo const& info);
    Napi::Value DeleteContainedEntities(Napi::CallbackInfo const& info);
    Napi::Value Enable(Napi::CallbackInfo const& info);
    Napi::Value GetDefaultPublisherQos(Napi::CallbackInfo const& info);
    Napi::Value GetDefaultSubscriberQos(Napi::CallbackInfo const& info);
    Napi::Value GetDiscoveredParticipantData(Napi::CallbackInfo const& info);
    Napi::Value GetDiscoveredParticipants(Napi::CallbackInfo const& info);
    Napi::Value GetInstanceHandle(Napi::CallbackInfo const& info);
    Napi::Value IgnoreParticipant(Napi::CallbackInfo const& info);
};

} // end namespace DdsJs

#endif /* _DDS_JS_DOMAIN_PARTICIPANT_WRAP_HH_ */
