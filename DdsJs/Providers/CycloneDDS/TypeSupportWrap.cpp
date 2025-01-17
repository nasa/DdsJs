/**
 * \file CycloneDDS/TypeSupportWrap.cpp
 * \brief Contains the implementation for the \c DdsJs::TypeSupportWrapBase class for CycloneDDS.
 * \author Rolando J. Nieves
 * \date 2024-12-06 08:41:35
 */

// --------------------------------------------------------------------------
// Standard C++ Library
#include <string>

// --------------------------------------------------------------------------
// DdsJs CycloneDDS-Specific
#include <DdsJs/Providers/CycloneDDS/DomainParticipantWrap.hh>

// --------------------------------------------------------------------------
// Local Definition
#include "TypeSupportWrap.hh"


namespace DdsJs
{

Napi::Value
TypeSupportWrapBase::GetTypeName(Napi::CallbackInfo const& info)
{
    return Napi::String::New(info.Env(), m_typeInfo.typeName);
}


Napi::Value
TypeSupportWrapBase::RegisterType(Napi::CallbackInfo const& info)
{
    std::string type_alias;
    DomainParticipantWrap *particip_wrap = nullptr;

    switch(info.Length())
    {
        case 2:
            type_alias = info[1].As< Napi::String >().Utf8Value();
            // Fall-through intentional
        case 1:
            particip_wrap = Napi::ObjectWrap< DomainParticipantWrap >::Unwrap(info[0].As< Napi::Object >());
            break;
        default:
            throw Napi::Error::New(info.Env(), "TypeSupport.registerType(): Invalid number of arguments provided.");
    }

    particip_wrap->registerTopicTypeInfo(m_typeInfo, type_alias);
    
    return info.Env().Undefined();
}


TypeSupportWrapBase::TypeSupportWrapBase(CycloneDDS::TypeInformation const& typeInfo):
    m_typeInfo(typeInfo)
{}

} // end namespace DdsJs

// vim: set ts=4 sw=4 expandtab:
