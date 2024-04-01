/**
 * \file DdsJs/Providers/CoreDX.hh
 * \brief Contains the include statement amalgam required to import CoreDX DDS.
 * \author Rolando J. Nieves
 * \date 2024-03-06 12:41:40
 */

#ifndef _DDSJS_DDSJS_PROVIDERS_COREDX_HH_
#define _DDSJS_DDSJS_PROVIDERS_COREDX_HH_

#include <string>
#include <vector>

#include <dds/dds.hh>
#include <dds/dds_builtin.hh>
#include <dds/dds_typesupport.hh>

#define DDS_PROVIDER_COREDX 1


namespace DdsJs
{

template< typename SequenceType, typename ElementType >
class SequenceUtilities
{
public:
    using CppEntity = SequenceType;

    static ElementType& At(CppEntity& theSeq, size_t idx)
    { ElementType *result = *(seq_at(&theSeq, idx)); return *result; }

    static void Clear(CppEntity& theSeq)
    { seq_clear(&theSeq); }

    static ElementType const& ConstAt(CppEntity const& theSeq, size_t idx)
    { ElementType *result = *(seq_at(&theSeq, idx)); return *result; }

    static size_t ConstSize(CppEntity const& theSeq)
    { return seq_get_size(&theSeq); }

    static void Init(CppEntity& theSeq)
    { DDS_SEQ_INIT(theSeq); }

    static void Resize(CppEntity& theSeq, size_t newSize)
    { seq_set_size(&theSeq, newSize); }

    static size_t Size(CppEntity& theSeq)
    { return seq_get_size(&theSeq); }
};


template< typename ElementType >
class SequenceUtilities< DDS::sequence< ElementType >, ElementType >
{
public:
    using CppEntity = DDS::sequence< ElementType >;

    static ElementType& At(DDS::sequence< ElementType >& theSeq, size_t idx)
    { return theSeq[idx]; }

    static void Clear(DDS::sequence< ElementType >& theSeq)
    { theSeq.clear(); }

    static ElementType const& ConstAt(DDS::sequence< ElementType > const& theSeq, size_t idx)
    { return theSeq[idx]; }

    static size_t ConstSize(DDS::sequence< ElementType > const& theSeq)
    { return theSeq.size(); }

    static void Init(DDS::sequence< ElementType >& theSeq)
    { /* no-op for C++ */ return; }

    static void Resize(DDS::sequence< ElementType >& theSeq, size_t newSize)
    { theSeq.resize(newSize); }

    static size_t Size(DDS::sequence< ElementType >& theSeq)
    { return theSeq.size(); }
};


template< typename ElementType, unsigned Bounds >
class SequenceUtilities< DDS::bounded_sequence< ElementType, Bounds >, ElementType >
{
public:
    using CppEntity = DDS::bounded_sequence< ElementType, Bounds >;

    static ElementType& At(CppEntity& theSeq, size_t idx)
    { return theSeq[idx]; }

    static void Clear(CppEntity& theSeq)
    { theSeq.clear(); }

    static ElementType const& ConstAt(CppEntity const& theSeq, size_t idx)
    { return theSeq[idx]; }

    static size_t ConstSize(CppEntity const& theSeq)
    { return theSeq.size(); }

    static void Init(CppEntity& theSeq)
    { /* no-op for C++ */ return; }

    static void Resize(CppEntity& theSeq, size_t newSize)
    { theSeq.resize(newSize); }

    static size_t Size(CppEntity& theSeq)
    { return theSeq.size(); }
};


template< unsigned Bounds >
class StringUtilities
{
public:
    using CppEntity = char[Bounds + 1u];

    static std::string ConstContents(CppEntity const& theString)
    { return std::string(theString); }

    static void SetContents(std::string const& source, CppEntity& destination)
    {
        // For bounded strings, CoreDX is expected to "pre-allocate" the space
        // by making the struct field a stack-allocated array.
        // Truncate any extraneous content based on the maximum string bounds.
        size_t copy_size = std::min(
            static_cast< size_t >(source.length()),
            static_cast< size_t >(Bounds)
        );
        memset(destination, 0x00, Bounds + 1u);
        memcpy(destination, source.c_str(), copy_size);
    }
};


template<>
class StringUtilities< 0 >
{
public:
    using CppEntity = char*;

    static std::string ConstContents(CppEntity const& theString)
    { return std::string((nullptr == theString ? "" : theString)); }

    static void SetContents(std::string const& source, CppEntity& destination)
    {
        // For unbounded strings, CoreDX is expected to "adopt" the memory
        // allocated for the new value.
        size_t alloc_size = source.length() + 1u;
        delete [] destination;
        destination = new char[alloc_size];
        memset(destination, 0x00, alloc_size);
        memcpy(destination, source.c_str(), source.length());
    }
};


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

template< typename SampleType >
class ReaderTakeResultIterator
{
public:
    using Tuple = ReaderTakeTuple< SampleType >;
    
    virtual ~ReaderTakeResultIterator() = default;

    virtual bool hasNext() const = 0;

    virtual ReaderTakeTuple< SampleType > next() = 0;

    virtual unsigned size() const = 0;
};

template< typename ReaderType, typename SampleType >
class ReaderTakeOperation : public ReaderTakeResultIterator< SampleType >
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

} // end namespace DdsJs

#endif /* !_DDSJS_DDSJS_PROVIDERS_COREDX_HH_ */

// vim: set ts=4 sw=4 expandtab:
