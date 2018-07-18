/**
 * \file PublisherWrap.hh
 * \brief Contains the definition of the \c PublisherWrap class.
 * \date 2014-10-21 15:55:15
 * \author Rolando J. Nieves
 */
#ifndef _PUBLISHER_WRAP_HH_
#define _PUBLISHER_WRAP_HH_

#include <node.h>
#include <node_object_wrap.h>
#include <DdsJs/dds_provider.h>

namespace DdsJs {

/**
 * \brief Wrap the \c DDS::Publisher class for Node.js
 *
 * The \c PublisherWrap class is used to create a JavaScript object
 * prototype and host the appropriate behavior of object instances that
 * eventually utilize the \c DDS::Publisher class provided by
 * CoreDX.
 */
class PublisherWrap : public node::ObjectWrap
{
public:

	/**
	 * \brief Initialize the prototype used to create \c Publisher instances in JavaScript.
	 *
	 * The \c Init() class method creates a new JavaScript object prototype
	 * that will later be used by Node.js to create instances of objects
	 * whose behavior is defined by \c DDS::Publisher, via this
	 * class.
	 *
	 * \param exports {inout} Contains the created \c Publisher prototype as an
	 *                        exported object.
	 */
	static void Init(v8::Local<v8::Object> exports);

	/**
	 * \brief Provide read-only access to the underlying \c DDS::Publisher instance
	 *
	 * \return \c DDS::Publisher instance wrapped by this \c PublisherWrap instance.
	 */
	inline DDS::Publisher* thePublisher() const { return m_thePublisher; }

private:

	
	/**
	 * Class-wide constructor function used by Node.js when a new instance of
	 * this \c DDS::Publisher wrapper is created.
	 */
	static v8::Persistent<v8::Function> constructor;

	/**
	 * Reference to the actual C++ \c DDS::Publisher instance.
	 */
	DDS::Publisher *m_thePublisher;

	/**
	 * \brief Initialize all instance fields.
	 *
	 * The default constructor for the \c PublisherWrap class is not meant to
	 * be called externally, hence it is protected.
	 */
	PublisherWrap();

	/**
	 * \brief Reset all instance fields.
	 *
	 * The destructor for the \c PublisherWrap class is not meant to be called
	 * externally (i.e., only \c PublisherWrap is allowed to create and 
	 * destroy \c PublisherWrap instances), hence it is protected.
	 */
	virtual ~PublisherWrap();

	/**
	 * \brief Create a new \c Publisher instance.
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
	 * \brief Wrap the \c DDS::Publisher::create_datawriter() C++ call
	 *
	 * The \c CreateDataWriter() class method is called whenever a Node.js 
	 * JavaScript script calls the \c createDataWriter() method in an object
	 * instance created by this class' \c New() class method.
	 *
	 * \param args {in} Contains the arguments provided in the JavaScript
	 *                  method call.
	 */
	static void CreateDataWriter(v8::FunctionCallbackInfo<v8::Value> const& args);
	
	/**
	 * \brief Wrap the \c DDS::Publisher::get_default_datawriter_qos() C++ call
	 *
	 * The \c GetDefaultDataWriterQos() class method is called whenever a Node.js 
	 * JavaScript script calls the \c getDefaultDataWriterQos() method in an object
	 * instance created by this class' \c New() class method.
	 *
	 * \param args {in} Contains the arguments provided in the JavaScript
	 *                  method call.
	 */
	static void GetDefaultDataWriterQos(v8::FunctionCallbackInfo<v8::Value> const& args);
	
	/*
	 * Friend declaration required so that DomainParticipantWrap is the only class
	 * that can interact with this class' constructor field.
	 */
	friend class DomainParticipantWrap;
};

} // end namespace DdsJs

#endif /* _PUBLISHER_WRAP_HH_ */
