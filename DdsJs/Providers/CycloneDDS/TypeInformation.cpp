/**
 * \file CycloneDDS/TypeInformation.cpp
 * \brief Contains the implementation of the \c DdsJs::CycloneDDS::TypeInformation class.
 * \author Rolando J. Nieves
 * \date 2024-12-05 19:03:52
 */

// --------------------------------------------------------------------------
// Local Definition
#include "TypeInformation.hh"


namespace DdsJs
{

namespace CycloneDDS
{

TypeInformation::TypeInformation(
    dds_topic_descriptor_t const* in_topicDesc,
    std::string const& in_typeName,
    std::string const& in_jsReaderFqn,
    std::string const& in_jsWriterFqn
):
    topicDesc(in_topicDesc),
    typeName(in_typeName),
    jsReaderFqn(in_jsReaderFqn),
    jsWriterFqn(in_jsWriterFqn)
{}

TypeInformation::TypeInformation(TypeInformation const& other):
    topicDesc(other.topicDesc),
    typeName(other.typeName),
    jsReaderFqn(other.jsReaderFqn),
    jsWriterFqn(other.jsWriterFqn)
{}

TypeInformation::TypeInformation(TypeInformation&& other):
    topicDesc(other.topicDesc),
    typeName(other.typeName),
    jsReaderFqn(other.jsReaderFqn),
    jsWriterFqn(other.jsWriterFqn)
{}


TypeInformation&
TypeInformation::operator=(TypeInformation const& other)
{
    this->topicDesc = other.topicDesc;
    this->typeName = other.typeName;
    this->jsReaderFqn = other.jsReaderFqn;
    this->jsWriterFqn = other.jsWriterFqn;

    return *this;
}


TypeInformation&
TypeInformation::operator=(TypeInformation&& other)
{
    this->topicDesc = other.topicDesc;
    this->typeName = other.typeName;
    this->jsReaderFqn = other.jsReaderFqn;
    this->jsWriterFqn = other.jsWriterFqn;

    return *this;
}

} // end namespace CycloneDDS

} // end namespace DdsJs

// vim: set ts=2 sw=2 expandtab:
