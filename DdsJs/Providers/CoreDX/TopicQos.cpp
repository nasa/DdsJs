/**
 * \file CoreDX/TopicQos.cpp
 * \brief Contains the implementation for the \c TopicQosProxy class.
 * \author Rolando J. Nieves <rolando.j.nieves@nasa.gov>
 * \date 2024-02-02 10:38:31
 */

// --------------------------------------------------------------------------
// Local Definition
#include "TopicQos.hh"


namespace DdsJs
{

const char *TopicQosProxy::DeadlineField::NAME = "deadline";

const char *TopicQosProxy::DestinationOrderField::NAME = "destination_order";

const char *TopicQosProxy::DurabilityField::NAME = "durability";

const char *TopicQosProxy::DurabilityServiceField::NAME = "durability_service";

const char *TopicQosProxy::HistoryField::NAME = "history";

const char *TopicQosProxy::LatencyBudgetField::NAME = "latency_budget";

const char *TopicQosProxy::LifespanField::NAME = "lifespan";

const char *TopicQosProxy::LivelinessField::NAME = "liveliness";

const char *TopicQosProxy::OwnershipField::NAME = "ownership";

const char *TopicQosProxy::ReliabilityField::NAME = "reliability";

const char *TopicQosProxy::ResourceLimitsField::NAME = "resource_limits";

const char *TopicQosProxy::TopicDataField::NAME = "topic_data";

const char *TopicQosProxy::TransportPriorityField::NAME = "transport_priority";

const char *TopicQosProxy::MODNAME = "DDS";

const char *TopicQosProxy::NAME = "TopicQos";


void
TopicQosProxy::FromCpp(Napi::Env env, CppEntity const& cppVal, NapiContainer& jsValOut)
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
    jsValOut.Set(ReliabilityField::NAME, ReliabilityField::Proxy::NewInstance(env, cppVal.reliability));
    jsValOut.Set(ResourceLimitsField::NAME, ResourceLimitsField::Proxy::NewInstance(env, cppVal.resource_limits));
    jsValOut.Set(TopicDataField::NAME, TopicDataField::Proxy::NewInstance(env, cppVal.topic_data));
    jsValOut.Set(TransportPriorityField::NAME, TransportPriorityField::Proxy::NewInstance(env, cppVal.transport_priority));
}


void
TopicQosProxy::FromJs(Napi::Env env, NapiContainer const& jsVal, CppEntity& cppValOut)
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
    ReliabilityField::Proxy::FromJs(env, jsVal.Get(ReliabilityField::NAME).As< ReliabilityField::Proxy::NapiContainer >(), cppValOut.reliability);
    ResourceLimitsField::Proxy::FromJs(env, jsVal.Get(ResourceLimitsField::NAME).As< ResourceLimitsField::Proxy::NapiContainer >(), cppValOut.resource_limits);
    TopicDataField::Proxy::FromJs(env, jsVal.Get(TopicDataField::NAME).As< TopicDataField::Proxy::NapiContainer >(), cppValOut.topic_data);
    TransportPriorityField::Proxy::FromJs(env, jsVal.Get(TransportPriorityField::NAME).As< TransportPriorityField::Proxy::NapiContainer >(), cppValOut.transport_priority);
}


Napi::Object
TopicQosProxy::Init(Napi::Env env, Napi::Object exports, ConstructorRegistry *ctorReg)
{
    Napi::Function ctor_func = DefineClass(
        env,
        TopicQosProxy::NAME,
        {}
    );

    Napi::FunctionReference *ctor_ref = new Napi::FunctionReference();
    *ctor_ref = Napi::Persistent(ctor_func);
    ctorReg->setConstructorFor(DottedName({ TopicQosProxy::MODNAME, TopicQosProxy::NAME }), ctor_ref);

    exports.Set(TopicQosProxy::NAME, ctor_func);

    return exports;
}


TopicQosProxy::NapiContainer
TopicQosProxy::NewInstance(Napi::Env env)
{
    Napi::EscapableHandleScope scope(env);
    Napi::FunctionReference *ctor_ref = env.GetInstanceData< ConstructorRegistry >()->getConstructorFor(DottedName({ TopicQosProxy::MODNAME, TopicQosProxy::NAME }));
    if (nullptr == ctor_ref)
    {
        throw Napi::Error::New(env, "Internal error: Constructor for TopicQos not available.");
    }

    return scope.Escape((napi_value)ctor_ref->New({})).As< NapiContainer >();
}


TopicQosProxy::NapiContainer
TopicQosProxy::NewInstance(Napi::Env env, CppEntity const& cppInstance)
{
    NapiContainer result = NewInstance(env);
    FromCpp(env, cppInstance, result);

    return result;
}


TopicQosProxy::TopicQosProxy(Napi::CallbackInfo const& info):
    Napi::ObjectWrap< TopicQosProxy >(info)
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
    this_instance.Set(ReliabilityField::NAME, ReliabilityField::Proxy::NewInstance(info.Env()));
    this_instance.Set(ResourceLimitsField::NAME, ResourceLimitsField::Proxy::NewInstance(info.Env()));
    this_instance.Set(TopicDataField::NAME, TopicDataField::Proxy::NewInstance(info.Env()));
    this_instance.Set(TransportPriorityField::NAME, TransportPriorityField::Proxy::NewInstance(info.Env()));
}

} // end namespace DdsJs

// vim: set ts=4 sw=4 expandtab:
