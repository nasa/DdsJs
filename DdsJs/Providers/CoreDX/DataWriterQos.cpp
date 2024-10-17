/**
 * \file CoreDX/DataWriterQos.cpp
 * \brief Contains the implementation for the \c DataWriterQosProxy class.
 * \author Rolando J. Nieves <rolando.j.nieves@nasa.gov>
 * \date 2024-02-02 12:04:30
 */

// --------------------------------------------------------------------------
// Local Definition
#include "DataWriterQos.hh"


namespace DdsJs
{

const char *DataWriterQosProxy::DeadlineField::NAME = "deadline";

const char *DataWriterQosProxy::DestinationOrderField::NAME = "destination_order";

const char *DataWriterQosProxy::DurabilityField::NAME = "durability";

const char *DataWriterQosProxy::DurabilityServiceField::NAME = "durability_service";

const char *DataWriterQosProxy::HistoryField::NAME = "history";

const char *DataWriterQosProxy::LatencyBudgetField::NAME = "latency_budget";

const char *DataWriterQosProxy::LifespanField::NAME = "lifespan";

const char *DataWriterQosProxy::LivelinessField::NAME = "liveliness";

const char *DataWriterQosProxy::OwnershipField::NAME = "ownership";

const char *DataWriterQosProxy::OwnershipStrengthField::NAME = "ownership_strength";

const char *DataWriterQosProxy::ReliabilityField::NAME = "reliability";

const char *DataWriterQosProxy::ResourceLimitsField::NAME = "resource_limits";

const char *DataWriterQosProxy::TransportPriorityField::NAME = "transport_priority";

const char *DataWriterQosProxy::UserDataField::NAME = "user_data";

const char *DataWriterQosProxy::WriterDataLifecycleField::NAME = "writer_data_lifecycle";

const char *DataWriterQosProxy::MODNAME = "DDS";

const char *DataWriterQosProxy::NAME = "DataWriterQos";


void
DataWriterQosProxy::FromCpp(Napi::Env env, CppEntity const& cppVal, NapiContainer& jsValOut)
{
    jsValOut.Set(DeadlineField::NAME, DeadlineField::Proxy::NewInstance(env, cppVal.deadline));
    jsValOut.Set(DestinationOrderField::NAME, DestinationOrderField::Proxy::NewInstance(env, cppVal.destination_order));
    jsValOut.Set(DurabilityField::NAME, DurabilityField::Proxy::NewInstance(env, cppVal.durability));
    jsValOut.Set(DurabilityServiceField::NAME, DurabilityServiceField::Proxy::NewInstance(env, cppVal.durability_service));
    jsValOut.Set(HistoryField::NAME, HistoryField::Proxy::NewInstance(env, cppVal.history));
    jsValOut.Set(LatencyBudgetField::NAME, LatencyBudgetField::Proxy::NewInstance(env, cppVal.latency_budget));
    jsValOut.Set(LifespanField::NAME, LifespanField::Proxy::NewInstance(env, cppVal.lifespan));
    jsValOut.Set(LivelinessField::NAME, LivelinessField::Proxy::NewInstance(env, cppVal.liveliness));
    jsValOut.Set(OwnershipField::NAME, OwnershipField::Proxy::NewInstance(env, cppVal.ownership));
    jsValOut.Set(OwnershipStrengthField::NAME, OwnershipStrengthField::Proxy::NewInstance(env, cppVal.ownership_strength));
    jsValOut.Set(ReliabilityField::NAME, ReliabilityField::Proxy::NewInstance(env, cppVal.reliability));
    jsValOut.Set(ResourceLimitsField::NAME, ResourceLimitsField::Proxy::NewInstance(env, cppVal.resource_limits));
    jsValOut.Set(TransportPriorityField::NAME, TransportPriorityField::Proxy::NewInstance(env, cppVal.transport_priority));
    jsValOut.Set(UserDataField::NAME, UserDataField::Proxy::NewInstance(env, cppVal.user_data));
    jsValOut.Set(WriterDataLifecycleField::NAME, WriterDataLifecycleField::Proxy::NewInstance(env, cppVal.writer_data_lifecycle));
}



void
DataWriterQosProxy::FromJs(Napi::Env env, NapiContainer const& jsVal, CppEntity& cppValOut)
{
    DeadlineField::Proxy::FromJs(env, jsVal.Get(DeadlineField::NAME).As< DeadlineField::Proxy::NapiContainer >(), cppValOut.deadline);
    DestinationOrderField::Proxy::FromJs(env, jsVal.Get(DestinationOrderField::NAME).As< DestinationOrderField::Proxy::NapiContainer >(), cppValOut.destination_order);
    DurabilityField::Proxy::FromJs(env, jsVal.Get(DurabilityField::NAME).As< DurabilityField::Proxy::NapiContainer >(), cppValOut.durability);
    DurabilityServiceField::Proxy::FromJs(env, jsVal.Get(DurabilityServiceField::NAME).As< DurabilityServiceField::Proxy::NapiContainer >(), cppValOut.durability_service);
    HistoryField::Proxy::FromJs(env, jsVal.Get(HistoryField::NAME).As< HistoryField::Proxy::NapiContainer >(), cppValOut.history);
    LatencyBudgetField::Proxy::FromJs(env, jsVal.Get(LatencyBudgetField::NAME).As< LatencyBudgetField::Proxy::NapiContainer >(), cppValOut.latency_budget);
    LifespanField::Proxy::FromJs(env, jsVal.Get(LifespanField::NAME).As< LifespanField::Proxy::NapiContainer >(), cppValOut.lifespan);
    LivelinessField::Proxy::FromJs(env, jsVal.Get(LivelinessField::NAME).As< LivelinessField::Proxy::NapiContainer >(), cppValOut.liveliness);
    OwnershipField::Proxy::FromJs(env, jsVal.Get(OwnershipField::NAME).As< OwnershipField::Proxy::NapiContainer >(), cppValOut.ownership);
    OwnershipStrengthField::Proxy::FromJs(env, jsVal.Get(OwnershipStrengthField::NAME).As< OwnershipStrengthField::Proxy::NapiContainer >(), cppValOut.ownership_strength);
    ReliabilityField::Proxy::FromJs(env, jsVal.Get(ReliabilityField::NAME).As< ReliabilityField::Proxy::NapiContainer >(), cppValOut.reliability);
    ResourceLimitsField::Proxy::FromJs(env, jsVal.Get(ResourceLimitsField::NAME).As< ResourceLimitsField::Proxy::NapiContainer >(), cppValOut.resource_limits);
    TransportPriorityField::Proxy::FromJs(env, jsVal.Get(TransportPriorityField::NAME).As< TransportPriorityField::Proxy::NapiContainer >(), cppValOut.transport_priority);
    UserDataField::Proxy::FromJs(env, jsVal.Get(UserDataField::NAME).As< UserDataField::Proxy::NapiContainer >(), cppValOut.user_data);
    WriterDataLifecycleField::Proxy::FromJs(env, jsVal.Get(WriterDataLifecycleField::NAME).As< WriterDataLifecycleField::Proxy::NapiContainer >(), cppValOut.writer_data_lifecycle);
}


Napi::Object
DataWriterQosProxy::Init(Napi::Env env, Napi::Object exports, ConstructorRegistry *ctorReg)
{
    Napi::Function ctor_func = DefineClass(
        env,
        DataWriterQosProxy::NAME,
        {}
    );

    Napi::FunctionReference *ctor_ref = new Napi::FunctionReference();
    *ctor_ref = Napi::Persistent(ctor_func);
    ctorReg->setConstructorFor(DottedName({ DataWriterQosProxy::MODNAME, DataWriterQosProxy::NAME }), ctor_ref);

    exports.Set(DataWriterQosProxy::NAME, ctor_func);

    return exports;
}


DataWriterQosProxy::NapiContainer
DataWriterQosProxy::NewInstance(Napi::Env env)
{
    Napi::EscapableHandleScope scope(env);
    Napi::FunctionReference *ctor_ref = env.GetInstanceData< ConstructorRegistry >()->getConstructorFor(DottedName({ DataWriterQosProxy::MODNAME, DataWriterQosProxy::NAME }));
    if (nullptr == ctor_ref)
    {
        throw Napi::Error::New(env, "Internal error: Constructor for DataWriterQos not available.");
    }

    return scope.Escape((napi_value)ctor_ref->New({})).As< NapiContainer >();
}


DataWriterQosProxy::NapiContainer
DataWriterQosProxy::NewInstance(Napi::Env env, CppEntity const& cppInstance)
{
    NapiContainer result = NewInstance(env);
    FromCpp(env, cppInstance, result);

    return result;
}


DataWriterQosProxy::DataWriterQosProxy(Napi::CallbackInfo const& info):
    Napi::ObjectWrap< DataWriterQosProxy >(info)
{
    NapiContainer this_instance = info.This().As< NapiContainer >();
    this_instance.Set(DeadlineField::NAME, DeadlineField::Proxy::NewInstance(info.Env()));
    this_instance.Set(DestinationOrderField::NAME, DestinationOrderField::Proxy::NewInstance(info.Env()));
    this_instance.Set(DurabilityField::NAME, DurabilityField::Proxy::NewInstance(info.Env()));
    this_instance.Set(DurabilityServiceField::NAME, DurabilityServiceField::Proxy::NewInstance(info.Env()));
    this_instance.Set(HistoryField::NAME, HistoryField::Proxy::NewInstance(info.Env()));
    this_instance.Set(LatencyBudgetField::NAME, LatencyBudgetField::Proxy::NewInstance(info.Env()));
    this_instance.Set(LifespanField::NAME, LifespanField::Proxy::NewInstance(info.Env()));
    this_instance.Set(LivelinessField::NAME, LivelinessField::Proxy::NewInstance(info.Env()));
    this_instance.Set(OwnershipField::NAME, OwnershipField::Proxy::NewInstance(info.Env()));
    this_instance.Set(OwnershipStrengthField::NAME, OwnershipStrengthField::Proxy::NewInstance(info.Env()));
    this_instance.Set(ReliabilityField::NAME, ReliabilityField::Proxy::NewInstance(info.Env()));
    this_instance.Set(ResourceLimitsField::NAME, ResourceLimitsField::Proxy::NewInstance(info.Env()));
    this_instance.Set(TransportPriorityField::NAME, TransportPriorityField::Proxy::NewInstance(info.Env()));
    this_instance.Set(UserDataField::NAME, UserDataField::Proxy::NewInstance(info.Env()));
    this_instance.Set(WriterDataLifecycleField::NAME, WriterDataLifecycleField::Proxy::NewInstance(info.Env()));
}

} // end namespace DdsJs

// vim: set ts=4 sw=4 expandtab:
