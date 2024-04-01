/**
 * \file JsWrapperInstanceRef.hh
 * \brief Contains the definition of the \c JsWrapperInstanceRef class.
 * \author Rolando J. Nieves <rolando.j.nieves@nasa.gov>
 * \date 2024-02-07 14:56:07
 */

#ifndef _DDSJS_DDSJS_JSWRAPPERINSTANCEREF_HH_
#define _DDSJS_DDSJS_JSWRAPPERINSTANCEREF_HH_

#include <memory>
#include <sstream>
#include <stdexcept>
#include <string>

#include <napi.h>


namespace DdsJs {

class JsWrapperInstanceRef
{
private:
    const std::string m_className;
    const std::string m_jsInstanceLabel;
    std::unique_ptr< Napi::ObjectReference > m_jsWrapperObj;

public:
    JsWrapperInstanceRef(std::string const& className, std::string const& jsInstanceLabel);

    JsWrapperInstanceRef(JsWrapperInstanceRef const& other) = delete;

    JsWrapperInstanceRef(JsWrapperInstanceRef&& other) = delete;

    virtual ~JsWrapperInstanceRef() = default;

    Napi::Object get(Napi::Env env, std::string const& methodName);

    template< typename WrappedClass >
    WrappedClass* getWrapped(std::string const& methodName) const;

    void reset(Napi::Object jsWrapperObj);

    JsWrapperInstanceRef& operator=(JsWrapperInstanceRef const& other) = delete;

    JsWrapperInstanceRef& operator=(JsWrapperInstanceRef&& other) = delete;
};

template< typename WrappedClass >
WrappedClass*
JsWrapperInstanceRef::getWrapped(std::string const& methodName) const
{
    if (!m_jsWrapperObj)
    {
        std::stringstream msg;

        msg << m_className
            << "."
            << methodName
            << "(): Internal Error: JS "
            << m_jsInstanceLabel
            << " instance not available.";
        throw std::runtime_error(msg.str());
    }

    return WrappedClass::Unwrap(m_jsWrapperObj->Value());
}

} // end namespace DdsJs

#endif /* !_DDSJS_DDSJS_JSWRAPPERINSTANCEREF_HH_ */

// vim: set ts=4 sw=4 expandtab:
