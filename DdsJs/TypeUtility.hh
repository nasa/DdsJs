/**
 * \file TypeUtility.hh
 * \brief Contains the definitions of several basic data type wrappers used in generated code.
 * \date 2014-10-21 15:55:15
 * \author Rolando J. Nieves
 */
#ifndef _TYPE_UTILITY_HH_
#define _TYPE_UTILITY_HH_

#include <stdint.h>
#include <cstring>
#include <cstdlib>
#include <node.h>
#include <vector>
#include <DdsJs/dds_provider.h>

namespace DdsJs {

/**
 * \brief Template class that models an array field defined in a DDS IDL file.
 *
 * The \c ArrayField template class accepts as template arguments a class
 * that represents the type of elements stored in the array, as well as the
 * size of the array as defined in the DDS IDL.
 *
 * The class models DDS IDL arrays as JavaScript arrays.
 */
template<typename ElementFieldDef, int ArraySize>
struct ArrayField
{
	typedef typename ElementFieldDef::ValueType ElemValueType;
	typedef ElemValueType ValueType[ArraySize];
	typedef ValueType& RefType;
	typedef ValueType const& ConstRefType;
	typedef ValueType *PtrType;

	/**
	 * \brief Create a new instance of an array field.
	 *
	 * \param args {in} Contains the arguments passed when creating a
	 *                  new instance; Not used.
	 */
	static void New(v8::FunctionCallbackInfo<v8::Value> const& args)
	{
		v8::Isolate *isolate = v8::Isolate::GetCurrent();
		v8::HandleScope scope(isolate);
		ValueType emptyValue;

		/**
		 * The \c New() class method creates an empty array object for use
		 * by Node.js hosted JavaScript scripts.
		 */
		args.GetReturnValue().Set(FromCppToJsValue(emptyValue));
	}

	/**
	 * \brief Transform a C++ DDS array to its JavaScript counterpart.
	 *
	 * \param cppValue {in} Contains the C++ DDS array to convert.
	 *
	 * \return Node.js object containing the converted array.
	 */
	static v8::Local<v8::Value> FromCppToJsValue(ConstRefType cppValue)
	{
		v8::Isolate *isolate = v8::Isolate::GetCurrent();
		v8::EscapableHandleScope scope(isolate);
		v8::Local<v8::Array> result(v8::Array::New(isolate));
		v8::Maybe< bool > setResult = v8::Just< bool >(true);

		for (uint32_t idx = 0u; setResult.FromMaybe(false) && (idx < ArraySize); idx++)
		{
			setResult = result->Set(
				isolate->GetCurrentContext(),
				idx,
				ElementFieldDef::FromCppToJsValue(cppValue[idx])
			);
		}

		if (!setResult.FromMaybe(false))
		{
			// TODO: Throw exception.
		}

		return scope.Escape(result);
	}

	/**
	 * \brief Transform a JavaScript array to its C++ DDS counterpart.
	 *
	 * \param jsVal {in} Contains the JavaScript array to convert.
	 * \param cppValueRet {inout} Contains the destination C++ DDS array.
	 *
	 * \return \c true if the conversion was successful; \c false otherwise.
	 */
	static bool FromJsValueToCpp(v8::Local<v8::Value> jsVal, RefType cppValueRet)
	{
		v8::Isolate *isolate = v8::Isolate::GetCurrent();
		bool result = true;

		if (!jsVal->IsArray())
		{
			return false;
		}

		v8::Local<v8::Array> theArray = jsVal.As<v8::Array>();
		for (uint32_t idx = 0u; (idx < ArraySize) && result; idx++)
		{
			result = result &&
				ElementFieldDef::FromJsValueToCpp(
					theArray->Get(isolate->GetCurrentContext(), idx).FromMaybe(v8::Local<v8::Value>()),
					cppValueRet[idx]);
		}

		return result;
	}
};


/**
 * \brief Template class that models an unbounded sequence field defined in a DDS IDL file.
 *
 * The \c UnboundedSeqField template class accepts as template arguments a class
 * that represents the type of elements stored in the sequence.
 *
 * The class models DDS IDL unbounded sequences as JavaScript arrays.
 */
template<typename ElementFieldDef>
struct UnboundedSeqField
{
	typedef DDS::sequence<typename ElementFieldDef::ValueType> ValueType;
	typedef DDS::sequence<typename ElementFieldDef::ValueType>& RefType;
	typedef DDS::sequence<typename ElementFieldDef::ValueType> const& ConstRefType;
	typedef DDS::sequence<typename ElementFieldDef::ValueType> *PtrType;

	/**
	 * \brief Create a new instance of an unbounded sequence field.
	 *
	 * \param args {in} Contains the arguments passed when creating a
	 *                  new instance; Not used.
	 */
	static void New(v8::FunctionCallbackInfo<v8::Value> const& args)
	{
		v8::Isolate *isolate = v8::Isolate::GetCurrent();
		v8::HandleScope scope(isolate);
		ValueType emptyValue;

		/**
		 * The \c New() class method creates an empty sequence object for use
		 * by Node.js hosted JavaScript scripts.
		 */
		args.GetReturnValue().Set(FromCppToJsValue(emptyValue));
	}

	/**
	 * \brief Transform a C++ DDS unbounded sequence to its JavaScript counterpart.
	 *
	 * \param cppValue {in} Contains the C++ DDS sequence to convert.
	 *
	 * \return Node.js object containing the converted sequence.
	 */
	static v8::Local<v8::Value> FromCppToJsValue(ConstRefType cppValue)
	{
		v8::Isolate *isolate = v8::Isolate::GetCurrent();
		v8::EscapableHandleScope scope(isolate);
		v8::Local<v8::Array> result(v8::Array::New(isolate));
		uint32_t idx = 0u;
		v8::Maybe< bool > setResult = v8::Just< bool >(true);

		for (idx = 0u; setResult.FromMaybe(false) && idx < cppValue.size(); idx++)
		{
			setResult = result->Set(
				isolate->GetCurrentContext(),
				idx,
				ElementFieldDef::FromCppToJsValue(cppValue[idx])
			);
		}

		return scope.Escape(result);
	}

	/**
	 * \brief Transform a C DDS unbounded sequence to its JavaScript counterpart.
	 *
	 * This variation of \c FromCppToJsValue() is needed to cope with the C-based
	 * sequences that exist in the CoreDX library, primarily in the definition of
	 * built-in objects. The variations are offered as overloaded versions, relying
	 * on the C++ compiler to select the appropriate version; those that match
	 * the CoreDX generated C++ pattern use the non-template version, and the
	 * rest (presumably those that use the C sequence interface) use this version.
	 *
	 * \param cSeq {in} Contains the C DDS sequence to convert.
	 *
	 * \return Node.js object containing the converted sequence.
	 */
	template<typename CSeqType>
	static v8::Handle<v8::Value> FromCppToJsValue(CSeqType const& cSeq)
	{
		v8::Isolate *isolate = v8::Isolate::GetCurrent();
		v8::EscapableHandleScope scope(isolate);
		v8::Local<v8::Array> result(v8::Array::New(isolate));
		uint32_t idx = 0u;
		v8::Maybe< bool > setResult = v8::Just< bool >(true);

		if (NULL == cSeq._buffer)
		{
			return scope.Escape(result);
		}

		for (idx = 0u; setResult.FromMaybe(false) && idx < cSeq._length; idx++)
		{
			typename ElementFieldDef::PtrType anItem = cSeq._buffer[idx];
			setResult = result->Set(
				isolate->GetCurrentContext(),
				idx,
				ElementFieldDef::FromCppToJsValue(*anItem)
			);
		}

		if (!setResult.FromMaybe(false))
		{
			// TODO: Throw exception.
		}
		
		return scope.Escape(result);
	}

	/**
	 * \brief Transform a JavaScript unbounded sequence to its C++ DDS counterpart.
	 *
	 * \param jsVal {in} Contains the JavaScript sequence to convert.
	 * \param cppValueRet {inout} Contains the destination C++ DDS sequence.
	 *
	 * \return \c true if the conversion was successful; \c false otherwise.
	 */
	static bool FromJsValueToCpp(v8::Local<v8::Value> jsVal, RefType cppValueRet)
	{
		v8::Isolate *isolate = v8::Isolate::GetCurrent();
		bool result = true;

		if (!jsVal->IsArray())
		{
			return false;
		}

		v8::Local<v8::Array> theArray = jsVal.As<v8::Array>();
		cppValueRet.resize(theArray->Length());
		for (uint32_t idx = 0u; (idx < theArray->Length()) && result; idx++)
		{
			result = result && 
				ElementFieldDef::FromJsValueToCpp(
					theArray->Get(isolate->GetCurrentContext(), idx).FromMaybe(v8::Local<v8::Value>()),
					cppValueRet[idx]);
		}

		return result;
	}

	/**
	 * \brief Transform a JavaScript unbounded sequence to its C DDS counterpart.
	 *
	 * This variation of \c FromJsValueToCpp() is needed to cope with the C-based
	 * sequences that exist in the CoreDX library, primarily in the definition of
	 * built-in objects. The variations are offered as overloaded versions, relying
	 * on the C++ compiler to select the appropriate version; those that match
	 * the CoreDX generated C++ pattern use the non-template version, and the
	 * rest (presumably those that use the C sequence interface) use this version.
	 *
	 * \param jsVal {in} Contains the JavaScript sequence to convert.
	 * \param cppValueRet {inout} Contains the destination C DDS sequence.
	 *
	 * \return \c true if the conversion was successful; \c false otherwise.
	 */
	template<typename CSeqType>
	static bool FromJsValueToCpp(v8::Local<v8::Value> jsVal, CSeqType& cppValueRet)
	{
		v8::Isolate *isolate = v8::Isolate::GetCurrent();
		bool result = true;

		if (!jsVal->IsArray())
		{
			return false;
		}

		v8::Local<v8::Array> theArray = jsVal.As<v8::Array>();
		CSeqType *seqPtr = &cppValueRet;
		INIT_SEQ(cppValueRet);
		for (uint32_t idx = 0u; (idx < theArray->Length()) && result; idx++)
		{
			typename ElementFieldDef::ValueType seqElem;
			result = result && ElementFieldDef::FromJsValueToCpp(
				theArray->Get(isolate->GetCurrentContext(), idx).FromMaybe(v8::Local<v8::Value>()),
				seqElem);
			seq_add(seqPtr, &seqElem);
		}

		return result;
	}
};

/**
 * \brief Template class that models a bounded sequence field defined in a DDS IDL file.
 *
 * The \c FixedSeqField template class accepts as template arguments a class
 * that represents the type of elements stored in the sequence, as well as the
 * maximum size of the sequence.
 *
 * The class models DDS IDL bounded sequences as JavaScript arrays.
 */
template< typename ElementFieldDef, int MaxSize >
struct FixedSequenceField : UnboundedSeqField< ElementFieldDef >
{
	typedef DDS::bounded_sequence< typename ElementFieldDef::ValueType, MaxSize > ValueType;
	typedef DDS::bounded_sequence< typename ElementFieldDef::ValueType, MaxSize >& RefType;
	typedef DDS::bounded_sequence< typename ElementFieldDef::ValueType, MaxSize > const& ConstRefType;
	typedef DDS::bounded_sequence< typename ElementFieldDef::ValueType, MaxSize > *PtrType;

	/**
	 * \brief Transform a C++ DDS bounded sequence to its JavaScript counterpart.
	 *
	 * \param cppValue {in} Contains the C++ DDS sequence to convert.
	 *
	 * \return Node.js object containing the converted sequence.
	 */
	static v8::Local< v8::Value > FromCppToJsValue(ConstRefType cppValue)
	{
		v8::Isolate *isolate = v8::Isolate::GetCurrent();
		v8::EscapableHandleScope scope(isolate);
		v8::Local< v8::Array > result(v8::Array::New(isolate));
		uint32_t idx = 0u;

		for (idx = 0u; idx < cppValue.size(); idx++)
		{
			result->Set(isolate->GetCurrentContext(), idx, ElementFieldDef::FromCppToJsValue(cppValue[idx]));
		}

		return scope.Escape(result);
	}

	/**
	 * \brief Transform a JavaScript bounded sequence to its C++ DDS counterpart.
	 *
	 * \param jsVal {in} Contains the JavaScript sequence to convert.
	 * \param cppValueRet {inout} Contains the destination C++ DDS sequence.
	 *
	 * \return \c true if the conversion was successful; \c false otherwise.
	 */
	static bool FromJsValueToCpp(v8::Local< v8::Value > jsVal, RefType cppValueRet)
	{
		v8::Isolate *isolate = v8::Isolate::GetCurrent();
		bool result = true;

		if (!jsVal->IsArray())
		{
			return false;
		}

		v8::Local< v8::Array > theArray = jsVal.As< v8::Array >();

		if (theArray->Length() > MaxSize)
		{
			return false;
		}

		cppValueRet.resize(theArray->Length());
		for (uint32_t idx = 0u; (idx < theArray->Length()) && result; idx++)
		{
			result = result && 
				ElementFieldDef::FromJsValueToCpp(
					theArray->Get(isolate->GetCurrentContext(), idx).FromMaybe(v8::Local<v8::Value>()),
					cppValueRet[idx]);
		}

		return result;
	}
};

/**
 * \brief Class that models an unbounded character string field defined in a DDS IDL file.
 * 
 * The unbounded string field is mapped to a JavaScript \c String object.
 */
struct UnboundedStringField
{
	typedef char* ValueType;
	typedef char*& RefType;
	typedef const char* ConstRefType;
	typedef char* *PtrType;

	/**
	 * \brief Create a new instance of an unbounded string field.
	 *
	 * \param args {in} Contains the arguments passed when creating a
	 *                  new instance; Not used.
	 */
	static void New(v8::FunctionCallbackInfo<v8::Value> const& args);
	
	/**
	 * \brief Transform a C++ DDS unbounded string to its JavaScript counterpart.
	 *
	 * \param cppValue {in} Contains the C++ DDS string to convert.
	 *
	 * \return Node.js object containing the converted string.
	 */
	static v8::Local<v8::Value> FromCppToJsValue(ConstRefType cppValue);
	
	/**
	 * \brief Transform a JavaScript unbounded string to its C++ DDS counterpart.
	 *
	 * \param jsVal {in} Contains the JavaScript string to convert.
	 * \param cppValueRet {inout} Contains the destination C++ DDS string.
	 *
	 * \return \c true if the conversion was successful; \c false otherwise.
	 */
	static bool FromJsValueToCpp(v8::Local<v8::Value> jsVal, RefType cppValueRet);
};


/**
 * \brief Template class that models a bounded string field defined in a DDS IDL file.
 *
 * The bounded string accepts as a template argument the maximum length of the
 * string field. The field is mapped to a JavaScript \c String object. For the most
 * part, the bounded string field borrows its behavior from the 
 * \c UnboundedStringField class.
 */
template<int StringSize>
struct FixedStringField : public UnboundedStringField
{
	typedef char ValueType[StringSize + 1];
	typedef ValueType& RefType;
	typedef const char* ConstRefType;
	typedef char* *PtrType;

	/**
	 * \brief Transform a JavaScript bounded string to its C++ DDS counterpart.
	 *
	 * This transformation method enforces the maximum length configured in the
	 * template argument.
	 *
	 * \param jsVal {in} Contains the JavaScript string to convert.
	 * \param cppValueRet {inout} Contains the destination C++ DDS string.
	 *
	 * \return \c true if the conversion was successful; \c false otherwise.
	 */
	static bool FromJsValueToCpp(v8::Local<v8::Value> jsVal, RefType cppValueRet)
	{
		if (!jsVal->IsString() || (jsVal->ToString()->Length() > StringSize))
		{
			return false;
		}
		v8::String::Utf8Value strValue(jsVal);
		memset(cppValueRet, 0x00, StringSize);
		strncpy(cppValueRet, *strValue, StringSize);

		return true;
	}
};

/**
 * \brief Class that models an \c octet (8-bit unsigned integer) field in a DDS IDL file.
 *
 * The \c octet field is mapped to a JavaScript \c Number value.
 */
struct OctetField
{
	typedef unsigned char ValueType;
	typedef unsigned char& RefType;
	typedef const unsigned char& ConstRefType;
	typedef unsigned char *PtrType;

	/**
	 * \brief Create a new instance of an \c octet field.
	 *
	 * \param args {in} Contains the arguments passed when creating a
	 *                  new instance; Not used.
	 */
	static void New(v8::FunctionCallbackInfo<v8::Value> const& args);
	
	/**
	 * \brief Transform a C++ DDS \c octet to its JavaScript counterpart.
	 *
	 * \param cppValue {in} Contains the C++ DDS \c octet to convert.
	 *
	 * \return Node.js object containing the converted \c Number.
	 */
	static v8::Local<v8::Value> FromCppToJsValue(ConstRefType cppValue);
	
	/**
	 * \brief Transform a JavaScript \c Number to its C++ DDS counterpart.
	 *
	 * \param jsVal {in} Contains the JavaScript \c Number to convert.
	 * \param cppValueRet {inout} Contains the destination C++ DDS \c octet.
	 *
	 * \return \c true if the conversion was successful; \c false otherwise.
	 */
	static bool FromJsValueToCpp(v8::Local<v8::Value> jsVal, RefType cppValueRet);
};


/**
 * \brief Class that models a \c short (16-bit signed integer) field in a DDS IDL file.
 *
 * The \c short field is mapped to a JavaScript \c Number value.
 */
struct ShortField
{
	typedef short ValueType;
	typedef short& RefType;
	typedef const short& ConstRefType;
	typedef short *PtrType;

	/**
	 * \brief Create a new instance of a \c short field.
	 *
	 * \param args {in} Contains the arguments passed when creating a
	 *                  new instance; Not used.
	 */
	static void New(v8::FunctionCallbackInfo<v8::Value> const& args);
	
	/**
	 * \brief Transform a C++ DDS \c short to its JavaScript counterpart.
	 *
	 * \param cppValue {in} Contains the C++ DDS \c short to convert.
	 *
	 * \return Node.js object containing the converted \c Number.
	 */
	static v8::Local<v8::Value> FromCppToJsValue(ConstRefType cppValue);
	
	/**
	 * \brief Transform a JavaScript \c Number to its C++ DDS counterpart.
	 *
	 * \param jsVal {in} Contains the JavaScript \c Number to convert.
	 * \param cppValueRet {inout} Contains the destination C++ DDS \c short.
	 *
	 * \return \c true if the conversion was successful; \c false otherwise.
	 */
	static bool FromJsValueToCpp(v8::Local<v8::Value> jsVal, RefType cppValueRet);
};


/**
 * \brief Class that models an \c unsigned \c short (16-bit unsigned integer) field in a DDS IDL file.
 *
 * The \c unsigned \c short field is mapped to a JavaScript \c Number value.
 */
struct UnsignedShortField
{
	typedef unsigned short ValueType;
	typedef unsigned short& RefType;
	typedef const unsigned short& ConstRefType;
	typedef unsigned short *PtrType;

	/**
	 * \brief Create a new instance of an \c unsigned \c short field.
	 *
	 * \param args {in} Contains the arguments passed when creating a
	 *                  new instance; Not used.
	 */
	static void New(v8::FunctionCallbackInfo<v8::Value> const& args);
	
	/**
	 * \brief Transform a C++ DDS \c unsigned \c short to its JavaScript counterpart.
	 *
	 * \param cppValue {in} Contains the C++ DDS \c unsigned \c short to convert.
	 *
	 * \return Node.js object containing the converted \c Number.
	 */
	static v8::Local<v8::Value> FromCppToJsValue(ConstRefType cppValue);
	
	/**
	 * \brief Transform a JavaScript \c Number to its C++ DDS counterpart.
	 *
	 * \param jsVal {in} Contains the JavaScript \c Number to convert.
	 * \param cppValueRet {inout} Contains the destination C++ DDS \c unsigned \c short.
	 *
	 * \return \c true if the conversion was successful; \c false otherwise.
	 */
	static bool FromJsValueToCpp(v8::Local<v8::Value> jsVal, RefType cppValueRet);
};


/**
 * \brief Class that models a \c long (32-bit signed integer) field in a DDS IDL file.
 *
 * The \c long field is mapped to a JavaScript \c Number value.
 */
struct LongField
{
	typedef int ValueType;
	typedef int& RefType;
	typedef const int& ConstRefType;
	typedef int *PtrType;

	/**
	 * \brief Create a new instance of a \c long field.
	 *
	 * \param args {in} Contains the arguments passed when creating a
	 *                  new instance; Not used.
	 */
	static void New(v8::FunctionCallbackInfo<v8::Value> const& args);
	
	/**
	 * \brief Transform a C++ DDS \c long to its JavaScript counterpart.
	 *
	 * \param cppValue {in} Contains the C++ DDS \c long to convert.
	 *
	 * \return Node.js object containing the converted \c Number.
	 */
	static v8::Local<v8::Value> FromCppToJsValue(ConstRefType cppValue);
	
	/**
	 * \brief Transform a JavaScript \c Number to its C++ DDS counterpart.
	 *
	 * \param jsVal {in} Contains the JavaScript \c Number to convert.
	 * \param cppValueRet {inout} Contains the destination C++ DDS \c long.
	 *
	 * \return \c true if the conversion was successful; \c false otherwise.
	 */
	static bool FromJsValueToCpp(v8::Local<v8::Value> jsVal, RefType cppValueRet);
	
	/**
	 * \brief Transform a JavaScript \c Number to its C++ DDS \c long counterpart.
	 *
	 * This variation compensates for C++ code emitted by the CoreDX IDL
	 * compiler on some platforms where a long is mapped to a \c long \c int
	 * vs. an \c int.
	 *
	 * \param jsVal {in} Contains the JavaScript \c Number to convert.
	 * \param cppValueRet {inout} Contains the destination C++ DDS \c long.
	 *
	 * \return \c true if the conversion was successful; \c false otherwise.
	 */
	static bool FromJsValueToCpp(v8::Local<v8::Value> jsVal, long int& cppValueRet);
};


/**
 * \brief Class that models an \c unsigned \c long (32-bit unsigned integer) field in a DDS IDL file.
 *
 * The \c unsigned \c long field is mapped to a JavaScript \c Number value.
 */
struct UnsignedLongField
{
	typedef unsigned int ValueType;
	typedef unsigned int& RefType;
	typedef const unsigned int& ConstRefType;
	typedef unsigned int *PtrType;

	/**
	 * \brief Create a new instance of an \c unsigned \c long field.
	 *
	 * \param args {in} Contains the arguments passed when creating a
	 *                  new instance; Not used.
	 */
	static void New(v8::FunctionCallbackInfo<v8::Value> const& args);
	
	/**
	 * \brief Transform a C++ DDS \c unsigned \c long to its JavaScript counterpart.
	 *
	 * \param cppValue {in} Contains the C++ DDS \c unsigned \c long to convert.
	 *
	 * \return Node.js object containing the converted \c Number.
	 */
	static v8::Local<v8::Value> FromCppToJsValue(ConstRefType cppValue);
	
	/**
	 * \brief Transform a JavaScript \c Number to its C++ DDS \c unsigned \c long counterpart.
	 *
	 * \param jsVal {in} Contains the JavaScript \c Number to convert.
	 * \param cppValueRet {inout} Contains the destination C++ DDS \c unsigned \c long.
	 *
	 * \return \c true if the conversion was successful; \c false otherwise.
	 */
	static bool FromJsValueToCpp(v8::Local<v8::Value> jsVal, RefType cppValueRet);
	
	/**
	 * \brief Transform a JavaScript \c Number to its C++ DDS \c unsigned \c long counterpart.
	 *
	 * This variation of \c FromJsValueToCpp() compensates for some variations 
	 * observed in the C++ code emitted by the CoreDX IDL compiler when mapping
	 * \c unsigned \c long fields under different platforms.
	 *
	 * \param jsVal {in} Contains the JavaScript \c Number to convert.
	 * \param cppValueRet {inout} Contains the destination C++ DDS \c unsigned \c long.
	 *
	 * \return \c true if the conversion was successful; \c false otherwise.
	 */
	template<typename EquivalentType>
	static bool FromJsValueToCpp(v8::Local<v8::Value> jsVal, EquivalentType& cppValueRet)
	{
		ValueType valueRet;
		bool result = false;

		result = FromJsValueToCpp(jsVal, valueRet);
		if (result)
		{
			cppValueRet = static_cast< EquivalentType >(valueRet);
		}

		return result;
	}
};


/**
 * \brief Class that models an \c InstanceHandle_t (opaque handle) field in a DDS IDL file.
 *
 * The \c InstanceHandle_t field is mapped to a JavaScript \c Number value.
 */
struct InstanceHandleField
{
	typedef ::DDS::InstanceHandle_t ValueType;
	typedef ::DDS::InstanceHandle_t& RefType;
	typedef const ::DDS::InstanceHandle_t& ConstRefType;
	typedef ::DDS::InstanceHandle_t *PtrType;

	/**
	 * \brief Create a new instance of an \c InstanceHandle_t field.
	 *
	 * \param args {in} Contains the arguments passed when creating a
	 *                  new instance; Not used.
	 */
	static void New(v8::FunctionCallbackInfo<v8::Value> const& args);
	
	/**
	 * \brief Transform a C++ DDS \c InstanceHandle_t to its JavaScript counterpart.
	 *
	 * \param cppValue {in} Contains the C++ DDS \c InstanceHandle_t to convert.
	 *
	 * \return Node.js object containing the converted \c Number.
	 */
	static v8::Local<v8::Value> FromCppToJsValue(ConstRefType cppValue);
	
	/**
	 * \brief Transform a JavaScript \c Number to its C++ DDS \c InstanceHandle_t counterpart.
	 *
	 * \param jsVal {in} Contains the JavaScript \c Number to convert.
	 * \param cppValueRet {inout} Contains the destination C++ DDS \c InstanceHandle_t.
	 *
	 * \return \c true if the conversion was successful; \c false otherwise.
	 */
	static bool FromJsValueToCpp(v8::Local<v8::Value> jsVal, RefType cppValueRet);
};


/**
 * \brief Class that models a \c float (32-bit IEEE-754 floating point) field in a DDS IDL file.
 *
 * The \c float field is mapped to a JavaScript \c Number value.
 */
struct FloatField
{
	typedef float ValueType;
	typedef float& RefType;
	typedef const float& ConstRefType;
	typedef float *PtrType;

	/**
	 * \brief Create a new instance of a \c float field.
	 *
	 * \param args {in} Contains the arguments passed when creating a
	 *                  new instance; Not used.
	 */
	static void New(v8::FunctionCallbackInfo<v8::Value> const& args);
	
	/**
	 * \brief Transform a C++ DDS \c float to its JavaScript counterpart.
	 *
	 * \param cppValue {in} Contains the C++ DDS \c float to convert.
	 *
	 * \return Node.js object containing the converted \c Number.
	 */
	static v8::Local<v8::Value> FromCppToJsValue(ConstRefType cppValue);
	
	/**
	 * \brief Transform a JavaScript \c Number to its C++ DDS \c float counterpart.
	 *
	 * \param jsVal {in} Contains the JavaScript \c Number to convert.
	 * \param cppValueRet {inout} Contains the destination C++ DDS \c float.
	 *
	 * \return \c true if the conversion was successful; \c false otherwise.
	 */
	static bool FromJsValueToCpp(v8::Local<v8::Value> jsVal, RefType cppValueRet);
};


/**
 * \brief Class that models a \c double (64-bit IEEE-754 floating point) field in a DDS IDL file.
 *
 * The \c double field is mapped to a JavaScript \c Number value.
 */
struct DoubleField
{
	typedef double ValueType;
	typedef double& RefType;
	typedef const double& ConstRefType;
	typedef double *PtrType;

	/**
	 * \brief Create a new instance of a \c double field.
	 *
	 * \param args {in} Contains the arguments passed when creating a
	 *                  new instance; Not used.
	 */
	static void New(v8::FunctionCallbackInfo<v8::Value> const& args);
	
	/**
	 * \brief Transform a C++ DDS \c double to its JavaScript counterpart.
	 *
	 * \param cppValue {in} Contains the C++ DDS \c double to convert.
	 *
	 * \return Node.js object containing the converted \c Number.
	 */
	static v8::Local<v8::Value> FromCppToJsValue(ConstRefType cppValue);
	
	/**
	 * \brief Transform a JavaScript \c Number to its C++ DDS \c double counterpart.
	 *
	 * \param jsVal {in} Contains the JavaScript \c Number to convert.
	 * \param cppValueRet {inout} Contains the destination C++ DDS \c double.
	 *
	 * \return \c true if the conversion was successful; \c false otherwise.
	 */
	static bool FromJsValueToCpp(v8::Local<v8::Value> jsVal, RefType cppValueRet);
};

/**
 * \brief Class that models a \c bool (boolean) field in a DDS IDL file.
 *
 * The \c bool field is mapped to a JavaScript \c Boolean value.
 */
struct BooleanField
{
	typedef unsigned char ValueType;
	typedef unsigned char& RefType;
	typedef const unsigned char& ConstRefType;
	typedef unsigned char *PtrType;

	/**
	 * \brief Create a new instance of a \c bool field.
	 *
	 * \param args {in} Contains the arguments passed when creating a
	 *                  new instance; Not used.
	 */
	static void New(v8::FunctionCallbackInfo<v8::Value> const& args);
	
	/**
	 * \brief Transform a C++ DDS \c bool to its JavaScript counterpart.
	 *
	 * \param cppValue {in} Contains the C++ DDS \c bool to convert.
	 *
	 * \return Node.js object containing the converted \c Boolean.
	 */
	static v8::Local<v8::Value> FromCppToJsValue(ConstRefType cppValue);
	
	/**
	 * \brief Transform a JavaScript \c Boolean to its C++ DDS \c bool counterpart.
	 *
	 * \param jsVal {in} Contains the JavaScript \c Boolean to convert.
	 * \param cppValueRet {inout} Contains the destination C++ DDS \c bool.
	 *
	 * \return \c true if the conversion was successful; \c false otherwise.
	 */
	static bool FromJsValueToCpp(v8::Local<v8::Value> jsVal, RefType cppValueRet);
};

} // end namespace DdsJs

#endif /* _TYPE_UTILITY_HH_ */
