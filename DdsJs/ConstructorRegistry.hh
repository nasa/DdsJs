/**
 * \file ConstructorRegistry.hh
 * \brief Contains the definition of the \c ConstructorRegistry class.
 * \author Rolando J. Nieves <rolando.j.nieves@nasa.gov>
 * \date 2024-02-07 10:51:38
 */

#ifndef _DDSJS_DDSJS_CONSTRUCTORREGISTRY_HH_
#define _DDSJS_DDSJS_CONSTRUCTORREGISTRY_HH_

#include <map>

#include <napi.h>

#include <DdsJs/DottedName.hh>


namespace DdsJs {

class ConstructorRegistry
{
private:
    using ConstructorMap = std::map< std::string, Napi::FunctionReference* >;

    ConstructorMap m_constructors;

public:
    ConstructorRegistry()
    {}

    ConstructorRegistry(ConstructorRegistry const& other) = delete;

    ConstructorRegistry(ConstructorRegistry&& other) = delete;

    virtual ~ConstructorRegistry();

    Napi::FunctionReference* getConstructorFor(DottedName const& classFqn);

    void setConstructorFor(DottedName const& classFqn, Napi::FunctionReference *ctorFunc);

    ConstructorRegistry& operator=(ConstructorRegistry const& other) = delete;

    ConstructorRegistry& operator=(ConstructorRegistry&& other) = delete;
};

} // end namespace DdsJs

#endif /* !_DDSJS_DDSJS_CONSTRUCTORREGISTRY_HH_ */

// vim: set ts=4 sw=4 expandtab:
