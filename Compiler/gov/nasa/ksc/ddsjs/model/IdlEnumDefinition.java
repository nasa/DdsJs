/**
 * @file IdlEnumDefinition.java
 * @brief Contains the class that models IDL enumerated types.
 * @date 2014-08-12
 * @author Rolando J. Nieves
 */
package gov.nasa.ksc.ddsjs.model;
import java.util.List;
import java.util.ArrayList;

public class IdlEnumDefinition {
	
	private String enumName;
	private List<IdlConstantExpression> enumConstants;
	private int nextAutoNumbered;
	private IdlModuleDefinition owningModule;

	public IdlEnumDefinition(String enumName, IdlModuleDefinition owningModule) {
		this.enumName = enumName;
		this.owningModule = owningModule;
		this.enumConstants = new ArrayList<IdlConstantExpression>();
		this.nextAutoNumbered = 0;
	}
	
	public String getEnumName() {
		return this.enumName;
	}
	
	public IdlModuleDefinition getOwningModule() {
		return this.owningModule;
	}
	
	public Long nextAutoNumbered() {
		return new Long(this.nextAutoNumbered++);
	}
	
	public void addEnumConstant(String label, Long value) {
		this.enumConstants.add(new IdlConstantExpression(new IdlPrimitiveType(IdlPrimitiveType.Primitive.LONG), label, value, this.owningModule));
		if (this.nextAutoNumbered <= value.intValue()) {
			this.nextAutoNumbered = value.intValue() + 1;
		}
	}
	
	public IdlConstantExpression[] getEnumConstants() {
		IdlConstantExpression[] result = new IdlConstantExpression[enumConstants.size()];
		return this.enumConstants.toArray(result);
	}
	
	@Override public String toString() {
		StringBuffer result = new StringBuffer();
		
		result.append("\tenum ");
		result.append(this.enumName);
		result.append(" {\n");
		
		for (IdlConstantExpression aConst : this.enumConstants) {
			if (aConst != enumConstants.get(0)) {
				result.append(",\n");
			}
			result.append("\t\t");
			result.append(aConst.getIdentifier());
			result.append(" = ");
			result.append(aConst.getConstantValue());
		}
		result.append("\n\t};");
		
		return result.toString();
	}
	
	public String getIdlTypeClass() {
		return "enum";
	}
}
