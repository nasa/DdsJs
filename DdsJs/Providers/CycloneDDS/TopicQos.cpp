/**
 * \file CycloneDDS/TopicQos.cpp
 * \brief Contains the implementation for the \c TopicQosProxy class.
 * \author Rolando J. Nieves <rolando.j.nieves@nasa.gov>
 * \date 2024-10-03 17:28:11
 */

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

    if (dds_qget_durability_service(cppVal, nullptr, nullptr, nullptr, nullptr, nullptr, nullptr))
    {
        jsValOut.Set(DurabilityServiceField::NAME, DurabilityServiceField::Proxy::NewInstance(env, cppVal));
    }

    if (dds_qget_history(cppVal, nullptr, nullptr))
    {
        jsValOut.Set(HistoryField::NAME, HistoryField::Proxy::NewInstance(env, cppVal));
    }

    if (dds_qget_latency_budget(cppVal, nullptr))
    {
        jsValOut.Set(LatencyBudgetField::NAME, LatencyBudgetField::Proxy::NewInstance(env, cppVal));
    }

    if (dds_qget_lifespan(cppVal, nullptr))
    {
        jsValOut.Set(LifespanField::NAME, LifespanField::Proxy::NewInstance(env, cppVal));
    }

    if (dds_qget_liveliness(cppVal, nullptr, nullptr))
    {
        jsValOut.Set(LivelinessField::NAME, LivelinessField::Proxy::NewInstance(env, cppVal));
    }

    if (dds_qget_ownership(cppVal, nullptr))
    {
        jsValOut.Set(OwnershipField::NAME, OwnershipField::Proxy::NewInstance(env, cppVal));
    }

    if (dds_qget_reliability(cppVal, nullptr, nullptr))
    {
        jsValOut.Set(ReliabilityField::NAME, ReliabilityField::Proxy::NewInstance(env, cppVal));
    }

    if (dds_qget_resource_limits(cppVal, nullptr, nullptr, nullptr))
    {
        jsValOut.Set(ResourceLimitsField::NAME, ResourceLimitsField::Proxy::NewInstance(env, cppVal));
    }

    if (dds_qget_topicdata(cppVal, nullptr, nullptr))
    {
        jsValOut.Set(TopicDataField::NAME, TopicDataField::Proxy::NewInstance(env, cppVal));
    }

    if (dds_qget_transport_priority(cppVal, nullptr))
    {
        jsValOut.Set(TransportPriorityField::NAME, TransportPriorityField::Proxy::NewInstance(env, cppVal));
    }
}


void
TopicQosProxy::FromJs(Napi::Env env, NapiContainer const& jsVal, CppEntity& cppValOut)
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

    auto durability_service_field = jsVal.Get(DurabilityServiceField::NAME);
    if (!durability_service_field.IsUndefined())
    {
        DurabilityServiceField::Proxy::FromJs(env, durability_service_field.As< DurabilityServiceField::Proxy::NapiContainer >(), cppValOut);
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

    auto lifespan_field = jsVal.Get(LifespanField::NAME);
    if (!lifespan_field.IsUndefined())
    {
        LifespanField::Proxy::FromJs(env, lifespan_field.As< LifespanField::Proxy::NapiContainer >(), cppValOut);
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

    auto topic_data_field = jsVal.Get(TopicDataField::NAME);
    if (!topic_data_field.IsUndefined())
    {
        TopicDataField::Proxy::FromJs(env, topic_data_field.As< TopicDataField::Proxy::NapiContainer >(), cppValOut);
    }

    auto transport_priority_field = jsVal.Get(TransportPriorityField::NAME);
    if (!transport_priority_field.IsUndefined())
    {
        TransportPriorityField::Proxy::FromJs(env, transport_priority_field.As< TransportPriorityField::Proxy::NapiContainer >(), cppValOut);
    }
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
    this_instance.Set(DeadlineField::NAME, info.Env().Undefined());
    this_instance.Set(DestinationOrderField::NAME, info.Env().Undefined());
    this_instance.Set(DurabilityField::NAME, info.Env().Undefined());
    this_instance.Set(DurabilityServiceField::NAME, info.Env().Undefined());
    this_instance.Set(HistoryField::NAME, info.Env().Undefined());
    this_instance.Set(LatencyBudgetField::NAME, info.Env().Undefined());
    this_instance.Set(LifespanField::NAME, info.Env().Undefined());
    this_instance.Set(LivelinessField::NAME, info.Env().Undefined());
    this_instance.Set(OwnershipField::NAME, info.Env().Undefined());
    this_instance.Set(ReliabilityField::NAME, info.Env().Undefined());
    this_instance.Set(ResourceLimitsField::NAME, info.Env().Undefined());
    this_instance.Set(TopicDataField::NAME, info.Env().Undefined());
    this_instance.Set(TransportPriorityField::NAME, info.Env().Undefined());
}

} // end namespace DdsJs

// vim: set ts=4 sw=4 expandtab:
