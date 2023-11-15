/**
 * \file coredx_missing.cpp
 * \brief Contains implementations for missing/inconsistent CoreDX features.
 * \date 2021-04-23 10:34:54
 * \author Rolando J. Nieves
 */

#include <sstream>

#include "TypeUtility.hh"
#include "coredx_missing.hh"


using std::stringstream;
using v8::Context;
using v8::EscapableHandleScope;
using v8::Exception;
using v8::FunctionCallbackInfo;
using v8::HandleScope;
using v8::Isolate;
using v8::FunctionTemplate;
using v8::Local;
using v8::Maybe;
using v8::MaybeLocal;
using v8::Number;
using v8::Object;
using v8::Persistent;
using v8::String;
using v8::Value;

namespace DDS
{

/*
 * Inclusion of C-based constant values in the DDS C++ namespace.
 */
#if defined(COREDX_DDS_VERSION_MAJOR) && (COREDX_DDS_VERSION_MAJOR < 5)
const SampleRejectedStatusKind NOT_REJECTED = DDS_NOT_REJECTED;
const SampleRejectedStatusKind REJECTED_BY_INSTANCE_LIMIT = DDS_REJECTED_BY_INSTANCE_LIMIT;
const SampleRejectedStatusKind REJECTED_BY_SAMPLES_LIMIT = DDS_REJECTED_BY_SAMPLES_LIMIT;
const SampleRejectedStatusKind REJECTED_BY_SAMPLES_PER_INSTANCE_LIMIT = DDS_REJECTED_BY_SAMPLES_PER_INSTANCE_LIMIT;
#endif /* defined(COREDX_DDS_VERSION_MAJOR) && (COREDX_DDS_VERSION_MAJOR < 5) */
const ReturnCode_t RETCODE_ILLEGAL_OPERATION = 12;
const int TIME_INVALID_SEC = -1;
const unsigned int TIME_INVALID_NSEC = 0xffffffff;
const QosPolicyId_t INVALID_QOS_POLICY_ID = 0;

v8::Persistent< v8::String > SampleRejectedStatusField::total_countFieldName;
v8::Persistent< v8::String > SampleRejectedStatusField::total_count_changeFieldName;
v8::Persistent< v8::String > SampleRejectedStatusField::last_reasonFieldName;
v8::Persistent< v8::String > SampleRejectedStatusField::last_instance_handleFieldName;

void
SampleRejectedStatusField::Init(Local< Object > exports)
{
    Isolate *isolate = Isolate::GetCurrent();
    Local< Context > ctx = isolate->GetCurrentContext();

    if (nullptr == isolate)
    {
        return;
    }

    auto ctorFuncTmpl = FunctionTemplate::New(
        isolate,
        SampleRejectedStatusField::New
    );

    auto ctorFuncMaybe = ctorFuncTmpl->GetFunction(ctx);
    if (ctorFuncMaybe.IsEmpty())
    {
        // Pending exception or termination
        return;
    }
    Maybe< bool > setResult = exports->Set(
        ctx,
        String::NewFromUtf8(isolate, "SampleRejectedStatus"),
        ctorFuncMaybe.ToLocalChecked()
    );
    if (setResult.IsNothing())
    {
        // Pending exception or termination
        return;
    }

    if (!setResult.FromJust())
    {
        stringstream errMsg;
        errMsg
            << "Could not set constructor function for "
            << "SampleRejectedStatusField.";
        isolate->ThrowException(
            Exception::TypeError(
                String::NewFromUtf8(
                    isolate,
                    errMsg.str().c_str()
                )
            )
        );
        return;
    }

    SampleRejectedStatusField::total_countFieldName.Reset(isolate,
        String::NewFromUtf8(isolate, "total_count"));
    SampleRejectedStatusField::total_count_changeFieldName.Reset(isolate,
        String::NewFromUtf8(isolate, "total_count_change"));
    SampleRejectedStatusField::last_reasonFieldName.Reset(
        isolate,
        String::NewFromUtf8(
            isolate,
            "last_reason"
        )
    );
    SampleRejectedStatusField::last_instance_handleFieldName.Reset(
        isolate,
        String::NewFromUtf8(
            isolate,
            "last_instance_handle"
        )
    );
}

// New instance of topic SampleRejectedStatus field type.
void
SampleRejectedStatusField::New(FunctionCallbackInfo< Value > const& args)
{
    Isolate *isolate = Isolate::GetCurrent();
    HandleScope scope(isolate);

    args.GetReturnValue().Set(
        SampleRejectedStatusField::FromCppToJsValue(
            SampleRejectedStatusField::ValueType()));
}

// From C++ to JavaScript for topic SampleRejectedStatus
Local< Value >
SampleRejectedStatusField::FromCppToJsValue(SampleRejectedStatusField::ConstRefType cppValue)
{
    Isolate *isolate = Isolate::GetCurrent();
    EscapableHandleScope scope(isolate);
    Local< Object > result(Object::New(isolate));
    Local< Context > ctx = Local< Context >::New(isolate, isolate->GetCurrentContext());
    Maybe< bool > setResult = ::v8::Nothing< bool >();

    setResult = result->Set(
        ctx,
        Local< String >::New(
            isolate,
            SampleRejectedStatusField::total_countFieldName
        ),
        ::DdsJs::LongField::FromCppToJsValue(
            cppValue.total_count
        )
    );

    if (!setResult.FromMaybe(false))
    {
        // TODO: throw exception
    }

    setResult = result->Set(
        ctx,
        Local< String >::New(
            isolate,
            SampleRejectedStatusField::total_count_changeFieldName
        ),
        ::DdsJs::LongField::FromCppToJsValue(
            cppValue.total_count_change
        )
    );

    if (!setResult.FromMaybe(false))
    {
        // TODO: throw exception
    }

    setResult = result->Set(
        ctx,
        Local< String >::New(
            isolate,
            SampleRejectedStatusField::last_reasonFieldName
        ),
        ::DDS::SampleRejectedStatusKindField::FromCppToJsValue(
            cppValue.last_reason
        )
    );

    if (!setResult.FromMaybe(false))
    {
        // TODO: throw exception
    }

    setResult = result->Set(
        ctx,
        Local< String >::New(
            isolate,
            SampleRejectedStatusField::last_instance_handleFieldName
        ),
        ::DdsJs::UnsignedLongField::FromCppToJsValue(
            cppValue.last_reason
        )
    );

    if (!setResult.FromMaybe(false))
    {
        // TODO: throw exception
    }

    return scope.Escape(result);
}

// From JavaScript to C++ for topic SampleRejectedStatus
bool SampleRejectedStatusField::FromJsValueToCpp(Local<Value> jsVal, SampleRejectedStatusField::RefType cppValueRet)
{
    Isolate *isolate = Isolate::GetCurrent();
    HandleScope scope(isolate);
    Local<Context> ctx = Local<Context>::New(isolate, isolate->GetCurrentContext());
    MaybeLocal<Object> jsObjMaybe;
    bool result = true;
    MaybeLocal<Value> fieldMaybe;
    Local<Object> jsObject;
    Local<String> l_total_countFieldName =
        Local<String>::New(isolate,
            SampleRejectedStatusField::total_countFieldName);
    Local<String> l_total_count_changeFieldName =
        Local<String>::New(isolate,
            SampleRejectedStatusField::total_count_changeFieldName);
    Local<String> l_last_reasonFieldName =
        Local<String>::New(isolate,
            SampleRejectedStatusField::last_reasonFieldName);
    Local<String> l_last_instance_handleFieldName =
        Local<String>::New(isolate,
            SampleRejectedStatusField::last_instance_handleFieldName);

    result = !(jsObjMaybe = jsVal->ToObject(ctx)).IsEmpty() &&
        !(jsObject = jsObjMaybe.FromMaybe(Local<Object>())).IsEmpty();
    result = result &&
        !(fieldMaybe = jsObject->Get(ctx, l_total_countFieldName)).IsEmpty() &&
        ::DdsJs::LongField::FromJsValueToCpp(fieldMaybe.FromMaybe(Local<Value>()), cppValueRet.total_count);
    result = result &&
        !(fieldMaybe = jsObject->Get(ctx, l_total_count_changeFieldName)).IsEmpty() &&
        ::DdsJs::LongField::FromJsValueToCpp(fieldMaybe.FromMaybe(Local<Value>()), cppValueRet.total_count_change);
    result = result &&
        !(fieldMaybe = jsObject->Get(ctx, l_last_reasonFieldName)).IsEmpty() &&
        ::DDS::SampleRejectedStatusKindField::FromJsValueToCpp(fieldMaybe.FromMaybe(Local<Value>()), cppValueRet.last_reason);
    result = result &&
        !(fieldMaybe = jsObject->Get(ctx, l_last_instance_handleFieldName)).IsEmpty() &&
        ::DdsJs::UnsignedLongField::FromJsValueToCpp(fieldMaybe.FromMaybe(Local<Value>()), cppValueRet.last_instance_handle);

    return result;
}

void SampleRejectedStatusKindField::Init(Local<Object> exports)
{
    Isolate *isolate = Isolate::GetCurrent();
    Local<Context> ctx = Local<Context>::New(
        isolate,
        isolate->GetCurrentContext()
    );
    Local<Object> enumObj(Object::New(isolate));

    enumObj->DefineOwnProperty(ctx,
        String::NewFromUtf8(isolate, "NOT_REJECTED"),
        Number::New(isolate, ::DDS::NOT_REJECTED),
        ::v8::ReadOnly).Check();
    enumObj->DefineOwnProperty(ctx,
        String::NewFromUtf8(isolate, "REJECTED_BY_INSTANCE_LIMIT"),
        Number::New(isolate, ::DDS::REJECTED_BY_INSTANCE_LIMIT),
        ::v8::ReadOnly).Check();
    enumObj->DefineOwnProperty(ctx,
        String::NewFromUtf8(isolate, "REJECTED_BY_SAMPLES_LIMIT"),
        Number::New(isolate, ::DDS::REJECTED_BY_SAMPLES_LIMIT),
        ::v8::ReadOnly).Check();
    enumObj->DefineOwnProperty(ctx,
        String::NewFromUtf8(isolate, "REJECTED_BY_SAMPLES_PER_INSTANCE_LIMIT"),
        Number::New(isolate, ::DDS::REJECTED_BY_SAMPLES_PER_INSTANCE_LIMIT),
        ::v8::ReadOnly).Check();


    Maybe< bool > setResult = exports->Set(
        ctx,
        String::NewFromUtf8(isolate, "SampleRejectedStatusKind"),
        enumObj
    );

    if (!setResult.FromMaybe(false))
    {
        // TODO: Throw exception
    }
}

// From C++ to JavaScript for enum SampleRejectedStatusKind
Local<Value> SampleRejectedStatusKindField::FromCppToJsValue(SampleRejectedStatusKindField::ConstRefType cppValue)
{
    Isolate *isolate = Isolate::GetCurrent();
    EscapableHandleScope scope(isolate);

    return scope.Escape(::DdsJs::LongField::FromCppToJsValue(static_cast< ::DdsJs::LongField::ValueType >(cppValue)));
}

// From JavaScript to C++ for enum SampleRejectedStatusKind
bool SampleRejectedStatusKindField::FromJsValueToCpp(Local<Value> jsVal, SampleRejectedStatusKindField::RefType cppValueRet)
{
    ::DdsJs::LongField::ValueType longVal;
    bool result = ::DdsJs::LongField::FromJsValueToCpp(jsVal, longVal);
    if (result)
    {
        cppValueRet = static_cast< ::DDS::SampleRejectedStatusKindField::ValueType >(longVal);
    }

    return result;
}

void
CoreDxMissingInitAll(Local< Object > exports)
{
    SampleRejectedStatusKindField::Init(exports);
    SampleRejectedStatusField::Init(exports);
}

} // end namespace DDS

// vim: set ts=4 sw=4 expandtab:
