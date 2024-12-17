// Generated from /Users/rnieves/Documents/Projects/dds-idl-compiler/src/DdsIdl.g4 by ANTLR 4.13.2
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
import DdsIdlListener from "./DdsIdlListener.js";
import DdsIdlVisitor from "./DdsIdlVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class DdsIdlParser extends Parser {
	public static readonly KW_ANNOTATION = 1;
	public static readonly KW_BITFIELD = 2;
	public static readonly KW_BITMASK = 3;
	public static readonly KW_BITSET = 4;
	public static readonly KW_BOOLEAN = 5;
	public static readonly KW_CASE = 6;
	public static readonly KW_CHAR = 7;
	public static readonly KW_CONST = 8;
	public static readonly KW_DEFAULT = 9;
	public static readonly KW_DOUBLE = 10;
	public static readonly KW_ENUM = 11;
	public static readonly KW_FIXED = 12;
	public static readonly KW_FLOAT = 13;
	public static readonly KW_INT16 = 14;
	public static readonly KW_INT32 = 15;
	public static readonly KW_INT64 = 16;
	public static readonly KW_INT8 = 17;
	public static readonly KW_LONG = 18;
	public static readonly KW_MAP = 19;
	public static readonly KW_MODULE = 20;
	public static readonly KW_OCTET = 21;
	public static readonly KW_SEQUENCE = 22;
	public static readonly KW_SHORT = 23;
	public static readonly KW_STRING = 24;
	public static readonly KW_STRUCT = 25;
	public static readonly KW_SWITCH = 26;
	public static readonly KW_TYPEDEF = 27;
	public static readonly KW_UNION = 28;
	public static readonly KW_UINT16 = 29;
	public static readonly KW_UINT32 = 30;
	public static readonly KW_UINT64 = 31;
	public static readonly KW_UINT8 = 32;
	public static readonly KW_UNSIGNED = 33;
	public static readonly KW_WCHAR = 34;
	public static readonly KW_WSTRING = 35;
	public static readonly ID = 36;
	public static readonly SL_COMMENT = 37;
	public static readonly ML_COMMENT = 38;
	public static readonly FLOATING_PT_LITERAL = 39;
	public static readonly HEX_LITERAL = 40;
	public static readonly INTEGER_LITERAL = 41;
	public static readonly OCTAL_LITERAL = 42;
	public static readonly BOOLEAN_LITERAL = 43;
	public static readonly WIDE_CHARACTER_LITERAL = 44;
	public static readonly CHARACTER_LITERAL = 45;
	public static readonly WIDE_STRING_LITERAL = 46;
	public static readonly STRING_LITERAL = 47;
	public static readonly AMPERSAND = 48;
	public static readonly ASTERISK = 49;
	public static readonly AT = 50;
	public static readonly CARET = 51;
	public static readonly COLON = 52;
	public static readonly COMMA = 53;
	public static readonly DOUBLE_SLASH = 54;
	public static readonly EQUALS = 55;
	public static readonly FORWARD_SLASH = 56;
	public static readonly LEFT_ANGLE = 57;
	public static readonly LEFT_BRACE = 58;
	public static readonly LEFT_BRACKET = 59;
	public static readonly LEFT_PAREN = 60;
	public static readonly LEFT_SHIFT = 61;
	public static readonly MINUS = 62;
	public static readonly PERCENT = 63;
	public static readonly PLUS = 64;
	public static readonly RIGHT_ANGLE = 65;
	public static readonly RIGHT_BRACE = 66;
	public static readonly RIGHT_BRACKET = 67;
	public static readonly RIGHT_PAREN = 68;
	public static readonly RIGHT_SHIFT = 69;
	public static readonly SCOPE_SEP = 70;
	public static readonly SEMICOLON = 71;
	public static readonly SLASH_STAR = 72;
	public static readonly STAR_SLASH = 73;
	public static readonly TILDE = 74;
	public static readonly VERT_BAR = 75;
	public static readonly WS = 76;
	public static override readonly EOF = Token.EOF;
	public static readonly RULE_specification = 0;
	public static readonly RULE_definition = 1;
	public static readonly RULE_module = 2;
	public static readonly RULE_scopedName = 3;
	public static readonly RULE_constantDeclaration = 4;
	public static readonly RULE_constantType = 5;
	public static readonly RULE_constantExpression = 6;
	public static readonly RULE_orExpression = 7;
	public static readonly RULE_xorExpression = 8;
	public static readonly RULE_andExpression = 9;
	public static readonly RULE_shiftExpression = 10;
	public static readonly RULE_addExpression = 11;
	public static readonly RULE_multExpression = 12;
	public static readonly RULE_unaryExpression = 13;
	public static readonly RULE_unaryOperator = 14;
	public static readonly RULE_primaryExpression = 15;
	public static readonly RULE_literal = 16;
	public static readonly RULE_positiveIntegerConstant = 17;
	public static readonly RULE_typeDeclaration = 18;
	public static readonly RULE_typeSpecification = 19;
	public static readonly RULE_simpleTypeSpecification = 20;
	public static readonly RULE_baseTypeSpecification = 21;
	public static readonly RULE_floatingPointType = 22;
	public static readonly RULE_integerType = 23;
	public static readonly RULE_signedIntegerType = 24;
	public static readonly RULE_signedShortIntegerType = 25;
	public static readonly RULE_signedLongIntegerType = 26;
	public static readonly RULE_signedLongLongIntegerType = 27;
	public static readonly RULE_signedTinyIntegerType = 28;
	public static readonly RULE_unsignedIntegerType = 29;
	public static readonly RULE_unsignedShortIntegerType = 30;
	public static readonly RULE_unsignedLongIntegerType = 31;
	public static readonly RULE_unsignedLongLongIntegerType = 32;
	public static readonly RULE_unsignedTinyIntegerType = 33;
	public static readonly RULE_charType = 34;
	public static readonly RULE_wideCharType = 35;
	public static readonly RULE_booleanType = 36;
	public static readonly RULE_octetType = 37;
	public static readonly RULE_templateTypeSpecification = 38;
	public static readonly RULE_sequenceType = 39;
	public static readonly RULE_stringType = 40;
	public static readonly RULE_wideStringType = 41;
	public static readonly RULE_fixedPointType = 42;
	public static readonly RULE_fixedPointConstantType = 43;
	public static readonly RULE_constructedTypeDeclaration = 44;
	public static readonly RULE_mapType = 45;
	public static readonly RULE_bitsetDeclaration = 46;
	public static readonly RULE_bitfield = 47;
	public static readonly RULE_bitfieldSpecifier = 48;
	public static readonly RULE_bitfieldDestinationType = 49;
	public static readonly RULE_bitmaskDeclaration = 50;
	public static readonly RULE_bitValues = 51;
	public static readonly RULE_bitValue = 52;
	public static readonly RULE_structureDeclaration = 53;
	public static readonly RULE_structureDefinition = 54;
	public static readonly RULE_structMember = 55;
	public static readonly RULE_structureForwardDeclaration = 56;
	public static readonly RULE_unionDeclaration = 57;
	public static readonly RULE_unionDefinition = 58;
	public static readonly RULE_switchTypeSpecification = 59;
	public static readonly RULE_switchBody = 60;
	public static readonly RULE_case = 61;
	public static readonly RULE_caseCondition = 62;
	public static readonly RULE_unionElementSpecification = 63;
	public static readonly RULE_unionForwardDeclaration = 64;
	public static readonly RULE_enumDeclaration = 65;
	public static readonly RULE_enumerator = 66;
	public static readonly RULE_arrayDeclarator = 67;
	public static readonly RULE_fixedArraySize = 68;
	public static readonly RULE_simpleDeclarator = 69;
	public static readonly RULE_typeAliasDeclaration = 70;
	public static readonly RULE_typeDeclarator = 71;
	public static readonly RULE_typeDeclaratorType = 72;
	public static readonly RULE_anyDeclarators = 73;
	public static readonly RULE_anyDeclarator = 74;
	public static readonly RULE_annotatableDeclarators = 75;
	public static readonly RULE_annotatableDeclarator = 76;
	public static readonly RULE_annotationDeclaration = 77;
	public static readonly RULE_annotationHeader = 78;
	public static readonly RULE_annotationBody = 79;
	public static readonly RULE_annotationBodyItem = 80;
	public static readonly RULE_annotationMember = 81;
	public static readonly RULE_annotationMemberType = 82;
	public static readonly RULE_annotationApplications = 83;
	public static readonly RULE_annotationApplication = 84;
	public static readonly RULE_annotationApplicationParameters = 85;
	public static readonly RULE_annotationApplicationParameter = 86;
	public static readonly RULE_identifier = 87;
	public static readonly literalNames: (string | null)[] = [ null, "'@annotation'", 
                                                            "'bitfield'", 
                                                            "'bitmask'", 
                                                            "'bitset'", 
                                                            "'boolean'", 
                                                            "'case'", "'char'", 
                                                            "'const'", "'default'", 
                                                            "'double'", 
                                                            "'enum'", "'fixed'", 
                                                            "'float'", "'int16'", 
                                                            "'int32'", "'int64'", 
                                                            "'int8'", "'long'", 
                                                            "'map'", "'module'", 
                                                            "'octet'", "'sequence'", 
                                                            "'short'", "'string'", 
                                                            "'struct'", 
                                                            "'switch'", 
                                                            "'typedef'", 
                                                            "'union'", "'uint16'", 
                                                            "'uint32'", 
                                                            "'uint64'", 
                                                            "'uint8'", "'unsigned'", 
                                                            "'wchar'", "'wstring'", 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            "'&'", "'*'", 
                                                            "'@'", "'^'", 
                                                            "':'", "','", 
                                                            "'//'", "'='", 
                                                            "'/'", "'<'", 
                                                            "'{'", "'['", 
                                                            "'('", "'<<'", 
                                                            "'-'", "'%'", 
                                                            "'+'", "'>'", 
                                                            "'}'", "']'", 
                                                            "')'", "'>>'", 
                                                            "'::'", "';'", 
                                                            "'/*'", "'*/'", 
                                                            "'~'", "'|'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "KW_ANNOTATION", 
                                                             "KW_BITFIELD", 
                                                             "KW_BITMASK", 
                                                             "KW_BITSET", 
                                                             "KW_BOOLEAN", 
                                                             "KW_CASE", 
                                                             "KW_CHAR", 
                                                             "KW_CONST", 
                                                             "KW_DEFAULT", 
                                                             "KW_DOUBLE", 
                                                             "KW_ENUM", 
                                                             "KW_FIXED", 
                                                             "KW_FLOAT", 
                                                             "KW_INT16", 
                                                             "KW_INT32", 
                                                             "KW_INT64", 
                                                             "KW_INT8", 
                                                             "KW_LONG", 
                                                             "KW_MAP", "KW_MODULE", 
                                                             "KW_OCTET", 
                                                             "KW_SEQUENCE", 
                                                             "KW_SHORT", 
                                                             "KW_STRING", 
                                                             "KW_STRUCT", 
                                                             "KW_SWITCH", 
                                                             "KW_TYPEDEF", 
                                                             "KW_UNION", 
                                                             "KW_UINT16", 
                                                             "KW_UINT32", 
                                                             "KW_UINT64", 
                                                             "KW_UINT8", 
                                                             "KW_UNSIGNED", 
                                                             "KW_WCHAR", 
                                                             "KW_WSTRING", 
                                                             "ID", "SL_COMMENT", 
                                                             "ML_COMMENT", 
                                                             "FLOATING_PT_LITERAL", 
                                                             "HEX_LITERAL", 
                                                             "INTEGER_LITERAL", 
                                                             "OCTAL_LITERAL", 
                                                             "BOOLEAN_LITERAL", 
                                                             "WIDE_CHARACTER_LITERAL", 
                                                             "CHARACTER_LITERAL", 
                                                             "WIDE_STRING_LITERAL", 
                                                             "STRING_LITERAL", 
                                                             "AMPERSAND", 
                                                             "ASTERISK", 
                                                             "AT", "CARET", 
                                                             "COLON", "COMMA", 
                                                             "DOUBLE_SLASH", 
                                                             "EQUALS", "FORWARD_SLASH", 
                                                             "LEFT_ANGLE", 
                                                             "LEFT_BRACE", 
                                                             "LEFT_BRACKET", 
                                                             "LEFT_PAREN", 
                                                             "LEFT_SHIFT", 
                                                             "MINUS", "PERCENT", 
                                                             "PLUS", "RIGHT_ANGLE", 
                                                             "RIGHT_BRACE", 
                                                             "RIGHT_BRACKET", 
                                                             "RIGHT_PAREN", 
                                                             "RIGHT_SHIFT", 
                                                             "SCOPE_SEP", 
                                                             "SEMICOLON", 
                                                             "SLASH_STAR", 
                                                             "STAR_SLASH", 
                                                             "TILDE", "VERT_BAR", 
                                                             "WS" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"specification", "definition", "module", "scopedName", "constantDeclaration", 
		"constantType", "constantExpression", "orExpression", "xorExpression", 
		"andExpression", "shiftExpression", "addExpression", "multExpression", 
		"unaryExpression", "unaryOperator", "primaryExpression", "literal", "positiveIntegerConstant", 
		"typeDeclaration", "typeSpecification", "simpleTypeSpecification", "baseTypeSpecification", 
		"floatingPointType", "integerType", "signedIntegerType", "signedShortIntegerType", 
		"signedLongIntegerType", "signedLongLongIntegerType", "signedTinyIntegerType", 
		"unsignedIntegerType", "unsignedShortIntegerType", "unsignedLongIntegerType", 
		"unsignedLongLongIntegerType", "unsignedTinyIntegerType", "charType", 
		"wideCharType", "booleanType", "octetType", "templateTypeSpecification", 
		"sequenceType", "stringType", "wideStringType", "fixedPointType", "fixedPointConstantType", 
		"constructedTypeDeclaration", "mapType", "bitsetDeclaration", "bitfield", 
		"bitfieldSpecifier", "bitfieldDestinationType", "bitmaskDeclaration", 
		"bitValues", "bitValue", "structureDeclaration", "structureDefinition", 
		"structMember", "structureForwardDeclaration", "unionDeclaration", "unionDefinition", 
		"switchTypeSpecification", "switchBody", "case", "caseCondition", "unionElementSpecification", 
		"unionForwardDeclaration", "enumDeclaration", "enumerator", "arrayDeclarator", 
		"fixedArraySize", "simpleDeclarator", "typeAliasDeclaration", "typeDeclarator", 
		"typeDeclaratorType", "anyDeclarators", "anyDeclarator", "annotatableDeclarators", 
		"annotatableDeclarator", "annotationDeclaration", "annotationHeader", 
		"annotationBody", "annotationBodyItem", "annotationMember", "annotationMemberType", 
		"annotationApplications", "annotationApplication", "annotationApplicationParameters", 
		"annotationApplicationParameter", "identifier",
	];
	public get grammarFileName(): string { return "DdsIdl.g4"; }
	public get literalNames(): (string | null)[] { return DdsIdlParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return DdsIdlParser.symbolicNames; }
	public get ruleNames(): string[] { return DdsIdlParser.ruleNames; }
	public get serializedATN(): number[] { return DdsIdlParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, DdsIdlParser._ATN, DdsIdlParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public specification(): SpecificationContext {
		let localctx: SpecificationContext = new SpecificationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, DdsIdlParser.RULE_specification);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 177;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 176;
				this.definition();
				}
				}
				this.state = 179;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 437258522) !== 0) || _la===50);
			this.state = 181;
			this.match(DdsIdlParser.EOF);
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
	public definition(): DefinitionContext {
		let localctx: DefinitionContext = new DefinitionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, DdsIdlParser.RULE_definition);
		try {
			this.state = 199;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 183;
				this.annotationApplications();
				this.state = 184;
				this.module_();
				this.state = 185;
				this.match(DdsIdlParser.SEMICOLON);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 187;
				this.annotationApplications();
				this.state = 188;
				this.constantDeclaration();
				this.state = 189;
				this.match(DdsIdlParser.SEMICOLON);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 191;
				this.annotationApplications();
				this.state = 192;
				this.typeDeclaration();
				this.state = 193;
				this.match(DdsIdlParser.SEMICOLON);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 195;
				this.annotationApplications();
				this.state = 196;
				this.annotationDeclaration();
				this.state = 197;
				this.match(DdsIdlParser.SEMICOLON);
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
	public module_(): ModuleContext {
		let localctx: ModuleContext = new ModuleContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, DdsIdlParser.RULE_module);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 201;
			this.match(DdsIdlParser.KW_MODULE);
			this.state = 202;
			this.identifier();
			this.state = 203;
			this.match(DdsIdlParser.LEFT_BRACE);
			this.state = 205;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 204;
				this.definition();
				}
				}
				this.state = 207;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 437258522) !== 0) || _la===50);
			this.state = 209;
			this.match(DdsIdlParser.RIGHT_BRACE);
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

	public scopedName(): ScopedNameContext;
	public scopedName(_p: number): ScopedNameContext;
	// @RuleVersion(0)
	public scopedName(_p?: number): ScopedNameContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: ScopedNameContext = new ScopedNameContext(this, this._ctx, _parentState);
		let _prevctx: ScopedNameContext = localctx;
		let _startState: number = 6;
		this.enterRecursionRule(localctx, 6, DdsIdlParser.RULE_scopedName, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 215;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 36:
			case 50:
				{
				localctx = new SingleScopedNameContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;

				this.state = 212;
				this.identifier();
				}
				break;
			case 70:
				{
				localctx = new RootedScopedNameContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 213;
				this.match(DdsIdlParser.SCOPE_SEP);
				this.state = 214;
				this.identifier();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 222;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 4, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					{
					localctx = new CompoundScopedNameContext(this, new ScopedNameContext(this, _parentctx, _parentState));
					this.pushNewRecursionContext(localctx, _startState, DdsIdlParser.RULE_scopedName);
					this.state = 217;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 218;
					this.match(DdsIdlParser.SCOPE_SEP);
					this.state = 219;
					this.identifier();
					}
					}
				}
				this.state = 224;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 4, this._ctx);
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
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}
	// @RuleVersion(0)
	public constantDeclaration(): ConstantDeclarationContext {
		let localctx: ConstantDeclarationContext = new ConstantDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, DdsIdlParser.RULE_constantDeclaration);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 225;
			this.match(DdsIdlParser.KW_CONST);
			this.state = 226;
			this.constantType();
			this.state = 227;
			this.identifier();
			this.state = 228;
			this.match(DdsIdlParser.EQUALS);
			this.state = 229;
			this.constantExpression();
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
	public constantType(): ConstantTypeContext {
		let localctx: ConstantTypeContext = new ConstantTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, DdsIdlParser.RULE_constantType);
		try {
			this.state = 261;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 231;
				this.annotationApplications();
				this.state = 232;
				this.integerType();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 234;
				this.annotationApplications();
				this.state = 235;
				this.floatingPointType();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 237;
				this.annotationApplications();
				this.state = 238;
				this.fixedPointConstantType();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 240;
				this.annotationApplications();
				this.state = 241;
				this.charType();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 243;
				this.annotationApplications();
				this.state = 244;
				this.wideCharType();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 246;
				this.annotationApplications();
				this.state = 247;
				this.booleanType();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 249;
				this.annotationApplications();
				this.state = 250;
				this.octetType();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 252;
				this.annotationApplications();
				this.state = 253;
				this.stringType();
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 255;
				this.annotationApplications();
				this.state = 256;
				this.wideStringType();
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 258;
				this.annotationApplications();
				this.state = 259;
				this.scopedName(0);
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
	public constantExpression(): ConstantExpressionContext {
		let localctx: ConstantExpressionContext = new ConstantExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, DdsIdlParser.RULE_constantExpression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 263;
			this.orExpression(0);
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

	public orExpression(): OrExpressionContext;
	public orExpression(_p: number): OrExpressionContext;
	// @RuleVersion(0)
	public orExpression(_p?: number): OrExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: OrExpressionContext = new OrExpressionContext(this, this._ctx, _parentState);
		let _prevctx: OrExpressionContext = localctx;
		let _startState: number = 14;
		this.enterRecursionRule(localctx, 14, DdsIdlParser.RULE_orExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			localctx = new OrPassThroughContext(this, localctx);
			this._ctx = localctx;
			_prevctx = localctx;

			this.state = 266;
			this.xorExpression(0);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 273;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 6, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					{
					localctx = new OrOperationContext(this, new OrExpressionContext(this, _parentctx, _parentState));
					this.pushNewRecursionContext(localctx, _startState, DdsIdlParser.RULE_orExpression);
					this.state = 268;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 269;
					this.match(DdsIdlParser.VERT_BAR);
					this.state = 270;
					this.xorExpression(0);
					}
					}
				}
				this.state = 275;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 6, this._ctx);
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
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}

	public xorExpression(): XorExpressionContext;
	public xorExpression(_p: number): XorExpressionContext;
	// @RuleVersion(0)
	public xorExpression(_p?: number): XorExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: XorExpressionContext = new XorExpressionContext(this, this._ctx, _parentState);
		let _prevctx: XorExpressionContext = localctx;
		let _startState: number = 16;
		this.enterRecursionRule(localctx, 16, DdsIdlParser.RULE_xorExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			localctx = new XorPassThroughContext(this, localctx);
			this._ctx = localctx;
			_prevctx = localctx;

			this.state = 277;
			this.andExpression(0);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 284;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 7, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					{
					localctx = new XorOperationContext(this, new XorExpressionContext(this, _parentctx, _parentState));
					this.pushNewRecursionContext(localctx, _startState, DdsIdlParser.RULE_xorExpression);
					this.state = 279;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 280;
					this.match(DdsIdlParser.CARET);
					this.state = 281;
					this.andExpression(0);
					}
					}
				}
				this.state = 286;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 7, this._ctx);
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
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}

	public andExpression(): AndExpressionContext;
	public andExpression(_p: number): AndExpressionContext;
	// @RuleVersion(0)
	public andExpression(_p?: number): AndExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: AndExpressionContext = new AndExpressionContext(this, this._ctx, _parentState);
		let _prevctx: AndExpressionContext = localctx;
		let _startState: number = 18;
		this.enterRecursionRule(localctx, 18, DdsIdlParser.RULE_andExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			localctx = new AndPassThroughContext(this, localctx);
			this._ctx = localctx;
			_prevctx = localctx;

			this.state = 288;
			this.shiftExpression(0);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 295;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 8, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					{
					localctx = new AndOperationContext(this, new AndExpressionContext(this, _parentctx, _parentState));
					this.pushNewRecursionContext(localctx, _startState, DdsIdlParser.RULE_andExpression);
					this.state = 290;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 291;
					this.match(DdsIdlParser.AMPERSAND);
					this.state = 292;
					this.shiftExpression(0);
					}
					}
				}
				this.state = 297;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 8, this._ctx);
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
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}

	public shiftExpression(): ShiftExpressionContext;
	public shiftExpression(_p: number): ShiftExpressionContext;
	// @RuleVersion(0)
	public shiftExpression(_p?: number): ShiftExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: ShiftExpressionContext = new ShiftExpressionContext(this, this._ctx, _parentState);
		let _prevctx: ShiftExpressionContext = localctx;
		let _startState: number = 20;
		this.enterRecursionRule(localctx, 20, DdsIdlParser.RULE_shiftExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			localctx = new ShiftPassThroughContext(this, localctx);
			this._ctx = localctx;
			_prevctx = localctx;

			this.state = 299;
			this.addExpression(0);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 309;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 10, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 307;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 9, this._ctx) ) {
					case 1:
						{
						localctx = new ShiftRightOperationContext(this, new ShiftExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, DdsIdlParser.RULE_shiftExpression);
						this.state = 301;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 302;
						this.match(DdsIdlParser.RIGHT_SHIFT);
						this.state = 303;
						this.addExpression(0);
						}
						break;
					case 2:
						{
						localctx = new ShiftLeftOperationContext(this, new ShiftExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, DdsIdlParser.RULE_shiftExpression);
						this.state = 304;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 305;
						this.match(DdsIdlParser.LEFT_SHIFT);
						this.state = 306;
						this.addExpression(0);
						}
						break;
					}
					}
				}
				this.state = 311;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 10, this._ctx);
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
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}

	public addExpression(): AddExpressionContext;
	public addExpression(_p: number): AddExpressionContext;
	// @RuleVersion(0)
	public addExpression(_p?: number): AddExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: AddExpressionContext = new AddExpressionContext(this, this._ctx, _parentState);
		let _prevctx: AddExpressionContext = localctx;
		let _startState: number = 22;
		this.enterRecursionRule(localctx, 22, DdsIdlParser.RULE_addExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			localctx = new AddPassThroughContext(this, localctx);
			this._ctx = localctx;
			_prevctx = localctx;

			this.state = 313;
			this.multExpression(0);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 323;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 12, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 321;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 11, this._ctx) ) {
					case 1:
						{
						localctx = new AddOperationContext(this, new AddExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, DdsIdlParser.RULE_addExpression);
						this.state = 315;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 316;
						this.match(DdsIdlParser.PLUS);
						this.state = 317;
						this.multExpression(0);
						}
						break;
					case 2:
						{
						localctx = new SubtractOperationContext(this, new AddExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, DdsIdlParser.RULE_addExpression);
						this.state = 318;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 319;
						this.match(DdsIdlParser.MINUS);
						this.state = 320;
						this.multExpression(0);
						}
						break;
					}
					}
				}
				this.state = 325;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 12, this._ctx);
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
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}

	public multExpression(): MultExpressionContext;
	public multExpression(_p: number): MultExpressionContext;
	// @RuleVersion(0)
	public multExpression(_p?: number): MultExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: MultExpressionContext = new MultExpressionContext(this, this._ctx, _parentState);
		let _prevctx: MultExpressionContext = localctx;
		let _startState: number = 24;
		this.enterRecursionRule(localctx, 24, DdsIdlParser.RULE_multExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			localctx = new MultPassThroughContext(this, localctx);
			this._ctx = localctx;
			_prevctx = localctx;

			this.state = 327;
			this.unaryExpression();
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 340;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 14, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 338;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 13, this._ctx) ) {
					case 1:
						{
						localctx = new MultiplyOperationContext(this, new MultExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, DdsIdlParser.RULE_multExpression);
						this.state = 329;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 330;
						this.match(DdsIdlParser.ASTERISK);
						this.state = 331;
						this.unaryExpression();
						}
						break;
					case 2:
						{
						localctx = new DivideOperationContext(this, new MultExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, DdsIdlParser.RULE_multExpression);
						this.state = 332;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 333;
						this.match(DdsIdlParser.FORWARD_SLASH);
						this.state = 334;
						this.unaryExpression();
						}
						break;
					case 3:
						{
						localctx = new ModuloOperationContext(this, new MultExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, DdsIdlParser.RULE_multExpression);
						this.state = 335;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 336;
						this.match(DdsIdlParser.PERCENT);
						this.state = 337;
						this.unaryExpression();
						}
						break;
					}
					}
				}
				this.state = 342;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 14, this._ctx);
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
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}
	// @RuleVersion(0)
	public unaryExpression(): UnaryExpressionContext {
		let localctx: UnaryExpressionContext = new UnaryExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 26, DdsIdlParser.RULE_unaryExpression);
		try {
			this.state = 347;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 62:
			case 64:
			case 74:
				localctx = new UnaryOperationContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 343;
				this.unaryOperator();
				this.state = 344;
				this.primaryExpression();
				}
				break;
			case 36:
			case 39:
			case 40:
			case 41:
			case 42:
			case 43:
			case 44:
			case 45:
			case 46:
			case 47:
			case 50:
			case 60:
			case 70:
				localctx = new UnaryPassThroughContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 346;
				this.primaryExpression();
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
	public unaryOperator(): UnaryOperatorContext {
		let localctx: UnaryOperatorContext = new UnaryOperatorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 28, DdsIdlParser.RULE_unaryOperator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 349;
			_la = this._input.LA(1);
			if(!(((((_la - 62)) & ~0x1F) === 0 && ((1 << (_la - 62)) & 4101) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
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
	public primaryExpression(): PrimaryExpressionContext {
		let localctx: PrimaryExpressionContext = new PrimaryExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 30, DdsIdlParser.RULE_primaryExpression);
		try {
			this.state = 357;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 36:
			case 50:
			case 70:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 351;
				this.scopedName(0);
				}
				break;
			case 39:
			case 40:
			case 41:
			case 42:
			case 43:
			case 44:
			case 45:
			case 46:
			case 47:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 352;
				this.literal();
				}
				break;
			case 60:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 353;
				this.match(DdsIdlParser.LEFT_PAREN);
				this.state = 354;
				this.constantExpression();
				this.state = 355;
				this.match(DdsIdlParser.RIGHT_PAREN);
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
	public literal(): LiteralContext {
		let localctx: LiteralContext = new LiteralContext(this, this._ctx, this.state);
		this.enterRule(localctx, 32, DdsIdlParser.RULE_literal);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 359;
			_la = this._input.LA(1);
			if(!(((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & 511) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
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
	public positiveIntegerConstant(): PositiveIntegerConstantContext {
		let localctx: PositiveIntegerConstantContext = new PositiveIntegerConstantContext(this, this._ctx, this.state);
		this.enterRule(localctx, 34, DdsIdlParser.RULE_positiveIntegerConstant);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 361;
			this.constantExpression();
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
	public typeDeclaration(): TypeDeclarationContext {
		let localctx: TypeDeclarationContext = new TypeDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 36, DdsIdlParser.RULE_typeDeclaration);
		try {
			this.state = 365;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 3:
			case 4:
			case 11:
			case 25:
			case 28:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 363;
				this.constructedTypeDeclaration();
				}
				break;
			case 27:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 364;
				this.typeAliasDeclaration();
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
	public typeSpecification(): TypeSpecificationContext {
		let localctx: TypeSpecificationContext = new TypeSpecificationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 38, DdsIdlParser.RULE_typeSpecification);
		try {
			this.state = 369;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 5:
			case 7:
			case 10:
			case 13:
			case 14:
			case 15:
			case 16:
			case 17:
			case 18:
			case 21:
			case 23:
			case 29:
			case 30:
			case 31:
			case 32:
			case 33:
			case 34:
			case 36:
			case 50:
			case 70:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 367;
				this.simpleTypeSpecification();
				}
				break;
			case 12:
			case 19:
			case 22:
			case 24:
			case 35:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 368;
				this.templateTypeSpecification();
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
	public simpleTypeSpecification(): SimpleTypeSpecificationContext {
		let localctx: SimpleTypeSpecificationContext = new SimpleTypeSpecificationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 40, DdsIdlParser.RULE_simpleTypeSpecification);
		try {
			this.state = 373;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 5:
			case 7:
			case 10:
			case 13:
			case 14:
			case 15:
			case 16:
			case 17:
			case 18:
			case 21:
			case 23:
			case 29:
			case 30:
			case 31:
			case 32:
			case 33:
			case 34:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 371;
				this.baseTypeSpecification();
				}
				break;
			case 36:
			case 50:
			case 70:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 372;
				this.scopedName(0);
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
	public baseTypeSpecification(): BaseTypeSpecificationContext {
		let localctx: BaseTypeSpecificationContext = new BaseTypeSpecificationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 42, DdsIdlParser.RULE_baseTypeSpecification);
		try {
			this.state = 381;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 20, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 375;
				this.integerType();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 376;
				this.floatingPointType();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 377;
				this.charType();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 378;
				this.wideCharType();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 379;
				this.booleanType();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 380;
				this.octetType();
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
	public floatingPointType(): FloatingPointTypeContext {
		let localctx: FloatingPointTypeContext = new FloatingPointTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 44, DdsIdlParser.RULE_floatingPointType);
		try {
			this.state = 387;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 13:
				localctx = new SinglePrecisionFloatingPointTypeContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 383;
				this.match(DdsIdlParser.KW_FLOAT);
				}
				break;
			case 10:
				localctx = new DoublePrecisionFloatingPointTypeContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 384;
				this.match(DdsIdlParser.KW_DOUBLE);
				}
				break;
			case 18:
				localctx = new QuadPrecisionFloatingPointTypeContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 385;
				this.match(DdsIdlParser.KW_LONG);
				this.state = 386;
				this.match(DdsIdlParser.KW_DOUBLE);
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
	public integerType(): IntegerTypeContext {
		let localctx: IntegerTypeContext = new IntegerTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 46, DdsIdlParser.RULE_integerType);
		try {
			this.state = 391;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 14:
			case 15:
			case 16:
			case 17:
			case 18:
			case 23:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 389;
				this.signedIntegerType();
				}
				break;
			case 29:
			case 30:
			case 31:
			case 32:
			case 33:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 390;
				this.unsignedIntegerType();
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
	public signedIntegerType(): SignedIntegerTypeContext {
		let localctx: SignedIntegerTypeContext = new SignedIntegerTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 48, DdsIdlParser.RULE_signedIntegerType);
		try {
			this.state = 397;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 23, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 393;
				this.signedShortIntegerType();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 394;
				this.signedLongIntegerType();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 395;
				this.signedLongLongIntegerType();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 396;
				this.signedTinyIntegerType();
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
	public signedShortIntegerType(): SignedShortIntegerTypeContext {
		let localctx: SignedShortIntegerTypeContext = new SignedShortIntegerTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 50, DdsIdlParser.RULE_signedShortIntegerType);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 399;
			_la = this._input.LA(1);
			if(!(_la===14 || _la===23)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
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
	public signedLongIntegerType(): SignedLongIntegerTypeContext {
		let localctx: SignedLongIntegerTypeContext = new SignedLongIntegerTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 52, DdsIdlParser.RULE_signedLongIntegerType);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 401;
			_la = this._input.LA(1);
			if(!(_la===15 || _la===18)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
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
	public signedLongLongIntegerType(): SignedLongLongIntegerTypeContext {
		let localctx: SignedLongLongIntegerTypeContext = new SignedLongLongIntegerTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 54, DdsIdlParser.RULE_signedLongLongIntegerType);
		try {
			this.state = 406;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 18:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 403;
				this.match(DdsIdlParser.KW_LONG);
				this.state = 404;
				this.match(DdsIdlParser.KW_LONG);
				}
				break;
			case 16:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 405;
				this.match(DdsIdlParser.KW_INT64);
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
	public signedTinyIntegerType(): SignedTinyIntegerTypeContext {
		let localctx: SignedTinyIntegerTypeContext = new SignedTinyIntegerTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 56, DdsIdlParser.RULE_signedTinyIntegerType);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 408;
			this.match(DdsIdlParser.KW_INT8);
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
	public unsignedIntegerType(): UnsignedIntegerTypeContext {
		let localctx: UnsignedIntegerTypeContext = new UnsignedIntegerTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 58, DdsIdlParser.RULE_unsignedIntegerType);
		try {
			this.state = 414;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 25, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 410;
				this.unsignedShortIntegerType();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 411;
				this.unsignedLongIntegerType();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 412;
				this.unsignedLongLongIntegerType();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 413;
				this.unsignedTinyIntegerType();
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
	public unsignedShortIntegerType(): UnsignedShortIntegerTypeContext {
		let localctx: UnsignedShortIntegerTypeContext = new UnsignedShortIntegerTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 60, DdsIdlParser.RULE_unsignedShortIntegerType);
		try {
			this.state = 419;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 33:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 416;
				this.match(DdsIdlParser.KW_UNSIGNED);
				this.state = 417;
				this.match(DdsIdlParser.KW_SHORT);
				}
				break;
			case 29:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 418;
				this.match(DdsIdlParser.KW_UINT16);
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
	public unsignedLongIntegerType(): UnsignedLongIntegerTypeContext {
		let localctx: UnsignedLongIntegerTypeContext = new UnsignedLongIntegerTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 62, DdsIdlParser.RULE_unsignedLongIntegerType);
		try {
			this.state = 424;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 33:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 421;
				this.match(DdsIdlParser.KW_UNSIGNED);
				this.state = 422;
				this.match(DdsIdlParser.KW_LONG);
				}
				break;
			case 30:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 423;
				this.match(DdsIdlParser.KW_UINT32);
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
	public unsignedLongLongIntegerType(): UnsignedLongLongIntegerTypeContext {
		let localctx: UnsignedLongLongIntegerTypeContext = new UnsignedLongLongIntegerTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 64, DdsIdlParser.RULE_unsignedLongLongIntegerType);
		try {
			this.state = 430;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 33:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 426;
				this.match(DdsIdlParser.KW_UNSIGNED);
				this.state = 427;
				this.match(DdsIdlParser.KW_LONG);
				this.state = 428;
				this.match(DdsIdlParser.KW_LONG);
				}
				break;
			case 31:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 429;
				this.match(DdsIdlParser.KW_UINT64);
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
	public unsignedTinyIntegerType(): UnsignedTinyIntegerTypeContext {
		let localctx: UnsignedTinyIntegerTypeContext = new UnsignedTinyIntegerTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 66, DdsIdlParser.RULE_unsignedTinyIntegerType);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 432;
			this.match(DdsIdlParser.KW_UINT8);
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
		this.enterRule(localctx, 68, DdsIdlParser.RULE_charType);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 434;
			this.match(DdsIdlParser.KW_CHAR);
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
	public wideCharType(): WideCharTypeContext {
		let localctx: WideCharTypeContext = new WideCharTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 70, DdsIdlParser.RULE_wideCharType);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 436;
			this.match(DdsIdlParser.KW_WCHAR);
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
		this.enterRule(localctx, 72, DdsIdlParser.RULE_booleanType);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 438;
			this.match(DdsIdlParser.KW_BOOLEAN);
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
	public octetType(): OctetTypeContext {
		let localctx: OctetTypeContext = new OctetTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 74, DdsIdlParser.RULE_octetType);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 440;
			this.match(DdsIdlParser.KW_OCTET);
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
	public templateTypeSpecification(): TemplateTypeSpecificationContext {
		let localctx: TemplateTypeSpecificationContext = new TemplateTypeSpecificationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 76, DdsIdlParser.RULE_templateTypeSpecification);
		try {
			this.state = 447;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 22:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 442;
				this.sequenceType();
				}
				break;
			case 24:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 443;
				this.stringType();
				}
				break;
			case 35:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 444;
				this.wideStringType();
				}
				break;
			case 12:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 445;
				this.fixedPointType();
				}
				break;
			case 19:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 446;
				this.mapType();
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
		this.enterRule(localctx, 78, DdsIdlParser.RULE_sequenceType);
		try {
			this.state = 463;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 30, this._ctx) ) {
			case 1:
				localctx = new BoundedSequenceTypeContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 449;
				this.match(DdsIdlParser.KW_SEQUENCE);
				this.state = 450;
				this.match(DdsIdlParser.LEFT_ANGLE);
				this.state = 451;
				this.annotationApplications();
				this.state = 452;
				this.typeSpecification();
				this.state = 453;
				this.match(DdsIdlParser.COMMA);
				this.state = 454;
				this.positiveIntegerConstant();
				this.state = 455;
				this.match(DdsIdlParser.RIGHT_ANGLE);
				}
				break;
			case 2:
				localctx = new UnboundedSequenceTypeContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 457;
				this.match(DdsIdlParser.KW_SEQUENCE);
				this.state = 458;
				this.match(DdsIdlParser.LEFT_ANGLE);
				this.state = 459;
				this.annotationApplications();
				this.state = 460;
				this.typeSpecification();
				this.state = 461;
				this.match(DdsIdlParser.RIGHT_ANGLE);
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
		this.enterRule(localctx, 80, DdsIdlParser.RULE_stringType);
		try {
			this.state = 471;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 31, this._ctx) ) {
			case 1:
				localctx = new BoundedStringTypeContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 465;
				this.match(DdsIdlParser.KW_STRING);
				this.state = 466;
				this.match(DdsIdlParser.LEFT_ANGLE);
				this.state = 467;
				this.positiveIntegerConstant();
				this.state = 468;
				this.match(DdsIdlParser.RIGHT_ANGLE);
				}
				break;
			case 2:
				localctx = new UnboundedStringTypeContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 470;
				this.match(DdsIdlParser.KW_STRING);
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
	public wideStringType(): WideStringTypeContext {
		let localctx: WideStringTypeContext = new WideStringTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 82, DdsIdlParser.RULE_wideStringType);
		try {
			this.state = 479;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 32, this._ctx) ) {
			case 1:
				localctx = new BoundedWideStringTypeContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 473;
				this.match(DdsIdlParser.KW_WSTRING);
				this.state = 474;
				this.match(DdsIdlParser.LEFT_ANGLE);
				this.state = 475;
				this.positiveIntegerConstant();
				this.state = 476;
				this.match(DdsIdlParser.RIGHT_ANGLE);
				}
				break;
			case 2:
				localctx = new UnboundedWideStringTypeContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 478;
				this.match(DdsIdlParser.KW_WSTRING);
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
	public fixedPointType(): FixedPointTypeContext {
		let localctx: FixedPointTypeContext = new FixedPointTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 84, DdsIdlParser.RULE_fixedPointType);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 481;
			this.match(DdsIdlParser.KW_FIXED);
			this.state = 482;
			this.match(DdsIdlParser.LEFT_ANGLE);
			this.state = 483;
			this.positiveIntegerConstant();
			this.state = 484;
			this.match(DdsIdlParser.COMMA);
			this.state = 485;
			this.positiveIntegerConstant();
			this.state = 486;
			this.match(DdsIdlParser.RIGHT_ANGLE);
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
	public fixedPointConstantType(): FixedPointConstantTypeContext {
		let localctx: FixedPointConstantTypeContext = new FixedPointConstantTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 86, DdsIdlParser.RULE_fixedPointConstantType);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 488;
			this.match(DdsIdlParser.KW_FIXED);
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
	public constructedTypeDeclaration(): ConstructedTypeDeclarationContext {
		let localctx: ConstructedTypeDeclarationContext = new ConstructedTypeDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 88, DdsIdlParser.RULE_constructedTypeDeclaration);
		try {
			this.state = 495;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 25:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 490;
				this.structureDeclaration();
				}
				break;
			case 28:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 491;
				this.unionDeclaration();
				}
				break;
			case 11:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 492;
				this.enumDeclaration();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 493;
				this.bitsetDeclaration();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 494;
				this.bitmaskDeclaration();
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
	public mapType(): MapTypeContext {
		let localctx: MapTypeContext = new MapTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 90, DdsIdlParser.RULE_mapType);
		try {
			this.state = 513;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 34, this._ctx) ) {
			case 1:
				localctx = new BoundedMapTypeContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 497;
				this.match(DdsIdlParser.KW_MAP);
				this.state = 498;
				this.match(DdsIdlParser.LEFT_ANGLE);
				this.state = 499;
				this.typeSpecification();
				this.state = 500;
				this.match(DdsIdlParser.COMMA);
				this.state = 501;
				this.typeSpecification();
				this.state = 502;
				this.match(DdsIdlParser.COMMA);
				this.state = 503;
				this.positiveIntegerConstant();
				this.state = 504;
				this.match(DdsIdlParser.RIGHT_ANGLE);
				}
				break;
			case 2:
				localctx = new UnboundedMapTypeContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 506;
				this.match(DdsIdlParser.KW_MAP);
				this.state = 507;
				this.match(DdsIdlParser.LEFT_ANGLE);
				this.state = 508;
				this.typeSpecification();
				this.state = 509;
				this.match(DdsIdlParser.COMMA);
				this.state = 510;
				this.typeSpecification();
				this.state = 511;
				this.match(DdsIdlParser.RIGHT_ANGLE);
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
	public bitsetDeclaration(): BitsetDeclarationContext {
		let localctx: BitsetDeclarationContext = new BitsetDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 92, DdsIdlParser.RULE_bitsetDeclaration);
		let _la: number;
		try {
			this.state = 539;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 37, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 515;
				this.match(DdsIdlParser.KW_BITSET);
				this.state = 516;
				this.identifier();
				this.state = 517;
				this.match(DdsIdlParser.COLON);
				this.state = 518;
				this.scopedName(0);
				this.state = 519;
				this.match(DdsIdlParser.LEFT_BRACE);
				this.state = 523;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===2 || _la===50) {
					{
					{
					this.state = 520;
					this.bitfield();
					}
					}
					this.state = 525;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 526;
				this.match(DdsIdlParser.RIGHT_BRACE);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 528;
				this.match(DdsIdlParser.KW_BITSET);
				this.state = 529;
				this.identifier();
				this.state = 530;
				this.match(DdsIdlParser.LEFT_BRACE);
				this.state = 534;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===2 || _la===50) {
					{
					{
					this.state = 531;
					this.bitfield();
					}
					}
					this.state = 536;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 537;
				this.match(DdsIdlParser.RIGHT_BRACE);
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
	public bitfield(): BitfieldContext {
		let localctx: BitfieldContext = new BitfieldContext(this, this._ctx, this.state);
		this.enterRule(localctx, 94, DdsIdlParser.RULE_bitfield);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 541;
			this.bitfieldSpecifier();
			this.state = 542;
			this.identifier();
			this.state = 543;
			this.match(DdsIdlParser.SEMICOLON);
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
	public bitfieldSpecifier(): BitfieldSpecifierContext {
		let localctx: BitfieldSpecifierContext = new BitfieldSpecifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 96, DdsIdlParser.RULE_bitfieldSpecifier);
		try {
			this.state = 559;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 38, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 545;
				this.annotationApplications();
				this.state = 546;
				this.match(DdsIdlParser.KW_BITFIELD);
				this.state = 547;
				this.match(DdsIdlParser.LEFT_ANGLE);
				this.state = 548;
				this.positiveIntegerConstant();
				this.state = 549;
				this.match(DdsIdlParser.RIGHT_ANGLE);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 551;
				this.annotationApplications();
				this.state = 552;
				this.match(DdsIdlParser.KW_BITFIELD);
				this.state = 553;
				this.match(DdsIdlParser.LEFT_ANGLE);
				this.state = 554;
				this.positiveIntegerConstant();
				this.state = 555;
				this.match(DdsIdlParser.COMMA);
				this.state = 556;
				this.bitfieldDestinationType();
				this.state = 557;
				this.match(DdsIdlParser.RIGHT_ANGLE);
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
	public bitfieldDestinationType(): BitfieldDestinationTypeContext {
		let localctx: BitfieldDestinationTypeContext = new BitfieldDestinationTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 98, DdsIdlParser.RULE_bitfieldDestinationType);
		try {
			this.state = 564;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 5:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 561;
				this.booleanType();
				}
				break;
			case 21:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 562;
				this.octetType();
				}
				break;
			case 14:
			case 15:
			case 16:
			case 17:
			case 18:
			case 23:
			case 29:
			case 30:
			case 31:
			case 32:
			case 33:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 563;
				this.integerType();
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
	public bitmaskDeclaration(): BitmaskDeclarationContext {
		let localctx: BitmaskDeclarationContext = new BitmaskDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 100, DdsIdlParser.RULE_bitmaskDeclaration);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 566;
			this.match(DdsIdlParser.KW_BITMASK);
			this.state = 567;
			this.identifier();
			this.state = 568;
			this.bitValues();
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
	public bitValues(): BitValuesContext {
		let localctx: BitValuesContext = new BitValuesContext(this, this._ctx, this.state);
		this.enterRule(localctx, 102, DdsIdlParser.RULE_bitValues);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 570;
			this.bitValue();
			this.state = 575;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===53) {
				{
				{
				this.state = 571;
				this.match(DdsIdlParser.COMMA);
				this.state = 572;
				this.bitValue();
				}
				}
				this.state = 577;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
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
	public bitValue(): BitValueContext {
		let localctx: BitValueContext = new BitValueContext(this, this._ctx, this.state);
		this.enterRule(localctx, 104, DdsIdlParser.RULE_bitValue);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 578;
			this.identifier();
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
	public structureDeclaration(): StructureDeclarationContext {
		let localctx: StructureDeclarationContext = new StructureDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 106, DdsIdlParser.RULE_structureDeclaration);
		try {
			this.state = 582;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 41, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 580;
				this.structureDefinition();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 581;
				this.structureForwardDeclaration();
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
	public structureDefinition(): StructureDefinitionContext {
		let localctx: StructureDefinitionContext = new StructureDefinitionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 108, DdsIdlParser.RULE_structureDefinition);
		let _la: number;
		try {
			this.state = 612;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 44, this._ctx) ) {
			case 1:
				localctx = new DerivedStructureDefinitionContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 584;
				this.match(DdsIdlParser.KW_STRUCT);
				this.state = 585;
				this.identifier();
				this.state = 586;
				this.match(DdsIdlParser.COLON);
				this.state = 587;
				this.scopedName(0);
				this.state = 588;
				this.match(DdsIdlParser.LEFT_BRACE);
				this.state = 592;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 5)) & ~0x1F) === 0 && ((1 << (_la - 5)) & 4279205797) !== 0) || _la===50 || _la===70) {
					{
					{
					this.state = 589;
					this.structMember();
					}
					}
					this.state = 594;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 595;
				this.match(DdsIdlParser.RIGHT_BRACE);
				}
				break;
			case 2:
				localctx = new EmptyStructureDefinitionContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 597;
				this.match(DdsIdlParser.KW_STRUCT);
				this.state = 598;
				this.identifier();
				this.state = 599;
				this.match(DdsIdlParser.LEFT_BRACE);
				this.state = 600;
				this.match(DdsIdlParser.RIGHT_BRACE);
				}
				break;
			case 3:
				localctx = new BasicStructureDefinitionContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 602;
				this.match(DdsIdlParser.KW_STRUCT);
				this.state = 603;
				this.identifier();
				this.state = 604;
				this.match(DdsIdlParser.LEFT_BRACE);
				this.state = 606;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 605;
					this.structMember();
					}
					}
					this.state = 608;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (((((_la - 5)) & ~0x1F) === 0 && ((1 << (_la - 5)) & 4279205797) !== 0) || _la===50 || _la===70);
				this.state = 610;
				this.match(DdsIdlParser.RIGHT_BRACE);
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
	public structMember(): StructMemberContext {
		let localctx: StructMemberContext = new StructMemberContext(this, this._ctx, this.state);
		this.enterRule(localctx, 110, DdsIdlParser.RULE_structMember);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 614;
			this.annotationApplications();
			this.state = 615;
			this.typeSpecification();
			this.state = 616;
			this.annotatableDeclarators();
			this.state = 617;
			this.match(DdsIdlParser.SEMICOLON);
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
	public structureForwardDeclaration(): StructureForwardDeclarationContext {
		let localctx: StructureForwardDeclarationContext = new StructureForwardDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 112, DdsIdlParser.RULE_structureForwardDeclaration);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 619;
			this.match(DdsIdlParser.KW_STRUCT);
			this.state = 620;
			this.identifier();
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
	public unionDeclaration(): UnionDeclarationContext {
		let localctx: UnionDeclarationContext = new UnionDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 114, DdsIdlParser.RULE_unionDeclaration);
		try {
			this.state = 624;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 45, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 622;
				this.unionDefinition();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 623;
				this.unionForwardDeclaration();
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
		this.enterRule(localctx, 116, DdsIdlParser.RULE_unionDefinition);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 626;
			this.match(DdsIdlParser.KW_UNION);
			this.state = 627;
			this.identifier();
			this.state = 628;
			this.match(DdsIdlParser.KW_SWITCH);
			this.state = 629;
			this.match(DdsIdlParser.LEFT_PAREN);
			this.state = 630;
			this.annotationApplications();
			this.state = 631;
			this.switchTypeSpecification();
			this.state = 632;
			this.match(DdsIdlParser.RIGHT_PAREN);
			this.state = 633;
			this.match(DdsIdlParser.LEFT_BRACE);
			this.state = 634;
			this.switchBody();
			this.state = 635;
			this.match(DdsIdlParser.RIGHT_BRACE);
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
	public switchTypeSpecification(): SwitchTypeSpecificationContext {
		let localctx: SwitchTypeSpecificationContext = new SwitchTypeSpecificationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 118, DdsIdlParser.RULE_switchTypeSpecification);
		try {
			this.state = 643;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 14:
			case 15:
			case 16:
			case 17:
			case 18:
			case 23:
			case 29:
			case 30:
			case 31:
			case 32:
			case 33:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 637;
				this.integerType();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 638;
				this.charType();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 639;
				this.booleanType();
				}
				break;
			case 34:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 640;
				this.wideCharType();
				}
				break;
			case 21:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 641;
				this.octetType();
				}
				break;
			case 36:
			case 50:
			case 70:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 642;
				this.scopedName(0);
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
	public switchBody(): SwitchBodyContext {
		let localctx: SwitchBodyContext = new SwitchBodyContext(this, this._ctx, this.state);
		this.enterRule(localctx, 120, DdsIdlParser.RULE_switchBody);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 646;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 645;
				this.case_();
				}
				}
				this.state = 648;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===6 || _la===9 || _la===50);
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
	public case_(): CaseContext {
		let localctx: CaseContext = new CaseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 122, DdsIdlParser.RULE_case);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 651;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 650;
					this.caseCondition();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 653;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 48, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 655;
			this.unionElementSpecification();
			this.state = 656;
			this.match(DdsIdlParser.SEMICOLON);
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
	public caseCondition(): CaseConditionContext {
		let localctx: CaseConditionContext = new CaseConditionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 124, DdsIdlParser.RULE_caseCondition);
		try {
			this.state = 672;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 49, this._ctx) ) {
			case 1:
				localctx = new LiteralValueCaseConditionContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 658;
				this.annotationApplications();
				this.state = 659;
				this.match(DdsIdlParser.KW_CASE);
				this.state = 660;
				this.literal();
				this.state = 661;
				this.match(DdsIdlParser.COLON);
				}
				break;
			case 2:
				localctx = new ConstantDefCaseConditionContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 663;
				this.annotationApplications();
				this.state = 664;
				this.match(DdsIdlParser.KW_CASE);
				this.state = 665;
				this.scopedName(0);
				this.state = 666;
				this.match(DdsIdlParser.COLON);
				}
				break;
			case 3:
				localctx = new DefaultCaseConditionContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 668;
				this.annotationApplications();
				this.state = 669;
				this.match(DdsIdlParser.KW_DEFAULT);
				this.state = 670;
				this.match(DdsIdlParser.COLON);
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
	public unionElementSpecification(): UnionElementSpecificationContext {
		let localctx: UnionElementSpecificationContext = new UnionElementSpecificationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 126, DdsIdlParser.RULE_unionElementSpecification);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 674;
			this.annotationApplications();
			this.state = 675;
			this.typeSpecification();
			this.state = 676;
			this.annotatableDeclarator();
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
	public unionForwardDeclaration(): UnionForwardDeclarationContext {
		let localctx: UnionForwardDeclarationContext = new UnionForwardDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 128, DdsIdlParser.RULE_unionForwardDeclaration);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 678;
			this.match(DdsIdlParser.KW_UNION);
			this.state = 679;
			this.identifier();
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
	public enumDeclaration(): EnumDeclarationContext {
		let localctx: EnumDeclarationContext = new EnumDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 130, DdsIdlParser.RULE_enumDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 681;
			this.match(DdsIdlParser.KW_ENUM);
			this.state = 682;
			this.identifier();
			this.state = 683;
			this.match(DdsIdlParser.LEFT_BRACE);
			this.state = 684;
			this.enumerator();
			this.state = 689;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===53) {
				{
				{
				this.state = 685;
				this.match(DdsIdlParser.COMMA);
				this.state = 686;
				this.enumerator();
				}
				}
				this.state = 691;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 692;
			this.match(DdsIdlParser.RIGHT_BRACE);
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
	public enumerator(): EnumeratorContext {
		let localctx: EnumeratorContext = new EnumeratorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 132, DdsIdlParser.RULE_enumerator);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 694;
			this.identifier();
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
	public arrayDeclarator(): ArrayDeclaratorContext {
		let localctx: ArrayDeclaratorContext = new ArrayDeclaratorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 134, DdsIdlParser.RULE_arrayDeclarator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 696;
			this.identifier();
			this.state = 698;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 697;
				this.fixedArraySize();
				}
				}
				this.state = 700;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===59);
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
	public fixedArraySize(): FixedArraySizeContext {
		let localctx: FixedArraySizeContext = new FixedArraySizeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 136, DdsIdlParser.RULE_fixedArraySize);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 702;
			this.match(DdsIdlParser.LEFT_BRACKET);
			this.state = 703;
			this.positiveIntegerConstant();
			this.state = 704;
			this.match(DdsIdlParser.RIGHT_BRACKET);
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
	public simpleDeclarator(): SimpleDeclaratorContext {
		let localctx: SimpleDeclaratorContext = new SimpleDeclaratorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 138, DdsIdlParser.RULE_simpleDeclarator);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 706;
			this.identifier();
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
	public typeAliasDeclaration(): TypeAliasDeclarationContext {
		let localctx: TypeAliasDeclarationContext = new TypeAliasDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 140, DdsIdlParser.RULE_typeAliasDeclaration);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 708;
			this.match(DdsIdlParser.KW_TYPEDEF);
			this.state = 709;
			this.annotationApplications();
			this.state = 710;
			this.typeDeclarator();
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
	public typeDeclarator(): TypeDeclaratorContext {
		let localctx: TypeDeclaratorContext = new TypeDeclaratorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 142, DdsIdlParser.RULE_typeDeclarator);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 712;
			this.typeDeclaratorType();
			this.state = 713;
			this.anyDeclarators();
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
	public typeDeclaratorType(): TypeDeclaratorTypeContext {
		let localctx: TypeDeclaratorTypeContext = new TypeDeclaratorTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 144, DdsIdlParser.RULE_typeDeclaratorType);
		try {
			this.state = 718;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 5:
			case 7:
			case 10:
			case 13:
			case 14:
			case 15:
			case 16:
			case 17:
			case 18:
			case 21:
			case 23:
			case 29:
			case 30:
			case 31:
			case 32:
			case 33:
			case 34:
			case 36:
			case 50:
			case 70:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 715;
				this.simpleTypeSpecification();
				}
				break;
			case 12:
			case 19:
			case 22:
			case 24:
			case 35:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 716;
				this.templateTypeSpecification();
				}
				break;
			case 3:
			case 4:
			case 11:
			case 25:
			case 28:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 717;
				this.constructedTypeDeclaration();
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
	public anyDeclarators(): AnyDeclaratorsContext {
		let localctx: AnyDeclaratorsContext = new AnyDeclaratorsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 146, DdsIdlParser.RULE_anyDeclarators);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 720;
			this.anyDeclarator();
			this.state = 725;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===53) {
				{
				{
				this.state = 721;
				this.match(DdsIdlParser.COMMA);
				this.state = 722;
				this.anyDeclarator();
				}
				}
				this.state = 727;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
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
	public anyDeclarator(): AnyDeclaratorContext {
		let localctx: AnyDeclaratorContext = new AnyDeclaratorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 148, DdsIdlParser.RULE_anyDeclarator);
		try {
			this.state = 730;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 54, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 728;
				this.simpleDeclarator();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 729;
				this.arrayDeclarator();
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
	public annotatableDeclarators(): AnnotatableDeclaratorsContext {
		let localctx: AnnotatableDeclaratorsContext = new AnnotatableDeclaratorsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 150, DdsIdlParser.RULE_annotatableDeclarators);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 732;
			this.annotatableDeclarator();
			this.state = 737;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===53) {
				{
				{
				this.state = 733;
				this.match(DdsIdlParser.COMMA);
				this.state = 734;
				this.annotatableDeclarator();
				}
				}
				this.state = 739;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
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
	public annotatableDeclarator(): AnnotatableDeclaratorContext {
		let localctx: AnnotatableDeclaratorContext = new AnnotatableDeclaratorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 152, DdsIdlParser.RULE_annotatableDeclarator);
		try {
			this.state = 746;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 56, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 740;
				this.annotationApplications();
				this.state = 741;
				this.simpleDeclarator();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 743;
				this.annotationApplications();
				this.state = 744;
				this.arrayDeclarator();
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
	public annotationDeclaration(): AnnotationDeclarationContext {
		let localctx: AnnotationDeclarationContext = new AnnotationDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 154, DdsIdlParser.RULE_annotationDeclaration);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 748;
			this.annotationHeader();
			this.state = 749;
			this.match(DdsIdlParser.LEFT_BRACE);
			this.state = 750;
			this.annotationBody();
			this.state = 751;
			this.match(DdsIdlParser.RIGHT_BRACE);
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
	public annotationHeader(): AnnotationHeaderContext {
		let localctx: AnnotationHeaderContext = new AnnotationHeaderContext(this, this._ctx, this.state);
		this.enterRule(localctx, 156, DdsIdlParser.RULE_annotationHeader);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 753;
			this.match(DdsIdlParser.KW_ANNOTATION);
			this.state = 754;
			this.identifier();
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
	public annotationBody(): AnnotationBodyContext {
		let localctx: AnnotationBodyContext = new AnnotationBodyContext(this, this._ctx, this.state);
		this.enterRule(localctx, 158, DdsIdlParser.RULE_annotationBody);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 759;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 5)) & ~0x1F) === 0 && ((1 << (_la - 5)) & 4283252717) !== 0) || _la===50 || _la===70) {
				{
				{
				this.state = 756;
				this.annotationBodyItem();
				}
				}
				this.state = 761;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
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
	public annotationBodyItem(): AnnotationBodyItemContext {
		let localctx: AnnotationBodyItemContext = new AnnotationBodyItemContext(this, this._ctx, this.state);
		this.enterRule(localctx, 160, DdsIdlParser.RULE_annotationBodyItem);
		try {
			this.state = 772;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 5:
			case 7:
			case 10:
			case 12:
			case 13:
			case 14:
			case 15:
			case 16:
			case 17:
			case 18:
			case 21:
			case 23:
			case 24:
			case 29:
			case 30:
			case 31:
			case 32:
			case 33:
			case 34:
			case 35:
			case 36:
			case 50:
			case 70:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 762;
				this.annotationMember();
				}
				break;
			case 11:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 763;
				this.enumDeclaration();
				this.state = 764;
				this.match(DdsIdlParser.SEMICOLON);
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 766;
				this.constantDeclaration();
				this.state = 767;
				this.match(DdsIdlParser.SEMICOLON);
				}
				break;
			case 27:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 769;
				this.typeAliasDeclaration();
				this.state = 770;
				this.match(DdsIdlParser.SEMICOLON);
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
	public annotationMember(): AnnotationMemberContext {
		let localctx: AnnotationMemberContext = new AnnotationMemberContext(this, this._ctx, this.state);
		this.enterRule(localctx, 162, DdsIdlParser.RULE_annotationMember);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 774;
			this.annotationMemberType();
			this.state = 775;
			this.simpleDeclarator();
			this.state = 778;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===9) {
				{
				this.state = 776;
				this.match(DdsIdlParser.KW_DEFAULT);
				this.state = 777;
				this.constantExpression();
				}
			}

			this.state = 780;
			this.match(DdsIdlParser.SEMICOLON);
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
	public annotationMemberType(): AnnotationMemberTypeContext {
		let localctx: AnnotationMemberTypeContext = new AnnotationMemberTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 164, DdsIdlParser.RULE_annotationMemberType);
		try {
			this.state = 784;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 60, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 782;
				this.constantType();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 783;
				this.scopedName(0);
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
	public annotationApplications(): AnnotationApplicationsContext {
		let localctx: AnnotationApplicationsContext = new AnnotationApplicationsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 166, DdsIdlParser.RULE_annotationApplications);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 789;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 61, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 786;
					this.annotationApplication();
					}
					}
				}
				this.state = 791;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 61, this._ctx);
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
	public annotationApplication(): AnnotationApplicationContext {
		let localctx: AnnotationApplicationContext = new AnnotationApplicationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 168, DdsIdlParser.RULE_annotationApplication);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 792;
			this.match(DdsIdlParser.AT);
			this.state = 793;
			this.scopedName(0);
			this.state = 798;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===60) {
				{
				this.state = 794;
				this.match(DdsIdlParser.LEFT_PAREN);
				this.state = 795;
				this.annotationApplicationParameters();
				this.state = 796;
				this.match(DdsIdlParser.RIGHT_PAREN);
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
	public annotationApplicationParameters(): AnnotationApplicationParametersContext {
		let localctx: AnnotationApplicationParametersContext = new AnnotationApplicationParametersContext(this, this._ctx, this.state);
		this.enterRule(localctx, 170, DdsIdlParser.RULE_annotationApplicationParameters);
		let _la: number;
		try {
			this.state = 809;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 64, this._ctx) ) {
			case 1:
				localctx = new SingleAnonymousAnnotationApplicationParameterContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 800;
				this.constantExpression();
				}
				break;
			case 2:
				localctx = new MultipleNamedAnnotationApplicationParametersContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 801;
				this.annotationApplicationParameter();
				this.state = 806;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===53) {
					{
					{
					this.state = 802;
					this.match(DdsIdlParser.COMMA);
					this.state = 803;
					this.annotationApplicationParameter();
					}
					}
					this.state = 808;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
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
	public annotationApplicationParameter(): AnnotationApplicationParameterContext {
		let localctx: AnnotationApplicationParameterContext = new AnnotationApplicationParameterContext(this, this._ctx, this.state);
		this.enterRule(localctx, 172, DdsIdlParser.RULE_annotationApplicationParameter);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 811;
			this.identifier();
			this.state = 812;
			this.match(DdsIdlParser.EQUALS);
			this.state = 813;
			this.constantExpression();
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
	public identifier(): IdentifierContext {
		let localctx: IdentifierContext = new IdentifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 174, DdsIdlParser.RULE_identifier);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 815;
			this.annotationApplications();
			this.state = 816;
			this.match(DdsIdlParser.ID);
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

	public sempred(localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 3:
			return this.scopedName_sempred(localctx as ScopedNameContext, predIndex);
		case 7:
			return this.orExpression_sempred(localctx as OrExpressionContext, predIndex);
		case 8:
			return this.xorExpression_sempred(localctx as XorExpressionContext, predIndex);
		case 9:
			return this.andExpression_sempred(localctx as AndExpressionContext, predIndex);
		case 10:
			return this.shiftExpression_sempred(localctx as ShiftExpressionContext, predIndex);
		case 11:
			return this.addExpression_sempred(localctx as AddExpressionContext, predIndex);
		case 12:
			return this.multExpression_sempred(localctx as MultExpressionContext, predIndex);
		}
		return true;
	}
	private scopedName_sempred(localctx: ScopedNameContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private orExpression_sempred(localctx: OrExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 1:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private xorExpression_sempred(localctx: XorExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 2:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private andExpression_sempred(localctx: AndExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 3:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private shiftExpression_sempred(localctx: ShiftExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 4:
			return this.precpred(this._ctx, 2);
		case 5:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private addExpression_sempred(localctx: AddExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 6:
			return this.precpred(this._ctx, 2);
		case 7:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private multExpression_sempred(localctx: MultExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 8:
			return this.precpred(this._ctx, 3);
		case 9:
			return this.precpred(this._ctx, 2);
		case 10:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}

	public static readonly _serializedATN: number[] = [4,1,76,819,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,
	7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,
	24,2,25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,
	2,32,7,32,2,33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,
	39,7,39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,46,
	7,46,2,47,7,47,2,48,7,48,2,49,7,49,2,50,7,50,2,51,7,51,2,52,7,52,2,53,7,
	53,2,54,7,54,2,55,7,55,2,56,7,56,2,57,7,57,2,58,7,58,2,59,7,59,2,60,7,60,
	2,61,7,61,2,62,7,62,2,63,7,63,2,64,7,64,2,65,7,65,2,66,7,66,2,67,7,67,2,
	68,7,68,2,69,7,69,2,70,7,70,2,71,7,71,2,72,7,72,2,73,7,73,2,74,7,74,2,75,
	7,75,2,76,7,76,2,77,7,77,2,78,7,78,2,79,7,79,2,80,7,80,2,81,7,81,2,82,7,
	82,2,83,7,83,2,84,7,84,2,85,7,85,2,86,7,86,2,87,7,87,1,0,4,0,178,8,0,11,
	0,12,0,179,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
	1,1,1,1,1,1,3,1,200,8,1,1,2,1,2,1,2,1,2,4,2,206,8,2,11,2,12,2,207,1,2,1,
	2,1,3,1,3,1,3,1,3,3,3,216,8,3,1,3,1,3,1,3,5,3,221,8,3,10,3,12,3,224,9,3,
	1,4,1,4,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,
	1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,
	3,5,262,8,5,1,6,1,6,1,7,1,7,1,7,1,7,1,7,1,7,5,7,272,8,7,10,7,12,7,275,9,
	7,1,8,1,8,1,8,1,8,1,8,1,8,5,8,283,8,8,10,8,12,8,286,9,8,1,9,1,9,1,9,1,9,
	1,9,1,9,5,9,294,8,9,10,9,12,9,297,9,9,1,10,1,10,1,10,1,10,1,10,1,10,1,10,
	1,10,1,10,5,10,308,8,10,10,10,12,10,311,9,10,1,11,1,11,1,11,1,11,1,11,1,
	11,1,11,1,11,1,11,5,11,322,8,11,10,11,12,11,325,9,11,1,12,1,12,1,12,1,12,
	1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,5,12,339,8,12,10,12,12,12,342,9,
	12,1,13,1,13,1,13,1,13,3,13,348,8,13,1,14,1,14,1,15,1,15,1,15,1,15,1,15,
	1,15,3,15,358,8,15,1,16,1,16,1,17,1,17,1,18,1,18,3,18,366,8,18,1,19,1,19,
	3,19,370,8,19,1,20,1,20,3,20,374,8,20,1,21,1,21,1,21,1,21,1,21,1,21,3,21,
	382,8,21,1,22,1,22,1,22,1,22,3,22,388,8,22,1,23,1,23,3,23,392,8,23,1,24,
	1,24,1,24,1,24,3,24,398,8,24,1,25,1,25,1,26,1,26,1,27,1,27,1,27,3,27,407,
	8,27,1,28,1,28,1,29,1,29,1,29,1,29,3,29,415,8,29,1,30,1,30,1,30,3,30,420,
	8,30,1,31,1,31,1,31,3,31,425,8,31,1,32,1,32,1,32,1,32,3,32,431,8,32,1,33,
	1,33,1,34,1,34,1,35,1,35,1,36,1,36,1,37,1,37,1,38,1,38,1,38,1,38,1,38,3,
	38,448,8,38,1,39,1,39,1,39,1,39,1,39,1,39,1,39,1,39,1,39,1,39,1,39,1,39,
	1,39,1,39,3,39,464,8,39,1,40,1,40,1,40,1,40,1,40,1,40,3,40,472,8,40,1,41,
	1,41,1,41,1,41,1,41,1,41,3,41,480,8,41,1,42,1,42,1,42,1,42,1,42,1,42,1,
	42,1,43,1,43,1,44,1,44,1,44,1,44,1,44,3,44,496,8,44,1,45,1,45,1,45,1,45,
	1,45,1,45,1,45,1,45,1,45,1,45,1,45,1,45,1,45,1,45,1,45,1,45,3,45,514,8,
	45,1,46,1,46,1,46,1,46,1,46,1,46,5,46,522,8,46,10,46,12,46,525,9,46,1,46,
	1,46,1,46,1,46,1,46,1,46,5,46,533,8,46,10,46,12,46,536,9,46,1,46,1,46,3,
	46,540,8,46,1,47,1,47,1,47,1,47,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,
	1,48,1,48,1,48,1,48,1,48,1,48,3,48,560,8,48,1,49,1,49,1,49,3,49,565,8,49,
	1,50,1,50,1,50,1,50,1,51,1,51,1,51,5,51,574,8,51,10,51,12,51,577,9,51,1,
	52,1,52,1,53,1,53,3,53,583,8,53,1,54,1,54,1,54,1,54,1,54,1,54,5,54,591,
	8,54,10,54,12,54,594,9,54,1,54,1,54,1,54,1,54,1,54,1,54,1,54,1,54,1,54,
	1,54,1,54,4,54,607,8,54,11,54,12,54,608,1,54,1,54,3,54,613,8,54,1,55,1,
	55,1,55,1,55,1,55,1,56,1,56,1,56,1,57,1,57,3,57,625,8,57,1,58,1,58,1,58,
	1,58,1,58,1,58,1,58,1,58,1,58,1,58,1,58,1,59,1,59,1,59,1,59,1,59,1,59,3,
	59,644,8,59,1,60,4,60,647,8,60,11,60,12,60,648,1,61,4,61,652,8,61,11,61,
	12,61,653,1,61,1,61,1,61,1,62,1,62,1,62,1,62,1,62,1,62,1,62,1,62,1,62,1,
	62,1,62,1,62,1,62,1,62,3,62,673,8,62,1,63,1,63,1,63,1,63,1,64,1,64,1,64,
	1,65,1,65,1,65,1,65,1,65,1,65,5,65,688,8,65,10,65,12,65,691,9,65,1,65,1,
	65,1,66,1,66,1,67,1,67,4,67,699,8,67,11,67,12,67,700,1,68,1,68,1,68,1,68,
	1,69,1,69,1,70,1,70,1,70,1,70,1,71,1,71,1,71,1,72,1,72,1,72,3,72,719,8,
	72,1,73,1,73,1,73,5,73,724,8,73,10,73,12,73,727,9,73,1,74,1,74,3,74,731,
	8,74,1,75,1,75,1,75,5,75,736,8,75,10,75,12,75,739,9,75,1,76,1,76,1,76,1,
	76,1,76,1,76,3,76,747,8,76,1,77,1,77,1,77,1,77,1,77,1,78,1,78,1,78,1,79,
	5,79,758,8,79,10,79,12,79,761,9,79,1,80,1,80,1,80,1,80,1,80,1,80,1,80,1,
	80,1,80,1,80,3,80,773,8,80,1,81,1,81,1,81,1,81,3,81,779,8,81,1,81,1,81,
	1,82,1,82,3,82,785,8,82,1,83,5,83,788,8,83,10,83,12,83,791,9,83,1,84,1,
	84,1,84,1,84,1,84,1,84,3,84,799,8,84,1,85,1,85,1,85,1,85,5,85,805,8,85,
	10,85,12,85,808,9,85,3,85,810,8,85,1,86,1,86,1,86,1,86,1,87,1,87,1,87,1,
	87,0,7,6,14,16,18,20,22,24,88,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,
	32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,
	80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,120,
	122,124,126,128,130,132,134,136,138,140,142,144,146,148,150,152,154,156,
	158,160,162,164,166,168,170,172,174,0,4,3,0,62,62,64,64,74,74,1,0,39,47,
	2,0,14,14,23,23,2,0,15,15,18,18,832,0,177,1,0,0,0,2,199,1,0,0,0,4,201,1,
	0,0,0,6,215,1,0,0,0,8,225,1,0,0,0,10,261,1,0,0,0,12,263,1,0,0,0,14,265,
	1,0,0,0,16,276,1,0,0,0,18,287,1,0,0,0,20,298,1,0,0,0,22,312,1,0,0,0,24,
	326,1,0,0,0,26,347,1,0,0,0,28,349,1,0,0,0,30,357,1,0,0,0,32,359,1,0,0,0,
	34,361,1,0,0,0,36,365,1,0,0,0,38,369,1,0,0,0,40,373,1,0,0,0,42,381,1,0,
	0,0,44,387,1,0,0,0,46,391,1,0,0,0,48,397,1,0,0,0,50,399,1,0,0,0,52,401,
	1,0,0,0,54,406,1,0,0,0,56,408,1,0,0,0,58,414,1,0,0,0,60,419,1,0,0,0,62,
	424,1,0,0,0,64,430,1,0,0,0,66,432,1,0,0,0,68,434,1,0,0,0,70,436,1,0,0,0,
	72,438,1,0,0,0,74,440,1,0,0,0,76,447,1,0,0,0,78,463,1,0,0,0,80,471,1,0,
	0,0,82,479,1,0,0,0,84,481,1,0,0,0,86,488,1,0,0,0,88,495,1,0,0,0,90,513,
	1,0,0,0,92,539,1,0,0,0,94,541,1,0,0,0,96,559,1,0,0,0,98,564,1,0,0,0,100,
	566,1,0,0,0,102,570,1,0,0,0,104,578,1,0,0,0,106,582,1,0,0,0,108,612,1,0,
	0,0,110,614,1,0,0,0,112,619,1,0,0,0,114,624,1,0,0,0,116,626,1,0,0,0,118,
	643,1,0,0,0,120,646,1,0,0,0,122,651,1,0,0,0,124,672,1,0,0,0,126,674,1,0,
	0,0,128,678,1,0,0,0,130,681,1,0,0,0,132,694,1,0,0,0,134,696,1,0,0,0,136,
	702,1,0,0,0,138,706,1,0,0,0,140,708,1,0,0,0,142,712,1,0,0,0,144,718,1,0,
	0,0,146,720,1,0,0,0,148,730,1,0,0,0,150,732,1,0,0,0,152,746,1,0,0,0,154,
	748,1,0,0,0,156,753,1,0,0,0,158,759,1,0,0,0,160,772,1,0,0,0,162,774,1,0,
	0,0,164,784,1,0,0,0,166,789,1,0,0,0,168,792,1,0,0,0,170,809,1,0,0,0,172,
	811,1,0,0,0,174,815,1,0,0,0,176,178,3,2,1,0,177,176,1,0,0,0,178,179,1,0,
	0,0,179,177,1,0,0,0,179,180,1,0,0,0,180,181,1,0,0,0,181,182,5,0,0,1,182,
	1,1,0,0,0,183,184,3,166,83,0,184,185,3,4,2,0,185,186,5,71,0,0,186,200,1,
	0,0,0,187,188,3,166,83,0,188,189,3,8,4,0,189,190,5,71,0,0,190,200,1,0,0,
	0,191,192,3,166,83,0,192,193,3,36,18,0,193,194,5,71,0,0,194,200,1,0,0,0,
	195,196,3,166,83,0,196,197,3,154,77,0,197,198,5,71,0,0,198,200,1,0,0,0,
	199,183,1,0,0,0,199,187,1,0,0,0,199,191,1,0,0,0,199,195,1,0,0,0,200,3,1,
	0,0,0,201,202,5,20,0,0,202,203,3,174,87,0,203,205,5,58,0,0,204,206,3,2,
	1,0,205,204,1,0,0,0,206,207,1,0,0,0,207,205,1,0,0,0,207,208,1,0,0,0,208,
	209,1,0,0,0,209,210,5,66,0,0,210,5,1,0,0,0,211,212,6,3,-1,0,212,216,3,174,
	87,0,213,214,5,70,0,0,214,216,3,174,87,0,215,211,1,0,0,0,215,213,1,0,0,
	0,216,222,1,0,0,0,217,218,10,1,0,0,218,219,5,70,0,0,219,221,3,174,87,0,
	220,217,1,0,0,0,221,224,1,0,0,0,222,220,1,0,0,0,222,223,1,0,0,0,223,7,1,
	0,0,0,224,222,1,0,0,0,225,226,5,8,0,0,226,227,3,10,5,0,227,228,3,174,87,
	0,228,229,5,55,0,0,229,230,3,12,6,0,230,9,1,0,0,0,231,232,3,166,83,0,232,
	233,3,46,23,0,233,262,1,0,0,0,234,235,3,166,83,0,235,236,3,44,22,0,236,
	262,1,0,0,0,237,238,3,166,83,0,238,239,3,86,43,0,239,262,1,0,0,0,240,241,
	3,166,83,0,241,242,3,68,34,0,242,262,1,0,0,0,243,244,3,166,83,0,244,245,
	3,70,35,0,245,262,1,0,0,0,246,247,3,166,83,0,247,248,3,72,36,0,248,262,
	1,0,0,0,249,250,3,166,83,0,250,251,3,74,37,0,251,262,1,0,0,0,252,253,3,
	166,83,0,253,254,3,80,40,0,254,262,1,0,0,0,255,256,3,166,83,0,256,257,3,
	82,41,0,257,262,1,0,0,0,258,259,3,166,83,0,259,260,3,6,3,0,260,262,1,0,
	0,0,261,231,1,0,0,0,261,234,1,0,0,0,261,237,1,0,0,0,261,240,1,0,0,0,261,
	243,1,0,0,0,261,246,1,0,0,0,261,249,1,0,0,0,261,252,1,0,0,0,261,255,1,0,
	0,0,261,258,1,0,0,0,262,11,1,0,0,0,263,264,3,14,7,0,264,13,1,0,0,0,265,
	266,6,7,-1,0,266,267,3,16,8,0,267,273,1,0,0,0,268,269,10,1,0,0,269,270,
	5,75,0,0,270,272,3,16,8,0,271,268,1,0,0,0,272,275,1,0,0,0,273,271,1,0,0,
	0,273,274,1,0,0,0,274,15,1,0,0,0,275,273,1,0,0,0,276,277,6,8,-1,0,277,278,
	3,18,9,0,278,284,1,0,0,0,279,280,10,1,0,0,280,281,5,51,0,0,281,283,3,18,
	9,0,282,279,1,0,0,0,283,286,1,0,0,0,284,282,1,0,0,0,284,285,1,0,0,0,285,
	17,1,0,0,0,286,284,1,0,0,0,287,288,6,9,-1,0,288,289,3,20,10,0,289,295,1,
	0,0,0,290,291,10,1,0,0,291,292,5,48,0,0,292,294,3,20,10,0,293,290,1,0,0,
	0,294,297,1,0,0,0,295,293,1,0,0,0,295,296,1,0,0,0,296,19,1,0,0,0,297,295,
	1,0,0,0,298,299,6,10,-1,0,299,300,3,22,11,0,300,309,1,0,0,0,301,302,10,
	2,0,0,302,303,5,69,0,0,303,308,3,22,11,0,304,305,10,1,0,0,305,306,5,61,
	0,0,306,308,3,22,11,0,307,301,1,0,0,0,307,304,1,0,0,0,308,311,1,0,0,0,309,
	307,1,0,0,0,309,310,1,0,0,0,310,21,1,0,0,0,311,309,1,0,0,0,312,313,6,11,
	-1,0,313,314,3,24,12,0,314,323,1,0,0,0,315,316,10,2,0,0,316,317,5,64,0,
	0,317,322,3,24,12,0,318,319,10,1,0,0,319,320,5,62,0,0,320,322,3,24,12,0,
	321,315,1,0,0,0,321,318,1,0,0,0,322,325,1,0,0,0,323,321,1,0,0,0,323,324,
	1,0,0,0,324,23,1,0,0,0,325,323,1,0,0,0,326,327,6,12,-1,0,327,328,3,26,13,
	0,328,340,1,0,0,0,329,330,10,3,0,0,330,331,5,49,0,0,331,339,3,26,13,0,332,
	333,10,2,0,0,333,334,5,56,0,0,334,339,3,26,13,0,335,336,10,1,0,0,336,337,
	5,63,0,0,337,339,3,26,13,0,338,329,1,0,0,0,338,332,1,0,0,0,338,335,1,0,
	0,0,339,342,1,0,0,0,340,338,1,0,0,0,340,341,1,0,0,0,341,25,1,0,0,0,342,
	340,1,0,0,0,343,344,3,28,14,0,344,345,3,30,15,0,345,348,1,0,0,0,346,348,
	3,30,15,0,347,343,1,0,0,0,347,346,1,0,0,0,348,27,1,0,0,0,349,350,7,0,0,
	0,350,29,1,0,0,0,351,358,3,6,3,0,352,358,3,32,16,0,353,354,5,60,0,0,354,
	355,3,12,6,0,355,356,5,68,0,0,356,358,1,0,0,0,357,351,1,0,0,0,357,352,1,
	0,0,0,357,353,1,0,0,0,358,31,1,0,0,0,359,360,7,1,0,0,360,33,1,0,0,0,361,
	362,3,12,6,0,362,35,1,0,0,0,363,366,3,88,44,0,364,366,3,140,70,0,365,363,
	1,0,0,0,365,364,1,0,0,0,366,37,1,0,0,0,367,370,3,40,20,0,368,370,3,76,38,
	0,369,367,1,0,0,0,369,368,1,0,0,0,370,39,1,0,0,0,371,374,3,42,21,0,372,
	374,3,6,3,0,373,371,1,0,0,0,373,372,1,0,0,0,374,41,1,0,0,0,375,382,3,46,
	23,0,376,382,3,44,22,0,377,382,3,68,34,0,378,382,3,70,35,0,379,382,3,72,
	36,0,380,382,3,74,37,0,381,375,1,0,0,0,381,376,1,0,0,0,381,377,1,0,0,0,
	381,378,1,0,0,0,381,379,1,0,0,0,381,380,1,0,0,0,382,43,1,0,0,0,383,388,
	5,13,0,0,384,388,5,10,0,0,385,386,5,18,0,0,386,388,5,10,0,0,387,383,1,0,
	0,0,387,384,1,0,0,0,387,385,1,0,0,0,388,45,1,0,0,0,389,392,3,48,24,0,390,
	392,3,58,29,0,391,389,1,0,0,0,391,390,1,0,0,0,392,47,1,0,0,0,393,398,3,
	50,25,0,394,398,3,52,26,0,395,398,3,54,27,0,396,398,3,56,28,0,397,393,1,
	0,0,0,397,394,1,0,0,0,397,395,1,0,0,0,397,396,1,0,0,0,398,49,1,0,0,0,399,
	400,7,2,0,0,400,51,1,0,0,0,401,402,7,3,0,0,402,53,1,0,0,0,403,404,5,18,
	0,0,404,407,5,18,0,0,405,407,5,16,0,0,406,403,1,0,0,0,406,405,1,0,0,0,407,
	55,1,0,0,0,408,409,5,17,0,0,409,57,1,0,0,0,410,415,3,60,30,0,411,415,3,
	62,31,0,412,415,3,64,32,0,413,415,3,66,33,0,414,410,1,0,0,0,414,411,1,0,
	0,0,414,412,1,0,0,0,414,413,1,0,0,0,415,59,1,0,0,0,416,417,5,33,0,0,417,
	420,5,23,0,0,418,420,5,29,0,0,419,416,1,0,0,0,419,418,1,0,0,0,420,61,1,
	0,0,0,421,422,5,33,0,0,422,425,5,18,0,0,423,425,5,30,0,0,424,421,1,0,0,
	0,424,423,1,0,0,0,425,63,1,0,0,0,426,427,5,33,0,0,427,428,5,18,0,0,428,
	431,5,18,0,0,429,431,5,31,0,0,430,426,1,0,0,0,430,429,1,0,0,0,431,65,1,
	0,0,0,432,433,5,32,0,0,433,67,1,0,0,0,434,435,5,7,0,0,435,69,1,0,0,0,436,
	437,5,34,0,0,437,71,1,0,0,0,438,439,5,5,0,0,439,73,1,0,0,0,440,441,5,21,
	0,0,441,75,1,0,0,0,442,448,3,78,39,0,443,448,3,80,40,0,444,448,3,82,41,
	0,445,448,3,84,42,0,446,448,3,90,45,0,447,442,1,0,0,0,447,443,1,0,0,0,447,
	444,1,0,0,0,447,445,1,0,0,0,447,446,1,0,0,0,448,77,1,0,0,0,449,450,5,22,
	0,0,450,451,5,57,0,0,451,452,3,166,83,0,452,453,3,38,19,0,453,454,5,53,
	0,0,454,455,3,34,17,0,455,456,5,65,0,0,456,464,1,0,0,0,457,458,5,22,0,0,
	458,459,5,57,0,0,459,460,3,166,83,0,460,461,3,38,19,0,461,462,5,65,0,0,
	462,464,1,0,0,0,463,449,1,0,0,0,463,457,1,0,0,0,464,79,1,0,0,0,465,466,
	5,24,0,0,466,467,5,57,0,0,467,468,3,34,17,0,468,469,5,65,0,0,469,472,1,
	0,0,0,470,472,5,24,0,0,471,465,1,0,0,0,471,470,1,0,0,0,472,81,1,0,0,0,473,
	474,5,35,0,0,474,475,5,57,0,0,475,476,3,34,17,0,476,477,5,65,0,0,477,480,
	1,0,0,0,478,480,5,35,0,0,479,473,1,0,0,0,479,478,1,0,0,0,480,83,1,0,0,0,
	481,482,5,12,0,0,482,483,5,57,0,0,483,484,3,34,17,0,484,485,5,53,0,0,485,
	486,3,34,17,0,486,487,5,65,0,0,487,85,1,0,0,0,488,489,5,12,0,0,489,87,1,
	0,0,0,490,496,3,106,53,0,491,496,3,114,57,0,492,496,3,130,65,0,493,496,
	3,92,46,0,494,496,3,100,50,0,495,490,1,0,0,0,495,491,1,0,0,0,495,492,1,
	0,0,0,495,493,1,0,0,0,495,494,1,0,0,0,496,89,1,0,0,0,497,498,5,19,0,0,498,
	499,5,57,0,0,499,500,3,38,19,0,500,501,5,53,0,0,501,502,3,38,19,0,502,503,
	5,53,0,0,503,504,3,34,17,0,504,505,5,65,0,0,505,514,1,0,0,0,506,507,5,19,
	0,0,507,508,5,57,0,0,508,509,3,38,19,0,509,510,5,53,0,0,510,511,3,38,19,
	0,511,512,5,65,0,0,512,514,1,0,0,0,513,497,1,0,0,0,513,506,1,0,0,0,514,
	91,1,0,0,0,515,516,5,4,0,0,516,517,3,174,87,0,517,518,5,52,0,0,518,519,
	3,6,3,0,519,523,5,58,0,0,520,522,3,94,47,0,521,520,1,0,0,0,522,525,1,0,
	0,0,523,521,1,0,0,0,523,524,1,0,0,0,524,526,1,0,0,0,525,523,1,0,0,0,526,
	527,5,66,0,0,527,540,1,0,0,0,528,529,5,4,0,0,529,530,3,174,87,0,530,534,
	5,58,0,0,531,533,3,94,47,0,532,531,1,0,0,0,533,536,1,0,0,0,534,532,1,0,
	0,0,534,535,1,0,0,0,535,537,1,0,0,0,536,534,1,0,0,0,537,538,5,66,0,0,538,
	540,1,0,0,0,539,515,1,0,0,0,539,528,1,0,0,0,540,93,1,0,0,0,541,542,3,96,
	48,0,542,543,3,174,87,0,543,544,5,71,0,0,544,95,1,0,0,0,545,546,3,166,83,
	0,546,547,5,2,0,0,547,548,5,57,0,0,548,549,3,34,17,0,549,550,5,65,0,0,550,
	560,1,0,0,0,551,552,3,166,83,0,552,553,5,2,0,0,553,554,5,57,0,0,554,555,
	3,34,17,0,555,556,5,53,0,0,556,557,3,98,49,0,557,558,5,65,0,0,558,560,1,
	0,0,0,559,545,1,0,0,0,559,551,1,0,0,0,560,97,1,0,0,0,561,565,3,72,36,0,
	562,565,3,74,37,0,563,565,3,46,23,0,564,561,1,0,0,0,564,562,1,0,0,0,564,
	563,1,0,0,0,565,99,1,0,0,0,566,567,5,3,0,0,567,568,3,174,87,0,568,569,3,
	102,51,0,569,101,1,0,0,0,570,575,3,104,52,0,571,572,5,53,0,0,572,574,3,
	104,52,0,573,571,1,0,0,0,574,577,1,0,0,0,575,573,1,0,0,0,575,576,1,0,0,
	0,576,103,1,0,0,0,577,575,1,0,0,0,578,579,3,174,87,0,579,105,1,0,0,0,580,
	583,3,108,54,0,581,583,3,112,56,0,582,580,1,0,0,0,582,581,1,0,0,0,583,107,
	1,0,0,0,584,585,5,25,0,0,585,586,3,174,87,0,586,587,5,52,0,0,587,588,3,
	6,3,0,588,592,5,58,0,0,589,591,3,110,55,0,590,589,1,0,0,0,591,594,1,0,0,
	0,592,590,1,0,0,0,592,593,1,0,0,0,593,595,1,0,0,0,594,592,1,0,0,0,595,596,
	5,66,0,0,596,613,1,0,0,0,597,598,5,25,0,0,598,599,3,174,87,0,599,600,5,
	58,0,0,600,601,5,66,0,0,601,613,1,0,0,0,602,603,5,25,0,0,603,604,3,174,
	87,0,604,606,5,58,0,0,605,607,3,110,55,0,606,605,1,0,0,0,607,608,1,0,0,
	0,608,606,1,0,0,0,608,609,1,0,0,0,609,610,1,0,0,0,610,611,5,66,0,0,611,
	613,1,0,0,0,612,584,1,0,0,0,612,597,1,0,0,0,612,602,1,0,0,0,613,109,1,0,
	0,0,614,615,3,166,83,0,615,616,3,38,19,0,616,617,3,150,75,0,617,618,5,71,
	0,0,618,111,1,0,0,0,619,620,5,25,0,0,620,621,3,174,87,0,621,113,1,0,0,0,
	622,625,3,116,58,0,623,625,3,128,64,0,624,622,1,0,0,0,624,623,1,0,0,0,625,
	115,1,0,0,0,626,627,5,28,0,0,627,628,3,174,87,0,628,629,5,26,0,0,629,630,
	5,60,0,0,630,631,3,166,83,0,631,632,3,118,59,0,632,633,5,68,0,0,633,634,
	5,58,0,0,634,635,3,120,60,0,635,636,5,66,0,0,636,117,1,0,0,0,637,644,3,
	46,23,0,638,644,3,68,34,0,639,644,3,72,36,0,640,644,3,70,35,0,641,644,3,
	74,37,0,642,644,3,6,3,0,643,637,1,0,0,0,643,638,1,0,0,0,643,639,1,0,0,0,
	643,640,1,0,0,0,643,641,1,0,0,0,643,642,1,0,0,0,644,119,1,0,0,0,645,647,
	3,122,61,0,646,645,1,0,0,0,647,648,1,0,0,0,648,646,1,0,0,0,648,649,1,0,
	0,0,649,121,1,0,0,0,650,652,3,124,62,0,651,650,1,0,0,0,652,653,1,0,0,0,
	653,651,1,0,0,0,653,654,1,0,0,0,654,655,1,0,0,0,655,656,3,126,63,0,656,
	657,5,71,0,0,657,123,1,0,0,0,658,659,3,166,83,0,659,660,5,6,0,0,660,661,
	3,32,16,0,661,662,5,52,0,0,662,673,1,0,0,0,663,664,3,166,83,0,664,665,5,
	6,0,0,665,666,3,6,3,0,666,667,5,52,0,0,667,673,1,0,0,0,668,669,3,166,83,
	0,669,670,5,9,0,0,670,671,5,52,0,0,671,673,1,0,0,0,672,658,1,0,0,0,672,
	663,1,0,0,0,672,668,1,0,0,0,673,125,1,0,0,0,674,675,3,166,83,0,675,676,
	3,38,19,0,676,677,3,152,76,0,677,127,1,0,0,0,678,679,5,28,0,0,679,680,3,
	174,87,0,680,129,1,0,0,0,681,682,5,11,0,0,682,683,3,174,87,0,683,684,5,
	58,0,0,684,689,3,132,66,0,685,686,5,53,0,0,686,688,3,132,66,0,687,685,1,
	0,0,0,688,691,1,0,0,0,689,687,1,0,0,0,689,690,1,0,0,0,690,692,1,0,0,0,691,
	689,1,0,0,0,692,693,5,66,0,0,693,131,1,0,0,0,694,695,3,174,87,0,695,133,
	1,0,0,0,696,698,3,174,87,0,697,699,3,136,68,0,698,697,1,0,0,0,699,700,1,
	0,0,0,700,698,1,0,0,0,700,701,1,0,0,0,701,135,1,0,0,0,702,703,5,59,0,0,
	703,704,3,34,17,0,704,705,5,67,0,0,705,137,1,0,0,0,706,707,3,174,87,0,707,
	139,1,0,0,0,708,709,5,27,0,0,709,710,3,166,83,0,710,711,3,142,71,0,711,
	141,1,0,0,0,712,713,3,144,72,0,713,714,3,146,73,0,714,143,1,0,0,0,715,719,
	3,40,20,0,716,719,3,76,38,0,717,719,3,88,44,0,718,715,1,0,0,0,718,716,1,
	0,0,0,718,717,1,0,0,0,719,145,1,0,0,0,720,725,3,148,74,0,721,722,5,53,0,
	0,722,724,3,148,74,0,723,721,1,0,0,0,724,727,1,0,0,0,725,723,1,0,0,0,725,
	726,1,0,0,0,726,147,1,0,0,0,727,725,1,0,0,0,728,731,3,138,69,0,729,731,
	3,134,67,0,730,728,1,0,0,0,730,729,1,0,0,0,731,149,1,0,0,0,732,737,3,152,
	76,0,733,734,5,53,0,0,734,736,3,152,76,0,735,733,1,0,0,0,736,739,1,0,0,
	0,737,735,1,0,0,0,737,738,1,0,0,0,738,151,1,0,0,0,739,737,1,0,0,0,740,741,
	3,166,83,0,741,742,3,138,69,0,742,747,1,0,0,0,743,744,3,166,83,0,744,745,
	3,134,67,0,745,747,1,0,0,0,746,740,1,0,0,0,746,743,1,0,0,0,747,153,1,0,
	0,0,748,749,3,156,78,0,749,750,5,58,0,0,750,751,3,158,79,0,751,752,5,66,
	0,0,752,155,1,0,0,0,753,754,5,1,0,0,754,755,3,174,87,0,755,157,1,0,0,0,
	756,758,3,160,80,0,757,756,1,0,0,0,758,761,1,0,0,0,759,757,1,0,0,0,759,
	760,1,0,0,0,760,159,1,0,0,0,761,759,1,0,0,0,762,773,3,162,81,0,763,764,
	3,130,65,0,764,765,5,71,0,0,765,773,1,0,0,0,766,767,3,8,4,0,767,768,5,71,
	0,0,768,773,1,0,0,0,769,770,3,140,70,0,770,771,5,71,0,0,771,773,1,0,0,0,
	772,762,1,0,0,0,772,763,1,0,0,0,772,766,1,0,0,0,772,769,1,0,0,0,773,161,
	1,0,0,0,774,775,3,164,82,0,775,778,3,138,69,0,776,777,5,9,0,0,777,779,3,
	12,6,0,778,776,1,0,0,0,778,779,1,0,0,0,779,780,1,0,0,0,780,781,5,71,0,0,
	781,163,1,0,0,0,782,785,3,10,5,0,783,785,3,6,3,0,784,782,1,0,0,0,784,783,
	1,0,0,0,785,165,1,0,0,0,786,788,3,168,84,0,787,786,1,0,0,0,788,791,1,0,
	0,0,789,787,1,0,0,0,789,790,1,0,0,0,790,167,1,0,0,0,791,789,1,0,0,0,792,
	793,5,50,0,0,793,798,3,6,3,0,794,795,5,60,0,0,795,796,3,170,85,0,796,797,
	5,68,0,0,797,799,1,0,0,0,798,794,1,0,0,0,798,799,1,0,0,0,799,169,1,0,0,
	0,800,810,3,12,6,0,801,806,3,172,86,0,802,803,5,53,0,0,803,805,3,172,86,
	0,804,802,1,0,0,0,805,808,1,0,0,0,806,804,1,0,0,0,806,807,1,0,0,0,807,810,
	1,0,0,0,808,806,1,0,0,0,809,800,1,0,0,0,809,801,1,0,0,0,810,171,1,0,0,0,
	811,812,3,174,87,0,812,813,5,55,0,0,813,814,3,12,6,0,814,173,1,0,0,0,815,
	816,3,166,83,0,816,817,5,36,0,0,817,175,1,0,0,0,65,179,199,207,215,222,
	261,273,284,295,307,309,321,323,338,340,347,357,365,369,373,381,387,391,
	397,406,414,419,424,430,447,463,471,479,495,513,523,534,539,559,564,575,
	582,592,608,612,624,643,648,653,672,689,700,718,725,730,737,746,759,772,
	778,784,789,798,806,809];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!DdsIdlParser.__ATN) {
			DdsIdlParser.__ATN = new ATNDeserializer().deserialize(DdsIdlParser._serializedATN);
		}

		return DdsIdlParser.__ATN;
	}


	static DecisionsToDFA = DdsIdlParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class SpecificationContext extends ParserRuleContext {
	constructor(parser?: DdsIdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EOF(): TerminalNode {
		return this.getToken(DdsIdlParser.EOF, 0);
	}
	public definition_list(): DefinitionContext[] {
		return this.getTypedRuleContexts(DefinitionContext) as DefinitionContext[];
	}
	public definition(i: number): DefinitionContext {
		return this.getTypedRuleContext(DefinitionContext, i) as DefinitionContext;
	}
    public get ruleIndex(): number {
    	return DdsIdlParser.RULE_specification;
	}
	public enterRule(listener: DdsIdlListener): void {
	    if(listener.enterSpecification) {
	 		listener.enterSpecification(this);
		}
	}
	public exitRule(listener: DdsIdlListener): void {
	    if(listener.exitSpecification) {
	 		listener.exitSpecification(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DdsIdlVisitor<Result>): Result {
		if (visitor.visitSpecification) {
			return visitor.visitSpecification(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DefinitionContext extends ParserRuleContext {
	constructor(parser?: DdsIdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public annotationApplications(): AnnotationApplicationsContext {
		return this.getTypedRuleContext(AnnotationApplicationsContext, 0) as AnnotationApplicationsContext;
	}
	public module_(): ModuleContext {
		return this.getTypedRuleContext(ModuleContext, 0) as ModuleContext;
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(DdsIdlParser.SEMICOLON, 0);
	}
	public constantDeclaration(): ConstantDeclarationContext {
		return this.getTypedRuleContext(ConstantDeclarationContext, 0) as ConstantDeclarationContext;
	}
	public typeDeclaration(): TypeDeclarationContext {
		return this.getTypedRuleContext(TypeDeclarationContext, 0) as TypeDeclarationContext;
	}
	public annotationDeclaration(): AnnotationDeclarationContext {
		return this.getTypedRuleContext(AnnotationDeclarationContext, 0) as AnnotationDeclarationContext;
	}
    public get ruleIndex(): number {
    	return DdsIdlParser.RULE_definition;
	}
	public enterRule(listener: DdsIdlListener): void {
	    if(listener.enterDefinition) {
	 		listener.enterDefinition(this);
		}
	}
	public exitRule(listener: DdsIdlListener): void {
	    if(listener.exitDefinition) {
	 		listener.exitDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DdsIdlVisitor<Result>): Result {
		if (visitor.visitDefinition) {
			return visitor.visitDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModuleContext extends ParserRuleContext {
	constructor(parser?: DdsIdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public KW_MODULE(): TerminalNode {
		return this.getToken(DdsIdlParser.KW_MODULE, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public LEFT_BRACE(): TerminalNode {
		return this.getToken(DdsIdlParser.LEFT_BRACE, 0);
	}
	public RIGHT_BRACE(): TerminalNode {
		return this.getToken(DdsIdlParser.RIGHT_BRACE, 0);
	}
	public definition_list(): DefinitionContext[] {
		return this.getTypedRuleContexts(DefinitionContext) as DefinitionContext[];
	}
	public definition(i: number): DefinitionContext {
		return this.getTypedRuleContext(DefinitionContext, i) as DefinitionContext;
	}
    public get ruleIndex(): number {
    	return DdsIdlParser.RULE_module;
	}
	public enterRule(listener: DdsIdlListener): void {
	    if(listener.enterModule) {
	 		listener.enterModule(this);
		}
	}
	public exitRule(listener: DdsIdlListener): void {
	    if(listener.exitModule) {
	 		listener.exitModule(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DdsIdlVisitor<Result>): Result {
		if (visitor.visitModule) {
			return visitor.visitModule(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ScopedNameContext extends ParserRuleContext {
	constructor(parser?: DdsIdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return DdsIdlParser.RULE_scopedName;
	}
	public override copyFrom(ctx: ScopedNameContext): void {
		super.copyFrom(ctx);
	}
}
export class RootedScopedNameContext extends ScopedNameContext {
	constructor(parser: DdsIdlParser, ctx: ScopedNameContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public SCOPE_SEP(): TerminalNode {
		return this.getToken(DdsIdlParser.SCOPE_SEP, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public enterRule(listener: DdsIdlListener): void {
	    if(listener.enterRootedScopedName) {
	 		listener.enterRootedScopedName(this);
		}
	}
	public exitRule(listener: DdsIdlListener): void {
	    if(listener.exitRootedScopedName) {
	 		listener.exitRootedScopedName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DdsIdlVisitor<Result>): Result {
		if (visitor.visitRootedScopedName) {
			return visitor.visitRootedScopedName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CompoundScopedNameContext extends ScopedNameContext {
	constructor(parser: DdsIdlParser, ctx: ScopedNameContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public scopedName(): ScopedNameContext {
		return this.getTypedRuleContext(ScopedNameContext, 0) as ScopedNameContext;
	}
	public SCOPE_SEP(): TerminalNode {
		return this.getToken(DdsIdlParser.SCOPE_SEP, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public enterRule(listener: DdsIdlListener): void {
	    if(listener.enterCompoundScopedName) {
	 		listener.enterCompoundScopedName(this);
		}
	}
	public exitRule(listener: DdsIdlListener): void {
	    if(listener.exitCompoundScopedName) {
	 		listener.exitCompoundScopedName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DdsIdlVisitor<Result>): Result {
		if (visitor.visitCompoundScopedName) {
			return visitor.visitCompoundScopedName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SingleScopedNameContext extends ScopedNameContext {
	constructor(parser: DdsIdlParser, ctx: ScopedNameContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public enterRule(listener: DdsIdlListener): void {
	    if(listener.enterSingleScopedName) {
	 		listener.enterSingleScopedName(this);
		}
	}
	public exitRule(listener: DdsIdlListener): void {
	    if(listener.exitSingleScopedName) {
	 		listener.exitSingleScopedName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DdsIdlVisitor<Result>): Result {
		if (visitor.visitSingleScopedName) {
			return visitor.visitSingleScopedName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstantDeclarationContext extends ParserRuleContext {
	constructor(parser?: DdsIdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public KW_CONST(): TerminalNode {
		return this.getToken(DdsIdlParser.KW_CONST, 0);
	}
	public constantType(): ConstantTypeContext {
		return this.getTypedRuleContext(ConstantTypeContext, 0) as ConstantTypeContext;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public EQUALS(): TerminalNode {
		return this.getToken(DdsIdlParser.EQUALS, 0);
	}
	public constantExpression(): ConstantExpressionContext {
		return this.getTypedRuleContext(ConstantExpressionContext, 0) as ConstantExpressionContext;
	}
    public get ruleIndex(): number {
    	return DdsIdlParser.RULE_constantDeclaration;
	}
	public enterRule(listener: DdsIdlListener): void {
	    if(listener.enterConstantDeclaration) {
	 		listener.enterConstantDeclaration(this);
		}
	}
	public exitRule(listener: DdsIdlListener): void {
	    if(listener.exitConstantDeclaration) {
	 		listener.exitConstantDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DdsIdlVisitor<Result>): Result {
		if (visitor.visitConstantDeclaration) {
			return visitor.visitConstantDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstantTypeContext extends ParserRuleContext {
	constructor(parser?: DdsIdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public annotationApplications(): AnnotationApplicationsContext {
		return this.getTypedRuleContext(AnnotationApplicationsContext, 0) as AnnotationApplicationsContext;
	}
	public integerType(): IntegerTypeContext {
		return this.getTypedRuleContext(IntegerTypeContext, 0) as IntegerTypeContext;
	}
	public floatingPointType(): FloatingPointTypeContext {
		return this.getTypedRuleContext(FloatingPointTypeContext, 0) as FloatingPointTypeContext;
	}
	public fixedPointConstantType(): FixedPointConstantTypeContext {
		return this.getTypedRuleContext(FixedPointConstantTypeContext, 0) as FixedPointConstantTypeContext;
	}
	public charType(): CharTypeContext {
		return this.getTypedRuleContext(CharTypeContext, 0) as CharTypeContext;
	}
	public wideCharType(): WideCharTypeContext {
		return this.getTypedRuleContext(WideCharTypeContext, 0) as WideCharTypeContext;
	}
	public booleanType(): BooleanTypeContext {
		return this.getTypedRuleContext(BooleanTypeContext, 0) as BooleanTypeContext;
	}
	public octetType(): OctetTypeContext {
		return this.getTypedRuleContext(OctetTypeContext, 0) as OctetTypeContext;
	}
	public stringType(): StringTypeContext {
		return this.getTypedRuleContext(StringTypeContext, 0) as StringTypeContext;
	}
	public wideStringType(): WideStringTypeContext {
		return this.getTypedRuleContext(WideStringTypeContext, 0) as WideStringTypeContext;
	}
	public scopedName(): ScopedNameContext {
		return this.getTypedRuleContext(ScopedNameContext, 0) as ScopedNameContext;
	}
    public get ruleIndex(): number {
    	return DdsIdlParser.RULE_constantType;
	}
	public enterRule(listener: DdsIdlListener): void {
	    if(listener.enterConstantType) {
	 		listener.enterConstantType(this);
		}
	}
	public exitRule(listener: DdsIdlListener): void {
	    if(listener.exitConstantType) {
	 		listener.exitConstantType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DdsIdlVisitor<Result>): Result {
		if (visitor.visitConstantType) {
			return visitor.visitConstantType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstantExpressionContext extends ParserRuleContext {
	constructor(parser?: DdsIdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public orExpression(): OrExpressionContext {
		return this.getTypedRuleContext(OrExpressionContext, 0) as OrExpressionContext;
	}
    public get ruleIndex(): number {
    	return DdsIdlParser.RULE_constantExpression;
	}
	public enterRule(listener: DdsIdlListener): void {
	    if(listener.enterConstantExpression) {
	 		listener.enterConstantExpression(this);
		}
	}
	public exitRule(listener: DdsIdlListener): void {
	    if(listener.exitConstantExpression) {
	 		listener.exitConstantExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DdsIdlVisitor<Result>): Result {
		if (visitor.visitConstantExpression) {
			return visitor.visitConstantExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OrExpressionContext extends ParserRuleContext {
	constructor(parser?: DdsIdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return DdsIdlParser.RULE_orExpression;
	}
	public override copyFrom(ctx: OrExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class OrPassThroughContext extends OrExpressionContext {
	constructor(parser: DdsIdlParser, ctx: OrExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public xorExpression(): XorExpressionContext {
		return this.getTypedRuleContext(XorExpressionContext, 0) as XorExpressionContext;
	}
	public enterRule(listener: DdsIdlListener): void {
	    if(listener.enterOrPassThrough) {
	 		listener.enterOrPassThrough(this);
		}
	}
	public exitRule(listener: DdsIdlListener): void {
	    if(listener.exitOrPassThrough) {
	 		listener.exitOrPassThrough(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DdsIdlVisitor<Result>): Result {
		if (visitor.visitOrPassThrough) {
			return visitor.visitOrPassThrough(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class OrOperationContext extends OrExpressionContext {
	constructor(parser: DdsIdlParser, ctx: OrExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public orExpression(): OrExpressionContext {
		return this.getTypedRuleContext(OrExpressionContext, 0) as OrExpressionContext;
	}
	public VERT_BAR(): TerminalNode {
		return this.getToken(DdsIdlParser.VERT_BAR, 0);
	}
	public xorExpression(): XorExpressionContext {
		return this.getTypedRuleContext(XorExpressionContext, 0) as XorExpressionContext;
	}
	public enterRule(listener: DdsIdlListener): void {
	    if(listener.enterOrOperation) {
	 		listener.enterOrOperation(this);
		}
	}
	public exitRule(listener: DdsIdlListener): void {
	    if(listener.exitOrOperation) {
	 		listener.exitOrOperation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DdsIdlVisitor<Result>): Result {
		if (visitor.visitOrOperation) {
			return visitor.visitOrOperation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class XorExpressionContext extends ParserRuleContext {
	constructor(parser?: DdsIdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return DdsIdlParser.RULE_xorExpression;
	}
	public override copyFrom(ctx: XorExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class XorPassThroughContext extends XorExpressionContext {
	constructor(parser: DdsIdlParser, ctx: XorExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public andExpression(): AndExpressionContext {
		return this.getTypedRuleContext(AndExpressionContext, 0) as AndExpressionContext;
	}
	public enterRule(listener: DdsIdlListener): void {
	    if(listener.enterXorPassThrough) {
	 		listener.enterXorPassThrough(this);
		}
	}
	public exitRule(listener: DdsIdlListener): void {
	    if(listener.exitXorPassThrough) {
	 		listener.exitXorPassThrough(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DdsIdlVisitor<Result>): Result {
		if (visitor.visitXorPassThrough) {
			return visitor.visitXorPassThrough(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class XorOperationContext extends XorExpressionContext {
	constructor(parser: DdsIdlParser, ctx: XorExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public xorExpression(): XorExpressionContext {
		return this.getTypedRuleContext(XorExpressionContext, 0) as XorExpressionContext;
	}
	public CARET(): TerminalNode {
		return this.getToken(DdsIdlParser.CARET, 0);
	}
	public andExpression(): AndExpressionContext {
		return this.getTypedRuleContext(AndExpressionContext, 0) as AndExpressionContext;
	}
	public enterRule(listener: DdsIdlListener): void {
	    if(listener.enterXorOperation) {
	 		listener.enterXorOperation(this);
		}
	}
	public exitRule(listener: DdsIdlListener): void {
	    if(listener.exitXorOperation) {
	 		listener.exitXorOperation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DdsIdlVisitor<Result>): Result {
		if (visitor.visitXorOperation) {
			return visitor.visitXorOperation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AndExpressionContext extends ParserRuleContext {
	constructor(parser?: DdsIdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return DdsIdlParser.RULE_andExpression;
	}
	public override copyFrom(ctx: AndExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class AndOperationContext extends AndExpressionContext {
	constructor(parser: DdsIdlParser, ctx: AndExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public andExpression(): AndExpressionContext {
		return this.getTypedRuleContext(AndExpressionContext, 0) as AndExpressionContext;
	}
	public AMPERSAND(): TerminalNode {
		return this.getToken(DdsIdlParser.AMPERSAND, 0);
	}
	public shiftExpression(): ShiftExpressionContext {
		return this.getTypedRuleContext(ShiftExpressionContext, 0) as ShiftExpressionContext;
	}
	public enterRule(listener: DdsIdlListener): void {
	    if(listener.enterAndOperation) {
	 		listener.enterAndOperation(this);
		}
	}
	public exitRule(listener: DdsIdlListener): void {
	    if(listener.exitAndOperation) {
	 		listener.exitAndOperation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DdsIdlVisitor<Result>): Result {
		if (visitor.visitAndOperation) {
			return visitor.visitAndOperation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AndPassThroughContext extends AndExpressionContext {
	constructor(parser: DdsIdlParser, ctx: AndExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public shiftExpression(): ShiftExpressionContext {
		return this.getTypedRuleContext(ShiftExpressionContext, 0) as ShiftExpressionContext;
	}
	public enterRule(listener: DdsIdlListener): void {
	    if(listener.enterAndPassThrough) {
	 		listener.enterAndPassThrough(this);
		}
	}
	public exitRule(listener: DdsIdlListener): void {
	    if(listener.exitAndPassThrough) {
	 		listener.exitAndPassThrough(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DdsIdlVisitor<Result>): Result {
		if (visitor.visitAndPassThrough) {
			return visitor.visitAndPassThrough(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ShiftExpressionContext extends ParserRuleContext {
	constructor(parser?: DdsIdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return DdsIdlParser.RULE_shiftExpression;
	}
	public override copyFrom(ctx: ShiftExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class ShiftPassThroughContext extends ShiftExpressionContext {
	constructor(parser: DdsIdlParser, ctx: ShiftExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public addExpression(): AddExpressionContext {
		return this.getTypedRuleContext(AddExpressionContext, 0) as AddExpressionContext;
	}
	public enterRule(listener: DdsIdlListener): void {
	    if(listener.enterShiftPassThrough) {
	 		listener.enterShiftPassThrough(this);
		}
	}
	public exitRule(listener: DdsIdlListener): void {
	    if(listener.exitShiftPassThrough) {
	 		listener.exitShiftPassThrough(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DdsIdlVisitor<Result>): Result {
		if (visitor.visitShiftPassThrough) {
			return visitor.visitShiftPassThrough(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ShiftLeftOperationContext extends ShiftExpressionContext {
	constructor(parser: DdsIdlParser, ctx: ShiftExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public shiftExpression(): ShiftExpressionContext {
		return this.getTypedRuleContext(ShiftExpressionContext, 0) as ShiftExpressionContext;
	}
	public LEFT_SHIFT(): TerminalNode {
		return this.getToken(DdsIdlParser.LEFT_SHIFT, 0);
	}
	public addExpression(): AddExpressionContext {
		return this.getTypedRuleContext(AddExpressionContext, 0) as AddExpressionContext;
	}
	public enterRule(listener: DdsIdlListener): void {
	    if(listener.enterShiftLeftOperation) {
	 		listener.enterShiftLeftOperation(this);
		}
	}
	public exitRule(listener: DdsIdlListener): void {
	    if(listener.exitShiftLeftOperation) {
	 		listener.exitShiftLeftOperation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DdsIdlVisitor<Result>): Result {
		if (visitor.visitShiftLeftOperation) {
			return visitor.visitShiftLeftOperation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ShiftRightOperationContext extends ShiftExpressionContext {
	constructor(parser: DdsIdlParser, ctx: ShiftExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public shiftExpression(): ShiftExpressionContext {
		return this.getTypedRuleContext(ShiftExpressionContext, 0) as ShiftExpressionContext;
	}
	public RIGHT_SHIFT(): TerminalNode {
		return this.getToken(DdsIdlParser.RIGHT_SHIFT, 0);
	}
	public addExpression(): AddExpressionContext {
		return this.getTypedRuleContext(AddExpressionContext, 0) as AddExpressionContext;
	}
	public enterRule(listener: DdsIdlListener): void {
	    if(listener.enterShiftRightOperation) {
	 		listener.enterShiftRightOperation(this);
		}
	}
	public exitRule(listener: DdsIdlListener): void {
	    if(listener.exitShiftRightOperation) {
	 		listener.exitShiftRightOperation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DdsIdlVisitor<Result>): Result {
		if (visitor.visitShiftRightOperation) {
			return visitor.visitShiftRightOperation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AddExpressionContext extends ParserRuleContext {
	constructor(parser?: DdsIdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return DdsIdlParser.RULE_addExpression;
	}
	public override copyFrom(ctx: AddExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class AddOperationContext extends AddExpressionContext {
	constructor(parser: DdsIdlParser, ctx: AddExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public addExpression(): AddExpressionContext {
		return this.getTypedRuleContext(AddExpressionContext, 0) as AddExpressionContext;
	}
	public PLUS(): TerminalNode {
		return this.getToken(DdsIdlParser.PLUS, 0);
	}
	public multExpression(): MultExpressionContext {
		return this.getTypedRuleContext(MultExpressionContext, 0) as MultExpressionContext;
	}
	public enterRule(listener: DdsIdlListener): void {
	    if(listener.enterAddOperation) {
	 		listener.enterAddOperation(this);
		}
	}
	public exitRule(listener: DdsIdlListener): void {
	    if(listener.exitAddOperation) {
	 		listener.exitAddOperation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DdsIdlVisitor<Result>): Result {
		if (visitor.visitAddOperation) {
			return visitor.visitAddOperation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SubtractOperationContext extends AddExpressionContext {
	constructor(parser: DdsIdlParser, ctx: AddExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public addExpression(): AddExpressionContext {
		return this.getTypedRuleContext(AddExpressionContext, 0) as AddExpressionContext;
	}
	public MINUS(): TerminalNode {
		return this.getToken(DdsIdlParser.MINUS, 0);
	}
	public multExpression(): MultExpressionContext {
		return this.getTypedRuleContext(MultExpressionContext, 0) as MultExpressionContext;
	}
	public enterRule(listener: DdsIdlListener): void {
	    if(listener.enterSubtractOperation) {
	 		listener.enterSubtractOperation(this);
		}
	}
	public exitRule(listener: DdsIdlListener): void {
	    if(listener.exitSubtractOperation) {
	 		listener.exitSubtractOperation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DdsIdlVisitor<Result>): Result {
		if (visitor.visitSubtractOperation) {
			return visitor.visitSubtractOperation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AddPassThroughContext extends AddExpressionContext {
	constructor(parser: DdsIdlParser, ctx: AddExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public multExpression(): MultExpressionContext {
		return this.getTypedRuleContext(MultExpressionContext, 0) as MultExpressionContext;
	}
	public enterRule(listener: DdsIdlListener): void {
	    if(listener.enterAddPassThrough) {
	 		listener.enterAddPassThrough(this);
		}
	}
	public exitRule(listener: DdsIdlListener): void {
	    if(listener.exitAddPassThrough) {
	 		listener.exitAddPassThrough(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DdsIdlVisitor<Result>): Result {
		if (visitor.visitAddPassThrough) {
			return visitor.visitAddPassThrough(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MultExpressionContext extends ParserRuleContext {
	constructor(parser?: DdsIdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return DdsIdlParser.RULE_multExpression;
	}
	public override copyFrom(ctx: MultExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class MultiplyOperationContext extends MultExpressionContext {
	constructor(parser: DdsIdlParser, ctx: MultExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public multExpression(): MultExpressionContext {
		return this.getTypedRuleContext(MultExpressionContext, 0) as MultExpressionContext;
	}
	public ASTERISK(): TerminalNode {
		return this.getToken(DdsIdlParser.ASTERISK, 0);
	}
	public unaryExpression(): UnaryExpressionContext {
		return this.getTypedRuleContext(UnaryExpressionContext, 0) as UnaryExpressionContext;
	}
	public enterRule(listener: DdsIdlListener): void {
	    if(listener.enterMultiplyOperation) {
	 		listener.enterMultiplyOperation(this);
		}
	}
	public exitRule(listener: DdsIdlListener): void {
	    if(listener.exitMultiplyOperation) {
	 		listener.exitMultiplyOperation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DdsIdlVisitor<Result>): Result {
		if (visitor.visitMultiplyOperation) {
			return visitor.visitMultiplyOperation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DivideOperationContext extends MultExpressionContext {
	constructor(parser: DdsIdlParser, ctx: MultExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public multExpression(): MultExpressionContext {
		return this.getTypedRuleContext(MultExpressionContext, 0) as MultExpressionContext;
	}
	public FORWARD_SLASH(): TerminalNode {
		return this.getToken(DdsIdlParser.FORWARD_SLASH, 0);
	}
	public unaryExpression(): UnaryExpressionContext {
		return this.getTypedRuleContext(UnaryExpressionContext, 0) as UnaryExpressionContext;
	}
	public enterRule(listener: DdsIdlListener): void {
	    if(listener.enterDivideOperation) {
	 		listener.enterDivideOperation(this);
		}
	}
	public exitRule(listener: DdsIdlListener): void {
	    if(listener.exitDivideOperation) {
	 		listener.exitDivideOperation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DdsIdlVisitor<Result>): Result {
		if (visitor.visitDivideOperation) {
			return visitor.visitDivideOperation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ModuloOperationContext extends MultExpressionContext {
	constructor(parser: DdsIdlParser, ctx: MultExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public multExpression(): MultExpressionContext {
		return this.getTypedRuleContext(MultExpressionContext, 0) as MultExpressionContext;
	}
	public PERCENT(): TerminalNode {
		return this.getToken(DdsIdlParser.PERCENT, 0);
	}
	public unaryExpression(): UnaryExpressionContext {
		return this.getTypedRuleContext(UnaryExpressionContext, 0) as UnaryExpressionContext;
	}
	public enterRule(listener: DdsIdlListener): void {
	    if(listener.enterModuloOperation) {
	 		listener.enterModuloOperation(this);
		}
	}
	public exitRule(listener: DdsIdlListener): void {
	    if(listener.exitModuloOperation) {
	 		listener.exitModuloOperation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DdsIdlVisitor<Result>): Result {
		if (visitor.visitModuloOperation) {
			return visitor.visitModuloOperation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MultPassThroughContext extends MultExpressionContext {
	constructor(parser: DdsIdlParser, ctx: MultExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public unaryExpression(): UnaryExpressionContext {
		return this.getTypedRuleContext(UnaryExpressionContext, 0) as UnaryExpressionContext;
	}
	public enterRule(listener: DdsIdlListener): void {
	    if(listener.enterMultPassThrough) {
	 		listener.enterMultPassThrough(this);
		}
	}
	public exitRule(listener: DdsIdlListener): void {
	    if(listener.exitMultPassThrough) {
	 		listener.exitMultPassThrough(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DdsIdlVisitor<Result>): Result {
		if (visitor.visitMultPassThrough) {
			return visitor.visitMultPassThrough(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnaryExpressionContext extends ParserRuleContext {
	constructor(parser?: DdsIdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return DdsIdlParser.RULE_unaryExpression;
	}
	public override copyFrom(ctx: UnaryExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class UnaryOperationContext extends UnaryExpressionContext {
	constructor(parser: DdsIdlParser, ctx: UnaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public unaryOperator(): UnaryOperatorContext {
		return this.getTypedRuleContext(UnaryOperatorContext, 0) as UnaryOperatorContext;
	}
	public primaryExpression(): PrimaryExpressionContext {
		return this.getTypedRuleContext(PrimaryExpressionContext, 0) as PrimaryExpressionContext;
	}
	public enterRule(listener: DdsIdlListener): void {
	    if(listener.enterUnaryOperation) {
	 		listener.enterUnaryOperation(this);
		}
	}
	public exitRule(listener: DdsIdlListener): void {
	    if(listener.exitUnaryOperation) {
	 		listener.exitUnaryOperation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DdsIdlVisitor<Result>): Result {
		if (visitor.visitUnaryOperation) {
			return visitor.visitUnaryOperation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UnaryPassThroughContext extends UnaryExpressionContext {
	constructor(parser: DdsIdlParser, ctx: UnaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public primaryExpression(): PrimaryExpressionContext {
		return this.getTypedRuleContext(PrimaryExpressionContext, 0) as PrimaryExpressionContext;
	}
	public enterRule(listener: DdsIdlListener): void {
	    if(listener.enterUnaryPassThrough) {
	 		listener.enterUnaryPassThrough(this);
		}
	}
	public exitRule(listener: DdsIdlListener): void {
	    if(listener.exitUnaryPassThrough) {
	 		listener.exitUnaryPassThrough(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DdsIdlVisitor<Result>): Result {
		if (visitor.visitUnaryPassThrough) {
			return visitor.visitUnaryPassThrough(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnaryOperatorContext extends ParserRuleContext {
	constructor(parser?: DdsIdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public MINUS(): TerminalNode {
		return this.getToken(DdsIdlParser.MINUS, 0);
	}
	public PLUS(): TerminalNode {
		return this.getToken(DdsIdlParser.PLUS, 0);
	}
	public TILDE(): TerminalNode {
		return this.getToken(DdsIdlParser.TILDE, 0);
	}
    public get ruleIndex(): number {
    	return DdsIdlParser.RULE_unaryOperator;
	}
	public enterRule(listener: DdsIdlListener): void {
	    if(listener.enterUnaryOperator) {
	 		listener.enterUnaryOperator(this);
		}
	}
	public exitRule(listener: DdsIdlListener): void {
	    if(listener.exitUnaryOperator) {
	 		listener.exitUnaryOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DdsIdlVisitor<Result>): Result {
		if (visitor.visitUnaryOperator) {
			return visitor.visitUnaryOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimaryExpressionContext extends ParserRuleContext {
	constructor(parser?: DdsIdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public scopedName(): ScopedNameContext {
		return this.getTypedRuleContext(ScopedNameContext, 0) as ScopedNameContext;
	}
	public literal(): LiteralContext {
		return this.getTypedRuleContext(LiteralContext, 0) as LiteralContext;
	}
	public LEFT_PAREN(): TerminalNode {
		return this.getToken(DdsIdlParser.LEFT_PAREN, 0);
	}
	public constantExpression(): ConstantExpressionContext {
		return this.getTypedRuleContext(ConstantExpressionContext, 0) as ConstantExpressionContext;
	}
	public RIGHT_PAREN(): TerminalNode {
		return this.getToken(DdsIdlParser.RIGHT_PAREN, 0);
	}
    public get ruleIndex(): number {
    	return DdsIdlParser.RULE_primaryExpression;
	}
	public enterRule(listener: DdsIdlListener): void {
	    if(listener.enterPrimaryExpression) {
	 		listener.enterPrimaryExpression(this);
		}
	}
	public exitRule(listener: DdsIdlListener): void {
	    if(listener.exitPrimaryExpression) {
	 		listener.exitPrimaryExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DdsIdlVisitor<Result>): Result {
		if (visitor.visitPrimaryExpression) {
			return visitor.visitPrimaryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LiteralContext extends ParserRuleContext {
	constructor(parser?: DdsIdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public INTEGER_LITERAL(): TerminalNode {
		return this.getToken(DdsIdlParser.INTEGER_LITERAL, 0);
	}
	public HEX_LITERAL(): TerminalNode {
		return this.getToken(DdsIdlParser.HEX_LITERAL, 0);
	}
	public OCTAL_LITERAL(): TerminalNode {
		return this.getToken(DdsIdlParser.OCTAL_LITERAL, 0);
	}
	public FLOATING_PT_LITERAL(): TerminalNode {
		return this.getToken(DdsIdlParser.FLOATING_PT_LITERAL, 0);
	}
	public CHARACTER_LITERAL(): TerminalNode {
		return this.getToken(DdsIdlParser.CHARACTER_LITERAL, 0);
	}
	public WIDE_CHARACTER_LITERAL(): TerminalNode {
		return this.getToken(DdsIdlParser.WIDE_CHARACTER_LITERAL, 0);
	}
	public BOOLEAN_LITERAL(): TerminalNode {
		return this.getToken(DdsIdlParser.BOOLEAN_LITERAL, 0);
	}
	public STRING_LITERAL(): TerminalNode {
		return this.getToken(DdsIdlParser.STRING_LITERAL, 0);
	}
	public WIDE_STRING_LITERAL(): TerminalNode {
		return this.getToken(DdsIdlParser.WIDE_STRING_LITERAL, 0);
	}
    public get ruleIndex(): number {
    	return DdsIdlParser.RULE_literal;
	}
	public enterRule(listener: DdsIdlListener): void {
	    if(listener.enterLiteral) {
	 		listener.enterLiteral(this);
		}
	}
	public exitRule(listener: DdsIdlListener): void {
	    if(listener.exitLiteral) {
	 		listener.exitLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DdsIdlVisitor<Result>): Result {
		if (visitor.visitLiteral) {
			return visitor.visitLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PositiveIntegerConstantContext extends ParserRuleContext {
	constructor(parser?: DdsIdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public constantExpression(): ConstantExpressionContext {
		return this.getTypedRuleContext(ConstantExpressionContext, 0) as ConstantExpressionContext;
	}
    public get ruleIndex(): number {
    	return DdsIdlParser.RULE_positiveIntegerConstant;
	}
	public enterRule(listener: DdsIdlListener): void {
	    if(listener.enterPositiveIntegerConstant) {
	 		listener.enterPositiveIntegerConstant(this);
		}
	}
	public exitRule(listener: DdsIdlListener): void {
	    if(listener.exitPositiveIntegerConstant) {
	 		listener.exitPositiveIntegerConstant(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DdsIdlVisitor<Result>): Result {
		if (visitor.visitPositiveIntegerConstant) {
			return visitor.visitPositiveIntegerConstant(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeDeclarationContext extends ParserRuleContext {
	constructor(parser?: DdsIdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public constructedTypeDeclaration(): ConstructedTypeDeclarationContext {
		return this.getTypedRuleContext(ConstructedTypeDeclarationContext, 0) as ConstructedTypeDeclarationContext;
	}
	public typeAliasDeclaration(): TypeAliasDeclarationContext {
		return this.getTypedRuleContext(TypeAliasDeclarationContext, 0) as TypeAliasDeclarationContext;
	}
    public get ruleIndex(): number {
    	return DdsIdlParser.RULE_typeDeclaration;
	}
	public enterRule(listener: DdsIdlListener): void {
	    if(listener.enterTypeDeclaration) {
	 		listener.enterTypeDeclaration(this);
		}
	}
	public exitRule(listener: DdsIdlListener): void {
	    if(listener.exitTypeDeclaration) {
	 		listener.exitTypeDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DdsIdlVisitor<Result>): Result {
		if (visitor.visitTypeDeclaration) {
			return visitor.visitTypeDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeSpecificationContext extends ParserRuleContext {
	constructor(parser?: DdsIdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public simpleTypeSpecification(): SimpleTypeSpecificationContext {
		return this.getTypedRuleContext(SimpleTypeSpecificationContext, 0) as SimpleTypeSpecificationContext;
	}
	public templateTypeSpecification(): TemplateTypeSpecificationContext {
		return this.getTypedRuleContext(TemplateTypeSpecificationContext, 0) as TemplateTypeSpecificationContext;
	}
    public get ruleIndex(): number {
    	return DdsIdlParser.RULE_typeSpecification;
	}
	public enterRule(listener: DdsIdlListener): void {
	    if(listener.enterTypeSpecification) {
	 		listener.enterTypeSpecification(this);
		}
	}
	public exitRule(listener: DdsIdlListener): void {
	    if(listener.exitTypeSpecification) {
	 		listener.exitTypeSpecification(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DdsIdlVisitor<Result>): Result {
		if (visitor.visitTypeSpecification) {
			return visitor.visitTypeSpecification(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SimpleTypeSpecificationContext extends ParserRuleContext {
	constructor(parser?: DdsIdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public baseTypeSpecification(): BaseTypeSpecificationContext {
		return this.getTypedRuleContext(BaseTypeSpecificationContext, 0) as BaseTypeSpecificationContext;
	}
	public scopedName(): ScopedNameContext {
		return this.getTypedRuleContext(ScopedNameContext, 0) as ScopedNameContext;
	}
    public get ruleIndex(): number {
    	return DdsIdlParser.RULE_simpleTypeSpecification;
	}
	public enterRule(listener: DdsIdlListener): void {
	    if(listener.enterSimpleTypeSpecification) {
	 		listener.enterSimpleTypeSpecification(this);
		}
	}
	public exitRule(listener: DdsIdlListener): void {
	    if(listener.exitSimpleTypeSpecification) {
	 		listener.exitSimpleTypeSpecification(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DdsIdlVisitor<Result>): Result {
		if (visitor.visitSimpleTypeSpecification) {
			return visitor.visitSimpleTypeSpecification(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BaseTypeSpecificationContext extends ParserRuleContext {
	constructor(parser?: DdsIdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public integerType(): IntegerTypeContext {
		return this.getTypedRuleContext(IntegerTypeContext, 0) as IntegerTypeContext;
	}
	public floatingPointType(): FloatingPointTypeContext {
		return this.getTypedRuleContext(FloatingPointTypeContext, 0) as FloatingPointTypeContext;
	}
	public charType(): CharTypeContext {
		return this.getTypedRuleContext(CharTypeContext, 0) as CharTypeContext;
	}
	public wideCharType(): WideCharTypeContext {
		return this.getTypedRuleContext(WideCharTypeContext, 0) as WideCharTypeContext;
	}
	public booleanType(): BooleanTypeContext {
		return this.getTypedRuleContext(BooleanTypeContext, 0) as BooleanTypeContext;
	}
	public octetType(): OctetTypeContext {
		return this.getTypedRuleContext(OctetTypeContext, 0) as OctetTypeContext;
	}
    public get ruleIndex(): number {
    	return DdsIdlParser.RULE_baseTypeSpecification;
	}
	public enterRule(listener: DdsIdlListener): void {
	    if(listener.enterBaseTypeSpecification) {
	 		listener.enterBaseTypeSpecification(this);
		}
	}
	public exitRule(listener: DdsIdlListener): void {
	    if(listener.exitBaseTypeSpecification) {
	 		listener.exitBaseTypeSpecification(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DdsIdlVisitor<Result>): Result {
		if (visitor.visitBaseTypeSpecification) {
			return visitor.visitBaseTypeSpecification(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FloatingPointTypeContext extends ParserRuleContext {
	constructor(parser?: DdsIdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return DdsIdlParser.RULE_floatingPointType;
	}
	public override copyFrom(ctx: FloatingPointTypeContext): void {
		super.copyFrom(ctx);
	}
}
export class DoublePrecisionFloatingPointTypeContext extends FloatingPointTypeContext {
	constructor(parser: DdsIdlParser, ctx: FloatingPointTypeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public KW_DOUBLE(): TerminalNode {
		return this.getToken(DdsIdlParser.KW_DOUBLE, 0);
	}
	public enterRule(listener: DdsIdlListener): void {
	    if(listener.enterDoublePrecisionFloatingPointType) {
	 		listener.enterDoublePrecisionFloatingPointType(this);
		}
	}
	public exitRule(listener: DdsIdlListener): void {
	    if(listener.exitDoublePrecisionFloatingPointType) {
	 		listener.exitDoublePrecisionFloatingPointType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DdsIdlVisitor<Result>): Result {
		if (visitor.visitDoublePrecisionFloatingPointType) {
			return visitor.visitDoublePrecisionFloatingPointType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SinglePrecisionFloatingPointTypeContext extends FloatingPointTypeContext {
	constructor(parser: DdsIdlParser, ctx: FloatingPointTypeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public KW_FLOAT(): TerminalNode {
		return this.getToken(DdsIdlParser.KW_FLOAT, 0);
	}
	public enterRule(listener: DdsIdlListener): void {
	    if(listener.enterSinglePrecisionFloatingPointType) {
	 		listener.enterSinglePrecisionFloatingPointType(this);
		}
	}
	public exitRule(listener: DdsIdlListener): void {
	    if(listener.exitSinglePrecisionFloatingPointType) {
	 		listener.exitSinglePrecisionFloatingPointType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DdsIdlVisitor<Result>): Result {
		if (visitor.visitSinglePrecisionFloatingPointType) {
			return visitor.visitSinglePrecisionFloatingPointType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class QuadPrecisionFloatingPointTypeContext extends FloatingPointTypeContext {
	constructor(parser: DdsIdlParser, ctx: FloatingPointTypeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public KW_LONG(): TerminalNode {
		return this.getToken(DdsIdlParser.KW_LONG, 0);
	}
	public KW_DOUBLE(): TerminalNode {
		return this.getToken(DdsIdlParser.KW_DOUBLE, 0);
	}
	public enterRule(listener: DdsIdlListener): void {
	    if(listener.enterQuadPrecisionFloatingPointType) {
	 		listener.enterQuadPrecisionFloatingPointType(this);
		}
	}
	public exitRule(listener: DdsIdlListener): void {
	    if(listener.exitQuadPrecisionFloatingPointType) {
	 		listener.exitQuadPrecisionFloatingPointType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DdsIdlVisitor<Result>): Result {
		if (visitor.visitQuadPrecisionFloatingPointType) {
			return visitor.visitQuadPrecisionFloatingPointType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IntegerTypeContext extends ParserRuleContext {
	constructor(parser?: DdsIdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public signedIntegerType(): SignedIntegerTypeContext {
		return this.getTypedRuleContext(SignedIntegerTypeContext, 0) as SignedIntegerTypeContext;
	}
	public unsignedIntegerType(): UnsignedIntegerTypeContext {
		return this.getTypedRuleContext(UnsignedIntegerTypeContext, 0) as UnsignedIntegerTypeContext;
	}
    public get ruleIndex(): number {
    	return DdsIdlParser.RULE_integerType;
	}
	public enterRule(listener: DdsIdlListener): void {
	    if(listener.enterIntegerType) {
	 		listener.enterIntegerType(this);
		}
	}
	public exitRule(listener: DdsIdlListener): void {
	    if(listener.exitIntegerType) {
	 		listener.exitIntegerType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DdsIdlVisitor<Result>): Result {
		if (visitor.visitIntegerType) {
			return visitor.visitIntegerType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SignedIntegerTypeContext extends ParserRuleContext {
	constructor(parser?: DdsIdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public signedShortIntegerType(): SignedShortIntegerTypeContext {
		return this.getTypedRuleContext(SignedShortIntegerTypeContext, 0) as SignedShortIntegerTypeContext;
	}
	public signedLongIntegerType(): SignedLongIntegerTypeContext {
		return this.getTypedRuleContext(SignedLongIntegerTypeContext, 0) as SignedLongIntegerTypeContext;
	}
	public signedLongLongIntegerType(): SignedLongLongIntegerTypeContext {
		return this.getTypedRuleContext(SignedLongLongIntegerTypeContext, 0) as SignedLongLongIntegerTypeContext;
	}
	public signedTinyIntegerType(): SignedTinyIntegerTypeContext {
		return this.getTypedRuleContext(SignedTinyIntegerTypeContext, 0) as SignedTinyIntegerTypeContext;
	}
    public get ruleIndex(): number {
    	return DdsIdlParser.RULE_signedIntegerType;
	}
	public enterRule(listener: DdsIdlListener): void {
	    if(listener.enterSignedIntegerType) {
	 		listener.enterSignedIntegerType(this);
		}
	}
	public exitRule(listener: DdsIdlListener): void {
	    if(listener.exitSignedIntegerType) {
	 		listener.exitSignedIntegerType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DdsIdlVisitor<Result>): Result {
		if (visitor.visitSignedIntegerType) {
			return visitor.visitSignedIntegerType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SignedShortIntegerTypeContext extends ParserRuleContext {
	constructor(parser?: DdsIdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public KW_SHORT(): TerminalNode {
		return this.getToken(DdsIdlParser.KW_SHORT, 0);
	}
	public KW_INT16(): TerminalNode {
		return this.getToken(DdsIdlParser.KW_INT16, 0);
	}
    public get ruleIndex(): number {
    	return DdsIdlParser.RULE_signedShortIntegerType;
	}
	public enterRule(listener: DdsIdlListener): void {
	    if(listener.enterSignedShortIntegerType) {
	 		listener.enterSignedShortIntegerType(this);
		}
	}
	public exitRule(listener: DdsIdlListener): void {
	    if(listener.exitSignedShortIntegerType) {
	 		listener.exitSignedShortIntegerType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DdsIdlVisitor<Result>): Result {
		if (visitor.visitSignedShortIntegerType) {
			return visitor.visitSignedShortIntegerType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SignedLongIntegerTypeContext extends ParserRuleContext {
	constructor(parser?: DdsIdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public KW_LONG(): TerminalNode {
		return this.getToken(DdsIdlParser.KW_LONG, 0);
	}
	public KW_INT32(): TerminalNode {
		return this.getToken(DdsIdlParser.KW_INT32, 0);
	}
    public get ruleIndex(): number {
    	return DdsIdlParser.RULE_signedLongIntegerType;
	}
	public enterRule(listener: DdsIdlListener): void {
	    if(listener.enterSignedLongIntegerType) {
	 		listener.enterSignedLongIntegerType(this);
		}
	}
	public exitRule(listener: DdsIdlListener): void {
	    if(listener.exitSignedLongIntegerType) {
	 		listener.exitSignedLongIntegerType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DdsIdlVisitor<Result>): Result {
		if (visitor.visitSignedLongIntegerType) {
			return visitor.visitSignedLongIntegerType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SignedLongLongIntegerTypeContext extends ParserRuleContext {
	constructor(parser?: DdsIdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public KW_LONG_list(): TerminalNode[] {
	    	return this.getTokens(DdsIdlParser.KW_LONG);
	}
	public KW_LONG(i: number): TerminalNode {
		return this.getToken(DdsIdlParser.KW_LONG, i);
	}
	public KW_INT64(): TerminalNode {
		return this.getToken(DdsIdlParser.KW_INT64, 0);
	}
    public get ruleIndex(): number {
    	return DdsIdlParser.RULE_signedLongLongIntegerType;
	}
	public enterRule(listener: DdsIdlListener): void {
	    if(listener.enterSignedLongLongIntegerType) {
	 		listener.enterSignedLongLongIntegerType(this);
		}
	}
	public exitRule(listener: DdsIdlListener): void {
	    if(listener.exitSignedLongLongIntegerType) {
	 		listener.exitSignedLongLongIntegerType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DdsIdlVisitor<Result>): Result {
		if (visitor.visitSignedLongLongIntegerType) {
			return visitor.visitSignedLongLongIntegerType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SignedTinyIntegerTypeContext extends ParserRuleContext {
	constructor(parser?: DdsIdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public KW_INT8(): TerminalNode {
		return this.getToken(DdsIdlParser.KW_INT8, 0);
	}
    public get ruleIndex(): number {
    	return DdsIdlParser.RULE_signedTinyIntegerType;
	}
	public enterRule(listener: DdsIdlListener): void {
	    if(listener.enterSignedTinyIntegerType) {
	 		listener.enterSignedTinyIntegerType(this);
		}
	}
	public exitRule(listener: DdsIdlListener): void {
	    if(listener.exitSignedTinyIntegerType) {
	 		listener.exitSignedTinyIntegerType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DdsIdlVisitor<Result>): Result {
		if (visitor.visitSignedTinyIntegerType) {
			return visitor.visitSignedTinyIntegerType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnsignedIntegerTypeContext extends ParserRuleContext {
	constructor(parser?: DdsIdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public unsignedShortIntegerType(): UnsignedShortIntegerTypeContext {
		return this.getTypedRuleContext(UnsignedShortIntegerTypeContext, 0) as UnsignedShortIntegerTypeContext;
	}
	public unsignedLongIntegerType(): UnsignedLongIntegerTypeContext {
		return this.getTypedRuleContext(UnsignedLongIntegerTypeContext, 0) as UnsignedLongIntegerTypeContext;
	}
	public unsignedLongLongIntegerType(): UnsignedLongLongIntegerTypeContext {
		return this.getTypedRuleContext(UnsignedLongLongIntegerTypeContext, 0) as UnsignedLongLongIntegerTypeContext;
	}
	public unsignedTinyIntegerType(): UnsignedTinyIntegerTypeContext {
		return this.getTypedRuleContext(UnsignedTinyIntegerTypeContext, 0) as UnsignedTinyIntegerTypeContext;
	}
    public get ruleIndex(): number {
    	return DdsIdlParser.RULE_unsignedIntegerType;
	}
	public enterRule(listener: DdsIdlListener): void {
	    if(listener.enterUnsignedIntegerType) {
	 		listener.enterUnsignedIntegerType(this);
		}
	}
	public exitRule(listener: DdsIdlListener): void {
	    if(listener.exitUnsignedIntegerType) {
	 		listener.exitUnsignedIntegerType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DdsIdlVisitor<Result>): Result {
		if (visitor.visitUnsignedIntegerType) {
			return visitor.visitUnsignedIntegerType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnsignedShortIntegerTypeContext extends ParserRuleContext {
	constructor(parser?: DdsIdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public KW_UNSIGNED(): TerminalNode {
		return this.getToken(DdsIdlParser.KW_UNSIGNED, 0);
	}
	public KW_SHORT(): TerminalNode {
		return this.getToken(DdsIdlParser.KW_SHORT, 0);
	}
	public KW_UINT16(): TerminalNode {
		return this.getToken(DdsIdlParser.KW_UINT16, 0);
	}
    public get ruleIndex(): number {
    	return DdsIdlParser.RULE_unsignedShortIntegerType;
	}
	public enterRule(listener: DdsIdlListener): void {
	    if(listener.enterUnsignedShortIntegerType) {
	 		listener.enterUnsignedShortIntegerType(this);
		}
	}
	public exitRule(listener: DdsIdlListener): void {
	    if(listener.exitUnsignedShortIntegerType) {
	 		listener.exitUnsignedShortIntegerType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DdsIdlVisitor<Result>): Result {
		if (visitor.visitUnsignedShortIntegerType) {
			return visitor.visitUnsignedShortIntegerType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnsignedLongIntegerTypeContext extends ParserRuleContext {
	constructor(parser?: DdsIdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public KW_UNSIGNED(): TerminalNode {
		return this.getToken(DdsIdlParser.KW_UNSIGNED, 0);
	}
	public KW_LONG(): TerminalNode {
		return this.getToken(DdsIdlParser.KW_LONG, 0);
	}
	public KW_UINT32(): TerminalNode {
		return this.getToken(DdsIdlParser.KW_UINT32, 0);
	}
    public get ruleIndex(): number {
    	return DdsIdlParser.RULE_unsignedLongIntegerType;
	}
	public enterRule(listener: DdsIdlListener): void {
	    if(listener.enterUnsignedLongIntegerType) {
	 		listener.enterUnsignedLongIntegerType(this);
		}
	}
	public exitRule(listener: DdsIdlListener): void {
	    if(listener.exitUnsignedLongIntegerType) {
	 		listener.exitUnsignedLongIntegerType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DdsIdlVisitor<Result>): Result {
		if (visitor.visitUnsignedLongIntegerType) {
			return visitor.visitUnsignedLongIntegerType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnsignedLongLongIntegerTypeContext extends ParserRuleContext {
	constructor(parser?: DdsIdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public KW_UNSIGNED(): TerminalNode {
		return this.getToken(DdsIdlParser.KW_UNSIGNED, 0);
	}
	public KW_LONG_list(): TerminalNode[] {
	    	return this.getTokens(DdsIdlParser.KW_LONG);
	}
	public KW_LONG(i: number): TerminalNode {
		return this.getToken(DdsIdlParser.KW_LONG, i);
	}
	public KW_UINT64(): TerminalNode {
		return this.getToken(DdsIdlParser.KW_UINT64, 0);
	}
    public get ruleIndex(): number {
    	return DdsIdlParser.RULE_unsignedLongLongIntegerType;
	}
	public enterRule(listener: DdsIdlListener): void {
	    if(listener.enterUnsignedLongLongIntegerType) {
	 		listener.enterUnsignedLongLongIntegerType(this);
		}
	}
	public exitRule(listener: DdsIdlListener): void {
	    if(listener.exitUnsignedLongLongIntegerType) {
	 		listener.exitUnsignedLongLongIntegerType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DdsIdlVisitor<Result>): Result {
		if (visitor.visitUnsignedLongLongIntegerType) {
			return visitor.visitUnsignedLongLongIntegerType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnsignedTinyIntegerTypeContext extends ParserRuleContext {
	constructor(parser?: DdsIdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public KW_UINT8(): TerminalNode {
		return this.getToken(DdsIdlParser.KW_UINT8, 0);
	}
    public get ruleIndex(): number {
    	return DdsIdlParser.RULE_unsignedTinyIntegerType;
	}
	public enterRule(listener: DdsIdlListener): void {
	    if(listener.enterUnsignedTinyIntegerType) {
	 		listener.enterUnsignedTinyIntegerType(this);
		}
	}
	public exitRule(listener: DdsIdlListener): void {
	    if(listener.exitUnsignedTinyIntegerType) {
	 		listener.exitUnsignedTinyIntegerType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DdsIdlVisitor<Result>): Result {
		if (visitor.visitUnsignedTinyIntegerType) {
			return visitor.visitUnsignedTinyIntegerType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CharTypeContext extends ParserRuleContext {
	constructor(parser?: DdsIdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public KW_CHAR(): TerminalNode {
		return this.getToken(DdsIdlParser.KW_CHAR, 0);
	}
    public get ruleIndex(): number {
    	return DdsIdlParser.RULE_charType;
	}
	public enterRule(listener: DdsIdlListener): void {
	    if(listener.enterCharType) {
	 		listener.enterCharType(this);
		}
	}
	public exitRule(listener: DdsIdlListener): void {
	    if(listener.exitCharType) {
	 		listener.exitCharType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DdsIdlVisitor<Result>): Result {
		if (visitor.visitCharType) {
			return visitor.visitCharType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WideCharTypeContext extends ParserRuleContext {
	constructor(parser?: DdsIdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public KW_WCHAR(): TerminalNode {
		return this.getToken(DdsIdlParser.KW_WCHAR, 0);
	}
    public get ruleIndex(): number {
    	return DdsIdlParser.RULE_wideCharType;
	}
	public enterRule(listener: DdsIdlListener): void {
	    if(listener.enterWideCharType) {
	 		listener.enterWideCharType(this);
		}
	}
	public exitRule(listener: DdsIdlListener): void {
	    if(listener.exitWideCharType) {
	 		listener.exitWideCharType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DdsIdlVisitor<Result>): Result {
		if (visitor.visitWideCharType) {
			return visitor.visitWideCharType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BooleanTypeContext extends ParserRuleContext {
	constructor(parser?: DdsIdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public KW_BOOLEAN(): TerminalNode {
		return this.getToken(DdsIdlParser.KW_BOOLEAN, 0);
	}
    public get ruleIndex(): number {
    	return DdsIdlParser.RULE_booleanType;
	}
	public enterRule(listener: DdsIdlListener): void {
	    if(listener.enterBooleanType) {
	 		listener.enterBooleanType(this);
		}
	}
	public exitRule(listener: DdsIdlListener): void {
	    if(listener.exitBooleanType) {
	 		listener.exitBooleanType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DdsIdlVisitor<Result>): Result {
		if (visitor.visitBooleanType) {
			return visitor.visitBooleanType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OctetTypeContext extends ParserRuleContext {
	constructor(parser?: DdsIdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public KW_OCTET(): TerminalNode {
		return this.getToken(DdsIdlParser.KW_OCTET, 0);
	}
    public get ruleIndex(): number {
    	return DdsIdlParser.RULE_octetType;
	}
	public enterRule(listener: DdsIdlListener): void {
	    if(listener.enterOctetType) {
	 		listener.enterOctetType(this);
		}
	}
	public exitRule(listener: DdsIdlListener): void {
	    if(listener.exitOctetType) {
	 		listener.exitOctetType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DdsIdlVisitor<Result>): Result {
		if (visitor.visitOctetType) {
			return visitor.visitOctetType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TemplateTypeSpecificationContext extends ParserRuleContext {
	constructor(parser?: DdsIdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public sequenceType(): SequenceTypeContext {
		return this.getTypedRuleContext(SequenceTypeContext, 0) as SequenceTypeContext;
	}
	public stringType(): StringTypeContext {
		return this.getTypedRuleContext(StringTypeContext, 0) as StringTypeContext;
	}
	public wideStringType(): WideStringTypeContext {
		return this.getTypedRuleContext(WideStringTypeContext, 0) as WideStringTypeContext;
	}
	public fixedPointType(): FixedPointTypeContext {
		return this.getTypedRuleContext(FixedPointTypeContext, 0) as FixedPointTypeContext;
	}
	public mapType(): MapTypeContext {
		return this.getTypedRuleContext(MapTypeContext, 0) as MapTypeContext;
	}
    public get ruleIndex(): number {
    	return DdsIdlParser.RULE_templateTypeSpecification;
	}
	public enterRule(listener: DdsIdlListener): void {
	    if(listener.enterTemplateTypeSpecification) {
	 		listener.enterTemplateTypeSpecification(this);
		}
	}
	public exitRule(listener: DdsIdlListener): void {
	    if(listener.exitTemplateTypeSpecification) {
	 		listener.exitTemplateTypeSpecification(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DdsIdlVisitor<Result>): Result {
		if (visitor.visitTemplateTypeSpecification) {
			return visitor.visitTemplateTypeSpecification(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SequenceTypeContext extends ParserRuleContext {
	constructor(parser?: DdsIdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return DdsIdlParser.RULE_sequenceType;
	}
	public override copyFrom(ctx: SequenceTypeContext): void {
		super.copyFrom(ctx);
	}
}
export class BoundedSequenceTypeContext extends SequenceTypeContext {
	constructor(parser: DdsIdlParser, ctx: SequenceTypeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public KW_SEQUENCE(): TerminalNode {
		return this.getToken(DdsIdlParser.KW_SEQUENCE, 0);
	}
	public LEFT_ANGLE(): TerminalNode {
		return this.getToken(DdsIdlParser.LEFT_ANGLE, 0);
	}
	public annotationApplications(): AnnotationApplicationsContext {
		return this.getTypedRuleContext(AnnotationApplicationsContext, 0) as AnnotationApplicationsContext;
	}
	public typeSpecification(): TypeSpecificationContext {
		return this.getTypedRuleContext(TypeSpecificationContext, 0) as TypeSpecificationContext;
	}
	public COMMA(): TerminalNode {
		return this.getToken(DdsIdlParser.COMMA, 0);
	}
	public positiveIntegerConstant(): PositiveIntegerConstantContext {
		return this.getTypedRuleContext(PositiveIntegerConstantContext, 0) as PositiveIntegerConstantContext;
	}
	public RIGHT_ANGLE(): TerminalNode {
		return this.getToken(DdsIdlParser.RIGHT_ANGLE, 0);
	}
	public enterRule(listener: DdsIdlListener): void {
	    if(listener.enterBoundedSequenceType) {
	 		listener.enterBoundedSequenceType(this);
		}
	}
	public exitRule(listener: DdsIdlListener): void {
	    if(listener.exitBoundedSequenceType) {
	 		listener.exitBoundedSequenceType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DdsIdlVisitor<Result>): Result {
		if (visitor.visitBoundedSequenceType) {
			return visitor.visitBoundedSequenceType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UnboundedSequenceTypeContext extends SequenceTypeContext {
	constructor(parser: DdsIdlParser, ctx: SequenceTypeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public KW_SEQUENCE(): TerminalNode {
		return this.getToken(DdsIdlParser.KW_SEQUENCE, 0);
	}
	public LEFT_ANGLE(): TerminalNode {
		return this.getToken(DdsIdlParser.LEFT_ANGLE, 0);
	}
	public annotationApplications(): AnnotationApplicationsContext {
		return this.getTypedRuleContext(AnnotationApplicationsContext, 0) as AnnotationApplicationsContext;
	}
	public typeSpecification(): TypeSpecificationContext {
		return this.getTypedRuleContext(TypeSpecificationContext, 0) as TypeSpecificationContext;
	}
	public RIGHT_ANGLE(): TerminalNode {
		return this.getToken(DdsIdlParser.RIGHT_ANGLE, 0);
	}
	public enterRule(listener: DdsIdlListener): void {
	    if(listener.enterUnboundedSequenceType) {
	 		listener.enterUnboundedSequenceType(this);
		}
	}
	public exitRule(listener: DdsIdlListener): void {
	    if(listener.exitUnboundedSequenceType) {
	 		listener.exitUnboundedSequenceType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DdsIdlVisitor<Result>): Result {
		if (visitor.visitUnboundedSequenceType) {
			return visitor.visitUnboundedSequenceType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StringTypeContext extends ParserRuleContext {
	constructor(parser?: DdsIdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return DdsIdlParser.RULE_stringType;
	}
	public override copyFrom(ctx: StringTypeContext): void {
		super.copyFrom(ctx);
	}
}
export class BoundedStringTypeContext extends StringTypeContext {
	constructor(parser: DdsIdlParser, ctx: StringTypeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public KW_STRING(): TerminalNode {
		return this.getToken(DdsIdlParser.KW_STRING, 0);
	}
	public LEFT_ANGLE(): TerminalNode {
		return this.getToken(DdsIdlParser.LEFT_ANGLE, 0);
	}
	public positiveIntegerConstant(): PositiveIntegerConstantContext {
		return this.getTypedRuleContext(PositiveIntegerConstantContext, 0) as PositiveIntegerConstantContext;
	}
	public RIGHT_ANGLE(): TerminalNode {
		return this.getToken(DdsIdlParser.RIGHT_ANGLE, 0);
	}
	public enterRule(listener: DdsIdlListener): void {
	    if(listener.enterBoundedStringType) {
	 		listener.enterBoundedStringType(this);
		}
	}
	public exitRule(listener: DdsIdlListener): void {
	    if(listener.exitBoundedStringType) {
	 		listener.exitBoundedStringType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DdsIdlVisitor<Result>): Result {
		if (visitor.visitBoundedStringType) {
			return visitor.visitBoundedStringType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UnboundedStringTypeContext extends StringTypeContext {
	constructor(parser: DdsIdlParser, ctx: StringTypeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public KW_STRING(): TerminalNode {
		return this.getToken(DdsIdlParser.KW_STRING, 0);
	}
	public enterRule(listener: DdsIdlListener): void {
	    if(listener.enterUnboundedStringType) {
	 		listener.enterUnboundedStringType(this);
		}
	}
	public exitRule(listener: DdsIdlListener): void {
	    if(listener.exitUnboundedStringType) {
	 		listener.exitUnboundedStringType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DdsIdlVisitor<Result>): Result {
		if (visitor.visitUnboundedStringType) {
			return visitor.visitUnboundedStringType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WideStringTypeContext extends ParserRuleContext {
	constructor(parser?: DdsIdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return DdsIdlParser.RULE_wideStringType;
	}
	public override copyFrom(ctx: WideStringTypeContext): void {
		super.copyFrom(ctx);
	}
}
export class UnboundedWideStringTypeContext extends WideStringTypeContext {
	constructor(parser: DdsIdlParser, ctx: WideStringTypeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public KW_WSTRING(): TerminalNode {
		return this.getToken(DdsIdlParser.KW_WSTRING, 0);
	}
	public enterRule(listener: DdsIdlListener): void {
	    if(listener.enterUnboundedWideStringType) {
	 		listener.enterUnboundedWideStringType(this);
		}
	}
	public exitRule(listener: DdsIdlListener): void {
	    if(listener.exitUnboundedWideStringType) {
	 		listener.exitUnboundedWideStringType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DdsIdlVisitor<Result>): Result {
		if (visitor.visitUnboundedWideStringType) {
			return visitor.visitUnboundedWideStringType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BoundedWideStringTypeContext extends WideStringTypeContext {
	constructor(parser: DdsIdlParser, ctx: WideStringTypeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public KW_WSTRING(): TerminalNode {
		return this.getToken(DdsIdlParser.KW_WSTRING, 0);
	}
	public LEFT_ANGLE(): TerminalNode {
		return this.getToken(DdsIdlParser.LEFT_ANGLE, 0);
	}
	public positiveIntegerConstant(): PositiveIntegerConstantContext {
		return this.getTypedRuleContext(PositiveIntegerConstantContext, 0) as PositiveIntegerConstantContext;
	}
	public RIGHT_ANGLE(): TerminalNode {
		return this.getToken(DdsIdlParser.RIGHT_ANGLE, 0);
	}
	public enterRule(listener: DdsIdlListener): void {
	    if(listener.enterBoundedWideStringType) {
	 		listener.enterBoundedWideStringType(this);
		}
	}
	public exitRule(listener: DdsIdlListener): void {
	    if(listener.exitBoundedWideStringType) {
	 		listener.exitBoundedWideStringType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DdsIdlVisitor<Result>): Result {
		if (visitor.visitBoundedWideStringType) {
			return visitor.visitBoundedWideStringType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FixedPointTypeContext extends ParserRuleContext {
	constructor(parser?: DdsIdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public KW_FIXED(): TerminalNode {
		return this.getToken(DdsIdlParser.KW_FIXED, 0);
	}
	public LEFT_ANGLE(): TerminalNode {
		return this.getToken(DdsIdlParser.LEFT_ANGLE, 0);
	}
	public positiveIntegerConstant_list(): PositiveIntegerConstantContext[] {
		return this.getTypedRuleContexts(PositiveIntegerConstantContext) as PositiveIntegerConstantContext[];
	}
	public positiveIntegerConstant(i: number): PositiveIntegerConstantContext {
		return this.getTypedRuleContext(PositiveIntegerConstantContext, i) as PositiveIntegerConstantContext;
	}
	public COMMA(): TerminalNode {
		return this.getToken(DdsIdlParser.COMMA, 0);
	}
	public RIGHT_ANGLE(): TerminalNode {
		return this.getToken(DdsIdlParser.RIGHT_ANGLE, 0);
	}
    public get ruleIndex(): number {
    	return DdsIdlParser.RULE_fixedPointType;
	}
	public enterRule(listener: DdsIdlListener): void {
	    if(listener.enterFixedPointType) {
	 		listener.enterFixedPointType(this);
		}
	}
	public exitRule(listener: DdsIdlListener): void {
	    if(listener.exitFixedPointType) {
	 		listener.exitFixedPointType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DdsIdlVisitor<Result>): Result {
		if (visitor.visitFixedPointType) {
			return visitor.visitFixedPointType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FixedPointConstantTypeContext extends ParserRuleContext {
	constructor(parser?: DdsIdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public KW_FIXED(): TerminalNode {
		return this.getToken(DdsIdlParser.KW_FIXED, 0);
	}
    public get ruleIndex(): number {
    	return DdsIdlParser.RULE_fixedPointConstantType;
	}
	public enterRule(listener: DdsIdlListener): void {
	    if(listener.enterFixedPointConstantType) {
	 		listener.enterFixedPointConstantType(this);
		}
	}
	public exitRule(listener: DdsIdlListener): void {
	    if(listener.exitFixedPointConstantType) {
	 		listener.exitFixedPointConstantType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DdsIdlVisitor<Result>): Result {
		if (visitor.visitFixedPointConstantType) {
			return visitor.visitFixedPointConstantType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstructedTypeDeclarationContext extends ParserRuleContext {
	constructor(parser?: DdsIdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public structureDeclaration(): StructureDeclarationContext {
		return this.getTypedRuleContext(StructureDeclarationContext, 0) as StructureDeclarationContext;
	}
	public unionDeclaration(): UnionDeclarationContext {
		return this.getTypedRuleContext(UnionDeclarationContext, 0) as UnionDeclarationContext;
	}
	public enumDeclaration(): EnumDeclarationContext {
		return this.getTypedRuleContext(EnumDeclarationContext, 0) as EnumDeclarationContext;
	}
	public bitsetDeclaration(): BitsetDeclarationContext {
		return this.getTypedRuleContext(BitsetDeclarationContext, 0) as BitsetDeclarationContext;
	}
	public bitmaskDeclaration(): BitmaskDeclarationContext {
		return this.getTypedRuleContext(BitmaskDeclarationContext, 0) as BitmaskDeclarationContext;
	}
    public get ruleIndex(): number {
    	return DdsIdlParser.RULE_constructedTypeDeclaration;
	}
	public enterRule(listener: DdsIdlListener): void {
	    if(listener.enterConstructedTypeDeclaration) {
	 		listener.enterConstructedTypeDeclaration(this);
		}
	}
	public exitRule(listener: DdsIdlListener): void {
	    if(listener.exitConstructedTypeDeclaration) {
	 		listener.exitConstructedTypeDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DdsIdlVisitor<Result>): Result {
		if (visitor.visitConstructedTypeDeclaration) {
			return visitor.visitConstructedTypeDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MapTypeContext extends ParserRuleContext {
	constructor(parser?: DdsIdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return DdsIdlParser.RULE_mapType;
	}
	public override copyFrom(ctx: MapTypeContext): void {
		super.copyFrom(ctx);
	}
}
export class BoundedMapTypeContext extends MapTypeContext {
	constructor(parser: DdsIdlParser, ctx: MapTypeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public KW_MAP(): TerminalNode {
		return this.getToken(DdsIdlParser.KW_MAP, 0);
	}
	public LEFT_ANGLE(): TerminalNode {
		return this.getToken(DdsIdlParser.LEFT_ANGLE, 0);
	}
	public typeSpecification_list(): TypeSpecificationContext[] {
		return this.getTypedRuleContexts(TypeSpecificationContext) as TypeSpecificationContext[];
	}
	public typeSpecification(i: number): TypeSpecificationContext {
		return this.getTypedRuleContext(TypeSpecificationContext, i) as TypeSpecificationContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(DdsIdlParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(DdsIdlParser.COMMA, i);
	}
	public positiveIntegerConstant(): PositiveIntegerConstantContext {
		return this.getTypedRuleContext(PositiveIntegerConstantContext, 0) as PositiveIntegerConstantContext;
	}
	public RIGHT_ANGLE(): TerminalNode {
		return this.getToken(DdsIdlParser.RIGHT_ANGLE, 0);
	}
	public enterRule(listener: DdsIdlListener): void {
	    if(listener.enterBoundedMapType) {
	 		listener.enterBoundedMapType(this);
		}
	}
	public exitRule(listener: DdsIdlListener): void {
	    if(listener.exitBoundedMapType) {
	 		listener.exitBoundedMapType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DdsIdlVisitor<Result>): Result {
		if (visitor.visitBoundedMapType) {
			return visitor.visitBoundedMapType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UnboundedMapTypeContext extends MapTypeContext {
	constructor(parser: DdsIdlParser, ctx: MapTypeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public KW_MAP(): TerminalNode {
		return this.getToken(DdsIdlParser.KW_MAP, 0);
	}
	public LEFT_ANGLE(): TerminalNode {
		return this.getToken(DdsIdlParser.LEFT_ANGLE, 0);
	}
	public typeSpecification_list(): TypeSpecificationContext[] {
		return this.getTypedRuleContexts(TypeSpecificationContext) as TypeSpecificationContext[];
	}
	public typeSpecification(i: number): TypeSpecificationContext {
		return this.getTypedRuleContext(TypeSpecificationContext, i) as TypeSpecificationContext;
	}
	public COMMA(): TerminalNode {
		return this.getToken(DdsIdlParser.COMMA, 0);
	}
	public RIGHT_ANGLE(): TerminalNode {
		return this.getToken(DdsIdlParser.RIGHT_ANGLE, 0);
	}
	public enterRule(listener: DdsIdlListener): void {
	    if(listener.enterUnboundedMapType) {
	 		listener.enterUnboundedMapType(this);
		}
	}
	public exitRule(listener: DdsIdlListener): void {
	    if(listener.exitUnboundedMapType) {
	 		listener.exitUnboundedMapType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DdsIdlVisitor<Result>): Result {
		if (visitor.visitUnboundedMapType) {
			return visitor.visitUnboundedMapType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BitsetDeclarationContext extends ParserRuleContext {
	constructor(parser?: DdsIdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public KW_BITSET(): TerminalNode {
		return this.getToken(DdsIdlParser.KW_BITSET, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public COLON(): TerminalNode {
		return this.getToken(DdsIdlParser.COLON, 0);
	}
	public scopedName(): ScopedNameContext {
		return this.getTypedRuleContext(ScopedNameContext, 0) as ScopedNameContext;
	}
	public LEFT_BRACE(): TerminalNode {
		return this.getToken(DdsIdlParser.LEFT_BRACE, 0);
	}
	public RIGHT_BRACE(): TerminalNode {
		return this.getToken(DdsIdlParser.RIGHT_BRACE, 0);
	}
	public bitfield_list(): BitfieldContext[] {
		return this.getTypedRuleContexts(BitfieldContext) as BitfieldContext[];
	}
	public bitfield(i: number): BitfieldContext {
		return this.getTypedRuleContext(BitfieldContext, i) as BitfieldContext;
	}
    public get ruleIndex(): number {
    	return DdsIdlParser.RULE_bitsetDeclaration;
	}
	public enterRule(listener: DdsIdlListener): void {
	    if(listener.enterBitsetDeclaration) {
	 		listener.enterBitsetDeclaration(this);
		}
	}
	public exitRule(listener: DdsIdlListener): void {
	    if(listener.exitBitsetDeclaration) {
	 		listener.exitBitsetDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DdsIdlVisitor<Result>): Result {
		if (visitor.visitBitsetDeclaration) {
			return visitor.visitBitsetDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BitfieldContext extends ParserRuleContext {
	constructor(parser?: DdsIdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public bitfieldSpecifier(): BitfieldSpecifierContext {
		return this.getTypedRuleContext(BitfieldSpecifierContext, 0) as BitfieldSpecifierContext;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(DdsIdlParser.SEMICOLON, 0);
	}
    public get ruleIndex(): number {
    	return DdsIdlParser.RULE_bitfield;
	}
	public enterRule(listener: DdsIdlListener): void {
	    if(listener.enterBitfield) {
	 		listener.enterBitfield(this);
		}
	}
	public exitRule(listener: DdsIdlListener): void {
	    if(listener.exitBitfield) {
	 		listener.exitBitfield(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DdsIdlVisitor<Result>): Result {
		if (visitor.visitBitfield) {
			return visitor.visitBitfield(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BitfieldSpecifierContext extends ParserRuleContext {
	constructor(parser?: DdsIdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public annotationApplications(): AnnotationApplicationsContext {
		return this.getTypedRuleContext(AnnotationApplicationsContext, 0) as AnnotationApplicationsContext;
	}
	public KW_BITFIELD(): TerminalNode {
		return this.getToken(DdsIdlParser.KW_BITFIELD, 0);
	}
	public LEFT_ANGLE(): TerminalNode {
		return this.getToken(DdsIdlParser.LEFT_ANGLE, 0);
	}
	public positiveIntegerConstant(): PositiveIntegerConstantContext {
		return this.getTypedRuleContext(PositiveIntegerConstantContext, 0) as PositiveIntegerConstantContext;
	}
	public RIGHT_ANGLE(): TerminalNode {
		return this.getToken(DdsIdlParser.RIGHT_ANGLE, 0);
	}
	public COMMA(): TerminalNode {
		return this.getToken(DdsIdlParser.COMMA, 0);
	}
	public bitfieldDestinationType(): BitfieldDestinationTypeContext {
		return this.getTypedRuleContext(BitfieldDestinationTypeContext, 0) as BitfieldDestinationTypeContext;
	}
    public get ruleIndex(): number {
    	return DdsIdlParser.RULE_bitfieldSpecifier;
	}
	public enterRule(listener: DdsIdlListener): void {
	    if(listener.enterBitfieldSpecifier) {
	 		listener.enterBitfieldSpecifier(this);
		}
	}
	public exitRule(listener: DdsIdlListener): void {
	    if(listener.exitBitfieldSpecifier) {
	 		listener.exitBitfieldSpecifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DdsIdlVisitor<Result>): Result {
		if (visitor.visitBitfieldSpecifier) {
			return visitor.visitBitfieldSpecifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BitfieldDestinationTypeContext extends ParserRuleContext {
	constructor(parser?: DdsIdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public booleanType(): BooleanTypeContext {
		return this.getTypedRuleContext(BooleanTypeContext, 0) as BooleanTypeContext;
	}
	public octetType(): OctetTypeContext {
		return this.getTypedRuleContext(OctetTypeContext, 0) as OctetTypeContext;
	}
	public integerType(): IntegerTypeContext {
		return this.getTypedRuleContext(IntegerTypeContext, 0) as IntegerTypeContext;
	}
    public get ruleIndex(): number {
    	return DdsIdlParser.RULE_bitfieldDestinationType;
	}
	public enterRule(listener: DdsIdlListener): void {
	    if(listener.enterBitfieldDestinationType) {
	 		listener.enterBitfieldDestinationType(this);
		}
	}
	public exitRule(listener: DdsIdlListener): void {
	    if(listener.exitBitfieldDestinationType) {
	 		listener.exitBitfieldDestinationType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DdsIdlVisitor<Result>): Result {
		if (visitor.visitBitfieldDestinationType) {
			return visitor.visitBitfieldDestinationType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BitmaskDeclarationContext extends ParserRuleContext {
	constructor(parser?: DdsIdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public KW_BITMASK(): TerminalNode {
		return this.getToken(DdsIdlParser.KW_BITMASK, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public bitValues(): BitValuesContext {
		return this.getTypedRuleContext(BitValuesContext, 0) as BitValuesContext;
	}
    public get ruleIndex(): number {
    	return DdsIdlParser.RULE_bitmaskDeclaration;
	}
	public enterRule(listener: DdsIdlListener): void {
	    if(listener.enterBitmaskDeclaration) {
	 		listener.enterBitmaskDeclaration(this);
		}
	}
	public exitRule(listener: DdsIdlListener): void {
	    if(listener.exitBitmaskDeclaration) {
	 		listener.exitBitmaskDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DdsIdlVisitor<Result>): Result {
		if (visitor.visitBitmaskDeclaration) {
			return visitor.visitBitmaskDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BitValuesContext extends ParserRuleContext {
	constructor(parser?: DdsIdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public bitValue_list(): BitValueContext[] {
		return this.getTypedRuleContexts(BitValueContext) as BitValueContext[];
	}
	public bitValue(i: number): BitValueContext {
		return this.getTypedRuleContext(BitValueContext, i) as BitValueContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(DdsIdlParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(DdsIdlParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return DdsIdlParser.RULE_bitValues;
	}
	public enterRule(listener: DdsIdlListener): void {
	    if(listener.enterBitValues) {
	 		listener.enterBitValues(this);
		}
	}
	public exitRule(listener: DdsIdlListener): void {
	    if(listener.exitBitValues) {
	 		listener.exitBitValues(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DdsIdlVisitor<Result>): Result {
		if (visitor.visitBitValues) {
			return visitor.visitBitValues(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BitValueContext extends ParserRuleContext {
	constructor(parser?: DdsIdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
    public get ruleIndex(): number {
    	return DdsIdlParser.RULE_bitValue;
	}
	public enterRule(listener: DdsIdlListener): void {
	    if(listener.enterBitValue) {
	 		listener.enterBitValue(this);
		}
	}
	public exitRule(listener: DdsIdlListener): void {
	    if(listener.exitBitValue) {
	 		listener.exitBitValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DdsIdlVisitor<Result>): Result {
		if (visitor.visitBitValue) {
			return visitor.visitBitValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StructureDeclarationContext extends ParserRuleContext {
	constructor(parser?: DdsIdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public structureDefinition(): StructureDefinitionContext {
		return this.getTypedRuleContext(StructureDefinitionContext, 0) as StructureDefinitionContext;
	}
	public structureForwardDeclaration(): StructureForwardDeclarationContext {
		return this.getTypedRuleContext(StructureForwardDeclarationContext, 0) as StructureForwardDeclarationContext;
	}
    public get ruleIndex(): number {
    	return DdsIdlParser.RULE_structureDeclaration;
	}
	public enterRule(listener: DdsIdlListener): void {
	    if(listener.enterStructureDeclaration) {
	 		listener.enterStructureDeclaration(this);
		}
	}
	public exitRule(listener: DdsIdlListener): void {
	    if(listener.exitStructureDeclaration) {
	 		listener.exitStructureDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DdsIdlVisitor<Result>): Result {
		if (visitor.visitStructureDeclaration) {
			return visitor.visitStructureDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StructureDefinitionContext extends ParserRuleContext {
	constructor(parser?: DdsIdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return DdsIdlParser.RULE_structureDefinition;
	}
	public override copyFrom(ctx: StructureDefinitionContext): void {
		super.copyFrom(ctx);
	}
}
export class BasicStructureDefinitionContext extends StructureDefinitionContext {
	constructor(parser: DdsIdlParser, ctx: StructureDefinitionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public KW_STRUCT(): TerminalNode {
		return this.getToken(DdsIdlParser.KW_STRUCT, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public LEFT_BRACE(): TerminalNode {
		return this.getToken(DdsIdlParser.LEFT_BRACE, 0);
	}
	public RIGHT_BRACE(): TerminalNode {
		return this.getToken(DdsIdlParser.RIGHT_BRACE, 0);
	}
	public structMember_list(): StructMemberContext[] {
		return this.getTypedRuleContexts(StructMemberContext) as StructMemberContext[];
	}
	public structMember(i: number): StructMemberContext {
		return this.getTypedRuleContext(StructMemberContext, i) as StructMemberContext;
	}
	public enterRule(listener: DdsIdlListener): void {
	    if(listener.enterBasicStructureDefinition) {
	 		listener.enterBasicStructureDefinition(this);
		}
	}
	public exitRule(listener: DdsIdlListener): void {
	    if(listener.exitBasicStructureDefinition) {
	 		listener.exitBasicStructureDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DdsIdlVisitor<Result>): Result {
		if (visitor.visitBasicStructureDefinition) {
			return visitor.visitBasicStructureDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EmptyStructureDefinitionContext extends StructureDefinitionContext {
	constructor(parser: DdsIdlParser, ctx: StructureDefinitionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public KW_STRUCT(): TerminalNode {
		return this.getToken(DdsIdlParser.KW_STRUCT, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public LEFT_BRACE(): TerminalNode {
		return this.getToken(DdsIdlParser.LEFT_BRACE, 0);
	}
	public RIGHT_BRACE(): TerminalNode {
		return this.getToken(DdsIdlParser.RIGHT_BRACE, 0);
	}
	public enterRule(listener: DdsIdlListener): void {
	    if(listener.enterEmptyStructureDefinition) {
	 		listener.enterEmptyStructureDefinition(this);
		}
	}
	public exitRule(listener: DdsIdlListener): void {
	    if(listener.exitEmptyStructureDefinition) {
	 		listener.exitEmptyStructureDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DdsIdlVisitor<Result>): Result {
		if (visitor.visitEmptyStructureDefinition) {
			return visitor.visitEmptyStructureDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DerivedStructureDefinitionContext extends StructureDefinitionContext {
	constructor(parser: DdsIdlParser, ctx: StructureDefinitionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public KW_STRUCT(): TerminalNode {
		return this.getToken(DdsIdlParser.KW_STRUCT, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public COLON(): TerminalNode {
		return this.getToken(DdsIdlParser.COLON, 0);
	}
	public scopedName(): ScopedNameContext {
		return this.getTypedRuleContext(ScopedNameContext, 0) as ScopedNameContext;
	}
	public LEFT_BRACE(): TerminalNode {
		return this.getToken(DdsIdlParser.LEFT_BRACE, 0);
	}
	public RIGHT_BRACE(): TerminalNode {
		return this.getToken(DdsIdlParser.RIGHT_BRACE, 0);
	}
	public structMember_list(): StructMemberContext[] {
		return this.getTypedRuleContexts(StructMemberContext) as StructMemberContext[];
	}
	public structMember(i: number): StructMemberContext {
		return this.getTypedRuleContext(StructMemberContext, i) as StructMemberContext;
	}
	public enterRule(listener: DdsIdlListener): void {
	    if(listener.enterDerivedStructureDefinition) {
	 		listener.enterDerivedStructureDefinition(this);
		}
	}
	public exitRule(listener: DdsIdlListener): void {
	    if(listener.exitDerivedStructureDefinition) {
	 		listener.exitDerivedStructureDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DdsIdlVisitor<Result>): Result {
		if (visitor.visitDerivedStructureDefinition) {
			return visitor.visitDerivedStructureDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StructMemberContext extends ParserRuleContext {
	constructor(parser?: DdsIdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public annotationApplications(): AnnotationApplicationsContext {
		return this.getTypedRuleContext(AnnotationApplicationsContext, 0) as AnnotationApplicationsContext;
	}
	public typeSpecification(): TypeSpecificationContext {
		return this.getTypedRuleContext(TypeSpecificationContext, 0) as TypeSpecificationContext;
	}
	public annotatableDeclarators(): AnnotatableDeclaratorsContext {
		return this.getTypedRuleContext(AnnotatableDeclaratorsContext, 0) as AnnotatableDeclaratorsContext;
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(DdsIdlParser.SEMICOLON, 0);
	}
    public get ruleIndex(): number {
    	return DdsIdlParser.RULE_structMember;
	}
	public enterRule(listener: DdsIdlListener): void {
	    if(listener.enterStructMember) {
	 		listener.enterStructMember(this);
		}
	}
	public exitRule(listener: DdsIdlListener): void {
	    if(listener.exitStructMember) {
	 		listener.exitStructMember(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DdsIdlVisitor<Result>): Result {
		if (visitor.visitStructMember) {
			return visitor.visitStructMember(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StructureForwardDeclarationContext extends ParserRuleContext {
	constructor(parser?: DdsIdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public KW_STRUCT(): TerminalNode {
		return this.getToken(DdsIdlParser.KW_STRUCT, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
    public get ruleIndex(): number {
    	return DdsIdlParser.RULE_structureForwardDeclaration;
	}
	public enterRule(listener: DdsIdlListener): void {
	    if(listener.enterStructureForwardDeclaration) {
	 		listener.enterStructureForwardDeclaration(this);
		}
	}
	public exitRule(listener: DdsIdlListener): void {
	    if(listener.exitStructureForwardDeclaration) {
	 		listener.exitStructureForwardDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DdsIdlVisitor<Result>): Result {
		if (visitor.visitStructureForwardDeclaration) {
			return visitor.visitStructureForwardDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnionDeclarationContext extends ParserRuleContext {
	constructor(parser?: DdsIdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public unionDefinition(): UnionDefinitionContext {
		return this.getTypedRuleContext(UnionDefinitionContext, 0) as UnionDefinitionContext;
	}
	public unionForwardDeclaration(): UnionForwardDeclarationContext {
		return this.getTypedRuleContext(UnionForwardDeclarationContext, 0) as UnionForwardDeclarationContext;
	}
    public get ruleIndex(): number {
    	return DdsIdlParser.RULE_unionDeclaration;
	}
	public enterRule(listener: DdsIdlListener): void {
	    if(listener.enterUnionDeclaration) {
	 		listener.enterUnionDeclaration(this);
		}
	}
	public exitRule(listener: DdsIdlListener): void {
	    if(listener.exitUnionDeclaration) {
	 		listener.exitUnionDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DdsIdlVisitor<Result>): Result {
		if (visitor.visitUnionDeclaration) {
			return visitor.visitUnionDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnionDefinitionContext extends ParserRuleContext {
	constructor(parser?: DdsIdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public KW_UNION(): TerminalNode {
		return this.getToken(DdsIdlParser.KW_UNION, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public KW_SWITCH(): TerminalNode {
		return this.getToken(DdsIdlParser.KW_SWITCH, 0);
	}
	public LEFT_PAREN(): TerminalNode {
		return this.getToken(DdsIdlParser.LEFT_PAREN, 0);
	}
	public annotationApplications(): AnnotationApplicationsContext {
		return this.getTypedRuleContext(AnnotationApplicationsContext, 0) as AnnotationApplicationsContext;
	}
	public switchTypeSpecification(): SwitchTypeSpecificationContext {
		return this.getTypedRuleContext(SwitchTypeSpecificationContext, 0) as SwitchTypeSpecificationContext;
	}
	public RIGHT_PAREN(): TerminalNode {
		return this.getToken(DdsIdlParser.RIGHT_PAREN, 0);
	}
	public LEFT_BRACE(): TerminalNode {
		return this.getToken(DdsIdlParser.LEFT_BRACE, 0);
	}
	public switchBody(): SwitchBodyContext {
		return this.getTypedRuleContext(SwitchBodyContext, 0) as SwitchBodyContext;
	}
	public RIGHT_BRACE(): TerminalNode {
		return this.getToken(DdsIdlParser.RIGHT_BRACE, 0);
	}
    public get ruleIndex(): number {
    	return DdsIdlParser.RULE_unionDefinition;
	}
	public enterRule(listener: DdsIdlListener): void {
	    if(listener.enterUnionDefinition) {
	 		listener.enterUnionDefinition(this);
		}
	}
	public exitRule(listener: DdsIdlListener): void {
	    if(listener.exitUnionDefinition) {
	 		listener.exitUnionDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DdsIdlVisitor<Result>): Result {
		if (visitor.visitUnionDefinition) {
			return visitor.visitUnionDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SwitchTypeSpecificationContext extends ParserRuleContext {
	constructor(parser?: DdsIdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public integerType(): IntegerTypeContext {
		return this.getTypedRuleContext(IntegerTypeContext, 0) as IntegerTypeContext;
	}
	public charType(): CharTypeContext {
		return this.getTypedRuleContext(CharTypeContext, 0) as CharTypeContext;
	}
	public booleanType(): BooleanTypeContext {
		return this.getTypedRuleContext(BooleanTypeContext, 0) as BooleanTypeContext;
	}
	public wideCharType(): WideCharTypeContext {
		return this.getTypedRuleContext(WideCharTypeContext, 0) as WideCharTypeContext;
	}
	public octetType(): OctetTypeContext {
		return this.getTypedRuleContext(OctetTypeContext, 0) as OctetTypeContext;
	}
	public scopedName(): ScopedNameContext {
		return this.getTypedRuleContext(ScopedNameContext, 0) as ScopedNameContext;
	}
    public get ruleIndex(): number {
    	return DdsIdlParser.RULE_switchTypeSpecification;
	}
	public enterRule(listener: DdsIdlListener): void {
	    if(listener.enterSwitchTypeSpecification) {
	 		listener.enterSwitchTypeSpecification(this);
		}
	}
	public exitRule(listener: DdsIdlListener): void {
	    if(listener.exitSwitchTypeSpecification) {
	 		listener.exitSwitchTypeSpecification(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DdsIdlVisitor<Result>): Result {
		if (visitor.visitSwitchTypeSpecification) {
			return visitor.visitSwitchTypeSpecification(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SwitchBodyContext extends ParserRuleContext {
	constructor(parser?: DdsIdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public case__list(): CaseContext[] {
		return this.getTypedRuleContexts(CaseContext) as CaseContext[];
	}
	public case_(i: number): CaseContext {
		return this.getTypedRuleContext(CaseContext, i) as CaseContext;
	}
    public get ruleIndex(): number {
    	return DdsIdlParser.RULE_switchBody;
	}
	public enterRule(listener: DdsIdlListener): void {
	    if(listener.enterSwitchBody) {
	 		listener.enterSwitchBody(this);
		}
	}
	public exitRule(listener: DdsIdlListener): void {
	    if(listener.exitSwitchBody) {
	 		listener.exitSwitchBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DdsIdlVisitor<Result>): Result {
		if (visitor.visitSwitchBody) {
			return visitor.visitSwitchBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CaseContext extends ParserRuleContext {
	constructor(parser?: DdsIdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public unionElementSpecification(): UnionElementSpecificationContext {
		return this.getTypedRuleContext(UnionElementSpecificationContext, 0) as UnionElementSpecificationContext;
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(DdsIdlParser.SEMICOLON, 0);
	}
	public caseCondition_list(): CaseConditionContext[] {
		return this.getTypedRuleContexts(CaseConditionContext) as CaseConditionContext[];
	}
	public caseCondition(i: number): CaseConditionContext {
		return this.getTypedRuleContext(CaseConditionContext, i) as CaseConditionContext;
	}
    public get ruleIndex(): number {
    	return DdsIdlParser.RULE_case;
	}
	public enterRule(listener: DdsIdlListener): void {
	    if(listener.enterCase) {
	 		listener.enterCase(this);
		}
	}
	public exitRule(listener: DdsIdlListener): void {
	    if(listener.exitCase) {
	 		listener.exitCase(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DdsIdlVisitor<Result>): Result {
		if (visitor.visitCase) {
			return visitor.visitCase(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CaseConditionContext extends ParserRuleContext {
	constructor(parser?: DdsIdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return DdsIdlParser.RULE_caseCondition;
	}
	public override copyFrom(ctx: CaseConditionContext): void {
		super.copyFrom(ctx);
	}
}
export class LiteralValueCaseConditionContext extends CaseConditionContext {
	constructor(parser: DdsIdlParser, ctx: CaseConditionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public annotationApplications(): AnnotationApplicationsContext {
		return this.getTypedRuleContext(AnnotationApplicationsContext, 0) as AnnotationApplicationsContext;
	}
	public KW_CASE(): TerminalNode {
		return this.getToken(DdsIdlParser.KW_CASE, 0);
	}
	public literal(): LiteralContext {
		return this.getTypedRuleContext(LiteralContext, 0) as LiteralContext;
	}
	public COLON(): TerminalNode {
		return this.getToken(DdsIdlParser.COLON, 0);
	}
	public enterRule(listener: DdsIdlListener): void {
	    if(listener.enterLiteralValueCaseCondition) {
	 		listener.enterLiteralValueCaseCondition(this);
		}
	}
	public exitRule(listener: DdsIdlListener): void {
	    if(listener.exitLiteralValueCaseCondition) {
	 		listener.exitLiteralValueCaseCondition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DdsIdlVisitor<Result>): Result {
		if (visitor.visitLiteralValueCaseCondition) {
			return visitor.visitLiteralValueCaseCondition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ConstantDefCaseConditionContext extends CaseConditionContext {
	constructor(parser: DdsIdlParser, ctx: CaseConditionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public annotationApplications(): AnnotationApplicationsContext {
		return this.getTypedRuleContext(AnnotationApplicationsContext, 0) as AnnotationApplicationsContext;
	}
	public KW_CASE(): TerminalNode {
		return this.getToken(DdsIdlParser.KW_CASE, 0);
	}
	public scopedName(): ScopedNameContext {
		return this.getTypedRuleContext(ScopedNameContext, 0) as ScopedNameContext;
	}
	public COLON(): TerminalNode {
		return this.getToken(DdsIdlParser.COLON, 0);
	}
	public enterRule(listener: DdsIdlListener): void {
	    if(listener.enterConstantDefCaseCondition) {
	 		listener.enterConstantDefCaseCondition(this);
		}
	}
	public exitRule(listener: DdsIdlListener): void {
	    if(listener.exitConstantDefCaseCondition) {
	 		listener.exitConstantDefCaseCondition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DdsIdlVisitor<Result>): Result {
		if (visitor.visitConstantDefCaseCondition) {
			return visitor.visitConstantDefCaseCondition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DefaultCaseConditionContext extends CaseConditionContext {
	constructor(parser: DdsIdlParser, ctx: CaseConditionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public annotationApplications(): AnnotationApplicationsContext {
		return this.getTypedRuleContext(AnnotationApplicationsContext, 0) as AnnotationApplicationsContext;
	}
	public KW_DEFAULT(): TerminalNode {
		return this.getToken(DdsIdlParser.KW_DEFAULT, 0);
	}
	public COLON(): TerminalNode {
		return this.getToken(DdsIdlParser.COLON, 0);
	}
	public enterRule(listener: DdsIdlListener): void {
	    if(listener.enterDefaultCaseCondition) {
	 		listener.enterDefaultCaseCondition(this);
		}
	}
	public exitRule(listener: DdsIdlListener): void {
	    if(listener.exitDefaultCaseCondition) {
	 		listener.exitDefaultCaseCondition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DdsIdlVisitor<Result>): Result {
		if (visitor.visitDefaultCaseCondition) {
			return visitor.visitDefaultCaseCondition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnionElementSpecificationContext extends ParserRuleContext {
	constructor(parser?: DdsIdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public annotationApplications(): AnnotationApplicationsContext {
		return this.getTypedRuleContext(AnnotationApplicationsContext, 0) as AnnotationApplicationsContext;
	}
	public typeSpecification(): TypeSpecificationContext {
		return this.getTypedRuleContext(TypeSpecificationContext, 0) as TypeSpecificationContext;
	}
	public annotatableDeclarator(): AnnotatableDeclaratorContext {
		return this.getTypedRuleContext(AnnotatableDeclaratorContext, 0) as AnnotatableDeclaratorContext;
	}
    public get ruleIndex(): number {
    	return DdsIdlParser.RULE_unionElementSpecification;
	}
	public enterRule(listener: DdsIdlListener): void {
	    if(listener.enterUnionElementSpecification) {
	 		listener.enterUnionElementSpecification(this);
		}
	}
	public exitRule(listener: DdsIdlListener): void {
	    if(listener.exitUnionElementSpecification) {
	 		listener.exitUnionElementSpecification(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DdsIdlVisitor<Result>): Result {
		if (visitor.visitUnionElementSpecification) {
			return visitor.visitUnionElementSpecification(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnionForwardDeclarationContext extends ParserRuleContext {
	constructor(parser?: DdsIdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public KW_UNION(): TerminalNode {
		return this.getToken(DdsIdlParser.KW_UNION, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
    public get ruleIndex(): number {
    	return DdsIdlParser.RULE_unionForwardDeclaration;
	}
	public enterRule(listener: DdsIdlListener): void {
	    if(listener.enterUnionForwardDeclaration) {
	 		listener.enterUnionForwardDeclaration(this);
		}
	}
	public exitRule(listener: DdsIdlListener): void {
	    if(listener.exitUnionForwardDeclaration) {
	 		listener.exitUnionForwardDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DdsIdlVisitor<Result>): Result {
		if (visitor.visitUnionForwardDeclaration) {
			return visitor.visitUnionForwardDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumDeclarationContext extends ParserRuleContext {
	constructor(parser?: DdsIdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public KW_ENUM(): TerminalNode {
		return this.getToken(DdsIdlParser.KW_ENUM, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public LEFT_BRACE(): TerminalNode {
		return this.getToken(DdsIdlParser.LEFT_BRACE, 0);
	}
	public enumerator_list(): EnumeratorContext[] {
		return this.getTypedRuleContexts(EnumeratorContext) as EnumeratorContext[];
	}
	public enumerator(i: number): EnumeratorContext {
		return this.getTypedRuleContext(EnumeratorContext, i) as EnumeratorContext;
	}
	public RIGHT_BRACE(): TerminalNode {
		return this.getToken(DdsIdlParser.RIGHT_BRACE, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(DdsIdlParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(DdsIdlParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return DdsIdlParser.RULE_enumDeclaration;
	}
	public enterRule(listener: DdsIdlListener): void {
	    if(listener.enterEnumDeclaration) {
	 		listener.enterEnumDeclaration(this);
		}
	}
	public exitRule(listener: DdsIdlListener): void {
	    if(listener.exitEnumDeclaration) {
	 		listener.exitEnumDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DdsIdlVisitor<Result>): Result {
		if (visitor.visitEnumDeclaration) {
			return visitor.visitEnumDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumeratorContext extends ParserRuleContext {
	constructor(parser?: DdsIdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
    public get ruleIndex(): number {
    	return DdsIdlParser.RULE_enumerator;
	}
	public enterRule(listener: DdsIdlListener): void {
	    if(listener.enterEnumerator) {
	 		listener.enterEnumerator(this);
		}
	}
	public exitRule(listener: DdsIdlListener): void {
	    if(listener.exitEnumerator) {
	 		listener.exitEnumerator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DdsIdlVisitor<Result>): Result {
		if (visitor.visitEnumerator) {
			return visitor.visitEnumerator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayDeclaratorContext extends ParserRuleContext {
	constructor(parser?: DdsIdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public fixedArraySize_list(): FixedArraySizeContext[] {
		return this.getTypedRuleContexts(FixedArraySizeContext) as FixedArraySizeContext[];
	}
	public fixedArraySize(i: number): FixedArraySizeContext {
		return this.getTypedRuleContext(FixedArraySizeContext, i) as FixedArraySizeContext;
	}
    public get ruleIndex(): number {
    	return DdsIdlParser.RULE_arrayDeclarator;
	}
	public enterRule(listener: DdsIdlListener): void {
	    if(listener.enterArrayDeclarator) {
	 		listener.enterArrayDeclarator(this);
		}
	}
	public exitRule(listener: DdsIdlListener): void {
	    if(listener.exitArrayDeclarator) {
	 		listener.exitArrayDeclarator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DdsIdlVisitor<Result>): Result {
		if (visitor.visitArrayDeclarator) {
			return visitor.visitArrayDeclarator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FixedArraySizeContext extends ParserRuleContext {
	constructor(parser?: DdsIdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LEFT_BRACKET(): TerminalNode {
		return this.getToken(DdsIdlParser.LEFT_BRACKET, 0);
	}
	public positiveIntegerConstant(): PositiveIntegerConstantContext {
		return this.getTypedRuleContext(PositiveIntegerConstantContext, 0) as PositiveIntegerConstantContext;
	}
	public RIGHT_BRACKET(): TerminalNode {
		return this.getToken(DdsIdlParser.RIGHT_BRACKET, 0);
	}
    public get ruleIndex(): number {
    	return DdsIdlParser.RULE_fixedArraySize;
	}
	public enterRule(listener: DdsIdlListener): void {
	    if(listener.enterFixedArraySize) {
	 		listener.enterFixedArraySize(this);
		}
	}
	public exitRule(listener: DdsIdlListener): void {
	    if(listener.exitFixedArraySize) {
	 		listener.exitFixedArraySize(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DdsIdlVisitor<Result>): Result {
		if (visitor.visitFixedArraySize) {
			return visitor.visitFixedArraySize(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SimpleDeclaratorContext extends ParserRuleContext {
	constructor(parser?: DdsIdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
    public get ruleIndex(): number {
    	return DdsIdlParser.RULE_simpleDeclarator;
	}
	public enterRule(listener: DdsIdlListener): void {
	    if(listener.enterSimpleDeclarator) {
	 		listener.enterSimpleDeclarator(this);
		}
	}
	public exitRule(listener: DdsIdlListener): void {
	    if(listener.exitSimpleDeclarator) {
	 		listener.exitSimpleDeclarator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DdsIdlVisitor<Result>): Result {
		if (visitor.visitSimpleDeclarator) {
			return visitor.visitSimpleDeclarator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeAliasDeclarationContext extends ParserRuleContext {
	constructor(parser?: DdsIdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public KW_TYPEDEF(): TerminalNode {
		return this.getToken(DdsIdlParser.KW_TYPEDEF, 0);
	}
	public annotationApplications(): AnnotationApplicationsContext {
		return this.getTypedRuleContext(AnnotationApplicationsContext, 0) as AnnotationApplicationsContext;
	}
	public typeDeclarator(): TypeDeclaratorContext {
		return this.getTypedRuleContext(TypeDeclaratorContext, 0) as TypeDeclaratorContext;
	}
    public get ruleIndex(): number {
    	return DdsIdlParser.RULE_typeAliasDeclaration;
	}
	public enterRule(listener: DdsIdlListener): void {
	    if(listener.enterTypeAliasDeclaration) {
	 		listener.enterTypeAliasDeclaration(this);
		}
	}
	public exitRule(listener: DdsIdlListener): void {
	    if(listener.exitTypeAliasDeclaration) {
	 		listener.exitTypeAliasDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DdsIdlVisitor<Result>): Result {
		if (visitor.visitTypeAliasDeclaration) {
			return visitor.visitTypeAliasDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeDeclaratorContext extends ParserRuleContext {
	constructor(parser?: DdsIdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public typeDeclaratorType(): TypeDeclaratorTypeContext {
		return this.getTypedRuleContext(TypeDeclaratorTypeContext, 0) as TypeDeclaratorTypeContext;
	}
	public anyDeclarators(): AnyDeclaratorsContext {
		return this.getTypedRuleContext(AnyDeclaratorsContext, 0) as AnyDeclaratorsContext;
	}
    public get ruleIndex(): number {
    	return DdsIdlParser.RULE_typeDeclarator;
	}
	public enterRule(listener: DdsIdlListener): void {
	    if(listener.enterTypeDeclarator) {
	 		listener.enterTypeDeclarator(this);
		}
	}
	public exitRule(listener: DdsIdlListener): void {
	    if(listener.exitTypeDeclarator) {
	 		listener.exitTypeDeclarator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DdsIdlVisitor<Result>): Result {
		if (visitor.visitTypeDeclarator) {
			return visitor.visitTypeDeclarator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeDeclaratorTypeContext extends ParserRuleContext {
	constructor(parser?: DdsIdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public simpleTypeSpecification(): SimpleTypeSpecificationContext {
		return this.getTypedRuleContext(SimpleTypeSpecificationContext, 0) as SimpleTypeSpecificationContext;
	}
	public templateTypeSpecification(): TemplateTypeSpecificationContext {
		return this.getTypedRuleContext(TemplateTypeSpecificationContext, 0) as TemplateTypeSpecificationContext;
	}
	public constructedTypeDeclaration(): ConstructedTypeDeclarationContext {
		return this.getTypedRuleContext(ConstructedTypeDeclarationContext, 0) as ConstructedTypeDeclarationContext;
	}
    public get ruleIndex(): number {
    	return DdsIdlParser.RULE_typeDeclaratorType;
	}
	public enterRule(listener: DdsIdlListener): void {
	    if(listener.enterTypeDeclaratorType) {
	 		listener.enterTypeDeclaratorType(this);
		}
	}
	public exitRule(listener: DdsIdlListener): void {
	    if(listener.exitTypeDeclaratorType) {
	 		listener.exitTypeDeclaratorType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DdsIdlVisitor<Result>): Result {
		if (visitor.visitTypeDeclaratorType) {
			return visitor.visitTypeDeclaratorType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnyDeclaratorsContext extends ParserRuleContext {
	constructor(parser?: DdsIdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public anyDeclarator_list(): AnyDeclaratorContext[] {
		return this.getTypedRuleContexts(AnyDeclaratorContext) as AnyDeclaratorContext[];
	}
	public anyDeclarator(i: number): AnyDeclaratorContext {
		return this.getTypedRuleContext(AnyDeclaratorContext, i) as AnyDeclaratorContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(DdsIdlParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(DdsIdlParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return DdsIdlParser.RULE_anyDeclarators;
	}
	public enterRule(listener: DdsIdlListener): void {
	    if(listener.enterAnyDeclarators) {
	 		listener.enterAnyDeclarators(this);
		}
	}
	public exitRule(listener: DdsIdlListener): void {
	    if(listener.exitAnyDeclarators) {
	 		listener.exitAnyDeclarators(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DdsIdlVisitor<Result>): Result {
		if (visitor.visitAnyDeclarators) {
			return visitor.visitAnyDeclarators(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnyDeclaratorContext extends ParserRuleContext {
	constructor(parser?: DdsIdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public simpleDeclarator(): SimpleDeclaratorContext {
		return this.getTypedRuleContext(SimpleDeclaratorContext, 0) as SimpleDeclaratorContext;
	}
	public arrayDeclarator(): ArrayDeclaratorContext {
		return this.getTypedRuleContext(ArrayDeclaratorContext, 0) as ArrayDeclaratorContext;
	}
    public get ruleIndex(): number {
    	return DdsIdlParser.RULE_anyDeclarator;
	}
	public enterRule(listener: DdsIdlListener): void {
	    if(listener.enterAnyDeclarator) {
	 		listener.enterAnyDeclarator(this);
		}
	}
	public exitRule(listener: DdsIdlListener): void {
	    if(listener.exitAnyDeclarator) {
	 		listener.exitAnyDeclarator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DdsIdlVisitor<Result>): Result {
		if (visitor.visitAnyDeclarator) {
			return visitor.visitAnyDeclarator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnotatableDeclaratorsContext extends ParserRuleContext {
	constructor(parser?: DdsIdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public annotatableDeclarator_list(): AnnotatableDeclaratorContext[] {
		return this.getTypedRuleContexts(AnnotatableDeclaratorContext) as AnnotatableDeclaratorContext[];
	}
	public annotatableDeclarator(i: number): AnnotatableDeclaratorContext {
		return this.getTypedRuleContext(AnnotatableDeclaratorContext, i) as AnnotatableDeclaratorContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(DdsIdlParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(DdsIdlParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return DdsIdlParser.RULE_annotatableDeclarators;
	}
	public enterRule(listener: DdsIdlListener): void {
	    if(listener.enterAnnotatableDeclarators) {
	 		listener.enterAnnotatableDeclarators(this);
		}
	}
	public exitRule(listener: DdsIdlListener): void {
	    if(listener.exitAnnotatableDeclarators) {
	 		listener.exitAnnotatableDeclarators(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DdsIdlVisitor<Result>): Result {
		if (visitor.visitAnnotatableDeclarators) {
			return visitor.visitAnnotatableDeclarators(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnotatableDeclaratorContext extends ParserRuleContext {
	constructor(parser?: DdsIdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public annotationApplications(): AnnotationApplicationsContext {
		return this.getTypedRuleContext(AnnotationApplicationsContext, 0) as AnnotationApplicationsContext;
	}
	public simpleDeclarator(): SimpleDeclaratorContext {
		return this.getTypedRuleContext(SimpleDeclaratorContext, 0) as SimpleDeclaratorContext;
	}
	public arrayDeclarator(): ArrayDeclaratorContext {
		return this.getTypedRuleContext(ArrayDeclaratorContext, 0) as ArrayDeclaratorContext;
	}
    public get ruleIndex(): number {
    	return DdsIdlParser.RULE_annotatableDeclarator;
	}
	public enterRule(listener: DdsIdlListener): void {
	    if(listener.enterAnnotatableDeclarator) {
	 		listener.enterAnnotatableDeclarator(this);
		}
	}
	public exitRule(listener: DdsIdlListener): void {
	    if(listener.exitAnnotatableDeclarator) {
	 		listener.exitAnnotatableDeclarator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DdsIdlVisitor<Result>): Result {
		if (visitor.visitAnnotatableDeclarator) {
			return visitor.visitAnnotatableDeclarator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnotationDeclarationContext extends ParserRuleContext {
	constructor(parser?: DdsIdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public annotationHeader(): AnnotationHeaderContext {
		return this.getTypedRuleContext(AnnotationHeaderContext, 0) as AnnotationHeaderContext;
	}
	public LEFT_BRACE(): TerminalNode {
		return this.getToken(DdsIdlParser.LEFT_BRACE, 0);
	}
	public annotationBody(): AnnotationBodyContext {
		return this.getTypedRuleContext(AnnotationBodyContext, 0) as AnnotationBodyContext;
	}
	public RIGHT_BRACE(): TerminalNode {
		return this.getToken(DdsIdlParser.RIGHT_BRACE, 0);
	}
    public get ruleIndex(): number {
    	return DdsIdlParser.RULE_annotationDeclaration;
	}
	public enterRule(listener: DdsIdlListener): void {
	    if(listener.enterAnnotationDeclaration) {
	 		listener.enterAnnotationDeclaration(this);
		}
	}
	public exitRule(listener: DdsIdlListener): void {
	    if(listener.exitAnnotationDeclaration) {
	 		listener.exitAnnotationDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DdsIdlVisitor<Result>): Result {
		if (visitor.visitAnnotationDeclaration) {
			return visitor.visitAnnotationDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnotationHeaderContext extends ParserRuleContext {
	constructor(parser?: DdsIdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public KW_ANNOTATION(): TerminalNode {
		return this.getToken(DdsIdlParser.KW_ANNOTATION, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
    public get ruleIndex(): number {
    	return DdsIdlParser.RULE_annotationHeader;
	}
	public enterRule(listener: DdsIdlListener): void {
	    if(listener.enterAnnotationHeader) {
	 		listener.enterAnnotationHeader(this);
		}
	}
	public exitRule(listener: DdsIdlListener): void {
	    if(listener.exitAnnotationHeader) {
	 		listener.exitAnnotationHeader(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DdsIdlVisitor<Result>): Result {
		if (visitor.visitAnnotationHeader) {
			return visitor.visitAnnotationHeader(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnotationBodyContext extends ParserRuleContext {
	constructor(parser?: DdsIdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public annotationBodyItem_list(): AnnotationBodyItemContext[] {
		return this.getTypedRuleContexts(AnnotationBodyItemContext) as AnnotationBodyItemContext[];
	}
	public annotationBodyItem(i: number): AnnotationBodyItemContext {
		return this.getTypedRuleContext(AnnotationBodyItemContext, i) as AnnotationBodyItemContext;
	}
    public get ruleIndex(): number {
    	return DdsIdlParser.RULE_annotationBody;
	}
	public enterRule(listener: DdsIdlListener): void {
	    if(listener.enterAnnotationBody) {
	 		listener.enterAnnotationBody(this);
		}
	}
	public exitRule(listener: DdsIdlListener): void {
	    if(listener.exitAnnotationBody) {
	 		listener.exitAnnotationBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DdsIdlVisitor<Result>): Result {
		if (visitor.visitAnnotationBody) {
			return visitor.visitAnnotationBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnotationBodyItemContext extends ParserRuleContext {
	constructor(parser?: DdsIdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public annotationMember(): AnnotationMemberContext {
		return this.getTypedRuleContext(AnnotationMemberContext, 0) as AnnotationMemberContext;
	}
	public enumDeclaration(): EnumDeclarationContext {
		return this.getTypedRuleContext(EnumDeclarationContext, 0) as EnumDeclarationContext;
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(DdsIdlParser.SEMICOLON, 0);
	}
	public constantDeclaration(): ConstantDeclarationContext {
		return this.getTypedRuleContext(ConstantDeclarationContext, 0) as ConstantDeclarationContext;
	}
	public typeAliasDeclaration(): TypeAliasDeclarationContext {
		return this.getTypedRuleContext(TypeAliasDeclarationContext, 0) as TypeAliasDeclarationContext;
	}
    public get ruleIndex(): number {
    	return DdsIdlParser.RULE_annotationBodyItem;
	}
	public enterRule(listener: DdsIdlListener): void {
	    if(listener.enterAnnotationBodyItem) {
	 		listener.enterAnnotationBodyItem(this);
		}
	}
	public exitRule(listener: DdsIdlListener): void {
	    if(listener.exitAnnotationBodyItem) {
	 		listener.exitAnnotationBodyItem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DdsIdlVisitor<Result>): Result {
		if (visitor.visitAnnotationBodyItem) {
			return visitor.visitAnnotationBodyItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnotationMemberContext extends ParserRuleContext {
	constructor(parser?: DdsIdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public annotationMemberType(): AnnotationMemberTypeContext {
		return this.getTypedRuleContext(AnnotationMemberTypeContext, 0) as AnnotationMemberTypeContext;
	}
	public simpleDeclarator(): SimpleDeclaratorContext {
		return this.getTypedRuleContext(SimpleDeclaratorContext, 0) as SimpleDeclaratorContext;
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(DdsIdlParser.SEMICOLON, 0);
	}
	public KW_DEFAULT(): TerminalNode {
		return this.getToken(DdsIdlParser.KW_DEFAULT, 0);
	}
	public constantExpression(): ConstantExpressionContext {
		return this.getTypedRuleContext(ConstantExpressionContext, 0) as ConstantExpressionContext;
	}
    public get ruleIndex(): number {
    	return DdsIdlParser.RULE_annotationMember;
	}
	public enterRule(listener: DdsIdlListener): void {
	    if(listener.enterAnnotationMember) {
	 		listener.enterAnnotationMember(this);
		}
	}
	public exitRule(listener: DdsIdlListener): void {
	    if(listener.exitAnnotationMember) {
	 		listener.exitAnnotationMember(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DdsIdlVisitor<Result>): Result {
		if (visitor.visitAnnotationMember) {
			return visitor.visitAnnotationMember(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnotationMemberTypeContext extends ParserRuleContext {
	constructor(parser?: DdsIdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public constantType(): ConstantTypeContext {
		return this.getTypedRuleContext(ConstantTypeContext, 0) as ConstantTypeContext;
	}
	public scopedName(): ScopedNameContext {
		return this.getTypedRuleContext(ScopedNameContext, 0) as ScopedNameContext;
	}
    public get ruleIndex(): number {
    	return DdsIdlParser.RULE_annotationMemberType;
	}
	public enterRule(listener: DdsIdlListener): void {
	    if(listener.enterAnnotationMemberType) {
	 		listener.enterAnnotationMemberType(this);
		}
	}
	public exitRule(listener: DdsIdlListener): void {
	    if(listener.exitAnnotationMemberType) {
	 		listener.exitAnnotationMemberType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DdsIdlVisitor<Result>): Result {
		if (visitor.visitAnnotationMemberType) {
			return visitor.visitAnnotationMemberType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnotationApplicationsContext extends ParserRuleContext {
	constructor(parser?: DdsIdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public annotationApplication_list(): AnnotationApplicationContext[] {
		return this.getTypedRuleContexts(AnnotationApplicationContext) as AnnotationApplicationContext[];
	}
	public annotationApplication(i: number): AnnotationApplicationContext {
		return this.getTypedRuleContext(AnnotationApplicationContext, i) as AnnotationApplicationContext;
	}
    public get ruleIndex(): number {
    	return DdsIdlParser.RULE_annotationApplications;
	}
	public enterRule(listener: DdsIdlListener): void {
	    if(listener.enterAnnotationApplications) {
	 		listener.enterAnnotationApplications(this);
		}
	}
	public exitRule(listener: DdsIdlListener): void {
	    if(listener.exitAnnotationApplications) {
	 		listener.exitAnnotationApplications(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DdsIdlVisitor<Result>): Result {
		if (visitor.visitAnnotationApplications) {
			return visitor.visitAnnotationApplications(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnotationApplicationContext extends ParserRuleContext {
	constructor(parser?: DdsIdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public AT(): TerminalNode {
		return this.getToken(DdsIdlParser.AT, 0);
	}
	public scopedName(): ScopedNameContext {
		return this.getTypedRuleContext(ScopedNameContext, 0) as ScopedNameContext;
	}
	public LEFT_PAREN(): TerminalNode {
		return this.getToken(DdsIdlParser.LEFT_PAREN, 0);
	}
	public annotationApplicationParameters(): AnnotationApplicationParametersContext {
		return this.getTypedRuleContext(AnnotationApplicationParametersContext, 0) as AnnotationApplicationParametersContext;
	}
	public RIGHT_PAREN(): TerminalNode {
		return this.getToken(DdsIdlParser.RIGHT_PAREN, 0);
	}
    public get ruleIndex(): number {
    	return DdsIdlParser.RULE_annotationApplication;
	}
	public enterRule(listener: DdsIdlListener): void {
	    if(listener.enterAnnotationApplication) {
	 		listener.enterAnnotationApplication(this);
		}
	}
	public exitRule(listener: DdsIdlListener): void {
	    if(listener.exitAnnotationApplication) {
	 		listener.exitAnnotationApplication(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DdsIdlVisitor<Result>): Result {
		if (visitor.visitAnnotationApplication) {
			return visitor.visitAnnotationApplication(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnotationApplicationParametersContext extends ParserRuleContext {
	constructor(parser?: DdsIdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return DdsIdlParser.RULE_annotationApplicationParameters;
	}
	public override copyFrom(ctx: AnnotationApplicationParametersContext): void {
		super.copyFrom(ctx);
	}
}
export class SingleAnonymousAnnotationApplicationParameterContext extends AnnotationApplicationParametersContext {
	constructor(parser: DdsIdlParser, ctx: AnnotationApplicationParametersContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public constantExpression(): ConstantExpressionContext {
		return this.getTypedRuleContext(ConstantExpressionContext, 0) as ConstantExpressionContext;
	}
	public enterRule(listener: DdsIdlListener): void {
	    if(listener.enterSingleAnonymousAnnotationApplicationParameter) {
	 		listener.enterSingleAnonymousAnnotationApplicationParameter(this);
		}
	}
	public exitRule(listener: DdsIdlListener): void {
	    if(listener.exitSingleAnonymousAnnotationApplicationParameter) {
	 		listener.exitSingleAnonymousAnnotationApplicationParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DdsIdlVisitor<Result>): Result {
		if (visitor.visitSingleAnonymousAnnotationApplicationParameter) {
			return visitor.visitSingleAnonymousAnnotationApplicationParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MultipleNamedAnnotationApplicationParametersContext extends AnnotationApplicationParametersContext {
	constructor(parser: DdsIdlParser, ctx: AnnotationApplicationParametersContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public annotationApplicationParameter_list(): AnnotationApplicationParameterContext[] {
		return this.getTypedRuleContexts(AnnotationApplicationParameterContext) as AnnotationApplicationParameterContext[];
	}
	public annotationApplicationParameter(i: number): AnnotationApplicationParameterContext {
		return this.getTypedRuleContext(AnnotationApplicationParameterContext, i) as AnnotationApplicationParameterContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(DdsIdlParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(DdsIdlParser.COMMA, i);
	}
	public enterRule(listener: DdsIdlListener): void {
	    if(listener.enterMultipleNamedAnnotationApplicationParameters) {
	 		listener.enterMultipleNamedAnnotationApplicationParameters(this);
		}
	}
	public exitRule(listener: DdsIdlListener): void {
	    if(listener.exitMultipleNamedAnnotationApplicationParameters) {
	 		listener.exitMultipleNamedAnnotationApplicationParameters(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DdsIdlVisitor<Result>): Result {
		if (visitor.visitMultipleNamedAnnotationApplicationParameters) {
			return visitor.visitMultipleNamedAnnotationApplicationParameters(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnotationApplicationParameterContext extends ParserRuleContext {
	constructor(parser?: DdsIdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public EQUALS(): TerminalNode {
		return this.getToken(DdsIdlParser.EQUALS, 0);
	}
	public constantExpression(): ConstantExpressionContext {
		return this.getTypedRuleContext(ConstantExpressionContext, 0) as ConstantExpressionContext;
	}
    public get ruleIndex(): number {
    	return DdsIdlParser.RULE_annotationApplicationParameter;
	}
	public enterRule(listener: DdsIdlListener): void {
	    if(listener.enterAnnotationApplicationParameter) {
	 		listener.enterAnnotationApplicationParameter(this);
		}
	}
	public exitRule(listener: DdsIdlListener): void {
	    if(listener.exitAnnotationApplicationParameter) {
	 		listener.exitAnnotationApplicationParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DdsIdlVisitor<Result>): Result {
		if (visitor.visitAnnotationApplicationParameter) {
			return visitor.visitAnnotationApplicationParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierContext extends ParserRuleContext {
	constructor(parser?: DdsIdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public annotationApplications(): AnnotationApplicationsContext {
		return this.getTypedRuleContext(AnnotationApplicationsContext, 0) as AnnotationApplicationsContext;
	}
	public ID(): TerminalNode {
		return this.getToken(DdsIdlParser.ID, 0);
	}
    public get ruleIndex(): number {
    	return DdsIdlParser.RULE_identifier;
	}
	public enterRule(listener: DdsIdlListener): void {
	    if(listener.enterIdentifier) {
	 		listener.enterIdentifier(this);
		}
	}
	public exitRule(listener: DdsIdlListener): void {
	    if(listener.exitIdentifier) {
	 		listener.exitIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DdsIdlVisitor<Result>): Result {
		if (visitor.visitIdentifier) {
			return visitor.visitIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
