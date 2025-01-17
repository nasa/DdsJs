/**
 * @brief Test subscriber that uses `FixedFrame` topic type.
 * @date 2025-01-17 15:48:16
 * @author Rolando J. Nieves
 */
const { DDS, HostMonitor } = require(".");


class FfTestSub {
  constructor(domainId) {
    console.log("Listening on domain", domainId);
    this.participant = DDS.createDomainParticipant(domainId);
    this.fixedFrameTs = new HostMonitor.FixedFrameTypeSupport();
    this.fixedFrameTs.registerType(this.participant);
    this.fixedFrameTopic = this.participant.createTopic("FixedFrame", this.fixedFrameTs.getTypeName());
    this.subscriber = this.participant.createSubscriber();
    this.fixedFrameReader = this.subscriber.createDataReader(this.fixedFrameTopic);
    this.printCounter = 0;
  }

  run() {
    return new Promise((resolve, reject) => {
      this.takeAndPrint(resolve);
    });
  }

  takeAndPrint(resolveCall) {
    let samples = this.fixedFrameReader.take(10);
    console.log(JSON.stringify(samples.map((aTuple) => aTuple.sample)));
    this.printCounter++;
    if (this.printCounter < 30) {
      setTimeout(() => this.takeAndPrint(resolveCall), 1000);
    } else {
      resolveCall();
    }
  }
}

(function () { new FfTestSub(Number(process.argv[2]).valueOf()).run().then(() => process.exit(0)); })();

// vim: set ts=2 sw=2 expandtab:
