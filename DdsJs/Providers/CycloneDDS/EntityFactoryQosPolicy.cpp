/**
 * \file CycloneDDS/EntityFactoryQosPolicy.cpp
 * \brief Contains the implementation of the \c EntityFactoryQosPolicyProxy class.
 * \author Rolando J. Nieves <rolando.j.nieves@nasa.gov>
 * \date 2024-10-02 10:17:17
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
    // As of 2024-10-02 (CycloneDDS version 0.10.5)
    // CycloneDDS does not expose the value of this QoS policy via its public
    // QoS API. Thus, this will assume it is always `true`
    jsValOut.Set(EntityFactoryQosPolicyProxy::AutoenableCreatedEntitiesField::NAME, Napi::Boolean::New(env, true));
}


void
EntityFactoryQosPolicyProxy::FromJs(Napi::Env env, NapiContainer const& jsVal, CppEntity& cppValOut)
{
    // As of 2024-10-02 (CycloneDDS version 0.10.5)
    // CycloneDDS does not expose the value of this QoS policy via its public
    // QoS API. Thus, this method is a no-op.
}


EntityFactoryQosPolicyProxy::EntityFactoryQosPolicyProxy(Napi::CallbackInfo const& info):
    Napi::ObjectWrap< EntityFactoryQosPolicyProxy >(info)
{
    NapiContainer this_instance = info.This().As< NapiContainer >();
    // As of 2024-10-02 (CycloneDDS version 0.10.5)
    // CycloneDDS does not expose the value of this QoS policy via its public
    // QoS API. Thus, this will assume it is always `true`
    this_instance.Set(EntityFactoryQosPolicyProxy::AutoenableCreatedEntitiesField::NAME, Napi::Boolean::New(info.Env(), true));
}

} // end namespace DdsJs

// vim: set ts=4 sw=4 expandtab:
