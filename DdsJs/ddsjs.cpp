/**
 * \file ddsjs.cpp
 * \brief Contains the top-level implementation of the common portion of the Node.JS module.
 * \date 2014-09-17
 * \author Rolando J. Nieves
 */

#include <sstream>
#include <node.h>

#include "ddsjs.hh"
#include "DomainParticipantWrap.hh"
#include "PublisherWrap.hh"
#include "SubscriberWrap.hh"

using std::stringstream;
using v8::Object;
using v8::Local;
using v8::String;
using v8::Value;
using v8::FunctionCallbackInfo;
using v8::HandleScope;
using v8::Isolate;
using v8::Undefined;
using v8::Null;
using v8::FunctionTemplate;
using v8::Exception;
using v8::Function;
using v8::Context;
using v8::MaybeLocal;
using DDS::DomainParticipantQos;
using DDS::DomainParticipantFactory;
using DDS::ReturnCode_t;
using DDS::DomainParticipantFactoryQos;

namespace DDS {

/*
 * Inclusion of C-based constant values in the DDS C++ namespace.
 */
const SampleRejectedStatusKind NOT_REJECTED = DDS_NOT_REJECTED;
const SampleRejectedStatusKind REJECTED_BY_INSTANCE_LIMIT = DDS_REJECTED_BY_INSTANCE_LIMIT;
const SampleRejectedStatusKind REJECTED_BY_SAMPLES_LIMIT = DDS_REJECTED_BY_SAMPLES_LIMIT;
const SampleRejectedStatusKind REJECTED_BY_SAMPLES_PER_INSTANCE_LIMIT = DDS_REJECTED_BY_SAMPLES_PER_INSTANCE_LIMIT;
const ReturnCode_t RETCODE_ILLEGAL_OPERATION = 12;
const int TIME_INVALID_SEC = -1;
const unsigned int TIME_INVALID_NSEC = 0xffffffff;
const QosPolicyId_t INVALID_QOS_POLICY_ID = 0;

} // end namespace DDS

namespace DdsJs {

/**
 * \brief Create a DomainParticipant instance.
 *
 * The \c CreateDomainParticipant() function is called whenever a Node.JS
 * JavaScript script calls DDS.createDomainParticipant() from the object 
 * exported by the built Node.JS module.
 * 
 * \param args {in} Contains the arguments included in the JavaScript call.
 */
void CreateDomainParticipant(FunctionCallbackInfo<Value> const& args)
{
	Isolate *isolate = Isolate::GetCurrent();
	HandleScope scope(isolate);

	if (args.Length() < 1)
	{
		isolate->ThrowException(Exception::TypeError(String::NewFromUtf8(isolate, "Not enough arguments to createDomainParticipant() call.")));
		return;
	}

	unsigned int argc = 3u;
	Local<Value> argv[] = {
		args[0],
		Undefined(isolate),
		Undefined(isolate)
	};
	if (args.Length() > 2) argv[2] = args[2]; else argc--;
	if (args.Length() > 1) argv[1] = args[1]; else argc--;

	Local< Function > ctor = Local< Function >::New(isolate, DomainParticipantWrap::constructor);

	args.GetReturnValue().Set(ctor->NewInstance(argc, argv));
}

/**
 * \brief Obtain a copy of the default DomainParticipant QoS
 *
 * The \c GetDefaintParticipantQos() function is called whenever a Node.JS
 * JavaScript script calls DDS.getDefaultParticipantQos() from the object
 * exported by the built Node.JS module.
 *
 * \param args {in} Contains the arguments included in the JavaScript call.
 */
void GetDefaultParticipantQos(FunctionCallbackInfo<Value> const& args)
{
	Isolate *isolate = Isolate::GetCurrent();
	HandleScope scope(isolate);
	DomainParticipantQos defaultDpQos;
	ReturnCode_t ddsRetCode = ::DDS::RETCODE_OK;

	ddsRetCode = DomainParticipantFactory::get_instance()->get_default_participant_qos(&defaultDpQos);
	if (::DDS::RETCODE_OK == ddsRetCode)
	{
		args.GetReturnValue().Set(::DDS::DomainParticipantQosField::FromCppToJsValue(defaultDpQos));
	}
	else
	{
		args.GetReturnValue().Set(Null(isolate));
	}
}


void GetDomainParticipantFactoryQos(FunctionCallbackInfo<Value> const& args)
{
    Isolate *isolate = Isolate::GetCurrent();
    HandleScope scope(isolate);
    DomainParticipantFactoryQos dpfQos;
    ReturnCode_t ddsRetCode = ::DDS::RETCODE_OK;
    
    ddsRetCode = DomainParticipantFactory::get_instance()->get_qos(dpfQos);
    if (::DDS::RETCODE_OK == ddsRetCode)
    {
        args.GetReturnValue().Set(::DDS::DomainParticipantFactoryQosField::FromCppToJsValue(dpfQos));
    }
    else
    {
        stringstream errorMsg;
        errorMsg << "Could not retrieve DomainParticipantFactory QoS:" << DDS_error(ddsRetCode);
        isolate->ThrowException(Exception::Error(String::NewFromUtf8(isolate, errorMsg.str().c_str())));
    }
}


void SetDomainParticipantFactoryQos(FunctionCallbackInfo<Value> const& args)
{
    Isolate *isolate = Isolate::GetCurrent();
    HandleScope scope(isolate);
    DomainParticipantFactoryQos dpfQos;
    ReturnCode_t ddsRetCode = ::DDS::RETCODE_OK;
    
    if (args.Length() < 1)
    {
        isolate->ThrowException(Exception::Error(String::NewFromUtf8(isolate, "Not enough arguments passed to setDomainParticipantFactoryQos()")));
        return;
    }
    
    MaybeLocal< Object > qosObjMaybe = args[0]->ToObject(isolate->GetCurrentContext());
    if (qosObjMaybe.IsEmpty())
    {
        isolate->ThrowException(Exception::Error(String::NewFromUtf8(isolate, "Invalid argument to setDomainParticipantFactoryQos()")));
        return;
    }
    
    Local< Object > qosObj = qosObjMaybe.FromMaybe(Local< Object >());
    if (!::DDS::DomainParticipantFactoryQosField::FromJsValueToCpp(qosObj, dpfQos))
    {
        isolate->ThrowException(Exception::Error(String::NewFromUtf8(isolate, "Invalid object passed to setDomainParticipantFactoryQos()")));
        return;
    }
    
    DDS::DomainParticipantFactory::get_instance()->set_qos(dpfQos);
}


void InitAll(Local<Object> exports)
{
	Isolate *isolate = Isolate::GetCurrent();
	Local< Context > ctx = isolate->GetCurrentContext();
	MaybeLocal< Value > fieldMaybe;
	Local< Value > fieldVal;
	MaybeLocal< Object > ddsMaybe;
	Local< Object > ddsObj;
	Local< String > ddsFieldName = String::NewFromUtf8(isolate, "DDS");
	
	::DDS::InitAll(exports);
	if ((fieldMaybe = exports->Get(ctx, ddsFieldName)).IsEmpty())
	{
		isolate->ThrowException(Exception::Error(String::NewFromUtf8(isolate, "Could not initialize DDS JS")));
		return;
	}
	if ((ddsMaybe = fieldMaybe.FromMaybe(Local< Value >())->ToObject(ctx)).IsEmpty())
	{
		isolate->ThrowException(Exception::Error(String::NewFromUtf8(isolate, "Could not initialize DDS JS")));
		return;
	}
	ddsObj = ddsMaybe.FromMaybe(Local< Object >());
	
	NODE_SET_METHOD(ddsObj, "createDomainParticipant", CreateDomainParticipant);
	NODE_SET_METHOD(ddsObj, "getDefaultParticipantQos", GetDefaultParticipantQos);
    NODE_SET_METHOD(ddsObj, "getDomainParticipantFactoryQos", GetDomainParticipantFactoryQos);
    NODE_SET_METHOD(ddsObj, "setDomainParticipantFactoryQos", SetDomainParticipantFactoryQos);

	DomainParticipantWrap::Init(ddsObj);
	PublisherWrap::Init(ddsObj);
	SubscriberWrap::Init(ddsObj);
}

}
