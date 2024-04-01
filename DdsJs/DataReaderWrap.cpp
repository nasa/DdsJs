/**
 * \file DdsJs/DataReaderWrap.cpp
 * \brief Contains the implementation for the \c DataReaderWrapFactory class.
 * \author Rolando J. Nieves
 * \date 2024-03-14 15:36:24
 */

#include "DataReaderWrap.hh"


namespace DdsJs
{

Napi::Object
DataReaderWrapFactory::NewInstance(Napi::Env env, DDS::DataReader *reader, std::string const& readerJsClassName)
{
    Napi::EscapableHandleScope scope(env);

    Napi::External< DDS::DataReader > reader_ext = Napi::External< DDS::DataReader >::New(env, reader);
    Napi::FunctionReference *ctor_ref = env.GetInstanceData< ConstructorRegistry >()->getConstructorFor(DottedName({ readerJsClassName }));
    if (nullptr == ctor_ref)
    {
        std::stringstream msg;

        msg << "DataReaderWrapFactory::NewInstance(): Internal error: Constructor for " << readerJsClassName << " not available.";

        throw Napi::Error::New(env, msg.str());
    }
    Napi::Object result = ctor_ref->New({ reader_ext });

    return scope.Escape((napi_value)result).As< Napi::Object >();
}

} // end namespace DdsJs

// vim: set ts=4 sw=4 expandtab:
