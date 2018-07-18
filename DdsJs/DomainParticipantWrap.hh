/**
 * \file DomainParticipantWrap.hh
 * \brief Contains the definition of the \c DomainParticipantWrap class.
 * \author Rolando J. Nieves
 * \date 2014-07-28 16:02:00
 */
#ifndef _DOMAIN_PARTICIPANT_WRAP_HH_
#define _DOMAIN_PARTICIPANT_WRAP_HH_

#include <node.h>
#include <node_object_wrap.h>
#include <DdsJs/dds_provider.h>

namespace DdsJs {

/**
 * \brief Wrap the \c DDS::DomainParticipant class for Node.js
 *
 * The \c DomainParticipantWrap class is used to create a JavaScript object
 * prototype and host the appropriate behavior of object instances that
 * eventually utilize the \c DDS::DomainParticipant class provided by
 * CoreDX.
 */
class DomainParticipantWrap : public node::ObjectWrap
{
public:

    /**
     * Class-wide constructor function used by Node.js when a new instance of
     * this \c DDS::DomainParticpant wrapper is created.
     */
    static v8::Persistent<v8::Function> constructor;

    /**
     * \brief Initialize the prototype used to create \c DomainParticipant instances in JavaScript.
     *
     * The \c Init() class method creates a new JavaScript object prototype
     * that will later be used by Node.js to create instances of objects
     * whose behavior is defined by \c DDS::DomainParticipant, via this
     * class.
     *
     * \param exports {inout} Contains the created \c DomainParticipant prototype as an
     *                        exported object.
     */
    static void Init(v8::Local<v8::Object> exports);

private:

    /**
     * Reference to the actual C++ \c DDS::DomainParticipant instance.
     */
    DDS::DomainParticipant *m_theParticipant;

    /**
     * \brief Initialize all instance fields.
     *
     * The default constructor for the \c DomainParticipantWrap class is not meant to
     * be called externally, hence it is protected.
     */
    DomainParticipantWrap();

    /**
     * \brief Reset all instance fields.
     *
     * The destructor for the \c DomainParticipantWrap class is not meant to be called
     * externally (i.e., only \c DomainParticipantWrap is allowed to create and 
     * destroy \c DomainParticipantWrap instances), hence it is protected.
     */
    virtual ~DomainParticipantWrap();

    /**
     * \brief Create a new \c DomainParticipant instance.
     *
     * The \c New() method is called by Node.js when a JavaScript script
     * creates a new instance of the JavaScript class prototype created by this
     * object wrapper in the \c Init() class method.
     *
     * \param args {in} Contains the arguments included in the JavaScript 
     *                  \c new invocation.
     */
    static void New(v8::FunctionCallbackInfo<v8::Value> const& args);
    
    /**
     * \brief Wrap the \c DDS::DomainParticipant::create_publisher() C++ call
     *
     * The \c CreatePublisher() class method is called whenever a Node.js 
     * JavaScript script calls the \c createPublisher() method in an object
     * instance created by this class' \c New() class method.
     *
     * \param args {in} Contains the arguments provided in the JavaScript
     *                  method call.
     */
    static void CreatePublisher(v8::FunctionCallbackInfo<v8::Value> const& args);
    
    /**
     * \brief Wrap the \c DDS::DomainParticipant::create_subscriber() C++ call
     *
     * The \c CreateSubscriber() class method is called whenever a Node.js 
     * JavaScript script calls the \c createSubscriber() method in an object
     * instance created by this class' \c New() class method.
     *
     * \param args {in} Contains the arguments provided in the JavaScript
     *                  method call.
     */
    static void CreateSubscriber(v8::FunctionCallbackInfo<v8::Value> const& args);
    
    /**
     * \brief Wrap the \c DDS::DomainParticipant::create_topic() C++ call
     *
     * The \c CreateTopic() class method is called whenever a Node.js 
     * JavaScript script calls the \c createTopic() method in an object
     * instance created by this class' \c New() class method.
     *
     * \param args {in} Contains the arguments provided in the JavaScript
     *                  method call.
     */
    static void CreateTopic(v8::FunctionCallbackInfo<v8::Value> const& args);
    
    /**
     * \brief Wrap the \c DDS::DomainParticipant::get_discovered_participants() C++ call
     *
     * The \c GetDiscoveredParticipants() class method is called whenever a Node.js 
     * JavaScript script calls the \c getDiscoveredParticipants() method in an object
     * instance created by this class' \c New() class method.
     *
     * \param args {in} Contains the arguments provided in the JavaScript
     *                  method call.
     */
    static void GetDiscoveredParticipants(v8::FunctionCallbackInfo<v8::Value> const& args);
    
    /**
     * \brief Wrap the \c DDS::DomainParticipant::get_discoverd_participant_data() C++ call
     *
     * The \c GetDiscoveredParticipantData() class method is called whenever a Node.js 
     * JavaScript script calls the \c getDiscoveredParticipantData() method in an object
     * instance created by this class' \c New() class method.
     *
     * \param args {in} Contains the arguments provided in the JavaScript
     *                  method call.
     */
    static void GetDiscoveredParticipantData(v8::FunctionCallbackInfo<v8::Value> const& args);
    
    /**
     * \brief Convert discovered participant data into participant name and IP address.
     *
     * The \c GetDiscoveredParticipantNameAndIp() class method is called whenever a Node.js 
     * JavaScript script calls the \c getDiscoveredParticipantNameAndIp() method in an object
     * instance created by this class' \c New() class method.
     *
     * \param args {in} Contains the arguments provided in the JavaScript
     *                  method call.
     */
    static void GetDiscoveredParticipantNameAndIp(v8::FunctionCallbackInfo<v8::Value> const& args);

    /**
     * \brief Wrap the \c DDS::DomainParticipant::delete_contained_entities() C++ call
     *
     * The \c DeleteContainedEntities() class method is called whenever a Node.js 
     * JavaScript script calls the \c deleteContainedEntities() method in an object
     * instance created by this class' \c New() class method.
     *
     * \param args {in} Contains the arguments provided in the JavaScript
     *                  method call.
     */
    static void DeleteContainedEntities(v8::FunctionCallbackInfo<v8::Value> const& args);
    
    /**
     * \brief Wrap the \c DDS::DomainParticipant::enable() C++ call
     *
     * The \c Enable() class method is called whenever a Node.js JavaScript
     * script calls the \c enable() method in an object instance created by
     * this class' \c New() class method.
     *
     * \param args {in} Contains the arguments provided in the JavaScript
     *                  method call.
     */
    static void Enable(v8::FunctionCallbackInfo< v8::Value > const& args);
    
    /**
     * \brief Wrap the \c DDS::DomainParticipant::get_instance_handle() C++ call
     *
     * The \c GetInstanceHandle() class method is called whenever a Node.js
     * JavaScript script calls the \c getInstanceHandle() method in an object 
     * instance created by this class' \c New() class method.
     *
     * \param args {in} Contains the arguments provided in the JavaScript 
     *                  method call.
     */
    static void GetInstanceHandle(v8::FunctionCallbackInfo< v8::Value > const& args);
    
    /**
     * \brief Wrap the \c DDS::DomainParticipant::ignore_participant() C++ call
     *
     * The \c IgnoreParticipant() class method is called whenever a Node.js 
     * JavaScript script calls the \c ignoreParticipant() method in an object 
     * instance created by this class' \c New() class method.
     *
     * \param args {in} Contains the arguments provided in the JavaScript 
     *                  method call.
     */
    static void IgnoreParticipant(v8::FunctionCallbackInfo< v8::Value > const& args);
};

} // end namespace DdsJs
#endif /* _DOMAIN_PARTICIPANT_WRAP_HH_ */
