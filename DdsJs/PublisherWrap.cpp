/**
 * \file PublisherWrap.cpp
 * \brief Contains the implementation of the \c PublisherWrap class.
 * \date 2014-10-21 15:55:15
 * \author Rolando J. Nieves
 */
#include <sstream>

#include "PublisherWrap.hh"
#include "ddsjs_base.hh"

using std::stringstream;
using v8::Persistent;
using v8::Function;
using v8::Handle;
using v8::Object;
using v8::Local;
using v8::FunctionTemplate;
using v8::String;
using v8::Value;
using v8::HandleScope;
using v8::Undefined;
using v8::Null;
using v8::Context;
using v8::Isolate;
using v8::FunctionCallbackInfo;
using v8::Exception;
using v8::MaybeLocal;
using v8::Maybe;
using node::ObjectWrap;
using DDS::DomainParticipant;
using DDS::ReturnCode_t;
using DDS::DataWriterQos;

namespace DdsJs
{

Persistent<Function> PublisherWrap::constructor;

void PublisherWrap::Init(Local<Object> exports)
{
	Isolate *isolate = Isolate::GetCurrent();
	
	// Prepare constructor template
	Local<FunctionTemplate> tpl = FunctionTemplate::New(isolate, PublisherWrap::New);
	tpl->SetClassName(String::NewFromUtf8(isolate, "Publisher"));
	tpl->InstanceTemplate()->SetInternalFieldCount(2);
	
	/**
	 * \c Publisher instances created by this class are given a prototype that
	 * points to the \c Participant instance that owns them. This property
	 * is called \c participant.
	 */
	// tpl->InstanceTemplate()->Set(String::NewFromUtf8(isolate, "participant"), Null(isolate));
	
	/**
	 * The list of methods included in the JavaScript object prototype are
	 * derived from an appropriate counterpart in \c DDS::Publisher:
	 * - \c createDataWriter() - \c DDS::Publisher::create_datawriter()
	 * - \c getDefaultDataWriterQos() - \c DDS::Publisher::get_default_datawriter_qos()
	 */
	NODE_SET_PROTOTYPE_METHOD(tpl, "createDataWriter", PublisherWrap::CreateDataWriter);
	NODE_SET_PROTOTYPE_METHOD(tpl, "getDefaultDataWriterQos", PublisherWrap::GetDefaultDataWriterQos);

    auto ctorFun = tpl->GetFunction(isolate->GetCurrentContext()).ToLocalChecked();
    PublisherWrap::constructor.Reset(isolate, ctorFun);
    
	exports->Set(
		isolate->GetCurrentContext(),
		String::NewFromUtf8(isolate, "Publisher"),
		ctorFun
	).Check();
}


PublisherWrap::PublisherWrap()
: m_thePublisher(NULL)
{
}


PublisherWrap::~PublisherWrap()
{
	m_thePublisher = NULL;
}


void PublisherWrap::New(FunctionCallbackInfo<Value> const& args)
{
	Isolate *isolate = Isolate::GetCurrent();

	if (nullptr == isolate)
	{
		return;
	}

	Local< Context > ctx = isolate->GetCurrentContext();
	HandleScope scope(isolate);

	if (args.Length() < 1)
	{
		isolate->ThrowException(
			Exception::TypeError(
				String::NewFromUtf8(
					isolate,
					"Not enough arguments for Publisher constructor."
				)
			)
		);
		return;
	}

	if (!args[0]->IsObject())
	{
		isolate->ThrowException(
			Exception::TypeError(
				String::NewFromUtf8(
					isolate,
					"No participant object passed to Publisher constructor."
				)
			)
		);
		return;
	}

	auto objectMaybe = args[0]->ToObject(ctx);
	if (objectMaybe.IsEmpty())
	{
		// Pending exception must have held up the assignment
		return;		
	}

	Local< Object > participObj = objectMaybe.ToLocalChecked();
	if
	(
		(participObj->InternalFieldCount() < 2) ||
		(nullptr == participObj->GetAlignedPointerFromInternalField(1))
	)
	{
		isolate->ThrowException(
			Exception::TypeError(
				String::NewFromUtf8(
					isolate,
					"Invalid participant object passed to Publisher "
					"constructor."
				)
			)
		);
		return;
	}

	if (args.IsConstructCall())
	{
		Maybe< bool > setResult = args.This()->Set(
			isolate->GetCurrentContext(),
			String::NewFromUtf8(isolate, "participant"),
			participObj
		);
		if (!setResult.FromMaybe(false))
		{
			// Pending exception/termination
			return;
		}
		DomainParticipant *particip = reinterpret_cast< DomainParticipant* >(
			participObj->GetAlignedPointerFromInternalField(1)
		);
		PublisherWrap *obj = new PublisherWrap();
        // --------------------------------------------------------------------
		// At the moment, this DDS publisher wrapper does not support 
        // configuring its Quality of Service (QoS) or configuring
        // listeners.
        // --------------------------------------------------------------------
		obj->m_thePublisher = particip->create_publisher(DDS::PUBLISHER_QOS_DEFAULT, NULL, 0);
		args.This()->SetAlignedPointerInInternalField(1, obj->m_thePublisher);
		obj->Wrap(args.This());
		args.GetReturnValue().Set(args.This());
	}
	else
	{
		unsigned argc = 3u;
		Local<Value> argv[] = {
			args[0],
			Undefined(isolate),
			Undefined(isolate)
		};
		if (args.Length() > 2) argv[2] = args[2]; else argc--;
		if (args.Length() > 1) argv[1] = args[1]; else argc--;

		Local<Function> cons = Local<Function>::New(isolate, PublisherWrap::constructor);
		MaybeLocal< Object > resultMaybe = cons->NewInstance(isolate->GetCurrentContext(), argc, argv);
		if (resultMaybe.IsEmpty())
		{
			isolate->ThrowException(
				Exception::Error(
					String::NewFromUtf8(
						isolate,
						"Could not create instance of Publisher."
					)
				)
			);
			return;
		}
		args.GetReturnValue().Set(resultMaybe.ToLocalChecked());
	}
}


void PublisherWrap::CreateDataWriter(FunctionCallbackInfo<Value> const& args)
{
	Isolate *isolate = Isolate::GetCurrent();
	HandleScope scope(isolate);
	Local< Context > ctx = isolate->GetCurrentContext();

	if (args.Length() < 1)
	{
		isolate->ThrowException(Exception::TypeError(String::NewFromUtf8(isolate, "Not enough arguments to the createDataWriter() method call.")));
		return;
	}

	unsigned argc = 3;
	Local<Value> argv[] = {
		args.This(),
		Undefined(isolate),
		Undefined(isolate)
	};

	if (args.Length() > 2) argv[2] = args[2]; else argc--;
	if (args.Length() > 1) argv[1] = args[1]; else argc--;
	
	MaybeLocal< Object > topicMaybe = args[0]->ToObject(ctx);
	if (topicMaybe.IsEmpty())
	{
		isolate->ThrowException(Exception::TypeError(String::NewFromUtf8(isolate, "Invalid topic argument passed to createDataWriter()")));
		return;
	}
	Local<Object> topicObj = topicMaybe.FromMaybe(Local< Object >());
	MaybeLocal< Value > fieldMaybe = topicObj->Get(ctx, String::NewFromUtf8(isolate, "newDataWriter"));
	Local< Value > fieldVal;
	if (fieldMaybe.IsEmpty() || !(fieldVal = fieldMaybe.FromMaybe(Local< Value >()))->IsFunction())
	{
		isolate->ThrowException(Exception::TypeError(String::NewFromUtf8(isolate, "Invalid topic argument passed to createDataWriter()")));
		return;
	}
	/**
	 * Instead of calling the \c DDS::Publisher::create_datawriter() 
	 * method directly, \c CreateDataWriter() relies on a factory object
	 * passed in the \c createDataWriter() call. This factory object is generated by the IDL
	 * compiler and is available to the JavaScript script. Doing this reconciles
	 * the difference that exists between the object wrapping pattern of Node.js
	 * and the DDS API mechanics.
	 */
	Local<Function> dwConstructor = fieldVal.As<Function>();
	MaybeLocal< Value > resultMaybe = dwConstructor->Call(ctx, topicObj, argc, argv);
	if (resultMaybe.IsEmpty())
	{
		isolate->ThrowException(Exception::Error(String::NewFromUtf8(isolate, "Could not create DataWriter instance.")));
		return;
	}
	args.GetReturnValue().Set(resultMaybe.FromMaybe(Local< Value >()));
}


void PublisherWrap::GetDefaultDataWriterQos(FunctionCallbackInfo<Value> const& args)
{
	Isolate *isolate = Isolate::GetCurrent();
	Local< Context > ctx = isolate->GetCurrentContext();
	HandleScope scope(isolate);
	ReturnCode_t ddsRetCode = DDS::RETCODE_OK;

	PublisherWrap *me = ObjectWrap::Unwrap<PublisherWrap>(args.This());
	DataWriterQos defaultDwQos;
	ddsRetCode = me->m_thePublisher->get_default_datawriter_qos(&defaultDwQos);
	if (ddsRetCode != DDS::RETCODE_OK)
	{
		stringstream errorMsg;
		errorMsg << "DDS problem while acquiring default DataWriter QoS:" << DDS_error(ddsRetCode);
		isolate->ThrowException(Exception::Error(String::NewFromUtf8(isolate, errorMsg.str().c_str())));
		return;
	}

	args.GetReturnValue().Set(DDS::DataWriterQosField::FromCppToJsValue(defaultDwQos));
}


} // end namespace DdsJs
