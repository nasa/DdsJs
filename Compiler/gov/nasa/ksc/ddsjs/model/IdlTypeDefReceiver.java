/**
 * @file IdlTypeDefReceiver.java
 * @brief Contains the interface implemented by entities that receive type descriptions
 * @date 2014-08-12
 * @author Rolando J. Nieves
 */
package gov.nasa.ksc.ddsjs.model;

public interface IdlTypeDefReceiver {

	public void setTypeDefinition(Object typeDefinition);
	
}
