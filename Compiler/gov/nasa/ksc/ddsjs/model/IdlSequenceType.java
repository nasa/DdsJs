/**
 * @file IdlSequenceType.java
 * @brief Contains the class that models IDL sequence types.
 * @date 2014-08-12
 * @author Rolando J. Nieves
 */
package gov.nasa.ksc.ddsjs.model;

public class IdlSequenceType implements IdlTypeDefReceiver, IdlSizeDefReceiver {

	public IdlSequenceType(Object elementType) {
		// this(elementType, -1);
		this.elementType = elementType;
		this.sequenceBounds = null;
	}
	
	// public IdlSequenceType(Object elementType, int sequenceBounds) {
	// 	this.elementType = elementType;
	// 	this.sequenceBounds = (sequenceBounds > 0?Integer.valueOf(sequenceBounds):null);
	// }
	
	public Object getElementType() {
		return this.elementType;
	}
	
	public void setTypeDefinition(Object typeDefinition) {
		this.elementType = typeDefinition;
	}
	
	public void setSizeDefinition(Object sizeDefinition) {
		this.sequenceBounds = sizeDefinition;
	}

	// public int getSequenceBounds() {
	// 	return (this.sequenceBounds != null?this.sequenceBounds.intValue():-1);
	// }

	public Object getSequenceBounds() {
		return this.sequenceBounds;
	}

	public boolean isSequenceBoundsDefined() {
		return this.sequenceBounds != null;
	}
	
	@Override public String toString() {
		return "sequence<" + this.elementType + (this.sequenceBounds != null?(", " + this.sequenceBounds):"") + ">";
	}
	
	public String getIdlTypeClass() {
		return "sequence";
	}
	
	private Object elementType;
	// private Integer sequenceBounds;
	private Object sequenceBounds;
}
