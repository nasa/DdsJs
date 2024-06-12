function(add_ddsjs_sources TARGET DDSJS_ROOT)
    target_sources(
        ${TARGET}
        PUBLIC
            "${DDSJS_ROOT}/DdsJs/BuiltinTopicKey.cpp"
            "${DDSJS_ROOT}/DdsJs/ConstructorRegistry.cpp"
            "${DDSJS_ROOT}/DdsJs/DataReaderQos.cpp"
            "${DDSJS_ROOT}/DdsJs/DataReaderWrap.cpp"
            "${DDSJS_ROOT}/DdsJs/DataWriterQos.cpp"
            "${DDSJS_ROOT}/DdsJs/DataWriterWrap.cpp"
            "${DDSJS_ROOT}/DdsJs/DdsModule.cpp"
            "${DDSJS_ROOT}/DdsJs/DeadlineQosPolicy.cpp"
            "${DDSJS_ROOT}/DdsJs/DestinationOrderQosPolicy.cpp"
            "${DDSJS_ROOT}/DdsJs/DestinationOrderQosPolicyKind.cpp"
            "${DDSJS_ROOT}/DdsJs/DomainParticipantFactoryQos.cpp"
            "${DDSJS_ROOT}/DdsJs/DomainParticipantQos.cpp"
            "${DDSJS_ROOT}/DdsJs/DomainParticipantWrap.cpp"
            "${DDSJS_ROOT}/DdsJs/DottedName.cpp"
            "${DDSJS_ROOT}/DdsJs/DurabilityQosPolicy.cpp"
            "${DDSJS_ROOT}/DdsJs/DurabilityQosPolicyKind.cpp"
            "${DDSJS_ROOT}/DdsJs/DurabilityServiceQosPolicy.cpp"
            "${DDSJS_ROOT}/DdsJs/Duration.cpp"
            "${DDSJS_ROOT}/DdsJs/EntityFactoryQosPolicy.cpp"
            "${DDSJS_ROOT}/DdsJs/GroupDataQosPolicy.cpp"
            "${DDSJS_ROOT}/DdsJs/HistoryQosPolicy.cpp"
            "${DDSJS_ROOT}/DdsJs/HistoryQosPolicyKind.cpp"
            "${DDSJS_ROOT}/DdsJs/JsWrapperInstanceRef.cpp"
            "${DDSJS_ROOT}/DdsJs/LatencyBudgetQosPolicy.cpp"
            "${DDSJS_ROOT}/DdsJs/LifespanQosPolicy.cpp"
            "${DDSJS_ROOT}/DdsJs/LivelinessChangedStatus.cpp"
            "${DDSJS_ROOT}/DdsJs/LivelinessQosPolicy.cpp"
            "${DDSJS_ROOT}/DdsJs/LivelinessQosPolicyKind.cpp"
            "${DDSJS_ROOT}/DdsJs/OwnershipQosPolicy.cpp"
            "${DDSJS_ROOT}/DdsJs/OwnershipQosPolicyKind.cpp"
            "${DDSJS_ROOT}/DdsJs/OwnershipStrengthQosPolicy.cpp"
            "${DDSJS_ROOT}/DdsJs/ParticipantBuiltinTopicData.cpp"
            "${DDSJS_ROOT}/DdsJs/PartitionQosPolicy.cpp"
            "${DDSJS_ROOT}/DdsJs/PresentationQosPolicy.cpp"
            "${DDSJS_ROOT}/DdsJs/PresentationQosPolicyAccessScopeKind.cpp"
            "${DDSJS_ROOT}/DdsJs/Primitives.cpp"
            "${DDSJS_ROOT}/DdsJs/PublicationBuiltinTopicData.cpp"
            "${DDSJS_ROOT}/DdsJs/PublisherQos.cpp"
            "${DDSJS_ROOT}/DdsJs/PublisherWrap.cpp"
            "${DDSJS_ROOT}/DdsJs/QosPolicyCount.cpp"
            "${DDSJS_ROOT}/DdsJs/ReaderDataLifecycleQosPolicy.cpp"
            "${DDSJS_ROOT}/DdsJs/ReliabilityQosPolicy.cpp"
            "${DDSJS_ROOT}/DdsJs/ReliabilityQosPolicyKind.cpp"
            "${DDSJS_ROOT}/DdsJs/RequestedIncompatibleQosStatus.cpp"
            "${DDSJS_ROOT}/DdsJs/ResourceLimitsQosPolicy.cpp"
            "${DDSJS_ROOT}/DdsJs/SampleInfo.cpp"
            "${DDSJS_ROOT}/DdsJs/SampleLostStatus.cpp"
            "${DDSJS_ROOT}/DdsJs/SampleRejectedStatus.cpp"
            "${DDSJS_ROOT}/DdsJs/SampleRejectedStatusKind.cpp"
            "${DDSJS_ROOT}/DdsJs/Strings.cpp"
            "${DDSJS_ROOT}/DdsJs/SubscriberQos.cpp"
            "${DDSJS_ROOT}/DdsJs/SubscriberWrap.cpp"
            "${DDSJS_ROOT}/DdsJs/SubscriptionBuiltinTopicData.cpp"
            "${DDSJS_ROOT}/DdsJs/SubscriptionMatchedStatus.cpp"
            "${DDSJS_ROOT}/DdsJs/Time.cpp"
            "${DDSJS_ROOT}/DdsJs/TimeBasedFilterQosPolicy.cpp"
            "${DDSJS_ROOT}/DdsJs/TopicDataQosPolicy.cpp"
            "${DDSJS_ROOT}/DdsJs/TopicQos.cpp"
            "${DDSJS_ROOT}/DdsJs/TopicWrap.cpp"
            "${DDSJS_ROOT}/DdsJs/TransportPriorityQosPolicy.cpp"
            "${DDSJS_ROOT}/DdsJs/UserDataQosPolicy.cpp"
            "${DDSJS_ROOT}/DdsJs/WriterDataLifecycleQosPolicy.cpp"
            "${DDSJS_ROOT}/DdsJs/dds_error_util.cpp"
    )
endfunction(add_ddsjs_sources TARGET)

function(prepare_provider_header WITH_DDS DDSJS_ROOT DEST_DIR)
    find_file(PROVIDER_HEADER "${WITH_DDS}.hh" PATHS "${DDSJS_ROOT}/DdsJs/Providers" REQUIRED NO_DEFAULT_PATH)
    get_filename_component(PROVIDER_HEADER_FILE "${PROVIDER_HEADER}" NAME)
    file(MAKE_DIRECTORY "${DEST_DIR}")
    file(COPY "${PROVIDER_HEADER}" DESTINATION "${DEST_DIR}")
    file(RENAME "${DEST_DIR}/${PROVIDER_HEADER_FILE}" "${DEST_DIR}/dds_provider.hh")
endfunction(prepare_provider_header WITH_DDS)

# vim: set ts=4 sw=4 expandtab:
