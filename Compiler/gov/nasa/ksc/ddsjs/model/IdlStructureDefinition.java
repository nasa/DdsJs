/**
 * @file IdlStructureDefinition.java
 * @brief Contains the class that models IDL data structure definitions.
 * @date 2014-08-12
 * @author Rolando J. Nieves
 */
package gov.nasa.ksc.ddsjs.model;

import java.util.List;
import java.util.ArrayList;

public class IdlStructureDefinition implements IdlStructFieldReceiver {

	private String structName;
	private List<IdlStructureField> fields;
	private IdlModuleDefinition owningModule;

	public IdlStructureDefinition(String structName, IdlModuleDefinition owningModule) {
		this.structName = structName;
		this.fields = new ArrayList<IdlStructureField>();
		this.owningModule = owningModule;
	}
	
	public void addStructureField(IdlStructureField newField) {
		this.fields.add(newField);
	}
	
	public String getStructName() {
		return this.structName;
	}
	
	public IdlModuleDefinition getOwningModule() {
		return this.owningModule;
	}
	
	public IdlStructureField[] getFields() {
		IdlStructureField[] result = new IdlStructureField[this.fields.size()];
		return this.fields.toArray(result);
	}
	
	@Override public String toString() {
		StringBuffer result = new StringBuffer();
		
		result.append("\tstruct ");
		result.append(this.structName);
		result.append(" {\n");
		
		for (IdlStructureField aField : this.fields) {
			result.append("\t\t");
			result.append(aField.toString());
			result.append("\n");
		}
		result.append("\t};");
		
		return result.toString();
	}
	
	public String getIdlTypeClass() {
		return "struct";
	}
}
