/**
 * \file CycloneDDS/PublisherWrap.cpp
 * \brief Contains the implementation for the \c DdsJs::PublisherWrap class.
 * \author Rolando J. Nieves
 * \date 2024-10-02 17:04:22
 */

// --------------------------------------------------------------------------
// Local Definition
#include "PublisherWrap.hh"


namespace DdsJs
{

const char *PublisherWrap::MODNAME = "DDS";

const char *PublisherWrap::NAME = "Publisher";


Napi::Object
PublisherWrap::Init(Napi::Env env, Napi::Object exports, ConstructorRegistry *ctorReg)
{
    Napi::Function ctor_func = DefineClass(
        env,
        NAME,
        {}
    );

    Napi::FunctionReference *ctor_ref = new Napi::FunctionReference();
    *ctor_ref = Napi::Persistent(ctor_func);
    ctorReg->setConstructorFor(DottedName({ MODNAME, NAME }), ctor_ref);

    exports.Set(NAME, ctor_func);

    return exports;
}


Napi::Object
PublisherWrap::NewInstance(Napi::Env env, dds_entity_t publisher, Napi::Object participantJsObj)
{
    Napi::EscapableHandleScope scope(env);

    Napi::External< dds_entity_t > publisher_ext = Napi::External< dds_entity_t >::New(env, &publisher);
    Napi::FunctionReference *ctor_ref = env.GetInstanceData< ConstructorRegistry >()->getConstructorFor(DottedName({ MODNAME, NAME }));
    if (nullptr == ctor_ref)
    {
        throw Napi::Error::New(env, "TopicWrap::NewInstance(): Internal error: Constructor for Publisher not available.");
    }
    Napi::Object result = ctor_ref->New({ publisher_ext, participantJsObj });

    return scope.Escape((napi_value)result).As< Napi::Object >();
}


PublisherWrap::PublisherWrap(Napi::CallbackInfo const& info):
    Napi::ObjectWrap< PublisherWrap >(info),
    m_participantJsObj(NAME, "Participant"),
    m_publisher(DDS_ENTITY_NIL)
{
    if (info.Length() != 2)
    {
        throw Napi::Error::New(info.Env(), "Publisher constructor provided insufficient arguments.");
    }

    if (!info[0].IsExternal())
    {
        throw Napi::Error::New(info.Env(), "Publisher constructor passed invalid publisher external argument.");
    }

    if (!info[1].IsObject())
    {
        throw Napi::Error::New(info.Env(), "Publisher constructor passed invalid participant JS object argument.");
    }

    m_publisher = *(info[0].As< Napi::External< dds_entity_t > >().Data());
    m_participantJsObj.reset(info[1].As< Napi::Object >());
}

PublisherWrap::~PublisherWrap()
{
    dds_delete(m_publisher);

    m_publisher = DDS_ENTITY_NIL;
}

} // end namespace DdsJs

// vim: set ts=4 sw=4 expandtab:
