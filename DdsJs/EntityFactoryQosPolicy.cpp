/**
 * \file EntityFactoryQosPolicy.cpp
 * \brief Contains the implementation of the \c EntityFactoryQosPolicyProxy class.
 * \author Rolando J. Nieves <rolando.j.nieves@nasa.gov>
 * \date 2024-01-23 10:27:06
 */

#include "EntityFactoryQosPolicy.hh"


namespace DdsJs {

const char *EntityFactoryQosPolicyProxy::AutoenableCreatedEntitiesField::NAME = "autoenable_created_entities";

const char *EntityFactoryQosPolicyProxy::MODNAME = "DDS";

const char *EntityFactoryQosPolicyProxy::NAME = "EntityFactoryQosPolicy";

Napi::Object
EntityFactoryQosPolicyProxy::Init(Napi::Env env, Napi::Object exports, ConstructorRegistry *ctorReg)
{
    Napi::Function ctor_func = DefineClass(
        env,
        EntityFactoryQosPolicyProxy::NAME,
        {}
    );

    Napi::FunctionReference *ctor_ref = new Napi::FunctionReference();
    *ctor_ref = Napi::Persistent(ctor_func);
    ctorReg->setConstructorFor(DottedName({ EntityFactoryQosPolicyProxy::MODNAME, EntityFactoryQosPolicyProxy::NAME }), ctor_ref);

    exports.Set(EntityFactoryQosPolicyProxy::NAME, ctor_func);

    return exports;
}


EntityFactoryQosPolicyProxy::NapiContainer
EntityFactoryQosPolicyProxy::NewInstance(Napi::Env env)
{
    Napi::EscapableHandleScope scope(env);
    Napi::FunctionReference *ctor_ref = env.GetInstanceData< ConstructorRegistry >()->getConstructorFor(DottedName({ EntityFactoryQosPolicyProxy::MODNAME, EntityFactoryQosPolicyProxy::NAME }));
    if (nullptr == ctor_ref)
    {
        throw Napi::Error::New(env, "Internal error: Constructor for EntityFactoryQosPolicy not available.");
    }

    return scope.Escape((napi_value)ctor_ref->New({})).As< NapiContainer >();
}


EntityFactoryQosPolicyProxy::NapiContainer
EntityFactoryQosPolicyProxy::NewInstance(Napi::Env env, CppEntity const& cppInstance)
{
    NapiContainer result = NewInstance(env);
    FromCpp(env, cppInstance, result);

    return result;
}


void
EntityFactoryQosPolicyProxy::FromCpp(Napi::Env env, CppEntity const& cppVal, NapiContainer& jsValOut)
{
    jsValOut.Set(EntityFactoryQosPolicyProxy::AutoenableCreatedEntitiesField::NAME, EntityFactoryQosPolicyProxy::AutoenableCreatedEntitiesField::Proxy::NewInstance(env, cppVal.autoenable_created_entities));
}


void
EntityFactoryQosPolicyProxy::FromJs(Napi::Env env, NapiContainer const& jsVal, CppEntity& cppValOut)
{
    EntityFactoryQosPolicyProxy::AutoenableCreatedEntitiesField::Proxy::FromJs(env, jsVal.Get(EntityFactoryQosPolicyProxy::AutoenableCreatedEntitiesField::NAME).As< EntityFactoryQosPolicyProxy::AutoenableCreatedEntitiesField::Proxy::NapiContainer >(), cppValOut.autoenable_created_entities);
}


EntityFactoryQosPolicyProxy::EntityFactoryQosPolicyProxy(Napi::CallbackInfo const& info):
    Napi::ObjectWrap< EntityFactoryQosPolicyProxy >(info)
{
    NapiContainer this_instance = info.This().As< NapiContainer >();
    this_instance.Set(EntityFactoryQosPolicyProxy::AutoenableCreatedEntitiesField::NAME, EntityFactoryQosPolicyProxy::AutoenableCreatedEntitiesField::Proxy::NewInstance(info.Env()));
}

} // end namespace DdsJs

// vim: set ts=4 sw=4 expandtab:
