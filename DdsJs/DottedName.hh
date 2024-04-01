/**
 * \file DottedName.hh
 * \brief Contains the definition of the \c DottedName class.
 * \author Rolando J. Nieves <rolando.j.nieves@nasa.gov>
 * \date 2024-02-07 11:36:56
 */

#ifndef _DDSJS_DDSJS_DOTTEDNAME_HH_
#define _DDSJS_DDSJS_DOTTEDNAME_HH_

#include <initializer_list>
#include <string>


namespace DdsJs {

class DottedName
{
private:
    std::string m_flat;

public:
    DottedName(std::initializer_list< std::string >&& components);

    DottedName(DottedName const& other) = default;

    DottedName(DottedName&& other) = default;

    virtual ~DottedName() = default;

    inline std::string const& flat() const { return m_flat; }

    DottedName& operator=(DottedName const& other) = default;

    DottedName& operator=(DottedName&& other) = default;
};

} // end namespace DdsJs

#endif /* !_DDSJS_DDSJS_DOTTEDNAME_HH_ */

// vim: set ts=4 sw=4 expandtab:
