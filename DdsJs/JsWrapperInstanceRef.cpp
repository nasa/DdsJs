/**
 * \file JsWrapperInstanceRef.cpp
 * \brief Contains the implementation for the \c JsWrapperInstanceRef class.
 * \author Rolando J. Nieves <rolando.j.nieves@nasa.gov>
 * \date 2024-02-07 14:58:25
 */

#include <sstream>

#include "JsWrapperInstanceRef.hh"


namespace DdsJs {

JsWrapperInstanceRef::JsWrapperInstanceRef(std::string const& className, std::string const& jsInstanceLabel):
    m_className(className),
    m_jsInstanceLabel(jsInstanceLabel)
{}


Napi::Object
JsWrapperInstanceRef::get(Napi::Env env, std::string const& methodName)
{
    if (!m_jsWrapperObj)
    {
        std::stringstream msg;

        msg << m_className
            << "."
            << methodName
            << "(): "
            << "Internal error: "
            << "JS "
            << m_jsInstanceLabel
            << " instance not available.";
        throw Napi::Error::New(env, msg.str());
    }

    return m_jsWrapperObj->Value();
}


void
JsWrapperInstanceRef::reset(Napi::Object jsWrapperObj)
{
    m_jsWrapperObj.reset(new Napi::ObjectReference());
    *m_jsWrapperObj = Napi::Persistent(jsWrapperObj);
}

} // end namespace DdsJs

// vim: set ts=4 sw=4 expandtab:
