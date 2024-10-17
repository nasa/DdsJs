/**
 * \file CoreDX/CoreDX.hh
 * \brief Contains the include statement amalgam required to import CoreDX DDS.
 * \author Rolando J. Nieves
 * \date 2024-03-06 12:41:40
 */

#ifndef _DDSJS_DDSJS_PROVIDERS_COREDX_COREDX_HH_
#define _DDSJS_DDSJS_PROVIDERS_COREDX_COREDX_HH_

// --------------------------------------------------------------------------
// CoreDX API Headers
#include <dds/dds.hh>
#include <dds/dds_builtin.hh>
#include <dds/dds_typesupport.hh>

// --------------------------------------------------------------------------
// DdsJs CoreDX-Specific
#include <DdsJs/Providers/CoreDX/Arrays.hh>
#include <DdsJs/Providers/CoreDX/BuiltinTopicKey.hh>
#include <DdsJs/Providers/CoreDX/DataReaderQos.hh>
#include <DdsJs/Providers/CoreDX/DataReaderWrap.hh>
#include <DdsJs/Providers/CoreDX/DataWriterQos.hh>
#include <DdsJs/Providers/CoreDX/DataWriterWrap.hh>
#include <DdsJs/Providers/CoreDX/DdsModule.hh>
#include <DdsJs/Providers/CoreDX/DeadlineQosPolicy.hh>
#include <DdsJs/Providers/CoreDX/DestinationOrderQosPolicy.hh>
#include <DdsJs/Providers/CoreDX/DestinationOrderQosPolicyKind.hh>
#include <DdsJs/Providers/CoreDX/DomainParticipantFactoryQos.hh>
#include <DdsJs/Providers/CoreDX/DomainParticipantQos.hh>
#include <DdsJs/Providers/CoreDX/DomainParticipantWrap.hh>
#include <DdsJs/Providers/CoreDX/DurabilityQosPolicy.hh>
#include <DdsJs/Providers/CoreDX/DurabilityQosPolicyKind.hh>
#include <DdsJs/Providers/CoreDX/DurabilityServiceQosPolicy.hh>
#include <DdsJs/Providers/CoreDX/Duration.hh>
#include <DdsJs/Providers/CoreDX/EntityFactoryQosPolicy.hh>
#include <DdsJs/Providers/CoreDX/GroupDataQosPolicy.hh>
#include <DdsJs/Providers/CoreDX/HistoryQosPolicy.hh>
#include <DdsJs/Providers/CoreDX/HistoryQosPolicyKind.hh>
#include <DdsJs/Providers/CoreDX/InstanceHandle.hh>
#include <DdsJs/Providers/CoreDX/InstanceStateKind.hh>
#include <DdsJs/Providers/CoreDX/LatencyBudgetQosPolicy.hh>
#include <DdsJs/Providers/CoreDX/LifespanQosPolicy.hh>
#include <DdsJs/Providers/CoreDX/LivelinessChangedStatus.hh>
#include <DdsJs/Providers/CoreDX/LivelinessQosPolicy.hh>
#include <DdsJs/Providers/CoreDX/LivelinessQosPolicyKind.hh>
#include <DdsJs/Providers/CoreDX/OwnershipQosPolicy.hh>
#include <DdsJs/Providers/CoreDX/OwnershipQosPolicyKind.hh>
#include <DdsJs/Providers/CoreDX/OwnershipStrengthQosPolicy.hh>
#include <DdsJs/Providers/CoreDX/PartitionQosPolicy.hh>
#include <DdsJs/Providers/CoreDX/PresentationQosPolicy.hh>
#include <DdsJs/Providers/CoreDX/PresentationQosPolicyAccessScopeKind.hh>
#include <DdsJs/Providers/CoreDX/Primitives.hh>
#include <DdsJs/Providers/CoreDX/PublicationBuiltinTopicData.hh>
#include <DdsJs/Providers/CoreDX/PublisherQos.hh>
#include <DdsJs/Providers/CoreDX/PublisherWrap.hh>
#include <DdsJs/Providers/CoreDX/QosPolicyCount.hh>
#include <DdsJs/Providers/CoreDX/QosPolicyId.hh>
#include <DdsJs/Providers/CoreDX/ReaderDataLifecycleQosPolicy.hh>
#include <DdsJs/Providers/CoreDX/ReliabilityQosPolicy.hh>
#include <DdsJs/Providers/CoreDX/ReliabilityQosPolicyKind.hh>
#include <DdsJs/Providers/CoreDX/RequestedIncompatibleQosStatus.hh>
#include <DdsJs/Providers/CoreDX/ResourceLimitsQosPolicy.hh>
#include <DdsJs/Providers/CoreDX/SampleInfo.hh>
#include <DdsJs/Providers/CoreDX/SampleLostStatus.hh>
#include <DdsJs/Providers/CoreDX/SampleRejectedStatus.hh>
#include <DdsJs/Providers/CoreDX/SampleRejectedStatusKind.hh>
#include <DdsJs/Providers/CoreDX/SampleStateKind.hh>
#include <DdsJs/Providers/CoreDX/StatusMask.hh>
#include <DdsJs/Providers/CoreDX/SubscriberQos.hh>
#include <DdsJs/Providers/CoreDX/SubscriberWrap.hh>
#include <DdsJs/Providers/CoreDX/SubscriptionBuiltinTopicData.hh>
#include <DdsJs/Providers/CoreDX/SubscriptionMatchedStatus.hh>
#include <DdsJs/Providers/CoreDX/Time.hh>
#include <DdsJs/Providers/CoreDX/TimeBasedFilterQosPolicy.hh>
#include <DdsJs/Providers/CoreDX/TopicDataQosPolicy.hh>
#include <DdsJs/Providers/CoreDX/TopicQos.hh>
#include <DdsJs/Providers/CoreDX/TopicWrap.hh>
#include <DdsJs/Providers/CoreDX/TransportPriorityQosPolicy.hh>
#include <DdsJs/Providers/CoreDX/TypeSupportWrap.hh>
#include <DdsJs/Providers/CoreDX/UserDataQosPolicy.hh>
#include <DdsJs/Providers/CoreDX/ViewStateKind.hh>
#include <DdsJs/Providers/CoreDX/WriterDataLifecycleQosPolicy.hh>
#include <DdsJs/Providers/CoreDX/dds_error_util.hh>

#endif /* !_DDSJS_DDSJS_PROVIDERS_COREDX_COREDX_HH_ */

// vim: set ts=4 sw=4 expandtab:
