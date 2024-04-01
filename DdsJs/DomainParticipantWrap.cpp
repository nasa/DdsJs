/**
 * \file DomainParticipantWrap.cpp
 * \brief Contains the implementation for the \c DomainParticipantWrap class.
 * \author Rolando J. Nieves
 * \date 2014-07-28 16:06:08
 */

#include <DdsJs/PublisherQos.hh>
#include <DdsJs/PublisherWrap.hh>
#include <DdsJs/SubscriberQos.hh>
#include <DdsJs/SubscriberWrap.hh>
#include <DdsJs/TopicQos.hh>
#include <DdsJs/TopicWrap.hh>
#include <DdsJs/TypeSupportWrap.hh>


#include "DomainParticipantWrap.hh"

namespace DdsJs
{

const char *DomainParticipantWrap::MODNAME = "DDS";

const char *DomainParticipantWrap::NAME = "DomainParticipant";

Napi::Object
DomainParticipantWrap::Init(Napi::Env env, Napi::Object exports, ConstructorRegistry *ctorReg)
{
    /**
     * The list of methods included in the JavaScript object prototype are
     * derived, for the most part, from an appropriate counterpart in 
     * \c DDS::DomainParticipant:
     * - \c createPublisher() - \c DDS::DomainParticipant::create_publisher()
     * - \c createSubscriber() - \c DDS::DomainParticipant::create_subscriber()
     * - \c createTopic() - \c DDS::DomainParticipant::create_topic()
     * - \c getDefaultPublisherQos() - \c DDS::DomainParticipant::get_default_publisher_qos()
     * - \c getDiscoveredParticipants() - \c DDS::DomainParticipant::get_discovered_participants()
     * - \c getDiscoveredParticipantData() - \c DDS::DomainParticipant::get_discovered_participant_data()
     * - \c deleteContainedEntities() - \c DDS::DomainParticipant::delete_contained_entities()
     * - \c addTransport() - \c DDS::DomainParticipant::add_transport()
     * - \c enable() - \c DDS::DomainParticipant::enable()
     * - \c getInstanceHandle() - \c DDS::DomainParticipant::get_instance_handle()
     * - \c ignoreParticipant() - \c DDS::DomainParticipant::ignore_participant()
     */
    Napi::Function ctor_func = DefineClass(
        env,
        NAME,
        {
            InstanceMethod("createPublisher", &DomainParticipantWrap::CreatePublisher, napi_enumerable),
            InstanceMethod("createSubscriber", &DomainParticipantWrap::CreateSubscriber, napi_enumerable),
            InstanceMethod("createTopic", &DomainParticipantWrap::CreateTopic, napi_enumerable),
            InstanceMethod("getDefaultPublisherQos", &DomainParticipantWrap::GetDefaultPublisherQos, napi_enumerable),
            // InstanceMethod("deleteContainedEntities", &DomainParticipantWrap::DeleteContainedEntities),
            // InstanceMethod("enable", &DomainParticipantWrap::Enable),
            // InstanceMethod("getDiscoveredParticipantData", &DomainParticipantWrap::GetDiscoveredParticipantData),
            // InstanceMethod("getDiscoveredParticipantNameAndIp", &DomainParticipantWrap::GetDiscoveredParticipantNameAndIp),
            // InstanceMethod("getDiscoveredParticipants", &DomainParticipantWrap::GetDiscoveredParticipants),
            // InstanceMethod("getInstanceHandle", &DomainParticipantWrap::GetInstanceHandle),
            // InstanceMethod("ignoreParticipant", &DomainParticipantWrap::IgnoreParticipant)
        }
    );

    Napi::FunctionReference *ctor_ref = new Napi::FunctionReference();
    *ctor_ref = Napi::Persistent(ctor_func);
    ctorReg->setConstructorFor(DottedName({ MODNAME, NAME }), ctor_ref);

    exports.Set(NAME, ctor_func);
    return exports;
}

Napi::Object
DomainParticipantWrap::NewInstance(Napi::Env env, DDS::DomainParticipant* participant)
{
    Napi::EscapableHandleScope scope(env);
    Napi::External< DDS::DomainParticipant > participant_arg = Napi::External< DDS::DomainParticipant >::New(env, participant);
    Napi::FunctionReference *ctor_ref = env.GetInstanceData< ConstructorRegistry >()->getConstructorFor(DottedName({ MODNAME, NAME }));
    if (nullptr == ctor_ref)
    {
        throw Napi::Error::New(env, "Internal error: Constructor for DomainParticipant not available.");
    }

    Napi::Object obj = ctor_ref->New({ participant_arg });

    return scope.Escape(napi_value(obj)).ToObject();
}

DomainParticipantWrap::~DomainParticipantWrap()
{
    m_registeredTypes.clear();
    
    if (m_participant.valid())
    {
        // Will not throw ... we just checked with ".valid()"
        DDS::DomainParticipant *participant = m_participant.get("~DomainParticipantWrap");
        /**
         * In addition to resetting internal fields, the destructor for
         * \c DomainParticipantWrap attempts to clean up the underlying
         * C++ object tree created by the CoreDX library.
         */
        participant->delete_contained_entities();
        DDS::DomainParticipantFactory::get_instance()->delete_participant(participant);
        m_participant.reset(nullptr);
    }
}

DomainParticipantWrap::DomainParticipantWrap(Napi::CallbackInfo const& info):
    Napi::ObjectWrap< DomainParticipantWrap >(info),
    m_participant(NAME)
{
    // TODO: Once type tagging is implemented, check that too.
    if (!info[0].IsExternal())
    {
        throw Napi::Error::New(info.Env(), "DomainParticipantWrap::DomainParticipantWrap(): Invalid argument provided to DomainParticipant constructor.");
    }
    m_participant.reset(info[0].As< Napi::External< DDS::DomainParticipant > >().Data());
}


void
DomainParticipantWrap::rememberTypeAssoc(std::string const& typeName, std::weak_ptr< TypeSupportAssociations > assoc)
{
    m_registeredTypes.emplace(typeName, assoc);
}


std::string
DomainParticipantWrap::readerJsClassNameFor(std::string const& typeName) const
{
    std::string result;

    auto type_map_iter = m_registeredTypes.find(typeName);
    if ((type_map_iter != m_registeredTypes.end()) && !(*type_map_iter).second.expired())
    {
        std::shared_ptr< TypeSupportAssociations > assoc_ptr = (*type_map_iter).second.lock();
        result = assoc_ptr->readerJsClassName;
    }

    return result;
}


std::string
DomainParticipantWrap::writerJsClassNameFor(std::string const& typeName) const
{
    std::string result;

    auto type_map_iter = m_registeredTypes.find(typeName);
    if ((type_map_iter != m_registeredTypes.end()) && !(*type_map_iter).second.expired())
    {
        std::shared_ptr< TypeSupportAssociations > assoc_ptr = (*type_map_iter).second.lock();
        result = assoc_ptr->writerJsClassName;
    }
    
    return result;
}


Napi::Value
DomainParticipantWrap::CreatePublisher(Napi::CallbackInfo const& info)
{
    DDS::PublisherQos pub_qos;
    DDS::DomainParticipant *participant = m_participant.get(info.Env(), "CreatePublisher");

    participant->get_default_publisher_qos(pub_qos);

    switch(info.Length())
    {
        case 1:
            PublisherQosProxy::FromJs(info.Env(), info[0].As< PublisherQosProxy::NapiContainer >(), pub_qos);
        // Fall-through intentional
        case 0:
            break;
        default:
            throw Napi::Error::New(info.Env(), "DomainParticipantWrap::createPublisher(): Invalid number of arguments provided.");
    }

    DDS::Publisher *the_pub = participant->create_publisher(pub_qos, nullptr, 0);
    if (nullptr == the_pub)
    {
        throw NewDdsError(info.Env(), NAME, "createPublisher", DDS::RETCODE_ERROR);
    }
    return PublisherWrap::NewInstance(info.Env(), the_pub, info.This().As< Napi::Object >());
}


Napi::Value
DomainParticipantWrap::CreateSubscriber(Napi::CallbackInfo const& info)
{
    DDS::SubscriberQos sub_qos;
    DDS::DomainParticipant *participant = m_participant.get(info.Env(), "CreateSubscriber");

    participant->get_default_subscriber_qos(sub_qos);

    switch(info.Length())
    {
        case 1:
            SubscriberQosProxy::FromJs(info.Env(), info[0].As< SubscriberQosProxy::NapiContainer >(), sub_qos);
        // Fall-through intentional
        case 0:
            break;
        default:
            throw Napi::Error::New(info.Env(), "DomainParticipantWrap::createSubscriber(): Invalid number of arguments provided.");
    }

    DDS::Subscriber *the_sub = participant->create_subscriber(sub_qos, nullptr, 0);
    if (nullptr == the_sub)
    {
        throw NewDdsError(info.Env(), NAME, "createSubscriber", DDS::RETCODE_ERROR);
    }
    return SubscriberWrap::NewInstance(info.Env(), the_sub, info.This().As< Napi::Object >());
}


Napi::Value
DomainParticipantWrap::CreateTopic(Napi::CallbackInfo const& info)
{
    DDS::TopicQos topic_qos;
    DDS::DomainParticipant *participant = m_participant.get(info.Env(), "CreateTopic");
    std::string type_name;
    std::string topic_name;

    participant->get_default_topic_qos(topic_qos);

    switch(info.Length())
    {
        case 3:
            TopicQosProxy::FromJs(info.Env(), info[2].As< TopicQosProxy::NapiContainer >(), topic_qos);
        // Fall-through intentional
        case 2:
            type_name = info[1].As< Napi::String >().Utf8Value();
            topic_name = info[0].As< Napi::String >().Utf8Value();
            break;
        default:
            throw Napi::Error::New(info.Env(), "DomainParticipantWrap::createSubscriber(): Invalid number of arguments provided.");
    }

    DDS::Topic *the_topic = participant->create_topic(topic_name.c_str(), type_name.c_str(), topic_qos, nullptr, 0);
    if (nullptr == the_topic)
    {
        throw NewDdsError(info.Env(), NAME, "createTopic", DDS::RETCODE_ERROR);
    }
    return TopicWrap::NewInstance(info.Env(), the_topic, info.This().As< Napi::Object >());
}


Napi::Value
DomainParticipantWrap::GetDefaultPublisherQos(Napi::CallbackInfo const& info)
{
    DDS::PublisherQos pub_qos;
    DDS::DomainParticipant *participant = m_participant.get(info.Env(), "GetDefaultPublisherQos");

    participant->get_default_publisher_qos(pub_qos);

    return PublisherQosProxy::NewInstance(info.Env(), pub_qos);
}

} // end namespace DdsJs

// #include <arpa/inet.h>
// #include <cstring>
// #include <sstream>
// #include "ddsjs_base.hh"
// #include "DomainParticipantWrap.hh"
// #include "PublisherWrap.hh"
// #include "SubscriberWrap.hh"

// using std::stringstream;
// using v8::Object;
// using v8::Local;
// using v8::FunctionTemplate;
// using v8::String;
// using v8::Persistent;
// using v8::Function;
// using v8::Value;
// using v8::Exception;
// using v8::Number;
// using v8::HandleScope;
// using v8::Undefined;
// using v8::Null;
// using v8::Isolate;
// using v8::FunctionCallbackInfo;
// using v8::Primitive;
// using v8::PropertyCallbackInfo;
// using v8::MaybeLocal;
// using v8::Context;
// using v8::Maybe;
// using node::ObjectWrap;
// using DDS::DomainParticipantFactory;
// using DDS::DomainId_t;
// using DDS::DomainParticipantQos;
// using DDS::ReturnCode_t;
// using DDS::InstanceHandleSeq;
// using DDS::ParticipantBuiltinTopicData;
// using DDS::InstanceHandle_t;

// namespace DdsJs {

// Persistent<Function> DomainParticipantWrap::constructor;

// void DomainParticipantWrap::Init(Local<Object> exports)
// {
//     Isolate *isolate = Isolate::GetCurrent();
    
//     Local<FunctionTemplate> ctorTmpl = FunctionTemplate::New(
//         isolate, 
//         DomainParticipantWrap::New
//     );
//     ctorTmpl->SetClassName(String::NewFromUtf8(isolate, "DomainParticipant"));
//     ctorTmpl->InstanceTemplate()->SetInternalFieldCount(2);
    
//     /**
//      * The list of methods included in the JavaScript object prototype are
//      * derived, for the most part, from an appropriate counterpart in 
//      * \c DDS::DomainParticipant:
//      * - \c createPublisher() - \c DDS::DomainParticipant::create_publisher()
//      * - \c createSubscriber() - \c DDS::DomainParticipant::create_subscriber()
//      * - \c createTopic() - \c DDS::DomainParticipant::create_topic()
//      * - \c getDiscoveredParticipants() - \c DDS::DomainParticipant::get_discovered_participants()
//      * - \c getDiscoveredParticipantData() - \c DDS::DomainParticipant::get_discovered_participant_data()
//      * - \c deleteContainedEntities() - \c DDS::DomainParticipant::delete_contained_entities()
//      * - \c addTransport() - \c DDS::DomainParticipant::add_transport()
//      * - \c enable() - \c DDS::DomainParticipant::enable()
//      * - \c getInstanceHandle() - \c DDS::DomainParticipant::get_instance_handle()
//      * - \c ignoreParticipant() - \c DDS::DomainParticipant::ignore_participant()
//      */
//     NODE_SET_PROTOTYPE_METHOD(ctorTmpl, "createPublisher", DomainParticipantWrap::CreatePublisher);
//     NODE_SET_PROTOTYPE_METHOD(ctorTmpl, "createSubscriber", DomainParticipantWrap::CreateSubscriber);
//     NODE_SET_PROTOTYPE_METHOD(ctorTmpl, "createTopic", DomainParticipantWrap::CreateTopic);
//     NODE_SET_PROTOTYPE_METHOD(ctorTmpl, "getDiscoveredParticipants", DomainParticipantWrap::GetDiscoveredParticipants);
//     NODE_SET_PROTOTYPE_METHOD(ctorTmpl, "getDiscoveredParticipantData", DomainParticipantWrap::GetDiscoveredParticipantData);
//     NODE_SET_PROTOTYPE_METHOD(ctorTmpl, "getDiscoveredParticipantNameAndIp", DomainParticipantWrap::GetDiscoveredParticipantNameAndIp);
//     NODE_SET_PROTOTYPE_METHOD(ctorTmpl, "deleteContainedEntities", DomainParticipantWrap::DeleteContainedEntities);
//     NODE_SET_PROTOTYPE_METHOD(ctorTmpl, "enable", DomainParticipantWrap::Enable);
//     NODE_SET_PROTOTYPE_METHOD(ctorTmpl, "getInstanceHandle", DomainParticipantWrap::GetInstanceHandle);
//     NODE_SET_PROTOTYPE_METHOD(ctorTmpl, "ignoreParticipant", DomainParticipantWrap::IgnoreParticipant);

//     auto ctorFun = ctorTmpl->GetFunction(isolate->GetCurrentContext()).ToLocalChecked();
//     DomainParticipantWrap::constructor.Reset(isolate, ctorFun);
    
//     exports->Set(
//         isolate->GetCurrentContext(),
//         String::NewFromUtf8(isolate, "DomainParticipant"),
//         ctorFun
//     ).Check();
// }


// DomainParticipantWrap::DomainParticipantWrap()
// : m_theParticipant(NULL)
// {
// }


// DomainParticipantWrap::~DomainParticipantWrap()
// {
//     if (m_theParticipant != NULL)
//     {
//         /**
//          * In addition to resetting internal fields, the destructor for
//          * \c DomainParticipantWrap attempts to clean up the underlying
//          * C++ object tree created by the CoreDX library.
//          */
//         m_theParticipant->delete_contained_entities();
//         DomainParticipantFactory::get_instance()->delete_participant(m_theParticipant);
//         m_theParticipant = NULL;
//     }
// }


// void DomainParticipantWrap::New(FunctionCallbackInfo<Value> const& args)
// {
//     Isolate *isolate = Isolate::GetCurrent();
//     Local< Context > ctx = isolate->GetCurrentContext();
//     HandleScope scope(isolate);

//     if (nullptr == isolate)
//     {
//         return;
//     }

//     if (args.Length() < 1)
//     {
//         isolate->ThrowException(
//             Exception::TypeError(
//                 String::NewFromUtf8(
//                     isolate, 
//                     "Not enough arguments in DomainParticipant constructor."
//                 )
//             )
//         );
//         return;
//     }

//     if (!args[0]->IsNumber())
//     {
//         isolate->ThrowException(
//             Exception::TypeError(
//                 String::NewFromUtf8(
//                     isolate, 
//                     "Domain ID must be a number."
//                 )
//             )
//         );
//         return;
//     }

//     if (args.IsConstructCall())
//     {
//         DomainParticipantWrap *obj = new DomainParticipantWrap();
//         DomainParticipantQos dpQos;
//         DomainParticipantFactory::get_instance()->get_default_participant_qos(&dpQos);

//         if ((args.Length() > 1) && !args[1]->IsNull())
//         {
//             // -----------------------------------------------------------------------------
//             // At the moment, the only arguments supported on DomainParticipant construction
//             // are the domain ID and optionally a Quality of Service (QoS) specification.
//             // -----------------------------------------------------------------------------
//             if (!::DDS::DomainParticipantQosField::FromJsValueToCpp(args[1], dpQos))
//             {
//                 isolate->ThrowException(
//                     Exception::Error(
//                         String::NewFromUtf8(
//                             isolate, 
//                             "Invalid QoS object passed to DomainParticipant constructor."
//                         )
//                     )
//                 );
//                 delete obj;
//                 obj = NULL;
//                 return;
//             }
//         }
//         auto domainIdMaybe = args[0]->NumberValue(ctx);
//         if (domainIdMaybe.IsNothing())
//         {
//             isolate->ThrowException(
//                 Exception::Error(
//                     String::NewFromUtf8(
//                         isolate, 
//                         "Could not create participant instance."
//                     )
//                 )
//             );
//             return;
//         }
//         DomainId_t domainIdVal = static_cast< DomainId_t >(domainIdMaybe.FromJust());
//         obj->m_theParticipant = DomainParticipantFactory::get_instance()->create_participant(
//             domainIdVal,
//             dpQos,
//             NULL,
//             0
//         );

//         obj->Wrap(args.This());
//         args.This()->SetAlignedPointerInInternalField(1, obj->m_theParticipant);
//         Maybe< bool > defineResult = args.This()->DefineOwnProperty(
//             ctx, 
//             String::NewFromUtf8(
//                 isolate, 
//                 "domainId"
//             ), 
//             Number::New(
//                 isolate, 
//                 domainIdVal
//             ), 
//             ::v8::ReadOnly
//         );
//         if (!defineResult.FromMaybe(false))
//         {
//             isolate->ThrowException(
//                 Exception::Error(
//                     String::NewFromUtf8(
//                         isolate, 
//                         "Could not create participant instance."
//                     )
//                 )
//             );
//             return;
//         }
//         args.GetReturnValue().Set(args.This());
//     }
//     else
//     {
//         unsigned argc = 3u;
//         Local<Value> argv[] = {
//             args[0],
//             Undefined(isolate),
//             Undefined(isolate)
//         };
//         if (args.Length() > 2)
//         {
//             argv[2] = args[2];
//         }
//         else
//         {
//             argc--;
//         }
//         if (args.Length() > 1)
//         {
//             argv[1] = args[1];
//         }
//         else
//         {
//             argc--;
//         }
//         Local<Function> cons = Local<Function>::New(isolate, constructor);
//         MaybeLocal< Object > resultMaybe = cons->NewInstance(
//             isolate->GetCurrentContext(), 
//             argc, 
//             argv
//         );
//         if (resultMaybe.IsEmpty())
//         {
//             isolate->ThrowException(
//                 Exception::Error(
//                     String::NewFromUtf8(
//                         isolate, 
//                         "Could not create participant instance."
//                     )
//                 )
//             );
//             return;
//         }
        
//         args.GetReturnValue().Set(resultMaybe.ToLocalChecked());
//     }
// }


// void DomainParticipantWrap::CreatePublisher(FunctionCallbackInfo<Value> const& args)
// {
//     Isolate *isolate = Isolate::GetCurrent();
//     HandleScope scope(isolate);
//     unsigned argc = 3u;

//     Local<Value> argv[] = {
//         args.This(),
//         Undefined(isolate),
//         Undefined(isolate)
//     };

//     if (args.Length() > 1)
//     {
//         argv[2] = args[1];
//     }
//     else
//     {
//         argc--;
//     }
    
//     if (args.Length() > 0)
//     {
//         argv[1] = args[0];
//     }
//     else
//     {
//         argc--;
//     }
    
//     /**
//      * Instead of calling the \c DDS::DomainParticipant::create_publisher() 
//      * method directly, \c CreatePublisher() relies on the constructor object
//      * created by the \c PublisherWrap class, thereby reconciling the differences
//      * that exist between the object wrapping pattern of Node.js and API
//      * mechanisms of DDS.
//      */
//     Local<Function> pubCons = Local<Function>::New(
//         isolate, 
//         PublisherWrap::constructor
//     );
//     MaybeLocal< Object > resultMaybe = pubCons->NewInstance(
//         isolate->GetCurrentContext(), 
//         argc, 
//         argv
//     );
//     if (resultMaybe.IsEmpty())
//     {
//         isolate->ThrowException(
//             Exception::Error(
//                 String::NewFromUtf8(
//                     isolate, 
//                     "Could not create publisher instance."
//                 )
//             )
//         );
//         return;
//     }
//     args.GetReturnValue().Set(resultMaybe.FromMaybe(Local< Object >()));
// }


// void DomainParticipantWrap::CreateSubscriber(FunctionCallbackInfo<Value> const& args)
// {
//     Isolate *isolate = Isolate::GetCurrent();
//     HandleScope scope(isolate);
//     unsigned argc = 3u;

//     Local<Value> argv[] = {
//         args.This(),
//         Undefined(isolate),
//         Undefined(isolate)
//     };

//     if (args.Length() > 1)
//     {
//         argv[2] = args[1];
//     }
//     else
//     {
//         argc--;
//     }
    
//     if (args.Length() > 0)
//     {
//         argv[1] = args[0];
//     }
//     else
//     {
//         argc--;
//     }
    
//     /**
//      * Instead of calling the \c DDS::DomainParticipant::create_subscriber() 
//      * method directly, \c CreateSubscriber() relies on the constructor object
//      * created by the \c SubscriberWrap class, thereby reconciling the differences
//      * that exist between the object wrapping pattern of Node.js and API
//      * mechanisms of DDS.
//      */
//     Local<Function> subCons = Local<Function>::New(
//         isolate, 
//         SubscriberWrap::constructor
//     );
//     MaybeLocal< Object > resultMaybe = subCons->NewInstance(
//         isolate->GetCurrentContext(), 
//         argc, 
//         argv
//     );
//     if (resultMaybe.IsEmpty())
//     {
//         isolate->ThrowException(
//             Exception::Error(
//                 String::NewFromUtf8(
//                     isolate, 
//                     "Could not create subscriber instance."
//                 )
//             )
//         );
//         return;
//     }
    
//     args.GetReturnValue().Set(resultMaybe.FromMaybe(Local< Object >()));
// }


// void DomainParticipantWrap::CreateTopic(FunctionCallbackInfo<Value> const& args)
// {
//     Isolate *isolate = Isolate::GetCurrent();
//     HandleScope scope(isolate);
//     unsigned argc = 3u;

//     if (args.Length() < 1)
//     {
//         isolate->ThrowException(
//             Exception::Error(
//                 String::NewFromUtf8(
//                     isolate, 
//                     "Not enough arguments to createTopic() method call."
//                 )
//             )
//         );
//         return;
//     }

//     if (!args[0]->IsFunction())
//     {
//         isolate->ThrowException(
//             Exception::Error(
//                 String::NewFromUtf8(
//                     isolate, 
//                     "First argument to createTopic() must be the topic class."
//                 )
//             )
//         );
//         return;
//     }

//     Local<Value> argv[] = {
//         args.This(),
//         Undefined(isolate),
//         Undefined(isolate)
//     };

//     if (args.Length() > 2)
//     {
//         argv[2] = args[2];
//     }
//     else
//     {
//         argc--;
//     }
    
//     if (args.Length() > 1)
//     {
//         argv[1] = args[1];
//     }
//     else
//     {
//         argc--;
//     }
    
//     /**
//      * Instead of calling the \c DDS::DomainParticipant::create_topic() method
//      * directly, \c CreateTopic() relies on a factory object passed in to the
//      * \c createTopic() call. This factory object is generated by the IDL
//      * compiler and is available to the JavaScript script. Doing this reconciles
//      * the difference that exists between the object wrapping pattern of Node.js
//      * and the DDS API mechanics.
//      */
//     Local<Function> topicFactory = Local<Function>::New(
//         isolate, 
//         Local<Function>::Cast(args[0])
//     );
//     MaybeLocal< Object > resultMaybe = topicFactory->NewInstance(
//         isolate->GetCurrentContext(), 
//         argc, 
//         argv
//     );
//     if (resultMaybe.IsEmpty())
//     {
//         isolate->ThrowException(
//             Exception::Error(
//                 String::NewFromUtf8(
//                     isolate,
//                     "Could not create topic instance."
//                 )
//             )
//         );
//         return;
//     }
    
//     args.GetReturnValue().Set(resultMaybe.FromMaybe(Local< Object >()));
// }


// void DomainParticipantWrap::GetDiscoveredParticipants(FunctionCallbackInfo<Value> const& args)
// {
//     Isolate *isolate = Isolate::GetCurrent();
//     HandleScope scope(isolate);
//     InstanceHandleSeq dpHandles;
//     ReturnCode_t ddsRetCode;

//     DomainParticipantWrap *me = ObjectWrap::Unwrap<DomainParticipantWrap>(args.This());
//     ddsRetCode = me->m_theParticipant->get_discovered_participants(&dpHandles);
//     if (DDS::RETCODE_OK == ddsRetCode)
//     {
//         args.GetReturnValue().Set(
//             UnboundedSeqField< ::DdsJs::InstanceHandleField >::FromCppToJsValue(
//                 dpHandles
//             )
//         );
//     }
//     else
//     {
//         args.GetReturnValue().Set(Null(isolate));
//     }
// }


// void DomainParticipantWrap::GetDiscoveredParticipantData(FunctionCallbackInfo<Value> const& args)
// {
//     Isolate *isolate = Isolate::GetCurrent();
//     HandleScope scope(isolate);
//     ParticipantBuiltinTopicData dpInfo;
//     ReturnCode_t ddsRetCode;
//     InstanceHandle_t dpHandle;

//     if ((args.Length() < 1) || !InstanceHandleField::FromJsValueToCpp(args[0], dpHandle))
//     {
//         isolate->ThrowException(
//             Exception::Error(
//                 String::NewFromUtf8(
//                     isolate, 
//                     "DomainParticipant instance handle must be specified "
//                     "when calling getDiscoveredParticipantData()."
//                 )
//             )
//         );
//         return;
//     }

//     DomainParticipantWrap *me = ObjectWrap::Unwrap<DomainParticipantWrap>(args.This());

//     ddsRetCode = me->m_theParticipant->get_discovered_participant_data(
//         &dpInfo, 
//         dpHandle
//     );
//     if (DDS::RETCODE_OK == ddsRetCode)
//     {
//         args.GetReturnValue().Set(
//             ::DDS::ParticipantBuiltinTopicDataField::FromCppToJsValue(
//                 dpInfo
//             )
//         );
//     }
//     else
//     {
//         args.GetReturnValue().Set(Null(isolate));
//     }
// }


// void DomainParticipantWrap::GetDiscoveredParticipantNameAndIp(FunctionCallbackInfo<Value> const& args)
// {
//     Isolate *isolate = Isolate::GetCurrent();
//     HandleScope scope(isolate);
//     ParticipantBuiltinTopicData dpInfo;
//     ReturnCode_t ddsRetCode;
//     InstanceHandle_t dpHandle;
//     Local<Object> result(Object::New(isolate));
//     char ipAddrText[20];
//     Maybe< bool > setResult = ::v8::Nothing< bool >();

//     memset(ipAddrText, 0x00, sizeof(ipAddrText));

//     if ((args.Length() < 1) || !InstanceHandleField::FromJsValueToCpp(args[0], dpHandle))
//     {
//         isolate->ThrowException(
//             Exception::Error(
//                 String::NewFromUtf8(
//                     isolate, 
//                     "DomainParticipant instance handle must be specified "
//                     "when calling getDiscoveredParticipantData()."
//                 )
//             )
//         );
//         return;
//     }

//     DomainParticipantWrap *me = ObjectWrap::Unwrap<DomainParticipantWrap>(args.This());

//     ddsRetCode = me->m_theParticipant->get_discovered_participant_data(&dpInfo, dpHandle);
//     if ((DDS::RETCODE_OK == ddsRetCode) && (dpInfo.entity_name != NULL))
//     {
//         /**
//          * CoreDX embeds a participant name, and its corresponding address
//          * information, in the participant data object retrieved using
//          * \c DDS::DomainParticipant::get_discovered_participant_data() method.
//          * This class method takes advantage of this CoreDX-exclusive feature
//          * and parses out the information for JavaScript scripts.
//          */
//         setResult = result->Set(
//             isolate->GetCurrentContext(), 
//             String::NewFromUtf8(isolate, "name"), 
//             String::NewFromUtf8(isolate, dpInfo.entity_name)
//         );
//         if (!setResult.FromMaybe(false))
//         {
//             // TODO: Throw exception.
//         }
//         struct in_addr theAddr;
//         theAddr.s_addr = dpInfo.key.value[0];
//         if (inet_ntop(AF_INET, &theAddr, ipAddrText, sizeof(ipAddrText)) == NULL)
//         {
//             strcpy(ipAddrText, "Unknown");
//         }
//         setResult = result->Set(
//             isolate->GetCurrentContext(), 
//             String::NewFromUtf8(isolate, "ipAddress"), 
//             String::NewFromUtf8(isolate, ipAddrText)
//         );
//         if (!setResult.FromMaybe(false))
//         {
//             // TODO: Throw exception.
//         }
//         args.GetReturnValue().Set(result);
//     }
//     else
//     {
//         args.GetReturnValue().Set(Null(isolate));
//     }
// }


// void DomainParticipantWrap::DeleteContainedEntities(FunctionCallbackInfo<Value> const& args)
// {
//     Isolate *isolate = Isolate::GetCurrent();
//     HandleScope scope(isolate);
//     ReturnCode_t ddsRetCode = DDS::RETCODE_OK;
    
//     DomainParticipantWrap *me = ObjectWrap::Unwrap<DomainParticipantWrap>(args.This());
    
//     ddsRetCode = me->m_theParticipant->delete_contained_entities();
//     if (ddsRetCode != DDS::RETCODE_OK)
//     {
//         stringstream errorMsg;
//         errorMsg << "Could not delete contained entities: " << DDS_error(ddsRetCode);
//         isolate->ThrowException(
//             Exception::Error(
//                 String::NewFromUtf8(
//                     isolate, 
//                     errorMsg.str().c_str()
//                 )
//             )
//         );
//     }
// }


// void DomainParticipantWrap::Enable(FunctionCallbackInfo< Value > const& args)
// {
//     Isolate *isolate = Isolate::GetCurrent();
//     HandleScope scope(isolate);
//     DomainParticipantWrap *obj = ObjectWrap::Unwrap< DomainParticipantWrap >(args.This());
//     DDS::ReturnCode_t ddsRetCode = ::DDS::RETCODE_OK;
    
//     ddsRetCode = obj->m_theParticipant->enable();
//     if (ddsRetCode != ::DDS::RETCODE_OK)
//     {
//         stringstream errorMsg;
//         errorMsg << "Could not enable DomainParticipant:" << DDS_error(ddsRetCode);
//         isolate->ThrowException(
//             Exception::Error(
//                 String::NewFromUtf8(
//                     isolate, 
//                     errorMsg.str().c_str()
//                 )
//             )
//         );
//     }
// }


// void DomainParticipantWrap::GetInstanceHandle(FunctionCallbackInfo< Value > const& args)
// {
//     Isolate *isolate = Isolate::GetCurrent();
//     HandleScope scope(isolate);
//     DomainParticipantWrap *obj = ObjectWrap::Unwrap< DomainParticipantWrap >(args.This());
//     InstanceHandle_t dpHandle;
    
//     dpHandle = obj->m_theParticipant->get_instance_handle();
//     args.GetReturnValue().Set(InstanceHandleField::FromCppToJsValue(dpHandle));
// }


// void DomainParticipantWrap::IgnoreParticipant(FunctionCallbackInfo< Value > const& args)
// {
//     Isolate *isolate = Isolate::GetCurrent();
//     HandleScope scope(isolate);
//     DomainParticipantWrap *obj = ObjectWrap::Unwrap< DomainParticipantWrap >(args.This());
//     InstanceHandle_t dpHandle;
//     ReturnCode_t ddsRetCode = ::DDS::RETCODE_OK;
    
//     if (args.Length() < 1)
//     {
//         isolate->ThrowException(
//             Exception::Error(
//                 String::NewFromUtf8(
//                     isolate, 
//                     "Not enough arguments passed to ignoreParticipant()."
//                 )
//             )
//         );
//         return;
//     }
    
//     if (InstanceHandleField::FromJsValueToCpp(args[0], dpHandle) != true)
//     {
//         isolate->ThrowException(
//             Exception::Error(
//                 String::NewFromUtf8(
//                     isolate, 
//                     "Invalid argument passed to ignoreParticipant()."
//                 )
//             )
//         );
//         return;
//     }
    
//     ddsRetCode = obj->m_theParticipant->ignore_participant(dpHandle);
//     if (ddsRetCode != ::DDS::RETCODE_OK)
//     {
//         stringstream errorMsg;
//         errorMsg << "Could not ignore participant:" << DDS_error(ddsRetCode);
//         isolate->ThrowException(
//             Exception::Error(
//                 String::NewFromUtf8(
//                     isolate, 
//                     errorMsg.str().c_str()
//                 )
//             )
//         );
//     }
// }

// } // end namespace DdsJs
