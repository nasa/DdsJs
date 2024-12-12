/**
 * \file CycloneDDS/DataWriterWrap.cpp
 * \brief Contains the implementation for the \c DdsJs::DataWriterWrapBaseT class for CycloneDDS.
 * \author Rolando J. Nieves
 * \date 2024-12-06 10:41:05
 */

// --------------------------------------------------------------------------
// Standard C++ Library
#include <sstream>

// --------------------------------------------------------------------------
// Local Definition
#include "DataWriterWrap.hh"


namespace DdsJs
{

Napi::Object
DataWriterWrapFactory::NewInstance(Napi::Env env, dds_entity_t writer, std::string const& writerJsClassName)
{
    Napi::EscapableHandleScope scope(env);

    Napi::External< dds_entity_t > writer_ext = Napi::External< dds_entity_t >::New(env, &writer);
    Napi::FunctionReference *ctor_ref = env.GetInstanceData< ConstructorRegistry >()->getConstructorFor(DottedName({ writerJsClassName }));
    if (nullptr == ctor_ref)
    {
        std::stringstream msg;

        msg << "DataWriterWrapFactory::NewInstance(): Internal error: Constructor for " << writerJsClassName << " not available.";

        throw Napi::Error::New(env, msg.str());
    }
    Napi::Object result = ctor_ref->New({ writer_ext });

    return scope.Escape((napi_value)result).As< Napi::Object >();
}

} // end namespace DdsJs

// vim: set ts=4 sw=4 expandtab:
