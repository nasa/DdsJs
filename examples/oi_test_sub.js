const { DDS, HostMonitor } = require(".");


class OiTestSub {
  constructor(domainId) {
    console.log("Listening on domain", domainId);
    this.participant = DDS.createDomainParticipant(domainId);
    this.overallInfoTs = new HostMonitor.OverallInformationTypeSupport();
    this.overallInfoTs.registerType(this.participant);
    this.hostInfoTopic = this.participant.createTopic("HostInformation", this.overallInfoTs.getTypeName());
    this.subscriber = this.participant.createSubscriber();
    this.hostInfoDr = this.subscriber.createDataReader(this.hostInfoTopic);
    this.printCounter = 0;
  }

  run() {
    return new Promise((resolve, reject) => {
      this.takeAndPrint(resolve);
    });
  }

  takeAndPrint(resolveCall) {
    let samples = this.hostInfoDr.take(10);
    console.log(JSON.stringify(samples.map((aTuple) => aTuple.sample)));
    this.printCounter++;
    if (this.printCounter < 30) {
      setTimeout(() => this.takeAndPrint(resolveCall), 1000);
    } else {
      resolveCall();
    }
  }
}

(function () { new OiTestSub(Number(process.argv[2]).valueOf()).run().then(() => process.exit(0)); })();

// vim: set ts=2 sw=2 expandtab:

