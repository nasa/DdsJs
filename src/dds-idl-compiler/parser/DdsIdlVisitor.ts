// Generated from /Users/rnieves/Documents/Projects/dds-idl-compiler/src/DdsIdl.g4 by ANTLR 4.13.2

import {ParseTreeVisitor} from 'antlr4';


import { SpecificationContext } from "./DdsIdlParser.js";
import { DefinitionContext } from "./DdsIdlParser.js";
import { ModuleContext } from "./DdsIdlParser.js";
import { RootedScopedNameContext } from "./DdsIdlParser.js";
import { CompoundScopedNameContext } from "./DdsIdlParser.js";
import { SingleScopedNameContext } from "./DdsIdlParser.js";
import { ConstantDeclarationContext } from "./DdsIdlParser.js";
import { ConstantTypeContext } from "./DdsIdlParser.js";
import { ConstantExpressionContext } from "./DdsIdlParser.js";
import { OrPassThroughContext } from "./DdsIdlParser.js";
import { OrOperationContext } from "./DdsIdlParser.js";
import { XorPassThroughContext } from "./DdsIdlParser.js";
import { XorOperationContext } from "./DdsIdlParser.js";
import { AndOperationContext } from "./DdsIdlParser.js";
import { AndPassThroughContext } from "./DdsIdlParser.js";
import { ShiftPassThroughContext } from "./DdsIdlParser.js";
import { ShiftLeftOperationContext } from "./DdsIdlParser.js";
import { ShiftRightOperationContext } from "./DdsIdlParser.js";
import { AddOperationContext } from "./DdsIdlParser.js";
import { SubtractOperationContext } from "./DdsIdlParser.js";
import { AddPassThroughContext } from "./DdsIdlParser.js";
import { MultiplyOperationContext } from "./DdsIdlParser.js";
import { DivideOperationContext } from "./DdsIdlParser.js";
import { ModuloOperationContext } from "./DdsIdlParser.js";
import { MultPassThroughContext } from "./DdsIdlParser.js";
import { UnaryOperationContext } from "./DdsIdlParser.js";
import { UnaryPassThroughContext } from "./DdsIdlParser.js";
import { UnaryOperatorContext } from "./DdsIdlParser.js";
import { PrimaryExpressionContext } from "./DdsIdlParser.js";
import { LiteralContext } from "./DdsIdlParser.js";
import { PositiveIntegerConstantContext } from "./DdsIdlParser.js";
import { TypeDeclarationContext } from "./DdsIdlParser.js";
import { TypeSpecificationContext } from "./DdsIdlParser.js";
import { SimpleTypeSpecificationContext } from "./DdsIdlParser.js";
import { BaseTypeSpecificationContext } from "./DdsIdlParser.js";
import { SinglePrecisionFloatingPointTypeContext } from "./DdsIdlParser.js";
import { DoublePrecisionFloatingPointTypeContext } from "./DdsIdlParser.js";
import { QuadPrecisionFloatingPointTypeContext } from "./DdsIdlParser.js";
import { IntegerTypeContext } from "./DdsIdlParser.js";
import { SignedIntegerTypeContext } from "./DdsIdlParser.js";
import { SignedShortIntegerTypeContext } from "./DdsIdlParser.js";
import { SignedLongIntegerTypeContext } from "./DdsIdlParser.js";
import { SignedLongLongIntegerTypeContext } from "./DdsIdlParser.js";
import { SignedTinyIntegerTypeContext } from "./DdsIdlParser.js";
import { UnsignedIntegerTypeContext } from "./DdsIdlParser.js";
import { UnsignedShortIntegerTypeContext } from "./DdsIdlParser.js";
import { UnsignedLongIntegerTypeContext } from "./DdsIdlParser.js";
import { UnsignedLongLongIntegerTypeContext } from "./DdsIdlParser.js";
import { UnsignedTinyIntegerTypeContext } from "./DdsIdlParser.js";
import { CharTypeContext } from "./DdsIdlParser.js";
import { WideCharTypeContext } from "./DdsIdlParser.js";
import { BooleanTypeContext } from "./DdsIdlParser.js";
import { OctetTypeContext } from "./DdsIdlParser.js";
import { TemplateTypeSpecificationContext } from "./DdsIdlParser.js";
import { BoundedSequenceTypeContext } from "./DdsIdlParser.js";
import { UnboundedSequenceTypeContext } from "./DdsIdlParser.js";
import { BoundedStringTypeContext } from "./DdsIdlParser.js";
import { UnboundedStringTypeContext } from "./DdsIdlParser.js";
import { BoundedWideStringTypeContext } from "./DdsIdlParser.js";
import { UnboundedWideStringTypeContext } from "./DdsIdlParser.js";
import { FixedPointTypeContext } from "./DdsIdlParser.js";
import { FixedPointConstantTypeContext } from "./DdsIdlParser.js";
import { ConstructedTypeDeclarationContext } from "./DdsIdlParser.js";
import { BoundedMapTypeContext } from "./DdsIdlParser.js";
import { UnboundedMapTypeContext } from "./DdsIdlParser.js";
import { BitsetDeclarationContext } from "./DdsIdlParser.js";
import { BitfieldContext } from "./DdsIdlParser.js";
import { BitfieldSpecifierContext } from "./DdsIdlParser.js";
import { BitfieldDestinationTypeContext } from "./DdsIdlParser.js";
import { BitmaskDeclarationContext } from "./DdsIdlParser.js";
import { BitValuesContext } from "./DdsIdlParser.js";
import { BitValueContext } from "./DdsIdlParser.js";
import { StructureDeclarationContext } from "./DdsIdlParser.js";
import { DerivedStructureDefinitionContext } from "./DdsIdlParser.js";
import { EmptyStructureDefinitionContext } from "./DdsIdlParser.js";
import { BasicStructureDefinitionContext } from "./DdsIdlParser.js";
import { StructMemberContext } from "./DdsIdlParser.js";
import { StructureForwardDeclarationContext } from "./DdsIdlParser.js";
import { UnionDeclarationContext } from "./DdsIdlParser.js";
import { UnionDefinitionContext } from "./DdsIdlParser.js";
import { SwitchTypeSpecificationContext } from "./DdsIdlParser.js";
import { SwitchBodyContext } from "./DdsIdlParser.js";
import { CaseContext } from "./DdsIdlParser.js";
import { LiteralValueCaseConditionContext } from "./DdsIdlParser.js";
import { ConstantDefCaseConditionContext } from "./DdsIdlParser.js";
import { DefaultCaseConditionContext } from "./DdsIdlParser.js";
import { UnionElementSpecificationContext } from "./DdsIdlParser.js";
import { UnionForwardDeclarationContext } from "./DdsIdlParser.js";
import { EnumDeclarationContext } from "./DdsIdlParser.js";
import { EnumeratorContext } from "./DdsIdlParser.js";
import { ArrayDeclaratorContext } from "./DdsIdlParser.js";
import { FixedArraySizeContext } from "./DdsIdlParser.js";
import { SimpleDeclaratorContext } from "./DdsIdlParser.js";
import { TypeAliasDeclarationContext } from "./DdsIdlParser.js";
import { TypeDeclaratorContext } from "./DdsIdlParser.js";
import { TypeDeclaratorTypeContext } from "./DdsIdlParser.js";
import { AnyDeclaratorsContext } from "./DdsIdlParser.js";
import { AnyDeclaratorContext } from "./DdsIdlParser.js";
import { AnnotatableDeclaratorsContext } from "./DdsIdlParser.js";
import { AnnotatableDeclaratorContext } from "./DdsIdlParser.js";
import { AnnotationDeclarationContext } from "./DdsIdlParser.js";
import { AnnotationHeaderContext } from "./DdsIdlParser.js";
import { AnnotationBodyContext } from "./DdsIdlParser.js";
import { AnnotationBodyItemContext } from "./DdsIdlParser.js";
import { AnnotationMemberContext } from "./DdsIdlParser.js";
import { AnnotationMemberTypeContext } from "./DdsIdlParser.js";
import { AnnotationApplicationsContext } from "./DdsIdlParser.js";
import { AnnotationApplicationContext } from "./DdsIdlParser.js";
import { SingleAnonymousAnnotationApplicationParameterContext } from "./DdsIdlParser.js";
import { MultipleNamedAnnotationApplicationParametersContext } from "./DdsIdlParser.js";
import { AnnotationApplicationParameterContext } from "./DdsIdlParser.js";
import { IdentifierContext } from "./DdsIdlParser.js";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `DdsIdlParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export default class DdsIdlVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `DdsIdlParser.specification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSpecification?: (ctx: SpecificationContext) => Result;
	/**
	 * Visit a parse tree produced by `DdsIdlParser.definition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefinition?: (ctx: DefinitionContext) => Result;
	/**
	 * Visit a parse tree produced by `DdsIdlParser.module`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModule?: (ctx: ModuleContext) => Result;
	/**
	 * Visit a parse tree produced by the `rootedScopedName`
	 * labeled alternative in `DdsIdlParser.scopedName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRootedScopedName?: (ctx: RootedScopedNameContext) => Result;
	/**
	 * Visit a parse tree produced by the `compoundScopedName`
	 * labeled alternative in `DdsIdlParser.scopedName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompoundScopedName?: (ctx: CompoundScopedNameContext) => Result;
	/**
	 * Visit a parse tree produced by the `singleScopedName`
	 * labeled alternative in `DdsIdlParser.scopedName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSingleScopedName?: (ctx: SingleScopedNameContext) => Result;
	/**
	 * Visit a parse tree produced by `DdsIdlParser.constantDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstantDeclaration?: (ctx: ConstantDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `DdsIdlParser.constantType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstantType?: (ctx: ConstantTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `DdsIdlParser.constantExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstantExpression?: (ctx: ConstantExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by the `orPassThrough`
	 * labeled alternative in `DdsIdlParser.orExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOrPassThrough?: (ctx: OrPassThroughContext) => Result;
	/**
	 * Visit a parse tree produced by the `orOperation`
	 * labeled alternative in `DdsIdlParser.orExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOrOperation?: (ctx: OrOperationContext) => Result;
	/**
	 * Visit a parse tree produced by the `xorPassThrough`
	 * labeled alternative in `DdsIdlParser.xorExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitXorPassThrough?: (ctx: XorPassThroughContext) => Result;
	/**
	 * Visit a parse tree produced by the `xorOperation`
	 * labeled alternative in `DdsIdlParser.xorExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitXorOperation?: (ctx: XorOperationContext) => Result;
	/**
	 * Visit a parse tree produced by the `andOperation`
	 * labeled alternative in `DdsIdlParser.andExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAndOperation?: (ctx: AndOperationContext) => Result;
	/**
	 * Visit a parse tree produced by the `andPassThrough`
	 * labeled alternative in `DdsIdlParser.andExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAndPassThrough?: (ctx: AndPassThroughContext) => Result;
	/**
	 * Visit a parse tree produced by the `shiftPassThrough`
	 * labeled alternative in `DdsIdlParser.shiftExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShiftPassThrough?: (ctx: ShiftPassThroughContext) => Result;
	/**
	 * Visit a parse tree produced by the `shiftLeftOperation`
	 * labeled alternative in `DdsIdlParser.shiftExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShiftLeftOperation?: (ctx: ShiftLeftOperationContext) => Result;
	/**
	 * Visit a parse tree produced by the `shiftRightOperation`
	 * labeled alternative in `DdsIdlParser.shiftExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShiftRightOperation?: (ctx: ShiftRightOperationContext) => Result;
	/**
	 * Visit a parse tree produced by the `addOperation`
	 * labeled alternative in `DdsIdlParser.addExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAddOperation?: (ctx: AddOperationContext) => Result;
	/**
	 * Visit a parse tree produced by the `subtractOperation`
	 * labeled alternative in `DdsIdlParser.addExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubtractOperation?: (ctx: SubtractOperationContext) => Result;
	/**
	 * Visit a parse tree produced by the `addPassThrough`
	 * labeled alternative in `DdsIdlParser.addExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAddPassThrough?: (ctx: AddPassThroughContext) => Result;
	/**
	 * Visit a parse tree produced by the `multiplyOperation`
	 * labeled alternative in `DdsIdlParser.multExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiplyOperation?: (ctx: MultiplyOperationContext) => Result;
	/**
	 * Visit a parse tree produced by the `divideOperation`
	 * labeled alternative in `DdsIdlParser.multExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDivideOperation?: (ctx: DivideOperationContext) => Result;
	/**
	 * Visit a parse tree produced by the `moduloOperation`
	 * labeled alternative in `DdsIdlParser.multExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModuloOperation?: (ctx: ModuloOperationContext) => Result;
	/**
	 * Visit a parse tree produced by the `multPassThrough`
	 * labeled alternative in `DdsIdlParser.multExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultPassThrough?: (ctx: MultPassThroughContext) => Result;
	/**
	 * Visit a parse tree produced by the `unaryOperation`
	 * labeled alternative in `DdsIdlParser.unaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryOperation?: (ctx: UnaryOperationContext) => Result;
	/**
	 * Visit a parse tree produced by the `unaryPassThrough`
	 * labeled alternative in `DdsIdlParser.unaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryPassThrough?: (ctx: UnaryPassThroughContext) => Result;
	/**
	 * Visit a parse tree produced by `DdsIdlParser.unaryOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryOperator?: (ctx: UnaryOperatorContext) => Result;
	/**
	 * Visit a parse tree produced by `DdsIdlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimaryExpression?: (ctx: PrimaryExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `DdsIdlParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteral?: (ctx: LiteralContext) => Result;
	/**
	 * Visit a parse tree produced by `DdsIdlParser.positiveIntegerConstant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPositiveIntegerConstant?: (ctx: PositiveIntegerConstantContext) => Result;
	/**
	 * Visit a parse tree produced by `DdsIdlParser.typeDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeDeclaration?: (ctx: TypeDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `DdsIdlParser.typeSpecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeSpecification?: (ctx: TypeSpecificationContext) => Result;
	/**
	 * Visit a parse tree produced by `DdsIdlParser.simpleTypeSpecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimpleTypeSpecification?: (ctx: SimpleTypeSpecificationContext) => Result;
	/**
	 * Visit a parse tree produced by `DdsIdlParser.baseTypeSpecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBaseTypeSpecification?: (ctx: BaseTypeSpecificationContext) => Result;
	/**
	 * Visit a parse tree produced by the `singlePrecisionFloatingPointType`
	 * labeled alternative in `DdsIdlParser.floatingPointType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSinglePrecisionFloatingPointType?: (ctx: SinglePrecisionFloatingPointTypeContext) => Result;
	/**
	 * Visit a parse tree produced by the `doublePrecisionFloatingPointType`
	 * labeled alternative in `DdsIdlParser.floatingPointType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDoublePrecisionFloatingPointType?: (ctx: DoublePrecisionFloatingPointTypeContext) => Result;
	/**
	 * Visit a parse tree produced by the `quadPrecisionFloatingPointType`
	 * labeled alternative in `DdsIdlParser.floatingPointType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuadPrecisionFloatingPointType?: (ctx: QuadPrecisionFloatingPointTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `DdsIdlParser.integerType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntegerType?: (ctx: IntegerTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `DdsIdlParser.signedIntegerType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSignedIntegerType?: (ctx: SignedIntegerTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `DdsIdlParser.signedShortIntegerType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSignedShortIntegerType?: (ctx: SignedShortIntegerTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `DdsIdlParser.signedLongIntegerType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSignedLongIntegerType?: (ctx: SignedLongIntegerTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `DdsIdlParser.signedLongLongIntegerType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSignedLongLongIntegerType?: (ctx: SignedLongLongIntegerTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `DdsIdlParser.signedTinyIntegerType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSignedTinyIntegerType?: (ctx: SignedTinyIntegerTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `DdsIdlParser.unsignedIntegerType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnsignedIntegerType?: (ctx: UnsignedIntegerTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `DdsIdlParser.unsignedShortIntegerType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnsignedShortIntegerType?: (ctx: UnsignedShortIntegerTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `DdsIdlParser.unsignedLongIntegerType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnsignedLongIntegerType?: (ctx: UnsignedLongIntegerTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `DdsIdlParser.unsignedLongLongIntegerType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnsignedLongLongIntegerType?: (ctx: UnsignedLongLongIntegerTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `DdsIdlParser.unsignedTinyIntegerType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnsignedTinyIntegerType?: (ctx: UnsignedTinyIntegerTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `DdsIdlParser.charType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCharType?: (ctx: CharTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `DdsIdlParser.wideCharType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWideCharType?: (ctx: WideCharTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `DdsIdlParser.booleanType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBooleanType?: (ctx: BooleanTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `DdsIdlParser.octetType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOctetType?: (ctx: OctetTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `DdsIdlParser.templateTypeSpecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTemplateTypeSpecification?: (ctx: TemplateTypeSpecificationContext) => Result;
	/**
	 * Visit a parse tree produced by the `boundedSequenceType`
	 * labeled alternative in `DdsIdlParser.sequenceType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBoundedSequenceType?: (ctx: BoundedSequenceTypeContext) => Result;
	/**
	 * Visit a parse tree produced by the `unboundedSequenceType`
	 * labeled alternative in `DdsIdlParser.sequenceType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnboundedSequenceType?: (ctx: UnboundedSequenceTypeContext) => Result;
	/**
	 * Visit a parse tree produced by the `boundedStringType`
	 * labeled alternative in `DdsIdlParser.stringType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBoundedStringType?: (ctx: BoundedStringTypeContext) => Result;
	/**
	 * Visit a parse tree produced by the `unboundedStringType`
	 * labeled alternative in `DdsIdlParser.stringType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnboundedStringType?: (ctx: UnboundedStringTypeContext) => Result;
	/**
	 * Visit a parse tree produced by the `boundedWideStringType`
	 * labeled alternative in `DdsIdlParser.wideStringType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBoundedWideStringType?: (ctx: BoundedWideStringTypeContext) => Result;
	/**
	 * Visit a parse tree produced by the `unboundedWideStringType`
	 * labeled alternative in `DdsIdlParser.wideStringType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnboundedWideStringType?: (ctx: UnboundedWideStringTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `DdsIdlParser.fixedPointType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFixedPointType?: (ctx: FixedPointTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `DdsIdlParser.fixedPointConstantType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFixedPointConstantType?: (ctx: FixedPointConstantTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `DdsIdlParser.constructedTypeDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstructedTypeDeclaration?: (ctx: ConstructedTypeDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by the `boundedMapType`
	 * labeled alternative in `DdsIdlParser.mapType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBoundedMapType?: (ctx: BoundedMapTypeContext) => Result;
	/**
	 * Visit a parse tree produced by the `unboundedMapType`
	 * labeled alternative in `DdsIdlParser.mapType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnboundedMapType?: (ctx: UnboundedMapTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `DdsIdlParser.bitsetDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBitsetDeclaration?: (ctx: BitsetDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `DdsIdlParser.bitfield`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBitfield?: (ctx: BitfieldContext) => Result;
	/**
	 * Visit a parse tree produced by `DdsIdlParser.bitfieldSpecifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBitfieldSpecifier?: (ctx: BitfieldSpecifierContext) => Result;
	/**
	 * Visit a parse tree produced by `DdsIdlParser.bitfieldDestinationType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBitfieldDestinationType?: (ctx: BitfieldDestinationTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `DdsIdlParser.bitmaskDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBitmaskDeclaration?: (ctx: BitmaskDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `DdsIdlParser.bitValues`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBitValues?: (ctx: BitValuesContext) => Result;
	/**
	 * Visit a parse tree produced by `DdsIdlParser.bitValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBitValue?: (ctx: BitValueContext) => Result;
	/**
	 * Visit a parse tree produced by `DdsIdlParser.structureDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStructureDeclaration?: (ctx: StructureDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by the `derivedStructureDefinition`
	 * labeled alternative in `DdsIdlParser.structureDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDerivedStructureDefinition?: (ctx: DerivedStructureDefinitionContext) => Result;
	/**
	 * Visit a parse tree produced by the `emptyStructureDefinition`
	 * labeled alternative in `DdsIdlParser.structureDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEmptyStructureDefinition?: (ctx: EmptyStructureDefinitionContext) => Result;
	/**
	 * Visit a parse tree produced by the `basicStructureDefinition`
	 * labeled alternative in `DdsIdlParser.structureDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBasicStructureDefinition?: (ctx: BasicStructureDefinitionContext) => Result;
	/**
	 * Visit a parse tree produced by `DdsIdlParser.structMember`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStructMember?: (ctx: StructMemberContext) => Result;
	/**
	 * Visit a parse tree produced by `DdsIdlParser.structureForwardDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStructureForwardDeclaration?: (ctx: StructureForwardDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `DdsIdlParser.unionDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnionDeclaration?: (ctx: UnionDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `DdsIdlParser.unionDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnionDefinition?: (ctx: UnionDefinitionContext) => Result;
	/**
	 * Visit a parse tree produced by `DdsIdlParser.switchTypeSpecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSwitchTypeSpecification?: (ctx: SwitchTypeSpecificationContext) => Result;
	/**
	 * Visit a parse tree produced by `DdsIdlParser.switchBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSwitchBody?: (ctx: SwitchBodyContext) => Result;
	/**
	 * Visit a parse tree produced by `DdsIdlParser.case`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCase?: (ctx: CaseContext) => Result;
	/**
	 * Visit a parse tree produced by the `literalValueCaseCondition`
	 * labeled alternative in `DdsIdlParser.caseCondition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteralValueCaseCondition?: (ctx: LiteralValueCaseConditionContext) => Result;
	/**
	 * Visit a parse tree produced by the `constantDefCaseCondition`
	 * labeled alternative in `DdsIdlParser.caseCondition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstantDefCaseCondition?: (ctx: ConstantDefCaseConditionContext) => Result;
	/**
	 * Visit a parse tree produced by the `defaultCaseCondition`
	 * labeled alternative in `DdsIdlParser.caseCondition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefaultCaseCondition?: (ctx: DefaultCaseConditionContext) => Result;
	/**
	 * Visit a parse tree produced by `DdsIdlParser.unionElementSpecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnionElementSpecification?: (ctx: UnionElementSpecificationContext) => Result;
	/**
	 * Visit a parse tree produced by `DdsIdlParser.unionForwardDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnionForwardDeclaration?: (ctx: UnionForwardDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `DdsIdlParser.enumDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumDeclaration?: (ctx: EnumDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `DdsIdlParser.enumerator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumerator?: (ctx: EnumeratorContext) => Result;
	/**
	 * Visit a parse tree produced by `DdsIdlParser.arrayDeclarator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayDeclarator?: (ctx: ArrayDeclaratorContext) => Result;
	/**
	 * Visit a parse tree produced by `DdsIdlParser.fixedArraySize`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFixedArraySize?: (ctx: FixedArraySizeContext) => Result;
	/**
	 * Visit a parse tree produced by `DdsIdlParser.simpleDeclarator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimpleDeclarator?: (ctx: SimpleDeclaratorContext) => Result;
	/**
	 * Visit a parse tree produced by `DdsIdlParser.typeAliasDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeAliasDeclaration?: (ctx: TypeAliasDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `DdsIdlParser.typeDeclarator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeDeclarator?: (ctx: TypeDeclaratorContext) => Result;
	/**
	 * Visit a parse tree produced by `DdsIdlParser.typeDeclaratorType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeDeclaratorType?: (ctx: TypeDeclaratorTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `DdsIdlParser.anyDeclarators`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnyDeclarators?: (ctx: AnyDeclaratorsContext) => Result;
	/**
	 * Visit a parse tree produced by `DdsIdlParser.anyDeclarator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnyDeclarator?: (ctx: AnyDeclaratorContext) => Result;
	/**
	 * Visit a parse tree produced by `DdsIdlParser.annotatableDeclarators`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotatableDeclarators?: (ctx: AnnotatableDeclaratorsContext) => Result;
	/**
	 * Visit a parse tree produced by `DdsIdlParser.annotatableDeclarator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotatableDeclarator?: (ctx: AnnotatableDeclaratorContext) => Result;
	/**
	 * Visit a parse tree produced by `DdsIdlParser.annotationDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotationDeclaration?: (ctx: AnnotationDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `DdsIdlParser.annotationHeader`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotationHeader?: (ctx: AnnotationHeaderContext) => Result;
	/**
	 * Visit a parse tree produced by `DdsIdlParser.annotationBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotationBody?: (ctx: AnnotationBodyContext) => Result;
	/**
	 * Visit a parse tree produced by `DdsIdlParser.annotationBodyItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotationBodyItem?: (ctx: AnnotationBodyItemContext) => Result;
	/**
	 * Visit a parse tree produced by `DdsIdlParser.annotationMember`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotationMember?: (ctx: AnnotationMemberContext) => Result;
	/**
	 * Visit a parse tree produced by `DdsIdlParser.annotationMemberType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotationMemberType?: (ctx: AnnotationMemberTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `DdsIdlParser.annotationApplications`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotationApplications?: (ctx: AnnotationApplicationsContext) => Result;
	/**
	 * Visit a parse tree produced by `DdsIdlParser.annotationApplication`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotationApplication?: (ctx: AnnotationApplicationContext) => Result;
	/**
	 * Visit a parse tree produced by the `singleAnonymousAnnotationApplicationParameter`
	 * labeled alternative in `DdsIdlParser.annotationApplicationParameters`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSingleAnonymousAnnotationApplicationParameter?: (ctx: SingleAnonymousAnnotationApplicationParameterContext) => Result;
	/**
	 * Visit a parse tree produced by the `multipleNamedAnnotationApplicationParameters`
	 * labeled alternative in `DdsIdlParser.annotationApplicationParameters`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultipleNamedAnnotationApplicationParameters?: (ctx: MultipleNamedAnnotationApplicationParametersContext) => Result;
	/**
	 * Visit a parse tree produced by `DdsIdlParser.annotationApplicationParameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotationApplicationParameter?: (ctx: AnnotationApplicationParameterContext) => Result;
	/**
	 * Visit a parse tree produced by `DdsIdlParser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifier?: (ctx: IdentifierContext) => Result;
}

