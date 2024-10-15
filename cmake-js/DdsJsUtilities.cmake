function(add_ddsjs_sources)
    set (_OPTION_ARGS "")
    set (_ONE_VAL_ARGS TARGET DDSJS_ROOT DDS_PROVIDER)
    set (_MULTI_VAL_ARGS "")
    cmake_parse_arguments(ADS "${_OPTION_ARGS}" "${_ONE_VAL_ARGS}" "${_MULTI_VAL_ARGS}" ${ARGN})
    file (GLOB GENERIC_SOURCES LIST_DIRECTORIES FALSE CONFIGURE_DEPENDS "${ADS_DDSJS_ROOT}/DdsJs/*.cpp")
    file (GLOB PROVIDER_SOURCES LIST_DIRECTORIES FALSE CONFIGURE_DEPENDS "${ADS_DDSJS_ROOT}/DdsJs/Providers/${ADS_DDS_PROVIDER}/*.cpp")
    target_sources(${ADS_TARGET} PUBLIC ${GENERIC_SOURCES} ${PROVIDER_SOURCES})
    # target_sources(
    #     ${ADS_TARGET}
    #     PUBLIC
    #         "${ADS_DDSJS_ROOT}/DdsJs/${ADS_DDS_PROVIDER}/BuiltinTopicKey.cpp"
    #         "${ADS_DDSJS_ROOT}/DdsJs/ConstructorRegistry.cpp"
    #         "${ADS_DDSJS_ROOT}/DdsJs/${ADS_DDS_PROVIDER}/DataReaderQos.cpp"
    #         "${ADS_DDSJS_ROOT}/DdsJs/${ADS_DDS_PROVIDER}/DataReaderWrap.cpp"
    #         "${ADS_DDSJS_ROOT}/DdsJs/${ADS_DDS_PROVIDER}/DataWriterQos.cpp"
    #         "${ADS_DDSJS_ROOT}/DdsJs/${ADS_DDS_PROVIDER}/DataWriterWrap.cpp"
    #         "${ADS_DDSJS_ROOT}/DdsJs/${ADS_DDS_PROVIDER}/DdsModule.cpp"
    #         "${ADS_DDSJS_ROOT}/DdsJs/${ADS_DDS_PROVIDER}/DeadlineQosPolicy.cpp"
    #         "${ADS_DDSJS_ROOT}/DdsJs/${ADS_DDS_PROVIDER}/DestinationOrderQosPolicy.cpp"
    #         "${ADS_DDSJS_ROOT}/DdsJs/${ADS_DDS_PROVIDER}/DestinationOrderQosPolicyKind.cpp"
    #         "${ADS_DDSJS_ROOT}/DdsJs/${ADS_DDS_PROVIDER}/DomainParticipantFactoryQos.cpp"
    #         "${ADS_DDSJS_ROOT}/DdsJs/${ADS_DDS_PROVIDER}/DomainParticipantQos.cpp"
    #         "${ADS_DDSJS_ROOT}/DdsJs/${ADS_DDS_PROVIDER}/DomainParticipantWrap.cpp"
    #         "${ADS_DDSJS_ROOT}/DdsJs/DottedName.cpp"
    #         "${ADS_DDSJS_ROOT}/DdsJs/${ADS_DDS_PROVIDER}/DurabilityQosPolicy.cpp"
    #         "${ADS_DDSJS_ROOT}/DdsJs/${ADS_DDS_PROVIDER}/DurabilityQosPolicyKind.cpp"
    #         "${ADS_DDSJS_ROOT}/DdsJs/${ADS_DDS_PROVIDER}/DurabilityServiceQosPolicy.cpp"
    #         "${ADS_DDSJS_ROOT}/DdsJs/${ADS_DDS_PROVIDER}/Duration.cpp"
    #         "${ADS_DDSJS_ROOT}/DdsJs/${ADS_DDS_PROVIDER}/EntityFactoryQosPolicy.cpp"
    #         "${ADS_DDSJS_ROOT}/DdsJs/${ADS_DDS_PROVIDER}/GroupDataQosPolicy.cpp"
    #         "${ADS_DDSJS_ROOT}/DdsJs/${ADS_DDS_PROVIDER}/HistoryQosPolicy.cpp"
    #         "${ADS_DDSJS_ROOT}/DdsJs/${ADS_DDS_PROVIDER}/HistoryQosPolicyKind.cpp"
    #         "${ADS_DDSJS_ROOT}/DdsJs/${ADS_DDS_PROVIDER}/JsWrapperInstanceRef.cpp"
    #         "${ADS_DDSJS_ROOT}/DdsJs/${ADS_DDS_PROVIDER}/LatencyBudgetQosPolicy.cpp"
    #         "${ADS_DDSJS_ROOT}/DdsJs/${ADS_DDS_PROVIDER}/LifespanQosPolicy.cpp"
    #         "${ADS_DDSJS_ROOT}/DdsJs/${ADS_DDS_PROVIDER}/LivelinessChangedStatus.cpp"
    #         "${ADS_DDSJS_ROOT}/DdsJs/${ADS_DDS_PROVIDER}/LivelinessQosPolicy.cpp"
    #         "${ADS_DDSJS_ROOT}/DdsJs/${ADS_DDS_PROVIDER}/LivelinessQosPolicyKind.cpp"
    #         "${ADS_DDSJS_ROOT}/DdsJs/${ADS_DDS_PROVIDER}/OwnershipQosPolicy.cpp"
    #         "${ADS_DDSJS_ROOT}/DdsJs/${ADS_DDS_PROVIDER}/OwnershipQosPolicyKind.cpp"
    #         "${ADS_DDSJS_ROOT}/DdsJs/${ADS_DDS_PROVIDER}/OwnershipStrengthQosPolicy.cpp"
    #         "${ADS_DDSJS_ROOT}/DdsJs/${ADS_DDS_PROVIDER}/ParticipantBuiltinTopicData.cpp"
    #         "${ADS_DDSJS_ROOT}/DdsJs/${ADS_DDS_PROVIDER}/PartitionQosPolicy.cpp"
    #         "${ADS_DDSJS_ROOT}/DdsJs/${ADS_DDS_PROVIDER}/PresentationQosPolicy.cpp"
    #         "${ADS_DDSJS_ROOT}/DdsJs/${ADS_DDS_PROVIDER}/PresentationQosPolicyAccessScopeKind.cpp"
    #         "${ADS_DDSJS_ROOT}/DdsJs/${ADS_DDS_PROVIDER}/Primitives.cpp"
    #         "${ADS_DDSJS_ROOT}/DdsJs/${ADS_DDS_PROVIDER}/PublicationBuiltinTopicData.cpp"
    #         "${ADS_DDSJS_ROOT}/DdsJs/${ADS_DDS_PROVIDER}/PublisherQos.cpp"
    #         "${ADS_DDSJS_ROOT}/DdsJs/${ADS_DDS_PROVIDER}/PublisherWrap.cpp"
    #         "${ADS_DDSJS_ROOT}/DdsJs/${ADS_DDS_PROVIDER}/QosPolicyCount.cpp"
    #         "${ADS_DDSJS_ROOT}/DdsJs/${ADS_DDS_PROVIDER}/ReaderDataLifecycleQosPolicy.cpp"
    #         "${ADS_DDSJS_ROOT}/DdsJs/${ADS_DDS_PROVIDER}/ReliabilityQosPolicy.cpp"
    #         "${ADS_DDSJS_ROOT}/DdsJs/${ADS_DDS_PROVIDER}/ReliabilityQosPolicyKind.cpp"
    #         "${ADS_DDSJS_ROOT}/DdsJs/${ADS_DDS_PROVIDER}/RequestedIncompatibleQosStatus.cpp"
    #         "${ADS_DDSJS_ROOT}/DdsJs/${ADS_DDS_PROVIDER}/ResourceLimitsQosPolicy.cpp"
    #         "${ADS_DDSJS_ROOT}/DdsJs/${ADS_DDS_PROVIDER}/SampleInfo.cpp"
    #         "${ADS_DDSJS_ROOT}/DdsJs/${ADS_DDS_PROVIDER}/SampleLostStatus.cpp"
    #         "${ADS_DDSJS_ROOT}/DdsJs/${ADS_DDS_PROVIDER}/SampleRejectedStatus.cpp"
    #         "${ADS_DDSJS_ROOT}/DdsJs/${ADS_DDS_PROVIDER}/SampleRejectedStatusKind.cpp"
    #         "${ADS_DDSJS_ROOT}/DdsJs/${ADS_DDS_PROVIDER}/Strings.cpp"
    #         "${ADS_DDSJS_ROOT}/DdsJs/${ADS_DDS_PROVIDER}/SubscriberQos.cpp"
    #         "${ADS_DDSJS_ROOT}/DdsJs/${ADS_DDS_PROVIDER}/SubscriberWrap.cpp"
    #         "${ADS_DDSJS_ROOT}/DdsJs/${ADS_DDS_PROVIDER}/SubscriptionBuiltinTopicData.cpp"
    #         "${ADS_DDSJS_ROOT}/DdsJs/${ADS_DDS_PROVIDER}/SubscriptionMatchedStatus.cpp"
    #         "${ADS_DDSJS_ROOT}/DdsJs/${ADS_DDS_PROVIDER}/Time.cpp"
    #         "${ADS_DDSJS_ROOT}/DdsJs/${ADS_DDS_PROVIDER}/TimeBasedFilterQosPolicy.cpp"
    #         "${ADS_DDSJS_ROOT}/DdsJs/${ADS_DDS_PROVIDER}/TopicDataQosPolicy.cpp"
    #         "${ADS_DDSJS_ROOT}/DdsJs/${ADS_DDS_PROVIDER}/TopicQos.cpp"
    #         "${ADS_DDSJS_ROOT}/DdsJs/${ADS_DDS_PROVIDER}/TopicWrap.cpp"
    #         "${ADS_DDSJS_ROOT}/DdsJs/${ADS_DDS_PROVIDER}/TransportPriorityQosPolicy.cpp"
    #         "${ADS_DDSJS_ROOT}/DdsJs/${ADS_DDS_PROVIDER}/UserDataQosPolicy.cpp"
    #         "${ADS_DDSJS_ROOT}/DdsJs/${ADS_DDS_PROVIDER}/WriterDataLifecycleQosPolicy.cpp"
    #         "${ADS_DDSJS_ROOT}/DdsJs/${ADS_DDS_PROVIDER}/dds_error_util.cpp"
    # )
endfunction(add_ddsjs_sources TARGET)

# vim: set ts=4 sw=4 expandtab:
