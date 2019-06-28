/**
 * \file DomainParticipantWrap.cpp
 * \brief Contains the implementation for the \c DomainParticipantWrap class.
 * \author Rolando J. Nieves
 * \date 2014-07-28 16:06:08
 */
#include <arpa/inet.h>
#include <cstring>
#include <sstream>
#include "ddsjs_base.hh"
#include "DomainParticipantWrap.hh"
#include "PublisherWrap.hh"
#include "SubscriberWrap.hh"

using std::stringstream;
using v8::Object;
using v8::Local;
using v8::FunctionTemplate;
using v8::String;
using v8::Persistent;
using v8::Function;
using v8::Value;
using v8::Exception;
using v8::Number;
using v8::HandleScope;
using v8::Undefined;
using v8::Null;
using v8::Isolate;
using v8::FunctionCallbackInfo;
using v8::Primitive;
using v8::PropertyCallbackInfo;
using v8::MaybeLocal;
using v8::Context;
using v8::Maybe;
using node::ObjectWrap;
using DDS::DomainParticipantFactory;
using DDS::DomainId_t;
using DDS::DomainParticipantQos;
using DDS::ReturnCode_t;
using DDS::InstanceHandleSeq;
using DDS::ParticipantBuiltinTopicData;
using DDS::InstanceHandle_t;

namespace DdsJs {

Persistent<Function> DomainParticipantWrap::constructor;

void DomainParticipantWrap::Init(Local<Object> exports)
{
    Isolate *isolate = Isolate::GetCurrent();
    
    Local<FunctionTemplate> ctorTmpl = FunctionTemplate::New(
        isolate, 
        DomainParticipantWrap::New
    );
    ctorTmpl->SetClassName(String::NewFromUtf8(isolate, "DomainParticipant"));
    ctorTmpl->InstanceTemplate()->SetInternalFieldCount(2);
    
    /**
     * The list of methods included in the JavaScript object prototype are
     * derived, for the most part, from an appropriate counterpart in 
     * \c DDS::DomainParticipant:
     * - \c createPublisher() - \c DDS::DomainParticipant::create_publisher()
     * - \c createSubscriber() - \c DDS::DomainParticipant::create_subscriber()
     * - \c createTopic() - \c DDS::DomainParticipant::create_topic()
     * - \c getDiscoveredParticipants() - \c DDS::DomainParticipant::get_discovered_participants()
     * - \c getDiscoveredParticipantData() - \c DDS::DomainParticipant::get_discovered_participant_data()
     * - \c deleteContainedEntities() - \c DDS::DomainParticipant::delete_contained_entities()
     * - \c addTransport() - \c DDS::DomainParticipant::add_transport()
     * - \c enable() - \c DDS::DomainParticipant::enable()
     * - \c getInstanceHandle() - \c DDS::DomainParticipant::get_instance_handle()
     * - \c ignoreParticipant() - \c DDS::DomainParticipant::ignore_participant()
     */
    NODE_SET_PROTOTYPE_METHOD(ctorTmpl, "createPublisher", DomainParticipantWrap::CreatePublisher);
    NODE_SET_PROTOTYPE_METHOD(ctorTmpl, "createSubscriber", DomainParticipantWrap::CreateSubscriber);
    NODE_SET_PROTOTYPE_METHOD(ctorTmpl, "createTopic", DomainParticipantWrap::CreateTopic);
    NODE_SET_PROTOTYPE_METHOD(ctorTmpl, "getDiscoveredParticipants", DomainParticipantWrap::GetDiscoveredParticipants);
    NODE_SET_PROTOTYPE_METHOD(ctorTmpl, "getDiscoveredParticipantData", DomainParticipantWrap::GetDiscoveredParticipantData);
    NODE_SET_PROTOTYPE_METHOD(ctorTmpl, "getDiscoveredParticipantNameAndIp", DomainParticipantWrap::GetDiscoveredParticipantNameAndIp);
    NODE_SET_PROTOTYPE_METHOD(ctorTmpl, "deleteContainedEntities", DomainParticipantWrap::DeleteContainedEntities);
    NODE_SET_PROTOTYPE_METHOD(ctorTmpl, "enable", DomainParticipantWrap::Enable);
    NODE_SET_PROTOTYPE_METHOD(ctorTmpl, "getInstanceHandle", DomainParticipantWrap::GetInstanceHandle);
    NODE_SET_PROTOTYPE_METHOD(ctorTmpl, "ignoreParticipant", DomainParticipantWrap::IgnoreParticipant);

    DomainParticipantWrap::constructor.Reset(isolate, ctorTmpl->GetFunction());
    
    Maybe< bool > setResult = exports->Set(
        isolate->GetCurrentContext(),
        String::NewFromUtf8(isolate, "DomainParticipant"),
        ctorTmpl->GetFunction()
    );

    if (!setResult.FromMaybe(false))
    {
        // TODO: Throw exception
    }
}


DomainParticipantWrap::DomainParticipantWrap()
: m_theParticipant(NULL)
{
}


DomainParticipantWrap::~DomainParticipantWrap()
{
    if (m_theParticipant != NULL)
    {
        /**
         * In addition to resetting internal fields, the destructor for
         * \c DomainParticipantWrap attempts to clean up the underlying
         * C++ object tree created by the CoreDX library.
         */
        m_theParticipant->delete_contained_entities();
        DomainParticipantFactory::get_instance()->delete_participant(m_theParticipant);
        m_theParticipant = NULL;
    }
}


void DomainParticipantWrap::New(FunctionCallbackInfo<Value> const& args)
{
    Isolate *isolate = Isolate::GetCurrent();
    Local< Context > ctx = isolate->GetCurrentContext();
    HandleScope scope(isolate);

    if (args.Length() < 1)
    {
        isolate->ThrowException(
            Exception::TypeError(
                String::NewFromUtf8(
                    isolate, 
                    "Not enough arguments in DomainParticipant constructor."
                )
            )
        );
        return;
    }

    if (!args[0]->IsNumber())
    {
        isolate->ThrowException(
            Exception::TypeError(
                String::NewFromUtf8(
                    isolate, 
                    "Domain ID must be a number."
                )
            )
        );
        return;
    }

    if (args.IsConstructCall())
    {
        DomainParticipantWrap *obj = new DomainParticipantWrap();
        DomainParticipantQos dpQos;
        DomainParticipantFactory::get_instance()->get_default_participant_qos(&dpQos);

        if ((args.Length() > 1) && !args[1]->IsNull())
        {
            // -----------------------------------------------------------------------------
            // At the moment, the only arguments supported on DomainParticipant construction
            // are the domain ID and optionally a Quality of Service (QoS) specification.
            // -----------------------------------------------------------------------------
            if (!::DDS::DomainParticipantQosField::FromJsValueToCpp(args[1], dpQos))
            {
                isolate->ThrowException(
                    Exception::Error(
                        String::NewFromUtf8(
                            isolate, 
                            "Invalid QoS object passed to DomainParticipant constructor."
                        )
                    )
                );
                delete obj;
                obj = NULL;
                return;
            }
        }
        obj->m_theParticipant = DomainParticipantFactory::get_instance()->create_participant(
            static_cast<DomainId_t>(args[0]->NumberValue()),
            dpQos,
            NULL,
            0
        );

        obj->Wrap(args.This());
        args.This()->SetAlignedPointerInInternalField(1, obj->m_theParticipant);
        Maybe< bool > defineResult = args.This()->DefineOwnProperty(
            ctx, 
            String::NewFromUtf8(
                isolate, 
                "domainId"
            ), 
            Number::New(
                isolate, 
                args[0]->NumberValue()
            ), 
            ::v8::ReadOnly
        );
        if (!defineResult.FromMaybe(false))
        {
            // TODO: Throw exception.
        }
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
        if (args.Length() > 2)
        {
            argv[2] = args[2];
        }
        else
        {
            argc--;
        }
        if (args.Length() > 1)
        {
            argv[1] = args[1];
        }
        else
        {
            argc--;
        }
        Local<Function> cons = Local<Function>::New(isolate, constructor);
        MaybeLocal< Object > resultMaybe = cons->NewInstance(
            isolate->GetCurrentContext(), 
            argc, 
            argv
        );
        if (resultMaybe.IsEmpty())
        {
            isolate->ThrowException(
                Exception::Error(
                    String::NewFromUtf8(
                        isolate, 
                        "Could not create participant instance."
                    )
                )
            );
            return;
        }
        
        args.GetReturnValue().Set(resultMaybe.FromMaybe(Local< Object >()));
    }
}


void DomainParticipantWrap::CreatePublisher(FunctionCallbackInfo<Value> const& args)
{
    Isolate *isolate = Isolate::GetCurrent();
    HandleScope scope(isolate);
    unsigned argc = 3u;

    Local<Value> argv[] = {
        args.This(),
        Undefined(isolate),
        Undefined(isolate)
    };

    if (args.Length() > 1)
    {
        argv[2] = args[1];
    }
    else
    {
        argc--;
    }
    
    if (args.Length() > 0)
    {
        argv[1] = args[0];
    }
    else
    {
        argc--;
    }
    
    /**
     * Instead of calling the \c DDS::DomainParticipant::create_publisher() 
     * method directly, \c CreatePublisher() relies on the constructor object
     * created by the \c PublisherWrap class, thereby reconciling the differences
     * that exist between the object wrapping pattern of Node.js and API
     * mechanisms of DDS.
     */
    Local<Function> pubCons = Local<Function>::New(
        isolate, 
        PublisherWrap::constructor
    );
    MaybeLocal< Object > resultMaybe = pubCons->NewInstance(
        isolate->GetCurrentContext(), 
        argc, 
        argv
    );
    if (resultMaybe.IsEmpty())
    {
        isolate->ThrowException(
            Exception::Error(
                String::NewFromUtf8(
                    isolate, 
                    "Could not create publisher instance."
                )
            )
        );
        return;
    }
    args.GetReturnValue().Set(resultMaybe.FromMaybe(Local< Object >()));
}


void DomainParticipantWrap::CreateSubscriber(FunctionCallbackInfo<Value> const& args)
{
    Isolate *isolate = Isolate::GetCurrent();
    HandleScope scope(isolate);
    unsigned argc = 3u;

    Local<Value> argv[] = {
        args.This(),
        Undefined(isolate),
        Undefined(isolate)
    };

    if (args.Length() > 1)
    {
        argv[2] = args[1];
    }
    else
    {
        argc--;
    }
    
    if (args.Length() > 0)
    {
        argv[1] = args[0];
    }
    else
    {
        argc--;
    }
    
    /**
     * Instead of calling the \c DDS::DomainParticipant::create_subscriber() 
     * method directly, \c CreateSubscriber() relies on the constructor object
     * created by the \c SubscriberWrap class, thereby reconciling the differences
     * that exist between the object wrapping pattern of Node.js and API
     * mechanisms of DDS.
     */
    Local<Function> subCons = Local<Function>::New(
        isolate, 
        SubscriberWrap::constructor
    );
    MaybeLocal< Object > resultMaybe = subCons->NewInstance(
        isolate->GetCurrentContext(), 
        argc, 
        argv
    );
    if (resultMaybe.IsEmpty())
    {
        isolate->ThrowException(
            Exception::Error(
                String::NewFromUtf8(
                    isolate, 
                    "Could not create subscriber instance."
                )
            )
        );
        return;
    }
    
    args.GetReturnValue().Set(resultMaybe.FromMaybe(Local< Object >()));
}


void DomainParticipantWrap::CreateTopic(FunctionCallbackInfo<Value> const& args)
{
    Isolate *isolate = Isolate::GetCurrent();
    HandleScope scope(isolate);
    unsigned argc = 3u;

    if (args.Length() < 1)
    {
        isolate->ThrowException(
            Exception::Error(
                String::NewFromUtf8(
                    isolate, 
                    "Not enough arguments to createTopic() method call."
                )
            )
        );
        return;
    }

    if (!args[0]->IsFunction())
    {
        isolate->ThrowException(
            Exception::Error(
                String::NewFromUtf8(
                    isolate, 
                    "First argument to createTopic() must be the topic class."
                )
            )
        );
        return;
    }

    Local<Value> argv[] = {
        args.This(),
        Undefined(isolate),
        Undefined(isolate)
    };

    if (args.Length() > 2)
    {
        argv[2] = args[2];
    }
    else
    {
        argc--;
    }
    
    if (args.Length() > 1)
    {
        argv[1] = args[1];
    }
    else
    {
        argc--;
    }
    
    /**
     * Instead of calling the \c DDS::DomainParticipant::create_topic() method
     * directly, \c CreateTopic() relies on a factory object passed in to the
     * \c createTopic() call. This factory object is generated by the IDL
     * compiler and is available to the JavaScript script. Doing this reconciles
     * the difference that exists between the object wrapping pattern of Node.js
     * and the DDS API mechanics.
     */
    Local<Function> topicFactory = Local<Function>::New(
        isolate, 
        Local<Function>::Cast(args[0])
    );
    MaybeLocal< Object > resultMaybe = topicFactory->NewInstance(
        isolate->GetCurrentContext(), 
        argc, 
        argv
    );
    if (resultMaybe.IsEmpty())
    {
        isolate->ThrowException(
            Exception::Error(
                String::NewFromUtf8(
                    isolate,
                    "Could not create topic instance."
                )
            )
        );
        return;
    }
    
    args.GetReturnValue().Set(resultMaybe.FromMaybe(Local< Object >()));
}


void DomainParticipantWrap::GetDiscoveredParticipants(FunctionCallbackInfo<Value> const& args)
{
    Isolate *isolate = Isolate::GetCurrent();
    HandleScope scope(isolate);
    InstanceHandleSeq dpHandles;
    ReturnCode_t ddsRetCode;

    DomainParticipantWrap *me = ObjectWrap::Unwrap<DomainParticipantWrap>(args.This());
    ddsRetCode = me->m_theParticipant->get_discovered_participants(&dpHandles);
    if (DDS::RETCODE_OK == ddsRetCode)
    {
        args.GetReturnValue().Set(
            UnboundedSeqField< ::DdsJs::InstanceHandleField >::FromCppToJsValue(
                dpHandles
            )
        );
    }
    else
    {
        args.GetReturnValue().Set(Null(isolate));
    }
}


void DomainParticipantWrap::GetDiscoveredParticipantData(FunctionCallbackInfo<Value> const& args)
{
    Isolate *isolate = Isolate::GetCurrent();
    HandleScope scope(isolate);
    ParticipantBuiltinTopicData dpInfo;
    ReturnCode_t ddsRetCode;
    InstanceHandle_t dpHandle;

    if ((args.Length() < 1) || !InstanceHandleField::FromJsValueToCpp(args[0], dpHandle))
    {
        isolate->ThrowException(
            Exception::Error(
                String::NewFromUtf8(
                    isolate, 
                    "DomainParticipant instance handle must be specified "
                    "when calling getDiscoveredParticipantData()."
                )
            )
        );
        return;
    }

    DomainParticipantWrap *me = ObjectWrap::Unwrap<DomainParticipantWrap>(args.This());

    ddsRetCode = me->m_theParticipant->get_discovered_participant_data(
        &dpInfo, 
        dpHandle
    );
    if (DDS::RETCODE_OK == ddsRetCode)
    {
        args.GetReturnValue().Set(
            ::DDS::ParticipantBuiltinTopicDataField::FromCppToJsValue(
                dpInfo
            )
        );
    }
    else
    {
        args.GetReturnValue().Set(Null(isolate));
    }
}


void DomainParticipantWrap::GetDiscoveredParticipantNameAndIp(FunctionCallbackInfo<Value> const& args)
{
    Isolate *isolate = Isolate::GetCurrent();
    HandleScope scope(isolate);
    ParticipantBuiltinTopicData dpInfo;
    ReturnCode_t ddsRetCode;
    InstanceHandle_t dpHandle;
    Local<Object> result(Object::New(isolate));
    char ipAddrText[20];
    Maybe< bool > setResult = ::v8::Nothing< bool >();

    memset(ipAddrText, 0x00, sizeof(ipAddrText));

    if ((args.Length() < 1) || !InstanceHandleField::FromJsValueToCpp(args[0], dpHandle))
    {
        isolate->ThrowException(
            Exception::Error(
                String::NewFromUtf8(
                    isolate, 
                    "DomainParticipant instance handle must be specified "
                    "when calling getDiscoveredParticipantData()."
                )
            )
        );
        return;
    }

    DomainParticipantWrap *me = ObjectWrap::Unwrap<DomainParticipantWrap>(args.This());

    ddsRetCode = me->m_theParticipant->get_discovered_participant_data(&dpInfo, dpHandle);
    if ((DDS::RETCODE_OK == ddsRetCode) && (dpInfo.entity_name != NULL))
    {
        /**
         * CoreDX embeds a participant name, and its corresponding address
         * information, in the participant data object retrieved using
         * \c DDS::DomainParticipant::get_discovered_participant_data() method.
         * This class method takes advantage of this CoreDX-exclusive feature
         * and parses out the information for JavaScript scripts.
         */
        setResult = result->Set(
            isolate->GetCurrentContext(), 
            String::NewFromUtf8(isolate, "name"), 
            String::NewFromUtf8(isolate, dpInfo.entity_name)
        );
        if (!setResult.FromMaybe(false))
        {
            // TODO: Throw exception.
        }
        struct in_addr theAddr;
        theAddr.s_addr = dpInfo.key.value[0];
        if (inet_ntop(AF_INET, &theAddr, ipAddrText, sizeof(ipAddrText)) == NULL)
        {
            strcpy(ipAddrText, "Unknown");
        }
        setResult = result->Set(
            isolate->GetCurrentContext(), 
            String::NewFromUtf8(isolate, "ipAddress"), 
            String::NewFromUtf8(isolate, ipAddrText)
        );
        if (!setResult.FromMaybe(false))
        {
            // TODO: Throw exception.
        }
        args.GetReturnValue().Set(result);
    }
    else
    {
        args.GetReturnValue().Set(Null(isolate));
    }
}


void DomainParticipantWrap::DeleteContainedEntities(FunctionCallbackInfo<Value> const& args)
{
    Isolate *isolate = Isolate::GetCurrent();
    HandleScope scope(isolate);
    ReturnCode_t ddsRetCode = DDS::RETCODE_OK;
    
    DomainParticipantWrap *me = ObjectWrap::Unwrap<DomainParticipantWrap>(args.This());
    
    ddsRetCode = me->m_theParticipant->delete_contained_entities();
    if (ddsRetCode != DDS::RETCODE_OK)
    {
        stringstream errorMsg;
        errorMsg << "Could not delete contained entities: " << DDS_error(ddsRetCode);
        isolate->ThrowException(
            Exception::Error(
                String::NewFromUtf8(
                    isolate, 
                    errorMsg.str().c_str()
                )
            )
        );
    }
}


void DomainParticipantWrap::Enable(FunctionCallbackInfo< Value > const& args)
{
    Isolate *isolate = Isolate::GetCurrent();
    HandleScope scope(isolate);
    DomainParticipantWrap *obj = ObjectWrap::Unwrap< DomainParticipantWrap >(args.This());
    DDS::ReturnCode_t ddsRetCode = ::DDS::RETCODE_OK;
    
    ddsRetCode = obj->m_theParticipant->enable();
    if (ddsRetCode != ::DDS::RETCODE_OK)
    {
        stringstream errorMsg;
        errorMsg << "Could not enable DomainParticipant:" << DDS_error(ddsRetCode);
        isolate->ThrowException(
            Exception::Error(
                String::NewFromUtf8(
                    isolate, 
                    errorMsg.str().c_str()
                )
            )
        );
    }
}


void DomainParticipantWrap::GetInstanceHandle(FunctionCallbackInfo< Value > const& args)
{
    Isolate *isolate = Isolate::GetCurrent();
    HandleScope scope(isolate);
    DomainParticipantWrap *obj = ObjectWrap::Unwrap< DomainParticipantWrap >(args.This());
    InstanceHandle_t dpHandle;
    
    dpHandle = obj->m_theParticipant->get_instance_handle();
    args.GetReturnValue().Set(InstanceHandleField::FromCppToJsValue(dpHandle));
}


void DomainParticipantWrap::IgnoreParticipant(FunctionCallbackInfo< Value > const& args)
{
    Isolate *isolate = Isolate::GetCurrent();
    HandleScope scope(isolate);
    DomainParticipantWrap *obj = ObjectWrap::Unwrap< DomainParticipantWrap >(args.This());
    InstanceHandle_t dpHandle;
    ReturnCode_t ddsRetCode = ::DDS::RETCODE_OK;
    
    if (args.Length() < 1)
    {
        isolate->ThrowException(
            Exception::Error(
                String::NewFromUtf8(
                    isolate, 
                    "Not enough arguments passed to ignoreParticipant()."
                )
            )
        );
        return;
    }
    
    if (InstanceHandleField::FromJsValueToCpp(args[0], dpHandle) != true)
    {
        isolate->ThrowException(
            Exception::Error(
                String::NewFromUtf8(
                    isolate, 
                    "Invalid argument passed to ignoreParticipant()."
                )
            )
        );
        return;
    }
    
    ddsRetCode = obj->m_theParticipant->ignore_participant(dpHandle);
    if (ddsRetCode != ::DDS::RETCODE_OK)
    {
        stringstream errorMsg;
        errorMsg << "Could not ignore participant:" << DDS_error(ddsRetCode);
        isolate->ThrowException(
            Exception::Error(
                String::NewFromUtf8(
                    isolate, 
                    errorMsg.str().c_str()
                )
            )
        );
    }
}

} // end namespace DdsJs
