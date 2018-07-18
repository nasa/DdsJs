/**
 * @file IdlArrayType.java
 * @brief Contains the class that models array types.
 * @date 2014-08-11
 * @author Rolando J. Nieves
 */
package gov.nasa.ksc.ddsjs.model;

/**
 * Model array types encountered in an IDL file.
 *
 * Instances of @c IdlArrayType represent array types defined in an IDL file.
 */
public class IdlArrayType implements IdlTypeDefReceiver {

	public IdlArrayType(Object elementType, int arraySize) {
		this.elementType = elementType;
		this.arraySize = arraySize;
	}
	
	public Object getElementType() {
		return this.elementType;
	}
	
	public void setTypeDefinition(Object typeDefinition) {
		this.elementType = typeDefinition;
	}
	
	public int getArraySize() {
		return this.arraySize;
	}
	
	public void setArraySize(int arraySize) {
		this.arraySize = arraySize;
	}
	
	@Override public String toString() {
		return this.elementType.toString() + "[" + Integer.toString(this.arraySize) + "]";
	}
	
	public String getIdlTypeClass() {
		return "array";
	}
	
	private Object elementType;
	private int arraySize;
}
