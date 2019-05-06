/**
 * \file DataReaderWrap.hh
 * \brief Contains the definition of the \c DataReaderWrap class.
 * \date 2014-09-24
 * \author Rolando J. Nieves
 */

#ifndef DATAREADERWRAP_HH_
#define DATAREADERWRAP_HH_

#include <cstdlib>
#include <sstream>
#include <node.h>
#include <node_object_wrap.h>
#include <DdsJs/dds_provider.h>
#include <DdsJs/ddsjs_base.hh>

namespace DdsJs
{

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
template<class TopicConfig>
class DataReaderWrap : public ::node::ObjectWrap
{
public:

    /**
     * Class-wide constructor function used by Node.js when a new instance of
     * this \c DDS::DataReader wrapper is created.
     */
    static ::v8::Persistent< ::v8::Function > constructor;

    /**
     * \brief Initialize the prototype used to create \c DataReader instances in JavaScript.
     *
     * The \c Init() class method creates a new JavaScript object prototype
     * that will later be used by Node.js to create instances of the 
     * \c DDS::DataReader variant wrapped by this template class.
     *
     * \param exports {inout} Contains the created DataReader prototype as an
     *                        exported object.
     */
    static void Init(v8::Local< ::v8::Object > exports)
    {
        ::v8::Isolate *isolate = ::v8::Isolate::GetCurrent();
        ::v8::Local< ::v8::FunctionTemplate > tpl = ::v8::FunctionTemplate::New(isolate, DataReaderWrap::New);
        ::std::string drName = TopicConfig::TopicName + "DataReader";
        tpl->SetClassName(::v8::String::NewFromUtf8(isolate, drName.c_str()));

        /**
         * Two instance fields are included with every \c DataReader instances
         * created by this method:
         * - \c subscriber - Contains a reference to the object wrapper
         *                   which contains the \c DDS::Subscriber instance that
         *                   owns the \c DDS::DataReader instance wrapped by
         *                   this newly-created object wrapper. It is initially
         *                   set to \c null.
         * - \c topic - Contains a reference to the object wrapper which
         *              contains the \c DDS::Topic instance that is associated
         *              with the \c DDS::DataReader instance wrapped by this
         *              newly-created object wrapper. It is initially set to
         *              \c null.
         */
        tpl->InstanceTemplate()->SetInternalFieldCount(2);
        DataReaderWrap::subscriberFieldName.Reset(isolate, ::v8::String::NewFromUtf8(isolate, "subscriber"));
        tpl->InstanceTemplate()->Set(::v8::Local< ::v8::String >::New(isolate, DataReaderWrap::subscriberFieldName), ::v8::Null(isolate));
        DataReaderWrap::topicFieldName.Reset(isolate, ::v8::String::NewFromUtf8(isolate, "topic"));
        tpl->InstanceTemplate()->Set(::v8::Local< ::v8::String >::New(isolate, DataReaderWrap::topicFieldName), ::v8::Null(isolate));

        /**
         * The list of methods included in the JavaScript object prototype are
         * derived from an appropriate counterpart in \c DDS::DataReader:
         * - \c take() - \c DDS::DataReader::take()
         * - \c getStatusChanges() - \c DDS::DataReader::get_status_changes()
         * - \c getLivelinessChangedStatus() - \c DDS::DataReader::get_liveliness_changed_status()
         * - \c getSubscriptionMatchedStatus() - \c DDS::DataReader::get_subscription_matched_status()
         * - \c getSampleLostStatus() - \c DDS::DataReader::get_sample_lost_status()
         * - \c getRequestedIncompatibleQosStatus() - \c DDS::DataReader::get_requested_incompatible_qos_status()
         * - \c getSampleRejectedStatus() - \c DDS::DataReader::get_sample_rejected_status()
         * - \c getMatchedPublications() - \c DDS::DataReader::get_matched_publications()
         * - \c getMatchedPublicationData() - \c DDS::DataReader::get_matched_publication_data()
         */
        NODE_SET_PROTOTYPE_METHOD(tpl, "take", DataReaderWrap::Take);
        NODE_SET_PROTOTYPE_METHOD(tpl, "getStatusChanges", DataReaderWrap::GetStatusChanges);
        NODE_SET_PROTOTYPE_METHOD(tpl, "getLivelinessChangedStatus", DataReaderWrap::GetLivelinessChangedStatus);
        NODE_SET_PROTOTYPE_METHOD(tpl, "getSubscriptionMatchedStatus", DataReaderWrap::GetSubscriptionMatchedStatus);
        NODE_SET_PROTOTYPE_METHOD(tpl, "getSampleLostStatus", DataReaderWrap::GetSampleLostStatus);
        NODE_SET_PROTOTYPE_METHOD(tpl, "getRequestedIncompatibleQosStatus", DataReaderWrap::GetRequestedIncompatibleQosStatus);
        NODE_SET_PROTOTYPE_METHOD(tpl, "getSampleRejectedStatus", DataReaderWrap::GetSampleRejectedStatus);
        NODE_SET_PROTOTYPE_METHOD(tpl, "getMatchedPublications", DataReaderWrap::GetMatchedPublications);
        NODE_SET_PROTOTYPE_METHOD(tpl, "getMatchedPublicationData", DataReaderWrap::GetMatchedPublicationData);
        NODE_SET_PROTOTYPE_METHOD(tpl, "getQos", DataReaderWrap::GetQos);

        DataReaderWrap::constructor.Reset(isolate, tpl->GetFunction());

        exports->Set(::v8::String::NewFromUtf8(isolate, drName.c_str()),
            tpl->GetFunction());
    }

protected:

    /**
     * Reference to the actual C++ \c DDS::DataReader-derived instance.
     */
    typename TopicConfig::ReaderType *m_reader;
    
    /**
     * \brief Initialize all instance fields.
     *
     * The default constructor for the \c DataReaderWrap class is not meant to
     * be called externally, hence it is protected.
     */
    DataReaderWrap()
    : m_reader(NULL)
    {}
    
    /**
     * \brief Reset all instance fields.
     *
     * The destructor for the \c DataReaderWrap class is not meant to be called
     * externally (i.e., only \c DataReaderWrap is allowed to create and 
     * destroy \c DataReaderWrap instances), hence it is protected.
     */
    virtual ~DataReaderWrap()
    { m_reader = NULL; }

    /**
     * Reusable string containing the name of the \c subscriber field.
     */
    static ::v8::Persistent< ::v8::String > subscriberFieldName;
    
    /**
     * Reusable string containing the name of the \c topic field.
     */
    static ::v8::Persistent< ::v8::String > topicFieldName;

    /**
     * \brief Create a new \c DataReader instance.
     *
     * The \c New() method is called by Node.js when a JavaScript script
     * creates a new instance of the JavaScript class prototype created by this
     * object wrapper in the \c Init() class method.
     *
     * \param args {in} Contains the arguments included in the JavaScript 
     *                  \c new invocation.
     */
    static void New(::v8::FunctionCallbackInfo< ::v8::Value > const& args)
    {
        ::v8::Isolate *isolate = ::v8::Isolate::GetCurrent();
        ::v8::HandleScope scope(isolate);
        ::v8::Local< ::v8::Context > ctx = isolate->GetCurrentContext();
        ::std::stringstream errorMsg;

        if (args.Length() < 2)
        {
            errorMsg << "Not enough arguments in " << TopicConfig::TopicName << "DataReader constructor call.";
            isolate->ThrowException(::v8::Exception::TypeError(::v8::String::NewFromUtf8(isolate, errorMsg.str().c_str())));
            return;
        }

        if (args.IsConstructCall())
        {
            ::v8::Maybe< bool > setResult = args.This()->Set(
                ctx,
                ::v8::Local< ::v8::String >::New(
                    isolate,
                    DataReaderWrap::subscriberFieldName
                ),
                args[0]
            );
            ::DDS::Subscriber *sub = reinterpret_cast< ::DDS::Subscriber* >(
                args[0]->ToObject()->GetAlignedPointerFromInternalField(1)
            );
            setResult = args.This()->Set(
                ctx,
                ::v8::Local< ::v8::String >::New(
                    isolate,
                    DataReaderWrap::topicFieldName
                ),
                args[1]
            );
            ::DDS::TopicDescription *topic = reinterpret_cast< ::DDS::TopicDescription* >(
                args[1]->ToObject()->GetAlignedPointerFromInternalField(1)
            );

            DataReaderWrap *obj = new DataReaderWrap();
            ::DDS::DataReaderQos readerQos;
            // Get the default QoS from the subscriber and then combine it with
            // whatever we can decode from JS land.
            sub->get_default_datareader_qos(&readerQos);
            if ((args.Length() > 2) && !args[2]->IsNull() && args[2]->IsObject())
            {
                ::v8::Local< ::v8::Object > jsReaderQos(args[2]->ToObject(ctx).FromMaybe(::v8::Local< ::v8::Object >()));
                if (!::DDS::DataReaderQosField::FromJsValueToCpp(jsReaderQos, readerQos))
                {
                    errorMsg << "Invalid QoS object passed in " << TopicConfig::TopicName << "DataReader constructor.";
                    isolate->ThrowException(::v8::Exception::TypeError(::v8::String::NewFromUtf8(isolate, errorMsg.str().c_str())));
                    delete obj;
                    obj = NULL;
                    return;
                }
            }
            else
            {
                readerQos.history.kind = DDS::KEEP_ALL_HISTORY_QOS;
            }
            obj->m_reader = static_cast<typename TopicConfig::ReaderType*>(sub->create_datareader(topic, readerQos, NULL, 0));
            if (NULL == obj->m_reader)
            {
                errorMsg << "Could not create " << TopicConfig::TopicName << " DDS data reader instance.";
                isolate->ThrowException(::v8::Exception::Error(::v8::String::NewFromUtf8(isolate, errorMsg.str().c_str())));
                delete obj;
                obj = NULL;
                return;
            }
            args.This()->SetAlignedPointerInInternalField(1, obj->m_reader);
            obj->Wrap(args.This());

            args.GetReturnValue().Set(args.This());
        }
        else
        {
            unsigned argc = 4u;
            ::v8::Local< ::v8::Value > argv[] = {
                args[0],
                args[1],
                ::v8::Null(isolate),
                ::v8::Null(isolate)
            };
            if (args.Length() > 3) argv[3] = args[3]; else argc--;
            if (args.Length() > 2) argv[2] = args[2]; else argc--;

            ::v8::Local< ::v8::Function > ctorFactory = ::v8::Local< ::v8::Function >::New(isolate, DataReaderWrap::constructor);
            ::v8::Local< ::v8::Object > ctor = ctorFactory->NewInstance(ctx, argc, argv).ToLocalChecked();
            if (ctor.IsEmpty())
            {
                args.GetReturnValue().Set(::v8::Null(isolate));
            }
            else
            {
                args.GetReturnValue().Set(ctor);
            }
        }
    }

    /**
     * \brief Wrap the \c DDS::DataReader::get_status_changes() C++ call
     *
     * The \c GetStatusChanges() class method is called whenever a Node.js 
     * JavaScript script calls the \c getStatusChanges() method in an object
     * instance created by this class' \c New() class method.
     *
     * \param args {in} Contains the arguments provided in the JavaScript
     *                  method call.
     */
    static void GetStatusChanges(::v8::FunctionCallbackInfo< ::v8::Value > const& args)
    {
        ::v8::Isolate *isolate = ::v8::Isolate::GetCurrent();
        ::v8::HandleScope scope(isolate);

        DataReaderWrap *me = ::node::ObjectWrap::Unwrap<DataReaderWrap>(args.This());

        args.GetReturnValue().Set(::v8::Integer::New(isolate, me->m_reader->get_status_changes()));
    }

    /**
     * \brief Wrap the \c DDS::DataReader::get_liveliness_changed_status() C++ call
     *
     * The \c GetLivelinessChangedStatus() class method is called whenever a Node.js 
     * JavaScript script calls the \c getLivelinessChangedStatus() method in an object
     * instance created by this class' \c New() class method.
     *
     * \param args {in} Contains the arguments provided in the JavaScript
     *                  method call.
     */
    static void GetLivelinessChangedStatus(::v8::FunctionCallbackInfo< ::v8::Value > const& args)
    {
        ::v8::Isolate *isolate = ::v8::Isolate::GetCurrent();
        ::v8::HandleScope scope(isolate);
        ::DDS::ReturnCode_t ddsRetCode = ::DDS::RETCODE_OK;
        ::DDS::LivelinessChangedStatus status;

        DataReaderWrap *me = ::node::ObjectWrap::Unwrap<DataReaderWrap>(args.This());
        ddsRetCode = me->m_reader->get_liveliness_changed_status(&status);
        if (::DDS::RETCODE_OK == ddsRetCode)
        {
            args.GetReturnValue().Set(::DDS::LivelinessChangedStatusField::FromCppToJsValue(status));
        }
        else
        {
            args.GetReturnValue().Set(::v8::Null(isolate));
        }
    }

    /**
     * \brief Wrap the \c DDS::DataReader::get_subscription_matched_status() C++ call
     *
     * The \c GetStatusChanges() class method is called whenever a Node.js 
     * JavaScript script calls the \c getStatusChanges() method in an object
     * instance created by this class' \c New() class method.
     *
     * \param args {in} Contains the arguments provided in the JavaScript
     *                  method call.
     */
    static void GetSubscriptionMatchedStatus(::v8::FunctionCallbackInfo< ::v8::Value > const& args)
    {
        ::v8::Isolate *isolate = ::v8::Isolate::GetCurrent();
        ::v8::HandleScope scope(isolate);
        ::DDS::ReturnCode_t ddsRetCode = ::DDS::RETCODE_OK;
        ::DDS::SubscriptionMatchedStatus status;

        DataReaderWrap *me = ::node::ObjectWrap::Unwrap<DataReaderWrap>(args.This());
        ddsRetCode = me->m_reader->get_subscription_matched_status(&status);
        if (::DDS::RETCODE_OK == ddsRetCode)
        {
            args.GetReturnValue().Set(::DDS::SubscriptionMatchedStatusField::FromCppToJsValue(status));
        }
        else
        {
            args.GetReturnValue().Set(::v8::Null(isolate));
        }
    }

    /**
     * \brief Wrap the \c DDS::DataReader::get_sample_lost_status() C++ call
     *
     * The \c GetSampleLostStatus() class method is called whenever a Node.js 
     * JavaScript script calls the \c getSampleLostStatus() method in an object
     * instance created by this class' \c New() class method.
     *
     * \param args {in} Contains the arguments provided in the JavaScript
     *                  method call.
     */
    static void GetSampleLostStatus(::v8::FunctionCallbackInfo< ::v8::Value > const& args)
    {
        ::v8::Isolate *isolate = ::v8::Isolate::GetCurrent();
        ::v8::HandleScope scope(isolate);
        ::DDS::ReturnCode_t ddsRetCode = ::DDS::RETCODE_OK;
        ::DDS::SampleLostStatus status;

        DataReaderWrap *me = ::node::ObjectWrap::Unwrap<DataReaderWrap>(args.This());
        ddsRetCode = me->m_reader->get_sample_lost_status(&status);
        if (::DDS::RETCODE_OK == ddsRetCode)
        {
            args.GetReturnValue().Set(::DDS::SampleLostStatusField::FromCppToJsValue(status));
        }
        else
        {
            args.GetReturnValue().Set(::v8::Null(isolate));
        }
    }

    /**
     * \brief Wrap the \c DDS::DataReader::get_requested_incompatible_qos_status() C++ call
     *
     * The \c GetRequestedIncompatibleQosStatus() class method is called whenever a Node.js 
     * JavaScript script calls the \c getRequestedIncompatibleQosStatus() method in an object
     * instance created by this class' \c New() class method.
     *
     * \param args {in} Contains the arguments provided in the JavaScript
     *                  method call.
     */
    static void GetRequestedIncompatibleQosStatus(::v8::FunctionCallbackInfo< ::v8::Value > const& args)
    {
        ::v8::Isolate *isolate = ::v8::Isolate::GetCurrent();
        ::v8::HandleScope scope(isolate);
        ::DDS::ReturnCode_t ddsRetCode = ::DDS::RETCODE_OK;
        ::DDS::RequestedIncompatibleQosStatus status;

        DataReaderWrap *me = ::node::ObjectWrap::Unwrap<DataReaderWrap>(args.This());
        ddsRetCode = me->m_reader->get_requested_incompatible_qos_status(&status);
        if (::DDS::RETCODE_OK == ddsRetCode)
        {
            args.GetReturnValue().Set(::DDS::RequestedIncompatibleQosStatusField::FromCppToJsValue(status));
        }
        else
        {
            args.GetReturnValue().Set(::v8::Null(isolate));
        }
    }

    /**
     * \brief Wrap the \c DDS::DataReader::get_sample_rejected_status() C++ call
     *
     * The \c GetSampleRejectedStatus() class method is called whenever a Node.js 
     * JavaScript script calls the \c getSampleRejectedStatus() method in an object
     * instance created by this class' \c New() class method.
     *
     * \param args {in} Contains the arguments provided in the JavaScript
     *                  method call.
     */
    static void GetSampleRejectedStatus(::v8::FunctionCallbackInfo< ::v8::Value > const& args)
    {
        ::v8::Isolate *isolate = ::v8::Isolate::GetCurrent();
        ::v8::HandleScope scope(isolate);
        ::DDS::ReturnCode_t ddsRetCode = ::DDS::RETCODE_OK;
        ::DDS::SampleRejectedStatus status;

        DataReaderWrap *me = ::node::ObjectWrap::Unwrap<DataReaderWrap>(args.This());
        ddsRetCode = me->m_reader->get_sample_rejected_status(&status);
        if (::DDS::RETCODE_OK == ddsRetCode)
        {
            args.GetReturnValue().Set(::DDS::SampleRejectedStatusField::FromCppToJsValue(status));
        }
        else
        {
            args.GetReturnValue().Set(::v8::Null(isolate));
        }
    }

    /**
     * \brief Wrap the \c DDS::DataReader::get_matched_publications() C++ call
     *
     * The \c GetMatchedPublications() class method is called whenever a Node.js 
     * JavaScript script calls the \c getMatchedPublications() method in an object
     * instance created by this class' \c New() class method.
     *
     * \param args {in} Contains the arguments provided in the JavaScript
     *                  method call.
     */
    static void GetMatchedPublications(::v8::FunctionCallbackInfo< ::v8::Value > const& args)
    {
        ::v8::Isolate *isolate = ::v8::Isolate::GetCurrent();
        ::v8::HandleScope scope(isolate);
        ::DDS::ReturnCode_t ddsRetCode = ::DDS::RETCODE_OK;
        ::DDS::InstanceHandleSeq matchedPubs;

        DataReaderWrap *me = ::node::ObjectWrap::Unwrap<DataReaderWrap>(args.This());
        ddsRetCode = me->m_reader->get_matched_publications(&matchedPubs);
        if (::DDS::RETCODE_OK == ddsRetCode)
        {
            args.GetReturnValue().Set(::DdsJs::UnboundedSeqField< ::DdsJs::InstanceHandleField >::FromCppToJsValue(matchedPubs));
        }
        else
        {
            args.GetReturnValue().Set(::v8::Null(isolate));
        }
    }

    /**
     * \brief Wrap the \c DDS::DataReader::get_matched_publication_data() C++ call
     *
     * The \c GetMatchedPublicationData() class method is called whenever a Node.js 
     * JavaScript script calls the \c getMatchedPublicationData() method in an object
     * instance created by this class' \c New() class method.
     *
     * \param args {in} Contains the arguments provided in the JavaScript
     *                  method call.
     */
    static void GetMatchedPublicationData(::v8::FunctionCallbackInfo< ::v8::Value > const& args)
    {
        ::v8::Isolate *isolate = ::v8::Isolate::GetCurrent();
        ::v8::HandleScope scope(isolate);
        ::DDS::ReturnCode_t ddsRetCode;
        ::DDS::PublicationBuiltinTopicData pubData;
        ::DDS::InstanceHandle_t pubHandle;

        if ((args.Length() < 1) || !::DdsJs::InstanceHandleField::FromJsValueToCpp(args[0], pubHandle))
        {
            isolate->ThrowException(::v8::Exception::Error(::v8::String::NewFromUtf8(isolate, "Must specify instance handle when calling getMatchedPublicationData()")));
            return;
        }
        DataReaderWrap *me = ::node::ObjectWrap::Unwrap<DataReaderWrap>(args.This());
        ddsRetCode = me->m_reader->get_matched_publication_data(&pubData, pubHandle);
        if (::DDS::RETCODE_OK == ddsRetCode)
        {
            args.GetReturnValue().Set(::DDS::PublicationBuiltinTopicDataField::FromCppToJsValue(pubData));
        }
        else
        {
            args.GetReturnValue().Set(::v8::Null(isolate));
        }
    }

    /**
     * \brief Wrap the \c DDS::DataReader::take() C++ call
     *
     * The \c Take() class method is called whenever a Node.js 
     * JavaScript script calls the \c take() method in an object
     * instance created by this class' \c New() class method.
     *
     * The `take()` is done synchronously, taking any samples already available.
     * Should no samples be available, the method simply returns empty
     * collections. Error conditions prior to the `take()` are transmitted as
     * JavaScript exceptions. Error conditions detected after `take()` are
     * transmitted in the callback's error argument.
     *
     * \param args {in} Contains the arguments provided in the JavaScript
     *                  method call.
     */
    static void Take(::v8::FunctionCallbackInfo< ::v8::Value > const& args)
    {
        ::v8::Isolate *isolate = ::v8::Isolate::GetCurrent();
        ::v8::HandleScope scope(isolate);
        ::std::stringstream errorMsg;

        if (args.Length() < 3)
        {
            errorMsg << "Not enough arguments to " << TopicConfig::TopicName << "DataReader take() method call.";
            isolate->ThrowException(::v8::Exception::TypeError(::v8::String::NewFromUtf8(isolate, errorMsg.str().c_str())));
            return;
        }

        DataReaderWrap *obj = ::node::ObjectWrap::Unwrap<DataReaderWrap>(args.This());
        ::DDS::ReturnCode_t takeResult = ::DDS::RETCODE_OK;
        typename TopicConfig::TopicPtrSeqType samples;
        typename TopicConfig::ReaderType *reader = obj->m_reader;
        ::DDS::SampleInfoSeq sampleInfos;
        takeResult = obj->m_reader->take(
                &samples,
                &sampleInfos,
                args[0]->IntegerValue(),
                ::DDS::NOT_READ_SAMPLE_STATE,
                ::DDS::ANY_VIEW_STATE,
                ::DDS::ANY_INSTANCE_STATE);
        const unsigned argc = 4u;
        ::v8::Local< ::v8::Value > argv[argc] = {
                args[2],                     // Callback Function
                ::v8::Null(isolate),         // Error message (if any)
                ::v8::Null(isolate),         // Samples
                ::v8::Null(isolate)          // Sample Infos
        };
        if ((::DDS::RETCODE_OK == takeResult) || (::DDS::RETCODE_NO_DATA == takeResult))
        {
            ::v8::Local< ::v8::Array > jsSamples(::v8::Array::New(isolate));
            ::v8::Local< ::v8::Array > jsSampleInfos(::v8::Array::New(isolate));
            for (unsigned inputIdx = 0u; inputIdx < samples.size(); inputIdx++)
            {
                if (sampleInfos[inputIdx]->valid_data)
                {
                    jsSamples->Set(inputIdx, TopicConfig::TopicFieldClass::FromCppToJsValue(*samples[inputIdx]));
                }
                else
                {
                    jsSamples->Set(inputIdx, ::v8::Local< ::v8::Value >::New(isolate, ::v8::Null(isolate)));
                }
                jsSampleInfos->Set(inputIdx, ::DDS::SampleInfoField::FromCppToJsValue(*sampleInfos[inputIdx]));
            }

            argv[2] = jsSamples;
            argv[3] = jsSampleInfos;
            if (takeResult != DDS::RETCODE_NO_DATA)
            {
                reader->return_loan(&samples, &sampleInfos);
            }
        }
        else
        {
            errorMsg << "Could not take samples of " << TopicConfig::TopicName << ":" << DDS_error(takeResult);
            argv[1] = ::v8::String::NewFromUtf8(isolate, errorMsg.str().c_str());
        }
        ::node::MakeCallback(isolate, isolate->GetCurrentContext()->Global(), "setImmediate", argc, argv);

        return;
    }

    static void GetQos(::v8::FunctionCallbackInfo< ::v8::Value > const& args)
    {
        ::v8::Isolate *isolate = ::v8::Isolate::GetCurrent();
        ::v8::HandleScope scope(isolate);
        ::DDS::ReturnCode_t ddsRetCode = ::DDS::RETCODE_OK;
        ::DDS::InstanceHandleSeq matchedPubs;
        ::DDS::DataReaderQos drQos;

        DataReaderWrap *me = ::node::ObjectWrap::Unwrap<DataReaderWrap>(args.This());
        ddsRetCode = me->m_reader->get_qos(drQos);
        if (::DDS::RETCODE_OK == ddsRetCode)
        {
            args.GetReturnValue().Set(::DDS::DataReaderQosField::FromCppToJsValue(drQos));
        }
        else
        {
            args.GetReturnValue().Set(::v8::Null(isolate));
        }
    }
};

/*
 * Instatiation of class static fields.
 */
template<class TopicConfig>
::v8::Persistent< ::v8::Function > DataReaderWrap<TopicConfig>::constructor;
template<class TopicConfig>
::v8::Persistent< ::v8::String > DataReaderWrap<TopicConfig>::subscriberFieldName;
template<class TopicConfig>
::v8::Persistent< ::v8::String > DataReaderWrap<TopicConfig>::topicFieldName;

} // namespace DDS

#endif /* DATAREADERWRAP_HH_ */
