/**
 * \file CoreDX/DataReaderQos.cpp
 * \brief Contains the implementation for the \c DataReaderQosProxy class.
 * \author Rolando J. Nieves
 * \date 2024-02-02 12:46:52
 */

// --------------------------------------------------------------------------
// Local Definition
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
    jsValOut.Set(DeadlineField::NAME, DeadlineField::Proxy::NewInstance(env, cppVal.deadline));
    jsValOut.Set(DestinationOrderField::NAME, DestinationOrderField::Proxy::NewInstance(env, cppVal.destination_order));
    jsValOut.Set(DurabilityField::NAME, DurabilityField::Proxy::NewInstance(env, cppVal.durability));
    jsValOut.Set(HistoryField::NAME, HistoryField::Proxy::NewInstance(env, cppVal.history));
    jsValOut.Set(LatencyBudgetField::NAME, LatencyBudgetField::Proxy::NewInstance(env, cppVal.latency_budget));
    jsValOut.Set(LivelinessField::NAME, LivelinessField::Proxy::NewInstance(env, cppVal.liveliness));
    jsValOut.Set(OwnershipField::NAME, OwnershipField::Proxy::NewInstance(env, cppVal.ownership));
    jsValOut.Set(ReaderDataLifecycleField::NAME, ReaderDataLifecycleField::Proxy::NewInstance(env, cppVal.reader_data_lifecycle));
    jsValOut.Set(ReliabilityField::NAME, ReliabilityField::Proxy::NewInstance(env, cppVal.reliability));
    jsValOut.Set(ResourceLimitsField::NAME, ResourceLimitsField::Proxy::NewInstance(env, cppVal.resource_limits));
    jsValOut.Set(TimeBasedFilterField::NAME, TimeBasedFilterField::Proxy::NewInstance(env, cppVal.time_based_filter));
    jsValOut.Set(UserDataField::NAME, UserDataField::Proxy::NewInstance(env, cppVal.user_data));
}



void
DataReaderQosProxy::FromJs(Napi::Env env, NapiContainer const& jsVal, CppEntity& cppValOut)
{
    DeadlineField::Proxy::FromJs(env, jsVal.Get(DeadlineField::NAME).As< DeadlineField::Proxy::NapiContainer >(), cppValOut.deadline);
    DestinationOrderField::Proxy::FromJs(env, jsVal.Get(DestinationOrderField::NAME).As< DestinationOrderField::Proxy::NapiContainer >(), cppValOut.destination_order);
    DurabilityField::Proxy::FromJs(env, jsVal.Get(DurabilityField::NAME).As< DurabilityField::Proxy::NapiContainer >(), cppValOut.durability);
    HistoryField::Proxy::FromJs(env, jsVal.Get(HistoryField::NAME).As< HistoryField::Proxy::NapiContainer >(), cppValOut.history);
    LatencyBudgetField::Proxy::FromJs(env, jsVal.Get(LatencyBudgetField::NAME).As< LatencyBudgetField::Proxy::NapiContainer >(), cppValOut.latency_budget);
    LivelinessField::Proxy::FromJs(env, jsVal.Get(LivelinessField::NAME).As< LivelinessField::Proxy::NapiContainer >(), cppValOut.liveliness);
    OwnershipField::Proxy::FromJs(env, jsVal.Get(OwnershipField::NAME).As< OwnershipField::Proxy::NapiContainer >(), cppValOut.ownership);
    ReaderDataLifecycleField::Proxy::FromJs(env, jsVal.Get(ReaderDataLifecycleField::NAME).As< ReaderDataLifecycleField::Proxy::NapiContainer >(), cppValOut.reader_data_lifecycle);
    ReliabilityField::Proxy::FromJs(env, jsVal.Get(ReliabilityField::NAME).As< ReliabilityField::Proxy::NapiContainer >(), cppValOut.reliability);
    ResourceLimitsField::Proxy::FromJs(env, jsVal.Get(ResourceLimitsField::NAME).As< ResourceLimitsField::Proxy::NapiContainer >(), cppValOut.resource_limits);
    TimeBasedFilterField::Proxy::FromJs(env, jsVal.Get(TimeBasedFilterField::NAME).As< TimeBasedFilterField::Proxy::NapiContainer >(), cppValOut.time_based_filter);
    UserDataField::Proxy::FromJs(env, jsVal.Get(UserDataField::NAME).As< UserDataField::Proxy::NapiContainer >(), cppValOut.user_data);
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
    this_instance.Set(DeadlineField::NAME, DeadlineField::Proxy::NewInstance(info.Env()));
    this_instance.Set(DestinationOrderField::NAME, DestinationOrderField::Proxy::NewInstance(info.Env()));
    this_instance.Set(DurabilityField::NAME, DurabilityField::Proxy::NewInstance(info.Env()));
    this_instance.Set(HistoryField::NAME, HistoryField::Proxy::NewInstance(info.Env()));
    this_instance.Set(LatencyBudgetField::NAME, LatencyBudgetField::Proxy::NewInstance(info.Env()));
    this_instance.Set(LivelinessField::NAME, LivelinessField::Proxy::NewInstance(info.Env()));
    this_instance.Set(OwnershipField::NAME, OwnershipField::Proxy::NewInstance(info.Env()));
    this_instance.Set(ReaderDataLifecycleField::NAME, ReaderDataLifecycleField::Proxy::NewInstance(info.Env()));
    this_instance.Set(ReliabilityField::NAME, ReliabilityField::Proxy::NewInstance(info.Env()));
    this_instance.Set(ResourceLimitsField::NAME, ResourceLimitsField::Proxy::NewInstance(info.Env()));
    this_instance.Set(TimeBasedFilterField::NAME, TimeBasedFilterField::Proxy::NewInstance(info.Env()));
    this_instance.Set(UserDataField::NAME, UserDataField::Proxy::NewInstance(info.Env()));
}

} // end namespace DdsJs

// vim: set ts=4 sw=4 expandtab:
