/**
 * \file SubscriberWrap.cpp
 * \brief Contains the implementation for the \c SubscriberWrap class.
 * \date 2014-10-21 15:55:15
 * \author Rolando J. Nieves
 */
#include <sstream>
#include "SubscriberWrap.hh"
#include "ddsjs_base.hh"

using std::stringstream;
using v8::Persistent;
using v8::Function;
using v8::Object;
using v8::Local;
using v8::FunctionTemplate;
using v8::String;
using v8::Value;
using v8::FunctionCallbackInfo;
using v8::Exception;
using v8::HandleScope;
using v8::Undefined;
using v8::Null;
using v8::Context;
using v8::Undefined;
using v8::Isolate;
using v8::MaybeLocal;
using v8::Maybe;
using node::ObjectWrap;
using DDS::DomainParticipant;
using DDS::DataReaderQos;
using DDS::ReturnCode_t;

namespace DdsJs {

Persistent<Function> SubscriberWrap::constructor;

void SubscriberWrap::Init(Local<Object> exports)
{
	Isolate *isolate = Isolate::GetCurrent();
	
	// Prepare constructor template
	Local<FunctionTemplate> tpl = FunctionTemplate::New(isolate, SubscriberWrap::New);
	tpl->SetClassName(String::NewFromUtf8(isolate, "Subscriber"));
	tpl->InstanceTemplate()->SetInternalFieldCount(2);
	
	/**
	 * \c Subscriber instances created by this class are given a prototype that
	 * points to the \c Participant instance that owns them. This property
	 * is called \c participant.
	 */
	// tpl->InstanceTemplate()->Set(String::NewFromUtf8(isolate, "participant"), Null(isolate));
	
	/**
	 * The list of methods included in the JavaScript object prototype are
	 * derived from an appropriate counterpart in \c DDS::Subscriber:
	 * - \c createDataReader() - \c DDS::Subscriber::create_datareader()
	 * - \c getDefaultDataReaderQos() - \c DDS::Subscriber::get_default_datareader_qos()
	 */
	NODE_SET_PROTOTYPE_METHOD(tpl, "createDataReader", SubscriberWrap::CreateDataReader);
	NODE_SET_PROTOTYPE_METHOD(tpl, "getDefaultDataReaderQos", SubscriberWrap::GetDefaultDataReaderQos);
	
	SubscriberWrap::constructor.Reset(isolate, tpl->GetFunction());

	Maybe< bool > setResult = exports->Set(
		isolate->GetCurrentContext(),
		String::NewFromUtf8(isolate, "Subscriber"),
		tpl->GetFunction()
	);

	if (!setResult.FromMaybe(false))
	{
		// TODO: Throw exception
	}
}


SubscriberWrap::SubscriberWrap()
: m_theSubscriber(nullptr)
{
}


SubscriberWrap::~SubscriberWrap()
{
	m_theSubscriber = nullptr;
}


void SubscriberWrap::New(FunctionCallbackInfo<Value> const& args)
{
	Isolate *isolate = Isolate::GetCurrent();
	Local< Context > ctx = isolate->GetCurrentContext();
	HandleScope scope(isolate);

	if (args.Length() < 1)
	{
		isolate->ThrowException(Exception::TypeError(String::NewFromUtf8(isolate, "Not enough arguments in Subscriber constructor.")));
		return;
	}

	MaybeLocal< Object > participMaybe = args[0]->ToObject(ctx);
	Local< Object > participObj;
	DomainParticipant *particip = nullptr;
	
	if (participMaybe.IsEmpty() ||
		((participObj = participMaybe.FromMaybe(Local< Object >()))->InternalFieldCount() < 2) ||
		(particip = reinterpret_cast<DomainParticipant*>(participObj->GetAlignedPointerFromInternalField(1))) == nullptr)
	{
		isolate->ThrowException(Exception::TypeError(String::NewFromUtf8(isolate, "Invalid participant object passed to Subscriber constructor.")));
		return;
	}

	if (args.IsConstructCall())
	{
		Maybe< bool > setResult = args.This()->Set(
			ctx,
			String::NewFromUtf8(isolate, "participant"),
			args[0]
		);
		if (!setResult.FromMaybe(false))
		{
			// TODO: Throw exception.
		}
		SubscriberWrap *obj = new SubscriberWrap();
		obj->m_theSubscriber = particip->create_subscriber(DDS::SUBSCRIBER_QOS_DEFAULT, nullptr, 0);
		args.This()->SetAlignedPointerInInternalField(1, obj->m_theSubscriber);
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

		Local< Function > ctor = Local< Function >::New(isolate, SubscriberWrap::constructor);
		MaybeLocal< Object > resultMaybe = ctor->NewInstance(ctx, argc, argv);
		if (resultMaybe.IsEmpty())
		{
			isolate->ThrowException(Exception::Error(String::NewFromUtf8(isolate, "Could not create subscriber instance.")));
			return;
		}
		args.GetReturnValue().Set(resultMaybe.FromMaybe(Local< Object >()));
	}
}


void SubscriberWrap::CreateDataReader(FunctionCallbackInfo<Value> const& args)
{
	Isolate *isolate = Isolate::GetCurrent();
	Local< Context > ctx = isolate->GetCurrentContext();
	HandleScope scope(isolate);

	if (args.Length() < 1)
	{
		isolate->ThrowException(Exception::TypeError(String::NewFromUtf8(isolate, "Not enough arguments to the createDataReader() method call.")));
		return;
	}

	unsigned int argc = 3u;
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
		isolate->ThrowException(Exception::TypeError(String::NewFromUtf8(isolate, "Invalid topic object passed to createDataReader().")));
		return;
	}
	Local<Object> topicObj = topicMaybe.FromMaybe(Local< Object >());
	MaybeLocal< Value > fieldMaybe = topicObj->Get(ctx, String::NewFromUtf8(isolate, "newDataReader"));
	if (fieldMaybe.IsEmpty())
	{
		isolate->ThrowException(Exception::Error(String::NewFromUtf8(isolate, "Could not find DataReader constructor function.")));
		return;
	}
	Local< Value > fieldValue = fieldMaybe.FromMaybe(Local< Value >());
	if (!fieldValue->IsFunction())
	{
		isolate->ThrowException(Exception::Error(String::NewFromUtf8(isolate, "Invalid DataReader constructor field in topic.")));
		return;
	}
	/**
	 * Instead of calling the \c DDS::Subscriber::create_datareader() 
	 * method directly, \c CreateDataReader() relies on a factory object
	 * passed in the \c createDataReader() call. This factory object is generated by the IDL
	 * compiler and is available to the JavaScript script. Doing this reconciles
	 * the difference that exists between the object wrapping pattern of Node.js
	 * and the DDS API mechanics.
	 */
	Local<Function> drConstructor = fieldValue.As< Function >();
	
	fieldMaybe = drConstructor->Call(ctx, topicObj, argc, argv);
	if (fieldMaybe.IsEmpty())
	{
		isolate->ThrowException(Exception::Error(String::NewFromUtf8(isolate, "Could not create DataReader.")));
		return;
	}
	args.GetReturnValue().Set(fieldMaybe.FromMaybe(Local< Value >()));
}

void SubscriberWrap::GetDefaultDataReaderQos(FunctionCallbackInfo<Value> const& args)
{
	Isolate *isolate = Isolate::GetCurrent();
	Local< Context > ctx = isolate->GetCurrentContext();
	HandleScope scope(isolate);
	ReturnCode_t ddsRetCode = DDS::RETCODE_OK;

	SubscriberWrap *me = ObjectWrap::Unwrap<SubscriberWrap>(args.This());
	DataReaderQos defaultDrQos;
	ddsRetCode = me->m_theSubscriber->get_default_datareader_qos(&defaultDrQos);
	if (ddsRetCode != DDS::RETCODE_OK)
	{
		stringstream errorMsg;
		errorMsg << "DDS problem while acquiring default DataReader QoS:" << DDS_error(ddsRetCode);
		isolate->ThrowException(Exception::Error(String::NewFromUtf8(isolate, errorMsg.str().c_str())));
		return;
	}

	args.GetReturnValue().Set(DDS::DataReaderQosField::FromCppToJsValue(defaultDrQos));
}

} // end namespace DdsJs
