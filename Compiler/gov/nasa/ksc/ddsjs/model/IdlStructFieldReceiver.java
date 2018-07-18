/**
 * @file IdlStructFieldReceiver.java
 * @brief Contains the definition of an interface implemented by types that accept structure fields.
 * @date 2014-08-14
 * @author Rolando J. Nieves
 */
package gov.nasa.ksc.ddsjs.model;

/**
 * This interface right now is only used by \c IdlStructureDefinition, but in
 * future iterations it could be used when supporting IDL \c entity 
 * definitions.
 */
public interface IdlStructFieldReceiver {

	public void addStructureField(IdlStructureField newField);
	
}
