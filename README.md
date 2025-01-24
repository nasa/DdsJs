# DEPRECATION NOTICE

Given the release of the [Web-Enabled DDS 1.0](http://www.omg.org/spec/DDS-WEB)
specification by the Object Management Group, the last development act scheduled
for this package will be migrating the code to `node-addon-api`. New development
will concentrate on creating a standards-compliant service instead of an API
adapting layer.

# Building and Packaging

## Prerequisites

1. Node.js (http://www.nodejs.org). Any NodeJS version starting with major version 16.

> [!NOTE]
> Although add-ons produced by this development kit are able to run under older
> versions of NodeJS, it requires at least NodeJS v16 to build. The add-ons it
> produces require Node-API version 6 or greater. Refer to the
> [Node-API Version Matrix](https://nodejs.org/docs/latest/api/n-api.html#node-api-version-matrix)
> for information regarding what versions of the NodeJS runtime are able to use
> add-ons created using **DDS.js**.

## Packaging

The **DDS.js** repository does not, in and of itself, compile or build native
code. Instead, the repository is designed to produce an NPM package called
`dds-js-devkit` that can then be used as a development dependency in any project
meant to create a NodeJS add-on from DDS IDL. The NPM package brings with it the
runtime source code required to produce a fully-functional NodeJS native add-on.

After checking out a fresh clone of the repository, the packaging dependencies
may be acquired by installing the dependencies listed in the `package.json`
file:

    npm install

Once all the packaging dependencies are available, creating a distributable NPM
package is done the usual way:

    npm pack

The above command will produce an NPM archive in the repository top-level called
`dds-js-devkit-<version>.tgz` where `<version>` is the **DDS.js** version as of
this writing.

# Using DDS.js

The distributable `dds-js-devkit` package is meant to be used as a development
dependency in an NPM project.

    npm install --save-dev <folder>/dds-js-devkit-<version>.tgz

Where `<folder>` is the folder containing the distributable package and
`<version>` is the **DDS.js** version identifier.

The assumption is the destination NPM project implements an interface layer
between NodeJS code and a DDS domain, as prescribed by definitions specified in
an IDL file. The `examples` folder in the **DDS.js** repository shows one way to
produce such an add-on, although it is not the only way the `dds-js-devkit`
package may be used.

The package brings with it the following top-level items:

1. The native run-time code implementing the standard DDS API.
2. A compiler that produces native C++ code, based on the [node-addon-api library](https://github.com/nodejs/node-addon-api),
   according to definitions present in an IDL file.
3. A compiler that produces TypeScript ambient type definitions (i.e., a
   `.d.ts` file) according to the definitions present in an IDL file.

The basic anatomy of a NodeJS project leveraging `dds-js-devkit` to produce a
DDS interfacing add-on would include the following top-level items in addition
to the standard NodeJS project content:

1. The IDL file (or files, if there are inter-dependencies) that describes the
   DDS domain traffic.
2. A `CMakeLists.txt` file that includes the build plan for the add-on's native
   C++ code.
3. A JavaScript entry point file (i.e., `index.js`) that implements the loading
   and serving of the native add-on content.

## Generating Native Code From IDL

The `dds-js-devkit` package brings with it a compiler, called `ddsjs-idl`, that
can produce C++ code based on IDL definitions. After installation in the target
NPM project, the compiler may be invoked as follows:

    npx ddsjs-idl --help

Which results in the following help content, describing how the compiler may be
invoked.

```
ddsjs-idl [processing flags...] IDL source file

Positionals:
  input-file  Path to the IDL file to process                           [string]

Options:
      --version          Show version number                           [boolean]
  -I, --include          Directory to add to include file path.         [string]
  -o, --outdir           Path where C++ output files will go (default: .).
                                                                        [string]
  -p, --cpp-exe          Name of the C/C++ pre-processor to use (default: cpp).
                                                                        [string]
  -r, --provider-header  Path to header file including all DDS provider
                         generated headers.                  [string] [required]
  -d, --dds-provider     Identifier for the DDS provider to use.        [string]
  -b, --build-system     Build system that will be used [cmake-js] (default:
                         none).                                         [string]
  -h, --help             Show help                                     [boolean]
```

## Generating TypeScript Ambient Definitions

The `dds-js-devkit` package also brings a compiler that produces TypeScript
ambient type definitions describing the content of the native add-on it would
produce based on an IDL file as input:

    npx ddsjs-idl-types --help

Which results in the following help content, describing how the compiler may be
invoked

```
ddsjs-idl-types <input-file>

Generate TypeScript type descriptions from IDL file.

Positionals:
  input-file  Path to the IDL file to process.                          [string]

Options:
      --help         Show help                                         [boolean]
      --version      Show version number                               [boolean]
  -p, --cpp-exec     Name of the C/C++ pre-processor to use.
                                                       [string] [default: "cpp"]
  -I, --include      Directory to add to include file path.             [string]
  -m, --module-name  Name of the top-level module to use in .d.ts file. [string]
  -o, --output-file  Name of the output .d.ts file.                     [string]
```

## NPM Scripts in Target Project

Although not strictly necessary, it is quite beneficial to leverage the script
functionality of NPM to automate the native code generation for the add-on. In
the `package.json` file under the `examples` folder, there are some suggestions
as to how this may be done. Of note are the `addon-src-gen` and `addon-type-gen`
NPM scripts:

```json
{
    "scripts": {
        "addon-src-gen": "ddsjs-idl -o native/addon -d ${npm_config_with_dds} -b cmake-js HostMonitor.idl",
        "addon-type-gen": "ddsjs-idl-types -m ${npm_package_name} -o ${npm_config_local_prefix}/index.d.ts HostMonitor.idl"
    }
}
```

The above example for `addon-src-gen` shows that the NPM script invokes the
`ddsjs-idl` compiler, accepting the file `HostMonitor.idl` as input, emitting
native code to the `native/addon` directory, targeting the DDS provider
specified in the NPM configuration environment variable `npm_config_with_dds`,
and emitting CMake.js build environment helper scripts. Re-generating native
code is then as simple as invoking `npm run`:

    npm --with-dds=<DDS Provider> run addon-src-gen

The above example for `addon-type-gen` shows that the NPM script invokes the
`ddsjs-idl-types` compiler, accepting the same `HostMonitor.idl` file as input,
emitting the type definitions to the `index.d.ts` file in the project's root
folder. Re-generating the ambient type definitions can then be done by invoking
`npm run` accordingly:

    npm --with-dds=<DDS Provider> run addon-type-gen

Where `<DDS Provider>` is the name of the DDS provider to target. As of this
writing, only
[CoreDX from Twin Oaks Computing](https://www.twinoakscomputing.com/coredx) 
and [CycloneDDS](https://cyclonedds.io/) are supported. The DDS provider may
also be specified via other
[NPM configuration vectors](https://docs.npmjs.com/cli/v10/using-npm/config).

## Preparing Native Code Build Plan

The `CMakeLists.txt` provided in the `examples` folder provides an excellent
source to bootstrap custom projects, but several salient points deserve mention
about it:

* The setup of "root" folders in the CMake cache (lines 9-11 in the example)
  are only convention, but serve as a good model to duplicate. The locations
  for all those folders must be known at build time.
* The modification of the `CMAKE_MODULE_PATH` build environment setting folds
  in the CMake.js helper scripts generated off the `addon-src-gen` NPM script
  example shown in the
  [NPM Scripts in Target Project](#npm-scripts-in-target-project). Functions
  defined in these helper scripts are necessary for proper add-on building.
* The inclusion of the helper scripts is necessary and shown in line 15 of
  the `CMakeLists.txt` file in the `examples` folder.
* The inclusion of the generated add-on sources into the `.node` binary build
  is done by using the `add_<IDL Name>Addon_sources()` function call in line
  53 of the `CMakeLists.txt` file in the `examples` folder. For the example,
  the name of the IDL file is `HostMonitor.idl`, thus the name of the function
  ends up being `add_HostMonitorAddon_sources()`.

## Building Native Code

Emitting of the code is only part of the work required to produce the
DDS IDL-based NodeJS add-on. The native code must also be compiled and combined
into the single `.node` shared object that NodeJS can import. There are a few
ways to accomplish this part, be it using [node-gyp](https://github.com/nodejs/node-gyp)
or [CMake.js](https://github.com/cmake-js/cmake-js). The `example` folder shows
a way of building the native code using **CMake.js** in the `CMakeLists.txt`
file.

> [!NOTE]
> The example provided assumes the pre-built `.node` archive is included in the
> distributable package. That is also not required and is left at the discretion
> of the add-on author.

## Top-Level Import Script

The `example` folder also shows a top-level `index.js` file that hides the
underlying details of how the `.node` add-on is imported. This is also not
required, but it is strongly recommended. The `index.js` script leverages the
[node-bindings](https://github.com/TooTallNate/node-bindings) package to import
the `.node` add-on.

# Using the DDS.js Built Add-on

With the NPM package containing the **DDS.js** built add-on installed on the
target application, the API provided by said add-on can be used as any other
Node.js module. An example of a very simple application that subscribes to 
samples of the `HostMonitor.OverallInformation` message published under a topic
called `HostInformation` is available for study under `examples/oi_test_sub.js`.
An example of a very simple application that publishes samples of the
`HostMonitor.OverallInformation` message under the topic called
`HostInformation` is available for study under the `examples/oi_test_pub.js`.

## Example Application Discussion

The module produced by **DDS.js** will contain at least *two* namespaces within
it. The first namespace, called `DDS`, will contain the standard DDS calls and
definitions (such as QoS structures). The other namespaces correspond to any
top-level IDL modules found in the input file, of which there must be at least
one. In the example code, the IDL defines two (2) top-level modules:
`HostMonitor` and `NetworkMonitor`.

The primary function of the examples folder is to produce a NodeJS module that
can then be added as a dependency into another application. The `examples`
folder contains:

* A `package.json` file describing the add-on package the project would produce.
* A `CMakeLists.txt` file that describes how to build the native code generated
  by both **DDS.js** and the DDS provider.
* A `HostMonitor.idl` file describing an example interface using IDL.

### Example Native Code

The example aims to store all native C++ code under a `native` folder, which is
not committed to source control. The example assumes that the DDS provider's
compiler emits the code based off the IDL to the `native/<provider label>`
directory (for CoreDX, the `<provider label>` would be `CoreDX`). The
example also emits the code generated by the **DDS.js** IDL compiler to the
`native/addon` directory. The example depends on CMake.js to build the native
code, and thus instructs the **DDS.js** compiler to emit helper scripts into
the `native/addon` directory. The example also emits TypeScript ambient types
based off the IDL file onto `index.d.ts` on the `examples` folder. The
`CMakeLists.txt` file in the `examples` folder bears out all of these
assumptions.

### Example Dependencies

The example includes the
[`bindings` NodeJS package](https://www.npmjs.com/package/bindings) as a runtime
dependency. The example also includes three (3) development time dependencies:

* The CMake.js build system.
* The `node-addon-api` library.
* The `dds-js-devkit` package discussed in the [Packaging section](#packaging).

### Example Main Entry Point

The example's main entry point in the `index.js` file implements logic that
verifies the caller is using a proper version of NodeJS (based on the Node-API
version offered by the calling NodeJS runtime), and if it does it loads and
returns the top-level references of the C++ add-on.

The main entry point uses the `bindings` location hints feature to find the
`.node` add-on file that's appropriate based on the host platform and CPU
architecture as reported by NodeJS via the `process` built-in global object.
The `CMakeLists.txt` file in `examples` is designed to deposit the resulting
`.node` file to the appropriate location.

### Example Application Code

There are two (2) scripts that provide minimal code for example applications:

* `oi_test_pub.js` - Implements a `HostMonitor.OverallInformation` data writer
  that produces samples.
* `oi_test_sub.js` - Implements a `HostMonitor.OverallInformation` data reader
  that consumes samples.

> [!WARNING]
> The above-referenced example shows that all of the DDS supporting object
> instances (`DomainParticipant`, `Subscriber`, `Publisher`, `Topic`, etc.)
> remain "in scope" for the lifetime of the application. This is **extremely**
> important to keep in mind for application developers. If those supporting
> instances are not kept in scope, the NodeJS garbage collector may consider
> them eligible for collection and the application will stop working once that
> happens.

### Example Distributable

Distributing an add-on off of the `examples` folder that implements the
`HostMonitor.idl` file can be done by issuing:

```console
$ npm --with-dds=<provider label> pack
```

Where `<provider label>` identifies the DDS provider targeted (e.g., `CoreDX`).

## Application Migration

The module produced using this version of **DDS.js** does exhibit some breaking
API changes when compared against modules produced with version 1.

### Creating Topics

In **DDS.js** version 1, the code emitter produced factory helpers that could be
used to create DDS topic instances. The topic factories were based off the names
of data structures in the IDL. These factories obviated the need for DDS type
support entities, so those were not available from JavaScript. **DDS.js**
version 2 and forward more closely emulates the standard DDS API which includes
type support classes and requires the registration of data structure types prior
to creating topic instances. For example, based off the `HostMonitor.idl`
file in the `examples` folder, creating a topic that uses the
`HostMonitor.OverallInformation` data structure would be done as follows:

```javascript
let participant = DDS.createDomainParticipant(0);
let oiTopic = participant.createTopic(HostMonitor.OverallInformationTopic);
```

Modules created using **DDS.js** version 2 and later would need to create the
topic as follows:

```javascript
let participant = DDS.createDomainParticipant(0);
let oiTs = new HostMonitor.OverallInformationTypeSupport();
oiTs.registerType(participant);
let topicName = "HostInformation";
let oiTopic = participant.createTopic(topicName, oiTs.getTypeName());
```

The reason for this breaking API change has to do with the flexibility it
affords application software developers in comparison to the prior **DDS.js**
implementation. In version 1, the topic factory classes assumed that the name
of the topic was identical to the name of the data type the topic used. Version
2 and later give developers the ability to create topics with names that are
independent from the data types the topic samples use, closely mimicking
standard DDS.

### Taking Samples

In **DDS.js** version 1, the `take()` call on generated data readers exhibited
a signature that required three (3) parameters:

* The maximum number of samples to accept.
* The maximum delay to wait for samples, expressed in seconds.
* The callback to invoke once the `take()` call was complete.

The result of the `take()` call was in the callback, which was required to
accept three (3) parameters:

* An error object, if an error occured.
* An array of either samples or `null` values.
* An array of `DDS.SampleInfo` instances.

Version 2 of **DDS.js** modifies both the `take()` call input parameters and the
mechanic via which samples are returned. In version 2, the `take()` call only
accepts one argument:

* The maximum number of samples to accept.

The call returns a list of sample/sample info tuples, with each tuple complying
with the following interface:

```typescript
interface TakeResultTuple< SampleType > {
    sample: SampleType | null,
    sampleInfo: DDS.SampleInfo
}
```

If an error occurs during the `take()` operation, the call raises an exception.

The reason for this API change was primarily motivated by the desire to simplify
the `take()` call interface. The use of a callback for the results may not be
the best choice for all application developers. This approach grants developers
the ability to either use the call in its natural, synchronous manner, or wrap
the `take()` operation into a JS `Promise` or even
[RxJS Observable](https://rxjs.dev/). There was also a desire to better
correlate samples with their corresponding sample information ancillary.
Although the standard DDS API uses correlated arrays, an array of tuples better
establishes the relationship.

# DDS.js Developing and Maintenance

In order to maintain or alter the IDL grammar and/or the runtime native code,
it is necessary to establish a valid environment.

1. ANTLR (http://www.antlr.org/) version 4.9.1 or higher. Note location of ANTLR JAR file.
2. CMake (http://www.cmake.org) version 3.12.0 or higher. A version may be provided by Linux distributions.
3. A properly-licensed DDS provider distribution. Currently, only CoreDX (http://www.twinoaks.com). Version 5.6.0 or higher is supported.
4. OpenJDK version 14 or higher (for grammar developing only; not needed for package build). Oracle Java may also work.

### Maintenance Pre-Requisites

After checking out the source code repository, prepare the environment using the
`npm install` command. The `package.json` file included in the repository
specifies any build-time dependencies required and downloads them when the
command is issued.

    npm install

**CMake-js** can then download the required **NodeJs** and **Node-API**
supporting libraries and headers:

    npm run cmake-js -- -r node -v <target NodeJS version> install

Where `<target NodeJS version>` is the NodeJS version that you're targeting for
your DDS modules. Note that the NodeJS version targeted need not be the same as
the NodeJS version used to build this package. Use of the package, however, will
require that selected NodeJS version.

### IDL Grammar Maintenance

When modifying the IDL language grammar, it will be necessary to re-generate
the TypeScript code that makes up the lexer and parser. The `package.json` file
contains a script that does this grammar compilation and deposits the files to
the appropriate folder, as long as it is provided the location of the ANTLR JAR
file. The name of the grammar re-compilation NPM script is `compile-grammar`,
and to run it using `npm run` the location of the ANTLR JAR must be specified in
the command line using `--antlr4-jar`:

    npm --antlr4-jar=<location of ANTLR JAR file> run compile-grammar

Any modifications to the IDL grammar may also require changes to the set of
visitor classes located in the `src/parser/visitors` folder. Refer to
[The Definitive ANTLR 4 Reference](https://pragprog.com/titles/tpantlr2/the-definitive-antlr-4-reference/)
for more information regarding writing parsers using the visitor pattern.

### Native Code Maintenance

When modifying the native code that makes the runtime, under the `DdsJs`
directory, it is possible to "sanity check" the code modifications without
having to package and deploy the `dds-js-devkit` NPM package onto a test
package. The `package.json` file for **DDS.js** brings a script called
`dbgbuild` that, when invoked, creates a static library with the runtime code
compiled. The static library is not meant for any use, but rather serves as a
target of convenience for this code validation.

> [!NOTE]
> Some of the **DDS.js** runtime code is template-only, such as the `DataReader`
> and `DataWriter` wrappers, and cannot be fully validated with the `dbgbuild`
> convenience NPM script. To validate this code, embedding into a test project
> is required.

## Distributing the Add-on

Once the custom add-on is built using the **DDS.js** tools and libraries, it may be
packaged for distribution using the `npm pack` command (run from the source
tree). The aforementioned command will produce a `*.tgz` archive that can then
be installed onto the target application as a Node.js module.

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

## ANTLR

_[The BSD License]_
Copyright (c) 2012 Terence Parr and Sam Harwell
All rights reserved.
*  Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
*  Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
*  Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
*  Neither the name of the author nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

