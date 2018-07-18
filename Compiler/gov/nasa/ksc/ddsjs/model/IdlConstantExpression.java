/**
 * @file IdlConstantExpression.java
 * @brief Contains the class that models an IDL constant value expression.
 * @date 2014-08-12
 * @author Rolando J. Nieves
 */
package gov.nasa.ksc.ddsjs.model;

import java.util.ArrayList;
import java.util.List;

public class IdlConstantExpression implements IdlTypeDefReceiver {
	private Object constantType;
	private String identifier;
	private Object constantValue;
	private IdlModuleDefinition owningModule;

	public IdlConstantExpression(Object constantType, String identifier, Object constantValue, IdlModuleDefinition owningModule) {
		this.constantType = constantType;
		this.identifier = identifier;
		this.constantValue = constantValue;
		this.owningModule = owningModule;
	}
	
	public Object getConstantType() {
		return this.constantType;
	}
	
	public IdlModuleDefinition getOwningModule() {
		return this.owningModule;
	}
	
	public void setTypeDefinition(Object typeDefinition) {
		this.constantType = typeDefinition;
	}
	
	public String getIdentifier() {
		return this.identifier;
	}
	
	public void setIdentifier(String identifier) {
		this.identifier = identifier;
	}
	
	public Object getConstantValue() {
		return this.constantValue;
	}
	
	public void setConstantValue(Object constantValue) {
		this.constantValue = constantValue;
	}
	
	@Override public String toString() {
		// StringBuffer result = new StringBuffer();
		
		// result.append("\tconst ");
		// result.append(this.constantType);
		// result.append(" ");
		// result.append(this.identifier);
		// result.append(" = ");
		// result.append(this.constantValue);
		// result.append(";");
		
		// return result.toString();
		ArrayList< String > moduleHierarchy = new ArrayList< String >();
		this.owningModule.buildModuleHierarchy((List< String >)moduleHierarchy);
		StringBuffer result = new StringBuffer();
		result.append("::");
		for (String aModuleName : moduleHierarchy) {
			result.append(aModuleName);
			result.append("::");
		}
		result.append(this.identifier);

		return result.toString();
	}
}
