/**
 * \file CoreDX/DataReaderWrap.hh
 * \brief Contains the definition of the \c DataReaderWrapBaseT template class.
 * \author Rolando J. Nieves
 * \date 2024-03-11 09:49:27
 */

#ifndef _DDSJS_DDSJS_PROVIDERS_COREDX_DATAREADERWRAP_HH_
#define _DDSJS_DDSJS_PROVIDERS_COREDX_DATAREADERWRAP_HH_

// --------------------------------------------------------------------------
// Standard C++ Library
#include <cstdlib>
#include <memory>
#include <sstream>

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
#include <DdsJs/ConstructorRegistry.hh>
#include <DdsJs/CppBackingInstance.hh>
#include <DdsJs/ReaderTakeResult.hh>
// #include <DdsJs/Sequences.hh>

// --------------------------------------------------------------------------
// DdsJs CoreDX-Specific
#include <DdsJs/Providers/CoreDX/Arrays.hh>
#include <DdsJs/Providers/CoreDX/DataReaderQos.hh>
#include <DdsJs/Providers/CoreDX/LivelinessChangedStatus.hh>
#include <DdsJs/Providers/CoreDX/PublicationBuiltinTopicData.hh>
#include <DdsJs/Providers/CoreDX/ReaderTakeOperation.hh>
#include <DdsJs/Providers/CoreDX/RequestedIncompatibleQosStatus.hh>
#include <DdsJs/Providers/CoreDX/SampleInfo.hh>
#include <DdsJs/Providers/CoreDX/SampleLostStatus.hh>
#include <DdsJs/Providers/CoreDX/SampleRejectedStatus.hh>
// #include <DdsJs/Providers/CoreDX/SequenceUtilities.hh>
#include <DdsJs/Providers/CoreDX/Sequence.hh>
#include <DdsJs/Providers/CoreDX/StatusMask.hh>
#include <DdsJs/Providers/CoreDX/SubscriptionMatchedStatus.hh>
#include <DdsJs/Providers/CoreDX/dds_error_util.hh>

namespace DdsJs
{

class DataReaderWrapFactory
{
public:
    static Napi::Object NewInstance(Napi::Env env, DDS::DataReader *reader, std::string const& readerJsClassName);
};

/**
 * \brief Template class for generated \c DDS::DataReader wrappers.
 *
 * The \c DataReaderWrap template class is used to instantiate the required
 * wrapper classes for \c DDS::DataReader-derived classes emitted by the 
 * DDS IDL-to-C++ compiler.
 *
 * The template class accepts as a template argument a class or data structure
 * that provides the necessary C++ type information needed to adapt the
 * template class to a particular DDS topic defined via IDL.
 */
template< typename ReaderType, typename SampleProxy >
class DataReaderWrapBaseT : public DataReaderWrapFactory
{
public:
    using ReaderBackingInstance = CppBackingInstance< ReaderType >;

protected:
    /**
     * take() operation logic type alias.
     */
    using TakeOperation = CoreDX::ReaderTakeOperation< ReaderType, typename SampleProxy::CppEntity >;

    /**
     * Reference to the actual C++ \c DDS::DataReader derived instance.
     */
    ReaderBackingInstance m_reader;

    /**
     * \brief Wrap the \c DDS::DataReader::get_liveliness_changed_status() C++ call
     *
     * The \c GetLivelinessChangedStatus() class method is called whenever a Node.js 
     * JavaScript script calls the \c getLivelinessChangedStatus() method in an object
     * instance of this class wrapper.
     *
     * \param info {in} Contains the JavaScript call context.
     *
     * \return \c DDS::LivelinessChangedStatus value encoded as a JavaScript
     *         object.
     */
    Napi::Value GetLivelinessChangedStatus(Napi::CallbackInfo const& info);

    /**
     * \brief Wrap the \c DDS::DataReader::get_matched_publication_data() C++ call
     *
     * The \c GetMatchedPublicationData() class method is called whenever a Node.js 
     * JavaScript script calls the \c getMatchedPublicationData() method in an object
     * instance of this class wrapper.
     *
     * \param info {in} Contains the JavaScript call context.
     *
     * \return \c DDS::PublicationBuiltinTopicData value encoded as a JavaScript
     *         object
     */
    Napi::Value GetMatchedPublicationData(Napi::CallbackInfo const& info);

    /**
     * \brief Wrap the \c DDS::DataReader::get_matched_publications() C++ call
     *
     * The \c GetMatchedPublications() class method is called whenever a Node.js 
     * JavaScript script calls the \c getMatchedPublications() method in an object
     * instance of this class wrapper.
     *
     * \param info {in} Contains the JavaScript call context.
     *
     * \return Sequence of \c InstanceHandle values encoded as a JavaScript
     *         array. Each \c InstanceHandle value represents a known writer
     *         at the time of the call.
     *
     * \see \c GetMatchedPublicationData()
     */
    Napi::Value GetMatchedPublications(Napi::CallbackInfo const& info);

    /**
     * \brief Wrap the \c DDS::DataReader::get_requested_incompatible_qos_status() C++ call
     *
     * The \c GetRequestedIncompatibleQosStatus() class method is called whenever a Node.js 
     * JavaScript script calls the \c getRequestedIncompatibleQosStatus() method in an object
     * instance of this class wrapper.
     *
     * \param info {in} Contains the JavaScript call context.
     */
    Napi::Value GetRequestedIncompatibleQosStatus(Napi::CallbackInfo const& info);

    /**
     * \brief Wrap the \c DDS::DataReader::get_sample_lost_status() C++ call
     *
     * The \c GetSampleLostStatus() class method is called whenever a Node.js 
     * JavaScript script calls the \c getSampleLostStatus() method in an object
     * instance of this class wrapper.
     *
     * \param info {in} Contains the JavaScript call context.
     */
    Napi::Value GetSampleLostStatus(Napi::CallbackInfo const& info);

    /**
     * \brief Wrap the \c DDS::DataReader::get_sample_rejected_status() C++ call
     *
     * The \c GetSampleRejectedStatus() class method is called whenever a Node.js 
     * JavaScript script calls the \c getSampleRejectedStatus() method in an object
     * instance of this class wrapper.
     *
     * \param info {in} Contains the JavaScript call context.
     */
    Napi::Value GetSampleRejectedStatus(Napi::CallbackInfo const& info);

    /**
     * \brief Wrap the \c DDS::DataReader::get_status_changes() C++ call
     *
     * The \c GetStatusChanges() class method is called whenever a Node.js 
     * JavaScript script calls the \c getStatusChanges() method in an object
     * instance of this class wrapper.
     *
     * \param info {in} Contains the JavaScript call context.
     */
    Napi::Value GetStatusChanges(Napi::CallbackInfo const& info);

    /**
     * \brief Wrap the \c DDS::DataReader::get_subscription_matched_status() C++ call
     *
     * The \c GetStatusChanges() class method is called whenever a Node.js 
     * JavaScript script calls the \c getStatusChanges() method in an object
     * instance of this class wrapper.
     *
     * \param info {in} Contains the JavaScript call context.
     */
    Napi::Value GetSubscriptionMatchedStatus(Napi::CallbackInfo const& info);

    /**
     * \brief Wrap the \c DDS::DataReader::get_qos() C++ call
     *
     * The \c GetQos() class method is called whenever Node.js JavaScript code
     * calls the \c getQos() method in an object instance of this class wrapper.
     *
     * \param info {in} Contains the JavaScript call context.
     */
    Napi::Value GetQos(Napi::CallbackInfo const& info);

    /**
     * \brief Wrap the \c DDS::DataReader::take() C++ call
     *
     * The \c Take() class method is called whenever a Node.js 
     * JavaScript script calls the \c take() method in an object
     * instance created by this class' \c New() class method.
     *
     * The `take()` is done synchronously, taking any samples already available.
     * Should no samples be available, the method simply returns empty
     * collections.
     *
     * \param info {in} Contains the JavaScript call context.
     */
    Napi::Value Take(Napi::CallbackInfo const& info);

public:
    DataReaderWrapBaseT(std::string const& className);

    virtual ~DataReaderWrapBaseT() = default;

    virtual const char* modname() const = 0;

    virtual const char* name() const = 0;
};


template< typename ReaderType, typename SampleProxy >
Napi::Value
DataReaderWrapBaseT< ReaderType, SampleProxy >::GetLivelinessChangedStatus(Napi::CallbackInfo const& info)
{
    static const char *METHOD_NAME = "getLivelinessChangedStatus";
    typename LivelinessChangedStatusProxy::CppEntity status;

    DDS::ReturnCode_t result = m_reader.get(info.Env(), METHOD_NAME)->get_liveliness_changed_status(&status);
    if (DDS::RETCODE_OK != result)
    {
        throw NewDdsError(info.Env(), DottedName({ modname(), name() }).flat(), METHOD_NAME, result);
    }

    return LivelinessChangedStatusProxy::NewInstance(info.Env(), status);
}


template< typename ReaderType, typename SampleProxy >
Napi::Value
DataReaderWrapBaseT< ReaderType, SampleProxy >::GetMatchedPublicationData(Napi::CallbackInfo const& info)
{
    static constexpr size_t VALID_ARG_COUNT = 1u;
    static const char *METHOD_NAME = "getMatchedPublicationData";
    DDS::PublicationBuiltinTopicData pub_info;

    if (info.Length() != VALID_ARG_COUNT)
    {
        std::stringstream msg;

        msg << modname() << "." << name() << "." << METHOD_NAME << "(): Invalid number of arguments provided. Expected (" << VALID_ARG_COUNT << ")";

        throw Napi::Error::New(info.Env(), msg.str());
    }

    typename InstanceHandleProxy::CppEntity pub_handle;
    InstanceHandleProxy::FromJs(info.Env(), info[0].As< InstanceHandleProxy::NapiContainer >(), pub_handle);
    DDS::ReturnCode_t result = m_reader.get(info.Env(), METHOD_NAME)->get_matched_publication_data(&pub_info, pub_handle);
    if (DDS::RETCODE_OK != result)
    {
        throw NewDdsError(info.Env(), DottedName({ modname(), name() }).flat(), METHOD_NAME, result);
    }

    return PublicationBuiltinTopicDataProxy::NewInstance(info.Env(), pub_info);
}


template< typename ReaderType, typename SampleProxy >
Napi::Value
DataReaderWrapBaseT< ReaderType, SampleProxy >::GetMatchedPublications(Napi::CallbackInfo const& info)
{
    static const char *METHOD_NAME = "getMatchedPublications";
    DDS::InstanceHandleSeq matched_pubs;

    DDS::ReturnCode_t result = m_reader.get(info.Env(), METHOD_NAME)->get_matched_publications(&matched_pubs);
    if ((DDS::RETCODE_OK != result) && (DDS::RETCODE_NO_DATA != result))
    {
        throw NewDdsError(info.Env(), DottedName({ modname(), name() }).flat(), METHOD_NAME, result);
    }

    return CoreDX::SequenceProxy<
        InstanceHandleProxy,
        CoreDX::CppUnboundedSequencePolicy< DDS::InstanceHandleSeq >,
        CoreDX::CppDirectContainmentPolicy< typename InstanceHandleProxy::CppEntity >
    >::NewInstance(info.Env(), matched_pubs);
}


template< typename ReaderType, typename SampleProxy >
Napi::Value
DataReaderWrapBaseT< ReaderType, SampleProxy >::GetRequestedIncompatibleQosStatus(Napi::CallbackInfo const& info)
{
    static const char *METHOD_NAME = "getRequestedIncompatibleQosStatus";
    DDS::RequestedIncompatibleQosStatus riq_stat;

    DDS::ReturnCode_t result = m_reader.get(info.Env(), METHOD_NAME)->get_requested_incompatible_qos_status(&riq_stat);
    if (DDS::RETCODE_OK != result)
    {
        throw NewDdsError(info.Env(), DottedName({ modname(), name() }).flat(), METHOD_NAME, result);
    }

    return RequestedIncompatibleQosStatusProxy::NewInstance(info.Env(), riq_stat);
}


template< typename ReaderType, typename SampleProxy >
Napi::Value
DataReaderWrapBaseT< ReaderType, SampleProxy >::GetSampleLostStatus(Napi::CallbackInfo const& info)
{
    static const char *METHOD_NAME = "getSampleLostStatus";
    DDS::SampleLostStatus sl_stat;

    DDS::ReturnCode_t result = m_reader.get(info.Env(), METHOD_NAME)->get_sample_lost_status(&sl_stat);
    if (DDS::RETCODE_OK != result)
    {
        throw NewDdsError(info.Env(), DottedName({ modname(), name() }).flat(), METHOD_NAME, result);
    }

    return SampleLostStatusProxy::NewInstance(info.Env(), sl_stat);
}


template< typename ReaderType, typename SampleProxy >
Napi::Value
DataReaderWrapBaseT< ReaderType, SampleProxy >::GetSampleRejectedStatus(Napi::CallbackInfo const& info)
{
    static const char *METHOD_NAME = "getSampleRejectedStatus";
    DDS::SampleRejectedStatus sl_stat;

    DDS::ReturnCode_t result = m_reader.get(info.Env(), METHOD_NAME)->get_sample_rejected_status(&sl_stat);
    if (DDS::RETCODE_OK != result)
    {
        throw NewDdsError(info.Env(), DottedName({ modname(), name() }).flat(), METHOD_NAME, result);
    }

    return SampleRejectedStatusProxy::NewInstance(info.Env(), sl_stat);
}


template< typename ReaderType, typename SampleProxy >
Napi::Value
DataReaderWrapBaseT< ReaderType, SampleProxy >::GetStatusChanges(Napi::CallbackInfo const& info)
{
    static const char *METHOD_NAME = "getStatusChanges";
    DDS::StatusMask stat_changes_mask;

    stat_changes_mask = m_reader.get(info.Env(), METHOD_NAME)->get_status_changes();

    return StatusMaskProxy::NewInstance(info.Env(), stat_changes_mask);
}


template< typename ReaderType, typename SampleProxy >
Napi::Value
DataReaderWrapBaseT< ReaderType, SampleProxy >::GetSubscriptionMatchedStatus(Napi::CallbackInfo const& info)
{
    static const char *METHOD_NAME = "getSubscriptionMatchedStatus";
    DDS::SubscriptionMatchedStatus sm_stat;

    DDS::ReturnCode_t result = m_reader.get(info.Env(), METHOD_NAME)->get_subscription_matched_status(&sm_stat);
    if (DDS::RETCODE_OK != result)
    {
        throw NewDdsError(info.Env(), DottedName({ modname(), name() }).flat(), METHOD_NAME, result);
    }

    return SubscriptionMatchedStatusProxy::NewInstance(info.Env(), sm_stat);
}


template< typename ReaderType, typename SampleProxy >
Napi::Value
DataReaderWrapBaseT< ReaderType, SampleProxy >::GetQos(Napi::CallbackInfo const& info)
{
    static const char *METHOD_NAME = "getQos";
    DDS::DataReaderQos dr_qos;

    DDS::ReturnCode_t result = m_reader.get(info.Env(), METHOD_NAME)->get_qos(dr_qos);
    if (DDS::RETCODE_OK != result)
    {
        throw NewDdsError(info.Env(), DottedName({ modname(), name() }).flat(), METHOD_NAME, result);
    }

    return DataReaderQosProxy::NewInstance(info.Env(), dr_qos);
}


template< typename ReaderType, typename SampleProxy >
Napi::Value
DataReaderWrapBaseT< ReaderType, SampleProxy >::Take(Napi::CallbackInfo const& info)
{
    static const char *METHOD_NAME = "take";
    int max_samples = -1;

    if (info.Length() < 1)
    {
        std::stringstream msg;

        msg << modname() << "." << name() << METHOD_NAME << "(): Invalid number of arguments provided.";
        throw Napi::Error::New(info.Env(), msg.str());
    }
    LongPrimitive::FromJs(info.Env(), info[0].As< LongPrimitive::NapiContainer >(), max_samples);
    ReaderType *the_reader = m_reader.get(info.Env(), METHOD_NAME);
    std::unique_ptr< TakeOperation > take_op_ptr(
        new TakeOperation(
            the_reader,
            max_samples,
            DDS::ANY_SAMPLE_STATE,
            DDS::ANY_VIEW_STATE,
            DDS::ANY_INSTANCE_STATE
        )
    );
    DDS::ReturnCode_t take_result = take_op_ptr->execute();
    if ((DDS::RETCODE_OK != take_result) && (DDS::RETCODE_NO_DATA != take_result))
    {
        throw NewDdsError(info.Env(), DottedName({ modname(), name() }).flat(), METHOD_NAME, take_result);
    }
    
    ReaderTakeResult< SampleProxy, SampleInfoProxy, TakeOperation > result(std::forward< std::unique_ptr< TakeOperation > >(take_op_ptr));

    return result.toJs(info.Env());
}


template< typename ReaderType, typename SampleProxy >
DataReaderWrapBaseT< ReaderType, SampleProxy >::DataReaderWrapBaseT(std::string const& className):
    m_reader(className)
{}

} // end namespace DdsJs

#endif /* _DDSJS_DDSJS_PROVIDERS_COREDX_DATAREADERWRAP_HH_ */

// vim: set ts=4 sw=4 expandtab:
