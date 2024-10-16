/**
 * \file DdsJs/ReaderTakeResult.hh
 * \brief Contains the definition of the \c ReaderTakeResult template class.
 * \author Rolando J. Nieves
 * \date 2024-03-14 11:33:25
 */

#ifndef _DDSJS_DDSJS_READERTAKERESULT_HH_
#define _DDSJS_DDSJS_READERTAKERESULT_HH_

#include <memory>

#include <napi.h>

// --------------------------------------------------------------------------
// CoreDX API Headers
#include <dds/dds.hh>
#include <dds/dds_builtin.hh>
#include <dds/dds_typesupport.hh>

#include <DdsJs/Providers/CoreDX/SampleInfo.hh>


namespace DdsJs
{

template< typename SampleProxy, typename TakeResultIterator >
class ReaderTakeResult
{
private:
    std::unique_ptr< TakeResultIterator > m_takeResult;

public:
    ReaderTakeResult(std::unique_ptr< TakeResultIterator >&& takeResult):
        m_takeResult(std::move(takeResult))
    {}

    virtual ~ReaderTakeResult() = default;

    Napi::Value toJs(Napi::Env env)
    {
        Napi::EscapableHandleScope scope(env);
        Napi::Array result = Napi::Array::New(env);
        int array_idx = 0;

        while (m_takeResult->hasNext())
        {
            typename TakeResultIterator::Tuple a_tuple = m_takeResult->next();
            Napi::Object a_js_tuple = Napi::Object::New(env);
            a_js_tuple.Set("sample", SampleProxy::NewInstance(env, a_tuple.sample()));
            a_js_tuple.Set("sampleInfo", SampleInfoProxy::NewInstance(env, a_tuple.sampleInfo()));
            result.Set(array_idx++, a_js_tuple);
        }

        return scope.Escape(result);
    }
};

} // end namespace DdsJs

#endif /* !_DDSJS_DDSJS_READERTAKERESULT_HH_ */

// vim: set ts=4 sw=4 expandtab:
