/**
 * @file IdlPrimitiveType.java
 * @brief Contains the class that models IDL primitive types.
 * @date 2014-08-14
 * @author Rolando J. Nieves
 */
package gov.nasa.ksc.ddsjs.model;

public class IdlPrimitiveType {

	public enum Primitive { OCTET, USHORT, SHORT, ULONG, LONG, FLOAT, DOUBLE, BOOLEAN };
	
	public IdlPrimitiveType(Primitive primitive) {
		this.primitive = primitive;
	}
	
	public Primitive getPrimitive() {
		return this.primitive;
	}
	
	@Override public String toString() {
		switch(this.primitive) {
		case OCTET:
			return "octet";
		case USHORT:
			return "unsigned short";
		case SHORT:
			return "short";
		case ULONG:
			return "unsigned long";
		case LONG:
			return "long";
		case FLOAT:
			return "float";
		case DOUBLE:
			return "double";
		case BOOLEAN:
			return "boolean";
		default:
			return "<unknown primitive>";
		}
	}
	
	public String getIdlTypeClass() {
		switch(this.primitive) {
		case OCTET:
			return "octet";
		case USHORT:
			return "unsigned_short";
		case SHORT:
			return "short";
		case ULONG:
			return "unsigned_long";
		case LONG:
			return "long";
		case FLOAT:
			return "float";
		case DOUBLE:
			return "double";
		case BOOLEAN:
			return "boolean";
		}
		
		return "unknown";
	}
	
	private Primitive primitive;
}
