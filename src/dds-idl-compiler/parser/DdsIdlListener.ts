// Generated from /Users/rnieves/Documents/Projects/dds-idl-compiler/src/DdsIdl.g4 by ANTLR 4.13.2

import {ParseTreeListener} from "antlr4";


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
 * This interface defines a complete listener for a parse tree produced by
 * `DdsIdlParser`.
 */
export default class DdsIdlListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `DdsIdlParser.specification`.
	 * @param ctx the parse tree
	 */
	enterSpecification?: (ctx: SpecificationContext) => void;
	/**
	 * Exit a parse tree produced by `DdsIdlParser.specification`.
	 * @param ctx the parse tree
	 */
	exitSpecification?: (ctx: SpecificationContext) => void;
	/**
	 * Enter a parse tree produced by `DdsIdlParser.definition`.
	 * @param ctx the parse tree
	 */
	enterDefinition?: (ctx: DefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `DdsIdlParser.definition`.
	 * @param ctx the parse tree
	 */
	exitDefinition?: (ctx: DefinitionContext) => void;
	/**
	 * Enter a parse tree produced by `DdsIdlParser.module`.
	 * @param ctx the parse tree
	 */
	enterModule?: (ctx: ModuleContext) => void;
	/**
	 * Exit a parse tree produced by `DdsIdlParser.module`.
	 * @param ctx the parse tree
	 */
	exitModule?: (ctx: ModuleContext) => void;
	/**
	 * Enter a parse tree produced by the `rootedScopedName`
	 * labeled alternative in `DdsIdlParser.scopedName`.
	 * @param ctx the parse tree
	 */
	enterRootedScopedName?: (ctx: RootedScopedNameContext) => void;
	/**
	 * Exit a parse tree produced by the `rootedScopedName`
	 * labeled alternative in `DdsIdlParser.scopedName`.
	 * @param ctx the parse tree
	 */
	exitRootedScopedName?: (ctx: RootedScopedNameContext) => void;
	/**
	 * Enter a parse tree produced by the `compoundScopedName`
	 * labeled alternative in `DdsIdlParser.scopedName`.
	 * @param ctx the parse tree
	 */
	enterCompoundScopedName?: (ctx: CompoundScopedNameContext) => void;
	/**
	 * Exit a parse tree produced by the `compoundScopedName`
	 * labeled alternative in `DdsIdlParser.scopedName`.
	 * @param ctx the parse tree
	 */
	exitCompoundScopedName?: (ctx: CompoundScopedNameContext) => void;
	/**
	 * Enter a parse tree produced by the `singleScopedName`
	 * labeled alternative in `DdsIdlParser.scopedName`.
	 * @param ctx the parse tree
	 */
	enterSingleScopedName?: (ctx: SingleScopedNameContext) => void;
	/**
	 * Exit a parse tree produced by the `singleScopedName`
	 * labeled alternative in `DdsIdlParser.scopedName`.
	 * @param ctx the parse tree
	 */
	exitSingleScopedName?: (ctx: SingleScopedNameContext) => void;
	/**
	 * Enter a parse tree produced by `DdsIdlParser.constantDeclaration`.
	 * @param ctx the parse tree
	 */
	enterConstantDeclaration?: (ctx: ConstantDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `DdsIdlParser.constantDeclaration`.
	 * @param ctx the parse tree
	 */
	exitConstantDeclaration?: (ctx: ConstantDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `DdsIdlParser.constantType`.
	 * @param ctx the parse tree
	 */
	enterConstantType?: (ctx: ConstantTypeContext) => void;
	/**
	 * Exit a parse tree produced by `DdsIdlParser.constantType`.
	 * @param ctx the parse tree
	 */
	exitConstantType?: (ctx: ConstantTypeContext) => void;
	/**
	 * Enter a parse tree produced by `DdsIdlParser.constantExpression`.
	 * @param ctx the parse tree
	 */
	enterConstantExpression?: (ctx: ConstantExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `DdsIdlParser.constantExpression`.
	 * @param ctx the parse tree
	 */
	exitConstantExpression?: (ctx: ConstantExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `orPassThrough`
	 * labeled alternative in `DdsIdlParser.orExpression`.
	 * @param ctx the parse tree
	 */
	enterOrPassThrough?: (ctx: OrPassThroughContext) => void;
	/**
	 * Exit a parse tree produced by the `orPassThrough`
	 * labeled alternative in `DdsIdlParser.orExpression`.
	 * @param ctx the parse tree
	 */
	exitOrPassThrough?: (ctx: OrPassThroughContext) => void;
	/**
	 * Enter a parse tree produced by the `orOperation`
	 * labeled alternative in `DdsIdlParser.orExpression`.
	 * @param ctx the parse tree
	 */
	enterOrOperation?: (ctx: OrOperationContext) => void;
	/**
	 * Exit a parse tree produced by the `orOperation`
	 * labeled alternative in `DdsIdlParser.orExpression`.
	 * @param ctx the parse tree
	 */
	exitOrOperation?: (ctx: OrOperationContext) => void;
	/**
	 * Enter a parse tree produced by the `xorPassThrough`
	 * labeled alternative in `DdsIdlParser.xorExpression`.
	 * @param ctx the parse tree
	 */
	enterXorPassThrough?: (ctx: XorPassThroughContext) => void;
	/**
	 * Exit a parse tree produced by the `xorPassThrough`
	 * labeled alternative in `DdsIdlParser.xorExpression`.
	 * @param ctx the parse tree
	 */
	exitXorPassThrough?: (ctx: XorPassThroughContext) => void;
	/**
	 * Enter a parse tree produced by the `xorOperation`
	 * labeled alternative in `DdsIdlParser.xorExpression`.
	 * @param ctx the parse tree
	 */
	enterXorOperation?: (ctx: XorOperationContext) => void;
	/**
	 * Exit a parse tree produced by the `xorOperation`
	 * labeled alternative in `DdsIdlParser.xorExpression`.
	 * @param ctx the parse tree
	 */
	exitXorOperation?: (ctx: XorOperationContext) => void;
	/**
	 * Enter a parse tree produced by the `andOperation`
	 * labeled alternative in `DdsIdlParser.andExpression`.
	 * @param ctx the parse tree
	 */
	enterAndOperation?: (ctx: AndOperationContext) => void;
	/**
	 * Exit a parse tree produced by the `andOperation`
	 * labeled alternative in `DdsIdlParser.andExpression`.
	 * @param ctx the parse tree
	 */
	exitAndOperation?: (ctx: AndOperationContext) => void;
	/**
	 * Enter a parse tree produced by the `andPassThrough`
	 * labeled alternative in `DdsIdlParser.andExpression`.
	 * @param ctx the parse tree
	 */
	enterAndPassThrough?: (ctx: AndPassThroughContext) => void;
	/**
	 * Exit a parse tree produced by the `andPassThrough`
	 * labeled alternative in `DdsIdlParser.andExpression`.
	 * @param ctx the parse tree
	 */
	exitAndPassThrough?: (ctx: AndPassThroughContext) => void;
	/**
	 * Enter a parse tree produced by the `shiftPassThrough`
	 * labeled alternative in `DdsIdlParser.shiftExpression`.
	 * @param ctx the parse tree
	 */
	enterShiftPassThrough?: (ctx: ShiftPassThroughContext) => void;
	/**
	 * Exit a parse tree produced by the `shiftPassThrough`
	 * labeled alternative in `DdsIdlParser.shiftExpression`.
	 * @param ctx the parse tree
	 */
	exitShiftPassThrough?: (ctx: ShiftPassThroughContext) => void;
	/**
	 * Enter a parse tree produced by the `shiftLeftOperation`
	 * labeled alternative in `DdsIdlParser.shiftExpression`.
	 * @param ctx the parse tree
	 */
	enterShiftLeftOperation?: (ctx: ShiftLeftOperationContext) => void;
	/**
	 * Exit a parse tree produced by the `shiftLeftOperation`
	 * labeled alternative in `DdsIdlParser.shiftExpression`.
	 * @param ctx the parse tree
	 */
	exitShiftLeftOperation?: (ctx: ShiftLeftOperationContext) => void;
	/**
	 * Enter a parse tree produced by the `shiftRightOperation`
	 * labeled alternative in `DdsIdlParser.shiftExpression`.
	 * @param ctx the parse tree
	 */
	enterShiftRightOperation?: (ctx: ShiftRightOperationContext) => void;
	/**
	 * Exit a parse tree produced by the `shiftRightOperation`
	 * labeled alternative in `DdsIdlParser.shiftExpression`.
	 * @param ctx the parse tree
	 */
	exitShiftRightOperation?: (ctx: ShiftRightOperationContext) => void;
	/**
	 * Enter a parse tree produced by the `addOperation`
	 * labeled alternative in `DdsIdlParser.addExpression`.
	 * @param ctx the parse tree
	 */
	enterAddOperation?: (ctx: AddOperationContext) => void;
	/**
	 * Exit a parse tree produced by the `addOperation`
	 * labeled alternative in `DdsIdlParser.addExpression`.
	 * @param ctx the parse tree
	 */
	exitAddOperation?: (ctx: AddOperationContext) => void;
	/**
	 * Enter a parse tree produced by the `subtractOperation`
	 * labeled alternative in `DdsIdlParser.addExpression`.
	 * @param ctx the parse tree
	 */
	enterSubtractOperation?: (ctx: SubtractOperationContext) => void;
	/**
	 * Exit a parse tree produced by the `subtractOperation`
	 * labeled alternative in `DdsIdlParser.addExpression`.
	 * @param ctx the parse tree
	 */
	exitSubtractOperation?: (ctx: SubtractOperationContext) => void;
	/**
	 * Enter a parse tree produced by the `addPassThrough`
	 * labeled alternative in `DdsIdlParser.addExpression`.
	 * @param ctx the parse tree
	 */
	enterAddPassThrough?: (ctx: AddPassThroughContext) => void;
	/**
	 * Exit a parse tree produced by the `addPassThrough`
	 * labeled alternative in `DdsIdlParser.addExpression`.
	 * @param ctx the parse tree
	 */
	exitAddPassThrough?: (ctx: AddPassThroughContext) => void;
	/**
	 * Enter a parse tree produced by the `multiplyOperation`
	 * labeled alternative in `DdsIdlParser.multExpression`.
	 * @param ctx the parse tree
	 */
	enterMultiplyOperation?: (ctx: MultiplyOperationContext) => void;
	/**
	 * Exit a parse tree produced by the `multiplyOperation`
	 * labeled alternative in `DdsIdlParser.multExpression`.
	 * @param ctx the parse tree
	 */
	exitMultiplyOperation?: (ctx: MultiplyOperationContext) => void;
	/**
	 * Enter a parse tree produced by the `divideOperation`
	 * labeled alternative in `DdsIdlParser.multExpression`.
	 * @param ctx the parse tree
	 */
	enterDivideOperation?: (ctx: DivideOperationContext) => void;
	/**
	 * Exit a parse tree produced by the `divideOperation`
	 * labeled alternative in `DdsIdlParser.multExpression`.
	 * @param ctx the parse tree
	 */
	exitDivideOperation?: (ctx: DivideOperationContext) => void;
	/**
	 * Enter a parse tree produced by the `moduloOperation`
	 * labeled alternative in `DdsIdlParser.multExpression`.
	 * @param ctx the parse tree
	 */
	enterModuloOperation?: (ctx: ModuloOperationContext) => void;
	/**
	 * Exit a parse tree produced by the `moduloOperation`
	 * labeled alternative in `DdsIdlParser.multExpression`.
	 * @param ctx the parse tree
	 */
	exitModuloOperation?: (ctx: ModuloOperationContext) => void;
	/**
	 * Enter a parse tree produced by the `multPassThrough`
	 * labeled alternative in `DdsIdlParser.multExpression`.
	 * @param ctx the parse tree
	 */
	enterMultPassThrough?: (ctx: MultPassThroughContext) => void;
	/**
	 * Exit a parse tree produced by the `multPassThrough`
	 * labeled alternative in `DdsIdlParser.multExpression`.
	 * @param ctx the parse tree
	 */
	exitMultPassThrough?: (ctx: MultPassThroughContext) => void;
	/**
	 * Enter a parse tree produced by the `unaryOperation`
	 * labeled alternative in `DdsIdlParser.unaryExpression`.
	 * @param ctx the parse tree
	 */
	enterUnaryOperation?: (ctx: UnaryOperationContext) => void;
	/**
	 * Exit a parse tree produced by the `unaryOperation`
	 * labeled alternative in `DdsIdlParser.unaryExpression`.
	 * @param ctx the parse tree
	 */
	exitUnaryOperation?: (ctx: UnaryOperationContext) => void;
	/**
	 * Enter a parse tree produced by the `unaryPassThrough`
	 * labeled alternative in `DdsIdlParser.unaryExpression`.
	 * @param ctx the parse tree
	 */
	enterUnaryPassThrough?: (ctx: UnaryPassThroughContext) => void;
	/**
	 * Exit a parse tree produced by the `unaryPassThrough`
	 * labeled alternative in `DdsIdlParser.unaryExpression`.
	 * @param ctx the parse tree
	 */
	exitUnaryPassThrough?: (ctx: UnaryPassThroughContext) => void;
	/**
	 * Enter a parse tree produced by `DdsIdlParser.unaryOperator`.
	 * @param ctx the parse tree
	 */
	enterUnaryOperator?: (ctx: UnaryOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `DdsIdlParser.unaryOperator`.
	 * @param ctx the parse tree
	 */
	exitUnaryOperator?: (ctx: UnaryOperatorContext) => void;
	/**
	 * Enter a parse tree produced by `DdsIdlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterPrimaryExpression?: (ctx: PrimaryExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `DdsIdlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitPrimaryExpression?: (ctx: PrimaryExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `DdsIdlParser.literal`.
	 * @param ctx the parse tree
	 */
	enterLiteral?: (ctx: LiteralContext) => void;
	/**
	 * Exit a parse tree produced by `DdsIdlParser.literal`.
	 * @param ctx the parse tree
	 */
	exitLiteral?: (ctx: LiteralContext) => void;
	/**
	 * Enter a parse tree produced by `DdsIdlParser.positiveIntegerConstant`.
	 * @param ctx the parse tree
	 */
	enterPositiveIntegerConstant?: (ctx: PositiveIntegerConstantContext) => void;
	/**
	 * Exit a parse tree produced by `DdsIdlParser.positiveIntegerConstant`.
	 * @param ctx the parse tree
	 */
	exitPositiveIntegerConstant?: (ctx: PositiveIntegerConstantContext) => void;
	/**
	 * Enter a parse tree produced by `DdsIdlParser.typeDeclaration`.
	 * @param ctx the parse tree
	 */
	enterTypeDeclaration?: (ctx: TypeDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `DdsIdlParser.typeDeclaration`.
	 * @param ctx the parse tree
	 */
	exitTypeDeclaration?: (ctx: TypeDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `DdsIdlParser.typeSpecification`.
	 * @param ctx the parse tree
	 */
	enterTypeSpecification?: (ctx: TypeSpecificationContext) => void;
	/**
	 * Exit a parse tree produced by `DdsIdlParser.typeSpecification`.
	 * @param ctx the parse tree
	 */
	exitTypeSpecification?: (ctx: TypeSpecificationContext) => void;
	/**
	 * Enter a parse tree produced by `DdsIdlParser.simpleTypeSpecification`.
	 * @param ctx the parse tree
	 */
	enterSimpleTypeSpecification?: (ctx: SimpleTypeSpecificationContext) => void;
	/**
	 * Exit a parse tree produced by `DdsIdlParser.simpleTypeSpecification`.
	 * @param ctx the parse tree
	 */
	exitSimpleTypeSpecification?: (ctx: SimpleTypeSpecificationContext) => void;
	/**
	 * Enter a parse tree produced by `DdsIdlParser.baseTypeSpecification`.
	 * @param ctx the parse tree
	 */
	enterBaseTypeSpecification?: (ctx: BaseTypeSpecificationContext) => void;
	/**
	 * Exit a parse tree produced by `DdsIdlParser.baseTypeSpecification`.
	 * @param ctx the parse tree
	 */
	exitBaseTypeSpecification?: (ctx: BaseTypeSpecificationContext) => void;
	/**
	 * Enter a parse tree produced by the `singlePrecisionFloatingPointType`
	 * labeled alternative in `DdsIdlParser.floatingPointType`.
	 * @param ctx the parse tree
	 */
	enterSinglePrecisionFloatingPointType?: (ctx: SinglePrecisionFloatingPointTypeContext) => void;
	/**
	 * Exit a parse tree produced by the `singlePrecisionFloatingPointType`
	 * labeled alternative in `DdsIdlParser.floatingPointType`.
	 * @param ctx the parse tree
	 */
	exitSinglePrecisionFloatingPointType?: (ctx: SinglePrecisionFloatingPointTypeContext) => void;
	/**
	 * Enter a parse tree produced by the `doublePrecisionFloatingPointType`
	 * labeled alternative in `DdsIdlParser.floatingPointType`.
	 * @param ctx the parse tree
	 */
	enterDoublePrecisionFloatingPointType?: (ctx: DoublePrecisionFloatingPointTypeContext) => void;
	/**
	 * Exit a parse tree produced by the `doublePrecisionFloatingPointType`
	 * labeled alternative in `DdsIdlParser.floatingPointType`.
	 * @param ctx the parse tree
	 */
	exitDoublePrecisionFloatingPointType?: (ctx: DoublePrecisionFloatingPointTypeContext) => void;
	/**
	 * Enter a parse tree produced by the `quadPrecisionFloatingPointType`
	 * labeled alternative in `DdsIdlParser.floatingPointType`.
	 * @param ctx the parse tree
	 */
	enterQuadPrecisionFloatingPointType?: (ctx: QuadPrecisionFloatingPointTypeContext) => void;
	/**
	 * Exit a parse tree produced by the `quadPrecisionFloatingPointType`
	 * labeled alternative in `DdsIdlParser.floatingPointType`.
	 * @param ctx the parse tree
	 */
	exitQuadPrecisionFloatingPointType?: (ctx: QuadPrecisionFloatingPointTypeContext) => void;
	/**
	 * Enter a parse tree produced by `DdsIdlParser.integerType`.
	 * @param ctx the parse tree
	 */
	enterIntegerType?: (ctx: IntegerTypeContext) => void;
	/**
	 * Exit a parse tree produced by `DdsIdlParser.integerType`.
	 * @param ctx the parse tree
	 */
	exitIntegerType?: (ctx: IntegerTypeContext) => void;
	/**
	 * Enter a parse tree produced by `DdsIdlParser.signedIntegerType`.
	 * @param ctx the parse tree
	 */
	enterSignedIntegerType?: (ctx: SignedIntegerTypeContext) => void;
	/**
	 * Exit a parse tree produced by `DdsIdlParser.signedIntegerType`.
	 * @param ctx the parse tree
	 */
	exitSignedIntegerType?: (ctx: SignedIntegerTypeContext) => void;
	/**
	 * Enter a parse tree produced by `DdsIdlParser.signedShortIntegerType`.
	 * @param ctx the parse tree
	 */
	enterSignedShortIntegerType?: (ctx: SignedShortIntegerTypeContext) => void;
	/**
	 * Exit a parse tree produced by `DdsIdlParser.signedShortIntegerType`.
	 * @param ctx the parse tree
	 */
	exitSignedShortIntegerType?: (ctx: SignedShortIntegerTypeContext) => void;
	/**
	 * Enter a parse tree produced by `DdsIdlParser.signedLongIntegerType`.
	 * @param ctx the parse tree
	 */
	enterSignedLongIntegerType?: (ctx: SignedLongIntegerTypeContext) => void;
	/**
	 * Exit a parse tree produced by `DdsIdlParser.signedLongIntegerType`.
	 * @param ctx the parse tree
	 */
	exitSignedLongIntegerType?: (ctx: SignedLongIntegerTypeContext) => void;
	/**
	 * Enter a parse tree produced by `DdsIdlParser.signedLongLongIntegerType`.
	 * @param ctx the parse tree
	 */
	enterSignedLongLongIntegerType?: (ctx: SignedLongLongIntegerTypeContext) => void;
	/**
	 * Exit a parse tree produced by `DdsIdlParser.signedLongLongIntegerType`.
	 * @param ctx the parse tree
	 */
	exitSignedLongLongIntegerType?: (ctx: SignedLongLongIntegerTypeContext) => void;
	/**
	 * Enter a parse tree produced by `DdsIdlParser.signedTinyIntegerType`.
	 * @param ctx the parse tree
	 */
	enterSignedTinyIntegerType?: (ctx: SignedTinyIntegerTypeContext) => void;
	/**
	 * Exit a parse tree produced by `DdsIdlParser.signedTinyIntegerType`.
	 * @param ctx the parse tree
	 */
	exitSignedTinyIntegerType?: (ctx: SignedTinyIntegerTypeContext) => void;
	/**
	 * Enter a parse tree produced by `DdsIdlParser.unsignedIntegerType`.
	 * @param ctx the parse tree
	 */
	enterUnsignedIntegerType?: (ctx: UnsignedIntegerTypeContext) => void;
	/**
	 * Exit a parse tree produced by `DdsIdlParser.unsignedIntegerType`.
	 * @param ctx the parse tree
	 */
	exitUnsignedIntegerType?: (ctx: UnsignedIntegerTypeContext) => void;
	/**
	 * Enter a parse tree produced by `DdsIdlParser.unsignedShortIntegerType`.
	 * @param ctx the parse tree
	 */
	enterUnsignedShortIntegerType?: (ctx: UnsignedShortIntegerTypeContext) => void;
	/**
	 * Exit a parse tree produced by `DdsIdlParser.unsignedShortIntegerType`.
	 * @param ctx the parse tree
	 */
	exitUnsignedShortIntegerType?: (ctx: UnsignedShortIntegerTypeContext) => void;
	/**
	 * Enter a parse tree produced by `DdsIdlParser.unsignedLongIntegerType`.
	 * @param ctx the parse tree
	 */
	enterUnsignedLongIntegerType?: (ctx: UnsignedLongIntegerTypeContext) => void;
	/**
	 * Exit a parse tree produced by `DdsIdlParser.unsignedLongIntegerType`.
	 * @param ctx the parse tree
	 */
	exitUnsignedLongIntegerType?: (ctx: UnsignedLongIntegerTypeContext) => void;
	/**
	 * Enter a parse tree produced by `DdsIdlParser.unsignedLongLongIntegerType`.
	 * @param ctx the parse tree
	 */
	enterUnsignedLongLongIntegerType?: (ctx: UnsignedLongLongIntegerTypeContext) => void;
	/**
	 * Exit a parse tree produced by `DdsIdlParser.unsignedLongLongIntegerType`.
	 * @param ctx the parse tree
	 */
	exitUnsignedLongLongIntegerType?: (ctx: UnsignedLongLongIntegerTypeContext) => void;
	/**
	 * Enter a parse tree produced by `DdsIdlParser.unsignedTinyIntegerType`.
	 * @param ctx the parse tree
	 */
	enterUnsignedTinyIntegerType?: (ctx: UnsignedTinyIntegerTypeContext) => void;
	/**
	 * Exit a parse tree produced by `DdsIdlParser.unsignedTinyIntegerType`.
	 * @param ctx the parse tree
	 */
	exitUnsignedTinyIntegerType?: (ctx: UnsignedTinyIntegerTypeContext) => void;
	/**
	 * Enter a parse tree produced by `DdsIdlParser.charType`.
	 * @param ctx the parse tree
	 */
	enterCharType?: (ctx: CharTypeContext) => void;
	/**
	 * Exit a parse tree produced by `DdsIdlParser.charType`.
	 * @param ctx the parse tree
	 */
	exitCharType?: (ctx: CharTypeContext) => void;
	/**
	 * Enter a parse tree produced by `DdsIdlParser.wideCharType`.
	 * @param ctx the parse tree
	 */
	enterWideCharType?: (ctx: WideCharTypeContext) => void;
	/**
	 * Exit a parse tree produced by `DdsIdlParser.wideCharType`.
	 * @param ctx the parse tree
	 */
	exitWideCharType?: (ctx: WideCharTypeContext) => void;
	/**
	 * Enter a parse tree produced by `DdsIdlParser.booleanType`.
	 * @param ctx the parse tree
	 */
	enterBooleanType?: (ctx: BooleanTypeContext) => void;
	/**
	 * Exit a parse tree produced by `DdsIdlParser.booleanType`.
	 * @param ctx the parse tree
	 */
	exitBooleanType?: (ctx: BooleanTypeContext) => void;
	/**
	 * Enter a parse tree produced by `DdsIdlParser.octetType`.
	 * @param ctx the parse tree
	 */
	enterOctetType?: (ctx: OctetTypeContext) => void;
	/**
	 * Exit a parse tree produced by `DdsIdlParser.octetType`.
	 * @param ctx the parse tree
	 */
	exitOctetType?: (ctx: OctetTypeContext) => void;
	/**
	 * Enter a parse tree produced by `DdsIdlParser.templateTypeSpecification`.
	 * @param ctx the parse tree
	 */
	enterTemplateTypeSpecification?: (ctx: TemplateTypeSpecificationContext) => void;
	/**
	 * Exit a parse tree produced by `DdsIdlParser.templateTypeSpecification`.
	 * @param ctx the parse tree
	 */
	exitTemplateTypeSpecification?: (ctx: TemplateTypeSpecificationContext) => void;
	/**
	 * Enter a parse tree produced by the `boundedSequenceType`
	 * labeled alternative in `DdsIdlParser.sequenceType`.
	 * @param ctx the parse tree
	 */
	enterBoundedSequenceType?: (ctx: BoundedSequenceTypeContext) => void;
	/**
	 * Exit a parse tree produced by the `boundedSequenceType`
	 * labeled alternative in `DdsIdlParser.sequenceType`.
	 * @param ctx the parse tree
	 */
	exitBoundedSequenceType?: (ctx: BoundedSequenceTypeContext) => void;
	/**
	 * Enter a parse tree produced by the `unboundedSequenceType`
	 * labeled alternative in `DdsIdlParser.sequenceType`.
	 * @param ctx the parse tree
	 */
	enterUnboundedSequenceType?: (ctx: UnboundedSequenceTypeContext) => void;
	/**
	 * Exit a parse tree produced by the `unboundedSequenceType`
	 * labeled alternative in `DdsIdlParser.sequenceType`.
	 * @param ctx the parse tree
	 */
	exitUnboundedSequenceType?: (ctx: UnboundedSequenceTypeContext) => void;
	/**
	 * Enter a parse tree produced by the `boundedStringType`
	 * labeled alternative in `DdsIdlParser.stringType`.
	 * @param ctx the parse tree
	 */
	enterBoundedStringType?: (ctx: BoundedStringTypeContext) => void;
	/**
	 * Exit a parse tree produced by the `boundedStringType`
	 * labeled alternative in `DdsIdlParser.stringType`.
	 * @param ctx the parse tree
	 */
	exitBoundedStringType?: (ctx: BoundedStringTypeContext) => void;
	/**
	 * Enter a parse tree produced by the `unboundedStringType`
	 * labeled alternative in `DdsIdlParser.stringType`.
	 * @param ctx the parse tree
	 */
	enterUnboundedStringType?: (ctx: UnboundedStringTypeContext) => void;
	/**
	 * Exit a parse tree produced by the `unboundedStringType`
	 * labeled alternative in `DdsIdlParser.stringType`.
	 * @param ctx the parse tree
	 */
	exitUnboundedStringType?: (ctx: UnboundedStringTypeContext) => void;
	/**
	 * Enter a parse tree produced by the `boundedWideStringType`
	 * labeled alternative in `DdsIdlParser.wideStringType`.
	 * @param ctx the parse tree
	 */
	enterBoundedWideStringType?: (ctx: BoundedWideStringTypeContext) => void;
	/**
	 * Exit a parse tree produced by the `boundedWideStringType`
	 * labeled alternative in `DdsIdlParser.wideStringType`.
	 * @param ctx the parse tree
	 */
	exitBoundedWideStringType?: (ctx: BoundedWideStringTypeContext) => void;
	/**
	 * Enter a parse tree produced by the `unboundedWideStringType`
	 * labeled alternative in `DdsIdlParser.wideStringType`.
	 * @param ctx the parse tree
	 */
	enterUnboundedWideStringType?: (ctx: UnboundedWideStringTypeContext) => void;
	/**
	 * Exit a parse tree produced by the `unboundedWideStringType`
	 * labeled alternative in `DdsIdlParser.wideStringType`.
	 * @param ctx the parse tree
	 */
	exitUnboundedWideStringType?: (ctx: UnboundedWideStringTypeContext) => void;
	/**
	 * Enter a parse tree produced by `DdsIdlParser.fixedPointType`.
	 * @param ctx the parse tree
	 */
	enterFixedPointType?: (ctx: FixedPointTypeContext) => void;
	/**
	 * Exit a parse tree produced by `DdsIdlParser.fixedPointType`.
	 * @param ctx the parse tree
	 */
	exitFixedPointType?: (ctx: FixedPointTypeContext) => void;
	/**
	 * Enter a parse tree produced by `DdsIdlParser.fixedPointConstantType`.
	 * @param ctx the parse tree
	 */
	enterFixedPointConstantType?: (ctx: FixedPointConstantTypeContext) => void;
	/**
	 * Exit a parse tree produced by `DdsIdlParser.fixedPointConstantType`.
	 * @param ctx the parse tree
	 */
	exitFixedPointConstantType?: (ctx: FixedPointConstantTypeContext) => void;
	/**
	 * Enter a parse tree produced by `DdsIdlParser.constructedTypeDeclaration`.
	 * @param ctx the parse tree
	 */
	enterConstructedTypeDeclaration?: (ctx: ConstructedTypeDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `DdsIdlParser.constructedTypeDeclaration`.
	 * @param ctx the parse tree
	 */
	exitConstructedTypeDeclaration?: (ctx: ConstructedTypeDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by the `boundedMapType`
	 * labeled alternative in `DdsIdlParser.mapType`.
	 * @param ctx the parse tree
	 */
	enterBoundedMapType?: (ctx: BoundedMapTypeContext) => void;
	/**
	 * Exit a parse tree produced by the `boundedMapType`
	 * labeled alternative in `DdsIdlParser.mapType`.
	 * @param ctx the parse tree
	 */
	exitBoundedMapType?: (ctx: BoundedMapTypeContext) => void;
	/**
	 * Enter a parse tree produced by the `unboundedMapType`
	 * labeled alternative in `DdsIdlParser.mapType`.
	 * @param ctx the parse tree
	 */
	enterUnboundedMapType?: (ctx: UnboundedMapTypeContext) => void;
	/**
	 * Exit a parse tree produced by the `unboundedMapType`
	 * labeled alternative in `DdsIdlParser.mapType`.
	 * @param ctx the parse tree
	 */
	exitUnboundedMapType?: (ctx: UnboundedMapTypeContext) => void;
	/**
	 * Enter a parse tree produced by `DdsIdlParser.bitsetDeclaration`.
	 * @param ctx the parse tree
	 */
	enterBitsetDeclaration?: (ctx: BitsetDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `DdsIdlParser.bitsetDeclaration`.
	 * @param ctx the parse tree
	 */
	exitBitsetDeclaration?: (ctx: BitsetDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `DdsIdlParser.bitfield`.
	 * @param ctx the parse tree
	 */
	enterBitfield?: (ctx: BitfieldContext) => void;
	/**
	 * Exit a parse tree produced by `DdsIdlParser.bitfield`.
	 * @param ctx the parse tree
	 */
	exitBitfield?: (ctx: BitfieldContext) => void;
	/**
	 * Enter a parse tree produced by `DdsIdlParser.bitfieldSpecifier`.
	 * @param ctx the parse tree
	 */
	enterBitfieldSpecifier?: (ctx: BitfieldSpecifierContext) => void;
	/**
	 * Exit a parse tree produced by `DdsIdlParser.bitfieldSpecifier`.
	 * @param ctx the parse tree
	 */
	exitBitfieldSpecifier?: (ctx: BitfieldSpecifierContext) => void;
	/**
	 * Enter a parse tree produced by `DdsIdlParser.bitfieldDestinationType`.
	 * @param ctx the parse tree
	 */
	enterBitfieldDestinationType?: (ctx: BitfieldDestinationTypeContext) => void;
	/**
	 * Exit a parse tree produced by `DdsIdlParser.bitfieldDestinationType`.
	 * @param ctx the parse tree
	 */
	exitBitfieldDestinationType?: (ctx: BitfieldDestinationTypeContext) => void;
	/**
	 * Enter a parse tree produced by `DdsIdlParser.bitmaskDeclaration`.
	 * @param ctx the parse tree
	 */
	enterBitmaskDeclaration?: (ctx: BitmaskDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `DdsIdlParser.bitmaskDeclaration`.
	 * @param ctx the parse tree
	 */
	exitBitmaskDeclaration?: (ctx: BitmaskDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `DdsIdlParser.bitValues`.
	 * @param ctx the parse tree
	 */
	enterBitValues?: (ctx: BitValuesContext) => void;
	/**
	 * Exit a parse tree produced by `DdsIdlParser.bitValues`.
	 * @param ctx the parse tree
	 */
	exitBitValues?: (ctx: BitValuesContext) => void;
	/**
	 * Enter a parse tree produced by `DdsIdlParser.bitValue`.
	 * @param ctx the parse tree
	 */
	enterBitValue?: (ctx: BitValueContext) => void;
	/**
	 * Exit a parse tree produced by `DdsIdlParser.bitValue`.
	 * @param ctx the parse tree
	 */
	exitBitValue?: (ctx: BitValueContext) => void;
	/**
	 * Enter a parse tree produced by `DdsIdlParser.structureDeclaration`.
	 * @param ctx the parse tree
	 */
	enterStructureDeclaration?: (ctx: StructureDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `DdsIdlParser.structureDeclaration`.
	 * @param ctx the parse tree
	 */
	exitStructureDeclaration?: (ctx: StructureDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by the `derivedStructureDefinition`
	 * labeled alternative in `DdsIdlParser.structureDefinition`.
	 * @param ctx the parse tree
	 */
	enterDerivedStructureDefinition?: (ctx: DerivedStructureDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by the `derivedStructureDefinition`
	 * labeled alternative in `DdsIdlParser.structureDefinition`.
	 * @param ctx the parse tree
	 */
	exitDerivedStructureDefinition?: (ctx: DerivedStructureDefinitionContext) => void;
	/**
	 * Enter a parse tree produced by the `emptyStructureDefinition`
	 * labeled alternative in `DdsIdlParser.structureDefinition`.
	 * @param ctx the parse tree
	 */
	enterEmptyStructureDefinition?: (ctx: EmptyStructureDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by the `emptyStructureDefinition`
	 * labeled alternative in `DdsIdlParser.structureDefinition`.
	 * @param ctx the parse tree
	 */
	exitEmptyStructureDefinition?: (ctx: EmptyStructureDefinitionContext) => void;
	/**
	 * Enter a parse tree produced by the `basicStructureDefinition`
	 * labeled alternative in `DdsIdlParser.structureDefinition`.
	 * @param ctx the parse tree
	 */
	enterBasicStructureDefinition?: (ctx: BasicStructureDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by the `basicStructureDefinition`
	 * labeled alternative in `DdsIdlParser.structureDefinition`.
	 * @param ctx the parse tree
	 */
	exitBasicStructureDefinition?: (ctx: BasicStructureDefinitionContext) => void;
	/**
	 * Enter a parse tree produced by `DdsIdlParser.structMember`.
	 * @param ctx the parse tree
	 */
	enterStructMember?: (ctx: StructMemberContext) => void;
	/**
	 * Exit a parse tree produced by `DdsIdlParser.structMember`.
	 * @param ctx the parse tree
	 */
	exitStructMember?: (ctx: StructMemberContext) => void;
	/**
	 * Enter a parse tree produced by `DdsIdlParser.structureForwardDeclaration`.
	 * @param ctx the parse tree
	 */
	enterStructureForwardDeclaration?: (ctx: StructureForwardDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `DdsIdlParser.structureForwardDeclaration`.
	 * @param ctx the parse tree
	 */
	exitStructureForwardDeclaration?: (ctx: StructureForwardDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `DdsIdlParser.unionDeclaration`.
	 * @param ctx the parse tree
	 */
	enterUnionDeclaration?: (ctx: UnionDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `DdsIdlParser.unionDeclaration`.
	 * @param ctx the parse tree
	 */
	exitUnionDeclaration?: (ctx: UnionDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `DdsIdlParser.unionDefinition`.
	 * @param ctx the parse tree
	 */
	enterUnionDefinition?: (ctx: UnionDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `DdsIdlParser.unionDefinition`.
	 * @param ctx the parse tree
	 */
	exitUnionDefinition?: (ctx: UnionDefinitionContext) => void;
	/**
	 * Enter a parse tree produced by `DdsIdlParser.switchTypeSpecification`.
	 * @param ctx the parse tree
	 */
	enterSwitchTypeSpecification?: (ctx: SwitchTypeSpecificationContext) => void;
	/**
	 * Exit a parse tree produced by `DdsIdlParser.switchTypeSpecification`.
	 * @param ctx the parse tree
	 */
	exitSwitchTypeSpecification?: (ctx: SwitchTypeSpecificationContext) => void;
	/**
	 * Enter a parse tree produced by `DdsIdlParser.switchBody`.
	 * @param ctx the parse tree
	 */
	enterSwitchBody?: (ctx: SwitchBodyContext) => void;
	/**
	 * Exit a parse tree produced by `DdsIdlParser.switchBody`.
	 * @param ctx the parse tree
	 */
	exitSwitchBody?: (ctx: SwitchBodyContext) => void;
	/**
	 * Enter a parse tree produced by `DdsIdlParser.case`.
	 * @param ctx the parse tree
	 */
	enterCase?: (ctx: CaseContext) => void;
	/**
	 * Exit a parse tree produced by `DdsIdlParser.case`.
	 * @param ctx the parse tree
	 */
	exitCase?: (ctx: CaseContext) => void;
	/**
	 * Enter a parse tree produced by the `literalValueCaseCondition`
	 * labeled alternative in `DdsIdlParser.caseCondition`.
	 * @param ctx the parse tree
	 */
	enterLiteralValueCaseCondition?: (ctx: LiteralValueCaseConditionContext) => void;
	/**
	 * Exit a parse tree produced by the `literalValueCaseCondition`
	 * labeled alternative in `DdsIdlParser.caseCondition`.
	 * @param ctx the parse tree
	 */
	exitLiteralValueCaseCondition?: (ctx: LiteralValueCaseConditionContext) => void;
	/**
	 * Enter a parse tree produced by the `constantDefCaseCondition`
	 * labeled alternative in `DdsIdlParser.caseCondition`.
	 * @param ctx the parse tree
	 */
	enterConstantDefCaseCondition?: (ctx: ConstantDefCaseConditionContext) => void;
	/**
	 * Exit a parse tree produced by the `constantDefCaseCondition`
	 * labeled alternative in `DdsIdlParser.caseCondition`.
	 * @param ctx the parse tree
	 */
	exitConstantDefCaseCondition?: (ctx: ConstantDefCaseConditionContext) => void;
	/**
	 * Enter a parse tree produced by the `defaultCaseCondition`
	 * labeled alternative in `DdsIdlParser.caseCondition`.
	 * @param ctx the parse tree
	 */
	enterDefaultCaseCondition?: (ctx: DefaultCaseConditionContext) => void;
	/**
	 * Exit a parse tree produced by the `defaultCaseCondition`
	 * labeled alternative in `DdsIdlParser.caseCondition`.
	 * @param ctx the parse tree
	 */
	exitDefaultCaseCondition?: (ctx: DefaultCaseConditionContext) => void;
	/**
	 * Enter a parse tree produced by `DdsIdlParser.unionElementSpecification`.
	 * @param ctx the parse tree
	 */
	enterUnionElementSpecification?: (ctx: UnionElementSpecificationContext) => void;
	/**
	 * Exit a parse tree produced by `DdsIdlParser.unionElementSpecification`.
	 * @param ctx the parse tree
	 */
	exitUnionElementSpecification?: (ctx: UnionElementSpecificationContext) => void;
	/**
	 * Enter a parse tree produced by `DdsIdlParser.unionForwardDeclaration`.
	 * @param ctx the parse tree
	 */
	enterUnionForwardDeclaration?: (ctx: UnionForwardDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `DdsIdlParser.unionForwardDeclaration`.
	 * @param ctx the parse tree
	 */
	exitUnionForwardDeclaration?: (ctx: UnionForwardDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `DdsIdlParser.enumDeclaration`.
	 * @param ctx the parse tree
	 */
	enterEnumDeclaration?: (ctx: EnumDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `DdsIdlParser.enumDeclaration`.
	 * @param ctx the parse tree
	 */
	exitEnumDeclaration?: (ctx: EnumDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `DdsIdlParser.enumerator`.
	 * @param ctx the parse tree
	 */
	enterEnumerator?: (ctx: EnumeratorContext) => void;
	/**
	 * Exit a parse tree produced by `DdsIdlParser.enumerator`.
	 * @param ctx the parse tree
	 */
	exitEnumerator?: (ctx: EnumeratorContext) => void;
	/**
	 * Enter a parse tree produced by `DdsIdlParser.arrayDeclarator`.
	 * @param ctx the parse tree
	 */
	enterArrayDeclarator?: (ctx: ArrayDeclaratorContext) => void;
	/**
	 * Exit a parse tree produced by `DdsIdlParser.arrayDeclarator`.
	 * @param ctx the parse tree
	 */
	exitArrayDeclarator?: (ctx: ArrayDeclaratorContext) => void;
	/**
	 * Enter a parse tree produced by `DdsIdlParser.fixedArraySize`.
	 * @param ctx the parse tree
	 */
	enterFixedArraySize?: (ctx: FixedArraySizeContext) => void;
	/**
	 * Exit a parse tree produced by `DdsIdlParser.fixedArraySize`.
	 * @param ctx the parse tree
	 */
	exitFixedArraySize?: (ctx: FixedArraySizeContext) => void;
	/**
	 * Enter a parse tree produced by `DdsIdlParser.simpleDeclarator`.
	 * @param ctx the parse tree
	 */
	enterSimpleDeclarator?: (ctx: SimpleDeclaratorContext) => void;
	/**
	 * Exit a parse tree produced by `DdsIdlParser.simpleDeclarator`.
	 * @param ctx the parse tree
	 */
	exitSimpleDeclarator?: (ctx: SimpleDeclaratorContext) => void;
	/**
	 * Enter a parse tree produced by `DdsIdlParser.typeAliasDeclaration`.
	 * @param ctx the parse tree
	 */
	enterTypeAliasDeclaration?: (ctx: TypeAliasDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `DdsIdlParser.typeAliasDeclaration`.
	 * @param ctx the parse tree
	 */
	exitTypeAliasDeclaration?: (ctx: TypeAliasDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `DdsIdlParser.typeDeclarator`.
	 * @param ctx the parse tree
	 */
	enterTypeDeclarator?: (ctx: TypeDeclaratorContext) => void;
	/**
	 * Exit a parse tree produced by `DdsIdlParser.typeDeclarator`.
	 * @param ctx the parse tree
	 */
	exitTypeDeclarator?: (ctx: TypeDeclaratorContext) => void;
	/**
	 * Enter a parse tree produced by `DdsIdlParser.typeDeclaratorType`.
	 * @param ctx the parse tree
	 */
	enterTypeDeclaratorType?: (ctx: TypeDeclaratorTypeContext) => void;
	/**
	 * Exit a parse tree produced by `DdsIdlParser.typeDeclaratorType`.
	 * @param ctx the parse tree
	 */
	exitTypeDeclaratorType?: (ctx: TypeDeclaratorTypeContext) => void;
	/**
	 * Enter a parse tree produced by `DdsIdlParser.anyDeclarators`.
	 * @param ctx the parse tree
	 */
	enterAnyDeclarators?: (ctx: AnyDeclaratorsContext) => void;
	/**
	 * Exit a parse tree produced by `DdsIdlParser.anyDeclarators`.
	 * @param ctx the parse tree
	 */
	exitAnyDeclarators?: (ctx: AnyDeclaratorsContext) => void;
	/**
	 * Enter a parse tree produced by `DdsIdlParser.anyDeclarator`.
	 * @param ctx the parse tree
	 */
	enterAnyDeclarator?: (ctx: AnyDeclaratorContext) => void;
	/**
	 * Exit a parse tree produced by `DdsIdlParser.anyDeclarator`.
	 * @param ctx the parse tree
	 */
	exitAnyDeclarator?: (ctx: AnyDeclaratorContext) => void;
	/**
	 * Enter a parse tree produced by `DdsIdlParser.annotatableDeclarators`.
	 * @param ctx the parse tree
	 */
	enterAnnotatableDeclarators?: (ctx: AnnotatableDeclaratorsContext) => void;
	/**
	 * Exit a parse tree produced by `DdsIdlParser.annotatableDeclarators`.
	 * @param ctx the parse tree
	 */
	exitAnnotatableDeclarators?: (ctx: AnnotatableDeclaratorsContext) => void;
	/**
	 * Enter a parse tree produced by `DdsIdlParser.annotatableDeclarator`.
	 * @param ctx the parse tree
	 */
	enterAnnotatableDeclarator?: (ctx: AnnotatableDeclaratorContext) => void;
	/**
	 * Exit a parse tree produced by `DdsIdlParser.annotatableDeclarator`.
	 * @param ctx the parse tree
	 */
	exitAnnotatableDeclarator?: (ctx: AnnotatableDeclaratorContext) => void;
	/**
	 * Enter a parse tree produced by `DdsIdlParser.annotationDeclaration`.
	 * @param ctx the parse tree
	 */
	enterAnnotationDeclaration?: (ctx: AnnotationDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `DdsIdlParser.annotationDeclaration`.
	 * @param ctx the parse tree
	 */
	exitAnnotationDeclaration?: (ctx: AnnotationDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `DdsIdlParser.annotationHeader`.
	 * @param ctx the parse tree
	 */
	enterAnnotationHeader?: (ctx: AnnotationHeaderContext) => void;
	/**
	 * Exit a parse tree produced by `DdsIdlParser.annotationHeader`.
	 * @param ctx the parse tree
	 */
	exitAnnotationHeader?: (ctx: AnnotationHeaderContext) => void;
	/**
	 * Enter a parse tree produced by `DdsIdlParser.annotationBody`.
	 * @param ctx the parse tree
	 */
	enterAnnotationBody?: (ctx: AnnotationBodyContext) => void;
	/**
	 * Exit a parse tree produced by `DdsIdlParser.annotationBody`.
	 * @param ctx the parse tree
	 */
	exitAnnotationBody?: (ctx: AnnotationBodyContext) => void;
	/**
	 * Enter a parse tree produced by `DdsIdlParser.annotationBodyItem`.
	 * @param ctx the parse tree
	 */
	enterAnnotationBodyItem?: (ctx: AnnotationBodyItemContext) => void;
	/**
	 * Exit a parse tree produced by `DdsIdlParser.annotationBodyItem`.
	 * @param ctx the parse tree
	 */
	exitAnnotationBodyItem?: (ctx: AnnotationBodyItemContext) => void;
	/**
	 * Enter a parse tree produced by `DdsIdlParser.annotationMember`.
	 * @param ctx the parse tree
	 */
	enterAnnotationMember?: (ctx: AnnotationMemberContext) => void;
	/**
	 * Exit a parse tree produced by `DdsIdlParser.annotationMember`.
	 * @param ctx the parse tree
	 */
	exitAnnotationMember?: (ctx: AnnotationMemberContext) => void;
	/**
	 * Enter a parse tree produced by `DdsIdlParser.annotationMemberType`.
	 * @param ctx the parse tree
	 */
	enterAnnotationMemberType?: (ctx: AnnotationMemberTypeContext) => void;
	/**
	 * Exit a parse tree produced by `DdsIdlParser.annotationMemberType`.
	 * @param ctx the parse tree
	 */
	exitAnnotationMemberType?: (ctx: AnnotationMemberTypeContext) => void;
	/**
	 * Enter a parse tree produced by `DdsIdlParser.annotationApplications`.
	 * @param ctx the parse tree
	 */
	enterAnnotationApplications?: (ctx: AnnotationApplicationsContext) => void;
	/**
	 * Exit a parse tree produced by `DdsIdlParser.annotationApplications`.
	 * @param ctx the parse tree
	 */
	exitAnnotationApplications?: (ctx: AnnotationApplicationsContext) => void;
	/**
	 * Enter a parse tree produced by `DdsIdlParser.annotationApplication`.
	 * @param ctx the parse tree
	 */
	enterAnnotationApplication?: (ctx: AnnotationApplicationContext) => void;
	/**
	 * Exit a parse tree produced by `DdsIdlParser.annotationApplication`.
	 * @param ctx the parse tree
	 */
	exitAnnotationApplication?: (ctx: AnnotationApplicationContext) => void;
	/**
	 * Enter a parse tree produced by the `singleAnonymousAnnotationApplicationParameter`
	 * labeled alternative in `DdsIdlParser.annotationApplicationParameters`.
	 * @param ctx the parse tree
	 */
	enterSingleAnonymousAnnotationApplicationParameter?: (ctx: SingleAnonymousAnnotationApplicationParameterContext) => void;
	/**
	 * Exit a parse tree produced by the `singleAnonymousAnnotationApplicationParameter`
	 * labeled alternative in `DdsIdlParser.annotationApplicationParameters`.
	 * @param ctx the parse tree
	 */
	exitSingleAnonymousAnnotationApplicationParameter?: (ctx: SingleAnonymousAnnotationApplicationParameterContext) => void;
	/**
	 * Enter a parse tree produced by the `multipleNamedAnnotationApplicationParameters`
	 * labeled alternative in `DdsIdlParser.annotationApplicationParameters`.
	 * @param ctx the parse tree
	 */
	enterMultipleNamedAnnotationApplicationParameters?: (ctx: MultipleNamedAnnotationApplicationParametersContext) => void;
	/**
	 * Exit a parse tree produced by the `multipleNamedAnnotationApplicationParameters`
	 * labeled alternative in `DdsIdlParser.annotationApplicationParameters`.
	 * @param ctx the parse tree
	 */
	exitMultipleNamedAnnotationApplicationParameters?: (ctx: MultipleNamedAnnotationApplicationParametersContext) => void;
	/**
	 * Enter a parse tree produced by `DdsIdlParser.annotationApplicationParameter`.
	 * @param ctx the parse tree
	 */
	enterAnnotationApplicationParameter?: (ctx: AnnotationApplicationParameterContext) => void;
	/**
	 * Exit a parse tree produced by `DdsIdlParser.annotationApplicationParameter`.
	 * @param ctx the parse tree
	 */
	exitAnnotationApplicationParameter?: (ctx: AnnotationApplicationParameterContext) => void;
	/**
	 * Enter a parse tree produced by `DdsIdlParser.identifier`.
	 * @param ctx the parse tree
	 */
	enterIdentifier?: (ctx: IdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `DdsIdlParser.identifier`.
	 * @param ctx the parse tree
	 */
	exitIdentifier?: (ctx: IdentifierContext) => void;
}

