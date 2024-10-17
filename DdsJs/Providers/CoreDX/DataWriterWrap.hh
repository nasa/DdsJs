/**
 * \file CoreDX/DataWriterWrap.hh
 * \brief Contains the definition of the \c DataWriterWrapBaseT template class.
 * \date 2014-10-15
 * \author Rolando J. Nieves
 */

#ifndef _DDSJS_DDSJS_PROVIDERS_COREDX_DATAWRITERWRAP_HH_
#define _DDSJS_DDSJS_PROVIDERS_COREDX_DATAWRITERWRAP_HH_

// --------------------------------------------------------------------------
// Standard C++ Library
#include <sstream>
#include <string>

// --------------------------------------------------------------------------
// NodeJS Add-on API
#include <napi.h>

// --------------------------------------------------------------------------
// CoreDX API Headers
#include <dds/dds.hh>
#include <dds/dds_builtin.hh>
#include <dds/dds_typesupport.hh>

// --------------------------------------------------------------------------
// DdsJs Generic
#include <DdsJs/CppBackingInstance.hh>
#include <DdsJs/DottedName.hh>
#include <DdsJs/Sequences.hh>

// --------------------------------------------------------------------------
// DdsJs CoreDX-Specific
#include <DdsJs/Providers/CoreDX/InstanceHandle.hh>
#include <DdsJs/Providers/CoreDX/SequenceUtilities.hh>
#include <DdsJs/Providers/CoreDX/StatusMask.hh>
#include <DdsJs/Providers/CoreDX/SubscriptionBuiltinTopicData.hh>
#include <DdsJs/Providers/CoreDX/dds_error_util.hh>


namespace DdsJs
{

class DataWriterWrapFactory
{
public:
    static Napi::Object NewInstance(Napi::Env env, DDS::DataWriter *reader, std::string const& readerJsClassName);
};

template< typename WriterType, typename SampleProxy >
class DataWriterWrapBaseT : public DataWriterWrapFactory
{
protected:
    /**
     * Reference to the actual C++ \c DDS::DataWriter derived instance.
     */
    CppBackingInstance< WriterType > m_writer;

    /**
     * \brief Wrap the \c DDS::DataWriter::get_matched_subscription_data() C++ call
     *
     * The \c GetMatchedSubscriptionData() class method is called whenever a Node.js 
     * JavaScript script calls the \c getMatchedSubscriptionData() method in an object
     * instance of this class wrapper.
     *
     * \param info {in} Contains the JavaScript call context.
     */
    Napi::Value GetMatchedSubscriptionData(Napi::CallbackInfo const& info);

    /**
     * \brief Wrap the \c DDS::DataWriter::get_matched_subscriptions() C++ call
     *
     * The \c GetMatchedSubscriptions() class method is called whenever a Node.js 
     * JavaScript script calls the \c getMatchedSubscriptions() method in an object
     * instance of this class wrapper.
     *
     * \param info {in} Contains the JavaScript call context.
     */
    Napi::Value GetMatchedSubscriptions(Napi::CallbackInfo const& info);

    /**
     * \brief Wrap the \c DDS::DataWriter::get_status_changes() C++ call
     *
     * The \c GetStatusChanges() class method is called whenever a Node.js 
     * JavaScript script calls the \c getStatusChanges() method in an object
     * instance of this class wrapper.
     *
     * \param info {in} Contains the JavaScript call context.
     */
    Napi::Value GetStatusChanges(Napi::CallbackInfo const& info);

    /**
     * \brief Wrap the \c DDS::DataWriter::write() C++ call
     *
     * The \c Write() class method is called whenever a Node.js 
     * JavaScript script calls the \c write() method in an object
     * instance created by this class' \c New() class method.
     *
     * \param info {in} Contains the JavaScript call context.
     */
    Napi::Value Write(Napi::CallbackInfo const& info);

public:
    DataWriterWrapBaseT(std::string const& className);

    virtual ~DataWriterWrapBaseT() = default;

    virtual const char* modname() const = 0;

    virtual const char* name() const = 0;
};


template< typename WriterType, typename SampleProxy >
Napi::Value
DataWriterWrapBaseT< WriterType, SampleProxy >::GetMatchedSubscriptionData(Napi::CallbackInfo const& info)
{
    static constexpr size_t VALID_ARG_COUNT = 1u;
    static const char *METHOD_NAME = "getMatchedSubscriptionData";
    DDS::SubscriptionBuiltinTopicData sub_info;

    if (info.Length() != VALID_ARG_COUNT)
    {
        std::stringstream msg;

        msg << modname() << "." << name() << "." << METHOD_NAME << "(): Invalid number of arguments provided. Expected (" << VALID_ARG_COUNT << ")";

        throw Napi::Error::New(info.Env(), msg.str());
    }

    typename InstanceHandleProxy::CppEntity sub_handle;
    InstanceHandleProxy::FromJs(info.Env(), info[0].As< InstanceHandleProxy::NapiContainer >(), sub_handle);
    DDS::ReturnCode_t result = m_writer.get(info.Env(), METHOD_NAME)->get_matched_subscription_data(&sub_info, sub_handle);
    if (DDS::RETCODE_OK != result)
    {
        throw NewDdsError(info.Env(), DottedName({ modname(), name() }).flat(), METHOD_NAME, result);
    }

    return SubscriptionBuiltinTopicDataProxy::NewInstance(info.Env(), sub_info);
}


template< typename WriterType, typename SampleProxy >
Napi::Value
DataWriterWrapBaseT< WriterType, SampleProxy >::GetMatchedSubscriptions(Napi::CallbackInfo const& info)
{
    static const char *METHOD_NAME = "getMatchedSubscriptions";
    DDS::InstanceHandleSeq matched_subs;

    DDS::ReturnCode_t result = m_writer.get(info.Env(), METHOD_NAME)->get_matched_subscriptions(&matched_subs);
    if ((DDS::RETCODE_OK != result) && (DDS::RETCODE_NO_DATA != result))
    {
        throw NewDdsError(info.Env(), DottedName({ modname(), name() }).flat(), METHOD_NAME, result);
    }

    return UnboundedSequence< InstanceHandleProxy, DDS::InstanceHandleSeq, CoreDX::SequenceUtilities >::NewInstance(info.Env(), matched_subs);
}


template< typename WriterType, typename SampleProxy >
Napi::Value
DataWriterWrapBaseT< WriterType, SampleProxy >::GetStatusChanges(Napi::CallbackInfo const& info)
{
    static const char *METHOD_NAME = "getStatusChanges";
    DDS::StatusMask stat_changes_mask;

    stat_changes_mask = m_writer.get(info.Env(), METHOD_NAME)->get_status_changes();

    return StatusMaskProxy::NewInstance(info.Env(), stat_changes_mask);
}


template< typename WriterType, typename SampleProxy >
Napi::Value
DataWriterWrapBaseT< WriterType, SampleProxy >::Write(Napi::CallbackInfo const& info)
{
    static const char *METHOD_NAME = "write";
    DDS::InstanceHandle_t instance_handle = DDS::HANDLE_NIL;
    typename SampleProxy::CppEntity instance_data;

    switch(info.Length())
    {
    case 2:
        InstanceHandleProxy::FromJs(info.Env(), info[1].As< InstanceHandleProxy::NapiContainer >(), instance_handle);
        // Fall-through intentional
    case 1:
        SampleProxy::FromJs(info.Env(), info[0].As< typename SampleProxy::NapiContainer >(), instance_data);
        break;
    default:
        {
            std::stringstream msg;

            msg << modname() << "." << name() << ".write(): Incorrect number of arguments provided.";
            throw Napi::Error::New(info.Env(), msg.str());
        }
    }

    DDS::ReturnCode_t retcode = m_writer.get(info.Env(), METHOD_NAME)->write(&instance_data, instance_handle);
    if (DDS::RETCODE_OK != retcode)
    {
        throw NewDdsError(info.Env(), DottedName({ modname(), name() }).flat(), METHOD_NAME, retcode);
    }

    return info.Env().Undefined();
}


template< typename WriterType, typename SampleProxy >
DataWriterWrapBaseT< WriterType, SampleProxy >::DataWriterWrapBaseT(std::string const& className):
    m_writer(className)
{}

} // end namespace DdsJs

#endif /* !_DDSJS_DDSJS_PROVIDERS_COREDX_DATAWRITERWRAP_HH_ */

// vim: set ts=4 sw=4 expandtab:
