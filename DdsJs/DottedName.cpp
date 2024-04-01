/**
 * \file DottedName.cpp
 * \brief Contains the implementation of the \c DottedName class.
 * \author Rolando J. Nieves <rolando.j.nieves@nasa.gov>
 * \date 2024-02-07 11:39:56
 */

#include <sstream>
#include <vector>

#include "DottedName.hh"


namespace DdsJs {

DottedName::DottedName(std::initializer_list< std::string >&& components)
{
    std::stringstream flat_stream;

    std::vector< std::string > component_list {std::forward< std::initializer_list< std::string > >(components)};
    
    for (auto component_iter = component_list.begin(); component_iter != component_list.end(); ++component_iter)
    {
        if (component_iter != component_list.begin())
        {
            flat_stream << ".";
        }
        flat_stream << (*component_iter);
    }

    m_flat = flat_stream.str();
}

} // end namespace DdsJs

// vim: set ts=4 sw=4 expandtab:
