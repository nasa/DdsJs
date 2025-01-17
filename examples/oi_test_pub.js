const { DDS, HostMonitor } = require(".");


class OiTestPub {
  constructor(domainId) {
    console.log("Publishing on domain", domainId);
    this.participant = DDS.createDomainParticipant(domainId);
    this.overallInfoTs = new HostMonitor.OverallInformationTypeSupport();
    this.overallInfoTs.registerType(this.participant);
    this.hostInfoTopic = this.participant.createTopic("HostInformation", this.overallInfoTs.getTypeName());
    this.publisher = this.participant.createPublisher();
    this.hostInfoDw = this.publisher.createDataWriter(this.hostInfoTopic);
    this.publishCounter = 0;
  }

  run() {
    return new Promise((resolve, reject) => {
      this.publish(resolve);
    });
  }

  publish(resolveCall) {
    let aSample = new HostMonitor.OverallInformation();
    aSample.hostInfo.hostName = "astraws011";
    aSample.cpuUtilization = Math.floor(Math.random() * 100.0);
    aSample.memoryUtilization = Math.floor(Math.random() * 30.0);
    console.log(JSON.stringify(aSample));
    this.hostInfoDw.write(aSample);
    this.publishCounter++;
    if (this.publishCounter < 30) {
      setTimeout(() => this.publish(resolveCall), 1000);
    } else {
      resolveCall();
    }
  }
}

(function () { new OiTestPub(Number(process.argv[2]).valueOf()).run().then(() => process.exit(0)); })();

// vim: set ts=2 sw=2 expandtab:

