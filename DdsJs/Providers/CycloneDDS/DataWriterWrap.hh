/**
 * \file CycloneDDS/DataWriterWrap.hh
 * \brief Contains the definition of the \c DdsJs::DataWriterWrapBaseT class for CycloneDDS.
 * \author Rolando J. Nieves
 * \date 2024-12-06 10:31:52
 */

#ifndef _DDSJS_DDSJS_PROVIDERS_CYCLONEDDS_DATAWRITERWRAP_HH_
#define _DDSJS_DDSJS_PROVIDERS_CYCLONEDDS_DATAWRITERWRAP_HH_

// --------------------------------------------------------------------------
// Standard C++ Library
#include <sstream>

// --------------------------------------------------------------------------
// CycloneDDS C API
#include <dds/dds.h>

// --------------------------------------------------------------------------
// NodeJS Add-on API
#include <napi.h>

// --------------------------------------------------------------------------
// DdsJs Generic
#include <DdsJs/ConstructorRegistry.hh>

// --------------------------------------------------------------------------
// DdsJs CycloneDDS-Specific
#include <DdsJs/Providers/CycloneDDS/DataWriterQos.hh>
#include <DdsJs/Providers/CycloneDDS/InstanceHandle.hh>
#include <DdsJs/Providers/CycloneDDS/dds_error_util.hh>
#include <DdsJs/Providers/CycloneDDS/dds_qos_util.hh>

namespace DdsJs
{

class DataWriterWrapFactory
{
public:
    static Napi::Object NewInstance(Napi::Env env, dds_entity_t writer, std::string const& writerJsClassName);
};


template< typename SampleProxy >
class DataWriterWrapBaseT : public DataWriterWrapFactory
{
protected:
    dds_entity_t m_writer;

    Napi::Value GetQos(Napi::CallbackInfo const& info);

    /**
     * \brief Wrap the \c DDS::DataWriter::write() C++ call
     *
     * The \c Write() class method is called whenever a Node.js 
     * JavaScript script calls the \c write() method in an object
     * instance created by this class' \c New() class method.
     *
     * \param info {in} Contains the JavaScript call context.
     */
    Napi::Value Write(Napi::CallbackInfo const& info);

public:
    DataWriterWrapBaseT();

    virtual ~DataWriterWrapBaseT();

    virtual const char* modname() = 0;

    virtual const char* name() = 0;
};


template< typename SampleProxy >
Napi::Value
DataWriterWrapBaseT< SampleProxy >::GetQos(Napi::CallbackInfo const& info)
{
    CycloneDDS::QosUniquePtr dw_qos(dds_create_qos());

    dds_return_t get_result = dds_get_qos(m_writer, dw_qos.get());
    if (get_result != DDS_RETCODE_OK)
    {
        throw NewDdsError(info.Env(), DottedName({ modname(), name() }).flat(), "getQos", get_result);
    }
    DataWriterQosProxy::NapiContainer result = DataWriterQosProxy::NewInstance(info.Env(), dw_qos.get());

    return result;
}


template< typename SampleProxy >
Napi::Value
DataWriterWrapBaseT< SampleProxy >::Write(Napi::CallbackInfo const& info)
{
    static const char *METHOD_NAME = "write";
    dds_instance_handle_t instance_handle = DDS_HANDLE_NIL;
    typename SampleProxy::CppEntity sample;

    switch(info.Length())
    {
    case 2:
        InstanceHandleProxy::FromJs(info.Env(), info[1].As< InstanceHandleProxy::NapiContainer >(), instance_handle);
        // Fall-through intentional
    case 1:
        SampleProxy::FromJs(info.Env(), info[0].As< typename SampleProxy::NapiContainer >(), sample);
        break;
    default:
        {
            std::stringstream msg;

            msg << DottedName({ modname(), name(), METHOD_NAME }).flat() << ": Incorrect number of arguments provided.";
            throw Napi::Error::New(info.Env(), msg.str());
        }
    }

    dds_return_t retcode = dds_write(m_writer, &sample);
    if (DDS_RETCODE_OK != retcode)
    {
        throw NewDdsError(info.Env(), DottedName({ modname(), name() }).flat(), METHOD_NAME, retcode);
    }

    return info.Env().Undefined();
}


template< typename SampleProxy >
DataWriterWrapBaseT< SampleProxy >::DataWriterWrapBaseT():
    m_writer(DDS_ENTITY_NIL)
{}


template< typename SampleProxy >
DataWriterWrapBaseT< SampleProxy >::~DataWriterWrapBaseT()
{
    dds_delete(m_writer);
    m_writer = DDS_ENTITY_NIL;
}

} // end namespace DdsJs

#endif /* !_DDSJS_DDSJS_PROVIDERS_CYCLONEDDS_DATAWRITERWRAP_HH_ */

// vim: set ts=4 sw=4 expandtab:
