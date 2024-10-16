/**
 * \file CoreDX/ReaderTakeTuple.hh
 * \brief Contains the definition of the \c DdsJs::CoreDX::ReaderTakeTuple class.
 * \author Rolando J. Nieves
 * \date 2024-10-16 13:36:07
 */

#ifndef _DDSJS_DDSJS_PROVIDERS_COREDX_READERTAKETUPLE_HH_
#define _DDSJS_DDSJS_PROVIDERS_COREDX_READERTAKETUPLE_HH_

// --------------------------------------------------------------------------
// CoreDX API Headers
#include <dds/dds.hh>
#include <dds/dds_builtin.hh>
#include <dds/dds_typesupport.hh>


namespace DdsJs
{

namespace CoreDX
{

template< typename SampleType >
class ReaderTakeTuple
{
private:
    SampleType *m_samplePtr;
    DDS::SampleInfo& m_sampleInfoRef;

public:
    ReaderTakeTuple(SampleType *samplePtr, DDS::SampleInfo& sampleInfoRef):
        m_samplePtr(samplePtr),
        m_sampleInfoRef(sampleInfoRef)
    {}

    ReaderTakeTuple(ReaderTakeTuple const& other):
        m_samplePtr(other.m_samplePtr),
        m_sampleInfoRef(other.m_sampleInfoRef)
    {}

    // Incoming pointers are weak references and we don't manage their memory.
    virtual ~ReaderTakeTuple()
    { m_samplePtr = nullptr; }

    // Care must be taken by the caller to not call this method before calling
    // sampleInfo().is_valid. sampleInfo() will *always* be safe to call.
    inline SampleType& sample() { return *m_samplePtr; }

    inline DDS::SampleInfo& sampleInfo() { return m_sampleInfoRef; }

    ReaderTakeTuple& operator=(ReaderTakeTuple const& other)
    { m_samplePtr = other.m_samplePtr; m_sampleInfoRef = other.m_sampleInfoRef; return *this; }
};

} // end namespace CoreDX

} // end namespace DdsJs

#endif /* !_DDSJS_DDSJS_PROVIDERS_COREDX_READERTAKETUPLE_HH_ */

// vim: set ts=4 sw=4 expandtab:
