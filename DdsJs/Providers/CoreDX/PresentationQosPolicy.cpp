/**
 * \file CoreDX/PresentationQosPolicy.cpp
 * \brief Contains the implementation of the \c PresentationQosPolicyProxy class.
 * \author Rolando J. Nieves <rolando.j.nieves@nasa.gov>
 * \date 2024-01-23 12:21:39
 */

// --------------------------------------------------------------------------
// Local Definition
#include "PresentationQosPolicy.hh"


namespace DdsJs
{

const char *PresentationQosPolicyProxy::AccessScopeField::NAME = "access_scope";

const char *PresentationQosPolicyProxy::CoherentAccessField::NAME = "coherent_access";

const char *PresentationQosPolicyProxy::OrderedAccessField::NAME = "ordered_access";

const char *PresentationQosPolicyProxy::MODNAME = "DDS";

const char *PresentationQosPolicyProxy::NAME = "PresentationQosPolicy";

Napi::Object
PresentationQosPolicyProxy::Init(Napi::Env env, Napi::Object exports, ConstructorRegistry *ctorReg)
{
    Napi::Function ctor_func = DefineClass(
        env,
        PresentationQosPolicyProxy::NAME,
        {}
    );

    Napi::FunctionReference *ctor_ref = new Napi::FunctionReference();
    *ctor_ref = Napi::Persistent(ctor_func);
    ctorReg->setConstructorFor(DottedName({ PresentationQosPolicyProxy::MODNAME, PresentationQosPolicyProxy::NAME }), ctor_ref);

    exports.Set(PresentationQosPolicyProxy::NAME, ctor_func);

    return exports;
}


PresentationQosPolicyProxy::NapiContainer
PresentationQosPolicyProxy::NewInstance(Napi::Env env)
{
    Napi::EscapableHandleScope scope(env);
    Napi::FunctionReference *ctor_ref = env.GetInstanceData< ConstructorRegistry >()->getConstructorFor(DottedName({ PresentationQosPolicyProxy::MODNAME, PresentationQosPolicyProxy::NAME }));
    if (nullptr == ctor_ref)
    {
        throw Napi::Error::New(env, "Internal error: Constructor for PresentationQosPolicy not available.");
    }

    return scope.Escape((napi_value)ctor_ref->New({})).As< NapiContainer >();
}


PresentationQosPolicyProxy::NapiContainer
PresentationQosPolicyProxy::NewInstance(Napi::Env env, CppEntity const& cppInstance)
{
    NapiContainer result = NewInstance(env);
    FromCpp(env, cppInstance, result);

    return result;
}


void
PresentationQosPolicyProxy::FromCpp(Napi::Env env, CppEntity const& cppVal, NapiContainer& jsValOut)
{
    jsValOut.Set(PresentationQosPolicyProxy::AccessScopeField::NAME, PresentationQosPolicyProxy::AccessScopeField::Proxy::NewInstance(env, cppVal.access_scope));
    jsValOut.Set(PresentationQosPolicyProxy::CoherentAccessField::NAME, PresentationQosPolicyProxy::CoherentAccessField::Proxy::NewInstance(env, cppVal.coherent_access));
    jsValOut.Set(PresentationQosPolicyProxy::OrderedAccessField::NAME, PresentationQosPolicyProxy::OrderedAccessField::Proxy::NewInstance(env, cppVal.ordered_access));
}


void
PresentationQosPolicyProxy::FromJs(Napi::Env env, NapiContainer const& jsVal, CppEntity& cppValOut)
{
    PresentationQosPolicyProxy::AccessScopeField::Proxy::FromJs(env, jsVal.Get(PresentationQosPolicyProxy::AccessScopeField::NAME).As< PresentationQosPolicyProxy::AccessScopeField::Proxy::NapiContainer >(), cppValOut.access_scope);
    PresentationQosPolicyProxy::CoherentAccessField::Proxy::FromJs(env, jsVal.Get(PresentationQosPolicyProxy::CoherentAccessField::NAME).As< PresentationQosPolicyProxy::CoherentAccessField::Proxy::NapiContainer >(), cppValOut.coherent_access);
    PresentationQosPolicyProxy::OrderedAccessField::Proxy::FromJs(env, jsVal.Get(PresentationQosPolicyProxy::OrderedAccessField::NAME).As< PresentationQosPolicyProxy::OrderedAccessField::Proxy::NapiContainer >(), cppValOut.ordered_access);
}


PresentationQosPolicyProxy::PresentationQosPolicyProxy(Napi::CallbackInfo const& info):
    Napi::ObjectWrap< PresentationQosPolicyProxy >(info)
{
    NapiContainer this_instance = info.This().As< NapiContainer >();
    this_instance.Set(PresentationQosPolicyProxy::AccessScopeField::NAME, PresentationQosPolicyProxy::AccessScopeField::Proxy::NewInstance(info.Env()));
    this_instance.Set(PresentationQosPolicyProxy::CoherentAccessField::NAME, PresentationQosPolicyProxy::CoherentAccessField::Proxy::NewInstance(info.Env()));
    this_instance.Set(PresentationQosPolicyProxy::OrderedAccessField::NAME, PresentationQosPolicyProxy::OrderedAccessField::Proxy::NewInstance(info.Env()));
}

} // end namespace DdsJs

// vim: set ts=4 sw=4 expandtab:
