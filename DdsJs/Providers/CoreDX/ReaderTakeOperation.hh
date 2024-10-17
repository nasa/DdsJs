/**
 * \file CoreDX/ReaderTakeOperation.hh
 * \brief Contains the definition of the \c DdsJs::CoreDX::ReaderTakeOperation class.
 * \author Rolando J. Nieves
 * \date 2024-10-16 13:44:53
 */

#ifndef _DDSJS_DDSJS_PROVIDERS_COREDX_READERTAKEOPERATION_HH_
#define _DDSJS_DDSJS_PROVIDERS_COREDX_READERTAKEOPERATION_HH_

// --------------------------------------------------------------------------
// CoreDX API Headers
#include <dds/dds.hh>
#include <dds/dds_builtin.hh>
#include <dds/dds_typesupport.hh>

// --------------------------------------------------------------------------
// DdsJs Generic
#include <DdsJs/ReaderTakeResultIterator.hh>

// --------------------------------------------------------------------------
// DdsJs CoreDX-Specific
#include <DdsJs/Providers/CoreDX/ReaderTakeTuple.hh>

namespace DdsJs
{

namespace CoreDX
{

template< typename ReaderType, typename SampleType >
class ReaderTakeOperation : public ReaderTakeResultIterator< SampleType, ReaderTakeTuple >
{
private:
    DDS::InstanceStateMask m_instanceStates;
    int32_t m_maxSamples;
    unsigned m_nextIndex;
    ReaderType *m_reader;
    DDS::SampleStateMask m_sampleStates;
    DDS::SampleInfoSeq m_sampleInfos;
    typename SampleType::Seq m_samples;
    DDS::ViewStateMask m_viewStates;

public:
    ReaderTakeOperation(
        ReaderType *reader,
        int32_t maxSamples,
        DDS::SampleStateMask sampleStates,
        DDS::ViewStateMask viewStates,
        DDS::InstanceStateMask instanceStates
    ):
        m_reader(reader),
        m_maxSamples(maxSamples),
        m_sampleStates(sampleStates),
        m_viewStates(viewStates),
        m_instanceStates(instanceStates),
        m_nextIndex(0u)
    {}

    virtual ~ReaderTakeOperation()
    {
        if (m_sampleInfos.length() > 0)
        {
            m_reader->return_loan(&m_samples, &m_sampleInfos);
        }
    }

    DDS::ReturnCode_t execute()
    {
        return m_reader->take(
            &m_samples,
            &m_sampleInfos,
            m_maxSamples,
            m_sampleStates,
            m_viewStates,
            m_instanceStates
        );
    }

    virtual bool hasNext() const
    { return m_nextIndex < m_sampleInfos.length(); }

    // Care must be taken to call hasNext() to confirm an entry is available.
    virtual ReaderTakeTuple< SampleType > next()
    { unsigned yieldIndex = m_nextIndex++; return ReaderTakeTuple< SampleType >(m_samples.at(yieldIndex), *m_sampleInfos.at(yieldIndex)); }

    virtual unsigned size() const
    { return m_sampleInfos.length(); }
};

} // end namespace CoreDX

} // end namespace DdsJs

#endif /* !_DDSJS_DDSJS_PROVIDERS_COREDX_READERTAKEOPERATION_HH_ */

// vim: set ts=4 sw=4 expandtab: