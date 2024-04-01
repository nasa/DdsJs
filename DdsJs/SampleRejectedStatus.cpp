/**
 * \file DdsJs/SampleRejectedStatus.cpp
 * \brief Contains the implementation for the \c SampleRejectedStatusProxy class.
 * \author Rolando J. Nieves
 * \date 2024-03-13 12:45:36
 */

#include "SampleRejectedStatus.hh"


namespace DdsJs
{

const char *SampleRejectedStatusProxy::TotalCountField::NAME = "total_count";
const char *SampleRejectedStatusProxy::TotalCountChangeField::NAME = "total_count_change";
const char *SampleRejectedStatusProxy::LastReasonField::NAME = "last_reason";
const char *SampleRejectedStatusProxy::LastInstanceHandleField::NAME = "last_instance_handle";

const char *SampleRejectedStatusProxy::MODNAME = "DDS";
const char *SampleRejectedStatusProxy::NAME = "SampleRejectedStatus";

Napi::Object
SampleRejectedStatusProxy::Init(Napi::Env env, Napi::Object exports, ConstructorRegistry *ctorReg)
{
    Napi::Function ctor_func = DefineClass(
        env,
        SampleRejectedStatusProxy::NAME,
        {}
    );

    Napi::FunctionReference *ctor_ref = new Napi::FunctionReference();
    *ctor_ref = Napi::Persistent(ctor_func);
    ctorReg->setConstructorFor(DottedName({ SampleRejectedStatusProxy::MODNAME, SampleRejectedStatusProxy::NAME }), ctor_ref);

    exports.Set(SampleRejectedStatusProxy::NAME, ctor_func);

    return exports;
}


SampleRejectedStatusProxy::NapiContainer
SampleRejectedStatusProxy::NewInstance(Napi::Env env)
{
    Napi::EscapableHandleScope scope(env);
    Napi::FunctionReference *ctor_ref = env.GetInstanceData< ConstructorRegistry >()->getConstructorFor(DottedName({ SampleRejectedStatusProxy::MODNAME, SampleRejectedStatusProxy::NAME }));
    if (nullptr == ctor_ref)
    {
        throw Napi::Error::New(env, "Internal error: Constructor for SampleRejectedStatus not available.");
    }

    return scope.Escape((napi_value)ctor_ref->New({})).As< NapiContainer >();
}


SampleRejectedStatusProxy::NapiContainer
SampleRejectedStatusProxy::NewInstance(Napi::Env env, CppEntity const& cppInstance)
{
    NapiContainer result = NewInstance(env);
    FromCpp(env, cppInstance, result);

    return result;
}


void
SampleRejectedStatusProxy::FromCpp(Napi::Env env, CppEntity const& cppVal, NapiContainer& jsValOut)
{
    jsValOut.Set(TotalCountField::NAME, TotalCountField::Proxy::NewInstance(env, cppVal.total_count));
    jsValOut.Set(TotalCountChangeField::NAME, TotalCountChangeField::Proxy::NewInstance(env, cppVal.total_count_change));
#if DDS_PROVIDER_COREDX
    // Unfortunately, CoreDX v5 defines a bona-fide C++ enumeration for
    // SampleRejectedStatusKind, but does not use it in the corresponding
    // SampleRejectedStatus structure. Instead, since they just type-alias the
    // C++ DDS::SampleRejectedStatus to the C DDS_SampleRejectedStatus, they
    // rely on the C-based DDS_SampleRejectedStatusKind enumeration. C++ strict
    // type checking impedes their transparent interchangeability, thus we have
    // to static_cast it.
    jsValOut.Set(LastReasonField::NAME, LastReasonField::Proxy::NewInstance(env, static_cast< LastReasonField::Proxy::CppEntity >(cppVal.last_reason)));
#else
    jsValOut.Set(LastReasonField::NAME, LastReasonField::Proxy::NewInstance(env, cppVal.last_reason));
#endif /* DDS_PROVIDER_COREDX */
    jsValOut.Set(LastInstanceHandleField::NAME, LastInstanceHandleField::Proxy::NewInstance(env, cppVal.last_instance_handle));
}


void
SampleRejectedStatusProxy::FromJs(Napi::Env env, NapiContainer const& jsVal, CppEntity& cppValOut)
{
    TotalCountField::Proxy::FromJs(env, jsVal.Get(TotalCountField::NAME).As< TotalCountField::Proxy::NapiContainer >(), cppValOut.total_count);
    TotalCountChangeField::Proxy::FromJs(env, jsVal.Get(TotalCountChangeField::NAME).As< TotalCountChangeField::Proxy::NapiContainer >(), cppValOut.total_count_change);
#if DDS_PROVIDER_COREDX
    // Unfortunately, CoreDX v5 defines a bona-fide C++ enumeration for
    // SampleRejectedStatusKind, but does not use it in the corresponding
    // SampleRejectedStatus structure. Instead, since they just type-alias the
    // C++ DDS::SampleRejectedStatus to the C DDS_SampleRejectedStatus, they
    // rely on the C-based DDS_SampleRejectedStatusKind enumeration. C++ strict
    // type checking impedes their transparent interchangeability, thus we have
    // to set it via an intermediary.
    DDS::SampleRejectedStatusKind intermediary;
    LastReasonField::Proxy::FromJs(env, jsVal.Get(LastReasonField::NAME).As< LastReasonField::Proxy::NapiContainer >(), intermediary);
    cppValOut.last_reason = static_cast< DDS_SampleRejectedStatusKind >(intermediary);
#else
    LastReasonField::Proxy::FromJs(env, jsVal.Get(LastReasonField::NAME).As< LastReasonField::Proxy::NapiContainer >(), cppValOut.last_reason);
#endif /* DDS_PROVIDER_COREDX */
    LastInstanceHandleField::Proxy::FromJs(env, jsVal.Get(LastInstanceHandleField::NAME).As< LastInstanceHandleField::Proxy::NapiContainer >(), cppValOut.last_instance_handle);
}


SampleRejectedStatusProxy::SampleRejectedStatusProxy(Napi::CallbackInfo const& info):
    Napi::ObjectWrap< SampleRejectedStatusProxy >(info)
{
    NapiContainer this_instance = info.This().As< NapiContainer >();
    CppEntity blank_value;

    FromCpp(info.Env(), blank_value, this_instance);
}

} // end namespace DdsJs

// vim: set ts=4 sw=4 expandtab:
