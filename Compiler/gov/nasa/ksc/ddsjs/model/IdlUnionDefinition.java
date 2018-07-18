/**
 * @file IdlUnionDefinition.java
 * @brief Contains the class that models IDL union definitions.
 * @date 2014-08-12
 * @author Rolando J. Nieves
 */
package gov.nasa.ksc.ddsjs.model;

import java.util.HashMap;
import java.util.Map;

public class IdlUnionDefinition implements IdlTypeDefReceiver {

	private String unionName;
	private IdlEnumDefinition enumDiscriminator;
	private Map<String, IdlUnionCase> unionMembers;
	private IdlModuleDefinition owningModule;
	
	public IdlUnionDefinition(String unionName, IdlEnumDefinition enumDiscriminator, IdlModuleDefinition owningModule) {
		this.unionName = unionName;
		this.enumDiscriminator = enumDiscriminator;
		this.unionMembers = new HashMap<String, IdlUnionCase >();
		this.owningModule = owningModule;
	}
	
	public String getUnionName() {
		return this.unionName;
	}
	
	public IdlModuleDefinition getOwningModule() {
		return this.owningModule;
	}
	
	public IdlEnumDefinition getEnumDiscriminator() {
		return this.enumDiscriminator;
	}
	
	public void setTypeDefinition(Object typeDefinition) {
		if (!(typeDefinition instanceof IdlEnumDefinition)) {
			throw new RuntimeException("Currently only enumerated types are supported as union discriminator types.");
		} else {
			this.enumDiscriminator = (IdlEnumDefinition)typeDefinition;
		}
	}
	
	public IdlUnionCase[] getUnionCases() {
		IdlUnionCase[] result = new IdlUnionCase[this.unionMembers.size()];
		return this.unionMembers.values().toArray(result);
	}
	
	public void addUnionCase(IdlUnionCase newCase) {
		this.unionMembers.put(newCase.getCaseLabel(), newCase);
	}
	
	@Override public String toString() {
		StringBuffer result = new StringBuffer();
		
		result.append("\tunion ");
		result.append(this.unionName);
		result.append(" switch(");
		result.append(this.enumDiscriminator.getEnumName());
		result.append(") {\n");
		
		for (IdlUnionCase aCase : this.unionMembers.values()) {
			result.append(aCase.toString());
			result.append("\n");
		}
		result.append("\t};");
		
		return result.toString();
	}
	
	public String getIdlTypeClass() {
		return "union";
	}
}
