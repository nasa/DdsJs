/**
 * @brief Test subscriber that uses `DataPointFrame` topic type.
 * @date 2025-01-17 16:19:51
 * @author Rolando J. Nieves
 */
const { DDS, HostMonitor } = require(".");


class DpfTestSub {
  constructor(domainId) {
    console.log("Listening on domain", domainId);
    this.participant = DDS.createDomainParticipant(domainId);
    this.dataPointFrameTs = new HostMonitor.DataPointFrameTypeSupport();
    this.dataPointFrameTs.registerType(this.participant);
    this.dataPointFrameTopic = this.participant.createTopic("DataPointFrame", this.dataPointFrameTs.getTypeName());
    this.subscriber = this.participant.createSubscriber();
    this.dataPointFrameReader = this.subscriber.createDataReader(this.dataPointFrameTopic);
    this.printCounter = 0;
  }

  run() {
    return new Promise((resolve, reject) => {
      this.takeAndPrint(resolve);
    });
  }

  takeAndPrint(resolveCall) {
    let samples = this.dataPointFrameReader.take(10);
    console.log(JSON.stringify(samples.map((aTuple) => aTuple.sample)));
    this.printCounter++;
    if (this.printCounter < 30) {
      setTimeout(() => this.takeAndPrint(resolveCall), 1000);
    } else {
      resolveCall();
    }
  }
}

(function () { new DpfTestSub(Number(process.argv[2]).valueOf()).run().then(() => process.exit(0)); })();

// vim: set ts=2 sw=2 expandtab:
