/**
 * \file coredx_missing.hh
 * \brief Contains DDS constructs that are missing from CoreDX DDS.
 * \date 2014-09-24
 * \author Rolando J. Nieves
 */

#ifndef COREDXJS_MISSING_HH_
#define COREDXJS_MISSING_HH_

#include <v8.h>
#include <dds/dds.hh>
#include <dds/dds_builtin.hh>

namespace DDS
{
#if defined(COREDX_DDS_VERSION_MAJOR) && (COREDX_DDS_VERSION_MAJOR < 5)
typedef DDS_SampleRejectedStatusKind SampleRejectedStatusKind;
extern const SampleRejectedStatusKind NOT_REJECTED;
extern const SampleRejectedStatusKind REJECTED_BY_INSTANCE_LIMIT;
extern const SampleRejectedStatusKind REJECTED_BY_SAMPLES_LIMIT;
extern const SampleRejectedStatusKind REJECTED_BY_SAMPLES_PER_INSTANCE_LIMIT;
#endif /* defined(COREDX_DDS_VERSION_MAJOR) && (COREDX_DDS_VERSION_MAJOR < 5) */

struct SampleRejectedStatusField
{
    typedef ::DDS::SampleRejectedStatus ValueType;
    typedef ::DDS::SampleRejectedStatus& RefType;
    typedef ::DDS::SampleRejectedStatus const& ConstRefType;
    typedef ::DDS::SampleRejectedStatus *PtrType;

    // Structure Field Names
    static ::v8::Persistent< ::v8::String > total_countFieldName;
    static ::v8::Persistent< ::v8::String > total_count_changeFieldName;
    static ::v8::Persistent< ::v8::String > last_reasonFieldName;
    static ::v8::Persistent< ::v8::String > last_instance_handleFieldName;


    // V8 Management Functions
    static void Init(::v8::Local< ::v8::Object > exports);
    static void New(::v8::FunctionCallbackInfo< ::v8::Value > const& args);
    static ::v8::Local< ::v8::Value > FromCppToJsValue(ConstRefType cppValue);
    static bool FromJsValueToCpp(::v8::Local< ::v8::Value > jsVal, RefType cppValueRet);
};

struct SampleRejectedStatusKindField
{
#if defined(COREDX_DDS_VERSION_MAJOR) && (COREDX_DDS_VERSION_MAJOR >= 5)
	typedef DDS_SampleRejectedStatusKind ValueType;
	typedef DDS_SampleRejectedStatusKind& RefType;
	typedef DDS_SampleRejectedStatusKind const& ConstRefType;
	typedef DDS_SampleRejectedStatusKind *PtrType;
#else
    typedef DDS::SampleRejectedStatusKind ValueType;
    typedef DDS::SampleRejectedStatusKind& RefType;
    typedef DDS::SampleRejectedStatusKind const& ConstRefType;
    typedef DDS::SampleRejectedStatusKind *PtrType;
#endif /* defined(COREDX_DDS_VERSION_MAJOR) && (COREDX_DDS_VERSION_MAJOR >= 5) */

	static void Init(::v8::Local< ::v8::Object > exports);
	static ::v8::Local< ::v8::Value > FromCppToJsValue(ConstRefType cppValue);
	static bool FromJsValueToCpp(::v8::Local< ::v8::Value > jsVal, RefType cppValueRet);
};

void CoreDxMissingInitAll(::v8::Local< ::v8::Object > exports);


extern const ReturnCode_t RETCODE_ILLEGAL_OPERATION;
extern const int TIME_INVALID_SEC;
extern const unsigned int TIME_INVALID_NSEC;

extern const QosPolicyId_t INVALID_QOS_POLICY_ID;
}

#endif /* COREDXJS_MISSING_HH_ */
