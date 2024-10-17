/**
 * \file DdsJs/SampleInfo.cpp
 * \brief Contains the implementation for the \c SampleInfoProxy class.
 * \author Rolando J. Nieves
 * \date 2024-10-04 12:23:07
 */

// --------------------------------------------------------------------------
// Local Definition
#include "SampleInfo.hh"


namespace DdsJs
{

const char *SampleInfoProxy::SampleStateField::NAME = "sample_state";
const char *SampleInfoProxy::ViewStateField::NAME = "view_state";
const char *SampleInfoProxy::InstanceStateField::NAME = "instance_state";
const char *SampleInfoProxy::SourceTimestampField::NAME = "source_timestamp";
const char *SampleInfoProxy::InstanceHandleField::NAME = "instance_handle";
const char *SampleInfoProxy::PublicationHandleField::NAME = "publication_handle";
const char *SampleInfoProxy::DisposedGenerationCountField::NAME = "disposed_generation_count";
const char *SampleInfoProxy::NoWritersGenerationCountField::NAME = "no_writers_generation_count";
const char *SampleInfoProxy::SampleRankField::NAME = "sample_rank";
const char *SampleInfoProxy::GenerationRankField::NAME = "generation_rank";
const char *SampleInfoProxy::AbsoluteGenerationRankField::NAME = "absolute_generation_rank";
const char *SampleInfoProxy::ValidDataField::NAME = "valid_data";

const char *SampleInfoProxy::MODNAME = "DDS";
const char *SampleInfoProxy::NAME = "SampleInfo";

Napi::Object
SampleInfoProxy::Init(Napi::Env env, Napi::Object exports, ConstructorRegistry *ctorReg)
{
    Napi::Function ctor_func = DefineClass(
        env,
        SampleInfoProxy::NAME,
        {}
    );

    Napi::FunctionReference *ctor_ref = new Napi::FunctionReference();
    *ctor_ref = Napi::Persistent(ctor_func);
    ctorReg->setConstructorFor(DottedName({ SampleInfoProxy::MODNAME, SampleInfoProxy::NAME }), ctor_ref);

    exports.Set(SampleInfoProxy::NAME, ctor_func);

    return exports;
}


SampleInfoProxy::NapiContainer
SampleInfoProxy::NewInstance(Napi::Env env)
{
    Napi::EscapableHandleScope scope(env);
    Napi::FunctionReference *ctor_ref = env.GetInstanceData< ConstructorRegistry >()->getConstructorFor(DottedName({ SampleInfoProxy::MODNAME, SampleInfoProxy::NAME }));
    if (nullptr == ctor_ref)
    {
        throw Napi::Error::New(env, "Internal error: Constructor for SampleInfo not available.");
    }

    return scope.Escape((napi_value)ctor_ref->New({})).As< NapiContainer >();
}


SampleInfoProxy::NapiContainer
SampleInfoProxy::NewInstance(Napi::Env env, CppEntity const& cppInstance)
{
    NapiContainer result = NewInstance(env);
    FromCpp(env, cppInstance, result);

    return result;
}


void
SampleInfoProxy::FromCpp(Napi::Env env, CppEntity const& cppVal, NapiContainer& jsValOut)
{
    jsValOut.Set(SampleStateField::NAME, SampleStateField::Proxy::NewInstance(env, cppVal.sample_state));
    jsValOut.Set(ViewStateField::NAME, ViewStateField::Proxy::NewInstance(env, cppVal.view_state));
    jsValOut.Set(InstanceStateField::NAME, InstanceStateField::Proxy::NewInstance(env, cppVal.instance_state));
    jsValOut.Set(SourceTimestampField::NAME, SourceTimestampField::Proxy::NewInstance(env, cppVal.source_timestamp));
    jsValOut.Set(InstanceHandleField::NAME, InstanceHandleField::Proxy::NewInstance(env, cppVal.instance_handle));
    jsValOut.Set(PublicationHandleField::NAME, PublicationHandleField::Proxy::NewInstance(env, cppVal.publication_handle));
    jsValOut.Set(DisposedGenerationCountField::NAME, DisposedGenerationCountField::Proxy::NewInstance(env, cppVal.disposed_generation_count));
    jsValOut.Set(NoWritersGenerationCountField::NAME, NoWritersGenerationCountField::Proxy::NewInstance(env, cppVal.no_writers_generation_count));
    jsValOut.Set(SampleRankField::NAME, SampleRankField::Proxy::NewInstance(env, cppVal.sample_rank));
    jsValOut.Set(GenerationRankField::NAME, GenerationRankField::Proxy::NewInstance(env, cppVal.generation_rank));
    jsValOut.Set(AbsoluteGenerationRankField::NAME, AbsoluteGenerationRankField::Proxy::NewInstance(env, cppVal.absolute_generation_rank));
    jsValOut.Set(ValidDataField::NAME, ValidDataField::Proxy::NewInstance(env, cppVal.valid_data));
}


void
SampleInfoProxy::FromJs(Napi::Env env, NapiContainer const& jsVal, CppEntity& cppValOut)
{
    SampleStateField::Proxy::FromJs(env, jsVal.Get(SampleStateField::NAME).As< SampleStateField::Proxy::NapiContainer >(), cppValOut.sample_state);
    ViewStateField::Proxy::FromJs(env, jsVal.Get(ViewStateField::NAME).As< ViewStateField::Proxy::NapiContainer >(), cppValOut.view_state);
    InstanceStateField::Proxy::FromJs(env, jsVal.Get(InstanceStateField::NAME).As< InstanceStateField::Proxy::NapiContainer >(), cppValOut.instance_state);
    SourceTimestampField::Proxy::FromJs(env, jsVal.Get(SourceTimestampField::NAME).As< SourceTimestampField::Proxy::NapiContainer >(), cppValOut.source_timestamp);
    InstanceHandleField::Proxy::FromJs(env, jsVal.Get(InstanceHandleField::NAME).As< InstanceHandleField::Proxy::NapiContainer >(), cppValOut.instance_handle);
    PublicationHandleField::Proxy::FromJs(env, jsVal.Get(PublicationHandleField::NAME).As< PublicationHandleField::Proxy::NapiContainer >(), cppValOut.publication_handle);
    DisposedGenerationCountField::Proxy::FromJs(env, jsVal.Get(DisposedGenerationCountField::NAME).As< DisposedGenerationCountField::Proxy::NapiContainer >(), cppValOut.disposed_generation_count);
    NoWritersGenerationCountField::Proxy::FromJs(env, jsVal.Get(NoWritersGenerationCountField::NAME).As< NoWritersGenerationCountField::Proxy::NapiContainer >(), cppValOut.no_writers_generation_count);
    SampleRankField::Proxy::FromJs(env, jsVal.Get(SampleRankField::NAME).As< SampleRankField::Proxy::NapiContainer >(), cppValOut.sample_rank);
    GenerationRankField::Proxy::FromJs(env, jsVal.Get(GenerationRankField::NAME).As< GenerationRankField::Proxy::NapiContainer >(), cppValOut.generation_rank);
    AbsoluteGenerationRankField::Proxy::FromJs(env, jsVal.Get(AbsoluteGenerationRankField::NAME).As< AbsoluteGenerationRankField::Proxy::NapiContainer >(), cppValOut.absolute_generation_rank);
    ValidDataField::Proxy::FromJs(env, jsVal.Get(ValidDataField::NAME).As< ValidDataField::Proxy::NapiContainer >(), cppValOut.valid_data);
}


SampleInfoProxy::SampleInfoProxy(Napi::CallbackInfo const& info):
    Napi::ObjectWrap< SampleInfoProxy >(info)
{
    NapiContainer this_instance = info.This().As< NapiContainer >();
    CppEntity blank_value;

    FromCpp(info.Env(), blank_value, this_instance);
}

} // end namespace DdsJs

// vim: set ts=4 sw=4 expandtab:
