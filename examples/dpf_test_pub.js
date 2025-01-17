/**
 * @brief Test publisher that uses `DataPointFrame` topic type.
 * @date 2025-01-17 16:04:40
 * @author Rolando J. Nieves
 */

const { DDS, HostMonitor } = require(".");


class DpfTestPub {
  constructor(domainId) {
    console.log("Publishing on domain", domainId);
    this.participant = DDS.createDomainParticipant(domainId);
    this.dataPointFrameTs = new HostMonitor.DataPointFrameTypeSupport();
    this.dataPointFrameTs.registerType(this.participant);
    this.dataPointFrameTopic = this.participant.createTopic("DataPointFrame", this.dataPointFrameTs.getTypeName());
    this.publisher = this.participant.createPublisher();
    this.dataPointFrameWriter = this.publisher.createDataWriter(this.dataPointFrameTopic);
    this.publishCounter = 0;
  }

  run() {
    return new Promise((resolve, reject) => {
      this.publish(resolve);
    });
  }

  publish(resolveCall) {
    const DP_COUNT = 5;
    let aSample = new HostMonitor.DataPointFrame();
    aSample.senderId = 1;
    let acqTime = Date.now();
    for (let idx = 0; idx < DP_COUNT; idx++) {
      let aDp = new HostMonitor.DataPoint();
      aDp.acqTime = acqTime;
      aDp.dpId = idx;
      if (Math.random() > 0.5) {
        aDp.value = HostMonitor.ExampleUnion.singleVal(Math.random() * 15.0);
      } else {
        aDp.value = HostMonitor.ExampleUnion.intVal(Math.floor(Math.random() * 32.0));
      }
      aSample.values.push(aDp);
    }
    console.log(JSON.stringify(aSample));
    this.dataPointFrameWriter.write(aSample);
    this.publishCounter++;
    if (this.publishCounter < 30) {
      setTimeout(() => this.publish(resolveCall), 1000);
    } else {
      resolveCall();
    }
  }
}

(function () { new DpfTestPub(Number(process.argv[2]).valueOf()).run().then(() => process.exit(0)); })();

// vim: set ts=2 sw=2 expandtab:
