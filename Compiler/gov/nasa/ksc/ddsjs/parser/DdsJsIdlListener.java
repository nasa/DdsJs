// Generated from DdsJsIdl.g4 by ANTLR 4.9.1
package gov.nasa.ksc.ddsjs.parser;
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link DdsJsIdlParser}.
 */
public interface DdsJsIdlListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link DdsJsIdlParser#translationUnit}.
	 * @param ctx the parse tree
	 */
	void enterTranslationUnit(DdsJsIdlParser.TranslationUnitContext ctx);
	/**
	 * Exit a parse tree produced by {@link DdsJsIdlParser#translationUnit}.
	 * @param ctx the parse tree
	 */
	void exitTranslationUnit(DdsJsIdlParser.TranslationUnitContext ctx);
	/**
	 * Enter a parse tree produced by {@link DdsJsIdlParser#unitContents}.
	 * @param ctx the parse tree
	 */
	void enterUnitContents(DdsJsIdlParser.UnitContentsContext ctx);
	/**
	 * Exit a parse tree produced by {@link DdsJsIdlParser#unitContents}.
	 * @param ctx the parse tree
	 */
	void exitUnitContents(DdsJsIdlParser.UnitContentsContext ctx);
	/**
	 * Enter a parse tree produced by {@link DdsJsIdlParser#module}.
	 * @param ctx the parse tree
	 */
	void enterModule(DdsJsIdlParser.ModuleContext ctx);
	/**
	 * Exit a parse tree produced by {@link DdsJsIdlParser#module}.
	 * @param ctx the parse tree
	 */
	void exitModule(DdsJsIdlParser.ModuleContext ctx);
	/**
	 * Enter a parse tree produced by {@link DdsJsIdlParser#moduleMember}.
	 * @param ctx the parse tree
	 */
	void enterModuleMember(DdsJsIdlParser.ModuleMemberContext ctx);
	/**
	 * Exit a parse tree produced by {@link DdsJsIdlParser#moduleMember}.
	 * @param ctx the parse tree
	 */
	void exitModuleMember(DdsJsIdlParser.ModuleMemberContext ctx);
	/**
	 * Enter a parse tree produced by the {@code includeCompilerDirective}
	 * labeled alternative in {@link DdsJsIdlParser#compilerDirective}.
	 * @param ctx the parse tree
	 */
	void enterIncludeCompilerDirective(DdsJsIdlParser.IncludeCompilerDirectiveContext ctx);
	/**
	 * Exit a parse tree produced by the {@code includeCompilerDirective}
	 * labeled alternative in {@link DdsJsIdlParser#compilerDirective}.
	 * @param ctx the parse tree
	 */
	void exitIncludeCompilerDirective(DdsJsIdlParser.IncludeCompilerDirectiveContext ctx);
	/**
	 * Enter a parse tree produced by the {@code nonArrayTypedef}
	 * labeled alternative in {@link DdsJsIdlParser#typeAlias}.
	 * @param ctx the parse tree
	 */
	void enterNonArrayTypedef(DdsJsIdlParser.NonArrayTypedefContext ctx);
	/**
	 * Exit a parse tree produced by the {@code nonArrayTypedef}
	 * labeled alternative in {@link DdsJsIdlParser#typeAlias}.
	 * @param ctx the parse tree
	 */
	void exitNonArrayTypedef(DdsJsIdlParser.NonArrayTypedefContext ctx);
	/**
	 * Enter a parse tree produced by the {@code arrayTypedef}
	 * labeled alternative in {@link DdsJsIdlParser#typeAlias}.
	 * @param ctx the parse tree
	 */
	void enterArrayTypedef(DdsJsIdlParser.ArrayTypedefContext ctx);
	/**
	 * Exit a parse tree produced by the {@code arrayTypedef}
	 * labeled alternative in {@link DdsJsIdlParser#typeAlias}.
	 * @param ctx the parse tree
	 */
	void exitArrayTypedef(DdsJsIdlParser.ArrayTypedefContext ctx);
	/**
	 * Enter a parse tree produced by the {@code sequenceTypedef}
	 * labeled alternative in {@link DdsJsIdlParser#typeDescription}.
	 * @param ctx the parse tree
	 */
	void enterSequenceTypedef(DdsJsIdlParser.SequenceTypedefContext ctx);
	/**
	 * Exit a parse tree produced by the {@code sequenceTypedef}
	 * labeled alternative in {@link DdsJsIdlParser#typeDescription}.
	 * @param ctx the parse tree
	 */
	void exitSequenceTypedef(DdsJsIdlParser.SequenceTypedefContext ctx);
	/**
	 * Enter a parse tree produced by the {@code stringTypedef}
	 * labeled alternative in {@link DdsJsIdlParser#typeDescription}.
	 * @param ctx the parse tree
	 */
	void enterStringTypedef(DdsJsIdlParser.StringTypedefContext ctx);
	/**
	 * Exit a parse tree produced by the {@code stringTypedef}
	 * labeled alternative in {@link DdsJsIdlParser#typeDescription}.
	 * @param ctx the parse tree
	 */
	void exitStringTypedef(DdsJsIdlParser.StringTypedefContext ctx);
	/**
	 * Enter a parse tree produced by the {@code primitiveTypedef}
	 * labeled alternative in {@link DdsJsIdlParser#typeDescription}.
	 * @param ctx the parse tree
	 */
	void enterPrimitiveTypedef(DdsJsIdlParser.PrimitiveTypedefContext ctx);
	/**
	 * Exit a parse tree produced by the {@code primitiveTypedef}
	 * labeled alternative in {@link DdsJsIdlParser#typeDescription}.
	 * @param ctx the parse tree
	 */
	void exitPrimitiveTypedef(DdsJsIdlParser.PrimitiveTypedefContext ctx);
	/**
	 * Enter a parse tree produced by the {@code customTypeDescription}
	 * labeled alternative in {@link DdsJsIdlParser#typeDescription}.
	 * @param ctx the parse tree
	 */
	void enterCustomTypeDescription(DdsJsIdlParser.CustomTypeDescriptionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code customTypeDescription}
	 * labeled alternative in {@link DdsJsIdlParser#typeDescription}.
	 * @param ctx the parse tree
	 */
	void exitCustomTypeDescription(DdsJsIdlParser.CustomTypeDescriptionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code relativeScopedName}
	 * labeled alternative in {@link DdsJsIdlParser#scopedName}.
	 * @param ctx the parse tree
	 */
	void enterRelativeScopedName(DdsJsIdlParser.RelativeScopedNameContext ctx);
	/**
	 * Exit a parse tree produced by the {@code relativeScopedName}
	 * labeled alternative in {@link DdsJsIdlParser#scopedName}.
	 * @param ctx the parse tree
	 */
	void exitRelativeScopedName(DdsJsIdlParser.RelativeScopedNameContext ctx);
	/**
	 * Enter a parse tree produced by the {@code absoluteScopedName}
	 * labeled alternative in {@link DdsJsIdlParser#scopedName}.
	 * @param ctx the parse tree
	 */
	void enterAbsoluteScopedName(DdsJsIdlParser.AbsoluteScopedNameContext ctx);
	/**
	 * Exit a parse tree produced by the {@code absoluteScopedName}
	 * labeled alternative in {@link DdsJsIdlParser#scopedName}.
	 * @param ctx the parse tree
	 */
	void exitAbsoluteScopedName(DdsJsIdlParser.AbsoluteScopedNameContext ctx);
	/**
	 * Enter a parse tree produced by {@link DdsJsIdlParser#constantDefinition}.
	 * @param ctx the parse tree
	 */
	void enterConstantDefinition(DdsJsIdlParser.ConstantDefinitionContext ctx);
	/**
	 * Exit a parse tree produced by {@link DdsJsIdlParser#constantDefinition}.
	 * @param ctx the parse tree
	 */
	void exitConstantDefinition(DdsJsIdlParser.ConstantDefinitionContext ctx);
	/**
	 * Enter a parse tree produced by {@link DdsJsIdlParser#constantValue}.
	 * @param ctx the parse tree
	 */
	void enterConstantValue(DdsJsIdlParser.ConstantValueContext ctx);
	/**
	 * Exit a parse tree produced by {@link DdsJsIdlParser#constantValue}.
	 * @param ctx the parse tree
	 */
	void exitConstantValue(DdsJsIdlParser.ConstantValueContext ctx);
	/**
	 * Enter a parse tree produced by {@link DdsJsIdlParser#enumDefinition}.
	 * @param ctx the parse tree
	 */
	void enterEnumDefinition(DdsJsIdlParser.EnumDefinitionContext ctx);
	/**
	 * Exit a parse tree produced by {@link DdsJsIdlParser#enumDefinition}.
	 * @param ctx the parse tree
	 */
	void exitEnumDefinition(DdsJsIdlParser.EnumDefinitionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code manualNumbered}
	 * labeled alternative in {@link DdsJsIdlParser#enumLiteral}.
	 * @param ctx the parse tree
	 */
	void enterManualNumbered(DdsJsIdlParser.ManualNumberedContext ctx);
	/**
	 * Exit a parse tree produced by the {@code manualNumbered}
	 * labeled alternative in {@link DdsJsIdlParser#enumLiteral}.
	 * @param ctx the parse tree
	 */
	void exitManualNumbered(DdsJsIdlParser.ManualNumberedContext ctx);
	/**
	 * Enter a parse tree produced by the {@code autoNumbered}
	 * labeled alternative in {@link DdsJsIdlParser#enumLiteral}.
	 * @param ctx the parse tree
	 */
	void enterAutoNumbered(DdsJsIdlParser.AutoNumberedContext ctx);
	/**
	 * Exit a parse tree produced by the {@code autoNumbered}
	 * labeled alternative in {@link DdsJsIdlParser#enumLiteral}.
	 * @param ctx the parse tree
	 */
	void exitAutoNumbered(DdsJsIdlParser.AutoNumberedContext ctx);
	/**
	 * Enter a parse tree produced by {@link DdsJsIdlParser#topicDefinition}.
	 * @param ctx the parse tree
	 */
	void enterTopicDefinition(DdsJsIdlParser.TopicDefinitionContext ctx);
	/**
	 * Exit a parse tree produced by {@link DdsJsIdlParser#topicDefinition}.
	 * @param ctx the parse tree
	 */
	void exitTopicDefinition(DdsJsIdlParser.TopicDefinitionContext ctx);
	/**
	 * Enter a parse tree produced by {@link DdsJsIdlParser#dataStructureDefinition}.
	 * @param ctx the parse tree
	 */
	void enterDataStructureDefinition(DdsJsIdlParser.DataStructureDefinitionContext ctx);
	/**
	 * Exit a parse tree produced by {@link DdsJsIdlParser#dataStructureDefinition}.
	 * @param ctx the parse tree
	 */
	void exitDataStructureDefinition(DdsJsIdlParser.DataStructureDefinitionContext ctx);
	/**
	 * Enter a parse tree produced by {@link DdsJsIdlParser#valuetypeDefinition}.
	 * @param ctx the parse tree
	 */
	void enterValuetypeDefinition(DdsJsIdlParser.ValuetypeDefinitionContext ctx);
	/**
	 * Exit a parse tree produced by {@link DdsJsIdlParser#valuetypeDefinition}.
	 * @param ctx the parse tree
	 */
	void exitValuetypeDefinition(DdsJsIdlParser.ValuetypeDefinitionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code nonArrayMemberDefinition}
	 * labeled alternative in {@link DdsJsIdlParser#memberDefinition}.
	 * @param ctx the parse tree
	 */
	void enterNonArrayMemberDefinition(DdsJsIdlParser.NonArrayMemberDefinitionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code nonArrayMemberDefinition}
	 * labeled alternative in {@link DdsJsIdlParser#memberDefinition}.
	 * @param ctx the parse tree
	 */
	void exitNonArrayMemberDefinition(DdsJsIdlParser.NonArrayMemberDefinitionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code arrayMemberDefinition}
	 * labeled alternative in {@link DdsJsIdlParser#memberDefinition}.
	 * @param ctx the parse tree
	 */
	void enterArrayMemberDefinition(DdsJsIdlParser.ArrayMemberDefinitionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code arrayMemberDefinition}
	 * labeled alternative in {@link DdsJsIdlParser#memberDefinition}.
	 * @param ctx the parse tree
	 */
	void exitArrayMemberDefinition(DdsJsIdlParser.ArrayMemberDefinitionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code constDimArrayMemberDefinition}
	 * labeled alternative in {@link DdsJsIdlParser#memberDefinition}.
	 * @param ctx the parse tree
	 */
	void enterConstDimArrayMemberDefinition(DdsJsIdlParser.ConstDimArrayMemberDefinitionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code constDimArrayMemberDefinition}
	 * labeled alternative in {@link DdsJsIdlParser#memberDefinition}.
	 * @param ctx the parse tree
	 */
	void exitConstDimArrayMemberDefinition(DdsJsIdlParser.ConstDimArrayMemberDefinitionContext ctx);
	/**
	 * Enter a parse tree produced by {@link DdsJsIdlParser#unionDefinition}.
	 * @param ctx the parse tree
	 */
	void enterUnionDefinition(DdsJsIdlParser.UnionDefinitionContext ctx);
	/**
	 * Exit a parse tree produced by {@link DdsJsIdlParser#unionDefinition}.
	 * @param ctx the parse tree
	 */
	void exitUnionDefinition(DdsJsIdlParser.UnionDefinitionContext ctx);
	/**
	 * Enter a parse tree produced by {@link DdsJsIdlParser#unionCaseDefinition}.
	 * @param ctx the parse tree
	 */
	void enterUnionCaseDefinition(DdsJsIdlParser.UnionCaseDefinitionContext ctx);
	/**
	 * Exit a parse tree produced by {@link DdsJsIdlParser#unionCaseDefinition}.
	 * @param ctx the parse tree
	 */
	void exitUnionCaseDefinition(DdsJsIdlParser.UnionCaseDefinitionContext ctx);
	/**
	 * Enter a parse tree produced by {@link DdsJsIdlParser#sequenceTypeDescription}.
	 * @param ctx the parse tree
	 */
	void enterSequenceTypeDescription(DdsJsIdlParser.SequenceTypeDescriptionContext ctx);
	/**
	 * Exit a parse tree produced by {@link DdsJsIdlParser#sequenceTypeDescription}.
	 * @param ctx the parse tree
	 */
	void exitSequenceTypeDescription(DdsJsIdlParser.SequenceTypeDescriptionContext ctx);
	/**
	 * Enter a parse tree produced by {@link DdsJsIdlParser#stringTypeDescription}.
	 * @param ctx the parse tree
	 */
	void enterStringTypeDescription(DdsJsIdlParser.StringTypeDescriptionContext ctx);
	/**
	 * Exit a parse tree produced by {@link DdsJsIdlParser#stringTypeDescription}.
	 * @param ctx the parse tree
	 */
	void exitStringTypeDescription(DdsJsIdlParser.StringTypeDescriptionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code sizeAsConstantDefinition}
	 * labeled alternative in {@link DdsJsIdlParser#sizeDefinition}.
	 * @param ctx the parse tree
	 */
	void enterSizeAsConstantDefinition(DdsJsIdlParser.SizeAsConstantDefinitionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code sizeAsConstantDefinition}
	 * labeled alternative in {@link DdsJsIdlParser#sizeDefinition}.
	 * @param ctx the parse tree
	 */
	void exitSizeAsConstantDefinition(DdsJsIdlParser.SizeAsConstantDefinitionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code sizeAsLiteralValue}
	 * labeled alternative in {@link DdsJsIdlParser#sizeDefinition}.
	 * @param ctx the parse tree
	 */
	void enterSizeAsLiteralValue(DdsJsIdlParser.SizeAsLiteralValueContext ctx);
	/**
	 * Exit a parse tree produced by the {@code sizeAsLiteralValue}
	 * labeled alternative in {@link DdsJsIdlParser#sizeDefinition}.
	 * @param ctx the parse tree
	 */
	void exitSizeAsLiteralValue(DdsJsIdlParser.SizeAsLiteralValueContext ctx);
	/**
	 * Enter a parse tree produced by {@link DdsJsIdlParser#primitiveTypeDescription}.
	 * @param ctx the parse tree
	 */
	void enterPrimitiveTypeDescription(DdsJsIdlParser.PrimitiveTypeDescriptionContext ctx);
	/**
	 * Exit a parse tree produced by {@link DdsJsIdlParser#primitiveTypeDescription}.
	 * @param ctx the parse tree
	 */
	void exitPrimitiveTypeDescription(DdsJsIdlParser.PrimitiveTypeDescriptionContext ctx);
	/**
	 * Enter a parse tree produced by {@link DdsJsIdlParser#intTypeDescription}.
	 * @param ctx the parse tree
	 */
	void enterIntTypeDescription(DdsJsIdlParser.IntTypeDescriptionContext ctx);
	/**
	 * Exit a parse tree produced by {@link DdsJsIdlParser#intTypeDescription}.
	 * @param ctx the parse tree
	 */
	void exitIntTypeDescription(DdsJsIdlParser.IntTypeDescriptionContext ctx);
	/**
	 * Enter a parse tree produced by {@link DdsJsIdlParser#floatTypeDescription}.
	 * @param ctx the parse tree
	 */
	void enterFloatTypeDescription(DdsJsIdlParser.FloatTypeDescriptionContext ctx);
	/**
	 * Exit a parse tree produced by {@link DdsJsIdlParser#floatTypeDescription}.
	 * @param ctx the parse tree
	 */
	void exitFloatTypeDescription(DdsJsIdlParser.FloatTypeDescriptionContext ctx);
	/**
	 * Enter a parse tree produced by {@link DdsJsIdlParser#booleanTypeDescription}.
	 * @param ctx the parse tree
	 */
	void enterBooleanTypeDescription(DdsJsIdlParser.BooleanTypeDescriptionContext ctx);
	/**
	 * Exit a parse tree produced by {@link DdsJsIdlParser#booleanTypeDescription}.
	 * @param ctx the parse tree
	 */
	void exitBooleanTypeDescription(DdsJsIdlParser.BooleanTypeDescriptionContext ctx);
	/**
	 * Enter a parse tree produced by {@link DdsJsIdlParser#integerValue}.
	 * @param ctx the parse tree
	 */
	void enterIntegerValue(DdsJsIdlParser.IntegerValueContext ctx);
	/**
	 * Exit a parse tree produced by {@link DdsJsIdlParser#integerValue}.
	 * @param ctx the parse tree
	 */
	void exitIntegerValue(DdsJsIdlParser.IntegerValueContext ctx);
}