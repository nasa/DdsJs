# Building and Packaging

## Prerequisites

1. ANTLR (http://www.antlr.org/) version 4.4 or higher. Note location of ANTLR JAR file.
2. StringTemplate (http://www.stringtemplate.org) version 4.0 or higher. Note location of StringTemplate JAR file.
3. CommonsCLI (http://commons.apache.org/proper/commons-cli/). Version 1.2 or higher. Note location of commons-cli 
   JAR file.
4. CMake (http://www.cmake.org). Version 3.11.0 or higher. A version may be provided by Linux distributions.
5. Node.js (http://www.nodejs.org). Any NodeJS version belonging to major version 8. Note the actual version number.
6. `cmake-js` (installed via NPM).
7. A properly-licensed DDS provider distribution. Currently, only CoreDX (http://www.twinoaks.com). Version 4.2.0 or higher is supported.
8. Java Development Kit (http://java.oracle.com). Version 1.8 or higher. OpenJDK may also work if provided by your
   Linux distribution.

## Build Preparation

**DDS.js** requires that the files required to build Node.js native add-ons be already installed. This can be done
by first installing `cmake-js`, then letting it install the build files:

    npm install -g cmake-js
    cmake-js install

## Preferred Location of JAR Dependencies

The **DDS.js** build files prefer that the JAR files it depends on (ANTLR, StringTemplate, and CommonsCLI) be 
installed in the `/usr/local/lib` directory. They may be installed in other locations, but doing so may make configuring the build system more difficult.

## DDS Environment Settings

### CoreDX

The **DDS.js** build files expect the following CoreDX-related environment variables be properly configured:

*  `COREDX_TOP`: Should point to the top-level installation directory of CoreDX
*  `COREDX_TARGET`: Should indicate the platform specification of the target on which CoreDX.js will run. Usually
   this is the same as the platform building the software.

### OpenSplice

TBD

### OpenDDS

TBD

## Build Configuration

The recommended way to build **DDS.js** is to create a build directory inside the top-level source directory (i.e., a "build tree") and perform the build from that directory.

    cd <top-level>
    mkdir build
    cd build
    
**DDS.js** uses CMake as its build system. The command line parameters passed to CMake provide information regarding
where to find all the prerequisites. The available command line parameters are:

*  `-DANTLR_VERSION=<ver>`: Version number of the ANTLR v4 JAR file. Should be evident from the JAR file name. This
   option may only be used if the ANTLR JAR file is installed in `/usr/local/lib`.
*  `-DCOMMONS_CLI_VERSION=<ver>`: Version number of the Commons-CLI JAR file. Should be evident from the JAR file 
   name. This option may only be used if the Commons-CLI JAR file is installed in `/usr/local/lib`, or if the 
   location of the JAR file is specified via `COMMONS_CLI_HOME`.
*  `-DCOMMONS_CLI_HOME=<dir>`: Location of the Commons-CLI JAR file. Not necessary if the JAR file is installed in
   `/usr/local/lib`.
*  `-DST_VERSION=<ver>`: Version number of the StringTemplate JAR file. Should be evident from the JAR file name.
   This option may only be used if the StringTemplate JAR file is installed in `/usr/local/lib`.
*  `-DNODEJS_VERSION=<ver>`: Version number of Node.js being used.
*  `-DWITH_DDS=<provider>`: Configure **DDS.js** to use a particular DDS provider. Currently, only `CoreDX` is supported.
*  `-DCMAKE_BUILD_TYPE=(Debug|Release)`: Type of build. Labels are self-explanatory.
*  `-DCMAKE_INSTALL_PREFIX=<directory>`: Directory where **DDS.js** will be installed. On user builds, it defaults to
   `${HOME}/Install`. Production builds usually are rooted in `/opt`.

For example, to configure the **DDS.js** build with ANTLR version 4.5, StringTemplate version 4.0.8, Commons-CLI
version 1.2, and using CoreDX DDS, with all JARs installed in `/usr/local/lib`, and Node.js version 4.2.4, one would issue the
following command (assuming the other prerequisites are met, and the command is being run from the build directory):

    cmake -DCMAKE_BUILD_TYPE=Release \
          -DANTLR_VERSION=4.5 \
          -DCOMMONS_CLI_VERSION=1.2 \
          -DST_VERSION=4.0.8 \
          -DNODEJS_VERSION=4.2.4 \
          -DWITH_DDS=CoreDX \
          ..

The last argument (`..`; parent directory reference) is important, as it tells CMake where to find the 
`CMakeLists.txt` file.

## Building

After CMake successfully completes the build environment configuration, building CoreDX.js may be done by
simply issuing a `make`.

## Packaging

Once the build is complete, CMake may be used to create installable packages. On Intel/Linux systems, the follwing
command produces two (2) installable DEB archives. On other Linux systems, it produces two (2) TAR-GZ archives:

    make package

This default behavior can be circumvented by calling the CPack tool (part of CMake) directly with a package generator specification. For example, to generate TAR-GZ archives even in Intel/Linux systems, the following command must be run from the build tree:

    cpack -G TGZ

The resulting archives will bear in their name the **DDS.js** package name, version, target operating system, target
system processor, and whether the archive contains runtime files or files used for development. For example, a
set of TAR-GZ archives built for a Linux x86-64 host would look like this:

*  `ddsjs-1.0.0-Linux-x86_64-Bin.tar.gz`: Archive containing the shared libraries that are needed at runtime.
*  `ddsjs-1.0.0-Linux-x86_64-Dev.tar.gz`: Archive containing header files and build scripts that are needed when
   building a NodeJS add-on with **DDS.js**.

A set of DEB archives would look as follows (when using CoreDX as the DDS provider):

*  `ddsjs-coredx-bin_1.0.0-custom_amd64.deb`: Archive containing the shared libraries that are needed at runtime.
*  `ddsjs-coredx-dev_1.0.0-custom_amd64.deb`: Archive containing header files and build scripts that are needed when
   building a NodeJS add-on with **DDS.js**.


## Installation

When installing from TAR-GZ archives, simply unpacking then on a target directory will create a
directory for **DDS.js** and unpack all the files in their appropriate location. When `CMAKE_INSTALL_PREFIX` specified
a global location, it is expected that the archive be unpacked at the root of the file system:

    tar -C / -zxvf ddsjs-1.0.0-Linux-x86_64-Bin.tar.gz

By default, `CMAKE_INSTALL_PREFIX` is configured to be `/opt/ASTRA`.

## Post-installation

**DDS.js** must have the shared libraries in its "Bin" package be registered with the system's dynamic linker. On Linux
systems, this usually involves adding an entry to the `/etc/ld.so.conf` file pointing to the directory where the
shared libraries were installed.

# Using DDS.js

## Workspace Preparation

The DDS.js package works best when used in conjunction with the CMake.js
(https://www.npmjs.com/package/cmake-js) NPM package. A typical DDS.js enabled
add-on would have the following files in its project root directory:

*  `CMakeLists.txt`: CMake file containing the build instructions for the
   add-on.
*  `package.json`: JSON file that describes the NodeJS add-on.
*  `index.js`: Top-level, or "main", JavaScript file for the add-on.
*  **IDL File**: The DDS IDL file describing the data types to use in the
   add-on.

In order for users of the add-on to be able to re-compile the source files, the
`package.json` file must contain an `install` script fragment that calls
`cmake-js compile`, as well as contain dependencies on `cmake-js` and (highly
recommended) `bindings`.

Refer to the `examples` directory in the source distribution in order to glean
what the typical Node.js add-on package source tree should look like. In it,
there is a very simple IDL file that will serve as the basis for the examples
that follow:

    module HostMonitor {

    typedef string<256> HostNameType;

    struct OverallInformation {
        HostNameType hostName;
        float cpuUtilization;
        float memoryUtilization;
    };

    };

An excellent idea for exploring **DDS.js** is to copy the contents of the 
`examples` directory onto a different location, thus any experimentation does
not affect the **DDS.js** source area.

## Building Node.js Add-on

After the aforementioned files are created, the command `cmake-js build` should
build the add-on.

## Distributing the Add-on

Once the custom add-on is built using the **DDS.js** tools and libraries, it may be
packaged for distribution using the `npm pack` command (run from the source
tree). The aforementioned command will produce a `*.tgz` archive that can then
be installed onto the target application as a Node.js module. The `Bin`-variants
of **DDS.js** must also be distributed with the add-on.

# Using the DDS.js Built Add-on

With the NPM package containing the **DDS.js** built add-on installed on the
target application, the API provided by said add-on can be used as any other
Node.js module. Following is a sample Node.js "console" application that
subscribes to the `OverallInformation` samples defined in the example module's
`HostMonitor.idl` file:

    const DDS = require("dds-hostmonitor").DDS;
    const HostMonitor = require("dds-hostmonitor").HostMonitor;

    var particip = DDS.createDomainParticipant(
        /* Domain ID */0
    );

    var subscriber = particip.createSubscriber();

    var overallInfoTopic = particip.createTopic(
        HostMonitor.OverallInformationTopic
    );

    var overallInfoReader = subscriber.createDataReader(
        overallInfoTopic
    );

    /* Callable that receives samples from "take()" */
    var printSamples = (error, samples, sampleInfos) => {
        if (error) {
            console.out("ERROR in take(): " + error);
        } else {
            console.out(JSON.stringify(samples));
        }
    };

    /* Do a "take()" every 1000 milliseconds */
    var timerObj = setInterval(
        () => {
            overallInfoReader.take(
                /* Max sample count */ 100,
                /* Unused */ 0,
                /* Callback */ printSamples
            );
        },
        1000
    );

    process.on("SIGINT", () => {
        /* Cleanup after detecting Ctrl+C */
        clearInterval(timerObj);
        timerObj = null;
        particip.deleteContainedEntities();
        overallInfoReader = null;
        overallInfoTopic = null;
        subscriber = null;
        particip = null;
    });

Inclusion of the **DDS.js** module is by the name given in `package.json`. The
lone JS file in the example directory, `index.js`, basically relays the
inclusion to the module via the `bindings` package. The aforementioned file can
contain additional content at the developer's discretion.

The module produced by **DDS.js** will contain *two* namespaces within it. The
first namespace, called `DDS`, will contain the standard DDS calls and
definitions (such as QoS structures). The only use of this namespace in the
previous code appears when creating the DDS Domain Participant with
`DDS.createDomainParticipant()`. The call is required to specify the DDS domain
ID as the first argument. The second argument is optional and, if specified,
must be an instance of the `DDS.DomainParticipantQos`. The recommended way to
acquire an instance of this structure is to call
`DDS.getDefaultParticipantQos()`. The fields in the returned object reflect
those of the QoS structure defined in standard DDS.

From the participant spawn several of the standard objects. In this simple
example, the participant is used to create a `Subscriber` instance via the
`createSubscriber()` method in the returned participant object. The participant
object also creates the topic, but creation of IDL-specific topics requires a
discussion of the other produced namespace.

The second namespace in the module will take its name directly from the
top-level IDL module name in the provided source IDL file. In this case, the
top-level module is called `HostMonitor`, thus the produced namespace uses the
same name. This module contains definitions for all of the data structures and
topics defined in the IDL file. In this case, only one structure/topic called
`OverallInformation` is defined. In order to create a topic instance, a helper
object that follows the pattern `<TopicName>Topic` is created for every topic
worthy data structure found in the IDL file. For `OverallInformation`, thus, the
name of the helper object is `OverallInformationTopic`. Passing this helper to
the DDS participant's `createTopic()` call takes care of both topic creation and
type registration. The default type name is used when registering the type
(by specifying `nullptr` in the underlying `register_type()` C++ call).

The sample code should run, attempting to `take()` samples every second, and
printing whatever it received. At the time of this writing, **DDS.js** does not
support event-driven sample ingest, such as those that could be defined via
either a `WaitSet` or via callbacks. The code should stop upon receiving a
`SIGINT` event, usually via `Ctrl+C`.

# Bindings Reference

The following table illustrates the API bindings available as of this writing to
JavaScript developers, and their proper analogue in the standard DDS C++
bindings. Note that only a small fraction of standard binding API calls area
currently avaialable in this JavaScript implementation. Any calls not scoped to
a class in the JavaScript column reside directly in the `DDS` namespace. All
symbols in the C++ column reside within the `DDS::` namespace. As a general
rule, any C++ calls that use *snake case* to define their symbol names were
transformed to *camel case* in order to better abide by JavaScript conventions.

| JS API call  | Equivalent C++ call  |
| ------------ | -------------------- |
| `createDomainParticipant()`  | `DomainParticipantFactory::create_domain_participant()`  |
| `DomainParticipant.enable()`  | `DomainParticipant::enable()`  |
| `DomainParticipant.createPublisher()`  | `DomainParticipant::create_publisher()`  |
| `DomainParticipant.createSubscriber()`  | `DomainParticipant::create_subscriber()`  |
| `DomainParticipant.createTopic()`  | `DomainParticipant::create_topic()`  |
| `DomainParticipant.getDiscoveredParticipants()`  | `DomainParticipant::get_discovered_participants()`  |
| `DomainParticipant.getDiscoveredParticipantData()`  | `DomainParticipant::get_discovered_participant_data()`  |
| `DomainParticipant.deleteContainedEntities()`  | `DomainParticipant::delete_contained_entities()`  |
| `DomainParticipant.addTransport()`  | `DomainParticipant::add_transport()`<sup>*</sup>  |
| `Subscriber.createDataReader()`  | `Subscriber::create_datareader()`  |
| `Subscriber.getDefaultDataReaderQos()`  | `Subsriber::get_default_datareader_qos()`  |
| `Publisher.createDataWriter()`  | `Publisher::create_datawriter()`  |
| `Publisher.getDefaultDataWriterQos()`  | `Publisher::get_default_datawriter_qos()`  |
| `DataReader.take()`  | `DataReader::take()`  |
| `DataReader.getStatusChanges()`  | `DataReader::get_status_changes()`  |
| `DataReader.getLivelinessChangedStatus()`  | `DataReader::get_liveliness_changed_status()`  |
| `DataReader.getSubscriptionMatchedStatus()`  | `DataReader::get_subscription_matched_status()`  |
| `DataReader.getSampleLostStatus()`  | `DataReader::get_sample_lost_status()`  |
| `DataReader.getRequestedIncompatibleQosStatus()`  | `DataReader::get_requested_incompatible_qos_status()`  |
| `DataReader.getSampleRejectedStatus()`  | `DataReader::get_sample_rejected_status()`  |
| `DataReader.getMatchedPublications()`  | `DataReader::get_matched_publications()`  |
| `DataReader.getMatchedPublicationData()`  | `DataReader::get_matched_publication_data()`  |
| `DataWriter.write()`  | `DataWriter::write()`  |
| `DataWriter.getStatusChanges()`   | `DataWriter::get_status_changes()`  |
| `DataWriter.getMatchedSubscriptions()`  | `DataWriter::get_matched_subscriptions()`  |
| `DataWriter.getMatchedSubscriptionData()`  | `DataWriter::get_matched_subscription_data()`  |
| `DataWriter.registerInstance()`  | `DataWriter::register_instance()`  |
| `DataWriter.unregisterInstance()`  | `DataWriter::unregister_instance()`  |
| `DataWriter.dispose()`  | `DataWriter::dispose()`  |

<sup>*</sup> Denotes a feature only available with **CoreDX**.

As far as the IDL productions fed through to **DDS.js**, no name alterations are
done. The data types specified in the productions are mapped as follows:

| IDL Type(s)  | Mapped in JS As  |
| ------------ | ---------------- |
| `struct`  | `Object`  |
| `long`, `short`, `octet`, `float`, `double`  | `Number`  |
| `string` (bounded and unbounded)  | `String`<sup>1</sup>  |
| `sequence` (bounded and unbounded)  | `Array`<sup>2</sup>  |

<sup>1</sup> Any bounds specified in the IDL are not currently enforced in
JavaScript.

<sup>2</sup> Only element homogeneity specified in the IDL is enforced in
JavaScript, and the enforcement only manifests upon calls to the **DDS.js** API.

Namespaces found in the IDL file(s) processed are turned into Node.js modules,
observing any hierarchy specified in the source IDL.

# Applicable Licenses

## ANTLR and StringTemplate

_[The BSD License]_
Copyright (c) 2012 Terence Parr and Sam Harwell
All rights reserved.
*  Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
*  Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
*  Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
*  Neither the name of the author nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
