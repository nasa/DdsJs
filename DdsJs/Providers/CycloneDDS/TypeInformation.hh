/**
 * \file CycloneDDS/TypeInformation.hh
 * \brief Contains the definition of the \c DdsJs::CycloneDDS::TypeInformation class.
 * \author Rolando J. Nieves
 * \date 2024-12-05 18:56:10
 */

#ifndef _DDSJS_DDSJS_PROVIDERS_CYCLONEDDS_TYPEINFORMATION_HH_
#define _DDSJS_DDSJS_PROVIDERS_CYCLONEDDS_TYPEINFORMATION_HH_

// --------------------------------------------------------------------------
// Standard C++ Library
#include <string>

// --------------------------------------------------------------------------
// CycloneDDS C API
#include <dds/dds.h>


namespace DdsJs
{

namespace CycloneDDS
{

class TypeInformation
{
public:
    dds_topic_descriptor_t* topicDesc;
    std::string typeName;
    std::string jsReaderFqn;
    std::string jsWriterFqn;

    TypeInformation(dds_topic_descriptor_t* in_topicDesc, std::string const& in_typeName, std::string const& in_jsReaderFqn, std::string const& in_jsWriterFqn);

    virtual ~TypeInformation() = default;

    TypeInformation(TypeInformation const& other);

    TypeInformation(TypeInformation&& other);

    TypeInformation& operator=(TypeInformation const& other);

    TypeInformation& operator=(TypeInformation&& other);
};

} // end namespace CycloneDDS

} // end namespace DdsJs

#endif /* !_DDSJS_DDSJS_PROVIDERS_CYCLONEDDS_TYPEINFORMATION_HH_ */

// vim: set ts=4 sw=4 expandtab:
