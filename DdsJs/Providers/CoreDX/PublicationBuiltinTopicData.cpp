/**
 * \file CoreDX/PublicationBuiltinTopicData.cpp
 * \brief Contains the implementation for the \c PublicationBuiltinTopicDataProxy class.
 * \author Rolando J. Nieves
 * \date 2024-03-11 15:26:11
 */

// --------------------------------------------------------------------------
// Local Definition
#include "PublicationBuiltinTopicData.hh"


namespace DdsJs
{

const char *PublicationBuiltinTopicDataProxy::KeyField::NAME = "key";
const char *PublicationBuiltinTopicDataProxy::ParticipantKeyField::NAME = "participant_key";
const char *PublicationBuiltinTopicDataProxy::TopicNameField::NAME = "topic_name";
const char *PublicationBuiltinTopicDataProxy::TypeNameField::NAME = "type_name";
const char *PublicationBuiltinTopicDataProxy::DurabilityField::NAME = "durability";
const char *PublicationBuiltinTopicDataProxy::DurabilityServiceField::NAME = "durability_service";
const char *PublicationBuiltinTopicDataProxy::DeadlineField::NAME = "deadline";
const char *PublicationBuiltinTopicDataProxy::LatencyBudgetField::NAME = "latency_budget";
const char *PublicationBuiltinTopicDataProxy::LivelinessField::NAME = "liveliness";
const char *PublicationBuiltinTopicDataProxy::ReliabilityField::NAME = "reliability";
const char *PublicationBuiltinTopicDataProxy::LifespanField::NAME = "lifespan";
const char *PublicationBuiltinTopicDataProxy::UserDataField::NAME = "user_data";
const char *PublicationBuiltinTopicDataProxy::OwnershipField::NAME = "ownership";
const char *PublicationBuiltinTopicDataProxy::OwnershipStrengthField::NAME = "ownership_strength";
const char *PublicationBuiltinTopicDataProxy::DestinationOrderField::NAME = "destination_order";
const char *PublicationBuiltinTopicDataProxy::PresentationField::NAME = "presentation";
const char *PublicationBuiltinTopicDataProxy::PartitionField::NAME = "partition";
const char *PublicationBuiltinTopicDataProxy::TopicDataField::NAME = "topic_data";
const char *PublicationBuiltinTopicDataProxy::GroupDataField::NAME = "group_data";

const char *PublicationBuiltinTopicDataProxy::MODNAME = "DDS";
const char *PublicationBuiltinTopicDataProxy::NAME = "PublicationBuiltinTopicData";


void
PublicationBuiltinTopicDataProxy::FromCpp(Napi::Env env, CppEntity const& cppVal, NapiContainer& jsValOut)
{
    jsValOut.Set(KeyField::NAME, KeyField::Proxy::NewInstance(env, cppVal.key));
    jsValOut.Set(ParticipantKeyField::NAME, ParticipantKeyField::Proxy::NewInstance(env, cppVal.participant_key));
    jsValOut.Set(TopicNameField::NAME, TopicNameField::Proxy::NewInstance(env, cppVal.topic_name));
    jsValOut.Set(TypeNameField::NAME, TypeNameField::Proxy::NewInstance(env, cppVal.type_name));
    jsValOut.Set(DurabilityField::NAME, DurabilityField::Proxy::NewInstance(env, cppVal.durability));
    jsValOut.Set(DurabilityServiceField::NAME, DurabilityServiceField::Proxy::NewInstance(env, cppVal.durability_service));
    jsValOut.Set(DeadlineField::NAME, DeadlineField::Proxy::NewInstance(env, cppVal.deadline));
    jsValOut.Set(LatencyBudgetField::NAME, LatencyBudgetField::Proxy::NewInstance(env, cppVal.latency_budget));
    jsValOut.Set(LivelinessField::NAME, LivelinessField::Proxy::NewInstance(env, cppVal.liveliness));
    jsValOut.Set(ReliabilityField::NAME, ReliabilityField::Proxy::NewInstance(env, cppVal.reliability));
    jsValOut.Set(LifespanField::NAME, LifespanField::Proxy::NewInstance(env, cppVal.lifespan));
    jsValOut.Set(UserDataField::NAME, UserDataField::Proxy::NewInstance(env, cppVal.user_data));
    jsValOut.Set(OwnershipField::NAME, OwnershipField::Proxy::NewInstance(env, cppVal.ownership));
    jsValOut.Set(OwnershipStrengthField::NAME, OwnershipStrengthField::Proxy::NewInstance(env, cppVal.ownership_strength));
    jsValOut.Set(DestinationOrderField::NAME, DestinationOrderField::Proxy::NewInstance(env, cppVal.destination_order));
    jsValOut.Set(PresentationField::NAME, PresentationField::Proxy::NewInstance(env, cppVal.presentation));
    jsValOut.Set(PartitionField::NAME, PartitionField::Proxy::NewInstance(env, cppVal.partition));
    jsValOut.Set(TopicDataField::NAME, TopicDataField::Proxy::NewInstance(env, cppVal.topic_data));
    jsValOut.Set(GroupDataField::NAME, GroupDataField::Proxy::NewInstance(env, cppVal.group_data));
}


void
PublicationBuiltinTopicDataProxy::FromJs(Napi::Env env, NapiContainer const& jsVal, CppEntity& cppValOut)
{
    KeyField::Proxy::FromJs(env, jsVal.Get(KeyField::NAME).As< KeyField::Proxy::NapiContainer >(), cppValOut.key);
    ParticipantKeyField::Proxy::FromJs(env, jsVal.Get(ParticipantKeyField::NAME).As< ParticipantKeyField::Proxy::NapiContainer >(), cppValOut.participant_key);
    TopicNameField::Proxy::FromJs(env, jsVal.Get(TopicNameField::NAME).As< TopicNameField::Proxy::NapiContainer >(), cppValOut.topic_name);
    TypeNameField::Proxy::FromJs(env, jsVal.Get(TypeNameField::NAME).As< TypeNameField::Proxy::NapiContainer >(), cppValOut.type_name);
    DurabilityField::Proxy::FromJs(env, jsVal.Get(DurabilityField::NAME).As< DurabilityField::Proxy::NapiContainer >(), cppValOut.durability);
    DurabilityServiceField::Proxy::FromJs(env, jsVal.Get(DurabilityServiceField::NAME).As< DurabilityServiceField::Proxy::NapiContainer >(), cppValOut.durability_service);
    DeadlineField::Proxy::FromJs(env, jsVal.Get(DeadlineField::NAME).As< DeadlineField::Proxy::NapiContainer >(), cppValOut.deadline);
    LatencyBudgetField::Proxy::FromJs(env, jsVal.Get(LatencyBudgetField::NAME).As< LatencyBudgetField::Proxy::NapiContainer >(), cppValOut.latency_budget);
    LivelinessField::Proxy::FromJs(env, jsVal.Get(LivelinessField::NAME).As< LivelinessField::Proxy::NapiContainer >(), cppValOut.liveliness);
    ReliabilityField::Proxy::FromJs(env, jsVal.Get(ReliabilityField::NAME).As< ReliabilityField::Proxy::NapiContainer >(), cppValOut.reliability);
    LifespanField::Proxy::FromJs(env, jsVal.Get(LifespanField::NAME).As< LifespanField::Proxy::NapiContainer >(), cppValOut.lifespan);
    UserDataField::Proxy::FromJs(env, jsVal.Get(UserDataField::NAME).As< UserDataField::Proxy::NapiContainer >(), cppValOut.user_data);
    OwnershipField::Proxy::FromJs(env, jsVal.Get(OwnershipField::NAME).As< OwnershipField::Proxy::NapiContainer >(), cppValOut.ownership);
    OwnershipStrengthField::Proxy::FromJs(env, jsVal.Get(OwnershipStrengthField::NAME).As< OwnershipStrengthField::Proxy::NapiContainer >(), cppValOut.ownership_strength);
    DestinationOrderField::Proxy::FromJs(env, jsVal.Get(DestinationOrderField::NAME).As< DestinationOrderField::Proxy::NapiContainer >(), cppValOut.destination_order);
    PresentationField::Proxy::FromJs(env, jsVal.Get(PresentationField::NAME).As< PresentationField::Proxy::NapiContainer >(), cppValOut.presentation);
    PartitionField::Proxy::FromJs(env, jsVal.Get(PartitionField::NAME).As< PartitionField::Proxy::NapiContainer >(), cppValOut.partition);
    TopicDataField::Proxy::FromJs(env, jsVal.Get(TopicDataField::NAME).As< TopicDataField::Proxy::NapiContainer >(), cppValOut.topic_data);
    GroupDataField::Proxy::FromJs(env, jsVal.Get(GroupDataField::NAME).As< GroupDataField::Proxy::NapiContainer >(), cppValOut.group_data);
}


Napi::Object
PublicationBuiltinTopicDataProxy::Init(Napi::Env env, Napi::Object exports, ConstructorRegistry *ctorReg)
{
    Napi::Function ctor_func = DefineClass(
        env,
        PublicationBuiltinTopicDataProxy::NAME,
        {}
    );

    Napi::FunctionReference *ctor_ref = new Napi::FunctionReference();
    *ctor_ref = Napi::Persistent(ctor_func);
    ctorReg->setConstructorFor(DottedName({ PublicationBuiltinTopicDataProxy::MODNAME, PublicationBuiltinTopicDataProxy::NAME }), ctor_ref);

    exports.Set(PublicationBuiltinTopicDataProxy::NAME, ctor_func);

    return exports;
}


PublicationBuiltinTopicDataProxy::NapiContainer
PublicationBuiltinTopicDataProxy::NewInstance(Napi::Env env)
{
    Napi::EscapableHandleScope scope(env);
    Napi::FunctionReference *ctor_ref = env.GetInstanceData< ConstructorRegistry >()->getConstructorFor(DottedName({ PublicationBuiltinTopicDataProxy::MODNAME, PublicationBuiltinTopicDataProxy::NAME }));
    if (nullptr == ctor_ref)
    {
        throw Napi::Error::New(env, "Internal error: Constructor for PublicationBuiltinTopicData not available.");
    }

    return scope.Escape((napi_value)ctor_ref->New({})).As< NapiContainer >();
}


PublicationBuiltinTopicDataProxy::NapiContainer
PublicationBuiltinTopicDataProxy::NewInstance(Napi::Env env, CppEntity const& cppInstance)
{
    NapiContainer result = NewInstance(env);
    FromCpp(env, cppInstance, result);

    return result;
}


PublicationBuiltinTopicDataProxy::PublicationBuiltinTopicDataProxy(Napi::CallbackInfo const& info):
    Napi::ObjectWrap< PublicationBuiltinTopicDataProxy >(info)
{
    NapiContainer this_instance = info.This().As< NapiContainer >();
    CppEntity blank_value;
    FromCpp(info.Env(), blank_value, this_instance);
}

} // end namespace DdsJs

// vim: set ts=4 sw=4 expandtab:
