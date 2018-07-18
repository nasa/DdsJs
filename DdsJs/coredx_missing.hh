/**
 * \file coredx_missing.hh
 * \brief Contains DDS constructs that are missing from CoreDX DDS.
 * \date 2014-09-24
 * \author Rolando J. Nieves
 */

#ifndef COREDXJS_MISSING_HH_
#define COREDXJS_MISSING_HH_

#include <dds/dds.hh>
#include <dds/dds_builtin.hh>

namespace DDS {
	typedef DDS_SampleRejectedStatusKind SampleRejectedStatusKind;
	extern const SampleRejectedStatusKind NOT_REJECTED;
	extern const SampleRejectedStatusKind REJECTED_BY_INSTANCE_LIMIT;
	extern const SampleRejectedStatusKind REJECTED_BY_SAMPLES_LIMIT;
	extern const SampleRejectedStatusKind REJECTED_BY_SAMPLES_PER_INSTANCE_LIMIT;

	extern const ReturnCode_t RETCODE_ILLEGAL_OPERATION;
	extern const int TIME_INVALID_SEC;
	extern const unsigned int TIME_INVALID_NSEC;

	extern const QosPolicyId_t INVALID_QOS_POLICY_ID;
}


#endif /* COREDXJS_MISSING_HH_ */
