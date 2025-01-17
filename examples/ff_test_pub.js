/**
 * @brief Test publisher that uses `FixedFrame` topic type.
 * @date 2025-01-17 15:34:08
 * @author Rolando J. Nieves
 */

const crypto = require("node:crypto").webcrypto;
const { DDS, HostMonitor } = require(".");


class FfTestPub {
  constructor(domainId) {
    console.log("Publishing on domain", domainId);
    this.participant = DDS.createDomainParticipant(domainId);
    this.fixedFrameTs = new HostMonitor.FixedFrameTypeSupport();
    this.fixedFrameTs.registerType(this.participant);
    this.fixedFrameTopic = this.participant.createTopic("FixedFrame", this.fixedFrameTs.getTypeName());
    this.publisher = this.participant.createPublisher();
    this.fixedFrameWriter = this.publisher.createDataWriter(this.fixedFrameTopic);
    this.publishCounter = 0;
  }

  run() {
    return new Promise((resolve, reject) => {
      this.publish(resolve);
    });
  }

  publish(resolveCall) {
    let aSample = new HostMonitor.FixedFrame();
    let frameData = crypto.getRandomValues(new Uint8Array(Number(HostMonitor.FIXED_FRAME_SIZE)));
    aSample.metadata.acqTime = Date.now();
    aSample.metadata.senderId = 1;
    aSample.content = Array.from(frameData);
    console.log(JSON.stringify(aSample));
    this.fixedFrameWriter.write(aSample);
    this.publishCounter++;
    if (this.publishCounter < 30) {
      setTimeout(() => this.publish(resolveCall), 1000);
    } else {
      resolveCall();
    }
  }
}

(function () { new FfTestPub(Number(process.argv[2]).valueOf()).run().then(() => process.exit(0)); })();

// vim: set ts=2 sw=2 expandtab:

