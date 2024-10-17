/**
 * \file CycloneDDS/DdsModule.hh
 * \brief Contains the definition of the \c DdsModule class.
 * \author Rolando J. Nieves <rolando.j.nieves@nasa.gov>
 * \date 2024-02-07 10:40:25
 */

#ifndef _DDSJS_DDSJS_PROVIDERS_CYCLONEDDS_DDSMODULE_HH_
#define _DDSJS_DDSJS_PROVIDERS_CYCLONEDDS_DDSMODULE_HH_

// --------------------------------------------------------------------------
// NodeJS Add-on API
#include <napi.h>

// --------------------------------------------------------------------------
// DdsJs Generic
#include <DdsJs/ConstructorRegistry.hh>


namespace DdsJs
{

class DdsModule
{
private:
    static Napi::Value CreateDomainParticipant(Napi::CallbackInfo const& info);

    static Napi::Value GetDefaultParticipantQos(Napi::CallbackInfo const& info);

    static Napi::Value GetDomainParticipantFactoryQos(Napi::CallbackInfo const& info);

    static Napi::Value SetDefaultParticipantQos(Napi::CallbackInfo const& info);

    static Napi::Value SetDomainParticipantFactoryQos(Napi::CallbackInfo const& info);

public:
    static Napi::Object Init(Napi::Env env, Napi::Object exports, ConstructorRegistry *ctorReg);
};

}
#endif /* !_DDSJS_DDSJS_PROVIDERS_CYCLONEDDS_DDSMODULE_HH_ */

// vim: set ts=4 sw=4 expandtab:
