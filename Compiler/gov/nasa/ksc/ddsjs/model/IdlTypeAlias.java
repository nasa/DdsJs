/**
 * @file IdlTypeAlias.java
 * @brief Contains the definition of an IDL type alias (a.k.a. typedef)
 * @date 2014-08-10
 * @author Rolando J. Nieves
 */
package gov.nasa.ksc.ddsjs.model;

public class IdlTypeAlias implements IdlTypeDefReceiver {

	public IdlTypeAlias(String aliasIdentifier, Object aliasedType) {
		this.aliasIdentifier = aliasIdentifier;
		this.aliasedType = aliasedType;
	}
	
	public String getAliasIdentifier() {
		return this.aliasIdentifier;
	}
	
	public Object getAliasedType() {
		return this.aliasedType;
	}
	
	public void setTypeDefinition(Object typeDefinition) {
		this.aliasedType = typeDefinition;
	}
	
	private String aliasIdentifier;
	private Object aliasedType;
}
