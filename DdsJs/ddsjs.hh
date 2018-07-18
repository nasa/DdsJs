/**
 * \file ddsjs.hh
 * \brief Top-level header file for the DDS.js package.
 * \date 2014-09-17
 * \author Rolando J. Nieves
 */

#ifndef DDSJS_H_
#define DDSJS_H_

#include "TypeUtility.hh"
#include "ddsjs_base.hh"
#include "DataReaderWrap.hh"
#include "DataWriterWrap.hh"

namespace DdsJs {

/**
 * \brief Initialize the entire common portion of the Node.js module.
 *
 * \param exports {inout} Modified by this function so it includes all of the
 *                        symbols to export for use by Node.js.
 */ 
void InitAll(::v8::Local< ::v8::Object > exports);

}
#endif /* DDSJS_H_ */
