/**
 * \file ConstructorRegistry.cpp
 * \brief Contains the implementation for the \c ConstructorRegistry class.
 * \author Rolando J. Nieves <rolando.j.nieves@nasa.gov>
 * \date 2024-02-07 10:58:39
 */

#include <sstream>

#include "ConstructorRegistry.hh"


namespace DdsJs {

ConstructorRegistry::~ConstructorRegistry()
{
    for (auto iter = m_constructors.begin(); iter != m_constructors.end(); ++iter)
    {
        delete (*iter).second;
        (*iter).second = nullptr;
    }

    m_constructors.clear();
}


Napi::FunctionReference*
ConstructorRegistry::getConstructorFor(DottedName const& classFqn)
{
    ConstructorMap::iterator ctor_iter = m_constructors.find(classFqn.flat());

    if (ctor_iter == m_constructors.end())
    {
        return nullptr;
    }
    
    return (*ctor_iter).second;
}


void
ConstructorRegistry::setConstructorFor(DottedName const& classFqn, Napi::FunctionReference *ctorFunc)
{
    ConstructorMap::iterator ctor_iter = m_constructors.find(classFqn.flat());

    if (ctor_iter != m_constructors.end())
    {
        delete (*ctor_iter).second;
        m_constructors.erase(ctor_iter);
    }

    m_constructors[classFqn.flat()] = ctorFunc;
}

} // end namespace DdsJs

// vim: set ts=4 sw=4 expandtab:
