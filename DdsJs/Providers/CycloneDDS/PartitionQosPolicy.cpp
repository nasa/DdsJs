/**
 * \file CycloneDDS/PartitionQosPolicy.cpp
 * \brief Contains the implementation for the \c PartitionQosPolicyProxy class.
 * \author Rolando J. Nieves <rolando.j.nieves@nasa.gov>
 * \date 2024-10-04 15:54:43
 */

// --------------------------------------------------------------------------
// Local Definition
#include "PartitionQosPolicy.hh"


namespace DdsJs
{

const char *PartitionQosPolicyProxy::NameField::NAME = "name";

const char *PartitionQosPolicyProxy::MODNAME = "DDS";

const char *PartitionQosPolicyProxy::NAME = "PartitionQosPolicy";


Napi::Object
PartitionQosPolicyProxy::Init(Napi::Env env, Napi::Object exports, ConstructorRegistry *ctorReg)
{
    Napi::Function ctor_func = DefineClass(
        env,
        PartitionQosPolicyProxy::NAME,
        {}
    );

    Napi::FunctionReference *ctor_ref = new Napi::FunctionReference();
    *ctor_ref = Napi::Persistent(ctor_func);
    ctorReg->setConstructorFor(DottedName({ PartitionQosPolicyProxy::MODNAME, PartitionQosPolicyProxy::NAME }), ctor_ref);

    exports.Set(PartitionQosPolicyProxy::NAME, ctor_func);

    return exports;
}


PartitionQosPolicyProxy::NapiContainer
PartitionQosPolicyProxy::NewInstance(Napi::Env env)
{
    Napi::EscapableHandleScope scope(env);
    Napi::FunctionReference *ctor_ref = env.GetInstanceData< ConstructorRegistry >()->getConstructorFor(DottedName({ PartitionQosPolicyProxy::MODNAME, PartitionQosPolicyProxy::NAME }));
    if (nullptr == ctor_ref)
    {
        throw Napi::Error::New(env, "Internal error: Constructor for PartitionQosPolicy not available.");
    }

    return scope.Escape((napi_value)ctor_ref->New({})).As< NapiContainer >();
}


PartitionQosPolicyProxy::NapiContainer
PartitionQosPolicyProxy::NewInstance(Napi::Env env, CppEntity const& cppInstance)
{
    NapiContainer result = NewInstance(env);
    FromCpp(env, cppInstance, result);

    return result;
}


void
PartitionQosPolicyProxy::FromCpp(Napi::Env env, CppEntity const& cppVal, NapiContainer& jsValOut)
{
    char **name_value = nullptr;
    uint32_t name_count = 1;

    if (!dds_qget_partition(cppVal, &name_count, &name_value))
    {
        throw Napi::Error::New(env, "Internal error: Could not fetch partition name sequence.");
    }
    
    Napi::Array name_field = Napi::Array::New(env, name_count);
    for (int idx = 0; idx < name_count; idx++)
    {
        name_field[idx] = Napi::String::New(env, name_value[idx]);
        dds_string_free(name_value[idx]);
        name_value[idx] = nullptr;
    }
    dds_free(name_value);
    name_value = nullptr;

    jsValOut.Set(PartitionQosPolicyProxy::NameField::NAME, name_field);
}


void
PartitionQosPolicyProxy::FromJs(Napi::Env env, NapiContainer const& jsVal, CppEntity& cppValOut)
{
    Napi::Array name_field = jsVal.Get(PartitionQosPolicyProxy::NameField::NAME).As< Napi::Array >();
    uint32_t name_count = name_field.Length();
    char **name_value = (char **)dds_alloc(name_count * sizeof(char*));

    for (int idx = 0; idx < name_count; idx++)
    {
        Napi::String a_name = name_field.Get(idx).As< Napi::String >();
        name_value[idx] = dds_string_dup(a_name.Utf8Value().c_str());
    }

    dds_qset_partition(cppValOut, name_count, (const char**)name_value);

    for (int idx = 0; idx < name_count; idx++)
    {
        dds_string_free(name_value[idx]);
        name_value[idx] = nullptr;
    }
    dds_free(name_value);
    name_value = nullptr;
}


PartitionQosPolicyProxy::PartitionQosPolicyProxy(Napi::CallbackInfo const& info):
    Napi::ObjectWrap< PartitionQosPolicyProxy >(info)
{
    NapiContainer this_instance = info.This().As< NapiContainer >();
    this_instance.Set(PartitionQosPolicyProxy::NameField::NAME, Napi::Array::New(info.Env()));
}

} // end namespace DdsJs

// vim: set ts=4 sw=4 expandtab:
