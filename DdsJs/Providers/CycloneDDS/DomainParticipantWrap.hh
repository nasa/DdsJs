/**
 * \file CycloneDDS/DomainParticipantWrap.hh
 * \brief Contains the definition of the \c DdsJs::DomainParticipantWrap class.
 * \author Rolando J. Nieves
 * \date 2024-10-02 11:58:04
 */

#ifndef _DDSJS_DDSJS_PROVIDERS_CYCLONEDDS_DOMAINPARTICIPANTWRAP_HH_
#define _DDSJS_DDSJS_PROVIDERS_CYCLONEDDS_DOMAINPARTICIPANTWRAP_HH_

// --------------------------------------------------------------------------
// Standard C++ Library
#include <map>
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

// --------------------------------------------------------------------------
// DdsJs CycloneDDS-Specific
#include <DdsJs/Providers/CycloneDDS/TypeInformation.hh>


namespace DdsJs
{

class DomainParticipantWrap : public Napi::ObjectWrap< DomainParticipantWrap >
{
private:
    using TopicTypeInfoMap = std::map< std::string, CycloneDDS::TypeInformation >;

    TopicTypeInfoMap m_topicTypeInfo;

public:
    static const char *MODNAME;

    static const char *NAME;

    static Napi::Object Init(Napi::Env env, Napi::Object exports, ConstructorRegistry *ctorReg);

    static Napi::Object NewInstance(Napi::Env env, dds_entity_t participant);

    DomainParticipantWrap(Napi::CallbackInfo const& info);

    virtual ~DomainParticipantWrap();

    inline dds_entity_t useParticipant()
    { return m_participant; }

    void registerTopicTypeInfo(CycloneDDS::TypeInformation typeInfo, std::string localAlias = "");

private:
    dds_entity_t m_participant;

    Napi::Value CreatePublisher(Napi::CallbackInfo const& info);
    Napi::Value CreateTopic(Napi::CallbackInfo const& info);
    Napi::Value GetInstanceHandle(Napi::CallbackInfo const& info);
    Napi::Value GetQos(Napi::CallbackInfo const& info);
};

} // end namespace DdsJs

#endif /* !_DDSJS_DDSJS_PROVIDERS_CYCLONEDDS_DOMAINPARTICIPANTWRAP_HH_ */

// vim: set ts=4 sw=4 expandtab:
