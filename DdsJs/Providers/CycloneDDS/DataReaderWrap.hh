/**
 * \file CycloneDDS/DataReaderWrap.hh
 * \brief Contains the definition of the \c DdsJs::DataReaderWrapBaseT class for CycloneDDS.
 * \author Rolando J. Nieves
 * \date 2024-12-06 13:39:40
 */

#ifndef _DDSJS_DDSJS_PROVIDERS_CYCLONEDDS_DATAREADERWRAP_HH_
#define _DDSJS_DDSJS_PROVIDERS_CYCLONEDDS_DATAREADERWRAP_HH_

// --------------------------------------------------------------------------
// Standard C++ Library
#include <cstddef>
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
#include <DdsJs/Providers/CycloneDDS/DataReaderQos.hh>
#include <DdsJs/Providers/CycloneDDS/InstanceHandle.hh>
#include <DdsJs/Providers/CycloneDDS/SampleInfo.hh>
#include <DdsJs/Providers/CycloneDDS/dds_error_util.hh>
#include <DdsJs/Providers/CycloneDDS/dds_qos_util.hh>

namespace DdsJs
{

class DataReaderWrapFactory
{
public:
    static Napi::Object NewInstance(Napi::Env env, dds_entity_t writer, std::string const& writerJsClassName);
};


template< typename SampleProxy >
class DataReaderWrapBaseT : public DataReaderWrapFactory
{
protected:
    dds_entity_t m_reader;

    Napi::Value GetQos(Napi::CallbackInfo const& info);

    Napi::Value Take(Napi::CallbackInfo const& info);

public:
    DataReaderWrapBaseT();

    virtual ~DataReaderWrapBaseT();

    virtual const char* modname() const = 0;

    virtual const char* name() const = 0;
};


template< typename SampleProxy >
Napi::Value
DataReaderWrapBaseT< SampleProxy >::GetQos(Napi::CallbackInfo const& info)
{
    CycloneDDS::QosUniquePtr dw_qos(dds_create_qos());

    dds_return_t get_result = dds_get_qos(m_reader, dw_qos.get());
    if (get_result != DDS_RETCODE_OK)
    {
        throw NewDdsError(info.Env(), DottedName({ modname(), name() }).flat(), "getQos", get_result);
    }
    DataReaderQosProxy::NapiContainer result = DataReaderQosProxy::NewInstance(info.Env(), dw_qos.get());

    return result;
}


template< typename SampleProxy >
Napi::Value
DataReaderWrapBaseT< SampleProxy >::Take(Napi::CallbackInfo const& info)
{
    const std::string CLASS_NAME = DottedName({ modname(), name() }).flat();
    const std::string METHOD_NAME = "take";
    std::unique_ptr< typename SampleProxy::CppEntity*[] > samples;
    std::unique_ptr< dds_sample_info_t[] > sample_infos;
    std::size_t max_samples = 0u;
    Napi::EscapableHandleScope scope(info.Env());

    if (info.Length() != 1)
    {
        std::stringstream msg;

        msg << DottedName({ CLASS_NAME, METHOD_NAME }).flat()
            << "(): Invalid number of arguments provided.";
        throw Napi::Error::New(info.Env(), msg.str());
    }

    max_samples = info[0].As< Napi::Number >().Uint32Value();
    samples.reset(new typename SampleProxy::CppEntity*[max_samples]);
    sample_infos.reset(new dds_sample_info_t[max_samples]);

    dds_return_t take_result = dds_take_wl(m_reader, reinterpret_cast< void** >(samples.get()), sample_infos.get(), max_samples);
    if (take_result < 0)
    {
        throw NewDdsError(info.Env(), CLASS_NAME, METHOD_NAME, -take_result);
    }

    Napi::Array result = Napi::Array::New(info.Env());
    for (int idx = 0; idx < take_result; idx++)
    {
        Napi::Object a_tuple = Napi::Object::New(info.Env());
        try
        {
            SampleInfoProxy::NapiContainer a_sample_info = SampleInfoProxy::NewInstance(info.Env(), sample_infos[idx]);
            a_tuple.Set("sampleInfo", a_sample_info);
            a_tuple.Set("sample", info.Env().Null());
            if (sample_infos[idx].valid_data && (samples[idx] != nullptr))
            {
                typename SampleProxy::NapiContainer a_sample = SampleProxy::NewInstance(info.Env(), *samples[idx]);
                a_tuple.Set("sample", a_sample);
            }
        }
        catch(std::exception& ex)
        {
            // Any failure to decode results in an immediate abort. Since at
            // this point, this method is holding a valid sample loan, it
            // must be returned.
            dds_return_loan(m_reader, reinterpret_cast< void** >(samples.get()), max_samples);
            throw ex;
        }
        result.Set(idx, a_tuple);
    }

    dds_return_loan(m_reader, reinterpret_cast< void** >(samples.get()), max_samples);

    return scope.Escape(result);
}


template< typename SampleProxy >
DataReaderWrapBaseT< SampleProxy >::DataReaderWrapBaseT():
    m_reader(DDS_ENTITY_NIL)
{}


template< typename SampleProxy >
DataReaderWrapBaseT< SampleProxy >::~DataReaderWrapBaseT()
{
    dds_delete(m_reader);
    m_reader = DDS_ENTITY_NIL;
}

} // end namespace DdsJs

#endif /* !_DDSJS_DDSJS_PROVIDERS_CYCLONEDDS_DATAREADERWRAP_HH_ */

// vim: set ts=4 sw=4 expandtab:
