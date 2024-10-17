/**
 * \file CoreDX/Arrays.hh
 * \brief Contains the definition of the \c ArrayProxy class.
 * \author Rolando J. Nieves <rolando.j.nieves@nasa.gov>
 * \date 2024-02-26 17:21:45
 */

#ifndef _DDSJS_DDSJS_PROVIDERS_COREDX_ARRAYS_HH_
#define _DDSJS_DDSJS_PROVIDERS_COREDX_ARRAYS_HH_

// --------------------------------------------------------------------------
// Standard C++ Library
#include <sstream>
#include <napi.h>


namespace DdsJs
{

template< typename ElementProxy, unsigned Size >
class FixedArray
{
public:
    using NapiContainer = Napi::Array;

    template< typename CppContainerType >
    static void FromCpp(Napi::Env env, CppContainerType const& cppVal, NapiContainer& jsValOut);

    template< typename CppContainerType >
    static void FromJs(Napi::Env env, NapiContainer const& jsVal, CppContainerType& cppValOut);

    static NapiContainer NewInstance(Napi::Env env);

    template< typename CppContainerType >
    static NapiContainer NewInstance(Napi::Env env, CppContainerType const& cppVal);
};


template< typename ElementProxy, unsigned Size >
template< typename CppContainerType >
void
FixedArray< ElementProxy, Size >::FromCpp(Napi::Env env, CppContainerType const& cppVal, NapiContainer& jsValOut)
{
    // Whatever values were present in the JS array prior to this call will be
    // erased and replaced with fresh values.
    uint32_t jsValSize = jsValOut.Length();
    while ((jsValSize > 0) && (jsValSize > Size))
    {
        jsValOut.Delete(jsValSize - 1u);
        jsValSize = jsValOut.Length();
    }
    for (size_t idx = 0u; idx < Size; idx++)
    {
        jsValOut[idx] = ElementProxy::NewInstance(env, cppVal[idx]);
    }
}


template< typename ElementProxy, unsigned Size >
template< typename CppContainerType >
void
FixedArray< ElementProxy, Size >::FromJs(Napi::Env env, NapiContainer const& jsVal, CppContainerType& cppValOut)
{
    if (jsVal.Length() != Size)
    {
        std::stringstream msg;

        msg << "JS array of size ("
            << jsVal.Length()
            << ") does not match DDS/C++ array size of ("
            << Size
            << ")";
        throw Napi::Error::New(env, msg.str());
    }

    // Whatever values were present in the C++ array prior to this call will be
    // erased and replaced with fresh values.
    for (size_t idx = 0u; idx < Size; idx++)
    {
        ElementProxy::FromJs(env, jsVal[idx].As< typename ElementProxy::NapiContainer >(), cppValOut[idx]);
    }
}


template< typename ElementProxy, unsigned Size >
typename FixedArray< ElementProxy, Size >::NapiContainer
FixedArray< ElementProxy, Size >::NewInstance(Napi::Env env)
{
    Napi::EscapableHandleScope scope(env);
    return scope.Escape(NapiContainer::New(env)).As< NapiContainer >();
}

template< typename ElementProxy, unsigned Size >
template< typename CppContainerType >
typename FixedArray< ElementProxy, Size >::NapiContainer
FixedArray< ElementProxy, Size >::NewInstance(Napi::Env env, CppContainerType const& cppVal)
{
    NapiContainer result = FixedArray::NewInstance(env);
    FixedArray::FromCpp(env, cppVal, result);
    return result;
}

}
#endif /* !_DDSJS_DDSJS_PROVIDERS_COREDX_ARRAYS_HH_ */

// vim: set ts=4 sw=4 expandtab:
