/**
 * @file IdlUnionCase.java
 * @brief Contains the class that models IDL union case blocks.
 * @date 2014-08-12
 * @author Rolando J. Nieves
 */
package gov.nasa.ksc.ddsjs.model;

import java.util.ArrayList;
import java.util.List;

public class IdlUnionCase implements IdlStructFieldReceiver {

	private String caseLabel;
	private List<IdlStructureField> caseMembers;
	
	public IdlUnionCase(String caseLabel) {
		this.caseLabel = caseLabel;
		this.caseMembers = new ArrayList<IdlStructureField>();
	}
	
	public String getCaseLabel() {
		return this.caseLabel;
	}
	
	public void addStructureField(IdlStructureField newField) {
		this.caseMembers.add(newField);
	}
	
	public IdlStructureField[] getCaseMembers() {
		IdlStructureField[] result = new IdlStructureField[this.caseMembers.size()];
		return this.caseMembers.toArray(result);
	}
	
	@Override public String toString() {
		StringBuffer result = new StringBuffer();
		result.append("\tcase ");
		result.append(this.caseLabel);
		result.append(":\n");
		
		for (IdlStructureField aField : this.caseMembers) {
			result.append("\t\t");
			result.append(aField.toString());
			result.append("\n");
		}
		
		return result.toString();
	}
}
