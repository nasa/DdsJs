/**
 * \file TypeSupportWrap.hh
 * \brief Contains the definition of the \c TypeSupportWrapBaseT template class.
 * \author Rolando J. Nieves
 * \date 2024-01-29 15:43:24
 */

#ifndef _DDSJS_DDSJS_TYPESUPPORTWRAP_HH_
#define _DDSJS_DDSJS_TYPESUPPORTWRAP_HH_

#include <memory>
#include <sstream>
#include <string>

#include <napi.h>

#include <DdsJs/DomainParticipantWrap.hh>
#include <DdsJs/dds_error_util.hh>

#include <DdsJs/dds_provider.hh>


namespace DdsJs {

struct TypeSupportAssociations
{
    const std::string readerJsClassName;
    const std::string writerJsClassName;

    TypeSupportAssociations(
        std::string const& in_readerJsClassName,
        std::string const& in_writerJsClassName
    ):
        readerJsClassName(in_readerJsClassName),
        writerJsClassName(in_writerJsClassName)
    {}

    TypeSupportAssociations(TypeSupportAssociations const& other) = default;

    TypeSupportAssociations(TypeSupportAssociations&& other) = default;

    TypeSupportAssociations& operator=(TypeSupportAssociations const& other) = delete;

    TypeSupportAssociations& operator=(TypeSupportAssociations&& other) = delete;
};


template< typename TypeSupportClass >
class TypeSupportWrapBaseT
{
protected:
    std::shared_ptr< TypeSupportAssociations > m_associations;
    std::unique_ptr< TypeSupportClass > m_typeSupport;

    Napi::Value GetTypeName(Napi::CallbackInfo const& info);

    Napi::Value RegisterType(Napi::CallbackInfo const& info);

public:
    TypeSupportWrapBaseT(TypeSupportAssociations const& associations);

    virtual ~TypeSupportWrapBaseT() = default;
};


template< typename TypeSupportClass >
Napi::Value
TypeSupportWrapBaseT< TypeSupportClass >::GetTypeName(Napi::CallbackInfo const& info)
{
    return Napi::String::New(info.Env(), m_typeSupport->get_type_name());
}


template< typename TypeSupportClass >
Napi::Value
TypeSupportWrapBaseT< TypeSupportClass >::RegisterType(Napi::CallbackInfo const& info)
{
    std::string type_name(m_typeSupport->get_type_name());
    DDS::DomainParticipant *participant = nullptr;
    DomainParticipantWrap *participant_wrap = nullptr;

    switch (info.Length())
    {
    case 2:
        type_name = info[1].As< Napi::String >().Utf8Value();
        // Fall-through intentional
    case 1:
        participant_wrap = DomainParticipantWrap::Unwrap(info[0].As< Napi::Object >());
        participant = participant_wrap->useParticipant(info.Env());
        break;
    default:
        {
            std::stringstream msg;

            msg << "TypeSupport.registerType(): Invalid number of arguments provided.";
            throw Napi::Error::New(info.Env(), msg.str());
        }
    }

    DDS::ReturnCode_t result = m_typeSupport->register_type(participant, type_name.c_str());
    if (result != DDS::RETCODE_OK)
    {
        throw NewDdsError(info.Env(), "TypeSupport", "registerType", result);
    }

    participant_wrap->rememberTypeAssoc(type_name, m_associations);
    
    return info.Env().Undefined();
}


template< typename TypeSupportClass >
TypeSupportWrapBaseT< TypeSupportClass >::TypeSupportWrapBaseT(TypeSupportAssociations const& associations):
    m_typeSupport(nullptr)
{
    m_associations = std::make_shared< TypeSupportAssociations >(associations);
}

} // end namespace DdsJs

#endif /* ! _DDSJS_DDSJS_TYPESUPPORTWRAP_HH_ */

// vim: set ts=4 sw=4 expandtab:
