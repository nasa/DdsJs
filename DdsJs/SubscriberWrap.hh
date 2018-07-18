/**
 * \file SubscriberWrap.hh
 * \brief Contains the definition of the \c SubscriberWrap class.
 * \date 2014-10-21 15:55:15
 * \author Rolando J. Nieves
 */
#ifndef _SUBSCRIBER_WRAP_HH_
#define _SUBSCRIBER_WRAP_HH_

#include <node.h>
#include <node_object_wrap.h>
#include <DdsJs/dds_provider.h>

namespace DdsJs {

/**
 * \brief Wrap the \c DDS::Subscriber class for Node.js
 *
 * The \c SubscriberWrap class is used to create a JavaScript object
 * prototype and host the appropriate behavior of object instances that
 * eventually utilize the \c DDS::Subscriber class provided by
 * CoreDX.
 */
class SubscriberWrap : public node::ObjectWrap
{
public:

	/**
	 * \brief Initialize the prototype used to create \c Subscriber instances in JavaScript.
	 *
	 * The \c Init() class method creates a new JavaScript object prototype
	 * that will later be used by Node.js to create instances of objects
	 * whose behavior is defined by \c DDS::Subscriber, via this
	 * class.
	 *
	 * \param exports {inout} Contains the created \c Subscriber prototype as an
	 *                        exported object.
	 */
	static void Init(v8::Local<v8::Object> exports);

	/**
	 * \brief Provide read-only access to the underlying \c DDS::Subscriber instance
	 *
	 * \return \c DDS::Subscriber instance wrapped by this \c SubscriberWrap instance.
	 */
	inline DDS::Subscriber* theSubscriber() const { return m_theSubscriber; }

private:

	/**
	 * Class-wide constructor function used by Node.js when a new instance of
	 * this \c DDS::Subscriber wrapper is created.
	 */
	static v8::Persistent<v8::Function> constructor;

	/**
	 * Reference to the actual C++ \c DDS::Subscriber instance.
	 */
	DDS::Subscriber *m_theSubscriber;

	/**
	 * \brief Initialize all instance fields.
	 *
	 * The default constructor for the \c SubscriberWrap class is not meant to
	 * be called externally, hence it is protected.
	 */
	SubscriberWrap();

	/**
	 * \brief Reset all instance fields.
	 *
	 * The destructor for the \c SubscriberWrap class is not meant to be called
	 * externally (i.e., only \c SubscriberWrap is allowed to create and 
	 * destroy \c SubscriberWrap instances), hence it is protected.
	 */
	virtual ~SubscriberWrap();

	/**
	 * \brief Create a new \c Subscriber instance.
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
	 * \brief Wrap the \c DDS::Subscriber::create_datareader() C++ call
	 *
	 * The \c CreateDataReader() class method is called whenever a Node.js 
	 * JavaScript script calls the \c createDataReader() method in an object
	 * instance created by this class' \c New() class method.
	 *
	 * \param args {in} Contains the arguments provided in the JavaScript
	 *                  method call.
	 */
	static void CreateDataReader(v8::FunctionCallbackInfo<v8::Value> const& args);
	
	/**
	 * \brief Wrap the \c DDS::Publisher::get_default_datareader_qos() C++ call
	 *
	 * The \c GetDefaultDataReaderQos() class method is called whenever a Node.js 
	 * JavaScript script calls the \c getDefaultDataReaderQos() method in an object
	 * instance created by this class' \c New() class method.
	 *
	 * \param args {in} Contains the arguments provided in the JavaScript
	 *                  method call.
	 */
	static void GetDefaultDataReaderQos(v8::FunctionCallbackInfo<v8::Value> const& args);

	/*
	 * Friend declaration required so that DomainParticipantWrap is the only class
	 * that can interact with this class' constructor field.
	 */
	friend class DomainParticipantWrap;
};

} // end namespace DdsJs

#endif /* _SUBSCRIBER_WRAP_HH_ */
