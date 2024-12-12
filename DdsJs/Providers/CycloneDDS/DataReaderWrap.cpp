/**
 * \file CycloneDDS/DataReaderWrap.cpp
 * \brief Contains the implementation for the \c DdsJs::DataReaderWrapBaseT class for CycloneDDS.
 * \author Rolando J. Nieves
 * \date 2024-12-06 13:41:03
 */

// --------------------------------------------------------------------------
// Standard C++ Library
#include <sstream>

// --------------------------------------------------------------------------
// Local Definition
#include "DataReaderWrap.hh"


namespace DdsJs
{

Napi::Object
DataReaderWrapFactory::NewInstance(Napi::Env env, dds_entity_t reader, std::string const& readerJsClassName)
{
    Napi::EscapableHandleScope scope(env);

    Napi::External< dds_entity_t > reader_ext = Napi::External< dds_entity_t >::New(env, &reader);
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
