/**
 * @file IdlModuleDefinition.java
 * @brief Contains the class that models IDL module definitions.
 * @date 2014-08-11
 * @author Rolando J. Nieves
 */
package gov.nasa.ksc.ddsjs.model;

import java.util.List;
import java.util.Map;
import java.util.HashMap;

public class IdlModuleDefinition {

	public IdlModuleDefinition(String moduleName, IdlModuleDefinition parentModule) {
		this.moduleName = moduleName;
		this.topicDefinitions = new HashMap<String, IdlStructureDefinition>();
		this.typeAliases = new HashMap<String, IdlTypeAlias>();
		this.constantDefinitions = new HashMap<String, IdlConstantExpression>();
		this.enumDefinitions = new HashMap<String, IdlEnumDefinition>();
		this.unionDefinitions = new HashMap<String, IdlUnionDefinition>();
		this.childModules = new HashMap<String, IdlModuleDefinition>();
		this.parentModule = parentModule;
	}
	
	public String getModuleName() {
		return this.moduleName;
	}
	
	public boolean isModuleNameDds() {
		return this.moduleName.equals("DDS");
	};
	
	public IdlModuleDefinition getParentModule() {
		return this.parentModule;
	}
	
	public List<String> buildModuleHierarchy(List<String> result) {
		result.add(0, this.getModuleName());
		if (this.parentModule != null) {
			this.parentModule.buildModuleHierarchy(result);
		}
		
		return result;
	}
	
	public void addTopicDefinition(IdlStructureDefinition newTopic) {
		this.topicDefinitions.put(newTopic.getStructName(), newTopic);
	}
	
	public IdlStructureDefinition[] getTopicDefinitions() {
		IdlStructureDefinition[] result = new IdlStructureDefinition[this.topicDefinitions.size()];
		return this.topicDefinitions.values().toArray(result);
	}
	
	public void addTypeAlias(IdlTypeAlias newAlias) {
		this.typeAliases.put(newAlias.getAliasIdentifier(), newAlias);
	}
	
	public Object resolveTypeName(String typeName) {
		Object result = null;
		
		if ((result = this.topicDefinitions.get(typeName)) != null) {
			return result;
		} else if ((result = this.enumDefinitions.get(typeName)) != null) {
			return result;
		} else if ((result = this.unionDefinitions.get(typeName)) != null) {
			return result;
		} else if (this.typeAliases.containsKey(typeName)) {
			return this.typeAliases.get(typeName).getAliasedType();
		} else if (this.parentModule != null) {
			result = this.parentModule.resolveTypeName(typeName);
		}
		
		return result;
	}
	
	public IdlModuleDefinition resolveModuleName(String moduleName, boolean childrenOnly) {
		IdlModuleDefinition result = null;
		
		if (moduleName.equals(this.moduleName) && (childrenOnly == false)) {
			result = this;
		} else {
			result = this.childModules.get(moduleName);
			if ((result == null) && (this.parentModule != null) && (childrenOnly == false)) {
				result = this.parentModule.resolveModuleName(moduleName, false);
			}
		}
		
		return result;
	}
	
	public IdlConstantExpression resolveConstantName(String constantName) {
		IdlConstantExpression result = null;
		
		if ((result = this.constantDefinitions.get(constantName)) == null) {
			result = this.parentModule.resolveConstantName(constantName);
		}
		
		return result;
	}
	
	public IdlConstantExpression[] getConstantExpressions() {
		IdlConstantExpression[] result = new IdlConstantExpression[this.constantDefinitions.size()];
		return this.constantDefinitions.values().toArray(result);
	}
	
	public void registerChildModule(IdlModuleDefinition aModule) {
		if (aModule != this) {
			this.childModules.put(aModule.moduleName, aModule);
		}
	}
	
	public IdlModuleDefinition[] getChildModules() {
		IdlModuleDefinition[] result = new IdlModuleDefinition[this.childModules.size()];
		return this.childModules.values().toArray(result);
	}
	
	public void addConstantDefinition(IdlConstantExpression newConstant) {
		this.constantDefinitions.put(newConstant.getIdentifier(), newConstant);
	}
	
	public void addEnumDefinition(IdlEnumDefinition newEnum) {
		this.enumDefinitions.put(newEnum.getEnumName(), newEnum);
	}
	
	public IdlEnumDefinition[] getEnumDefinitions() {
		IdlEnumDefinition[] result = new IdlEnumDefinition[this.enumDefinitions.size()];
		return this.enumDefinitions.values().toArray(result);
	}
	
	public void addUnionDefinition(IdlUnionDefinition newUnion) {
		this.unionDefinitions.put(newUnion.getUnionName(), newUnion);
	}
	
	public IdlUnionDefinition[] getUnionDefinitions() {
		IdlUnionDefinition[] result = new IdlUnionDefinition[this.unionDefinitions.size()];
		return this.unionDefinitions.values().toArray(result);
	}
	
	@Override public String toString() {
		StringBuffer result = new StringBuffer();
		
		result.append("module ");
		result.append(this.moduleName);
		result.append(" {\n");
		for (IdlEnumDefinition anEnum : this.enumDefinitions.values()) {
			result.append(anEnum.toString());
			result.append("\n");
		}
		for (IdlUnionDefinition aUnion : this.unionDefinitions.values()) {
			result.append(aUnion.toString());
			result.append("\n");
		}
		for (IdlConstantExpression aConst : this.constantDefinitions.values()) {
			result.append(aConst.toString());
			result.append("\n");
		}
		for (IdlStructureDefinition aTopic : this.topicDefinitions.values()) {
			result.append(aTopic.toString());
			result.append("\n");
		}
		for (IdlModuleDefinition aModule : this.childModules.values()) {
			result.append(aModule.toString());
		}
		result.append("}\n");
		
		return result.toString();
	}
	
	private String moduleName;
	private Map<String, IdlStructureDefinition> topicDefinitions;
	private Map<String, IdlTypeAlias> typeAliases;
	private Map<String, IdlConstantExpression> constantDefinitions;
	private Map<String, IdlEnumDefinition> enumDefinitions;
	private Map<String, IdlUnionDefinition> unionDefinitions;
	private Map<String, IdlModuleDefinition> childModules;
	private IdlModuleDefinition parentModule;
}
