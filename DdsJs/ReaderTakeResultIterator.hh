/**
 * \file ReaderTakeResultIterator.hh
 * \brief Contains the definition of the \c DdsJs::ReaderTakeResultIterator template interface.
 * \author Rolando J. Nieves
 * \date 2024-10-16 13:42:20
 */

#ifndef _DDSJSJ_DDSJS_READERTAKERESULTITERATOR_HH_
#define _DDSJSJ_DDSJS_READERTAKERESULTITERATOR_HH_


namespace DdsJs
{

template< typename SampleType, template< typename TupleSample > typename ReaderTakeTuple >
class ReaderTakeResultIterator
{
public:
    using Tuple = ReaderTakeTuple< SampleType >;
    
    virtual ~ReaderTakeResultIterator() = default;

    virtual bool hasNext() const = 0;

    virtual ReaderTakeTuple< SampleType > next() = 0;

    virtual unsigned size() const = 0;
};

} // end namespace DdsJs

#endif /* !_DDSJSJ_DDSJS_READERTAKERESULTITERATOR_HH_ */

// vim: set ts=4 sw=4 expandtab:
