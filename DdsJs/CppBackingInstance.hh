/**
 * \file CppBackingInstance.hh
 * \brief Contains the definition of the \c CppBackingInstance class.
 * \author Rolando J. Nieves <rolando.j.nieves@nasa.gov>
 * \date 2024-02-07 13:43:16
 */

#ifndef _DDSJS_DDSJS_CPPBACKINGINSTANCE_HH_
#define _DDSJS_DDSJS_CPPBACKINGINSTANCE_HH_

#include <memory>
#include <sstream>
#include <stdexcept>
#include <string>

#include <napi.h>


namespace DdsJs {

template< typename CppEntity >
class CppBackingInstance
{
public:
    using CppEntityType = CppEntity;

private:
    const std::string m_className;
    // Tried using std::unique_ptr but DDS protects the Publisher,
    // Subscriber, and Topic C++ destructors.
    CppEntity* m_entity;

public:
    CppBackingInstance(std::string const& className);

    CppBackingInstance(CppBackingInstance const& other) = delete;

    CppBackingInstance(CppBackingInstance&& other) = delete;

    // Can't automatically delete m_entity because of the protected
    // destructors.
    virtual ~CppBackingInstance() = default;

    CppEntity* get(Napi::Env env, std::string const& methodName) const;

    CppEntity* get(std::string const& methodName) const;

    inline void reset(CppEntity *entity)
    { m_entity = entity; }

    inline bool valid() const
    { return m_entity != nullptr; }

    CppBackingInstance& operator=(CppBackingInstance const& other) = delete;

    CppBackingInstance& operator=(CppBackingInstance&& other) = delete;
};


template< typename CppEntity >
CppBackingInstance< CppEntity >::CppBackingInstance(std::string const& className):
    m_className(className),
    m_entity(nullptr)
{}


template< typename CppEntity >
CppEntity*
CppBackingInstance< CppEntity >::get(Napi::Env env, std::string const& methodName) const
{
    if (nullptr == m_entity)
    {
        std::stringstream msg;
        msg << m_className
            << "."
            << methodName
            << "(): "
            << "Internal error: "
            << "Backing C++ DDS instance not available.";
        throw Napi::Error::New(env, msg.str());
    }

    return m_entity;
}


template< typename CppEntity >
CppEntity*
CppBackingInstance< CppEntity >::get(std::string const& methodName) const
{
    if (nullptr == m_entity)
    {
        std::stringstream msg;
        msg << m_className
            << "."
            << methodName
            << "(): "
            << "Internal error: "
            << "Backing C++ DDS instance not available.";
        throw std::runtime_error(msg.str());
    }

    return m_entity;
}

} // end namespace DdsJs

#endif /* !_DDSJS_DDSJS_CPPBACKINGINSTANCE_HH_ */

// vim: set ts=4 sw=4 expandtab:
