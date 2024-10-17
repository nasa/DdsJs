/**
 * \file CycloneDDS/OwnershipQosPolicyKind.cpp
 * \brief Contains the implementation for the \c OwnershipQosPolicyKindProxy class.
 * \author Rolando J. Nieves <rolando.j.nieves@nasa.gov>
 * \date 2024-10-03 17:20:29
 */

// --------------------------------------------------------------------------
// Local Definition
#include "OwnershipQosPolicyKind.hh"


namespace DdsJs
{

const char *OwnershipQosPolicyKindProxy::NAME = "OwnershipQosPolicyKind";


Napi::Object
OwnershipQosPolicyKindProxy::Init(Napi::Env env, Napi::Object exports)
{
    Napi::Object enum_obj = Napi::Object::New(env);
    enum_obj.DefineProperties(
        {
            Napi::PropertyDescriptor::Value("SHARED_OWNERSHIP_QOS", Napi::Number::New(env, dds_ownership_kind::DDS_OWNERSHIP_SHARED), napi_enumerable),
            Napi::PropertyDescriptor::Value("EXCLUSIVE_OWNERSHIP_QOS", Napi::Number::New(env, dds_ownership_kind::DDS_OWNERSHIP_EXCLUSIVE), napi_enumerable)
        }
    );

    exports.Set(OwnershipQosPolicyKindProxy::NAME, enum_obj);

    return exports;
}


OwnershipQosPolicyKindProxy::NapiContainer
OwnershipQosPolicyKindProxy::NewInstance(Napi::Env env)
{
    Napi::EscapableHandleScope scope(env);
    Napi::Number result = Napi::Number::New(env, dds_ownership_kind::DDS_OWNERSHIP_SHARED);

    return scope.Escape((napi_value)result).ToNumber();
}


OwnershipQosPolicyKindProxy::NapiContainer
OwnershipQosPolicyKindProxy::NewInstance(Napi::Env env, CppEntity const& cppInstance)
{
    Napi::EscapableHandleScope scope(env);
    Napi::Number result = Napi::Number::New(env, cppInstance);

    return scope.Escape((napi_value)result).ToNumber();
}


void
OwnershipQosPolicyKindProxy::FromCpp(Napi::Env env, CppEntity const& cppVal, NapiContainer& jsValOut)
{
    jsValOut = NewInstance(env, cppVal);
}


void
OwnershipQosPolicyKindProxy::FromJs(Napi::Env env, NapiContainer const& jsVal, CppEntity& cppValOut)
{
    cppValOut = static_cast< CppEntity >(jsVal.Int32Value());
}

} // end namespace DdsJs

// vim: set ts=4 sw=4 expandtab:
