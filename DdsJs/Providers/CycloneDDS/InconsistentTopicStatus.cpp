/**
 * \file CycloneDDS/InconsistentTopicStatus.cpp
 * \brief Contains the implementation for the \c DdsJs::InconsistentTopicStatusProxy class.
 * \author Rolando J. Nieves
 * \date 2024-10-15 13:48:50
 */

// --------------------------------------------------------------------------
// Local Definition
#include "InconsistentTopicStatus.hh"


namespace DdsJs
{

const char *InconsistentTopicStatusProxy::TotalCountField::NAME = "total_count";
const char *InconsistentTopicStatusProxy::TotalCountChangeField::NAME = "total_count_change";

const char *InconsistentTopicStatusProxy::MODNAME = "DDS";
const char *InconsistentTopicStatusProxy::NAME = "InconsistentTopicStatus";

Napi::Object
InconsistentTopicStatusProxy::Init(Napi::Env env, Napi::Object exports, ConstructorRegistry *ctorReg)
{
    Napi::Function ctor_func = DefineClass(
        env,
        NAME,
        {}
    );

    Napi::FunctionReference *ctor_ref = new Napi::FunctionReference();
    *ctor_ref = Napi::Persistent(ctor_func);
    ctorReg->setConstructorFor(DottedName({ MODNAME, NAME }), ctor_ref);

    exports.Set(NAME, ctor_func);

    return exports;
}


InconsistentTopicStatusProxy::NapiContainer
InconsistentTopicStatusProxy::NewInstance(Napi::Env env)
{
    Napi::EscapableHandleScope scope(env);
    Napi::FunctionReference *ctor_ref = env.GetInstanceData< ConstructorRegistry >()->getConstructorFor(DottedName({ MODNAME, NAME }));

    if (nullptr == ctor_ref)
    {
        throw Napi::Error::New(env, "Internal error: Constructor for InconsistentTopicStatus not available.");
    }

    return scope.Escape((napi_value)ctor_ref->New({})).As< NapiContainer >();
}


InconsistentTopicStatusProxy::NapiContainer
InconsistentTopicStatusProxy::NewInstance(Napi::Env env, CppEntity const& cppVal)
{
    NapiContainer result = NewInstance(env);
    FromCpp(env, cppVal, result);

    return result;
}


void
InconsistentTopicStatusProxy::FromCpp(Napi::Env env, CppEntity const& cppVal, NapiContainer& jsValOut)
{
    jsValOut.Set(TotalCountField::NAME, TotalCountField::Proxy::NewInstance(env, cppVal.total_count));
    jsValOut.Set(TotalCountChangeField::NAME, TotalCountChangeField::Proxy::NewInstance(env, cppVal.total_count_change));
}


void
InconsistentTopicStatusProxy::FromJs(Napi::Env env, NapiContainer const& jsVal, CppEntity& cppValOut)
{
    TotalCountField::Proxy::FromJs(env, jsVal.Get(TotalCountField::NAME).As< TotalCountField::Proxy::NapiContainer >(), cppValOut.total_count);
    TotalCountChangeField::Proxy::FromJs(env, jsVal.Get(TotalCountChangeField::NAME).As< TotalCountChangeField::Proxy::NapiContainer >(), cppValOut.total_count_change);
}


InconsistentTopicStatusProxy::InconsistentTopicStatusProxy(Napi::CallbackInfo const& info):
    Napi::ObjectWrap< InconsistentTopicStatusProxy >(info)
{
    NapiContainer this_instance = info.This().As< NapiContainer >();

    this_instance.Set(TotalCountField::NAME, TotalCountField::Proxy::NewInstance(info.Env()));
    this_instance.Set(TotalCountChangeField::NAME, TotalCountChangeField::Proxy::NewInstance(info.Env()));
}

} // end namespace DdsJs

// vim: set ts=4 sw=4 expandtab:
