/**
 * @file IdlStringType.java
 * @brief Contains the class that models IDL string types
 * @date 2014-08-11
 * @author Rolando J. Nieves
 */
package gov.nasa.ksc.ddsjs.model;

public class IdlStringType implements IdlSizeDefReceiver {

	public IdlStringType() {
		// this(-1);
		this.maxLength = null;
	}
	
	// public IdlStringType(int maxLength) {
	// 	if (maxLength > 0) {
	// 		this.maxLength = new Integer(maxLength);
	// 	} else {
	// 		this.maxLength = null;
	// 	}
	// }
	
	// public int getMaxLength() {
	// 	return (this.maxLength != null?this.maxLength.intValue():0);
	// }
	
	public void setSizeDefinition(Object sizeDefinition) {
		this.maxLength = sizeDefinition;
	}
	
	public Object getMaxLength() {
		return this.maxLength;
	}

	public boolean isMaxLengthDefined() {
		return this.maxLength != null;
	}
	
	@Override public String toString() {
		return "string" + (this.maxLength != null?("<" + this.maxLength + ">"):"");
	}
	
	public String getIdlTypeClass() {
		return "string";
	}
	
	// private Integer maxLength;
	private Object maxLength;
}
