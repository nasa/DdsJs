/**
 * \file CoreDX/SubscriptionBuiltinTopicData.cpp
 * \brief Contains the implementation for the \c SubscriptionBuiltinTopicDataProxy class.
 * \author Rolando J. Nieves
 * \date 2024-03-15 12:16:33
 */

// --------------------------------------------------------------------------
// Local Definition
#include "SubscriptionBuiltinTopicData.hh"


namespace DdsJs
{

const char *SubscriptionBuiltinTopicDataProxy::KeyField::NAME = "key";
const char *SubscriptionBuiltinTopicDataProxy::ParticipantKeyField::NAME = "participant_key";
const char *SubscriptionBuiltinTopicDataProxy::TopicNameField::NAME = "topic_name";
const char *SubscriptionBuiltinTopicDataProxy::TypeNameField::NAME = "type_name";
const char *SubscriptionBuiltinTopicDataProxy::DurabilityField::NAME = "durability";
const char *SubscriptionBuiltinTopicDataProxy::DeadlineField::NAME = "deadline";
const char *SubscriptionBuiltinTopicDataProxy::LatencyBudgetField::NAME = "latency_budget";
const char *SubscriptionBuiltinTopicDataProxy::LivelinessField::NAME = "liveliness";
const char *SubscriptionBuiltinTopicDataProxy::ReliabilityField::NAME = "reliability";
const char *SubscriptionBuiltinTopicDataProxy::OwnershipField::NAME = "ownership";
const char *SubscriptionBuiltinTopicDataProxy::DestinationOrderField::NAME = "destination_order";
const char *SubscriptionBuiltinTopicDataProxy::UserDataField::NAME = "user_data";
const char *SubscriptionBuiltinTopicDataProxy::TimeBasedFilterField::NAME = "time_based_filter";
const char *SubscriptionBuiltinTopicDataProxy::PresentationField::NAME = "presentation";
const char *SubscriptionBuiltinTopicDataProxy::PartitionField::NAME = "partition";
const char *SubscriptionBuiltinTopicDataProxy::TopicDataField::NAME = "topic_data";
const char *SubscriptionBuiltinTopicDataProxy::GroupDataField::NAME = "group_data";

const char *SubscriptionBuiltinTopicDataProxy::MODNAME = "DDS";
const char *SubscriptionBuiltinTopicDataProxy::NAME = "SubscriptionBuiltinTopicData";


void
SubscriptionBuiltinTopicDataProxy::FromCpp(Napi::Env env, CppEntity const& cppVal, NapiContainer& jsValOut)
{
    jsValOut.Set(KeyField::NAME, KeyField::Proxy::NewInstance(env, cppVal.key));
    jsValOut.Set(ParticipantKeyField::NAME, ParticipantKeyField::Proxy::NewInstance(env, cppVal.participant_key));
    jsValOut.Set(TopicNameField::NAME, TopicNameField::Proxy::NewInstance(env, cppVal.topic_name));
    jsValOut.Set(TypeNameField::NAME, TypeNameField::Proxy::NewInstance(env, cppVal.type_name));
    jsValOut.Set(DurabilityField::NAME, DurabilityField::Proxy::NewInstance(env, cppVal.durability));
    jsValOut.Set(DeadlineField::NAME, DeadlineField::Proxy::NewInstance(env, cppVal.deadline));
    jsValOut.Set(LatencyBudgetField::NAME, LatencyBudgetField::Proxy::NewInstance(env, cppVal.latency_budget));
    jsValOut.Set(LivelinessField::NAME, LivelinessField::Proxy::NewInstance(env, cppVal.liveliness));
    jsValOut.Set(ReliabilityField::NAME, ReliabilityField::Proxy::NewInstance(env, cppVal.reliability));
    jsValOut.Set(OwnershipField::NAME, OwnershipField::Proxy::NewInstance(env, cppVal.ownership));
    jsValOut.Set(DestinationOrderField::NAME, DestinationOrderField::Proxy::NewInstance(env, cppVal.destination_order));
    jsValOut.Set(UserDataField::NAME, UserDataField::Proxy::NewInstance(env, cppVal.user_data));
    jsValOut.Set(TimeBasedFilterField::NAME, TimeBasedFilterField::Proxy::NewInstance(env, cppVal.time_based_filter));
    jsValOut.Set(PresentationField::NAME, PresentationField::Proxy::NewInstance(env, cppVal.presentation));
    jsValOut.Set(PartitionField::NAME, PartitionField::Proxy::NewInstance(env, cppVal.partition));
    jsValOut.Set(TopicDataField::NAME, TopicDataField::Proxy::NewInstance(env, cppVal.topic_data));
    jsValOut.Set(GroupDataField::NAME, GroupDataField::Proxy::NewInstance(env, cppVal.group_data));
}


void
SubscriptionBuiltinTopicDataProxy::FromJs(Napi::Env env, NapiContainer const& jsVal, CppEntity& cppValOut)
{
    KeyField::Proxy::FromJs(env, jsVal.Get(KeyField::NAME).As< KeyField::Proxy::NapiContainer >(), cppValOut.key);
    ParticipantKeyField::Proxy::FromJs(env, jsVal.Get(ParticipantKeyField::NAME).As< ParticipantKeyField::Proxy::NapiContainer >(), cppValOut.participant_key);
    TopicNameField::Proxy::FromJs(env, jsVal.Get(TopicNameField::NAME).As< TopicNameField::Proxy::NapiContainer >(), cppValOut.topic_name);
    TypeNameField::Proxy::FromJs(env, jsVal.Get(TypeNameField::NAME).As< TypeNameField::Proxy::NapiContainer >(), cppValOut.type_name);
    DurabilityField::Proxy::FromJs(env, jsVal.Get(DurabilityField::NAME).As< DurabilityField::Proxy::NapiContainer >(), cppValOut.durability);
    DeadlineField::Proxy::FromJs(env, jsVal.Get(DeadlineField::NAME).As< DeadlineField::Proxy::NapiContainer >(), cppValOut.deadline);
    LatencyBudgetField::Proxy::FromJs(env, jsVal.Get(LatencyBudgetField::NAME).As< LatencyBudgetField::Proxy::NapiContainer >(), cppValOut.latency_budget);
    LivelinessField::Proxy::FromJs(env, jsVal.Get(LivelinessField::NAME).As< LivelinessField::Proxy::NapiContainer >(), cppValOut.liveliness);
    ReliabilityField::Proxy::FromJs(env, jsVal.Get(ReliabilityField::NAME).As< ReliabilityField::Proxy::NapiContainer >(), cppValOut.reliability);
    OwnershipField::Proxy::FromJs(env, jsVal.Get(OwnershipField::NAME).As< OwnershipField::Proxy::NapiContainer >(), cppValOut.ownership);
    DestinationOrderField::Proxy::FromJs(env, jsVal.Get(DestinationOrderField::NAME).As< DestinationOrderField::Proxy::NapiContainer >(), cppValOut.destination_order);
    UserDataField::Proxy::FromJs(env, jsVal.Get(UserDataField::NAME).As< UserDataField::Proxy::NapiContainer >(), cppValOut.user_data);
    TimeBasedFilterField::Proxy::FromJs(env, jsVal.Get(TimeBasedFilterField::NAME).As< TimeBasedFilterField::Proxy::NapiContainer >(), cppValOut.time_based_filter);
    PresentationField::Proxy::FromJs(env, jsVal.Get(PresentationField::NAME).As< PresentationField::Proxy::NapiContainer >(), cppValOut.presentation);
    PartitionField::Proxy::FromJs(env, jsVal.Get(PartitionField::NAME).As< PartitionField::Proxy::NapiContainer >(), cppValOut.partition);
    TopicDataField::Proxy::FromJs(env, jsVal.Get(TopicDataField::NAME).As< TopicDataField::Proxy::NapiContainer >(), cppValOut.topic_data);
    GroupDataField::Proxy::FromJs(env, jsVal.Get(GroupDataField::NAME).As< GroupDataField::Proxy::NapiContainer >(), cppValOut.group_data);
}


Napi::Object
SubscriptionBuiltinTopicDataProxy::Init(Napi::Env env, Napi::Object exports, ConstructorRegistry *ctorReg)
{
    Napi::Function ctor_func = DefineClass(
        env,
        SubscriptionBuiltinTopicDataProxy::NAME,
        {}
    );

    Napi::FunctionReference *ctor_ref = new Napi::FunctionReference();
    *ctor_ref = Napi::Persistent(ctor_func);
    ctorReg->setConstructorFor(DottedName({ MODNAME, NAME }), ctor_ref);

    exports.Set(SubscriptionBuiltinTopicDataProxy::NAME, ctor_func);

    return exports;
}


SubscriptionBuiltinTopicDataProxy::NapiContainer
SubscriptionBuiltinTopicDataProxy::NewInstance(Napi::Env env)
{
    Napi::EscapableHandleScope scope(env);
    Napi::FunctionReference *ctor_ref = env.GetInstanceData< ConstructorRegistry >()->getConstructorFor(DottedName({ MODNAME, NAME }));
    if (nullptr == ctor_ref)
    {
        throw Napi::Error::New(env, "Internal error: Constructor for SubscriptionBuiltinTopicData not available.");
    }

    return scope.Escape((napi_value)ctor_ref->New({})).As< NapiContainer >();
}


SubscriptionBuiltinTopicDataProxy::NapiContainer
SubscriptionBuiltinTopicDataProxy::NewInstance(Napi::Env env, CppEntity const& cppInstance)
{
    NapiContainer result = NewInstance(env);
    FromCpp(env, cppInstance, result);

    return result;
}


SubscriptionBuiltinTopicDataProxy::SubscriptionBuiltinTopicDataProxy(Napi::CallbackInfo const& info):
    Napi::ObjectWrap< SubscriptionBuiltinTopicDataProxy >(info)
{
    NapiContainer this_instance = info.This().As< NapiContainer >();
    CppEntity blank_value;
    FromCpp(info.Env(), blank_value, this_instance);
}

} // end namespace DdsJs

// vim: set ts=4 sw=4 expandtab:
