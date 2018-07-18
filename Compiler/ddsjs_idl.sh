#!/bin/bash
# Execute the DDS.js compiler under Linux.

exec java \
    -Dgov.nasa.ksc.ddsjs.idlc.dataDir="@DDSJS_IDL_DATADIR@" \
    -cp "@DDSJS_IDL_CLASSPATH@" \
    gov.nasa.ksc.ddsjs.idlc.IdlStCompiler \
    $*

