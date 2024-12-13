// Generated from src/parser/DdsJsIdl.g4 by ANTLR 4.13.1
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import DdsJsIdlVisitor from "./DdsJsIdlVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;


// @ts-nocheck

export default class DdsJsIdlParser extends Parser {
	public static readonly OPEN_BRACE = 1;
	public static readonly ASSIGN_OP = 2;
	public static readonly CLOSE_BRACE = 3;
	public static readonly STAT_END = 4;
	public static readonly OPEN_ANGLE = 5;
	public static readonly CLOSE_ANGLE = 6;
	public static readonly OPEN_SQUARE = 7;
	public static readonly CLOSE_SQUARE = 8;
	public static readonly COMMA_SEP = 9;
	public static readonly SCOPE_OP = 10;
	public static readonly COLON_SEP = 11;
	public static readonly OPEN_PAREN = 12;
	public static readonly CLOSE_PAREN = 13;
	public static readonly MINUS_OP = 14;
	public static readonly DOT_OP = 15;
	public static readonly MODULE_KW = 16;
	public static readonly TYPEDEF_KW = 17;
	public static readonly CONST_KW = 18;
	public static readonly ENUM_KW = 19;
	public static readonly OCTET_KW = 20;
	public static readonly UNSIGNED_KW = 21;
	public static readonly SHORT_KW = 22;
	public static readonly LONG_KW = 23;
	public static readonly FLOAT_KW = 24;
	public static readonly DOUBLE_KW = 25;
	public static readonly STRING_KW = 26;
	public static readonly SEQUENCE_KW = 27;
	public static readonly STRUCT_KW = 28;
	public static readonly VALUETYPE_KW = 29;
	public static readonly UNION_KW = 30;
	public static readonly SWITCH_KW = 31;
	public static readonly CASE_KW = 32;
	public static readonly BOOLEAN_KW = 33;
	public static readonly CHAR_KW = 34;
	public static readonly BOOLEAN_TRUE = 35;
	public static readonly BOOLEAN_FALSE = 36;
	public static readonly DEFAULT_KW = 37;
	public static readonly IDENTIFIER = 38;
	public static readonly NATURAL_NUMBER = 39;
	public static readonly HEXADECIMAL_LITERAL = 40;
	public static readonly OCTAL_LITERAL = 41;
	public static readonly DIGIT_SEQUENCE = 42;
	public static readonly REAL_NUMBER = 43;
	public static readonly STRING_LITERAL = 44;
	public static readonly CHAR_LITERAL = 45;
	public static readonly FLOAT_EXP_PREFIX = 46;
	public static readonly FIXED_PT_SUFFIX = 47;
	public static readonly WS = 48;
	public static readonly SL_COMMENT = 49;
	public static readonly ML_COMMENT = 50;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_translationUnit = 0;
	public static readonly RULE_module = 1;
	public static readonly RULE_moduleMember = 2;
	public static readonly RULE_typeAlias = 3;
	public static readonly RULE_typeDescription = 4;
	public static readonly RULE_scopedName = 5;
	public static readonly RULE_constantDefinition = 6;
	public static readonly RULE_enumDefinition = 7;
	public static readonly RULE_enumLiteral = 8;
	public static readonly RULE_dataStructureDefinition = 9;
	public static readonly RULE_memberDefinition = 10;
	public static readonly RULE_unionDefinition = 11;
	public static readonly RULE_unionDiscriminator = 12;
	public static readonly RULE_unionMemberDefinition = 13;
	public static readonly RULE_unionCaseLabel = 14;
	public static readonly RULE_unionCaseConstantExpr = 15;
	public static readonly RULE_sequenceType = 16;
	public static readonly RULE_stringType = 17;
	public static readonly RULE_arrayDimensions = 18;
	public static readonly RULE_sizeDefinition = 19;
	public static readonly RULE_primitiveType = 20;
	public static readonly RULE_intType = 21;
	public static readonly RULE_floatType = 22;
	public static readonly RULE_booleanType = 23;
	public static readonly RULE_charType = 24;
	public static readonly RULE_literalValue = 25;
	public static readonly RULE_charLiteral = 26;
	public static readonly RULE_stringLiteral = 27;
	public static readonly RULE_booleanLiteral = 28;
	public static readonly RULE_integerLiteral = 29;
	public static readonly RULE_signedInteger = 30;
	public static readonly RULE_floatingPointLiteral = 31;
	public static readonly RULE_fixedPointLiteral = 32;
	public static readonly literalNames: (string | null)[] = [ null, "'{'", 
                                                            "'='", "'}'", 
                                                            "';'", "'<'", 
                                                            "'>'", "'['", 
                                                            "']'", "','", 
                                                            "'::'", "':'", 
                                                            "'('", "')'", 
                                                            "'-'", "'.'", 
                                                            "'module'", 
                                                            "'typedef'", 
                                                            "'const'", "'enum'", 
                                                            "'octet'", "'unsigned'", 
                                                            "'short'", "'long'", 
                                                            "'float'", "'double'", 
                                                            "'string'", 
                                                            "'sequence'", 
                                                            "'struct'", 
                                                            "'valuetype'", 
                                                            "'union'", "'switch'", 
                                                            "'case'", "'boolean'", 
                                                            "'char'", "'TRUE'", 
                                                            "'FALSE'", "'default'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "OPEN_BRACE", 
                                                             "ASSIGN_OP", 
                                                             "CLOSE_BRACE", 
                                                             "STAT_END", 
                                                             "OPEN_ANGLE", 
                                                             "CLOSE_ANGLE", 
                                                             "OPEN_SQUARE", 
                                                             "CLOSE_SQUARE", 
                                                             "COMMA_SEP", 
                                                             "SCOPE_OP", 
                                                             "COLON_SEP", 
                                                             "OPEN_PAREN", 
                                                             "CLOSE_PAREN", 
                                                             "MINUS_OP", 
                                                             "DOT_OP", "MODULE_KW", 
                                                             "TYPEDEF_KW", 
                                                             "CONST_KW", 
                                                             "ENUM_KW", 
                                                             "OCTET_KW", 
                                                             "UNSIGNED_KW", 
                                                             "SHORT_KW", 
                                                             "LONG_KW", 
                                                             "FLOAT_KW", 
                                                             "DOUBLE_KW", 
                                                             "STRING_KW", 
                                                             "SEQUENCE_KW", 
                                                             "STRUCT_KW", 
                                                             "VALUETYPE_KW", 
                                                             "UNION_KW", 
                                                             "SWITCH_KW", 
                                                             "CASE_KW", 
                                                             "BOOLEAN_KW", 
                                                             "CHAR_KW", 
                                                             "BOOLEAN_TRUE", 
                                                             "BOOLEAN_FALSE", 
                                                             "DEFAULT_KW", 
                                                             "IDENTIFIER", 
                                                             "NATURAL_NUMBER", 
                                                             "HEXADECIMAL_LITERAL", 
                                                             "OCTAL_LITERAL", 
                                                             "DIGIT_SEQUENCE", 
                                                             "REAL_NUMBER", 
                                                             "STRING_LITERAL", 
                                                             "CHAR_LITERAL", 
                                                             "FLOAT_EXP_PREFIX", 
                                                             "FIXED_PT_SUFFIX", 
                                                             "WS", "SL_COMMENT", 
                                                             "ML_COMMENT" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"translationUnit", "module", "moduleMember", "typeAlias", "typeDescription", 
		"scopedName", "constantDefinition", "enumDefinition", "enumLiteral", "dataStructureDefinition", 
		"memberDefinition", "unionDefinition", "unionDiscriminator", "unionMemberDefinition", 
		"unionCaseLabel", "unionCaseConstantExpr", "sequenceType", "stringType", 
		"arrayDimensions", "sizeDefinition", "primitiveType", "intType", "floatType", 
		"booleanType", "charType", "literalValue", "charLiteral", "stringLiteral", 
		"booleanLiteral", "integerLiteral", "signedInteger", "floatingPointLiteral", 
		"fixedPointLiteral",
	];
	public get grammarFileName(): string { return "DdsJsIdl.g4"; }
	public get literalNames(): (string | null)[] { return DdsJsIdlParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return DdsJsIdlParser.symbolicNames; }
	public get ruleNames(): string[] { return DdsJsIdlParser.ruleNames; }
	public get serializedATN(): number[] { return DdsJsIdlParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, DdsJsIdlParser._ATN, DdsJsIdlParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public translationUnit(): TranslationUnitContext {
		let localctx: TranslationUnitContext = new TranslationUnitContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, DdsJsIdlParser.RULE_translationUnit);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 67;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 66;
				this.module_();
				}
				}
				this.state = 69;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===16);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public module_(): ModuleContext {
		let localctx: ModuleContext = new ModuleContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, DdsJsIdlParser.RULE_module);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 71;
			this.match(DdsJsIdlParser.MODULE_KW);
			this.state = 72;
			this.match(DdsJsIdlParser.IDENTIFIER);
			this.state = 73;
			this.match(DdsJsIdlParser.OPEN_BRACE);
			this.state = 77;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1343160320) !== 0)) {
				{
				{
				this.state = 74;
				this.moduleMember();
				}
				}
				this.state = 79;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 80;
			this.match(DdsJsIdlParser.CLOSE_BRACE);
			this.state = 82;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===4) {
				{
				this.state = 81;
				this.match(DdsJsIdlParser.STAT_END);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public moduleMember(): ModuleMemberContext {
		let localctx: ModuleMemberContext = new ModuleMemberContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, DdsJsIdlParser.RULE_moduleMember);
		try {
			this.state = 90;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 28:
				localctx = new DataStructureModuleMemberContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 84;
				this.dataStructureDefinition();
				}
				break;
			case 17:
				localctx = new TypeAliasModuleMemberContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 85;
				this.typeAlias();
				}
				break;
			case 18:
				localctx = new ConstantModuleMemberContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 86;
				this.constantDefinition();
				}
				break;
			case 19:
				localctx = new EnumModuleMemberContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 87;
				this.enumDefinition();
				}
				break;
			case 30:
				localctx = new UnionModuleMemberContext(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 88;
				this.unionDefinition();
				}
				break;
			case 16:
				localctx = new SubmoduleModuleMemberContext(this, localctx);
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 89;
				this.module_();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public typeAlias(): TypeAliasContext {
		let localctx: TypeAliasContext = new TypeAliasContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, DdsJsIdlParser.RULE_typeAlias);
		try {
			this.state = 103;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				localctx = new NonArrayTypedefContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 92;
				this.match(DdsJsIdlParser.TYPEDEF_KW);
				this.state = 93;
				this.typeDescription();
				this.state = 94;
				this.match(DdsJsIdlParser.IDENTIFIER);
				this.state = 95;
				this.match(DdsJsIdlParser.STAT_END);
				}
				break;
			case 2:
				localctx = new ArrayTypedefContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 97;
				this.match(DdsJsIdlParser.TYPEDEF_KW);
				this.state = 98;
				this.typeDescription();
				this.state = 99;
				this.match(DdsJsIdlParser.IDENTIFIER);
				this.state = 100;
				this.arrayDimensions();
				this.state = 101;
				this.match(DdsJsIdlParser.STAT_END);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public typeDescription(): TypeDescriptionContext {
		let localctx: TypeDescriptionContext = new TypeDescriptionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, DdsJsIdlParser.RULE_typeDescription);
		try {
			this.state = 109;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 27:
				localctx = new SequenceTypeDescContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 105;
				this.sequenceType();
				}
				break;
			case 26:
				localctx = new StringTypeDescContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 106;
				this.stringType();
				}
				break;
			case 20:
			case 21:
			case 22:
			case 23:
			case 24:
			case 25:
			case 33:
			case 34:
				localctx = new PrimitiveTypeDescContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 107;
				this.primitiveType();
				}
				break;
			case 10:
			case 38:
				localctx = new CustomTypeNameDescContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 108;
				this.scopedName();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public scopedName(): ScopedNameContext {
		let localctx: ScopedNameContext = new ScopedNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, DdsJsIdlParser.RULE_scopedName);
		let _la: number;
		try {
			this.state = 123;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 38:
				localctx = new RelativeScopedNameContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 111;
				this.match(DdsJsIdlParser.IDENTIFIER);
				this.state = 116;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===10) {
					{
					{
					this.state = 112;
					this.match(DdsJsIdlParser.SCOPE_OP);
					this.state = 113;
					this.match(DdsJsIdlParser.IDENTIFIER);
					}
					}
					this.state = 118;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case 10:
				localctx = new AbsoluteScopedNameContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 119;
				this.match(DdsJsIdlParser.SCOPE_OP);
				this.state = 120;
				this.match(DdsJsIdlParser.IDENTIFIER);
				this.state = 121;
				this.match(DdsJsIdlParser.SCOPE_OP);
				this.state = 122;
				this.scopedName();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public constantDefinition(): ConstantDefinitionContext {
		let localctx: ConstantDefinitionContext = new ConstantDefinitionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, DdsJsIdlParser.RULE_constantDefinition);
		try {
			this.state = 146;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				localctx = new PrimitiveValueConstantContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 125;
				this.match(DdsJsIdlParser.CONST_KW);
				this.state = 126;
				this.primitiveType();
				this.state = 127;
				this.match(DdsJsIdlParser.IDENTIFIER);
				this.state = 128;
				this.match(DdsJsIdlParser.ASSIGN_OP);
				this.state = 129;
				this.literalValue();
				this.state = 130;
				this.match(DdsJsIdlParser.STAT_END);
				}
				break;
			case 2:
				localctx = new StringValueConstantContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 132;
				this.match(DdsJsIdlParser.CONST_KW);
				this.state = 133;
				this.stringType();
				this.state = 134;
				this.match(DdsJsIdlParser.IDENTIFIER);
				this.state = 135;
				this.match(DdsJsIdlParser.ASSIGN_OP);
				this.state = 136;
				this.literalValue();
				this.state = 137;
				this.match(DdsJsIdlParser.STAT_END);
				}
				break;
			case 3:
				localctx = new CustomTypeValueConstantContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 139;
				this.match(DdsJsIdlParser.CONST_KW);
				this.state = 140;
				this.scopedName();
				this.state = 141;
				this.match(DdsJsIdlParser.IDENTIFIER);
				this.state = 142;
				this.match(DdsJsIdlParser.ASSIGN_OP);
				this.state = 143;
				this.literalValue();
				this.state = 144;
				this.match(DdsJsIdlParser.STAT_END);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public enumDefinition(): EnumDefinitionContext {
		let localctx: EnumDefinitionContext = new EnumDefinitionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, DdsJsIdlParser.RULE_enumDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 148;
			this.match(DdsJsIdlParser.ENUM_KW);
			this.state = 149;
			this.match(DdsJsIdlParser.IDENTIFIER);
			this.state = 150;
			this.match(DdsJsIdlParser.OPEN_BRACE);
			this.state = 151;
			this.enumLiteral();
			this.state = 156;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===9) {
				{
				{
				this.state = 152;
				this.match(DdsJsIdlParser.COMMA_SEP);
				this.state = 153;
				this.enumLiteral();
				}
				}
				this.state = 158;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 159;
			this.match(DdsJsIdlParser.CLOSE_BRACE);
			this.state = 160;
			this.match(DdsJsIdlParser.STAT_END);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public enumLiteral(): EnumLiteralContext {
		let localctx: EnumLiteralContext = new EnumLiteralContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, DdsJsIdlParser.RULE_enumLiteral);
		try {
			this.state = 166;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				localctx = new ManualNumberedContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 162;
				this.match(DdsJsIdlParser.IDENTIFIER);
				this.state = 163;
				this.match(DdsJsIdlParser.ASSIGN_OP);
				this.state = 164;
				this.integerLiteral();
				}
				break;
			case 2:
				localctx = new AutoNumberedContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 165;
				this.match(DdsJsIdlParser.IDENTIFIER);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public dataStructureDefinition(): DataStructureDefinitionContext {
		let localctx: DataStructureDefinitionContext = new DataStructureDefinitionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 18, DdsJsIdlParser.RULE_dataStructureDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 168;
			this.match(DdsJsIdlParser.STRUCT_KW);
			this.state = 169;
			this.match(DdsJsIdlParser.IDENTIFIER);
			this.state = 170;
			this.match(DdsJsIdlParser.OPEN_BRACE);
			this.state = 172;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 171;
				this.memberDefinition();
				}
				}
				this.state = 174;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (((((_la - 10)) & ~0x1F) === 0 && ((1 << (_la - 10)) & 293862401) !== 0));
			this.state = 176;
			this.match(DdsJsIdlParser.CLOSE_BRACE);
			this.state = 177;
			this.match(DdsJsIdlParser.STAT_END);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public memberDefinition(): MemberDefinitionContext {
		let localctx: MemberDefinitionContext = new MemberDefinitionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, DdsJsIdlParser.RULE_memberDefinition);
		try {
			this.state = 188;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 12, this._ctx) ) {
			case 1:
				localctx = new NonArrayMemberDefinitionContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 179;
				this.typeDescription();
				this.state = 180;
				this.match(DdsJsIdlParser.IDENTIFIER);
				this.state = 181;
				this.match(DdsJsIdlParser.STAT_END);
				}
				break;
			case 2:
				localctx = new ArrayMemberDefinitionContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 183;
				this.typeDescription();
				this.state = 184;
				this.match(DdsJsIdlParser.IDENTIFIER);
				this.state = 185;
				this.arrayDimensions();
				this.state = 186;
				this.match(DdsJsIdlParser.STAT_END);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public unionDefinition(): UnionDefinitionContext {
		let localctx: UnionDefinitionContext = new UnionDefinitionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 22, DdsJsIdlParser.RULE_unionDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 190;
			this.match(DdsJsIdlParser.UNION_KW);
			this.state = 191;
			this.match(DdsJsIdlParser.IDENTIFIER);
			this.state = 192;
			this.match(DdsJsIdlParser.SWITCH_KW);
			this.state = 193;
			this.match(DdsJsIdlParser.OPEN_PAREN);
			this.state = 194;
			this.unionDiscriminator();
			this.state = 195;
			this.match(DdsJsIdlParser.CLOSE_PAREN);
			this.state = 196;
			this.match(DdsJsIdlParser.OPEN_BRACE);
			this.state = 198;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 197;
				this.unionMemberDefinition();
				}
				}
				this.state = 200;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===32 || _la===37);
			this.state = 202;
			this.match(DdsJsIdlParser.CLOSE_BRACE);
			this.state = 203;
			this.match(DdsJsIdlParser.STAT_END);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public unionDiscriminator(): UnionDiscriminatorContext {
		let localctx: UnionDiscriminatorContext = new UnionDiscriminatorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 24, DdsJsIdlParser.RULE_unionDiscriminator);
		try {
			this.state = 209;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 20:
			case 21:
			case 22:
			case 23:
				localctx = new IntUnionDiscriminatorContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 205;
				this.intType();
				}
				break;
			case 33:
				localctx = new BooleanUnionDiscriminatorContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 206;
				this.booleanType();
				}
				break;
			case 34:
				localctx = new CharUnionDiscriminatorContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 207;
				this.charType();
				}
				break;
			case 10:
			case 38:
				localctx = new CustomTypeUnionDiscriminatorContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 208;
				this.scopedName();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public unionMemberDefinition(): UnionMemberDefinitionContext {
		let localctx: UnionMemberDefinitionContext = new UnionMemberDefinitionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 26, DdsJsIdlParser.RULE_unionMemberDefinition);
		let _la: number;
		try {
			this.state = 221;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 32:
				localctx = new SpecificUnionMemberDefinitionContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 212;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 211;
					this.unionCaseLabel();
					}
					}
					this.state = 214;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la===32);
				this.state = 216;
				this.memberDefinition();
				}
				break;
			case 37:
				localctx = new DefaultUnionMemberDefinitionContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 218;
				this.match(DdsJsIdlParser.DEFAULT_KW);
				this.state = 219;
				this.match(DdsJsIdlParser.COLON_SEP);
				this.state = 220;
				this.memberDefinition();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public unionCaseLabel(): UnionCaseLabelContext {
		let localctx: UnionCaseLabelContext = new UnionCaseLabelContext(this, this._ctx, this.state);
		this.enterRule(localctx, 28, DdsJsIdlParser.RULE_unionCaseLabel);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 223;
			this.match(DdsJsIdlParser.CASE_KW);
			this.state = 224;
			this.unionCaseConstantExpr();
			this.state = 225;
			this.match(DdsJsIdlParser.COLON_SEP);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public unionCaseConstantExpr(): UnionCaseConstantExprContext {
		let localctx: UnionCaseConstantExprContext = new UnionCaseConstantExprContext(this, this._ctx, this.state);
		this.enterRule(localctx, 30, DdsJsIdlParser.RULE_unionCaseConstantExpr);
		try {
			this.state = 231;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 38:
				localctx = new UnionIdentifierConstantExprContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 227;
				this.match(DdsJsIdlParser.IDENTIFIER);
				}
				break;
			case 14:
			case 39:
			case 40:
			case 41:
				localctx = new UnionIntegerConstantExprContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 228;
				this.integerLiteral();
				}
				break;
			case 35:
			case 36:
				localctx = new UnionBooleanConstantExprContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 229;
				this.booleanLiteral();
				}
				break;
			case 45:
				localctx = new UnionCharConstantExprContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 230;
				this.charLiteral();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public sequenceType(): SequenceTypeContext {
		let localctx: SequenceTypeContext = new SequenceTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 32, DdsJsIdlParser.RULE_sequenceType);
		try {
			this.state = 245;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 18, this._ctx) ) {
			case 1:
				localctx = new UnboundedSequenceTypeContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 233;
				this.match(DdsJsIdlParser.SEQUENCE_KW);
				this.state = 234;
				this.match(DdsJsIdlParser.OPEN_ANGLE);
				this.state = 235;
				this.typeDescription();
				this.state = 236;
				this.match(DdsJsIdlParser.CLOSE_ANGLE);
				}
				break;
			case 2:
				localctx = new BoundedSequenceTypeContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 238;
				this.match(DdsJsIdlParser.SEQUENCE_KW);
				this.state = 239;
				this.match(DdsJsIdlParser.OPEN_ANGLE);
				this.state = 240;
				this.typeDescription();
				this.state = 241;
				this.match(DdsJsIdlParser.COMMA_SEP);
				this.state = 242;
				this.sizeDefinition();
				this.state = 243;
				this.match(DdsJsIdlParser.CLOSE_ANGLE);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public stringType(): StringTypeContext {
		let localctx: StringTypeContext = new StringTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 34, DdsJsIdlParser.RULE_stringType);
		try {
			this.state = 253;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 19, this._ctx) ) {
			case 1:
				localctx = new UnboundedStringTypeContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 247;
				this.match(DdsJsIdlParser.STRING_KW);
				}
				break;
			case 2:
				localctx = new BoundedStringTypeContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 248;
				this.match(DdsJsIdlParser.STRING_KW);
				this.state = 249;
				this.match(DdsJsIdlParser.OPEN_ANGLE);
				this.state = 250;
				this.sizeDefinition();
				this.state = 251;
				this.match(DdsJsIdlParser.CLOSE_ANGLE);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public arrayDimensions(): ArrayDimensionsContext {
		let localctx: ArrayDimensionsContext = new ArrayDimensionsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 36, DdsJsIdlParser.RULE_arrayDimensions);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 259;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 255;
				this.match(DdsJsIdlParser.OPEN_SQUARE);
				this.state = 256;
				this.sizeDefinition();
				this.state = 257;
				this.match(DdsJsIdlParser.CLOSE_SQUARE);
				}
				}
				this.state = 261;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===7);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public sizeDefinition(): SizeDefinitionContext {
		let localctx: SizeDefinitionContext = new SizeDefinitionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 38, DdsJsIdlParser.RULE_sizeDefinition);
		try {
			this.state = 265;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 10:
			case 38:
				localctx = new SizeAsConstantDefinitionContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 263;
				this.scopedName();
				}
				break;
			case 39:
				localctx = new SizeAsLiteralValueContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 264;
				this.match(DdsJsIdlParser.NATURAL_NUMBER);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public primitiveType(): PrimitiveTypeContext {
		let localctx: PrimitiveTypeContext = new PrimitiveTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 40, DdsJsIdlParser.RULE_primitiveType);
		try {
			this.state = 271;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 20:
			case 21:
			case 22:
			case 23:
				localctx = new IntPrimitiveTypeContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 267;
				this.intType();
				}
				break;
			case 24:
			case 25:
				localctx = new FloatPrimitiveTypeContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 268;
				this.floatType();
				}
				break;
			case 33:
				localctx = new BooleanPrimitiveTypeContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 269;
				this.booleanType();
				}
				break;
			case 34:
				localctx = new CharPrimitiveTypeContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 270;
				this.charType();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public intType(): IntTypeContext {
		let localctx: IntTypeContext = new IntTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 42, DdsJsIdlParser.RULE_intType);
		try {
			this.state = 285;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 23, this._ctx) ) {
			case 1:
				localctx = new OctetIntTypeContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 273;
				this.match(DdsJsIdlParser.OCTET_KW);
				}
				break;
			case 2:
				localctx = new LongIntTypeContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 274;
				this.match(DdsJsIdlParser.LONG_KW);
				}
				break;
			case 3:
				localctx = new LongLongIntTypeContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 275;
				this.match(DdsJsIdlParser.LONG_KW);
				this.state = 276;
				this.match(DdsJsIdlParser.LONG_KW);
				}
				break;
			case 4:
				localctx = new ShortIntTypeContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 277;
				this.match(DdsJsIdlParser.SHORT_KW);
				}
				break;
			case 5:
				localctx = new UnsignedLongIntTypeContext(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 278;
				this.match(DdsJsIdlParser.UNSIGNED_KW);
				this.state = 279;
				this.match(DdsJsIdlParser.LONG_KW);
				}
				break;
			case 6:
				localctx = new UnsignedLongLongIntTypeContext(this, localctx);
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 280;
				this.match(DdsJsIdlParser.UNSIGNED_KW);
				this.state = 281;
				this.match(DdsJsIdlParser.LONG_KW);
				this.state = 282;
				this.match(DdsJsIdlParser.LONG_KW);
				}
				break;
			case 7:
				localctx = new UnsignedShortIntTypeContext(this, localctx);
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 283;
				this.match(DdsJsIdlParser.UNSIGNED_KW);
				this.state = 284;
				this.match(DdsJsIdlParser.SHORT_KW);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public floatType(): FloatTypeContext {
		let localctx: FloatTypeContext = new FloatTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 44, DdsJsIdlParser.RULE_floatType);
		try {
			this.state = 289;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 24:
				localctx = new SinglePrecisionFloatTypeContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 287;
				this.match(DdsJsIdlParser.FLOAT_KW);
				}
				break;
			case 25:
				localctx = new DoublePrecisionFloatTypeContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 288;
				this.match(DdsJsIdlParser.DOUBLE_KW);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public booleanType(): BooleanTypeContext {
		let localctx: BooleanTypeContext = new BooleanTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 46, DdsJsIdlParser.RULE_booleanType);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 291;
			this.match(DdsJsIdlParser.BOOLEAN_KW);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public charType(): CharTypeContext {
		let localctx: CharTypeContext = new CharTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 48, DdsJsIdlParser.RULE_charType);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 293;
			this.match(DdsJsIdlParser.CHAR_KW);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public literalValue(): LiteralValueContext {
		let localctx: LiteralValueContext = new LiteralValueContext(this, this._ctx, this.state);
		this.enterRule(localctx, 50, DdsJsIdlParser.RULE_literalValue);
		try {
			this.state = 301;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 25, this._ctx) ) {
			case 1:
				localctx = new IntLiteralValueContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 295;
				this.integerLiteral();
				}
				break;
			case 2:
				localctx = new CharLiteralValueContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 296;
				this.charLiteral();
				}
				break;
			case 3:
				localctx = new StringLiteralValueContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 297;
				this.stringLiteral();
				}
				break;
			case 4:
				localctx = new FloatLiteralValueContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 298;
				this.floatingPointLiteral();
				}
				break;
			case 5:
				localctx = new RealLiteralValueContext(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 299;
				this.fixedPointLiteral();
				}
				break;
			case 6:
				localctx = new BooleanLiteralValueContext(this, localctx);
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 300;
				this.booleanLiteral();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public charLiteral(): CharLiteralContext {
		let localctx: CharLiteralContext = new CharLiteralContext(this, this._ctx, this.state);
		this.enterRule(localctx, 52, DdsJsIdlParser.RULE_charLiteral);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 303;
			this.match(DdsJsIdlParser.CHAR_LITERAL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public stringLiteral(): StringLiteralContext {
		let localctx: StringLiteralContext = new StringLiteralContext(this, this._ctx, this.state);
		this.enterRule(localctx, 54, DdsJsIdlParser.RULE_stringLiteral);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 305;
			this.match(DdsJsIdlParser.STRING_LITERAL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public booleanLiteral(): BooleanLiteralContext {
		let localctx: BooleanLiteralContext = new BooleanLiteralContext(this, this._ctx, this.state);
		this.enterRule(localctx, 56, DdsJsIdlParser.RULE_booleanLiteral);
		try {
			this.state = 309;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 35:
				localctx = new BooleanTrueLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 307;
				this.match(DdsJsIdlParser.BOOLEAN_TRUE);
				}
				break;
			case 36:
				localctx = new BooleanFalseLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 308;
				this.match(DdsJsIdlParser.BOOLEAN_FALSE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public integerLiteral(): IntegerLiteralContext {
		let localctx: IntegerLiteralContext = new IntegerLiteralContext(this, this._ctx, this.state);
		this.enterRule(localctx, 58, DdsJsIdlParser.RULE_integerLiteral);
		try {
			this.state = 314;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 14:
			case 39:
				localctx = new SignedIntegerLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 311;
				this.signedInteger();
				}
				break;
			case 41:
				localctx = new OctalIntegerLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 312;
				this.match(DdsJsIdlParser.OCTAL_LITERAL);
				}
				break;
			case 40:
				localctx = new HexIntegerLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 313;
				this.match(DdsJsIdlParser.HEXADECIMAL_LITERAL);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public signedInteger(): SignedIntegerContext {
		let localctx: SignedIntegerContext = new SignedIntegerContext(this, this._ctx, this.state);
		this.enterRule(localctx, 60, DdsJsIdlParser.RULE_signedInteger);
		try {
			this.state = 319;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 39:
				localctx = new PositiveIntegerContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 316;
				this.match(DdsJsIdlParser.NATURAL_NUMBER);
				}
				break;
			case 14:
				localctx = new NegativeIntegerContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 317;
				this.match(DdsJsIdlParser.MINUS_OP);
				this.state = 318;
				this.match(DdsJsIdlParser.NATURAL_NUMBER);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public floatingPointLiteral(): FloatingPointLiteralContext {
		let localctx: FloatingPointLiteralContext = new FloatingPointLiteralContext(this, this._ctx, this.state);
		this.enterRule(localctx, 62, DdsJsIdlParser.RULE_floatingPointLiteral);
		try {
			this.state = 337;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 29, this._ctx) ) {
			case 1:
				localctx = new FloatIntExponentContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 321;
				this.signedInteger();
				this.state = 322;
				this.match(DdsJsIdlParser.FLOAT_EXP_PREFIX);
				this.state = 323;
				this.signedInteger();
				}
				break;
			case 2:
				localctx = new FloatIntFracExponentContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 325;
				this.signedInteger();
				this.state = 326;
				this.match(DdsJsIdlParser.DOT_OP);
				this.state = 327;
				this.match(DdsJsIdlParser.DIGIT_SEQUENCE);
				this.state = 328;
				this.match(DdsJsIdlParser.FLOAT_EXP_PREFIX);
				this.state = 329;
				this.signedInteger();
				}
				break;
			case 3:
				localctx = new FloatFracExponentContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 331;
				this.match(DdsJsIdlParser.DOT_OP);
				this.state = 332;
				this.match(DdsJsIdlParser.DIGIT_SEQUENCE);
				this.state = 333;
				this.match(DdsJsIdlParser.FLOAT_EXP_PREFIX);
				this.state = 334;
				this.signedInteger();
				}
				break;
			case 4:
				localctx = new FloatFracOnlyContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 335;
				this.match(DdsJsIdlParser.DOT_OP);
				this.state = 336;
				this.match(DdsJsIdlParser.DIGIT_SEQUENCE);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public fixedPointLiteral(): FixedPointLiteralContext {
		let localctx: FixedPointLiteralContext = new FixedPointLiteralContext(this, this._ctx, this.state);
		this.enterRule(localctx, 64, DdsJsIdlParser.RULE_fixedPointLiteral);
		try {
			this.state = 350;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 30, this._ctx) ) {
			case 1:
				localctx = new FixedPtIntFracContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 339;
				this.signedInteger();
				this.state = 340;
				this.match(DdsJsIdlParser.DOT_OP);
				this.state = 341;
				this.match(DdsJsIdlParser.DIGIT_SEQUENCE);
				this.state = 342;
				this.match(DdsJsIdlParser.FIXED_PT_SUFFIX);
				}
				break;
			case 2:
				localctx = new FixedPtIntOnlyContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 344;
				this.signedInteger();
				this.state = 345;
				this.match(DdsJsIdlParser.FIXED_PT_SUFFIX);
				}
				break;
			case 3:
				localctx = new FixedPtFracOnlyContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 347;
				this.match(DdsJsIdlParser.DOT_OP);
				this.state = 348;
				this.match(DdsJsIdlParser.DIGIT_SEQUENCE);
				this.state = 349;
				this.match(DdsJsIdlParser.FIXED_PT_SUFFIX);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public static readonly _serializedATN: number[] = [4,1,50,353,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,
	7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,
	24,2,25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,
	2,32,7,32,1,0,4,0,68,8,0,11,0,12,0,69,1,1,1,1,1,1,1,1,5,1,76,8,1,10,1,12,
	1,79,9,1,1,1,1,1,3,1,83,8,1,1,2,1,2,1,2,1,2,1,2,1,2,3,2,91,8,2,1,3,1,3,
	1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,3,3,104,8,3,1,4,1,4,1,4,1,4,3,4,110,
	8,4,1,5,1,5,1,5,5,5,115,8,5,10,5,12,5,118,9,5,1,5,1,5,1,5,1,5,3,5,124,8,
	5,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,
	6,1,6,1,6,1,6,3,6,147,8,6,1,7,1,7,1,7,1,7,1,7,1,7,5,7,155,8,7,10,7,12,7,
	158,9,7,1,7,1,7,1,7,1,8,1,8,1,8,1,8,3,8,167,8,8,1,9,1,9,1,9,1,9,4,9,173,
	8,9,11,9,12,9,174,1,9,1,9,1,9,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,
	10,3,10,189,8,10,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,4,11,199,8,11,
	11,11,12,11,200,1,11,1,11,1,11,1,12,1,12,1,12,1,12,3,12,210,8,12,1,13,4,
	13,213,8,13,11,13,12,13,214,1,13,1,13,1,13,1,13,1,13,3,13,222,8,13,1,14,
	1,14,1,14,1,14,1,15,1,15,1,15,1,15,3,15,232,8,15,1,16,1,16,1,16,1,16,1,
	16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,3,16,246,8,16,1,17,1,17,1,17,1,17,
	1,17,1,17,3,17,254,8,17,1,18,1,18,1,18,1,18,4,18,260,8,18,11,18,12,18,261,
	1,19,1,19,3,19,266,8,19,1,20,1,20,1,20,1,20,3,20,272,8,20,1,21,1,21,1,21,
	1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,3,21,286,8,21,1,22,1,22,3,
	22,290,8,22,1,23,1,23,1,24,1,24,1,25,1,25,1,25,1,25,1,25,1,25,3,25,302,
	8,25,1,26,1,26,1,27,1,27,1,28,1,28,3,28,310,8,28,1,29,1,29,1,29,3,29,315,
	8,29,1,30,1,30,1,30,3,30,320,8,30,1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,
	31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,3,31,338,8,31,1,32,1,32,1,32,
	1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,3,32,351,8,32,1,32,0,0,33,0,2,4,
	6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,
	56,58,60,62,64,0,0,376,0,67,1,0,0,0,2,71,1,0,0,0,4,90,1,0,0,0,6,103,1,0,
	0,0,8,109,1,0,0,0,10,123,1,0,0,0,12,146,1,0,0,0,14,148,1,0,0,0,16,166,1,
	0,0,0,18,168,1,0,0,0,20,188,1,0,0,0,22,190,1,0,0,0,24,209,1,0,0,0,26,221,
	1,0,0,0,28,223,1,0,0,0,30,231,1,0,0,0,32,245,1,0,0,0,34,253,1,0,0,0,36,
	259,1,0,0,0,38,265,1,0,0,0,40,271,1,0,0,0,42,285,1,0,0,0,44,289,1,0,0,0,
	46,291,1,0,0,0,48,293,1,0,0,0,50,301,1,0,0,0,52,303,1,0,0,0,54,305,1,0,
	0,0,56,309,1,0,0,0,58,314,1,0,0,0,60,319,1,0,0,0,62,337,1,0,0,0,64,350,
	1,0,0,0,66,68,3,2,1,0,67,66,1,0,0,0,68,69,1,0,0,0,69,67,1,0,0,0,69,70,1,
	0,0,0,70,1,1,0,0,0,71,72,5,16,0,0,72,73,5,38,0,0,73,77,5,1,0,0,74,76,3,
	4,2,0,75,74,1,0,0,0,76,79,1,0,0,0,77,75,1,0,0,0,77,78,1,0,0,0,78,80,1,0,
	0,0,79,77,1,0,0,0,80,82,5,3,0,0,81,83,5,4,0,0,82,81,1,0,0,0,82,83,1,0,0,
	0,83,3,1,0,0,0,84,91,3,18,9,0,85,91,3,6,3,0,86,91,3,12,6,0,87,91,3,14,7,
	0,88,91,3,22,11,0,89,91,3,2,1,0,90,84,1,0,0,0,90,85,1,0,0,0,90,86,1,0,0,
	0,90,87,1,0,0,0,90,88,1,0,0,0,90,89,1,0,0,0,91,5,1,0,0,0,92,93,5,17,0,0,
	93,94,3,8,4,0,94,95,5,38,0,0,95,96,5,4,0,0,96,104,1,0,0,0,97,98,5,17,0,
	0,98,99,3,8,4,0,99,100,5,38,0,0,100,101,3,36,18,0,101,102,5,4,0,0,102,104,
	1,0,0,0,103,92,1,0,0,0,103,97,1,0,0,0,104,7,1,0,0,0,105,110,3,32,16,0,106,
	110,3,34,17,0,107,110,3,40,20,0,108,110,3,10,5,0,109,105,1,0,0,0,109,106,
	1,0,0,0,109,107,1,0,0,0,109,108,1,0,0,0,110,9,1,0,0,0,111,116,5,38,0,0,
	112,113,5,10,0,0,113,115,5,38,0,0,114,112,1,0,0,0,115,118,1,0,0,0,116,114,
	1,0,0,0,116,117,1,0,0,0,117,124,1,0,0,0,118,116,1,0,0,0,119,120,5,10,0,
	0,120,121,5,38,0,0,121,122,5,10,0,0,122,124,3,10,5,0,123,111,1,0,0,0,123,
	119,1,0,0,0,124,11,1,0,0,0,125,126,5,18,0,0,126,127,3,40,20,0,127,128,5,
	38,0,0,128,129,5,2,0,0,129,130,3,50,25,0,130,131,5,4,0,0,131,147,1,0,0,
	0,132,133,5,18,0,0,133,134,3,34,17,0,134,135,5,38,0,0,135,136,5,2,0,0,136,
	137,3,50,25,0,137,138,5,4,0,0,138,147,1,0,0,0,139,140,5,18,0,0,140,141,
	3,10,5,0,141,142,5,38,0,0,142,143,5,2,0,0,143,144,3,50,25,0,144,145,5,4,
	0,0,145,147,1,0,0,0,146,125,1,0,0,0,146,132,1,0,0,0,146,139,1,0,0,0,147,
	13,1,0,0,0,148,149,5,19,0,0,149,150,5,38,0,0,150,151,5,1,0,0,151,156,3,
	16,8,0,152,153,5,9,0,0,153,155,3,16,8,0,154,152,1,0,0,0,155,158,1,0,0,0,
	156,154,1,0,0,0,156,157,1,0,0,0,157,159,1,0,0,0,158,156,1,0,0,0,159,160,
	5,3,0,0,160,161,5,4,0,0,161,15,1,0,0,0,162,163,5,38,0,0,163,164,5,2,0,0,
	164,167,3,58,29,0,165,167,5,38,0,0,166,162,1,0,0,0,166,165,1,0,0,0,167,
	17,1,0,0,0,168,169,5,28,0,0,169,170,5,38,0,0,170,172,5,1,0,0,171,173,3,
	20,10,0,172,171,1,0,0,0,173,174,1,0,0,0,174,172,1,0,0,0,174,175,1,0,0,0,
	175,176,1,0,0,0,176,177,5,3,0,0,177,178,5,4,0,0,178,19,1,0,0,0,179,180,
	3,8,4,0,180,181,5,38,0,0,181,182,5,4,0,0,182,189,1,0,0,0,183,184,3,8,4,
	0,184,185,5,38,0,0,185,186,3,36,18,0,186,187,5,4,0,0,187,189,1,0,0,0,188,
	179,1,0,0,0,188,183,1,0,0,0,189,21,1,0,0,0,190,191,5,30,0,0,191,192,5,38,
	0,0,192,193,5,31,0,0,193,194,5,12,0,0,194,195,3,24,12,0,195,196,5,13,0,
	0,196,198,5,1,0,0,197,199,3,26,13,0,198,197,1,0,0,0,199,200,1,0,0,0,200,
	198,1,0,0,0,200,201,1,0,0,0,201,202,1,0,0,0,202,203,5,3,0,0,203,204,5,4,
	0,0,204,23,1,0,0,0,205,210,3,42,21,0,206,210,3,46,23,0,207,210,3,48,24,
	0,208,210,3,10,5,0,209,205,1,0,0,0,209,206,1,0,0,0,209,207,1,0,0,0,209,
	208,1,0,0,0,210,25,1,0,0,0,211,213,3,28,14,0,212,211,1,0,0,0,213,214,1,
	0,0,0,214,212,1,0,0,0,214,215,1,0,0,0,215,216,1,0,0,0,216,217,3,20,10,0,
	217,222,1,0,0,0,218,219,5,37,0,0,219,220,5,11,0,0,220,222,3,20,10,0,221,
	212,1,0,0,0,221,218,1,0,0,0,222,27,1,0,0,0,223,224,5,32,0,0,224,225,3,30,
	15,0,225,226,5,11,0,0,226,29,1,0,0,0,227,232,5,38,0,0,228,232,3,58,29,0,
	229,232,3,56,28,0,230,232,3,52,26,0,231,227,1,0,0,0,231,228,1,0,0,0,231,
	229,1,0,0,0,231,230,1,0,0,0,232,31,1,0,0,0,233,234,5,27,0,0,234,235,5,5,
	0,0,235,236,3,8,4,0,236,237,5,6,0,0,237,246,1,0,0,0,238,239,5,27,0,0,239,
	240,5,5,0,0,240,241,3,8,4,0,241,242,5,9,0,0,242,243,3,38,19,0,243,244,5,
	6,0,0,244,246,1,0,0,0,245,233,1,0,0,0,245,238,1,0,0,0,246,33,1,0,0,0,247,
	254,5,26,0,0,248,249,5,26,0,0,249,250,5,5,0,0,250,251,3,38,19,0,251,252,
	5,6,0,0,252,254,1,0,0,0,253,247,1,0,0,0,253,248,1,0,0,0,254,35,1,0,0,0,
	255,256,5,7,0,0,256,257,3,38,19,0,257,258,5,8,0,0,258,260,1,0,0,0,259,255,
	1,0,0,0,260,261,1,0,0,0,261,259,1,0,0,0,261,262,1,0,0,0,262,37,1,0,0,0,
	263,266,3,10,5,0,264,266,5,39,0,0,265,263,1,0,0,0,265,264,1,0,0,0,266,39,
	1,0,0,0,267,272,3,42,21,0,268,272,3,44,22,0,269,272,3,46,23,0,270,272,3,
	48,24,0,271,267,1,0,0,0,271,268,1,0,0,0,271,269,1,0,0,0,271,270,1,0,0,0,
	272,41,1,0,0,0,273,286,5,20,0,0,274,286,5,23,0,0,275,276,5,23,0,0,276,286,
	5,23,0,0,277,286,5,22,0,0,278,279,5,21,0,0,279,286,5,23,0,0,280,281,5,21,
	0,0,281,282,5,23,0,0,282,286,5,23,0,0,283,284,5,21,0,0,284,286,5,22,0,0,
	285,273,1,0,0,0,285,274,1,0,0,0,285,275,1,0,0,0,285,277,1,0,0,0,285,278,
	1,0,0,0,285,280,1,0,0,0,285,283,1,0,0,0,286,43,1,0,0,0,287,290,5,24,0,0,
	288,290,5,25,0,0,289,287,1,0,0,0,289,288,1,0,0,0,290,45,1,0,0,0,291,292,
	5,33,0,0,292,47,1,0,0,0,293,294,5,34,0,0,294,49,1,0,0,0,295,302,3,58,29,
	0,296,302,3,52,26,0,297,302,3,54,27,0,298,302,3,62,31,0,299,302,3,64,32,
	0,300,302,3,56,28,0,301,295,1,0,0,0,301,296,1,0,0,0,301,297,1,0,0,0,301,
	298,1,0,0,0,301,299,1,0,0,0,301,300,1,0,0,0,302,51,1,0,0,0,303,304,5,45,
	0,0,304,53,1,0,0,0,305,306,5,44,0,0,306,55,1,0,0,0,307,310,5,35,0,0,308,
	310,5,36,0,0,309,307,1,0,0,0,309,308,1,0,0,0,310,57,1,0,0,0,311,315,3,60,
	30,0,312,315,5,41,0,0,313,315,5,40,0,0,314,311,1,0,0,0,314,312,1,0,0,0,
	314,313,1,0,0,0,315,59,1,0,0,0,316,320,5,39,0,0,317,318,5,14,0,0,318,320,
	5,39,0,0,319,316,1,0,0,0,319,317,1,0,0,0,320,61,1,0,0,0,321,322,3,60,30,
	0,322,323,5,46,0,0,323,324,3,60,30,0,324,338,1,0,0,0,325,326,3,60,30,0,
	326,327,5,15,0,0,327,328,5,42,0,0,328,329,5,46,0,0,329,330,3,60,30,0,330,
	338,1,0,0,0,331,332,5,15,0,0,332,333,5,42,0,0,333,334,5,46,0,0,334,338,
	3,60,30,0,335,336,5,15,0,0,336,338,5,42,0,0,337,321,1,0,0,0,337,325,1,0,
	0,0,337,331,1,0,0,0,337,335,1,0,0,0,338,63,1,0,0,0,339,340,3,60,30,0,340,
	341,5,15,0,0,341,342,5,42,0,0,342,343,5,47,0,0,343,351,1,0,0,0,344,345,
	3,60,30,0,345,346,5,47,0,0,346,351,1,0,0,0,347,348,5,15,0,0,348,349,5,42,
	0,0,349,351,5,47,0,0,350,339,1,0,0,0,350,344,1,0,0,0,350,347,1,0,0,0,351,
	65,1,0,0,0,31,69,77,82,90,103,109,116,123,146,156,166,174,188,200,209,214,
	221,231,245,253,261,265,271,285,289,301,309,314,319,337,350];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!DdsJsIdlParser.__ATN) {
			DdsJsIdlParser.__ATN = new ATNDeserializer().deserialize(DdsJsIdlParser._serializedATN);
		}

		return DdsJsIdlParser.__ATN;
	}


	static DecisionsToDFA = DdsJsIdlParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class TranslationUnitContext extends ParserRuleContext {
	constructor(parser?: DdsJsIdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public module__list(): ModuleContext[] {
		return this.getTypedRuleContexts(ModuleContext) as ModuleContext[];
	}
	public module_(i: number): ModuleContext {
		return this.getTypedRuleContext(ModuleContext, i) as ModuleContext;
	}
    public get ruleIndex(): number {
    	return DdsJsIdlParser.RULE_translationUnit;
	}
	// @Override
	public accept<Result>(visitor: DdsJsIdlVisitor<Result>): Result {
		if (visitor.visitTranslationUnit) {
			return visitor.visitTranslationUnit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModuleContext extends ParserRuleContext {
	constructor(parser?: DdsJsIdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public MODULE_KW(): TerminalNode {
		return this.getToken(DdsJsIdlParser.MODULE_KW, 0);
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(DdsJsIdlParser.IDENTIFIER, 0);
	}
	public OPEN_BRACE(): TerminalNode {
		return this.getToken(DdsJsIdlParser.OPEN_BRACE, 0);
	}
	public CLOSE_BRACE(): TerminalNode {
		return this.getToken(DdsJsIdlParser.CLOSE_BRACE, 0);
	}
	public moduleMember_list(): ModuleMemberContext[] {
		return this.getTypedRuleContexts(ModuleMemberContext) as ModuleMemberContext[];
	}
	public moduleMember(i: number): ModuleMemberContext {
		return this.getTypedRuleContext(ModuleMemberContext, i) as ModuleMemberContext;
	}
	public STAT_END(): TerminalNode {
		return this.getToken(DdsJsIdlParser.STAT_END, 0);
	}
    public get ruleIndex(): number {
    	return DdsJsIdlParser.RULE_module;
	}
	// @Override
	public accept<Result>(visitor: DdsJsIdlVisitor<Result>): Result {
		if (visitor.visitModule) {
			return visitor.visitModule(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModuleMemberContext extends ParserRuleContext {
	constructor(parser?: DdsJsIdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return DdsJsIdlParser.RULE_moduleMember;
	}
	public copyFrom(ctx: ModuleMemberContext): void {
		super.copyFrom(ctx);
	}
}
export class EnumModuleMemberContext extends ModuleMemberContext {
	constructor(parser: DdsJsIdlParser, ctx: ModuleMemberContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public enumDefinition(): EnumDefinitionContext {
		return this.getTypedRuleContext(EnumDefinitionContext, 0) as EnumDefinitionContext;
	}
	// @Override
	public accept<Result>(visitor: DdsJsIdlVisitor<Result>): Result {
		if (visitor.visitEnumModuleMember) {
			return visitor.visitEnumModuleMember(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UnionModuleMemberContext extends ModuleMemberContext {
	constructor(parser: DdsJsIdlParser, ctx: ModuleMemberContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public unionDefinition(): UnionDefinitionContext {
		return this.getTypedRuleContext(UnionDefinitionContext, 0) as UnionDefinitionContext;
	}
	// @Override
	public accept<Result>(visitor: DdsJsIdlVisitor<Result>): Result {
		if (visitor.visitUnionModuleMember) {
			return visitor.visitUnionModuleMember(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SubmoduleModuleMemberContext extends ModuleMemberContext {
	constructor(parser: DdsJsIdlParser, ctx: ModuleMemberContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public module_(): ModuleContext {
		return this.getTypedRuleContext(ModuleContext, 0) as ModuleContext;
	}
	// @Override
	public accept<Result>(visitor: DdsJsIdlVisitor<Result>): Result {
		if (visitor.visitSubmoduleModuleMember) {
			return visitor.visitSubmoduleModuleMember(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DataStructureModuleMemberContext extends ModuleMemberContext {
	constructor(parser: DdsJsIdlParser, ctx: ModuleMemberContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public dataStructureDefinition(): DataStructureDefinitionContext {
		return this.getTypedRuleContext(DataStructureDefinitionContext, 0) as DataStructureDefinitionContext;
	}
	// @Override
	public accept<Result>(visitor: DdsJsIdlVisitor<Result>): Result {
		if (visitor.visitDataStructureModuleMember) {
			return visitor.visitDataStructureModuleMember(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TypeAliasModuleMemberContext extends ModuleMemberContext {
	constructor(parser: DdsJsIdlParser, ctx: ModuleMemberContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public typeAlias(): TypeAliasContext {
		return this.getTypedRuleContext(TypeAliasContext, 0) as TypeAliasContext;
	}
	// @Override
	public accept<Result>(visitor: DdsJsIdlVisitor<Result>): Result {
		if (visitor.visitTypeAliasModuleMember) {
			return visitor.visitTypeAliasModuleMember(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ConstantModuleMemberContext extends ModuleMemberContext {
	constructor(parser: DdsJsIdlParser, ctx: ModuleMemberContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public constantDefinition(): ConstantDefinitionContext {
		return this.getTypedRuleContext(ConstantDefinitionContext, 0) as ConstantDefinitionContext;
	}
	// @Override
	public accept<Result>(visitor: DdsJsIdlVisitor<Result>): Result {
		if (visitor.visitConstantModuleMember) {
			return visitor.visitConstantModuleMember(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeAliasContext extends ParserRuleContext {
	constructor(parser?: DdsJsIdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return DdsJsIdlParser.RULE_typeAlias;
	}
	public copyFrom(ctx: TypeAliasContext): void {
		super.copyFrom(ctx);
	}
}
export class ArrayTypedefContext extends TypeAliasContext {
	constructor(parser: DdsJsIdlParser, ctx: TypeAliasContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public TYPEDEF_KW(): TerminalNode {
		return this.getToken(DdsJsIdlParser.TYPEDEF_KW, 0);
	}
	public typeDescription(): TypeDescriptionContext {
		return this.getTypedRuleContext(TypeDescriptionContext, 0) as TypeDescriptionContext;
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(DdsJsIdlParser.IDENTIFIER, 0);
	}
	public arrayDimensions(): ArrayDimensionsContext {
		return this.getTypedRuleContext(ArrayDimensionsContext, 0) as ArrayDimensionsContext;
	}
	public STAT_END(): TerminalNode {
		return this.getToken(DdsJsIdlParser.STAT_END, 0);
	}
	// @Override
	public accept<Result>(visitor: DdsJsIdlVisitor<Result>): Result {
		if (visitor.visitArrayTypedef) {
			return visitor.visitArrayTypedef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NonArrayTypedefContext extends TypeAliasContext {
	constructor(parser: DdsJsIdlParser, ctx: TypeAliasContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public TYPEDEF_KW(): TerminalNode {
		return this.getToken(DdsJsIdlParser.TYPEDEF_KW, 0);
	}
	public typeDescription(): TypeDescriptionContext {
		return this.getTypedRuleContext(TypeDescriptionContext, 0) as TypeDescriptionContext;
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(DdsJsIdlParser.IDENTIFIER, 0);
	}
	public STAT_END(): TerminalNode {
		return this.getToken(DdsJsIdlParser.STAT_END, 0);
	}
	// @Override
	public accept<Result>(visitor: DdsJsIdlVisitor<Result>): Result {
		if (visitor.visitNonArrayTypedef) {
			return visitor.visitNonArrayTypedef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeDescriptionContext extends ParserRuleContext {
	constructor(parser?: DdsJsIdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return DdsJsIdlParser.RULE_typeDescription;
	}
	public copyFrom(ctx: TypeDescriptionContext): void {
		super.copyFrom(ctx);
	}
}
export class CustomTypeNameDescContext extends TypeDescriptionContext {
	constructor(parser: DdsJsIdlParser, ctx: TypeDescriptionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public scopedName(): ScopedNameContext {
		return this.getTypedRuleContext(ScopedNameContext, 0) as ScopedNameContext;
	}
	// @Override
	public accept<Result>(visitor: DdsJsIdlVisitor<Result>): Result {
		if (visitor.visitCustomTypeNameDesc) {
			return visitor.visitCustomTypeNameDesc(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SequenceTypeDescContext extends TypeDescriptionContext {
	constructor(parser: DdsJsIdlParser, ctx: TypeDescriptionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public sequenceType(): SequenceTypeContext {
		return this.getTypedRuleContext(SequenceTypeContext, 0) as SequenceTypeContext;
	}
	// @Override
	public accept<Result>(visitor: DdsJsIdlVisitor<Result>): Result {
		if (visitor.visitSequenceTypeDesc) {
			return visitor.visitSequenceTypeDesc(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PrimitiveTypeDescContext extends TypeDescriptionContext {
	constructor(parser: DdsJsIdlParser, ctx: TypeDescriptionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public primitiveType(): PrimitiveTypeContext {
		return this.getTypedRuleContext(PrimitiveTypeContext, 0) as PrimitiveTypeContext;
	}
	// @Override
	public accept<Result>(visitor: DdsJsIdlVisitor<Result>): Result {
		if (visitor.visitPrimitiveTypeDesc) {
			return visitor.visitPrimitiveTypeDesc(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StringTypeDescContext extends TypeDescriptionContext {
	constructor(parser: DdsJsIdlParser, ctx: TypeDescriptionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public stringType(): StringTypeContext {
		return this.getTypedRuleContext(StringTypeContext, 0) as StringTypeContext;
	}
	// @Override
	public accept<Result>(visitor: DdsJsIdlVisitor<Result>): Result {
		if (visitor.visitStringTypeDesc) {
			return visitor.visitStringTypeDesc(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ScopedNameContext extends ParserRuleContext {
	constructor(parser?: DdsJsIdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return DdsJsIdlParser.RULE_scopedName;
	}
	public copyFrom(ctx: ScopedNameContext): void {
		super.copyFrom(ctx);
	}
}
export class RelativeScopedNameContext extends ScopedNameContext {
	constructor(parser: DdsJsIdlParser, ctx: ScopedNameContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public IDENTIFIER_list(): TerminalNode[] {
	    	return this.getTokens(DdsJsIdlParser.IDENTIFIER);
	}
	public IDENTIFIER(i: number): TerminalNode {
		return this.getToken(DdsJsIdlParser.IDENTIFIER, i);
	}
	public SCOPE_OP_list(): TerminalNode[] {
	    	return this.getTokens(DdsJsIdlParser.SCOPE_OP);
	}
	public SCOPE_OP(i: number): TerminalNode {
		return this.getToken(DdsJsIdlParser.SCOPE_OP, i);
	}
	// @Override
	public accept<Result>(visitor: DdsJsIdlVisitor<Result>): Result {
		if (visitor.visitRelativeScopedName) {
			return visitor.visitRelativeScopedName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AbsoluteScopedNameContext extends ScopedNameContext {
	constructor(parser: DdsJsIdlParser, ctx: ScopedNameContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public SCOPE_OP_list(): TerminalNode[] {
	    	return this.getTokens(DdsJsIdlParser.SCOPE_OP);
	}
	public SCOPE_OP(i: number): TerminalNode {
		return this.getToken(DdsJsIdlParser.SCOPE_OP, i);
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(DdsJsIdlParser.IDENTIFIER, 0);
	}
	public scopedName(): ScopedNameContext {
		return this.getTypedRuleContext(ScopedNameContext, 0) as ScopedNameContext;
	}
	// @Override
	public accept<Result>(visitor: DdsJsIdlVisitor<Result>): Result {
		if (visitor.visitAbsoluteScopedName) {
			return visitor.visitAbsoluteScopedName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstantDefinitionContext extends ParserRuleContext {
	constructor(parser?: DdsJsIdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return DdsJsIdlParser.RULE_constantDefinition;
	}
	public copyFrom(ctx: ConstantDefinitionContext): void {
		super.copyFrom(ctx);
	}
}
export class StringValueConstantContext extends ConstantDefinitionContext {
	constructor(parser: DdsJsIdlParser, ctx: ConstantDefinitionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public CONST_KW(): TerminalNode {
		return this.getToken(DdsJsIdlParser.CONST_KW, 0);
	}
	public stringType(): StringTypeContext {
		return this.getTypedRuleContext(StringTypeContext, 0) as StringTypeContext;
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(DdsJsIdlParser.IDENTIFIER, 0);
	}
	public ASSIGN_OP(): TerminalNode {
		return this.getToken(DdsJsIdlParser.ASSIGN_OP, 0);
	}
	public literalValue(): LiteralValueContext {
		return this.getTypedRuleContext(LiteralValueContext, 0) as LiteralValueContext;
	}
	public STAT_END(): TerminalNode {
		return this.getToken(DdsJsIdlParser.STAT_END, 0);
	}
	// @Override
	public accept<Result>(visitor: DdsJsIdlVisitor<Result>): Result {
		if (visitor.visitStringValueConstant) {
			return visitor.visitStringValueConstant(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PrimitiveValueConstantContext extends ConstantDefinitionContext {
	constructor(parser: DdsJsIdlParser, ctx: ConstantDefinitionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public CONST_KW(): TerminalNode {
		return this.getToken(DdsJsIdlParser.CONST_KW, 0);
	}
	public primitiveType(): PrimitiveTypeContext {
		return this.getTypedRuleContext(PrimitiveTypeContext, 0) as PrimitiveTypeContext;
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(DdsJsIdlParser.IDENTIFIER, 0);
	}
	public ASSIGN_OP(): TerminalNode {
		return this.getToken(DdsJsIdlParser.ASSIGN_OP, 0);
	}
	public literalValue(): LiteralValueContext {
		return this.getTypedRuleContext(LiteralValueContext, 0) as LiteralValueContext;
	}
	public STAT_END(): TerminalNode {
		return this.getToken(DdsJsIdlParser.STAT_END, 0);
	}
	// @Override
	public accept<Result>(visitor: DdsJsIdlVisitor<Result>): Result {
		if (visitor.visitPrimitiveValueConstant) {
			return visitor.visitPrimitiveValueConstant(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CustomTypeValueConstantContext extends ConstantDefinitionContext {
	constructor(parser: DdsJsIdlParser, ctx: ConstantDefinitionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public CONST_KW(): TerminalNode {
		return this.getToken(DdsJsIdlParser.CONST_KW, 0);
	}
	public scopedName(): ScopedNameContext {
		return this.getTypedRuleContext(ScopedNameContext, 0) as ScopedNameContext;
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(DdsJsIdlParser.IDENTIFIER, 0);
	}
	public ASSIGN_OP(): TerminalNode {
		return this.getToken(DdsJsIdlParser.ASSIGN_OP, 0);
	}
	public literalValue(): LiteralValueContext {
		return this.getTypedRuleContext(LiteralValueContext, 0) as LiteralValueContext;
	}
	public STAT_END(): TerminalNode {
		return this.getToken(DdsJsIdlParser.STAT_END, 0);
	}
	// @Override
	public accept<Result>(visitor: DdsJsIdlVisitor<Result>): Result {
		if (visitor.visitCustomTypeValueConstant) {
			return visitor.visitCustomTypeValueConstant(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumDefinitionContext extends ParserRuleContext {
	constructor(parser?: DdsJsIdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ENUM_KW(): TerminalNode {
		return this.getToken(DdsJsIdlParser.ENUM_KW, 0);
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(DdsJsIdlParser.IDENTIFIER, 0);
	}
	public OPEN_BRACE(): TerminalNode {
		return this.getToken(DdsJsIdlParser.OPEN_BRACE, 0);
	}
	public enumLiteral_list(): EnumLiteralContext[] {
		return this.getTypedRuleContexts(EnumLiteralContext) as EnumLiteralContext[];
	}
	public enumLiteral(i: number): EnumLiteralContext {
		return this.getTypedRuleContext(EnumLiteralContext, i) as EnumLiteralContext;
	}
	public CLOSE_BRACE(): TerminalNode {
		return this.getToken(DdsJsIdlParser.CLOSE_BRACE, 0);
	}
	public STAT_END(): TerminalNode {
		return this.getToken(DdsJsIdlParser.STAT_END, 0);
	}
	public COMMA_SEP_list(): TerminalNode[] {
	    	return this.getTokens(DdsJsIdlParser.COMMA_SEP);
	}
	public COMMA_SEP(i: number): TerminalNode {
		return this.getToken(DdsJsIdlParser.COMMA_SEP, i);
	}
    public get ruleIndex(): number {
    	return DdsJsIdlParser.RULE_enumDefinition;
	}
	// @Override
	public accept<Result>(visitor: DdsJsIdlVisitor<Result>): Result {
		if (visitor.visitEnumDefinition) {
			return visitor.visitEnumDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumLiteralContext extends ParserRuleContext {
	constructor(parser?: DdsJsIdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return DdsJsIdlParser.RULE_enumLiteral;
	}
	public copyFrom(ctx: EnumLiteralContext): void {
		super.copyFrom(ctx);
	}
}
export class ManualNumberedContext extends EnumLiteralContext {
	constructor(parser: DdsJsIdlParser, ctx: EnumLiteralContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(DdsJsIdlParser.IDENTIFIER, 0);
	}
	public ASSIGN_OP(): TerminalNode {
		return this.getToken(DdsJsIdlParser.ASSIGN_OP, 0);
	}
	public integerLiteral(): IntegerLiteralContext {
		return this.getTypedRuleContext(IntegerLiteralContext, 0) as IntegerLiteralContext;
	}
	// @Override
	public accept<Result>(visitor: DdsJsIdlVisitor<Result>): Result {
		if (visitor.visitManualNumbered) {
			return visitor.visitManualNumbered(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AutoNumberedContext extends EnumLiteralContext {
	constructor(parser: DdsJsIdlParser, ctx: EnumLiteralContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(DdsJsIdlParser.IDENTIFIER, 0);
	}
	// @Override
	public accept<Result>(visitor: DdsJsIdlVisitor<Result>): Result {
		if (visitor.visitAutoNumbered) {
			return visitor.visitAutoNumbered(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DataStructureDefinitionContext extends ParserRuleContext {
	constructor(parser?: DdsJsIdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public STRUCT_KW(): TerminalNode {
		return this.getToken(DdsJsIdlParser.STRUCT_KW, 0);
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(DdsJsIdlParser.IDENTIFIER, 0);
	}
	public OPEN_BRACE(): TerminalNode {
		return this.getToken(DdsJsIdlParser.OPEN_BRACE, 0);
	}
	public CLOSE_BRACE(): TerminalNode {
		return this.getToken(DdsJsIdlParser.CLOSE_BRACE, 0);
	}
	public STAT_END(): TerminalNode {
		return this.getToken(DdsJsIdlParser.STAT_END, 0);
	}
	public memberDefinition_list(): MemberDefinitionContext[] {
		return this.getTypedRuleContexts(MemberDefinitionContext) as MemberDefinitionContext[];
	}
	public memberDefinition(i: number): MemberDefinitionContext {
		return this.getTypedRuleContext(MemberDefinitionContext, i) as MemberDefinitionContext;
	}
    public get ruleIndex(): number {
    	return DdsJsIdlParser.RULE_dataStructureDefinition;
	}
	// @Override
	public accept<Result>(visitor: DdsJsIdlVisitor<Result>): Result {
		if (visitor.visitDataStructureDefinition) {
			return visitor.visitDataStructureDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MemberDefinitionContext extends ParserRuleContext {
	constructor(parser?: DdsJsIdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return DdsJsIdlParser.RULE_memberDefinition;
	}
	public copyFrom(ctx: MemberDefinitionContext): void {
		super.copyFrom(ctx);
	}
}
export class ArrayMemberDefinitionContext extends MemberDefinitionContext {
	constructor(parser: DdsJsIdlParser, ctx: MemberDefinitionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public typeDescription(): TypeDescriptionContext {
		return this.getTypedRuleContext(TypeDescriptionContext, 0) as TypeDescriptionContext;
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(DdsJsIdlParser.IDENTIFIER, 0);
	}
	public arrayDimensions(): ArrayDimensionsContext {
		return this.getTypedRuleContext(ArrayDimensionsContext, 0) as ArrayDimensionsContext;
	}
	public STAT_END(): TerminalNode {
		return this.getToken(DdsJsIdlParser.STAT_END, 0);
	}
	// @Override
	public accept<Result>(visitor: DdsJsIdlVisitor<Result>): Result {
		if (visitor.visitArrayMemberDefinition) {
			return visitor.visitArrayMemberDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NonArrayMemberDefinitionContext extends MemberDefinitionContext {
	constructor(parser: DdsJsIdlParser, ctx: MemberDefinitionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public typeDescription(): TypeDescriptionContext {
		return this.getTypedRuleContext(TypeDescriptionContext, 0) as TypeDescriptionContext;
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(DdsJsIdlParser.IDENTIFIER, 0);
	}
	public STAT_END(): TerminalNode {
		return this.getToken(DdsJsIdlParser.STAT_END, 0);
	}
	// @Override
	public accept<Result>(visitor: DdsJsIdlVisitor<Result>): Result {
		if (visitor.visitNonArrayMemberDefinition) {
			return visitor.visitNonArrayMemberDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnionDefinitionContext extends ParserRuleContext {
	constructor(parser?: DdsJsIdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public UNION_KW(): TerminalNode {
		return this.getToken(DdsJsIdlParser.UNION_KW, 0);
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(DdsJsIdlParser.IDENTIFIER, 0);
	}
	public SWITCH_KW(): TerminalNode {
		return this.getToken(DdsJsIdlParser.SWITCH_KW, 0);
	}
	public OPEN_PAREN(): TerminalNode {
		return this.getToken(DdsJsIdlParser.OPEN_PAREN, 0);
	}
	public unionDiscriminator(): UnionDiscriminatorContext {
		return this.getTypedRuleContext(UnionDiscriminatorContext, 0) as UnionDiscriminatorContext;
	}
	public CLOSE_PAREN(): TerminalNode {
		return this.getToken(DdsJsIdlParser.CLOSE_PAREN, 0);
	}
	public OPEN_BRACE(): TerminalNode {
		return this.getToken(DdsJsIdlParser.OPEN_BRACE, 0);
	}
	public CLOSE_BRACE(): TerminalNode {
		return this.getToken(DdsJsIdlParser.CLOSE_BRACE, 0);
	}
	public STAT_END(): TerminalNode {
		return this.getToken(DdsJsIdlParser.STAT_END, 0);
	}
	public unionMemberDefinition_list(): UnionMemberDefinitionContext[] {
		return this.getTypedRuleContexts(UnionMemberDefinitionContext) as UnionMemberDefinitionContext[];
	}
	public unionMemberDefinition(i: number): UnionMemberDefinitionContext {
		return this.getTypedRuleContext(UnionMemberDefinitionContext, i) as UnionMemberDefinitionContext;
	}
    public get ruleIndex(): number {
    	return DdsJsIdlParser.RULE_unionDefinition;
	}
	// @Override
	public accept<Result>(visitor: DdsJsIdlVisitor<Result>): Result {
		if (visitor.visitUnionDefinition) {
			return visitor.visitUnionDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnionDiscriminatorContext extends ParserRuleContext {
	constructor(parser?: DdsJsIdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return DdsJsIdlParser.RULE_unionDiscriminator;
	}
	public copyFrom(ctx: UnionDiscriminatorContext): void {
		super.copyFrom(ctx);
	}
}
export class CustomTypeUnionDiscriminatorContext extends UnionDiscriminatorContext {
	constructor(parser: DdsJsIdlParser, ctx: UnionDiscriminatorContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public scopedName(): ScopedNameContext {
		return this.getTypedRuleContext(ScopedNameContext, 0) as ScopedNameContext;
	}
	// @Override
	public accept<Result>(visitor: DdsJsIdlVisitor<Result>): Result {
		if (visitor.visitCustomTypeUnionDiscriminator) {
			return visitor.visitCustomTypeUnionDiscriminator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IntUnionDiscriminatorContext extends UnionDiscriminatorContext {
	constructor(parser: DdsJsIdlParser, ctx: UnionDiscriminatorContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public intType(): IntTypeContext {
		return this.getTypedRuleContext(IntTypeContext, 0) as IntTypeContext;
	}
	// @Override
	public accept<Result>(visitor: DdsJsIdlVisitor<Result>): Result {
		if (visitor.visitIntUnionDiscriminator) {
			return visitor.visitIntUnionDiscriminator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CharUnionDiscriminatorContext extends UnionDiscriminatorContext {
	constructor(parser: DdsJsIdlParser, ctx: UnionDiscriminatorContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public charType(): CharTypeContext {
		return this.getTypedRuleContext(CharTypeContext, 0) as CharTypeContext;
	}
	// @Override
	public accept<Result>(visitor: DdsJsIdlVisitor<Result>): Result {
		if (visitor.visitCharUnionDiscriminator) {
			return visitor.visitCharUnionDiscriminator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BooleanUnionDiscriminatorContext extends UnionDiscriminatorContext {
	constructor(parser: DdsJsIdlParser, ctx: UnionDiscriminatorContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public booleanType(): BooleanTypeContext {
		return this.getTypedRuleContext(BooleanTypeContext, 0) as BooleanTypeContext;
	}
	// @Override
	public accept<Result>(visitor: DdsJsIdlVisitor<Result>): Result {
		if (visitor.visitBooleanUnionDiscriminator) {
			return visitor.visitBooleanUnionDiscriminator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnionMemberDefinitionContext extends ParserRuleContext {
	constructor(parser?: DdsJsIdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return DdsJsIdlParser.RULE_unionMemberDefinition;
	}
	public copyFrom(ctx: UnionMemberDefinitionContext): void {
		super.copyFrom(ctx);
	}
}
export class SpecificUnionMemberDefinitionContext extends UnionMemberDefinitionContext {
	constructor(parser: DdsJsIdlParser, ctx: UnionMemberDefinitionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public memberDefinition(): MemberDefinitionContext {
		return this.getTypedRuleContext(MemberDefinitionContext, 0) as MemberDefinitionContext;
	}
	public unionCaseLabel_list(): UnionCaseLabelContext[] {
		return this.getTypedRuleContexts(UnionCaseLabelContext) as UnionCaseLabelContext[];
	}
	public unionCaseLabel(i: number): UnionCaseLabelContext {
		return this.getTypedRuleContext(UnionCaseLabelContext, i) as UnionCaseLabelContext;
	}
	// @Override
	public accept<Result>(visitor: DdsJsIdlVisitor<Result>): Result {
		if (visitor.visitSpecificUnionMemberDefinition) {
			return visitor.visitSpecificUnionMemberDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DefaultUnionMemberDefinitionContext extends UnionMemberDefinitionContext {
	constructor(parser: DdsJsIdlParser, ctx: UnionMemberDefinitionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DEFAULT_KW(): TerminalNode {
		return this.getToken(DdsJsIdlParser.DEFAULT_KW, 0);
	}
	public COLON_SEP(): TerminalNode {
		return this.getToken(DdsJsIdlParser.COLON_SEP, 0);
	}
	public memberDefinition(): MemberDefinitionContext {
		return this.getTypedRuleContext(MemberDefinitionContext, 0) as MemberDefinitionContext;
	}
	// @Override
	public accept<Result>(visitor: DdsJsIdlVisitor<Result>): Result {
		if (visitor.visitDefaultUnionMemberDefinition) {
			return visitor.visitDefaultUnionMemberDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnionCaseLabelContext extends ParserRuleContext {
	constructor(parser?: DdsJsIdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CASE_KW(): TerminalNode {
		return this.getToken(DdsJsIdlParser.CASE_KW, 0);
	}
	public unionCaseConstantExpr(): UnionCaseConstantExprContext {
		return this.getTypedRuleContext(UnionCaseConstantExprContext, 0) as UnionCaseConstantExprContext;
	}
	public COLON_SEP(): TerminalNode {
		return this.getToken(DdsJsIdlParser.COLON_SEP, 0);
	}
    public get ruleIndex(): number {
    	return DdsJsIdlParser.RULE_unionCaseLabel;
	}
	// @Override
	public accept<Result>(visitor: DdsJsIdlVisitor<Result>): Result {
		if (visitor.visitUnionCaseLabel) {
			return visitor.visitUnionCaseLabel(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnionCaseConstantExprContext extends ParserRuleContext {
	constructor(parser?: DdsJsIdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return DdsJsIdlParser.RULE_unionCaseConstantExpr;
	}
	public copyFrom(ctx: UnionCaseConstantExprContext): void {
		super.copyFrom(ctx);
	}
}
export class UnionIntegerConstantExprContext extends UnionCaseConstantExprContext {
	constructor(parser: DdsJsIdlParser, ctx: UnionCaseConstantExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public integerLiteral(): IntegerLiteralContext {
		return this.getTypedRuleContext(IntegerLiteralContext, 0) as IntegerLiteralContext;
	}
	// @Override
	public accept<Result>(visitor: DdsJsIdlVisitor<Result>): Result {
		if (visitor.visitUnionIntegerConstantExpr) {
			return visitor.visitUnionIntegerConstantExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UnionBooleanConstantExprContext extends UnionCaseConstantExprContext {
	constructor(parser: DdsJsIdlParser, ctx: UnionCaseConstantExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public booleanLiteral(): BooleanLiteralContext {
		return this.getTypedRuleContext(BooleanLiteralContext, 0) as BooleanLiteralContext;
	}
	// @Override
	public accept<Result>(visitor: DdsJsIdlVisitor<Result>): Result {
		if (visitor.visitUnionBooleanConstantExpr) {
			return visitor.visitUnionBooleanConstantExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UnionCharConstantExprContext extends UnionCaseConstantExprContext {
	constructor(parser: DdsJsIdlParser, ctx: UnionCaseConstantExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public charLiteral(): CharLiteralContext {
		return this.getTypedRuleContext(CharLiteralContext, 0) as CharLiteralContext;
	}
	// @Override
	public accept<Result>(visitor: DdsJsIdlVisitor<Result>): Result {
		if (visitor.visitUnionCharConstantExpr) {
			return visitor.visitUnionCharConstantExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UnionIdentifierConstantExprContext extends UnionCaseConstantExprContext {
	constructor(parser: DdsJsIdlParser, ctx: UnionCaseConstantExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(DdsJsIdlParser.IDENTIFIER, 0);
	}
	// @Override
	public accept<Result>(visitor: DdsJsIdlVisitor<Result>): Result {
		if (visitor.visitUnionIdentifierConstantExpr) {
			return visitor.visitUnionIdentifierConstantExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SequenceTypeContext extends ParserRuleContext {
	constructor(parser?: DdsJsIdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return DdsJsIdlParser.RULE_sequenceType;
	}
	public copyFrom(ctx: SequenceTypeContext): void {
		super.copyFrom(ctx);
	}
}
export class BoundedSequenceTypeContext extends SequenceTypeContext {
	constructor(parser: DdsJsIdlParser, ctx: SequenceTypeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public SEQUENCE_KW(): TerminalNode {
		return this.getToken(DdsJsIdlParser.SEQUENCE_KW, 0);
	}
	public OPEN_ANGLE(): TerminalNode {
		return this.getToken(DdsJsIdlParser.OPEN_ANGLE, 0);
	}
	public typeDescription(): TypeDescriptionContext {
		return this.getTypedRuleContext(TypeDescriptionContext, 0) as TypeDescriptionContext;
	}
	public COMMA_SEP(): TerminalNode {
		return this.getToken(DdsJsIdlParser.COMMA_SEP, 0);
	}
	public sizeDefinition(): SizeDefinitionContext {
		return this.getTypedRuleContext(SizeDefinitionContext, 0) as SizeDefinitionContext;
	}
	public CLOSE_ANGLE(): TerminalNode {
		return this.getToken(DdsJsIdlParser.CLOSE_ANGLE, 0);
	}
	// @Override
	public accept<Result>(visitor: DdsJsIdlVisitor<Result>): Result {
		if (visitor.visitBoundedSequenceType) {
			return visitor.visitBoundedSequenceType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UnboundedSequenceTypeContext extends SequenceTypeContext {
	constructor(parser: DdsJsIdlParser, ctx: SequenceTypeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public SEQUENCE_KW(): TerminalNode {
		return this.getToken(DdsJsIdlParser.SEQUENCE_KW, 0);
	}
	public OPEN_ANGLE(): TerminalNode {
		return this.getToken(DdsJsIdlParser.OPEN_ANGLE, 0);
	}
	public typeDescription(): TypeDescriptionContext {
		return this.getTypedRuleContext(TypeDescriptionContext, 0) as TypeDescriptionContext;
	}
	public CLOSE_ANGLE(): TerminalNode {
		return this.getToken(DdsJsIdlParser.CLOSE_ANGLE, 0);
	}
	// @Override
	public accept<Result>(visitor: DdsJsIdlVisitor<Result>): Result {
		if (visitor.visitUnboundedSequenceType) {
			return visitor.visitUnboundedSequenceType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StringTypeContext extends ParserRuleContext {
	constructor(parser?: DdsJsIdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return DdsJsIdlParser.RULE_stringType;
	}
	public copyFrom(ctx: StringTypeContext): void {
		super.copyFrom(ctx);
	}
}
export class BoundedStringTypeContext extends StringTypeContext {
	constructor(parser: DdsJsIdlParser, ctx: StringTypeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public STRING_KW(): TerminalNode {
		return this.getToken(DdsJsIdlParser.STRING_KW, 0);
	}
	public OPEN_ANGLE(): TerminalNode {
		return this.getToken(DdsJsIdlParser.OPEN_ANGLE, 0);
	}
	public sizeDefinition(): SizeDefinitionContext {
		return this.getTypedRuleContext(SizeDefinitionContext, 0) as SizeDefinitionContext;
	}
	public CLOSE_ANGLE(): TerminalNode {
		return this.getToken(DdsJsIdlParser.CLOSE_ANGLE, 0);
	}
	// @Override
	public accept<Result>(visitor: DdsJsIdlVisitor<Result>): Result {
		if (visitor.visitBoundedStringType) {
			return visitor.visitBoundedStringType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UnboundedStringTypeContext extends StringTypeContext {
	constructor(parser: DdsJsIdlParser, ctx: StringTypeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public STRING_KW(): TerminalNode {
		return this.getToken(DdsJsIdlParser.STRING_KW, 0);
	}
	// @Override
	public accept<Result>(visitor: DdsJsIdlVisitor<Result>): Result {
		if (visitor.visitUnboundedStringType) {
			return visitor.visitUnboundedStringType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayDimensionsContext extends ParserRuleContext {
	constructor(parser?: DdsJsIdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OPEN_SQUARE_list(): TerminalNode[] {
	    	return this.getTokens(DdsJsIdlParser.OPEN_SQUARE);
	}
	public OPEN_SQUARE(i: number): TerminalNode {
		return this.getToken(DdsJsIdlParser.OPEN_SQUARE, i);
	}
	public sizeDefinition_list(): SizeDefinitionContext[] {
		return this.getTypedRuleContexts(SizeDefinitionContext) as SizeDefinitionContext[];
	}
	public sizeDefinition(i: number): SizeDefinitionContext {
		return this.getTypedRuleContext(SizeDefinitionContext, i) as SizeDefinitionContext;
	}
	public CLOSE_SQUARE_list(): TerminalNode[] {
	    	return this.getTokens(DdsJsIdlParser.CLOSE_SQUARE);
	}
	public CLOSE_SQUARE(i: number): TerminalNode {
		return this.getToken(DdsJsIdlParser.CLOSE_SQUARE, i);
	}
    public get ruleIndex(): number {
    	return DdsJsIdlParser.RULE_arrayDimensions;
	}
	// @Override
	public accept<Result>(visitor: DdsJsIdlVisitor<Result>): Result {
		if (visitor.visitArrayDimensions) {
			return visitor.visitArrayDimensions(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SizeDefinitionContext extends ParserRuleContext {
	constructor(parser?: DdsJsIdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return DdsJsIdlParser.RULE_sizeDefinition;
	}
	public copyFrom(ctx: SizeDefinitionContext): void {
		super.copyFrom(ctx);
	}
}
export class SizeAsConstantDefinitionContext extends SizeDefinitionContext {
	constructor(parser: DdsJsIdlParser, ctx: SizeDefinitionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public scopedName(): ScopedNameContext {
		return this.getTypedRuleContext(ScopedNameContext, 0) as ScopedNameContext;
	}
	// @Override
	public accept<Result>(visitor: DdsJsIdlVisitor<Result>): Result {
		if (visitor.visitSizeAsConstantDefinition) {
			return visitor.visitSizeAsConstantDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SizeAsLiteralValueContext extends SizeDefinitionContext {
	constructor(parser: DdsJsIdlParser, ctx: SizeDefinitionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public NATURAL_NUMBER(): TerminalNode {
		return this.getToken(DdsJsIdlParser.NATURAL_NUMBER, 0);
	}
	// @Override
	public accept<Result>(visitor: DdsJsIdlVisitor<Result>): Result {
		if (visitor.visitSizeAsLiteralValue) {
			return visitor.visitSizeAsLiteralValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimitiveTypeContext extends ParserRuleContext {
	constructor(parser?: DdsJsIdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return DdsJsIdlParser.RULE_primitiveType;
	}
	public copyFrom(ctx: PrimitiveTypeContext): void {
		super.copyFrom(ctx);
	}
}
export class FloatPrimitiveTypeContext extends PrimitiveTypeContext {
	constructor(parser: DdsJsIdlParser, ctx: PrimitiveTypeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public floatType(): FloatTypeContext {
		return this.getTypedRuleContext(FloatTypeContext, 0) as FloatTypeContext;
	}
	// @Override
	public accept<Result>(visitor: DdsJsIdlVisitor<Result>): Result {
		if (visitor.visitFloatPrimitiveType) {
			return visitor.visitFloatPrimitiveType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IntPrimitiveTypeContext extends PrimitiveTypeContext {
	constructor(parser: DdsJsIdlParser, ctx: PrimitiveTypeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public intType(): IntTypeContext {
		return this.getTypedRuleContext(IntTypeContext, 0) as IntTypeContext;
	}
	// @Override
	public accept<Result>(visitor: DdsJsIdlVisitor<Result>): Result {
		if (visitor.visitIntPrimitiveType) {
			return visitor.visitIntPrimitiveType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BooleanPrimitiveTypeContext extends PrimitiveTypeContext {
	constructor(parser: DdsJsIdlParser, ctx: PrimitiveTypeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public booleanType(): BooleanTypeContext {
		return this.getTypedRuleContext(BooleanTypeContext, 0) as BooleanTypeContext;
	}
	// @Override
	public accept<Result>(visitor: DdsJsIdlVisitor<Result>): Result {
		if (visitor.visitBooleanPrimitiveType) {
			return visitor.visitBooleanPrimitiveType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CharPrimitiveTypeContext extends PrimitiveTypeContext {
	constructor(parser: DdsJsIdlParser, ctx: PrimitiveTypeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public charType(): CharTypeContext {
		return this.getTypedRuleContext(CharTypeContext, 0) as CharTypeContext;
	}
	// @Override
	public accept<Result>(visitor: DdsJsIdlVisitor<Result>): Result {
		if (visitor.visitCharPrimitiveType) {
			return visitor.visitCharPrimitiveType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IntTypeContext extends ParserRuleContext {
	constructor(parser?: DdsJsIdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return DdsJsIdlParser.RULE_intType;
	}
	public copyFrom(ctx: IntTypeContext): void {
		super.copyFrom(ctx);
	}
}
export class UnsignedLongLongIntTypeContext extends IntTypeContext {
	constructor(parser: DdsJsIdlParser, ctx: IntTypeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public UNSIGNED_KW(): TerminalNode {
		return this.getToken(DdsJsIdlParser.UNSIGNED_KW, 0);
	}
	public LONG_KW_list(): TerminalNode[] {
	    	return this.getTokens(DdsJsIdlParser.LONG_KW);
	}
	public LONG_KW(i: number): TerminalNode {
		return this.getToken(DdsJsIdlParser.LONG_KW, i);
	}
	// @Override
	public accept<Result>(visitor: DdsJsIdlVisitor<Result>): Result {
		if (visitor.visitUnsignedLongLongIntType) {
			return visitor.visitUnsignedLongLongIntType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class OctetIntTypeContext extends IntTypeContext {
	constructor(parser: DdsJsIdlParser, ctx: IntTypeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public OCTET_KW(): TerminalNode {
		return this.getToken(DdsJsIdlParser.OCTET_KW, 0);
	}
	// @Override
	public accept<Result>(visitor: DdsJsIdlVisitor<Result>): Result {
		if (visitor.visitOctetIntType) {
			return visitor.visitOctetIntType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LongIntTypeContext extends IntTypeContext {
	constructor(parser: DdsJsIdlParser, ctx: IntTypeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LONG_KW(): TerminalNode {
		return this.getToken(DdsJsIdlParser.LONG_KW, 0);
	}
	// @Override
	public accept<Result>(visitor: DdsJsIdlVisitor<Result>): Result {
		if (visitor.visitLongIntType) {
			return visitor.visitLongIntType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LongLongIntTypeContext extends IntTypeContext {
	constructor(parser: DdsJsIdlParser, ctx: IntTypeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LONG_KW_list(): TerminalNode[] {
	    	return this.getTokens(DdsJsIdlParser.LONG_KW);
	}
	public LONG_KW(i: number): TerminalNode {
		return this.getToken(DdsJsIdlParser.LONG_KW, i);
	}
	// @Override
	public accept<Result>(visitor: DdsJsIdlVisitor<Result>): Result {
		if (visitor.visitLongLongIntType) {
			return visitor.visitLongLongIntType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UnsignedLongIntTypeContext extends IntTypeContext {
	constructor(parser: DdsJsIdlParser, ctx: IntTypeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public UNSIGNED_KW(): TerminalNode {
		return this.getToken(DdsJsIdlParser.UNSIGNED_KW, 0);
	}
	public LONG_KW(): TerminalNode {
		return this.getToken(DdsJsIdlParser.LONG_KW, 0);
	}
	// @Override
	public accept<Result>(visitor: DdsJsIdlVisitor<Result>): Result {
		if (visitor.visitUnsignedLongIntType) {
			return visitor.visitUnsignedLongIntType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UnsignedShortIntTypeContext extends IntTypeContext {
	constructor(parser: DdsJsIdlParser, ctx: IntTypeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public UNSIGNED_KW(): TerminalNode {
		return this.getToken(DdsJsIdlParser.UNSIGNED_KW, 0);
	}
	public SHORT_KW(): TerminalNode {
		return this.getToken(DdsJsIdlParser.SHORT_KW, 0);
	}
	// @Override
	public accept<Result>(visitor: DdsJsIdlVisitor<Result>): Result {
		if (visitor.visitUnsignedShortIntType) {
			return visitor.visitUnsignedShortIntType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ShortIntTypeContext extends IntTypeContext {
	constructor(parser: DdsJsIdlParser, ctx: IntTypeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public SHORT_KW(): TerminalNode {
		return this.getToken(DdsJsIdlParser.SHORT_KW, 0);
	}
	// @Override
	public accept<Result>(visitor: DdsJsIdlVisitor<Result>): Result {
		if (visitor.visitShortIntType) {
			return visitor.visitShortIntType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FloatTypeContext extends ParserRuleContext {
	constructor(parser?: DdsJsIdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return DdsJsIdlParser.RULE_floatType;
	}
	public copyFrom(ctx: FloatTypeContext): void {
		super.copyFrom(ctx);
	}
}
export class DoublePrecisionFloatTypeContext extends FloatTypeContext {
	constructor(parser: DdsJsIdlParser, ctx: FloatTypeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DOUBLE_KW(): TerminalNode {
		return this.getToken(DdsJsIdlParser.DOUBLE_KW, 0);
	}
	// @Override
	public accept<Result>(visitor: DdsJsIdlVisitor<Result>): Result {
		if (visitor.visitDoublePrecisionFloatType) {
			return visitor.visitDoublePrecisionFloatType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SinglePrecisionFloatTypeContext extends FloatTypeContext {
	constructor(parser: DdsJsIdlParser, ctx: FloatTypeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public FLOAT_KW(): TerminalNode {
		return this.getToken(DdsJsIdlParser.FLOAT_KW, 0);
	}
	// @Override
	public accept<Result>(visitor: DdsJsIdlVisitor<Result>): Result {
		if (visitor.visitSinglePrecisionFloatType) {
			return visitor.visitSinglePrecisionFloatType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BooleanTypeContext extends ParserRuleContext {
	constructor(parser?: DdsJsIdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public BOOLEAN_KW(): TerminalNode {
		return this.getToken(DdsJsIdlParser.BOOLEAN_KW, 0);
	}
    public get ruleIndex(): number {
    	return DdsJsIdlParser.RULE_booleanType;
	}
	// @Override
	public accept<Result>(visitor: DdsJsIdlVisitor<Result>): Result {
		if (visitor.visitBooleanType) {
			return visitor.visitBooleanType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CharTypeContext extends ParserRuleContext {
	constructor(parser?: DdsJsIdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CHAR_KW(): TerminalNode {
		return this.getToken(DdsJsIdlParser.CHAR_KW, 0);
	}
    public get ruleIndex(): number {
    	return DdsJsIdlParser.RULE_charType;
	}
	// @Override
	public accept<Result>(visitor: DdsJsIdlVisitor<Result>): Result {
		if (visitor.visitCharType) {
			return visitor.visitCharType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LiteralValueContext extends ParserRuleContext {
	constructor(parser?: DdsJsIdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return DdsJsIdlParser.RULE_literalValue;
	}
	public copyFrom(ctx: LiteralValueContext): void {
		super.copyFrom(ctx);
	}
}
export class BooleanLiteralValueContext extends LiteralValueContext {
	constructor(parser: DdsJsIdlParser, ctx: LiteralValueContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public booleanLiteral(): BooleanLiteralContext {
		return this.getTypedRuleContext(BooleanLiteralContext, 0) as BooleanLiteralContext;
	}
	// @Override
	public accept<Result>(visitor: DdsJsIdlVisitor<Result>): Result {
		if (visitor.visitBooleanLiteralValue) {
			return visitor.visitBooleanLiteralValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IntLiteralValueContext extends LiteralValueContext {
	constructor(parser: DdsJsIdlParser, ctx: LiteralValueContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public integerLiteral(): IntegerLiteralContext {
		return this.getTypedRuleContext(IntegerLiteralContext, 0) as IntegerLiteralContext;
	}
	// @Override
	public accept<Result>(visitor: DdsJsIdlVisitor<Result>): Result {
		if (visitor.visitIntLiteralValue) {
			return visitor.visitIntLiteralValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StringLiteralValueContext extends LiteralValueContext {
	constructor(parser: DdsJsIdlParser, ctx: LiteralValueContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public stringLiteral(): StringLiteralContext {
		return this.getTypedRuleContext(StringLiteralContext, 0) as StringLiteralContext;
	}
	// @Override
	public accept<Result>(visitor: DdsJsIdlVisitor<Result>): Result {
		if (visitor.visitStringLiteralValue) {
			return visitor.visitStringLiteralValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FloatLiteralValueContext extends LiteralValueContext {
	constructor(parser: DdsJsIdlParser, ctx: LiteralValueContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public floatingPointLiteral(): FloatingPointLiteralContext {
		return this.getTypedRuleContext(FloatingPointLiteralContext, 0) as FloatingPointLiteralContext;
	}
	// @Override
	public accept<Result>(visitor: DdsJsIdlVisitor<Result>): Result {
		if (visitor.visitFloatLiteralValue) {
			return visitor.visitFloatLiteralValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RealLiteralValueContext extends LiteralValueContext {
	constructor(parser: DdsJsIdlParser, ctx: LiteralValueContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public fixedPointLiteral(): FixedPointLiteralContext {
		return this.getTypedRuleContext(FixedPointLiteralContext, 0) as FixedPointLiteralContext;
	}
	// @Override
	public accept<Result>(visitor: DdsJsIdlVisitor<Result>): Result {
		if (visitor.visitRealLiteralValue) {
			return visitor.visitRealLiteralValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CharLiteralValueContext extends LiteralValueContext {
	constructor(parser: DdsJsIdlParser, ctx: LiteralValueContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public charLiteral(): CharLiteralContext {
		return this.getTypedRuleContext(CharLiteralContext, 0) as CharLiteralContext;
	}
	// @Override
	public accept<Result>(visitor: DdsJsIdlVisitor<Result>): Result {
		if (visitor.visitCharLiteralValue) {
			return visitor.visitCharLiteralValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CharLiteralContext extends ParserRuleContext {
	constructor(parser?: DdsJsIdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CHAR_LITERAL(): TerminalNode {
		return this.getToken(DdsJsIdlParser.CHAR_LITERAL, 0);
	}
    public get ruleIndex(): number {
    	return DdsJsIdlParser.RULE_charLiteral;
	}
	// @Override
	public accept<Result>(visitor: DdsJsIdlVisitor<Result>): Result {
		if (visitor.visitCharLiteral) {
			return visitor.visitCharLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StringLiteralContext extends ParserRuleContext {
	constructor(parser?: DdsJsIdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public STRING_LITERAL(): TerminalNode {
		return this.getToken(DdsJsIdlParser.STRING_LITERAL, 0);
	}
    public get ruleIndex(): number {
    	return DdsJsIdlParser.RULE_stringLiteral;
	}
	// @Override
	public accept<Result>(visitor: DdsJsIdlVisitor<Result>): Result {
		if (visitor.visitStringLiteral) {
			return visitor.visitStringLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BooleanLiteralContext extends ParserRuleContext {
	constructor(parser?: DdsJsIdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return DdsJsIdlParser.RULE_booleanLiteral;
	}
	public copyFrom(ctx: BooleanLiteralContext): void {
		super.copyFrom(ctx);
	}
}
export class BooleanFalseLiteralContext extends BooleanLiteralContext {
	constructor(parser: DdsJsIdlParser, ctx: BooleanLiteralContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public BOOLEAN_FALSE(): TerminalNode {
		return this.getToken(DdsJsIdlParser.BOOLEAN_FALSE, 0);
	}
	// @Override
	public accept<Result>(visitor: DdsJsIdlVisitor<Result>): Result {
		if (visitor.visitBooleanFalseLiteral) {
			return visitor.visitBooleanFalseLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BooleanTrueLiteralContext extends BooleanLiteralContext {
	constructor(parser: DdsJsIdlParser, ctx: BooleanLiteralContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public BOOLEAN_TRUE(): TerminalNode {
		return this.getToken(DdsJsIdlParser.BOOLEAN_TRUE, 0);
	}
	// @Override
	public accept<Result>(visitor: DdsJsIdlVisitor<Result>): Result {
		if (visitor.visitBooleanTrueLiteral) {
			return visitor.visitBooleanTrueLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IntegerLiteralContext extends ParserRuleContext {
	constructor(parser?: DdsJsIdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return DdsJsIdlParser.RULE_integerLiteral;
	}
	public copyFrom(ctx: IntegerLiteralContext): void {
		super.copyFrom(ctx);
	}
}
export class HexIntegerLiteralContext extends IntegerLiteralContext {
	constructor(parser: DdsJsIdlParser, ctx: IntegerLiteralContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public HEXADECIMAL_LITERAL(): TerminalNode {
		return this.getToken(DdsJsIdlParser.HEXADECIMAL_LITERAL, 0);
	}
	// @Override
	public accept<Result>(visitor: DdsJsIdlVisitor<Result>): Result {
		if (visitor.visitHexIntegerLiteral) {
			return visitor.visitHexIntegerLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class OctalIntegerLiteralContext extends IntegerLiteralContext {
	constructor(parser: DdsJsIdlParser, ctx: IntegerLiteralContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public OCTAL_LITERAL(): TerminalNode {
		return this.getToken(DdsJsIdlParser.OCTAL_LITERAL, 0);
	}
	// @Override
	public accept<Result>(visitor: DdsJsIdlVisitor<Result>): Result {
		if (visitor.visitOctalIntegerLiteral) {
			return visitor.visitOctalIntegerLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SignedIntegerLiteralContext extends IntegerLiteralContext {
	constructor(parser: DdsJsIdlParser, ctx: IntegerLiteralContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public signedInteger(): SignedIntegerContext {
		return this.getTypedRuleContext(SignedIntegerContext, 0) as SignedIntegerContext;
	}
	// @Override
	public accept<Result>(visitor: DdsJsIdlVisitor<Result>): Result {
		if (visitor.visitSignedIntegerLiteral) {
			return visitor.visitSignedIntegerLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SignedIntegerContext extends ParserRuleContext {
	constructor(parser?: DdsJsIdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return DdsJsIdlParser.RULE_signedInteger;
	}
	public copyFrom(ctx: SignedIntegerContext): void {
		super.copyFrom(ctx);
	}
}
export class NegativeIntegerContext extends SignedIntegerContext {
	constructor(parser: DdsJsIdlParser, ctx: SignedIntegerContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public MINUS_OP(): TerminalNode {
		return this.getToken(DdsJsIdlParser.MINUS_OP, 0);
	}
	public NATURAL_NUMBER(): TerminalNode {
		return this.getToken(DdsJsIdlParser.NATURAL_NUMBER, 0);
	}
	// @Override
	public accept<Result>(visitor: DdsJsIdlVisitor<Result>): Result {
		if (visitor.visitNegativeInteger) {
			return visitor.visitNegativeInteger(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PositiveIntegerContext extends SignedIntegerContext {
	constructor(parser: DdsJsIdlParser, ctx: SignedIntegerContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public NATURAL_NUMBER(): TerminalNode {
		return this.getToken(DdsJsIdlParser.NATURAL_NUMBER, 0);
	}
	// @Override
	public accept<Result>(visitor: DdsJsIdlVisitor<Result>): Result {
		if (visitor.visitPositiveInteger) {
			return visitor.visitPositiveInteger(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FloatingPointLiteralContext extends ParserRuleContext {
	constructor(parser?: DdsJsIdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return DdsJsIdlParser.RULE_floatingPointLiteral;
	}
	public copyFrom(ctx: FloatingPointLiteralContext): void {
		super.copyFrom(ctx);
	}
}
export class FloatIntFracExponentContext extends FloatingPointLiteralContext {
	constructor(parser: DdsJsIdlParser, ctx: FloatingPointLiteralContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public signedInteger_list(): SignedIntegerContext[] {
		return this.getTypedRuleContexts(SignedIntegerContext) as SignedIntegerContext[];
	}
	public signedInteger(i: number): SignedIntegerContext {
		return this.getTypedRuleContext(SignedIntegerContext, i) as SignedIntegerContext;
	}
	public DOT_OP(): TerminalNode {
		return this.getToken(DdsJsIdlParser.DOT_OP, 0);
	}
	public DIGIT_SEQUENCE(): TerminalNode {
		return this.getToken(DdsJsIdlParser.DIGIT_SEQUENCE, 0);
	}
	public FLOAT_EXP_PREFIX(): TerminalNode {
		return this.getToken(DdsJsIdlParser.FLOAT_EXP_PREFIX, 0);
	}
	// @Override
	public accept<Result>(visitor: DdsJsIdlVisitor<Result>): Result {
		if (visitor.visitFloatIntFracExponent) {
			return visitor.visitFloatIntFracExponent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FloatIntExponentContext extends FloatingPointLiteralContext {
	constructor(parser: DdsJsIdlParser, ctx: FloatingPointLiteralContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public signedInteger_list(): SignedIntegerContext[] {
		return this.getTypedRuleContexts(SignedIntegerContext) as SignedIntegerContext[];
	}
	public signedInteger(i: number): SignedIntegerContext {
		return this.getTypedRuleContext(SignedIntegerContext, i) as SignedIntegerContext;
	}
	public FLOAT_EXP_PREFIX(): TerminalNode {
		return this.getToken(DdsJsIdlParser.FLOAT_EXP_PREFIX, 0);
	}
	// @Override
	public accept<Result>(visitor: DdsJsIdlVisitor<Result>): Result {
		if (visitor.visitFloatIntExponent) {
			return visitor.visitFloatIntExponent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FloatFracOnlyContext extends FloatingPointLiteralContext {
	constructor(parser: DdsJsIdlParser, ctx: FloatingPointLiteralContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DOT_OP(): TerminalNode {
		return this.getToken(DdsJsIdlParser.DOT_OP, 0);
	}
	public DIGIT_SEQUENCE(): TerminalNode {
		return this.getToken(DdsJsIdlParser.DIGIT_SEQUENCE, 0);
	}
	// @Override
	public accept<Result>(visitor: DdsJsIdlVisitor<Result>): Result {
		if (visitor.visitFloatFracOnly) {
			return visitor.visitFloatFracOnly(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FloatFracExponentContext extends FloatingPointLiteralContext {
	constructor(parser: DdsJsIdlParser, ctx: FloatingPointLiteralContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DOT_OP(): TerminalNode {
		return this.getToken(DdsJsIdlParser.DOT_OP, 0);
	}
	public DIGIT_SEQUENCE(): TerminalNode {
		return this.getToken(DdsJsIdlParser.DIGIT_SEQUENCE, 0);
	}
	public FLOAT_EXP_PREFIX(): TerminalNode {
		return this.getToken(DdsJsIdlParser.FLOAT_EXP_PREFIX, 0);
	}
	public signedInteger(): SignedIntegerContext {
		return this.getTypedRuleContext(SignedIntegerContext, 0) as SignedIntegerContext;
	}
	// @Override
	public accept<Result>(visitor: DdsJsIdlVisitor<Result>): Result {
		if (visitor.visitFloatFracExponent) {
			return visitor.visitFloatFracExponent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FixedPointLiteralContext extends ParserRuleContext {
	constructor(parser?: DdsJsIdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return DdsJsIdlParser.RULE_fixedPointLiteral;
	}
	public copyFrom(ctx: FixedPointLiteralContext): void {
		super.copyFrom(ctx);
	}
}
export class FixedPtIntFracContext extends FixedPointLiteralContext {
	constructor(parser: DdsJsIdlParser, ctx: FixedPointLiteralContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public signedInteger(): SignedIntegerContext {
		return this.getTypedRuleContext(SignedIntegerContext, 0) as SignedIntegerContext;
	}
	public DOT_OP(): TerminalNode {
		return this.getToken(DdsJsIdlParser.DOT_OP, 0);
	}
	public DIGIT_SEQUENCE(): TerminalNode {
		return this.getToken(DdsJsIdlParser.DIGIT_SEQUENCE, 0);
	}
	public FIXED_PT_SUFFIX(): TerminalNode {
		return this.getToken(DdsJsIdlParser.FIXED_PT_SUFFIX, 0);
	}
	// @Override
	public accept<Result>(visitor: DdsJsIdlVisitor<Result>): Result {
		if (visitor.visitFixedPtIntFrac) {
			return visitor.visitFixedPtIntFrac(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FixedPtIntOnlyContext extends FixedPointLiteralContext {
	constructor(parser: DdsJsIdlParser, ctx: FixedPointLiteralContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public signedInteger(): SignedIntegerContext {
		return this.getTypedRuleContext(SignedIntegerContext, 0) as SignedIntegerContext;
	}
	public FIXED_PT_SUFFIX(): TerminalNode {
		return this.getToken(DdsJsIdlParser.FIXED_PT_SUFFIX, 0);
	}
	// @Override
	public accept<Result>(visitor: DdsJsIdlVisitor<Result>): Result {
		if (visitor.visitFixedPtIntOnly) {
			return visitor.visitFixedPtIntOnly(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FixedPtFracOnlyContext extends FixedPointLiteralContext {
	constructor(parser: DdsJsIdlParser, ctx: FixedPointLiteralContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DOT_OP(): TerminalNode {
		return this.getToken(DdsJsIdlParser.DOT_OP, 0);
	}
	public DIGIT_SEQUENCE(): TerminalNode {
		return this.getToken(DdsJsIdlParser.DIGIT_SEQUENCE, 0);
	}
	public FIXED_PT_SUFFIX(): TerminalNode {
		return this.getToken(DdsJsIdlParser.FIXED_PT_SUFFIX, 0);
	}
	// @Override
	public accept<Result>(visitor: DdsJsIdlVisitor<Result>): Result {
		if (visitor.visitFixedPtFracOnly) {
			return visitor.visitFixedPtFracOnly(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
