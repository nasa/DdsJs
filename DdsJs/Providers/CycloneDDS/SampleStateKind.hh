/**
 * \file CycloneDDS/SampleStateKind.hh
 * \brief Contains the definition of the \c DdsJs::SampleStateKindProxy class.
 * \author Rolando J. Nieves
 * \date 2024-10-04 11:24:30
 */

#ifndef _DDSJS_DDSJS_PROVIDERS_CYCLONEDDS_SAMPLESTATEKIND_HH_
#define _DDSJS_DDSJS_PROVIDERS_CYCLONEDDS_SAMPLESTATEKIND_HH_

#include <napi.h>

#include <DdsJs/Providers/CycloneDDS/Primitives.hh>
#include <DdsJs/Providers/CycloneDDS/CycloneDDS.hh>


namespace DdsJs
{

class SampleStateKindProxy : public Primitive< dds_sample_state_t, Napi::Number >
{
public:
    static Napi::Object Init(Napi::Env env, Napi::Object exports);

    static void FromCpp(Napi::Env env, CppEntity const& cppVal, NapiContainer& jsValOut);
    static void FromJs(Napi::Env env, NapiContainer const& jsVal, CppEntity& cppValOut);
    static NapiContainer NewInstance(Napi::Env env);
    static NapiContainer NewInstance(Napi::Env env, CppEntity const& cppVal);
};

}
#endif /* !_DDSJS_DDSJS_PROVIDERS_CYCLONEDDS_SAMPLESTATEKIND_HH_ */

// vim: set ts=4 sw=4 expandtab:
