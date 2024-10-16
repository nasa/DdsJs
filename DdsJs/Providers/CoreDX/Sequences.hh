/**
 * \file Sequences.hh
 * \brief Contains the sequence proxy definitions for DdsJs
 * \author Rolando J. Nieves <rolando.j.nieves@nasa.gov>
 * \date 2024-01-22 09:42:31
 */

#ifndef _DDSJS_DDSJS_SEQUENCES_HH_
#define _DDSJS_DDSJS_SEQUENCES_HH_

#include <sstream>

#include <napi.h>


namespace DdsJs
{

template< typename ElementCodecType, typename CppContainerType, template< typename ContainerType, typename ElementType > typename SequenceUtilities >
class UnboundedSequence
{
public:
    using NapiContainer = Napi::Array;
    using CppEntity = CppContainerType;
    using MySeqUtil = SequenceUtilities< CppContainerType, typename ElementCodecType::CppEntity >;

    static void FromCpp(Napi::Env env, CppContainerType const& cppVal, NapiContainer& jsValOut);

    static void FromJs(Napi::Env env, NapiContainer const& jsVal, CppContainerType& cppValOut);

    static NapiContainer NewInstance(Napi::Env env);

    static NapiContainer NewInstance(Napi::Env env, CppContainerType const& cppVal);
};


template< typename ElementCodecType, typename CppContainerType, template< typename ContainerType, typename ElementType > typename SequenceUtilities, unsigned Bounds >
class BoundedSequence : public UnboundedSequence< ElementCodecType, CppContainerType, SequenceUtilities >
{
public:
    using NapiContainer = Napi::Array;
    using CppEntity = CppContainerType;

    static void FromCpp(Napi::Env env, CppContainerType const& cppVal, NapiContainer& jsValOut);

    static void FromJs(Napi::Env env, NapiContainer const& jsVal, CppContainerType& cppValOut);

    static NapiContainer NewInstance(Napi::Env env);

    static NapiContainer NewInstance(Napi::Env env, CppContainerType const& cppVal);
};


template< typename ElementCodecType, typename CppContainerType, template< typename ContainerType, typename ElementType > typename SequenceUtilities >
void
UnboundedSequence< ElementCodecType, CppContainerType, SequenceUtilities >::FromCpp(Napi::Env env, CppContainerType const& cppVal, NapiContainer& jsValOut)
{
    // Whatever values were present in the JS array prior to this call will be
    // erased and replaced with fresh values.
    uint32_t jsValSize = jsValOut.Length();
    while ((jsValSize > 0) && (jsValSize > MySeqUtil::ConstSize(cppVal)))
    {
        jsValOut.Delete(jsValSize - 1u);
        jsValSize = jsValOut.Length();
    }
    for (size_t idx = 0u; idx < MySeqUtil::ConstSize(cppVal); idx++)
    {
        jsValOut[idx] = ElementCodecType::NewInstance(env, MySeqUtil::ConstAt(cppVal, idx));
    }
}


template< typename ElementCodecType, typename CppContainerType, template< typename ContainerType, typename ElementType > typename SequenceUtilities >
void
UnboundedSequence< ElementCodecType, CppContainerType, SequenceUtilities >::FromJs(Napi::Env env, NapiContainer const& jsVal, CppContainerType& cppValOut)
{
    // Whatever values were present in the C++ array prior to this call will be
    // erased and replaced with fresh values.
    MySeqUtil::Clear(cppValOut);
    MySeqUtil::Resize(cppValOut, jsVal.Length());
    for (size_t idx = 0u; idx < jsVal.Length(); idx++)
    {
        ElementCodecType::FromJs(env, jsVal[idx].As< typename ElementCodecType::NapiContainer >(), MySeqUtil::At(cppValOut, idx));
    }
}


template< typename ElementCodecType, typename CppContainerType, template< typename ContainerType, typename ElementType > typename SequenceUtilities >
typename UnboundedSequence< ElementCodecType, CppContainerType, SequenceUtilities >::NapiContainer
UnboundedSequence< ElementCodecType, CppContainerType, SequenceUtilities >::NewInstance(Napi::Env env)
{
    Napi::EscapableHandleScope scope(env);
    return scope.Escape(NapiContainer::New(env)).As< NapiContainer >();
}


template< typename ElementCodecType, typename CppContainerType, template< typename ContainerType, typename ElementType > typename SequenceUtilities >
typename UnboundedSequence< ElementCodecType, CppContainerType, SequenceUtilities >::NapiContainer
UnboundedSequence< ElementCodecType, CppContainerType, SequenceUtilities >::NewInstance(Napi::Env env, CppContainerType const& cppVal)
{
    NapiContainer result = UnboundedSequence::NewInstance(env);
    UnboundedSequence::FromCpp(env, cppVal, result);
    return result;
}


template< typename ElementCodecType, typename CppContainerType, template< typename ContainerType, typename ElementType > typename SequenceUtilities, unsigned Bounds >
void
BoundedSequence< ElementCodecType, CppContainerType, SequenceUtilities, Bounds >::FromCpp(Napi::Env env, CppContainerType const& cppVal, NapiContainer& jsValOut)
{
    UnboundedSequence< ElementCodecType, CppContainerType, SequenceUtilities >::FromCpp(env, cppVal, jsValOut);
}


template< typename ElementCodecType, typename CppContainerType, template< typename ContainerType, typename ElementType > typename SequenceUtilities, unsigned Bounds >
void
BoundedSequence< ElementCodecType, CppContainerType, SequenceUtilities, Bounds >::FromJs(Napi::Env env, NapiContainer const& jsVal, CppContainerType& cppValOut)
{
    if (jsVal.Length() > Bounds)
    {
        std::stringstream error_msg;
        error_msg <<  "Array too big for DDS sequence with bounded size of ("
            << Bounds
            << ") elements";
        throw Napi::Error::New(env, error_msg.str().c_str());
    }

    UnboundedSequence< ElementCodecType, CppContainerType, SequenceUtilities >::FromJs(env, jsVal, cppValOut);
}


template< typename ElementCodecType, typename CppContainerType, template< typename ContainerType, typename ElementType > typename SequenceUtilities, unsigned Bounds >
typename BoundedSequence< ElementCodecType, CppContainerType, SequenceUtilities, Bounds >::NapiContainer
BoundedSequence< ElementCodecType, CppContainerType, SequenceUtilities, Bounds >::NewInstance(Napi::Env env)
{
    return UnboundedSequence< ElementCodecType, CppContainerType, SequenceUtilities >::NewInstance(env);
}


template< typename ElementCodecType, typename CppContainerType, template< typename ContainerType, typename ElementType > typename SequenceUtilities, unsigned Bounds >
typename BoundedSequence< ElementCodecType, CppContainerType, SequenceUtilities, Bounds >::NapiContainer
BoundedSequence< ElementCodecType, CppContainerType, SequenceUtilities, Bounds >::NewInstance(Napi::Env env, CppContainerType const& cppVal)
{
    return UnboundedSequence< ElementCodecType, CppContainerType, SequenceUtilities >::NewInstance(env, cppVal);
}

} // end namespace DdsJs

#endif /* !_DDSJS_DDSJS_SEQUENCES_HH_ */

// vim: set ts=4 sw=4 expandtab:
