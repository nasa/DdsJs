/**
 * \file PublisherWrap.cpp
 * \brief Contains the definition of the \c PublisherWrap class.
 * \author Rolando J. Nieves <rolando.j.nieves@nasa.gov>
 * \date 2024-02-02 13:46:56
 */

#ifndef _DDSJS_DDSJS_PUBLISHERWRAP_HH_
#define _DDSJS_DDSJS_PUBLISHERWRAP_HH_

#include <napi.h>

#include <DdsJs/ConstructorRegistry.hh>
#include <DdsJs/CppBackingInstance.hh>
#include <DdsJs/JsWrapperInstanceRef.hh>

#include <DdsJs/dds_provider.hh>


namespace DdsJs {

/**
 * \brief Wrap the \c DDS::Publisher class for Node.js
 *
 * The \c PublisherWrap class is used to create a JavaScript object
 * prototype and host the appropriate behavior of object instances that
 * eventually utilize the \c DDS::Publisher class provided by
 * CoreDX.
 */
class PublisherWrap : public Napi::ObjectWrap< PublisherWrap >
{
private:
    JsWrapperInstanceRef m_participantJsObj;
    CppBackingInstance< DDS::Publisher > m_publisher;

    /**
     * \brief Wrap the call to \c DDS::Publisher::begin_coherent_changes()
     *
     * \param info {input} NodeJS call context. Should not have any JS
     *        arguments for this call.
     *
     * \return \c Napi::Value value to return to JS caller; \c undefined in
     *         this method's case (equivalent to \c void return type)
     */
    Napi::Value BeginCoherentChanges(Napi::CallbackInfo const& info);

    Napi::Value CopyFromTopicQos(Napi::CallbackInfo const& info);

    Napi::Value CreateDataWriter(Napi::CallbackInfo const& info);

    Napi::Value DeleteContainedEntities(Napi::CallbackInfo const& info);

    Napi::Value DeleteDataWriter(Napi::CallbackInfo const& info);

    Napi::Value Enable(Napi::CallbackInfo const& info);

    Napi::Value EndCoherentChanges(Napi::CallbackInfo const& info);

    Napi::Value GetDefaultDataWriterQos(Napi::CallbackInfo const& info);

    Napi::Value GetInstanceHandle(Napi::CallbackInfo const& info);

    Napi::Value GetParticipant(Napi::CallbackInfo const& info);

    Napi::Value GetQos(Napi::CallbackInfo const& info);

    Napi::Value GetStatusChanges(Napi::CallbackInfo const& info);

    Napi::Value LookupDataWriter(Napi::CallbackInfo const& info);

    Napi::Value ResumePublications(Napi::CallbackInfo const& info);

    Napi::Value SetDefaultDataWriterQos(Napi::CallbackInfo const& info);

    Napi::Value SetQos(Napi::CallbackInfo const& info);

    Napi::Value SuspendPublications(Napi::CallbackInfo const& info);

public:
    static const char *MODNAME;

    static const char *NAME;

    static Napi::Object Init(Napi::Env env, Napi::Object exports, ConstructorRegistry *ctorReg);

    static Napi::Object NewInstance(Napi::Env env, DDS::Publisher *publisher, Napi::Object participantJsObj);

    PublisherWrap(Napi::CallbackInfo const& info);

    virtual ~PublisherWrap() = default;
};

} // end namespace DdsJs

#endif /* !_DDSJS_DDSJS_PUBLISHERWRAP_HH_ */

// vim: set ts=4 sw=4 expandtab:
