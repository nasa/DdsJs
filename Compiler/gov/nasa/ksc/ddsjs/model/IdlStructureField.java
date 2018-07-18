/**
 * @file IdlStructureField.java
 * @brief Contains the class that models IDL data structure, valuetype, and union fields.
 * @date 2014-08-11
 * @author Rolando J. Nieves
 */
package gov.nasa.ksc.ddsjs.model;

public class IdlStructureField implements IdlTypeDefReceiver {

	public IdlStructureField(Object fieldType, String fieldName) {
		this.fieldType = fieldType;
		this.fieldName = fieldName;
	}
	
	public Object getFieldType() {
		return this.fieldType;
	}
	
	public void setTypeDefinition(Object typeDefinition) {
		this.fieldType = typeDefinition;
	}
	
	public String getFieldName() {
		return this.fieldName;
	}
	
	@Override public String toString() {
		return this.fieldType.toString() + " " + this.fieldName + ";";
	}
	
	private Object fieldType;
	private String fieldName;
}
