// Generated from src/parser/DdsJsIdl.g4 by ANTLR 4.13.1

import {ParseTreeVisitor} from 'antlr4';


// @ts-nocheck


import { TranslationUnitContext } from "./DdsJsIdlParser";
import { ModuleContext } from "./DdsJsIdlParser";
import { DataStructureModuleMemberContext } from "./DdsJsIdlParser";
import { TypeAliasModuleMemberContext } from "./DdsJsIdlParser";
import { ConstantModuleMemberContext } from "./DdsJsIdlParser";
import { EnumModuleMemberContext } from "./DdsJsIdlParser";
import { UnionModuleMemberContext } from "./DdsJsIdlParser";
import { SubmoduleModuleMemberContext } from "./DdsJsIdlParser";
import { NonArrayTypedefContext } from "./DdsJsIdlParser";
import { ArrayTypedefContext } from "./DdsJsIdlParser";
import { SequenceTypeDescContext } from "./DdsJsIdlParser";
import { StringTypeDescContext } from "./DdsJsIdlParser";
import { PrimitiveTypeDescContext } from "./DdsJsIdlParser";
import { CustomTypeNameDescContext } from "./DdsJsIdlParser";
import { RelativeScopedNameContext } from "./DdsJsIdlParser";
import { AbsoluteScopedNameContext } from "./DdsJsIdlParser";
import { PrimitiveValueConstantContext } from "./DdsJsIdlParser";
import { StringValueConstantContext } from "./DdsJsIdlParser";
import { CustomTypeValueConstantContext } from "./DdsJsIdlParser";
import { EnumDefinitionContext } from "./DdsJsIdlParser";
import { ManualNumberedContext } from "./DdsJsIdlParser";
import { AutoNumberedContext } from "./DdsJsIdlParser";
import { DataStructureDefinitionContext } from "./DdsJsIdlParser";
import { NonArrayMemberDefinitionContext } from "./DdsJsIdlParser";
import { ArrayMemberDefinitionContext } from "./DdsJsIdlParser";
import { UnionDefinitionContext } from "./DdsJsIdlParser";
import { IntUnionDiscriminatorContext } from "./DdsJsIdlParser";
import { BooleanUnionDiscriminatorContext } from "./DdsJsIdlParser";
import { CharUnionDiscriminatorContext } from "./DdsJsIdlParser";
import { CustomTypeUnionDiscriminatorContext } from "./DdsJsIdlParser";
import { SpecificUnionMemberDefinitionContext } from "./DdsJsIdlParser";
import { DefaultUnionMemberDefinitionContext } from "./DdsJsIdlParser";
import { UnionCaseLabelContext } from "./DdsJsIdlParser";
import { UnionIdentifierConstantExprContext } from "./DdsJsIdlParser";
import { UnionIntegerConstantExprContext } from "./DdsJsIdlParser";
import { UnionBooleanConstantExprContext } from "./DdsJsIdlParser";
import { UnionCharConstantExprContext } from "./DdsJsIdlParser";
import { UnboundedSequenceTypeContext } from "./DdsJsIdlParser";
import { BoundedSequenceTypeContext } from "./DdsJsIdlParser";
import { UnboundedStringTypeContext } from "./DdsJsIdlParser";
import { BoundedStringTypeContext } from "./DdsJsIdlParser";
import { ArrayDimensionsContext } from "./DdsJsIdlParser";
import { SizeAsConstantDefinitionContext } from "./DdsJsIdlParser";
import { SizeAsLiteralValueContext } from "./DdsJsIdlParser";
import { IntPrimitiveTypeContext } from "./DdsJsIdlParser";
import { FloatPrimitiveTypeContext } from "./DdsJsIdlParser";
import { BooleanPrimitiveTypeContext } from "./DdsJsIdlParser";
import { CharPrimitiveTypeContext } from "./DdsJsIdlParser";
import { OctetIntTypeContext } from "./DdsJsIdlParser";
import { LongIntTypeContext } from "./DdsJsIdlParser";
import { LongLongIntTypeContext } from "./DdsJsIdlParser";
import { ShortIntTypeContext } from "./DdsJsIdlParser";
import { UnsignedLongIntTypeContext } from "./DdsJsIdlParser";
import { UnsignedLongLongIntTypeContext } from "./DdsJsIdlParser";
import { UnsignedShortIntTypeContext } from "./DdsJsIdlParser";
import { SinglePrecisionFloatTypeContext } from "./DdsJsIdlParser";
import { DoublePrecisionFloatTypeContext } from "./DdsJsIdlParser";
import { BooleanTypeContext } from "./DdsJsIdlParser";
import { CharTypeContext } from "./DdsJsIdlParser";
import { IntLiteralValueContext } from "./DdsJsIdlParser";
import { CharLiteralValueContext } from "./DdsJsIdlParser";
import { StringLiteralValueContext } from "./DdsJsIdlParser";
import { FloatLiteralValueContext } from "./DdsJsIdlParser";
import { RealLiteralValueContext } from "./DdsJsIdlParser";
import { BooleanLiteralValueContext } from "./DdsJsIdlParser";
import { CharLiteralContext } from "./DdsJsIdlParser";
import { StringLiteralContext } from "./DdsJsIdlParser";
import { BooleanTrueLiteralContext } from "./DdsJsIdlParser";
import { BooleanFalseLiteralContext } from "./DdsJsIdlParser";
import { SignedIntegerLiteralContext } from "./DdsJsIdlParser";
import { OctalIntegerLiteralContext } from "./DdsJsIdlParser";
import { HexIntegerLiteralContext } from "./DdsJsIdlParser";
import { PositiveIntegerContext } from "./DdsJsIdlParser";
import { NegativeIntegerContext } from "./DdsJsIdlParser";
import { FloatIntExponentContext } from "./DdsJsIdlParser";
import { FloatIntFracExponentContext } from "./DdsJsIdlParser";
import { FloatFracExponentContext } from "./DdsJsIdlParser";
import { FloatFracOnlyContext } from "./DdsJsIdlParser";
import { FixedPtIntFracContext } from "./DdsJsIdlParser";
import { FixedPtIntOnlyContext } from "./DdsJsIdlParser";
import { FixedPtFracOnlyContext } from "./DdsJsIdlParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `DdsJsIdlParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export default class DdsJsIdlVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `DdsJsIdlParser.translationUnit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTranslationUnit?: (ctx: TranslationUnitContext) => Result;
	/**
	 * Visit a parse tree produced by `DdsJsIdlParser.module`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModule?: (ctx: ModuleContext) => Result;
	/**
	 * Visit a parse tree produced by the `dataStructureModuleMember`
	 * labeled alternative in `DdsJsIdlParser.moduleMember`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDataStructureModuleMember?: (ctx: DataStructureModuleMemberContext) => Result;
	/**
	 * Visit a parse tree produced by the `typeAliasModuleMember`
	 * labeled alternative in `DdsJsIdlParser.moduleMember`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeAliasModuleMember?: (ctx: TypeAliasModuleMemberContext) => Result;
	/**
	 * Visit a parse tree produced by the `constantModuleMember`
	 * labeled alternative in `DdsJsIdlParser.moduleMember`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstantModuleMember?: (ctx: ConstantModuleMemberContext) => Result;
	/**
	 * Visit a parse tree produced by the `enumModuleMember`
	 * labeled alternative in `DdsJsIdlParser.moduleMember`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumModuleMember?: (ctx: EnumModuleMemberContext) => Result;
	/**
	 * Visit a parse tree produced by the `unionModuleMember`
	 * labeled alternative in `DdsJsIdlParser.moduleMember`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnionModuleMember?: (ctx: UnionModuleMemberContext) => Result;
	/**
	 * Visit a parse tree produced by the `submoduleModuleMember`
	 * labeled alternative in `DdsJsIdlParser.moduleMember`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubmoduleModuleMember?: (ctx: SubmoduleModuleMemberContext) => Result;
	/**
	 * Visit a parse tree produced by the `nonArrayTypedef`
	 * labeled alternative in `DdsJsIdlParser.typeAlias`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNonArrayTypedef?: (ctx: NonArrayTypedefContext) => Result;
	/**
	 * Visit a parse tree produced by the `arrayTypedef`
	 * labeled alternative in `DdsJsIdlParser.typeAlias`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayTypedef?: (ctx: ArrayTypedefContext) => Result;
	/**
	 * Visit a parse tree produced by the `sequenceTypeDesc`
	 * labeled alternative in `DdsJsIdlParser.typeDescription`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSequenceTypeDesc?: (ctx: SequenceTypeDescContext) => Result;
	/**
	 * Visit a parse tree produced by the `stringTypeDesc`
	 * labeled alternative in `DdsJsIdlParser.typeDescription`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringTypeDesc?: (ctx: StringTypeDescContext) => Result;
	/**
	 * Visit a parse tree produced by the `primitiveTypeDesc`
	 * labeled alternative in `DdsJsIdlParser.typeDescription`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimitiveTypeDesc?: (ctx: PrimitiveTypeDescContext) => Result;
	/**
	 * Visit a parse tree produced by the `customTypeNameDesc`
	 * labeled alternative in `DdsJsIdlParser.typeDescription`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCustomTypeNameDesc?: (ctx: CustomTypeNameDescContext) => Result;
	/**
	 * Visit a parse tree produced by the `relativeScopedName`
	 * labeled alternative in `DdsJsIdlParser.scopedName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRelativeScopedName?: (ctx: RelativeScopedNameContext) => Result;
	/**
	 * Visit a parse tree produced by the `absoluteScopedName`
	 * labeled alternative in `DdsJsIdlParser.scopedName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAbsoluteScopedName?: (ctx: AbsoluteScopedNameContext) => Result;
	/**
	 * Visit a parse tree produced by the `primitiveValueConstant`
	 * labeled alternative in `DdsJsIdlParser.constantDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimitiveValueConstant?: (ctx: PrimitiveValueConstantContext) => Result;
	/**
	 * Visit a parse tree produced by the `stringValueConstant`
	 * labeled alternative in `DdsJsIdlParser.constantDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringValueConstant?: (ctx: StringValueConstantContext) => Result;
	/**
	 * Visit a parse tree produced by the `customTypeValueConstant`
	 * labeled alternative in `DdsJsIdlParser.constantDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCustomTypeValueConstant?: (ctx: CustomTypeValueConstantContext) => Result;
	/**
	 * Visit a parse tree produced by `DdsJsIdlParser.enumDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumDefinition?: (ctx: EnumDefinitionContext) => Result;
	/**
	 * Visit a parse tree produced by the `manualNumbered`
	 * labeled alternative in `DdsJsIdlParser.enumLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitManualNumbered?: (ctx: ManualNumberedContext) => Result;
	/**
	 * Visit a parse tree produced by the `autoNumbered`
	 * labeled alternative in `DdsJsIdlParser.enumLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAutoNumbered?: (ctx: AutoNumberedContext) => Result;
	/**
	 * Visit a parse tree produced by `DdsJsIdlParser.dataStructureDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDataStructureDefinition?: (ctx: DataStructureDefinitionContext) => Result;
	/**
	 * Visit a parse tree produced by the `nonArrayMemberDefinition`
	 * labeled alternative in `DdsJsIdlParser.memberDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNonArrayMemberDefinition?: (ctx: NonArrayMemberDefinitionContext) => Result;
	/**
	 * Visit a parse tree produced by the `arrayMemberDefinition`
	 * labeled alternative in `DdsJsIdlParser.memberDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayMemberDefinition?: (ctx: ArrayMemberDefinitionContext) => Result;
	/**
	 * Visit a parse tree produced by `DdsJsIdlParser.unionDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnionDefinition?: (ctx: UnionDefinitionContext) => Result;
	/**
	 * Visit a parse tree produced by the `intUnionDiscriminator`
	 * labeled alternative in `DdsJsIdlParser.unionDiscriminator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntUnionDiscriminator?: (ctx: IntUnionDiscriminatorContext) => Result;
	/**
	 * Visit a parse tree produced by the `booleanUnionDiscriminator`
	 * labeled alternative in `DdsJsIdlParser.unionDiscriminator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBooleanUnionDiscriminator?: (ctx: BooleanUnionDiscriminatorContext) => Result;
	/**
	 * Visit a parse tree produced by the `charUnionDiscriminator`
	 * labeled alternative in `DdsJsIdlParser.unionDiscriminator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCharUnionDiscriminator?: (ctx: CharUnionDiscriminatorContext) => Result;
	/**
	 * Visit a parse tree produced by the `customTypeUnionDiscriminator`
	 * labeled alternative in `DdsJsIdlParser.unionDiscriminator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCustomTypeUnionDiscriminator?: (ctx: CustomTypeUnionDiscriminatorContext) => Result;
	/**
	 * Visit a parse tree produced by the `specificUnionMemberDefinition`
	 * labeled alternative in `DdsJsIdlParser.unionMemberDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSpecificUnionMemberDefinition?: (ctx: SpecificUnionMemberDefinitionContext) => Result;
	/**
	 * Visit a parse tree produced by the `defaultUnionMemberDefinition`
	 * labeled alternative in `DdsJsIdlParser.unionMemberDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefaultUnionMemberDefinition?: (ctx: DefaultUnionMemberDefinitionContext) => Result;
	/**
	 * Visit a parse tree produced by `DdsJsIdlParser.unionCaseLabel`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnionCaseLabel?: (ctx: UnionCaseLabelContext) => Result;
	/**
	 * Visit a parse tree produced by the `unionIdentifierConstantExpr`
	 * labeled alternative in `DdsJsIdlParser.unionCaseConstantExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnionIdentifierConstantExpr?: (ctx: UnionIdentifierConstantExprContext) => Result;
	/**
	 * Visit a parse tree produced by the `unionIntegerConstantExpr`
	 * labeled alternative in `DdsJsIdlParser.unionCaseConstantExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnionIntegerConstantExpr?: (ctx: UnionIntegerConstantExprContext) => Result;
	/**
	 * Visit a parse tree produced by the `unionBooleanConstantExpr`
	 * labeled alternative in `DdsJsIdlParser.unionCaseConstantExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnionBooleanConstantExpr?: (ctx: UnionBooleanConstantExprContext) => Result;
	/**
	 * Visit a parse tree produced by the `unionCharConstantExpr`
	 * labeled alternative in `DdsJsIdlParser.unionCaseConstantExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnionCharConstantExpr?: (ctx: UnionCharConstantExprContext) => Result;
	/**
	 * Visit a parse tree produced by the `unboundedSequenceType`
	 * labeled alternative in `DdsJsIdlParser.sequenceType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnboundedSequenceType?: (ctx: UnboundedSequenceTypeContext) => Result;
	/**
	 * Visit a parse tree produced by the `boundedSequenceType`
	 * labeled alternative in `DdsJsIdlParser.sequenceType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBoundedSequenceType?: (ctx: BoundedSequenceTypeContext) => Result;
	/**
	 * Visit a parse tree produced by the `unboundedStringType`
	 * labeled alternative in `DdsJsIdlParser.stringType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnboundedStringType?: (ctx: UnboundedStringTypeContext) => Result;
	/**
	 * Visit a parse tree produced by the `boundedStringType`
	 * labeled alternative in `DdsJsIdlParser.stringType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBoundedStringType?: (ctx: BoundedStringTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `DdsJsIdlParser.arrayDimensions`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayDimensions?: (ctx: ArrayDimensionsContext) => Result;
	/**
	 * Visit a parse tree produced by the `sizeAsConstantDefinition`
	 * labeled alternative in `DdsJsIdlParser.sizeDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSizeAsConstantDefinition?: (ctx: SizeAsConstantDefinitionContext) => Result;
	/**
	 * Visit a parse tree produced by the `sizeAsLiteralValue`
	 * labeled alternative in `DdsJsIdlParser.sizeDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSizeAsLiteralValue?: (ctx: SizeAsLiteralValueContext) => Result;
	/**
	 * Visit a parse tree produced by the `intPrimitiveType`
	 * labeled alternative in `DdsJsIdlParser.primitiveType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntPrimitiveType?: (ctx: IntPrimitiveTypeContext) => Result;
	/**
	 * Visit a parse tree produced by the `floatPrimitiveType`
	 * labeled alternative in `DdsJsIdlParser.primitiveType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFloatPrimitiveType?: (ctx: FloatPrimitiveTypeContext) => Result;
	/**
	 * Visit a parse tree produced by the `booleanPrimitiveType`
	 * labeled alternative in `DdsJsIdlParser.primitiveType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBooleanPrimitiveType?: (ctx: BooleanPrimitiveTypeContext) => Result;
	/**
	 * Visit a parse tree produced by the `charPrimitiveType`
	 * labeled alternative in `DdsJsIdlParser.primitiveType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCharPrimitiveType?: (ctx: CharPrimitiveTypeContext) => Result;
	/**
	 * Visit a parse tree produced by the `octetIntType`
	 * labeled alternative in `DdsJsIdlParser.intType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOctetIntType?: (ctx: OctetIntTypeContext) => Result;
	/**
	 * Visit a parse tree produced by the `longIntType`
	 * labeled alternative in `DdsJsIdlParser.intType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLongIntType?: (ctx: LongIntTypeContext) => Result;
	/**
	 * Visit a parse tree produced by the `longLongIntType`
	 * labeled alternative in `DdsJsIdlParser.intType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLongLongIntType?: (ctx: LongLongIntTypeContext) => Result;
	/**
	 * Visit a parse tree produced by the `shortIntType`
	 * labeled alternative in `DdsJsIdlParser.intType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShortIntType?: (ctx: ShortIntTypeContext) => Result;
	/**
	 * Visit a parse tree produced by the `unsignedLongIntType`
	 * labeled alternative in `DdsJsIdlParser.intType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnsignedLongIntType?: (ctx: UnsignedLongIntTypeContext) => Result;
	/**
	 * Visit a parse tree produced by the `unsignedLongLongIntType`
	 * labeled alternative in `DdsJsIdlParser.intType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnsignedLongLongIntType?: (ctx: UnsignedLongLongIntTypeContext) => Result;
	/**
	 * Visit a parse tree produced by the `unsignedShortIntType`
	 * labeled alternative in `DdsJsIdlParser.intType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnsignedShortIntType?: (ctx: UnsignedShortIntTypeContext) => Result;
	/**
	 * Visit a parse tree produced by the `singlePrecisionFloatType`
	 * labeled alternative in `DdsJsIdlParser.floatType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSinglePrecisionFloatType?: (ctx: SinglePrecisionFloatTypeContext) => Result;
	/**
	 * Visit a parse tree produced by the `doublePrecisionFloatType`
	 * labeled alternative in `DdsJsIdlParser.floatType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDoublePrecisionFloatType?: (ctx: DoublePrecisionFloatTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `DdsJsIdlParser.booleanType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBooleanType?: (ctx: BooleanTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `DdsJsIdlParser.charType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCharType?: (ctx: CharTypeContext) => Result;
	/**
	 * Visit a parse tree produced by the `intLiteralValue`
	 * labeled alternative in `DdsJsIdlParser.literalValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntLiteralValue?: (ctx: IntLiteralValueContext) => Result;
	/**
	 * Visit a parse tree produced by the `charLiteralValue`
	 * labeled alternative in `DdsJsIdlParser.literalValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCharLiteralValue?: (ctx: CharLiteralValueContext) => Result;
	/**
	 * Visit a parse tree produced by the `stringLiteralValue`
	 * labeled alternative in `DdsJsIdlParser.literalValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringLiteralValue?: (ctx: StringLiteralValueContext) => Result;
	/**
	 * Visit a parse tree produced by the `floatLiteralValue`
	 * labeled alternative in `DdsJsIdlParser.literalValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFloatLiteralValue?: (ctx: FloatLiteralValueContext) => Result;
	/**
	 * Visit a parse tree produced by the `realLiteralValue`
	 * labeled alternative in `DdsJsIdlParser.literalValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRealLiteralValue?: (ctx: RealLiteralValueContext) => Result;
	/**
	 * Visit a parse tree produced by the `booleanLiteralValue`
	 * labeled alternative in `DdsJsIdlParser.literalValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBooleanLiteralValue?: (ctx: BooleanLiteralValueContext) => Result;
	/**
	 * Visit a parse tree produced by `DdsJsIdlParser.charLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCharLiteral?: (ctx: CharLiteralContext) => Result;
	/**
	 * Visit a parse tree produced by `DdsJsIdlParser.stringLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringLiteral?: (ctx: StringLiteralContext) => Result;
	/**
	 * Visit a parse tree produced by the `booleanTrueLiteral`
	 * labeled alternative in `DdsJsIdlParser.booleanLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBooleanTrueLiteral?: (ctx: BooleanTrueLiteralContext) => Result;
	/**
	 * Visit a parse tree produced by the `booleanFalseLiteral`
	 * labeled alternative in `DdsJsIdlParser.booleanLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBooleanFalseLiteral?: (ctx: BooleanFalseLiteralContext) => Result;
	/**
	 * Visit a parse tree produced by the `signedIntegerLiteral`
	 * labeled alternative in `DdsJsIdlParser.integerLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSignedIntegerLiteral?: (ctx: SignedIntegerLiteralContext) => Result;
	/**
	 * Visit a parse tree produced by the `octalIntegerLiteral`
	 * labeled alternative in `DdsJsIdlParser.integerLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOctalIntegerLiteral?: (ctx: OctalIntegerLiteralContext) => Result;
	/**
	 * Visit a parse tree produced by the `hexIntegerLiteral`
	 * labeled alternative in `DdsJsIdlParser.integerLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHexIntegerLiteral?: (ctx: HexIntegerLiteralContext) => Result;
	/**
	 * Visit a parse tree produced by the `positiveInteger`
	 * labeled alternative in `DdsJsIdlParser.signedInteger`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPositiveInteger?: (ctx: PositiveIntegerContext) => Result;
	/**
	 * Visit a parse tree produced by the `negativeInteger`
	 * labeled alternative in `DdsJsIdlParser.signedInteger`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNegativeInteger?: (ctx: NegativeIntegerContext) => Result;
	/**
	 * Visit a parse tree produced by the `floatIntExponent`
	 * labeled alternative in `DdsJsIdlParser.floatingPointLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFloatIntExponent?: (ctx: FloatIntExponentContext) => Result;
	/**
	 * Visit a parse tree produced by the `floatIntFracExponent`
	 * labeled alternative in `DdsJsIdlParser.floatingPointLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFloatIntFracExponent?: (ctx: FloatIntFracExponentContext) => Result;
	/**
	 * Visit a parse tree produced by the `floatFracExponent`
	 * labeled alternative in `DdsJsIdlParser.floatingPointLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFloatFracExponent?: (ctx: FloatFracExponentContext) => Result;
	/**
	 * Visit a parse tree produced by the `floatFracOnly`
	 * labeled alternative in `DdsJsIdlParser.floatingPointLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFloatFracOnly?: (ctx: FloatFracOnlyContext) => Result;
	/**
	 * Visit a parse tree produced by the `fixedPtIntFrac`
	 * labeled alternative in `DdsJsIdlParser.fixedPointLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFixedPtIntFrac?: (ctx: FixedPtIntFracContext) => Result;
	/**
	 * Visit a parse tree produced by the `fixedPtIntOnly`
	 * labeled alternative in `DdsJsIdlParser.fixedPointLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFixedPtIntOnly?: (ctx: FixedPtIntOnlyContext) => Result;
	/**
	 * Visit a parse tree produced by the `fixedPtFracOnly`
	 * labeled alternative in `DdsJsIdlParser.fixedPointLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFixedPtFracOnly?: (ctx: FixedPtFracOnlyContext) => Result;
}

