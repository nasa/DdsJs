/**
 * \file DataWriterWrap.hh
 * \brief Contains the definition of the \c DataWriterWrap class.
 * \date 2014-10-15
 * \author Rolando J. Nieves
 */

#ifndef DATAWRITERWRAP_HH_
#define DATAWRITERWRAP_HH_

#include <cstdlib>
#include <sstream>
#include <uv.h>
#include <node.h>
#include <node_object_wrap.h>
#include <DdsJs/dds_provider.h>
#include <DdsJs/ddsjs_base.hh>

namespace DdsJs {

/**
 * \brief Template data structure used during asynchronous \c DDS::DataWriter::write() operations.
 *
 * The \c DataWriteAsyncOperation data structure is used by the \c DataWriterWrap
 * template class as a place to hold information required to complete
 * an asynchronous write() operation farmed out to the collection of worker
 * threads hosted by the Node.js executive.
 */
template< class TopicConfig >
struct DataWriteAsyncOperation
{
	/**
	 * \c DDS::DataWriter instance involved in this write() operation.
	 */
	typename TopicConfig::WriterType *writer;
	
	/**
	 * The result of the write() operation.
	 */
	::DDS::ReturnCode_t writeResult;
	
	/**
	 * Sample to write()
	 */
	typename TopicConfig::TopicDataType sample;
	
	/**
	 * Instance handle to use
	 */
	::DDS::InstanceHandle_t instanceHandle;

	/**
	 * Callback to invoke once the write() operation is complete.
	 */
	::v8::Persistent< ::v8::Function > callback;
	
	/**
	 * Flag used to discern whether the script that called write() provided a
	 * completion callback.
	 */
	bool callbackProvided;

	/**
	 * \brief Initialize all instance fields.
	 */
	DataWriteAsyncOperation()
	{
		writer = NULL;
		writeResult = ::DDS::RETCODE_OK;
		callbackProvided = false;
		instanceHandle = ::DDS::HANDLE_NIL;
	}
};

/**
 * \brief Template class for generated \c DDS::DataWriter wrappers.
 *
 * The \c DataWriterWrap template class is used to instantiate the required
 * wrapper classes for \c DDS::DataWriter-derived classes emitted by the 
 * DDS IDL-to-C++ compiler.
 *
 * The template class accepts as a template argument a class or data structure
 * that provides the necessary C++ type information needed to adapt the
 * template class to a particular DDS topic defined via IDL.
 */
template< class TopicConfig >
class DataWriterWrap : public ::node::ObjectWrap
{
public:

	/**
	 * Class-wide constructor function used by Node.js when a new instance of
	 * this \c DDS::DataWriter wrapper is created.
	 */
	static ::v8::Persistent< ::v8::Function > constructor;

	/**
	 * \brief Initialize the prototype used to create \c DataWriter instances in JavaScript.
	 *
	 * The \c Init() class method creates a new JavaScript object prototype
	 * that will later be used by Node.js to create instances of the 
	 * \c DDS::DataWriter variant wrapped by this template class.
	 *
	 * \param exports {inout} Contains the created \c DataWriter prototype as an
	 *                        exported object.
	 */
	static void Init(::v8::Local< ::v8::Object > exports)
	{
		::v8::Isolate *isolate = ::v8::Isolate::GetCurrent();
		
		::v8::Local< ::v8::FunctionTemplate > tpl = ::v8::FunctionTemplate::New(isolate, DataWriterWrap::New);
		::std::string dwName = TopicConfig::TopicName + "DataWriter";
		tpl->SetClassName(::v8::String::NewFromUtf8(isolate, dwName.c_str()));
		tpl->InstanceTemplate()->SetInternalFieldCount(2);
		
		/**
		 * Two instance fields are included with every \c DataWriter instances
		 * created by this method:
		 * - \c publisher - Contains a reference to the object wrapper
		 *                  which contains the \c DDS::Publisher instance that
		 *                  owns the \c DDS::DataWriter instance wrapped by
		 *                  this newly-created object wrapper. It is initially
		 *                  set to \c null.
		 * - \c topic - Contains a reference to the object wrapper which
		 *              contains the \c DDS::Topic instance that is associated
		 *              with the \c DDS::DataWriter instance wrapped by this
		 *              newly-created object wrapper. It is initially set to
		 *              \c null.
		 */
		DataWriterWrap::publisherFieldName.Reset(isolate, ::v8::String::NewFromUtf8(isolate, "publisher"));
		DataWriterWrap::topicFieldName.Reset(isolate, ::v8::String::NewFromUtf8(isolate, "topic"));
		tpl->InstanceTemplate()->Set(::v8::Local< ::v8::String >::New(isolate, DataWriterWrap::publisherFieldName), ::v8::Null(isolate));
		tpl->InstanceTemplate()->Set(::v8::Local< ::v8::String >::New(isolate, DataWriterWrap::topicFieldName), ::v8::Null(isolate));
		
		/**
		 * The list of methods included in the JavaScript object prototype are
		 * derived from an appropriate counterpart in \c DDS::DataWriter:
		 * - \c write() - \c DDS::DataWriter::write()
		 * - \c getStatusChanges() - \c DDS::DataWriter::get_status_changes()
		 * - \c getMatchedSubscriptions() - \c DDS::DataWriter::get_matched_subscriptions()
		 * - \c getMatchedSubscriptionData() - \c DDS::DataWriter::get_matched_subscription_data()
		 * - \c registerInstance() - \c DDS::DataWriter::register_instance()
		 * - \c unregisterInstance() - \c DDS::DataWriter::unregister_instance()
		 * - \c dispose() - \c DDS::DataWriter::dispose()
		 */
		NODE_SET_PROTOTYPE_METHOD(tpl, "write", DataWriterWrap::Write);
		NODE_SET_PROTOTYPE_METHOD(tpl, "getStatusChanges", DataWriterWrap::GetStatusChanges);
		NODE_SET_PROTOTYPE_METHOD(tpl, "getMatchedSubscriptions", DataWriterWrap::GetMatchedSubscriptions);
		NODE_SET_PROTOTYPE_METHOD(tpl, "getMatchedSubscriptionData", DataWriterWrap::GetMatchedSubscriptionData);
		NODE_SET_PROTOTYPE_METHOD(tpl, "registerInstance", DataWriterWrap::RegisterInstance);
		NODE_SET_PROTOTYPE_METHOD(tpl, "unregisterInstance", DataWriterWrap::UnregisterInstance);
		NODE_SET_PROTOTYPE_METHOD(tpl, "dispose", DataWriterWrap::Dispose);
		
		DataWriterWrap::constructor.Reset(isolate, tpl->GetFunction());
		exports->Set(::v8::String::NewFromUtf8(isolate, dwName.c_str()), tpl->GetFunction());
	}

private:

	/**
	 * Reference to the actual C++ \c DDS::DataWriter-derived instance.
	 */
	typename TopicConfig::WriterType *m_writer;

	/**
	 * \brief Initialize all instance fields.
	 *
	 * The default constructor for the \c DataWriterWrap class is not meant to
	 * be called externally, hence it is protected.
	 */
	DataWriterWrap()
	: m_writer(NULL)
	{}

	/**
	 * \brief Reset all instance fields.
	 *
	 * The destructor for the \c DataWriterWrap class is not meant to be called
	 * externally (i.e., only \c DataWriterWrap is allowed to create and 
	 * destroy \c DataWriterWrap instances), hence it is protected.
	 */
	virtual ~DataWriterWrap()
	{ m_writer = NULL; }

	/**
	 * Reusable string containing the name of the \c publisher field.
	 */
	static ::v8::Persistent< ::v8::String > publisherFieldName;

	/**
	 * Reusable string containing the name of the \c topic field.
	 */
	static ::v8::Persistent< ::v8::String > topicFieldName;

	/**
	 * \brief Create a new \c DataWriter instance.
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
		::v8::MaybeLocal< ::v8::Object > pubMaybe;
		::v8::Local< ::v8::Object > pubObj;
		::v8::MaybeLocal< ::v8::Object > topicMaybe;
		::v8::Local< ::v8::Object > topicObj;
		::v8::MaybeLocal< ::v8::Object > ctorMaybe;

		if (args.Length() < 2)
		{
			::std::stringstream errorMsg;
			errorMsg << "Not enough arguments passed to " << TopicConfig::TopicName << "DataWriter constructor.";
			isolate->ThrowException(::v8::Exception::TypeError(::v8::String::NewFromUtf8(isolate, errorMsg.str().c_str())));
			return;
		}

		if ((pubMaybe = args[0]->ToObject(ctx)).IsEmpty() || 
			(topicMaybe = args[1]->ToObject(ctx)).IsEmpty())
		{
			::std::stringstream errorMsg;
			errorMsg << "Invalid arguments passed to " << TopicConfig::TopicName << "DataWriter constructor call.";
			isolate->ThrowException(::v8::Exception::TypeError(::v8::String::NewFromUtf8(isolate, errorMsg.str().c_str())));
			return;
		}
		
		pubObj = pubMaybe.FromMaybe(::v8::Local< ::v8::Object >());
		topicObj = topicMaybe.FromMaybe(::v8::Local< ::v8::Object >());
		
		if ((pubObj->InternalFieldCount() < 2) ||
			(topicObj->InternalFieldCount() < 2) ||
			(pubObj->GetAlignedPointerFromInternalField(1) == NULL) ||
			(topicObj->GetAlignedPointerFromInternalField(1) == NULL))
		{
			::std::stringstream errorMsg;
			errorMsg << "Invalid arguments passed to " << TopicConfig::TopicName << "DataWriter constructor call.";
			isolate->ThrowException(::v8::Exception::TypeError(::v8::String::NewFromUtf8(isolate, errorMsg.str().c_str())));
			return;
		}

		if (args.IsConstructCall())
		{
			args.This()->Set(ctx, ::v8::Local< ::v8::String >::New(isolate, DataWriterWrap::publisherFieldName), pubObj);
			::DDS::Publisher *pub = reinterpret_cast< ::DDS::Publisher* >(pubObj->GetAlignedPointerFromInternalField(1));
			args.This()->Set(ctx, ::v8::Local< ::v8::String >::New(isolate, DataWriterWrap::topicFieldName), topicObj);
			::DDS::Topic *topic = reinterpret_cast< ::DDS::Topic* >(topicObj->GetAlignedPointerFromInternalField(1));

			DataWriterWrap *obj = new DataWriterWrap();
			obj->m_writer = static_cast< typename TopicConfig::WriterType* >(
					pub->create_datawriter(topic, ::DDS::DATAWRITER_QOS_DEFAULT, NULL, 0));
			if (NULL == obj->m_writer)
			{
				::std::stringstream errorMsg;
				delete obj;
				obj = NULL;
				errorMsg << "Could not create DDS data writer for " << TopicConfig::TopicName << " topic.";
				isolate->ThrowException(::v8::Exception::Error(::v8::String::NewFromUtf8(isolate, errorMsg.str().c_str())));
				return;
			}
			args.This()->SetAlignedPointerInInternalField(1, obj->m_writer);
			obj->Wrap(args.This());

			args.GetReturnValue().Set(args.This());
		}
		else
		{
			unsigned argc = 4u;
			::v8::Handle< ::v8::Value > argv[] = {
					args[0],
					args[1],
					::v8::Null(isolate),
					::v8::Null(isolate)
			};
			if (args.Length() > 3) argv[3] = args[3]; else argc--;
			if (args.Length() > 2) argv[2] = args[2]; else argc--;
			
			::v8::Local< ::v8::Function > ctor = ::v8::Local< ::v8::Function >::New(isolate, DataWriterWrap::constructor);
			ctorMaybe = ctor->NewInstance(ctx, argc, argv);
			if (ctorMaybe.IsEmpty())
			{
				args.GetReturnValue().Set(::v8::Null(isolate));
			}
			else
			{
				args.GetReturnValue().Set(ctorMaybe.ToLocalChecked());
			}
		}
	}

	/**
	 * \brief Wrap the \c DDS::DataWriter::write() C++ call
	 *
	 * The \c Write() class method is called whenever a Node.js 
	 * JavaScript script calls the \c write() method in an object
	 * instance created by this class' \c New() class method.
	 *
	 * This method carries out its work asynchronously, providing the
	 * result of the operation via a callback. The callback signature closely
	 * resembles that of typical Node.js asynchronous operations, with the
	 * first argument of the callback being a field that is set to non-null
	 * should the operation had encountered an error.
	 *
	 * \param args {in} Contains the arguments provided in the JavaScript
	 *                  method call.
	 */
	static void Write(::v8::FunctionCallbackInfo< ::v8::Value > const& args)
	{
		::v8::Isolate *isolate = ::v8::Isolate::GetCurrent();
		::v8::HandleScope scope(isolate);
		::DDS::InstanceHandle_t instanceHandle = ::DDS::HANDLE_NIL;

		if (args.Length() < 1)
		{
			::std::stringstream errorMsg;
			errorMsg << "Not enough arguments passed to "
					 << TopicConfig::TopicName
					 << "DataWriter write() method call.";
			isolate->ThrowException(
				::v8::Exception::TypeError(
					::v8::String::NewFromUtf8(
						isolate,
						errorMsg.str().c_str()
					)
				)
			);
			return;
		}

		if
		(
			(args.Length() > 1) &&
			(!::DdsJs::InstanceHandleField::FromJsValueToCpp(args[1], instanceHandle))
		)
		{
			::std::stringstream errorMsg;
			errorMsg << "Invalid instance handle passed to "
					 << TopicConfig::TopicName
					 << "DataWriter write() method call.";
			isolate->ThrowException(
				::v8::Exception::Error(
					::v8::String::NewFromUtf8(
						isolate,
						errorMsg.str().c_str()
					)
				)
			);
			return;
		}

		DataWriterWrap *obj = ObjectWrap::Unwrap< DataWriterWrap >(args.This());
		DataWriteAsyncOperation< TopicConfig > *asyncOp = 
			new DataWriteAsyncOperation< TopicConfig >();
		asyncOp->writer = obj->m_writer;
		if (!TopicConfig::TopicFieldClass::FromJsValueToCpp(args[0], asyncOp->sample))
		{
			::std::stringstream errorMsg;
			errorMsg << "Invalid or malformed sample argument passed to "
					 << TopicConfig::TopicName
					 << "DataWriter write().";
			delete asyncOp;
			asyncOp = NULL;
			isolate->ThrowException(
				::v8::Exception::TypeError(
					::v8::String::NewFromUtf8(
						isolate,
						errorMsg.str().c_str()
					)
				)
			);
			return;
		}
		asyncOp->instanceHandle = instanceHandle;

		asyncOp->callbackProvided = (args.Length() > 2) && args[2]->IsFunction();
		if (asyncOp->callbackProvided)
		{
			asyncOp->callback.Reset(isolate, args[2].As< ::v8::Function >());
		}

		uv_work_t *workToken = new uv_work_t;
		workToken->data = asyncOp;

		uv_queue_work(
				uv_default_loop(),
				workToken,
				DataWriterWrap::doWrite,
				DataWriterWrap::concludeWrite);

		return;
	}

	/**
	 * \brief Wrap the C++ \c DDS::DataWriter::get_status_changes() call.
	 *
	 * \param args {in} Contains the arguments provided in the JavaScript 
	 *                  call.
	 */
	static void GetStatusChanges(::v8::FunctionCallbackInfo< ::v8::Value > const& args)
	{
		::v8::Isolate *isolate = ::v8::Isolate::GetCurrent();
		::v8::HandleScope scope(isolate);

		DataWriterWrap *me = ::node::ObjectWrap::Unwrap<DataWriterWrap>(args.This());

		args.GetReturnValue().Set(::v8::Integer::New(isolate, me->m_writer->get_status_changes()));
	}

	/**
	 * \brief Wrap the C++ \c DDS::DataWriter::get_matched_subscriptions() call.
	 *
	 * \param args {in} Contains the arguments provided in the JavaScript 
	 *                  call.
	 */
	static void GetMatchedSubscriptions(::v8::FunctionCallbackInfo< ::v8::Value > const& args)
	{
		using InstanceHandleSequence = ::DdsJs::UnboundedSeqField< ::DdsJs::InstanceHandleField >;
		::v8::Isolate *isolate = ::v8::Isolate::GetCurrent();
		::v8::HandleScope scope(isolate);
		::DDS::ReturnCode_t ddsRetCode = ::DDS::RETCODE_OK;
		::DDS::InstanceHandleSeq matchedSubs;

		DataWriterWrap *me = ::node::ObjectWrap::Unwrap< DataWriterWrap >(args.This());
		ddsRetCode = me->m_writer->get_matched_subscriptions(&matchedSubs);
		if (::DDS::RETCODE_OK == ddsRetCode)
		{
			args.GetReturnValue().Set(
				InstanceHandleSequence::FromCppToJsValue(
					matchedSubs
				)
			);
		}
		else
		{
			args.GetReturnValue().Set(::v8::Null(isolate));
		}
	}

	/**
	 * \brief Wrap the C++ \c DDS::DataWriter::get_matched_subscription_data() call.
	 *
	 * \param args {in} Contains the arguments provided in the JavaScript
	 *                  call.
	 */
	static void GetMatchedSubscriptionData(::v8::FunctionCallbackInfo< ::v8::Value > const& args)
	{
		::v8::Isolate *isolate = ::v8::Isolate::GetCurrent();
		::v8::HandleScope scope(isolate);
		::DDS::ReturnCode_t ddsRetCode;
		::DDS::SubscriptionBuiltinTopicData subData;
		::DDS::InstanceHandle_t subHandle;

		if ((args.Length() < 1) || !::DdsJs::InstanceHandleField::FromJsValueToCpp(args[0], subHandle))
		{
			isolate->ThrowException(
				::v8::Exception::Error(
					::v8::String::NewFromUtf8(
						isolate,
						"Must specify instance handle when calling getMatchedPublicationData()"
					)
				)
			);
			return;
		}
		DataWriterWrap *me = ::node::ObjectWrap::Unwrap< DataWriterWrap >(args.This());
		ddsRetCode = me->m_writer->get_matched_subscription_data(&subData, subHandle);
		if (::DDS::RETCODE_OK == ddsRetCode)
		{
			args.GetReturnValue().Set(
				::DDS::SubscriptionBuiltinTopicDataField::FromCppToJsValue(
					subData
				)
			);
		}
		else
		{
			args.GetReturnValue().Set(::v8::Null(isolate));
		}
	}

	/**
	 * \brief Wrap the C++ \c DDS::DataWriter::register_instance() call.
	 *
	 * \param args {in} Contains the arguments provided in the JavaScript
	 *                  call.
	 */
	static void RegisterInstance(::v8::FunctionCallbackInfo< ::v8::Value > const& args)
	{
		::v8::Isolate *isolate = ::v8::Isolate::GetCurrent();
		::v8::HandleScope scope(isolate);
		::DDS::InstanceHandle_t instanceHandle = ::DDS::HANDLE_NIL;
		typename TopicConfig::TopicDataType theSample;

		if
		(
			(args.Length() < 1) ||
			(!TopicConfig::TopicFieldClass::FromJsValueToCpp(args[0], theSample))
		)
		{
			isolate->ThrowException(
				::v8::Exception::Error(
					::v8::String::NewFromUtf8(
						isolate,
						"Must specify instance value when calling registerInstance()"
					)
				)
			);
			return;
		}

		DataWriterWrap *me = ::node::ObjectWrap::Unwrap< DataWriterWrap >(args.This());
		instanceHandle = me->m_writer->register_instance(&theSample);
		if (instanceHandle != ::DDS::HANDLE_NIL)
		{
			args.GetReturnValue().Set(
				::DdsJs::InstanceHandleField::FromCppToJsValue(
					instanceHandle
				)
			);
		}
		else
		{
			args.GetReturnValue().Set(::v8::Null(isolate));
		}
	}

	/**
	 * \brief Wrap the C++ \c DDS::DataWriter::unregister_instance() call.
	 *
	 * \param args {in} - Contains the arguments provided in the JavaScript
	 *                    call.
	 */
	static void UnregisterInstance(::v8::FunctionCallbackInfo< ::v8::Value > const& args)
	{
		::v8::Isolate *isolate = ::v8::Isolate::GetCurrent();
		::v8::HandleScope scope(isolate);
		::DDS::InstanceHandle_t instanceHandle = ::DDS::HANDLE_NIL;
		typename TopicConfig::TopicDataType theSample;
		::DDS::ReturnCode_t ddsRetCode = ::DDS::RETCODE_OK;

		if
		(
			(args.Length() < 2) ||
			(!TopicConfig::TopicFieldClass::FromJsValueToCpp(args[0], theSample)) ||
			(!::DdsJs::InstanceHandleField::FromJsValueToCpp(args[1], instanceHandle))
		)
		{
			isolate->ThrowException(
				::v8::Exception::Error(
					::v8::String::NewFromUtf8(
						isolate,
						"Must specify instance value and instance handle when calling unregisterInstance()"
					)
				)
			);
			return;
		}

		DataWriterWrap *me = ::node::ObjectWrap::Unwrap< DataWriterWrap >(args.This());
		ddsRetCode = me->m_writer->unregister_instance(&theSample, instanceHandle);
		if (ddsRetCode != ::DDS::RETCODE_OK)
		{
			::std::stringstream errorMsg;

			errorMsg << "Could not unregister instance: "
					 << DDS_error(ddsRetCode);
			isolate->ThrowException(
				::v8::Exception::Error(
					::v8::String::NewFromUtf8(
						isolate,
						errorMsg.str().c_str()
					)
				)
			);
			return;
		}
	}

	/**
	 * \brief Wrap the C++ \c DDS::DataWriter::dispose() call.
	 *
	 * \param args {in} - Contains the arguments provided in the JavaScript
	 *                    call.
	 */
	 static void Dispose(::v8::FunctionCallbackInfo< ::v8::Value > const& args)
	 {
		 ::v8::Isolate *isolate = ::v8::Isolate::GetCurrent();
		 ::v8::HandleScope scope(isolate);
		 ::DDS::InstanceHandle_t instanceHandle = ::DDS::HANDLE_NIL;
		 typename TopicConfig::TopicDataType theSample;
		 ::DDS::ReturnCode_t ddsRetCode = ::DDS::RETCODE_OK;
 
		 if
		 (
			 (args.Length() < 2) ||
			 (!TopicConfig::TopicFieldClass::FromJsValueToCpp(args[0], theSample)) ||
			 (!::DdsJs::InstanceHandleField::FromJsValueToCpp(args[1], instanceHandle))
		 )
		 {
			 isolate->ThrowException(
				 ::v8::Exception::Error(
					 ::v8::String::NewFromUtf8(
						 isolate,
						 "Must specify instance value and instance handle when calling dispose()"
					 )
				 )
			 );
			 return;
		 }
 
		 DataWriterWrap *me = ::node::ObjectWrap::Unwrap< DataWriterWrap >(args.This());
		 ddsRetCode = me->m_writer->dispose(&theSample, instanceHandle);
		 if (ddsRetCode != ::DDS::RETCODE_OK)
		 {
			 ::std::stringstream errorMsg;
 
			 errorMsg << "Could not dispose instance: "
					  << DDS_error(ddsRetCode);
			 isolate->ThrowException(
				 ::v8::Exception::Error(
					 ::v8::String::NewFromUtf8(
						 isolate,
						 errorMsg.str().c_str()
					 )
				 )
			 );
			 return;
		 }
	 }
 
	/**
	 * \brief Perform the \c DDS::DataWriter::write() inside a Node.js worker thread.
	 *
	 * The \c doWrite() class method is called by a Node.js worker thread some
	 * time after the main Node.js thread schedules the work.
	 *
	 * \param workToken {inout} Contains the instance of the \c DataWriteAsyncOperation
	 *                          data structure that describes the write() operation.
	 */
	static void doWrite(uv_work_t *workToken)
	{
		DataWriteAsyncOperation< TopicConfig > *asyncOp =
			reinterpret_cast< DataWriteAsyncOperation< TopicConfig >* >(
				workToken->data
			);
		asyncOp->writeResult = asyncOp->writer->write(
			&asyncOp->sample,
			asyncOp->instanceHandle
		);
	}

	/**
	 * \brief Close-out the \c DDS::DataWriter::write() work.
	 *
	 * The \c concludeWrite() class method is called by Node.js after the worker
	 * thread assigned to perform the \c DDS::DataWriter::write() operation is
	 * done with its work. This routine is responsible for executing the
	 * callback, if any, originally provided in the \c write() call.
	 *
	 * \param workToken {in} Contains the instance of the \c DataWriteAsyncOperation
	 *                       data structure that describes the write() operation.
	 * \param status {in} Status provided by the worker thread. Unused.
	 */
	static void concludeWrite(uv_work_t *workToken, int status)
	{
		::v8::Isolate *isolate = ::v8::Isolate::GetCurrent();
		DataWriteAsyncOperation<TopicConfig> *asyncOp = reinterpret_cast< DataWriteAsyncOperation<TopicConfig>* >(workToken->data);

		if (asyncOp->callbackProvided)
		{
			const unsigned argc = 1;
			::v8::Local< ::v8::Value > argv[argc] = {
					::v8::Null(isolate)
			};

			if (asyncOp->writeResult != ::DDS::RETCODE_OK)
			{
				::std::stringstream errorMsg;

				errorMsg << "Problem while writing " << TopicConfig::TopicName << " DDS sample:" << DDS_error(asyncOp->writeResult);
				argv[0] = ::v8::String::NewFromUtf8(isolate, errorMsg.str().c_str());
			}

			::v8::TryCatch exHandler { isolate };
			::v8::Local< ::v8::Function > cb = ::v8::Local< ::v8::Function >::New(isolate, asyncOp->callback);
			::node::MakeCallback(isolate, isolate->GetCurrentContext()->Global(), cb, argc, argv);
			if (exHandler.HasCaught())
			{
				::node::FatalException(::v8::Isolate::GetCurrent(), exHandler);
			}

			asyncOp->callback.Reset();
		}

		delete asyncOp;
		asyncOp = NULL;
		delete workToken;
		workToken = NULL;
	}
};

/*
 * Instatiation of class static fields.
 */
template< class TopicConfig >
::v8::Persistent< ::v8::Function > DataWriterWrap<TopicConfig>::constructor;
template< class TopicConfig >
::v8::Persistent< ::v8::String > DataWriterWrap<TopicConfig>::publisherFieldName;
template< class TopicConfig >
::v8::Persistent< ::v8::String > DataWriterWrap<TopicConfig>::topicFieldName;

} // namespace DdsJs

#endif /* DATAWRITERWRAP_HH_ */
