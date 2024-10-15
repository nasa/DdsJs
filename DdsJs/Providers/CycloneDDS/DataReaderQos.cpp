/**
 * \file CycloneDDS/DataReaderQos.cpp
 * \brief Contains the implementation for the \c DataReaderQosProxy class.
 * \author Rolando J. Nieves
 * \date 2024-10-04 10:54:15
 */

#include "DataReaderQos.hh"


namespace DdsJs
{

const char *DataReaderQosProxy::DeadlineField::NAME = "deadline";

const char *DataReaderQosProxy::DestinationOrderField::NAME = "destination_order";

const char *DataReaderQosProxy::DurabilityField::NAME = "durability";

const char *DataReaderQosProxy::HistoryField::NAME = "history";

const char *DataReaderQosProxy::LatencyBudgetField::NAME = "latency_budget";

const char *DataReaderQosProxy::LivelinessField::NAME = "liveliness";

const char *DataReaderQosProxy::OwnershipField::NAME = "ownership";

const char *DataReaderQosProxy::ReaderDataLifecycleField::NAME = "reader_data_lifecycle";

const char *DataReaderQosProxy::ReliabilityField::NAME = "reliability";

const char *DataReaderQosProxy::ResourceLimitsField::NAME = "resource_limits";

const char *DataReaderQosProxy::TimeBasedFilterField::NAME = "time_based_filter";

const char *DataReaderQosProxy::UserDataField::NAME = "user_data";

const char *DataReaderQosProxy::MODNAME = "DDS";

const char *DataReaderQosProxy::NAME = "DataReaderQos";


void
DataReaderQosProxy::FromCpp(Napi::Env env, CppEntity const& cppVal, NapiContainer& jsValOut)
{
    if (dds_qget_deadline(cppVal, nullptr))
    {
        jsValOut.Set(DeadlineField::NAME, DeadlineField::Proxy::NewInstance(env, cppVal));
    }

    if (dds_qget_destination_order(cppVal, nullptr))
    {
        jsValOut.Set(DestinationOrderField::NAME, DestinationOrderField::Proxy::NewInstance(env, cppVal));
    }

    if (dds_qget_durability(cppVal, nullptr))
    {
        jsValOut.Set(DurabilityField::NAME, DurabilityField::Proxy::NewInstance(env, cppVal));
    }

    if (dds_qget_history(cppVal, nullptr, nullptr))
    {
        jsValOut.Set(HistoryField::NAME, HistoryField::Proxy::NewInstance(env, cppVal));
    }

    if (dds_qget_latency_budget(cppVal, nullptr))
    {
        jsValOut.Set(LatencyBudgetField::NAME, LatencyBudgetField::Proxy::NewInstance(env, cppVal));
    }

    if (dds_qget_liveliness(cppVal, nullptr, nullptr))
    {
        jsValOut.Set(LivelinessField::NAME, LivelinessField::Proxy::NewInstance(env, cppVal));
    }

    if (dds_qget_ownership(cppVal, nullptr))
    {
        jsValOut.Set(OwnershipField::NAME, OwnershipField::Proxy::NewInstance(env, cppVal));
    }

    if (dds_qget_reader_data_lifecycle(cppVal, nullptr, nullptr))
    {
        jsValOut.Set(ReaderDataLifecycleField::NAME, ReaderDataLifecycleField::Proxy::NewInstance(env, cppVal));
    }

    if (dds_qget_reliability(cppVal, nullptr, nullptr))
    {
        jsValOut.Set(ReliabilityField::NAME, ReliabilityField::Proxy::NewInstance(env, cppVal));
    }

    if (dds_qget_resource_limits(cppVal, nullptr, nullptr, nullptr))
    {
        jsValOut.Set(ResourceLimitsField::NAME, ResourceLimitsField::Proxy::NewInstance(env, cppVal));
    }

    if (dds_qget_time_based_filter(cppVal, nullptr))
    {
        jsValOut.Set(TimeBasedFilterField::NAME, TimeBasedFilterField::Proxy::NewInstance(env, cppVal));
    }

    if (dds_qget_userdata(cppVal, nullptr, nullptr))
    {
        jsValOut.Set(UserDataField::NAME, UserDataField::Proxy::NewInstance(env, cppVal));
    }
}



void
DataReaderQosProxy::FromJs(Napi::Env env, NapiContainer const& jsVal, CppEntity& cppValOut)
{
    auto deadline_field = jsVal.Get(DeadlineField::NAME);
    if (!deadline_field.IsUndefined())
    {
        DeadlineField::Proxy::FromJs(env, deadline_field.As< DeadlineField::Proxy::NapiContainer >(), cppValOut);
    }

    auto destination_order_field = jsVal.Get(DestinationOrderField::NAME);
    if (!destination_order_field.IsUndefined())
    {
        DestinationOrderField::Proxy::FromJs(env, destination_order_field.As< DestinationOrderField::Proxy::NapiContainer >(), cppValOut);
    }

    auto durability_field = jsVal.Get(DurabilityField::NAME);
    if (!durability_field.IsUndefined())
    {
        DurabilityField::Proxy::FromJs(env, durability_field.As< DurabilityField::Proxy::NapiContainer >(), cppValOut);
    }

    auto history_field = jsVal.Get(HistoryField::NAME);
    if (!history_field.IsUndefined())
    {
        HistoryField::Proxy::FromJs(env, history_field.As< HistoryField::Proxy::NapiContainer >(), cppValOut);
    }

    auto latency_budget_field = jsVal.Get(LatencyBudgetField::NAME);
    if (!latency_budget_field.IsUndefined())
    {
        LatencyBudgetField::Proxy::FromJs(env, latency_budget_field.As< LatencyBudgetField::Proxy::NapiContainer >(), cppValOut);
    }

    auto liveliness_field = jsVal.Get(LivelinessField::NAME);
    if (!liveliness_field.IsUndefined())
    {
        LivelinessField::Proxy::FromJs(env, liveliness_field.As< LivelinessField::Proxy::NapiContainer >(), cppValOut);
    }

    auto ownership_field = jsVal.Get(OwnershipField::NAME);
    if (!ownership_field.IsUndefined())
    {
        OwnershipField::Proxy::FromJs(env, ownership_field.As< OwnershipField::Proxy::NapiContainer >(), cppValOut);
    }

    auto reader_data_lifecycle_field = jsVal.Get(ReaderDataLifecycleField::NAME);
    if (!reader_data_lifecycle_field.IsUndefined())
    {
        ReaderDataLifecycleField::Proxy::FromJs(env, reader_data_lifecycle_field.As< ReaderDataLifecycleField::Proxy::NapiContainer >(), cppValOut);
    }

    auto reliability_field = jsVal.Get(ReliabilityField::NAME);
    if (!reliability_field.IsUndefined())
    {
        ReliabilityField::Proxy::FromJs(env, reliability_field.As< ReliabilityField::Proxy::NapiContainer >(), cppValOut);
    }

    auto resource_limits_field = jsVal.Get(ResourceLimitsField::NAME);
    if (!resource_limits_field.IsUndefined())
    {
        ResourceLimitsField::Proxy::FromJs(env, resource_limits_field.As< ResourceLimitsField::Proxy::NapiContainer >(), cppValOut);
    }

    auto time_based_filter_field = jsVal.Get(TimeBasedFilterField::NAME);
    if (!time_based_filter_field.IsUndefined())
    {
        TimeBasedFilterField::Proxy::FromJs(env, time_based_filter_field.As< TimeBasedFilterField::Proxy::NapiContainer >(), cppValOut);
    }

    auto user_data_field = jsVal.Get(UserDataField::NAME);
    if (!user_data_field.IsUndefined())
    {
        UserDataField::Proxy::FromJs(env, user_data_field.As< UserDataField::Proxy::NapiContainer >(), cppValOut);
    }
}


Napi::Object
DataReaderQosProxy::Init(Napi::Env env, Napi::Object exports, ConstructorRegistry *ctorReg)
{
    Napi::Function ctor_func = DefineClass(
        env,
        DataReaderQosProxy::NAME,
        {}
    );

    Napi::FunctionReference *ctor_ref = new Napi::FunctionReference();
    *ctor_ref = Napi::Persistent(ctor_func);
    ctorReg->setConstructorFor(DottedName({ DataReaderQosProxy::MODNAME, DataReaderQosProxy::NAME }), ctor_ref);

    exports.Set(DataReaderQosProxy::NAME, ctor_func);

    return exports;
}


DataReaderQosProxy::NapiContainer
DataReaderQosProxy::NewInstance(Napi::Env env)
{
    Napi::EscapableHandleScope scope(env);
    Napi::FunctionReference *ctor_ref = env.GetInstanceData< ConstructorRegistry >()->getConstructorFor(DottedName({ DataReaderQosProxy::MODNAME, DataReaderQosProxy::NAME }));
    if (nullptr == ctor_ref)
    {
        throw Napi::Error::New(env, "Internal error: Constructor for DataReaderQos not available.");
    }

    return scope.Escape((napi_value)ctor_ref->New({})).As< NapiContainer >();
}


DataReaderQosProxy::NapiContainer
DataReaderQosProxy::NewInstance(Napi::Env env, CppEntity const& cppInstance)
{
    NapiContainer result = NewInstance(env);
    FromCpp(env, cppInstance, result);

    return result;
}


DataReaderQosProxy::DataReaderQosProxy(Napi::CallbackInfo const& info):
    Napi::ObjectWrap< DataReaderQosProxy >(info)
{
    NapiContainer this_instance = info.This().As< NapiContainer >();
    this_instance.Set(DeadlineField::NAME, info.Env().Undefined());
    this_instance.Set(DestinationOrderField::NAME, info.Env().Undefined());
    this_instance.Set(DurabilityField::NAME, info.Env().Undefined());
    this_instance.Set(HistoryField::NAME, info.Env().Undefined());
    this_instance.Set(LatencyBudgetField::NAME, info.Env().Undefined());
    this_instance.Set(LivelinessField::NAME, info.Env().Undefined());
    this_instance.Set(OwnershipField::NAME, info.Env().Undefined());
    this_instance.Set(ReaderDataLifecycleField::NAME, info.Env().Undefined());
    this_instance.Set(ReliabilityField::NAME, info.Env().Undefined());
    this_instance.Set(ResourceLimitsField::NAME, info.Env().Undefined());
    this_instance.Set(TimeBasedFilterField::NAME, info.Env().Undefined());
    this_instance.Set(UserDataField::NAME, info.Env().Undefined());
}

} // end namespace DdsJs

// vim: set ts=4 sw=4 expandtab:
