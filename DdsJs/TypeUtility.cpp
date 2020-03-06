/**
 * \file TypeUtility.cpp
 * \brief Contains the implementation for all of the DDS basic types in Node.js
 * \date 2015-10-21 15:55:15
 * \author Rolando J. Nieves
 */
#include <cstdlib>
#include <cstring>
#include "TypeUtility.hh"

using v8::Object;
using v8::Value;
using v8::HandleScope;
using v8::EscapableHandleScope;
using v8::FunctionCallbackInfo;
using v8::String;
using v8::Number;
using v8::Persistent;
using v8::FunctionTemplate;
using v8::Date;
using v8::Local;
using v8::Boolean;
using v8::Null;
using v8::Isolate;
using v8::False;

namespace DdsJs {

void UnboundedStringField::New(FunctionCallbackInfo<Value> const& args)
{
    Isolate *isolate = Isolate::GetCurrent();
    HandleScope scope(isolate);

    args.GetReturnValue().Set(String::Empty(isolate));
}


Local<Value> UnboundedStringField::FromCppToJsValue(UnboundedStringField::ConstRefType cppValue)
{
    Isolate *isolate = Isolate::GetCurrent();
    EscapableHandleScope scope(isolate);

    if (cppValue != NULL)
    {
        return scope.Escape(String::NewFromUtf8(isolate, cppValue));
    }
    else
    {
        return scope.Escape(Null(isolate));
    }
}


bool UnboundedStringField::FromJsValueToCpp(Local<Value> jsVal, UnboundedStringField::RefType cppValueRet)
{
    Isolate *isolate = Isolate::GetCurrent();

    if (nullptr == isolate)
    {
        return false;
    }

    if (!jsVal->IsString())
    {
        return false;
    }

    auto strMaybe = jsVal->ToString(isolate->GetCurrentContext());
    Local< String > theStr;
    if (!strMaybe.ToLocal(&theStr))
    {
        return false;
    }

    cppValueRet = reinterpret_cast< char* >(calloc(theStr->Length() + 1, sizeof(char)));
    theStr->WriteUtf8(isolate, cppValueRet);

    return true;
}


void OctetField::New(FunctionCallbackInfo<Value> const& args)
{
    Isolate *isolate = Isolate::GetCurrent();
    HandleScope scope(isolate);

    args.GetReturnValue().Set(Number::New(isolate, 0.0));
}


Local<Value> OctetField::FromCppToJsValue(OctetField::ConstRefType cppValue)
{
    Isolate *isolate = Isolate::GetCurrent();
    EscapableHandleScope scope(isolate);
    
    return scope.Escape(Number::New(isolate, cppValue));
}


bool OctetField::FromJsValueToCpp(Local<Value> jsVal, OctetField::RefType cppValueRet)
{
    Isolate *isolate = Isolate::GetCurrent();
    if (!jsVal->IsNumber())
    {
        return false;
    }

    cppValueRet = static_cast<OctetField::ValueType>(jsVal->NumberValue(isolate->GetCurrentContext()).FromMaybe(0x00));

    return true;
}


void ShortField::New(FunctionCallbackInfo<Value> const& args)
{
    Isolate *isolate = Isolate::GetCurrent();
    HandleScope scope(isolate);

    args.GetReturnValue().Set(Number::New(isolate, 0.0));
}


Local<Value> ShortField::FromCppToJsValue(ShortField::ConstRefType cppValue)
{
    Isolate *isolate = Isolate::GetCurrent();
    EscapableHandleScope scope(isolate);
    
    return scope.Escape(Number::New(isolate, cppValue));
}


bool ShortField::FromJsValueToCpp(Local<Value> jsVal, ShortField::RefType cppValueRet)
{
    Isolate *isolate = Isolate::GetCurrent();
    
    if (!jsVal->IsNumber())
    {
        return false;
    }

    cppValueRet = static_cast<ShortField::ValueType>(jsVal->NumberValue(isolate->GetCurrentContext()).FromMaybe(0));

    return true;
}


void UnsignedShortField::New(FunctionCallbackInfo<Value> const& args)
{
    Isolate *isolate = Isolate::GetCurrent();
    HandleScope scope(isolate);

    args.GetReturnValue().Set(Number::New(isolate, 0.0));
}


Local<Value> UnsignedShortField::FromCppToJsValue(UnsignedShortField::ConstRefType cppValue)
{
    Isolate *isolate = Isolate::GetCurrent();
    EscapableHandleScope scope(isolate);

    return scope.Escape(Number::New(isolate, cppValue));
}


bool UnsignedShortField::FromJsValueToCpp(Local<Value> jsVal, RefType cppValueRet)
{
    Isolate *isolate = Isolate::GetCurrent();
    
    if (!jsVal->IsNumber())
    {
        return false;
    }

    cppValueRet = static_cast<UnsignedShortField::ValueType>(jsVal->NumberValue(isolate->GetCurrentContext()).FromMaybe(0u));

    return true;
}


void LongField::New(FunctionCallbackInfo<Value> const& args)
{
    Isolate *isolate = Isolate::GetCurrent();
    HandleScope scope(isolate);

    args.GetReturnValue().Set(Number::New(isolate, 0.0));
}


Local<Value> LongField::FromCppToJsValue(LongField::ConstRefType cppValue)
{
    Isolate *isolate = Isolate::GetCurrent();
    EscapableHandleScope scope(isolate);
    
    return scope.Escape(Number::New(isolate, cppValue));
}


bool LongField::FromJsValueToCpp(Local<Value> jsVal, LongField::RefType cppValueRet)
{
    Isolate *isolate = Isolate::GetCurrent();
    
    if (!jsVal->IsNumber())
    {
        return false;
    }

    cppValueRet = static_cast<LongField::ValueType>(jsVal->NumberValue(isolate->GetCurrentContext()).FromMaybe(0));

    return true;
}


bool LongField::FromJsValueToCpp(v8::Local<v8::Value> jsVal, long int& cppValueRet)
{
    LongField::ValueType valRet;

    bool result = FromJsValueToCpp(jsVal, valRet);
    if (result)
    {
        cppValueRet = static_cast< long int >(valRet);
    }

    return result;
}


void UnsignedLongField::New(FunctionCallbackInfo<Value> const& args)
{
    Isolate *isolate = Isolate::GetCurrent();
    HandleScope scope(isolate);

    args.GetReturnValue().Set(Number::New(isolate, 0.0));
}


Local<Value> UnsignedLongField::FromCppToJsValue(UnsignedLongField::ConstRefType cppValue)
{
    Isolate *isolate = Isolate::GetCurrent();
    EscapableHandleScope scope(isolate);
    
    return scope.Escape(Number::New(isolate, cppValue));
}


bool UnsignedLongField::FromJsValueToCpp(Local<Value> jsVal, UnsignedLongField::RefType cppValueRet)
{
    Isolate *isolate = Isolate::GetCurrent();
    
    if (!jsVal->IsNumber())
    {
        return false;
    }

    cppValueRet = static_cast<UnsignedLongField::ValueType>(jsVal->NumberValue(isolate->GetCurrentContext()).FromMaybe(0u));

    return true;
}


void InstanceHandleField::New(FunctionCallbackInfo<Value> const& args)
{
    Isolate *isolate = Isolate::GetCurrent();
    HandleScope scope(isolate);

    args.GetReturnValue().Set(Number::New(isolate, 0.0));
}


Local<Value> InstanceHandleField::FromCppToJsValue(InstanceHandleField::ConstRefType cppValue)
{
    Isolate *isolate = Isolate::GetCurrent();
    EscapableHandleScope scope(isolate);
    
    return scope.Escape(Number::New(isolate, cppValue));
}


bool InstanceHandleField::FromJsValueToCpp(Local<Value> jsVal, InstanceHandleField::RefType cppValueRet)
{
    Isolate *isolate = Isolate::GetCurrent();
    
    if (!jsVal->IsNumber())
    {
        return false;
    }

    cppValueRet = static_cast<InstanceHandleField::ValueType>(jsVal->NumberValue(isolate->GetCurrentContext()).FromMaybe(0.0));

    return true;
}


void FloatField::New(FunctionCallbackInfo<Value> const& args)
{
    Isolate *isolate = Isolate::GetCurrent();
    HandleScope scope(isolate);

    args.GetReturnValue().Set(Number::New(isolate, 0.0));
}


Local<Value> FloatField::FromCppToJsValue(FloatField::ConstRefType cppValue)
{
    Isolate *isolate = Isolate::GetCurrent();
    EscapableHandleScope scope(isolate);

    return scope.Escape(Number::New(isolate, cppValue));
}


bool FloatField::FromJsValueToCpp(Local<Value> jsVal, FloatField::RefType cppValueRet)
{
    Isolate *isolate = Isolate::GetCurrent();
    
    if (!jsVal->IsNumber())
    {
        return false;
    }

    cppValueRet = static_cast<FloatField::ValueType>(jsVal->NumberValue(isolate->GetCurrentContext()).FromMaybe(0.0f));

    return true;
}


void DoubleField::New(FunctionCallbackInfo<Value> const& args)
{
    Isolate *isolate = Isolate::GetCurrent();
    HandleScope scope(isolate);

    args.GetReturnValue().Set(Number::New(isolate, 0.0));
}


Local<Value> DoubleField::FromCppToJsValue(DoubleField::ConstRefType cppValue)
{
    Isolate *isolate = Isolate::GetCurrent();
    EscapableHandleScope scope(isolate);
    
    return scope.Escape(Number::New(isolate, cppValue));
}


bool DoubleField::FromJsValueToCpp(Local<Value> jsVal, DoubleField::RefType cppValueRet)
{
    Isolate *isolate = Isolate::GetCurrent();
    
    if (!jsVal->IsNumber())
    {
        return false;
    }

    cppValueRet = jsVal->NumberValue(isolate->GetCurrentContext()).FromMaybe(0.0);

    return true;
}


void BooleanField::New(FunctionCallbackInfo<Value> const& args)
{
    Isolate *isolate = Isolate::GetCurrent();
    HandleScope scope(isolate);

    args.GetReturnValue().Set(False(isolate));
}


Local<Value> BooleanField::FromCppToJsValue(BooleanField::ConstRefType cppValue)
{
    Isolate *isolate = Isolate::GetCurrent();
    EscapableHandleScope scope(isolate);
    
    return scope.Escape(Boolean::New(isolate, cppValue));
}


bool BooleanField::FromJsValueToCpp(Local<Value> jsVal, BooleanField::RefType cppValueRet)
{
    Isolate *isolate = Isolate::GetCurrent();
    
    if (!jsVal->IsBoolean())
    {
        return false;
    }

    cppValueRet = jsVal->BooleanValue(isolate->GetCurrentContext()).FromMaybe(false);

    return true;
}

} // end namespace DdsJs
