// Generated from DdsJsIdl.g4 by ANTLR 4.9.1
package gov.nasa.ksc.ddsjs.parser;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class DdsJsIdlParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.9.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, OPEN_BRACE=3, ASSIGN_OP=4, CLOSE_BRACE=5, STAT_END=6, 
		OPEN_ANGLE=7, CLOSE_ANGLE=8, OPEN_SQUARE=9, CLOSE_SQUARE=10, COMMA_SEP=11, 
		SCOPE_OP=12, COLON_SEP=13, INCLUDE_CD=14, MODULE_KW=15, TYPEDEF_KW=16, 
		CONST_KW=17, ENUM_KW=18, OCTET_KW=19, UNSIGNED_KW=20, SHORT_KW=21, LONG_KW=22, 
		FLOAT_KW=23, DOUBLE_KW=24, STRING_KW=25, SEQUENCE_KW=26, STRUCT_KW=27, 
		VALUETYPE_KW=28, UNION_KW=29, SWITCH_KW=30, CASE_KW=31, BOOLEAN_KW=32, 
		IDENTIFIER=33, DECIMAL_VALUE=34, HEXADECIMAL_VALUE=35, OCTAL_VALUE=36, 
		BINARY_VALUE=37, FLOAT_VALUE=38, STRING_VALUE=39, BOOLEAN_VALUE=40, INCLUDE_FILESPEC=41, 
		SL_COMMENT=42, ML_COMMENT=43, WS=44;
	public static final int
		RULE_translationUnit = 0, RULE_unitContents = 1, RULE_module = 2, RULE_moduleMember = 3, 
		RULE_compilerDirective = 4, RULE_typeAlias = 5, RULE_typeDescription = 6, 
		RULE_scopedName = 7, RULE_constantDefinition = 8, RULE_constantValue = 9, 
		RULE_enumDefinition = 10, RULE_enumLiteral = 11, RULE_topicDefinition = 12, 
		RULE_dataStructureDefinition = 13, RULE_valuetypeDefinition = 14, RULE_memberDefinition = 15, 
		RULE_unionDefinition = 16, RULE_unionCaseDefinition = 17, RULE_sequenceTypeDescription = 18, 
		RULE_stringTypeDescription = 19, RULE_sizeDefinition = 20, RULE_primitiveTypeDescription = 21, 
		RULE_intTypeDescription = 22, RULE_floatTypeDescription = 23, RULE_booleanTypeDescription = 24, 
		RULE_integerValue = 25;
	private static String[] makeRuleNames() {
		return new String[] {
			"translationUnit", "unitContents", "module", "moduleMember", "compilerDirective", 
			"typeAlias", "typeDescription", "scopedName", "constantDefinition", "constantValue", 
			"enumDefinition", "enumLiteral", "topicDefinition", "dataStructureDefinition", 
			"valuetypeDefinition", "memberDefinition", "unionDefinition", "unionCaseDefinition", 
			"sequenceTypeDescription", "stringTypeDescription", "sizeDefinition", 
			"primitiveTypeDescription", "intTypeDescription", "floatTypeDescription", 
			"booleanTypeDescription", "integerValue"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'('", "')'", "'{'", "'='", "'}'", "';'", "'<'", "'>'", "'['", 
			"']'", "','", "'::'", "':'", "'#include'", "'module'", "'typedef'", "'const'", 
			"'enum'", "'octet'", "'unsigned'", "'short'", "'long'", "'float'", "'double'", 
			"'string'", "'sequence'", "'struct'", "'valuetype'", "'union'", "'switch'", 
			"'case'", "'boolean'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, "OPEN_BRACE", "ASSIGN_OP", "CLOSE_BRACE", "STAT_END", 
			"OPEN_ANGLE", "CLOSE_ANGLE", "OPEN_SQUARE", "CLOSE_SQUARE", "COMMA_SEP", 
			"SCOPE_OP", "COLON_SEP", "INCLUDE_CD", "MODULE_KW", "TYPEDEF_KW", "CONST_KW", 
			"ENUM_KW", "OCTET_KW", "UNSIGNED_KW", "SHORT_KW", "LONG_KW", "FLOAT_KW", 
			"DOUBLE_KW", "STRING_KW", "SEQUENCE_KW", "STRUCT_KW", "VALUETYPE_KW", 
			"UNION_KW", "SWITCH_KW", "CASE_KW", "BOOLEAN_KW", "IDENTIFIER", "DECIMAL_VALUE", 
			"HEXADECIMAL_VALUE", "OCTAL_VALUE", "BINARY_VALUE", "FLOAT_VALUE", "STRING_VALUE", 
			"BOOLEAN_VALUE", "INCLUDE_FILESPEC", "SL_COMMENT", "ML_COMMENT", "WS"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "DdsJsIdl.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public DdsJsIdlParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	public static class TranslationUnitContext extends ParserRuleContext {
		public List<UnitContentsContext> unitContents() {
			return getRuleContexts(UnitContentsContext.class);
		}
		public UnitContentsContext unitContents(int i) {
			return getRuleContext(UnitContentsContext.class,i);
		}
		public TranslationUnitContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_translationUnit; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof DdsJsIdlListener ) ((DdsJsIdlListener)listener).enterTranslationUnit(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof DdsJsIdlListener ) ((DdsJsIdlListener)listener).exitTranslationUnit(this);
		}
	}

	public final TranslationUnitContext translationUnit() throws RecognitionException {
		TranslationUnitContext _localctx = new TranslationUnitContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_translationUnit);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(53); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(52);
				unitContents();
				}
				}
				setState(55); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==INCLUDE_CD || _la==MODULE_KW );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class UnitContentsContext extends ParserRuleContext {
		public CompilerDirectiveContext compilerDirective() {
			return getRuleContext(CompilerDirectiveContext.class,0);
		}
		public ModuleContext module() {
			return getRuleContext(ModuleContext.class,0);
		}
		public UnitContentsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_unitContents; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof DdsJsIdlListener ) ((DdsJsIdlListener)listener).enterUnitContents(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof DdsJsIdlListener ) ((DdsJsIdlListener)listener).exitUnitContents(this);
		}
	}

	public final UnitContentsContext unitContents() throws RecognitionException {
		UnitContentsContext _localctx = new UnitContentsContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_unitContents);
		try {
			setState(59);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case INCLUDE_CD:
				enterOuterAlt(_localctx, 1);
				{
				setState(57);
				compilerDirective();
				}
				break;
			case MODULE_KW:
				enterOuterAlt(_localctx, 2);
				{
				setState(58);
				module();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ModuleContext extends ParserRuleContext {
		public TerminalNode MODULE_KW() { return getToken(DdsJsIdlParser.MODULE_KW, 0); }
		public TerminalNode IDENTIFIER() { return getToken(DdsJsIdlParser.IDENTIFIER, 0); }
		public TerminalNode OPEN_BRACE() { return getToken(DdsJsIdlParser.OPEN_BRACE, 0); }
		public TerminalNode CLOSE_BRACE() { return getToken(DdsJsIdlParser.CLOSE_BRACE, 0); }
		public List<ModuleMemberContext> moduleMember() {
			return getRuleContexts(ModuleMemberContext.class);
		}
		public ModuleMemberContext moduleMember(int i) {
			return getRuleContext(ModuleMemberContext.class,i);
		}
		public TerminalNode STAT_END() { return getToken(DdsJsIdlParser.STAT_END, 0); }
		public ModuleContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_module; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof DdsJsIdlListener ) ((DdsJsIdlListener)listener).enterModule(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof DdsJsIdlListener ) ((DdsJsIdlListener)listener).exitModule(this);
		}
	}

	public final ModuleContext module() throws RecognitionException {
		ModuleContext _localctx = new ModuleContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_module);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(61);
			match(MODULE_KW);
			setState(62);
			match(IDENTIFIER);
			setState(63);
			match(OPEN_BRACE);
			setState(67);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << MODULE_KW) | (1L << TYPEDEF_KW) | (1L << CONST_KW) | (1L << ENUM_KW) | (1L << STRUCT_KW) | (1L << VALUETYPE_KW) | (1L << UNION_KW))) != 0)) {
				{
				{
				setState(64);
				moduleMember();
				}
				}
				setState(69);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(70);
			match(CLOSE_BRACE);
			setState(72);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==STAT_END) {
				{
				setState(71);
				match(STAT_END);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ModuleMemberContext extends ParserRuleContext {
		public TopicDefinitionContext topicDefinition() {
			return getRuleContext(TopicDefinitionContext.class,0);
		}
		public TypeAliasContext typeAlias() {
			return getRuleContext(TypeAliasContext.class,0);
		}
		public ConstantDefinitionContext constantDefinition() {
			return getRuleContext(ConstantDefinitionContext.class,0);
		}
		public EnumDefinitionContext enumDefinition() {
			return getRuleContext(EnumDefinitionContext.class,0);
		}
		public UnionDefinitionContext unionDefinition() {
			return getRuleContext(UnionDefinitionContext.class,0);
		}
		public ModuleContext module() {
			return getRuleContext(ModuleContext.class,0);
		}
		public ModuleMemberContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_moduleMember; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof DdsJsIdlListener ) ((DdsJsIdlListener)listener).enterModuleMember(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof DdsJsIdlListener ) ((DdsJsIdlListener)listener).exitModuleMember(this);
		}
	}

	public final ModuleMemberContext moduleMember() throws RecognitionException {
		ModuleMemberContext _localctx = new ModuleMemberContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_moduleMember);
		try {
			setState(80);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case STRUCT_KW:
			case VALUETYPE_KW:
				enterOuterAlt(_localctx, 1);
				{
				setState(74);
				topicDefinition();
				}
				break;
			case TYPEDEF_KW:
				enterOuterAlt(_localctx, 2);
				{
				setState(75);
				typeAlias();
				}
				break;
			case CONST_KW:
				enterOuterAlt(_localctx, 3);
				{
				setState(76);
				constantDefinition();
				}
				break;
			case ENUM_KW:
				enterOuterAlt(_localctx, 4);
				{
				setState(77);
				enumDefinition();
				}
				break;
			case UNION_KW:
				enterOuterAlt(_localctx, 5);
				{
				setState(78);
				unionDefinition();
				}
				break;
			case MODULE_KW:
				enterOuterAlt(_localctx, 6);
				{
				setState(79);
				module();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CompilerDirectiveContext extends ParserRuleContext {
		public CompilerDirectiveContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_compilerDirective; }
	 
		public CompilerDirectiveContext() { }
		public void copyFrom(CompilerDirectiveContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class IncludeCompilerDirectiveContext extends CompilerDirectiveContext {
		public TerminalNode INCLUDE_CD() { return getToken(DdsJsIdlParser.INCLUDE_CD, 0); }
		public TerminalNode INCLUDE_FILESPEC() { return getToken(DdsJsIdlParser.INCLUDE_FILESPEC, 0); }
		public IncludeCompilerDirectiveContext(CompilerDirectiveContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof DdsJsIdlListener ) ((DdsJsIdlListener)listener).enterIncludeCompilerDirective(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof DdsJsIdlListener ) ((DdsJsIdlListener)listener).exitIncludeCompilerDirective(this);
		}
	}

	public final CompilerDirectiveContext compilerDirective() throws RecognitionException {
		CompilerDirectiveContext _localctx = new CompilerDirectiveContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_compilerDirective);
		try {
			_localctx = new IncludeCompilerDirectiveContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(82);
			match(INCLUDE_CD);
			setState(83);
			match(INCLUDE_FILESPEC);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TypeAliasContext extends ParserRuleContext {
		public TypeAliasContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typeAlias; }
	 
		public TypeAliasContext() { }
		public void copyFrom(TypeAliasContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class ArrayTypedefContext extends TypeAliasContext {
		public TerminalNode TYPEDEF_KW() { return getToken(DdsJsIdlParser.TYPEDEF_KW, 0); }
		public TypeDescriptionContext typeDescription() {
			return getRuleContext(TypeDescriptionContext.class,0);
		}
		public TerminalNode IDENTIFIER() { return getToken(DdsJsIdlParser.IDENTIFIER, 0); }
		public TerminalNode OPEN_SQUARE() { return getToken(DdsJsIdlParser.OPEN_SQUARE, 0); }
		public TerminalNode DECIMAL_VALUE() { return getToken(DdsJsIdlParser.DECIMAL_VALUE, 0); }
		public TerminalNode CLOSE_SQUARE() { return getToken(DdsJsIdlParser.CLOSE_SQUARE, 0); }
		public TerminalNode STAT_END() { return getToken(DdsJsIdlParser.STAT_END, 0); }
		public ArrayTypedefContext(TypeAliasContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof DdsJsIdlListener ) ((DdsJsIdlListener)listener).enterArrayTypedef(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof DdsJsIdlListener ) ((DdsJsIdlListener)listener).exitArrayTypedef(this);
		}
	}
	public static class NonArrayTypedefContext extends TypeAliasContext {
		public TerminalNode TYPEDEF_KW() { return getToken(DdsJsIdlParser.TYPEDEF_KW, 0); }
		public TypeDescriptionContext typeDescription() {
			return getRuleContext(TypeDescriptionContext.class,0);
		}
		public TerminalNode IDENTIFIER() { return getToken(DdsJsIdlParser.IDENTIFIER, 0); }
		public TerminalNode STAT_END() { return getToken(DdsJsIdlParser.STAT_END, 0); }
		public NonArrayTypedefContext(TypeAliasContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof DdsJsIdlListener ) ((DdsJsIdlListener)listener).enterNonArrayTypedef(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof DdsJsIdlListener ) ((DdsJsIdlListener)listener).exitNonArrayTypedef(this);
		}
	}

	public final TypeAliasContext typeAlias() throws RecognitionException {
		TypeAliasContext _localctx = new TypeAliasContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_typeAlias);
		try {
			setState(98);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,5,_ctx) ) {
			case 1:
				_localctx = new NonArrayTypedefContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(85);
				match(TYPEDEF_KW);
				setState(86);
				typeDescription();
				setState(87);
				match(IDENTIFIER);
				setState(88);
				match(STAT_END);
				}
				break;
			case 2:
				_localctx = new ArrayTypedefContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(90);
				match(TYPEDEF_KW);
				setState(91);
				typeDescription();
				setState(92);
				match(IDENTIFIER);
				setState(93);
				match(OPEN_SQUARE);
				setState(94);
				match(DECIMAL_VALUE);
				setState(95);
				match(CLOSE_SQUARE);
				setState(96);
				match(STAT_END);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TypeDescriptionContext extends ParserRuleContext {
		public TypeDescriptionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typeDescription; }
	 
		public TypeDescriptionContext() { }
		public void copyFrom(TypeDescriptionContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class CustomTypeDescriptionContext extends TypeDescriptionContext {
		public ScopedNameContext scopedName() {
			return getRuleContext(ScopedNameContext.class,0);
		}
		public CustomTypeDescriptionContext(TypeDescriptionContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof DdsJsIdlListener ) ((DdsJsIdlListener)listener).enterCustomTypeDescription(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof DdsJsIdlListener ) ((DdsJsIdlListener)listener).exitCustomTypeDescription(this);
		}
	}
	public static class PrimitiveTypedefContext extends TypeDescriptionContext {
		public PrimitiveTypeDescriptionContext primitiveTypeDescription() {
			return getRuleContext(PrimitiveTypeDescriptionContext.class,0);
		}
		public PrimitiveTypedefContext(TypeDescriptionContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof DdsJsIdlListener ) ((DdsJsIdlListener)listener).enterPrimitiveTypedef(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof DdsJsIdlListener ) ((DdsJsIdlListener)listener).exitPrimitiveTypedef(this);
		}
	}
	public static class SequenceTypedefContext extends TypeDescriptionContext {
		public SequenceTypeDescriptionContext sequenceTypeDescription() {
			return getRuleContext(SequenceTypeDescriptionContext.class,0);
		}
		public SequenceTypedefContext(TypeDescriptionContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof DdsJsIdlListener ) ((DdsJsIdlListener)listener).enterSequenceTypedef(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof DdsJsIdlListener ) ((DdsJsIdlListener)listener).exitSequenceTypedef(this);
		}
	}
	public static class StringTypedefContext extends TypeDescriptionContext {
		public StringTypeDescriptionContext stringTypeDescription() {
			return getRuleContext(StringTypeDescriptionContext.class,0);
		}
		public StringTypedefContext(TypeDescriptionContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof DdsJsIdlListener ) ((DdsJsIdlListener)listener).enterStringTypedef(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof DdsJsIdlListener ) ((DdsJsIdlListener)listener).exitStringTypedef(this);
		}
	}

	public final TypeDescriptionContext typeDescription() throws RecognitionException {
		TypeDescriptionContext _localctx = new TypeDescriptionContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_typeDescription);
		try {
			setState(104);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case SEQUENCE_KW:
				_localctx = new SequenceTypedefContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(100);
				sequenceTypeDescription();
				}
				break;
			case STRING_KW:
				_localctx = new StringTypedefContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(101);
				stringTypeDescription();
				}
				break;
			case OCTET_KW:
			case UNSIGNED_KW:
			case SHORT_KW:
			case LONG_KW:
			case FLOAT_KW:
			case DOUBLE_KW:
			case BOOLEAN_KW:
				_localctx = new PrimitiveTypedefContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(102);
				primitiveTypeDescription();
				}
				break;
			case SCOPE_OP:
			case IDENTIFIER:
				_localctx = new CustomTypeDescriptionContext(_localctx);
				enterOuterAlt(_localctx, 4);
				{
				setState(103);
				scopedName();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ScopedNameContext extends ParserRuleContext {
		public ScopedNameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_scopedName; }
	 
		public ScopedNameContext() { }
		public void copyFrom(ScopedNameContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class RelativeScopedNameContext extends ScopedNameContext {
		public List<TerminalNode> IDENTIFIER() { return getTokens(DdsJsIdlParser.IDENTIFIER); }
		public TerminalNode IDENTIFIER(int i) {
			return getToken(DdsJsIdlParser.IDENTIFIER, i);
		}
		public List<TerminalNode> SCOPE_OP() { return getTokens(DdsJsIdlParser.SCOPE_OP); }
		public TerminalNode SCOPE_OP(int i) {
			return getToken(DdsJsIdlParser.SCOPE_OP, i);
		}
		public RelativeScopedNameContext(ScopedNameContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof DdsJsIdlListener ) ((DdsJsIdlListener)listener).enterRelativeScopedName(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof DdsJsIdlListener ) ((DdsJsIdlListener)listener).exitRelativeScopedName(this);
		}
	}
	public static class AbsoluteScopedNameContext extends ScopedNameContext {
		public List<TerminalNode> SCOPE_OP() { return getTokens(DdsJsIdlParser.SCOPE_OP); }
		public TerminalNode SCOPE_OP(int i) {
			return getToken(DdsJsIdlParser.SCOPE_OP, i);
		}
		public TerminalNode IDENTIFIER() { return getToken(DdsJsIdlParser.IDENTIFIER, 0); }
		public ScopedNameContext scopedName() {
			return getRuleContext(ScopedNameContext.class,0);
		}
		public AbsoluteScopedNameContext(ScopedNameContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof DdsJsIdlListener ) ((DdsJsIdlListener)listener).enterAbsoluteScopedName(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof DdsJsIdlListener ) ((DdsJsIdlListener)listener).exitAbsoluteScopedName(this);
		}
	}

	public final ScopedNameContext scopedName() throws RecognitionException {
		ScopedNameContext _localctx = new ScopedNameContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_scopedName);
		int _la;
		try {
			setState(118);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case IDENTIFIER:
				_localctx = new RelativeScopedNameContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(106);
				match(IDENTIFIER);
				setState(111);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==SCOPE_OP) {
					{
					{
					setState(107);
					match(SCOPE_OP);
					setState(108);
					match(IDENTIFIER);
					}
					}
					setState(113);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
				break;
			case SCOPE_OP:
				_localctx = new AbsoluteScopedNameContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(114);
				match(SCOPE_OP);
				setState(115);
				match(IDENTIFIER);
				setState(116);
				match(SCOPE_OP);
				setState(117);
				scopedName();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ConstantDefinitionContext extends ParserRuleContext {
		public TerminalNode CONST_KW() { return getToken(DdsJsIdlParser.CONST_KW, 0); }
		public TypeDescriptionContext typeDescription() {
			return getRuleContext(TypeDescriptionContext.class,0);
		}
		public TerminalNode IDENTIFIER() { return getToken(DdsJsIdlParser.IDENTIFIER, 0); }
		public TerminalNode ASSIGN_OP() { return getToken(DdsJsIdlParser.ASSIGN_OP, 0); }
		public ConstantValueContext constantValue() {
			return getRuleContext(ConstantValueContext.class,0);
		}
		public TerminalNode STAT_END() { return getToken(DdsJsIdlParser.STAT_END, 0); }
		public ConstantDefinitionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_constantDefinition; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof DdsJsIdlListener ) ((DdsJsIdlListener)listener).enterConstantDefinition(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof DdsJsIdlListener ) ((DdsJsIdlListener)listener).exitConstantDefinition(this);
		}
	}

	public final ConstantDefinitionContext constantDefinition() throws RecognitionException {
		ConstantDefinitionContext _localctx = new ConstantDefinitionContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_constantDefinition);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(120);
			match(CONST_KW);
			setState(121);
			typeDescription();
			setState(122);
			match(IDENTIFIER);
			setState(123);
			match(ASSIGN_OP);
			setState(124);
			constantValue();
			setState(125);
			match(STAT_END);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ConstantValueContext extends ParserRuleContext {
		public IntegerValueContext integerValue() {
			return getRuleContext(IntegerValueContext.class,0);
		}
		public TerminalNode FLOAT_VALUE() { return getToken(DdsJsIdlParser.FLOAT_VALUE, 0); }
		public TerminalNode STRING_VALUE() { return getToken(DdsJsIdlParser.STRING_VALUE, 0); }
		public TerminalNode BOOLEAN_VALUE() { return getToken(DdsJsIdlParser.BOOLEAN_VALUE, 0); }
		public ConstantValueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_constantValue; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof DdsJsIdlListener ) ((DdsJsIdlListener)listener).enterConstantValue(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof DdsJsIdlListener ) ((DdsJsIdlListener)listener).exitConstantValue(this);
		}
	}

	public final ConstantValueContext constantValue() throws RecognitionException {
		ConstantValueContext _localctx = new ConstantValueContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_constantValue);
		try {
			setState(131);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case DECIMAL_VALUE:
			case HEXADECIMAL_VALUE:
			case OCTAL_VALUE:
			case BINARY_VALUE:
				enterOuterAlt(_localctx, 1);
				{
				setState(127);
				integerValue();
				}
				break;
			case FLOAT_VALUE:
				enterOuterAlt(_localctx, 2);
				{
				setState(128);
				match(FLOAT_VALUE);
				}
				break;
			case STRING_VALUE:
				enterOuterAlt(_localctx, 3);
				{
				setState(129);
				match(STRING_VALUE);
				}
				break;
			case BOOLEAN_VALUE:
				enterOuterAlt(_localctx, 4);
				{
				setState(130);
				match(BOOLEAN_VALUE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class EnumDefinitionContext extends ParserRuleContext {
		public TerminalNode ENUM_KW() { return getToken(DdsJsIdlParser.ENUM_KW, 0); }
		public TerminalNode IDENTIFIER() { return getToken(DdsJsIdlParser.IDENTIFIER, 0); }
		public TerminalNode OPEN_BRACE() { return getToken(DdsJsIdlParser.OPEN_BRACE, 0); }
		public List<EnumLiteralContext> enumLiteral() {
			return getRuleContexts(EnumLiteralContext.class);
		}
		public EnumLiteralContext enumLiteral(int i) {
			return getRuleContext(EnumLiteralContext.class,i);
		}
		public TerminalNode CLOSE_BRACE() { return getToken(DdsJsIdlParser.CLOSE_BRACE, 0); }
		public TerminalNode STAT_END() { return getToken(DdsJsIdlParser.STAT_END, 0); }
		public List<TerminalNode> COMMA_SEP() { return getTokens(DdsJsIdlParser.COMMA_SEP); }
		public TerminalNode COMMA_SEP(int i) {
			return getToken(DdsJsIdlParser.COMMA_SEP, i);
		}
		public EnumDefinitionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_enumDefinition; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof DdsJsIdlListener ) ((DdsJsIdlListener)listener).enterEnumDefinition(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof DdsJsIdlListener ) ((DdsJsIdlListener)listener).exitEnumDefinition(this);
		}
	}

	public final EnumDefinitionContext enumDefinition() throws RecognitionException {
		EnumDefinitionContext _localctx = new EnumDefinitionContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_enumDefinition);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(133);
			match(ENUM_KW);
			setState(134);
			match(IDENTIFIER);
			setState(135);
			match(OPEN_BRACE);
			setState(136);
			enumLiteral();
			setState(141);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA_SEP) {
				{
				{
				setState(137);
				match(COMMA_SEP);
				setState(138);
				enumLiteral();
				}
				}
				setState(143);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(144);
			match(CLOSE_BRACE);
			setState(145);
			match(STAT_END);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class EnumLiteralContext extends ParserRuleContext {
		public EnumLiteralContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_enumLiteral; }
	 
		public EnumLiteralContext() { }
		public void copyFrom(EnumLiteralContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class ManualNumberedContext extends EnumLiteralContext {
		public TerminalNode IDENTIFIER() { return getToken(DdsJsIdlParser.IDENTIFIER, 0); }
		public TerminalNode ASSIGN_OP() { return getToken(DdsJsIdlParser.ASSIGN_OP, 0); }
		public IntegerValueContext integerValue() {
			return getRuleContext(IntegerValueContext.class,0);
		}
		public ManualNumberedContext(EnumLiteralContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof DdsJsIdlListener ) ((DdsJsIdlListener)listener).enterManualNumbered(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof DdsJsIdlListener ) ((DdsJsIdlListener)listener).exitManualNumbered(this);
		}
	}
	public static class AutoNumberedContext extends EnumLiteralContext {
		public TerminalNode IDENTIFIER() { return getToken(DdsJsIdlParser.IDENTIFIER, 0); }
		public AutoNumberedContext(EnumLiteralContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof DdsJsIdlListener ) ((DdsJsIdlListener)listener).enterAutoNumbered(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof DdsJsIdlListener ) ((DdsJsIdlListener)listener).exitAutoNumbered(this);
		}
	}

	public final EnumLiteralContext enumLiteral() throws RecognitionException {
		EnumLiteralContext _localctx = new EnumLiteralContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_enumLiteral);
		try {
			setState(151);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,11,_ctx) ) {
			case 1:
				_localctx = new ManualNumberedContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(147);
				match(IDENTIFIER);
				setState(148);
				match(ASSIGN_OP);
				setState(149);
				integerValue();
				}
				break;
			case 2:
				_localctx = new AutoNumberedContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(150);
				match(IDENTIFIER);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TopicDefinitionContext extends ParserRuleContext {
		public DataStructureDefinitionContext dataStructureDefinition() {
			return getRuleContext(DataStructureDefinitionContext.class,0);
		}
		public ValuetypeDefinitionContext valuetypeDefinition() {
			return getRuleContext(ValuetypeDefinitionContext.class,0);
		}
		public TopicDefinitionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_topicDefinition; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof DdsJsIdlListener ) ((DdsJsIdlListener)listener).enterTopicDefinition(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof DdsJsIdlListener ) ((DdsJsIdlListener)listener).exitTopicDefinition(this);
		}
	}

	public final TopicDefinitionContext topicDefinition() throws RecognitionException {
		TopicDefinitionContext _localctx = new TopicDefinitionContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_topicDefinition);
		try {
			setState(155);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case STRUCT_KW:
				enterOuterAlt(_localctx, 1);
				{
				setState(153);
				dataStructureDefinition();
				}
				break;
			case VALUETYPE_KW:
				enterOuterAlt(_localctx, 2);
				{
				setState(154);
				valuetypeDefinition();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DataStructureDefinitionContext extends ParserRuleContext {
		public TerminalNode STRUCT_KW() { return getToken(DdsJsIdlParser.STRUCT_KW, 0); }
		public TerminalNode IDENTIFIER() { return getToken(DdsJsIdlParser.IDENTIFIER, 0); }
		public TerminalNode OPEN_BRACE() { return getToken(DdsJsIdlParser.OPEN_BRACE, 0); }
		public TerminalNode CLOSE_BRACE() { return getToken(DdsJsIdlParser.CLOSE_BRACE, 0); }
		public TerminalNode STAT_END() { return getToken(DdsJsIdlParser.STAT_END, 0); }
		public List<MemberDefinitionContext> memberDefinition() {
			return getRuleContexts(MemberDefinitionContext.class);
		}
		public MemberDefinitionContext memberDefinition(int i) {
			return getRuleContext(MemberDefinitionContext.class,i);
		}
		public DataStructureDefinitionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dataStructureDefinition; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof DdsJsIdlListener ) ((DdsJsIdlListener)listener).enterDataStructureDefinition(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof DdsJsIdlListener ) ((DdsJsIdlListener)listener).exitDataStructureDefinition(this);
		}
	}

	public final DataStructureDefinitionContext dataStructureDefinition() throws RecognitionException {
		DataStructureDefinitionContext _localctx = new DataStructureDefinitionContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_dataStructureDefinition);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(157);
			match(STRUCT_KW);
			setState(158);
			match(IDENTIFIER);
			setState(159);
			match(OPEN_BRACE);
			setState(161); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(160);
				memberDefinition();
				}
				}
				setState(163); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << SCOPE_OP) | (1L << OCTET_KW) | (1L << UNSIGNED_KW) | (1L << SHORT_KW) | (1L << LONG_KW) | (1L << FLOAT_KW) | (1L << DOUBLE_KW) | (1L << STRING_KW) | (1L << SEQUENCE_KW) | (1L << BOOLEAN_KW) | (1L << IDENTIFIER))) != 0) );
			setState(165);
			match(CLOSE_BRACE);
			setState(166);
			match(STAT_END);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ValuetypeDefinitionContext extends ParserRuleContext {
		public TerminalNode VALUETYPE_KW() { return getToken(DdsJsIdlParser.VALUETYPE_KW, 0); }
		public TerminalNode IDENTIFIER() { return getToken(DdsJsIdlParser.IDENTIFIER, 0); }
		public TerminalNode OPEN_BRACE() { return getToken(DdsJsIdlParser.OPEN_BRACE, 0); }
		public TerminalNode CLOSE_BRACE() { return getToken(DdsJsIdlParser.CLOSE_BRACE, 0); }
		public TerminalNode STAT_END() { return getToken(DdsJsIdlParser.STAT_END, 0); }
		public TerminalNode COLON_SEP() { return getToken(DdsJsIdlParser.COLON_SEP, 0); }
		public ScopedNameContext scopedName() {
			return getRuleContext(ScopedNameContext.class,0);
		}
		public List<MemberDefinitionContext> memberDefinition() {
			return getRuleContexts(MemberDefinitionContext.class);
		}
		public MemberDefinitionContext memberDefinition(int i) {
			return getRuleContext(MemberDefinitionContext.class,i);
		}
		public ValuetypeDefinitionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_valuetypeDefinition; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof DdsJsIdlListener ) ((DdsJsIdlListener)listener).enterValuetypeDefinition(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof DdsJsIdlListener ) ((DdsJsIdlListener)listener).exitValuetypeDefinition(this);
		}
	}

	public final ValuetypeDefinitionContext valuetypeDefinition() throws RecognitionException {
		ValuetypeDefinitionContext _localctx = new ValuetypeDefinitionContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_valuetypeDefinition);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(168);
			match(VALUETYPE_KW);
			setState(169);
			match(IDENTIFIER);
			setState(172);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==COLON_SEP) {
				{
				setState(170);
				match(COLON_SEP);
				setState(171);
				scopedName();
				}
			}

			setState(174);
			match(OPEN_BRACE);
			setState(176); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(175);
				memberDefinition();
				}
				}
				setState(178); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << SCOPE_OP) | (1L << OCTET_KW) | (1L << UNSIGNED_KW) | (1L << SHORT_KW) | (1L << LONG_KW) | (1L << FLOAT_KW) | (1L << DOUBLE_KW) | (1L << STRING_KW) | (1L << SEQUENCE_KW) | (1L << BOOLEAN_KW) | (1L << IDENTIFIER))) != 0) );
			setState(180);
			match(CLOSE_BRACE);
			setState(181);
			match(STAT_END);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class MemberDefinitionContext extends ParserRuleContext {
		public MemberDefinitionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_memberDefinition; }
	 
		public MemberDefinitionContext() { }
		public void copyFrom(MemberDefinitionContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class ArrayMemberDefinitionContext extends MemberDefinitionContext {
		public TypeDescriptionContext typeDescription() {
			return getRuleContext(TypeDescriptionContext.class,0);
		}
		public TerminalNode IDENTIFIER() { return getToken(DdsJsIdlParser.IDENTIFIER, 0); }
		public TerminalNode OPEN_SQUARE() { return getToken(DdsJsIdlParser.OPEN_SQUARE, 0); }
		public TerminalNode DECIMAL_VALUE() { return getToken(DdsJsIdlParser.DECIMAL_VALUE, 0); }
		public TerminalNode CLOSE_SQUARE() { return getToken(DdsJsIdlParser.CLOSE_SQUARE, 0); }
		public TerminalNode STAT_END() { return getToken(DdsJsIdlParser.STAT_END, 0); }
		public ArrayMemberDefinitionContext(MemberDefinitionContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof DdsJsIdlListener ) ((DdsJsIdlListener)listener).enterArrayMemberDefinition(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof DdsJsIdlListener ) ((DdsJsIdlListener)listener).exitArrayMemberDefinition(this);
		}
	}
	public static class NonArrayMemberDefinitionContext extends MemberDefinitionContext {
		public TypeDescriptionContext typeDescription() {
			return getRuleContext(TypeDescriptionContext.class,0);
		}
		public TerminalNode IDENTIFIER() { return getToken(DdsJsIdlParser.IDENTIFIER, 0); }
		public TerminalNode STAT_END() { return getToken(DdsJsIdlParser.STAT_END, 0); }
		public NonArrayMemberDefinitionContext(MemberDefinitionContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof DdsJsIdlListener ) ((DdsJsIdlListener)listener).enterNonArrayMemberDefinition(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof DdsJsIdlListener ) ((DdsJsIdlListener)listener).exitNonArrayMemberDefinition(this);
		}
	}
	public static class ConstDimArrayMemberDefinitionContext extends MemberDefinitionContext {
		public TypeDescriptionContext typeDescription() {
			return getRuleContext(TypeDescriptionContext.class,0);
		}
		public TerminalNode IDENTIFIER() { return getToken(DdsJsIdlParser.IDENTIFIER, 0); }
		public TerminalNode OPEN_SQUARE() { return getToken(DdsJsIdlParser.OPEN_SQUARE, 0); }
		public ScopedNameContext scopedName() {
			return getRuleContext(ScopedNameContext.class,0);
		}
		public TerminalNode CLOSE_SQUARE() { return getToken(DdsJsIdlParser.CLOSE_SQUARE, 0); }
		public TerminalNode STAT_END() { return getToken(DdsJsIdlParser.STAT_END, 0); }
		public ConstDimArrayMemberDefinitionContext(MemberDefinitionContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof DdsJsIdlListener ) ((DdsJsIdlListener)listener).enterConstDimArrayMemberDefinition(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof DdsJsIdlListener ) ((DdsJsIdlListener)listener).exitConstDimArrayMemberDefinition(this);
		}
	}

	public final MemberDefinitionContext memberDefinition() throws RecognitionException {
		MemberDefinitionContext _localctx = new MemberDefinitionContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_memberDefinition);
		try {
			setState(201);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,16,_ctx) ) {
			case 1:
				_localctx = new NonArrayMemberDefinitionContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(183);
				typeDescription();
				setState(184);
				match(IDENTIFIER);
				setState(185);
				match(STAT_END);
				}
				break;
			case 2:
				_localctx = new ArrayMemberDefinitionContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(187);
				typeDescription();
				setState(188);
				match(IDENTIFIER);
				setState(189);
				match(OPEN_SQUARE);
				setState(190);
				match(DECIMAL_VALUE);
				setState(191);
				match(CLOSE_SQUARE);
				setState(192);
				match(STAT_END);
				}
				break;
			case 3:
				_localctx = new ConstDimArrayMemberDefinitionContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(194);
				typeDescription();
				setState(195);
				match(IDENTIFIER);
				setState(196);
				match(OPEN_SQUARE);
				setState(197);
				scopedName();
				setState(198);
				match(CLOSE_SQUARE);
				setState(199);
				match(STAT_END);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class UnionDefinitionContext extends ParserRuleContext {
		public TerminalNode UNION_KW() { return getToken(DdsJsIdlParser.UNION_KW, 0); }
		public TerminalNode IDENTIFIER() { return getToken(DdsJsIdlParser.IDENTIFIER, 0); }
		public TerminalNode SWITCH_KW() { return getToken(DdsJsIdlParser.SWITCH_KW, 0); }
		public TypeDescriptionContext typeDescription() {
			return getRuleContext(TypeDescriptionContext.class,0);
		}
		public TerminalNode OPEN_BRACE() { return getToken(DdsJsIdlParser.OPEN_BRACE, 0); }
		public TerminalNode CLOSE_BRACE() { return getToken(DdsJsIdlParser.CLOSE_BRACE, 0); }
		public TerminalNode STAT_END() { return getToken(DdsJsIdlParser.STAT_END, 0); }
		public List<UnionCaseDefinitionContext> unionCaseDefinition() {
			return getRuleContexts(UnionCaseDefinitionContext.class);
		}
		public UnionCaseDefinitionContext unionCaseDefinition(int i) {
			return getRuleContext(UnionCaseDefinitionContext.class,i);
		}
		public UnionDefinitionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_unionDefinition; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof DdsJsIdlListener ) ((DdsJsIdlListener)listener).enterUnionDefinition(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof DdsJsIdlListener ) ((DdsJsIdlListener)listener).exitUnionDefinition(this);
		}
	}

	public final UnionDefinitionContext unionDefinition() throws RecognitionException {
		UnionDefinitionContext _localctx = new UnionDefinitionContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_unionDefinition);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(203);
			match(UNION_KW);
			setState(204);
			match(IDENTIFIER);
			setState(205);
			match(SWITCH_KW);
			setState(206);
			match(T__0);
			setState(207);
			typeDescription();
			setState(208);
			match(T__1);
			setState(209);
			match(OPEN_BRACE);
			setState(211); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(210);
				unionCaseDefinition();
				}
				}
				setState(213); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==CASE_KW );
			setState(215);
			match(CLOSE_BRACE);
			setState(216);
			match(STAT_END);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class UnionCaseDefinitionContext extends ParserRuleContext {
		public TerminalNode CASE_KW() { return getToken(DdsJsIdlParser.CASE_KW, 0); }
		public TerminalNode IDENTIFIER() { return getToken(DdsJsIdlParser.IDENTIFIER, 0); }
		public TerminalNode COLON_SEP() { return getToken(DdsJsIdlParser.COLON_SEP, 0); }
		public MemberDefinitionContext memberDefinition() {
			return getRuleContext(MemberDefinitionContext.class,0);
		}
		public UnionCaseDefinitionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_unionCaseDefinition; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof DdsJsIdlListener ) ((DdsJsIdlListener)listener).enterUnionCaseDefinition(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof DdsJsIdlListener ) ((DdsJsIdlListener)listener).exitUnionCaseDefinition(this);
		}
	}

	public final UnionCaseDefinitionContext unionCaseDefinition() throws RecognitionException {
		UnionCaseDefinitionContext _localctx = new UnionCaseDefinitionContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_unionCaseDefinition);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(218);
			match(CASE_KW);
			setState(219);
			match(IDENTIFIER);
			setState(220);
			match(COLON_SEP);
			setState(221);
			memberDefinition();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SequenceTypeDescriptionContext extends ParserRuleContext {
		public TerminalNode SEQUENCE_KW() { return getToken(DdsJsIdlParser.SEQUENCE_KW, 0); }
		public TerminalNode OPEN_ANGLE() { return getToken(DdsJsIdlParser.OPEN_ANGLE, 0); }
		public TypeDescriptionContext typeDescription() {
			return getRuleContext(TypeDescriptionContext.class,0);
		}
		public TerminalNode CLOSE_ANGLE() { return getToken(DdsJsIdlParser.CLOSE_ANGLE, 0); }
		public TerminalNode COMMA_SEP() { return getToken(DdsJsIdlParser.COMMA_SEP, 0); }
		public SizeDefinitionContext sizeDefinition() {
			return getRuleContext(SizeDefinitionContext.class,0);
		}
		public SequenceTypeDescriptionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_sequenceTypeDescription; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof DdsJsIdlListener ) ((DdsJsIdlListener)listener).enterSequenceTypeDescription(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof DdsJsIdlListener ) ((DdsJsIdlListener)listener).exitSequenceTypeDescription(this);
		}
	}

	public final SequenceTypeDescriptionContext sequenceTypeDescription() throws RecognitionException {
		SequenceTypeDescriptionContext _localctx = new SequenceTypeDescriptionContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_sequenceTypeDescription);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(223);
			match(SEQUENCE_KW);
			setState(224);
			match(OPEN_ANGLE);
			setState(225);
			typeDescription();
			setState(228);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==COMMA_SEP) {
				{
				setState(226);
				match(COMMA_SEP);
				setState(227);
				sizeDefinition();
				}
			}

			setState(230);
			match(CLOSE_ANGLE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StringTypeDescriptionContext extends ParserRuleContext {
		public TerminalNode STRING_KW() { return getToken(DdsJsIdlParser.STRING_KW, 0); }
		public TerminalNode OPEN_ANGLE() { return getToken(DdsJsIdlParser.OPEN_ANGLE, 0); }
		public SizeDefinitionContext sizeDefinition() {
			return getRuleContext(SizeDefinitionContext.class,0);
		}
		public TerminalNode CLOSE_ANGLE() { return getToken(DdsJsIdlParser.CLOSE_ANGLE, 0); }
		public StringTypeDescriptionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_stringTypeDescription; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof DdsJsIdlListener ) ((DdsJsIdlListener)listener).enterStringTypeDescription(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof DdsJsIdlListener ) ((DdsJsIdlListener)listener).exitStringTypeDescription(this);
		}
	}

	public final StringTypeDescriptionContext stringTypeDescription() throws RecognitionException {
		StringTypeDescriptionContext _localctx = new StringTypeDescriptionContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_stringTypeDescription);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(232);
			match(STRING_KW);
			setState(237);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==OPEN_ANGLE) {
				{
				setState(233);
				match(OPEN_ANGLE);
				setState(234);
				sizeDefinition();
				setState(235);
				match(CLOSE_ANGLE);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SizeDefinitionContext extends ParserRuleContext {
		public SizeDefinitionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_sizeDefinition; }
	 
		public SizeDefinitionContext() { }
		public void copyFrom(SizeDefinitionContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class SizeAsConstantDefinitionContext extends SizeDefinitionContext {
		public ScopedNameContext scopedName() {
			return getRuleContext(ScopedNameContext.class,0);
		}
		public SizeAsConstantDefinitionContext(SizeDefinitionContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof DdsJsIdlListener ) ((DdsJsIdlListener)listener).enterSizeAsConstantDefinition(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof DdsJsIdlListener ) ((DdsJsIdlListener)listener).exitSizeAsConstantDefinition(this);
		}
	}
	public static class SizeAsLiteralValueContext extends SizeDefinitionContext {
		public TerminalNode DECIMAL_VALUE() { return getToken(DdsJsIdlParser.DECIMAL_VALUE, 0); }
		public SizeAsLiteralValueContext(SizeDefinitionContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof DdsJsIdlListener ) ((DdsJsIdlListener)listener).enterSizeAsLiteralValue(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof DdsJsIdlListener ) ((DdsJsIdlListener)listener).exitSizeAsLiteralValue(this);
		}
	}

	public final SizeDefinitionContext sizeDefinition() throws RecognitionException {
		SizeDefinitionContext _localctx = new SizeDefinitionContext(_ctx, getState());
		enterRule(_localctx, 40, RULE_sizeDefinition);
		try {
			setState(241);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case SCOPE_OP:
			case IDENTIFIER:
				_localctx = new SizeAsConstantDefinitionContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(239);
				scopedName();
				}
				break;
			case DECIMAL_VALUE:
				_localctx = new SizeAsLiteralValueContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(240);
				match(DECIMAL_VALUE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PrimitiveTypeDescriptionContext extends ParserRuleContext {
		public IntTypeDescriptionContext intTypeDescription() {
			return getRuleContext(IntTypeDescriptionContext.class,0);
		}
		public FloatTypeDescriptionContext floatTypeDescription() {
			return getRuleContext(FloatTypeDescriptionContext.class,0);
		}
		public BooleanTypeDescriptionContext booleanTypeDescription() {
			return getRuleContext(BooleanTypeDescriptionContext.class,0);
		}
		public PrimitiveTypeDescriptionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_primitiveTypeDescription; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof DdsJsIdlListener ) ((DdsJsIdlListener)listener).enterPrimitiveTypeDescription(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof DdsJsIdlListener ) ((DdsJsIdlListener)listener).exitPrimitiveTypeDescription(this);
		}
	}

	public final PrimitiveTypeDescriptionContext primitiveTypeDescription() throws RecognitionException {
		PrimitiveTypeDescriptionContext _localctx = new PrimitiveTypeDescriptionContext(_ctx, getState());
		enterRule(_localctx, 42, RULE_primitiveTypeDescription);
		try {
			setState(246);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case OCTET_KW:
			case UNSIGNED_KW:
			case SHORT_KW:
			case LONG_KW:
				enterOuterAlt(_localctx, 1);
				{
				setState(243);
				intTypeDescription();
				}
				break;
			case FLOAT_KW:
			case DOUBLE_KW:
				enterOuterAlt(_localctx, 2);
				{
				setState(244);
				floatTypeDescription();
				}
				break;
			case BOOLEAN_KW:
				enterOuterAlt(_localctx, 3);
				{
				setState(245);
				booleanTypeDescription();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IntTypeDescriptionContext extends ParserRuleContext {
		public TerminalNode OCTET_KW() { return getToken(DdsJsIdlParser.OCTET_KW, 0); }
		public TerminalNode SHORT_KW() { return getToken(DdsJsIdlParser.SHORT_KW, 0); }
		public TerminalNode LONG_KW() { return getToken(DdsJsIdlParser.LONG_KW, 0); }
		public TerminalNode UNSIGNED_KW() { return getToken(DdsJsIdlParser.UNSIGNED_KW, 0); }
		public IntTypeDescriptionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_intTypeDescription; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof DdsJsIdlListener ) ((DdsJsIdlListener)listener).enterIntTypeDescription(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof DdsJsIdlListener ) ((DdsJsIdlListener)listener).exitIntTypeDescription(this);
		}
	}

	public final IntTypeDescriptionContext intTypeDescription() throws RecognitionException {
		IntTypeDescriptionContext _localctx = new IntTypeDescriptionContext(_ctx, getState());
		enterRule(_localctx, 44, RULE_intTypeDescription);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(253);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case OCTET_KW:
				{
				setState(248);
				match(OCTET_KW);
				}
				break;
			case UNSIGNED_KW:
			case SHORT_KW:
			case LONG_KW:
				{
				setState(250);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==UNSIGNED_KW) {
					{
					setState(249);
					match(UNSIGNED_KW);
					}
				}

				setState(252);
				_la = _input.LA(1);
				if ( !(_la==SHORT_KW || _la==LONG_KW) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FloatTypeDescriptionContext extends ParserRuleContext {
		public TerminalNode FLOAT_KW() { return getToken(DdsJsIdlParser.FLOAT_KW, 0); }
		public TerminalNode DOUBLE_KW() { return getToken(DdsJsIdlParser.DOUBLE_KW, 0); }
		public FloatTypeDescriptionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_floatTypeDescription; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof DdsJsIdlListener ) ((DdsJsIdlListener)listener).enterFloatTypeDescription(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof DdsJsIdlListener ) ((DdsJsIdlListener)listener).exitFloatTypeDescription(this);
		}
	}

	public final FloatTypeDescriptionContext floatTypeDescription() throws RecognitionException {
		FloatTypeDescriptionContext _localctx = new FloatTypeDescriptionContext(_ctx, getState());
		enterRule(_localctx, 46, RULE_floatTypeDescription);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(255);
			_la = _input.LA(1);
			if ( !(_la==FLOAT_KW || _la==DOUBLE_KW) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class BooleanTypeDescriptionContext extends ParserRuleContext {
		public TerminalNode BOOLEAN_KW() { return getToken(DdsJsIdlParser.BOOLEAN_KW, 0); }
		public BooleanTypeDescriptionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_booleanTypeDescription; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof DdsJsIdlListener ) ((DdsJsIdlListener)listener).enterBooleanTypeDescription(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof DdsJsIdlListener ) ((DdsJsIdlListener)listener).exitBooleanTypeDescription(this);
		}
	}

	public final BooleanTypeDescriptionContext booleanTypeDescription() throws RecognitionException {
		BooleanTypeDescriptionContext _localctx = new BooleanTypeDescriptionContext(_ctx, getState());
		enterRule(_localctx, 48, RULE_booleanTypeDescription);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(257);
			match(BOOLEAN_KW);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IntegerValueContext extends ParserRuleContext {
		public TerminalNode DECIMAL_VALUE() { return getToken(DdsJsIdlParser.DECIMAL_VALUE, 0); }
		public TerminalNode HEXADECIMAL_VALUE() { return getToken(DdsJsIdlParser.HEXADECIMAL_VALUE, 0); }
		public TerminalNode OCTAL_VALUE() { return getToken(DdsJsIdlParser.OCTAL_VALUE, 0); }
		public TerminalNode BINARY_VALUE() { return getToken(DdsJsIdlParser.BINARY_VALUE, 0); }
		public IntegerValueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_integerValue; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof DdsJsIdlListener ) ((DdsJsIdlListener)listener).enterIntegerValue(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof DdsJsIdlListener ) ((DdsJsIdlListener)listener).exitIntegerValue(this);
		}
	}

	public final IntegerValueContext integerValue() throws RecognitionException {
		IntegerValueContext _localctx = new IntegerValueContext(_ctx, getState());
		enterRule(_localctx, 50, RULE_integerValue);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(259);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << DECIMAL_VALUE) | (1L << HEXADECIMAL_VALUE) | (1L << OCTAL_VALUE) | (1L << BINARY_VALUE))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3.\u0108\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\3\2\6\28\n\2\r\2\16\29\3\3\3\3\5\3>\n\3\3\4\3\4\3"+
		"\4\3\4\7\4D\n\4\f\4\16\4G\13\4\3\4\3\4\5\4K\n\4\3\5\3\5\3\5\3\5\3\5\3"+
		"\5\5\5S\n\5\3\6\3\6\3\6\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3"+
		"\7\3\7\5\7e\n\7\3\b\3\b\3\b\3\b\5\bk\n\b\3\t\3\t\3\t\7\tp\n\t\f\t\16\t"+
		"s\13\t\3\t\3\t\3\t\3\t\5\ty\n\t\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\13\3\13"+
		"\3\13\3\13\5\13\u0086\n\13\3\f\3\f\3\f\3\f\3\f\3\f\7\f\u008e\n\f\f\f\16"+
		"\f\u0091\13\f\3\f\3\f\3\f\3\r\3\r\3\r\3\r\5\r\u009a\n\r\3\16\3\16\5\16"+
		"\u009e\n\16\3\17\3\17\3\17\3\17\6\17\u00a4\n\17\r\17\16\17\u00a5\3\17"+
		"\3\17\3\17\3\20\3\20\3\20\3\20\5\20\u00af\n\20\3\20\3\20\6\20\u00b3\n"+
		"\20\r\20\16\20\u00b4\3\20\3\20\3\20\3\21\3\21\3\21\3\21\3\21\3\21\3\21"+
		"\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\5\21\u00cc\n\21"+
		"\3\22\3\22\3\22\3\22\3\22\3\22\3\22\3\22\6\22\u00d6\n\22\r\22\16\22\u00d7"+
		"\3\22\3\22\3\22\3\23\3\23\3\23\3\23\3\23\3\24\3\24\3\24\3\24\3\24\5\24"+
		"\u00e7\n\24\3\24\3\24\3\25\3\25\3\25\3\25\3\25\5\25\u00f0\n\25\3\26\3"+
		"\26\5\26\u00f4\n\26\3\27\3\27\3\27\5\27\u00f9\n\27\3\30\3\30\5\30\u00fd"+
		"\n\30\3\30\5\30\u0100\n\30\3\31\3\31\3\32\3\32\3\33\3\33\3\33\2\2\34\2"+
		"\4\6\b\n\f\16\20\22\24\26\30\32\34\36 \"$&(*,.\60\62\64\2\5\3\2\27\30"+
		"\3\2\31\32\3\2$\'\2\u010f\2\67\3\2\2\2\4=\3\2\2\2\6?\3\2\2\2\bR\3\2\2"+
		"\2\nT\3\2\2\2\fd\3\2\2\2\16j\3\2\2\2\20x\3\2\2\2\22z\3\2\2\2\24\u0085"+
		"\3\2\2\2\26\u0087\3\2\2\2\30\u0099\3\2\2\2\32\u009d\3\2\2\2\34\u009f\3"+
		"\2\2\2\36\u00aa\3\2\2\2 \u00cb\3\2\2\2\"\u00cd\3\2\2\2$\u00dc\3\2\2\2"+
		"&\u00e1\3\2\2\2(\u00ea\3\2\2\2*\u00f3\3\2\2\2,\u00f8\3\2\2\2.\u00ff\3"+
		"\2\2\2\60\u0101\3\2\2\2\62\u0103\3\2\2\2\64\u0105\3\2\2\2\668\5\4\3\2"+
		"\67\66\3\2\2\289\3\2\2\29\67\3\2\2\29:\3\2\2\2:\3\3\2\2\2;>\5\n\6\2<>"+
		"\5\6\4\2=;\3\2\2\2=<\3\2\2\2>\5\3\2\2\2?@\7\21\2\2@A\7#\2\2AE\7\5\2\2"+
		"BD\5\b\5\2CB\3\2\2\2DG\3\2\2\2EC\3\2\2\2EF\3\2\2\2FH\3\2\2\2GE\3\2\2\2"+
		"HJ\7\7\2\2IK\7\b\2\2JI\3\2\2\2JK\3\2\2\2K\7\3\2\2\2LS\5\32\16\2MS\5\f"+
		"\7\2NS\5\22\n\2OS\5\26\f\2PS\5\"\22\2QS\5\6\4\2RL\3\2\2\2RM\3\2\2\2RN"+
		"\3\2\2\2RO\3\2\2\2RP\3\2\2\2RQ\3\2\2\2S\t\3\2\2\2TU\7\20\2\2UV\7+\2\2"+
		"V\13\3\2\2\2WX\7\22\2\2XY\5\16\b\2YZ\7#\2\2Z[\7\b\2\2[e\3\2\2\2\\]\7\22"+
		"\2\2]^\5\16\b\2^_\7#\2\2_`\7\13\2\2`a\7$\2\2ab\7\f\2\2bc\7\b\2\2ce\3\2"+
		"\2\2dW\3\2\2\2d\\\3\2\2\2e\r\3\2\2\2fk\5&\24\2gk\5(\25\2hk\5,\27\2ik\5"+
		"\20\t\2jf\3\2\2\2jg\3\2\2\2jh\3\2\2\2ji\3\2\2\2k\17\3\2\2\2lq\7#\2\2m"+
		"n\7\16\2\2np\7#\2\2om\3\2\2\2ps\3\2\2\2qo\3\2\2\2qr\3\2\2\2ry\3\2\2\2"+
		"sq\3\2\2\2tu\7\16\2\2uv\7#\2\2vw\7\16\2\2wy\5\20\t\2xl\3\2\2\2xt\3\2\2"+
		"\2y\21\3\2\2\2z{\7\23\2\2{|\5\16\b\2|}\7#\2\2}~\7\6\2\2~\177\5\24\13\2"+
		"\177\u0080\7\b\2\2\u0080\23\3\2\2\2\u0081\u0086\5\64\33\2\u0082\u0086"+
		"\7(\2\2\u0083\u0086\7)\2\2\u0084\u0086\7*\2\2\u0085\u0081\3\2\2\2\u0085"+
		"\u0082\3\2\2\2\u0085\u0083\3\2\2\2\u0085\u0084\3\2\2\2\u0086\25\3\2\2"+
		"\2\u0087\u0088\7\24\2\2\u0088\u0089\7#\2\2\u0089\u008a\7\5\2\2\u008a\u008f"+
		"\5\30\r\2\u008b\u008c\7\r\2\2\u008c\u008e\5\30\r\2\u008d\u008b\3\2\2\2"+
		"\u008e\u0091\3\2\2\2\u008f\u008d\3\2\2\2\u008f\u0090\3\2\2\2\u0090\u0092"+
		"\3\2\2\2\u0091\u008f\3\2\2\2\u0092\u0093\7\7\2\2\u0093\u0094\7\b\2\2\u0094"+
		"\27\3\2\2\2\u0095\u0096\7#\2\2\u0096\u0097\7\6\2\2\u0097\u009a\5\64\33"+
		"\2\u0098\u009a\7#\2\2\u0099\u0095\3\2\2\2\u0099\u0098\3\2\2\2\u009a\31"+
		"\3\2\2\2\u009b\u009e\5\34\17\2\u009c\u009e\5\36\20\2\u009d\u009b\3\2\2"+
		"\2\u009d\u009c\3\2\2\2\u009e\33\3\2\2\2\u009f\u00a0\7\35\2\2\u00a0\u00a1"+
		"\7#\2\2\u00a1\u00a3\7\5\2\2\u00a2\u00a4\5 \21\2\u00a3\u00a2\3\2\2\2\u00a4"+
		"\u00a5\3\2\2\2\u00a5\u00a3\3\2\2\2\u00a5\u00a6\3\2\2\2\u00a6\u00a7\3\2"+
		"\2\2\u00a7\u00a8\7\7\2\2\u00a8\u00a9\7\b\2\2\u00a9\35\3\2\2\2\u00aa\u00ab"+
		"\7\36\2\2\u00ab\u00ae\7#\2\2\u00ac\u00ad\7\17\2\2\u00ad\u00af\5\20\t\2"+
		"\u00ae\u00ac\3\2\2\2\u00ae\u00af\3\2\2\2\u00af\u00b0\3\2\2\2\u00b0\u00b2"+
		"\7\5\2\2\u00b1\u00b3\5 \21\2\u00b2\u00b1\3\2\2\2\u00b3\u00b4\3\2\2\2\u00b4"+
		"\u00b2\3\2\2\2\u00b4\u00b5\3\2\2\2\u00b5\u00b6\3\2\2\2\u00b6\u00b7\7\7"+
		"\2\2\u00b7\u00b8\7\b\2\2\u00b8\37\3\2\2\2\u00b9\u00ba\5\16\b\2\u00ba\u00bb"+
		"\7#\2\2\u00bb\u00bc\7\b\2\2\u00bc\u00cc\3\2\2\2\u00bd\u00be\5\16\b\2\u00be"+
		"\u00bf\7#\2\2\u00bf\u00c0\7\13\2\2\u00c0\u00c1\7$\2\2\u00c1\u00c2\7\f"+
		"\2\2\u00c2\u00c3\7\b\2\2\u00c3\u00cc\3\2\2\2\u00c4\u00c5\5\16\b\2\u00c5"+
		"\u00c6\7#\2\2\u00c6\u00c7\7\13\2\2\u00c7\u00c8\5\20\t\2\u00c8\u00c9\7"+
		"\f\2\2\u00c9\u00ca\7\b\2\2\u00ca\u00cc\3\2\2\2\u00cb\u00b9\3\2\2\2\u00cb"+
		"\u00bd\3\2\2\2\u00cb\u00c4\3\2\2\2\u00cc!\3\2\2\2\u00cd\u00ce\7\37\2\2"+
		"\u00ce\u00cf\7#\2\2\u00cf\u00d0\7 \2\2\u00d0\u00d1\7\3\2\2\u00d1\u00d2"+
		"\5\16\b\2\u00d2\u00d3\7\4\2\2\u00d3\u00d5\7\5\2\2\u00d4\u00d6\5$\23\2"+
		"\u00d5\u00d4\3\2\2\2\u00d6\u00d7\3\2\2\2\u00d7\u00d5\3\2\2\2\u00d7\u00d8"+
		"\3\2\2\2\u00d8\u00d9\3\2\2\2\u00d9\u00da\7\7\2\2\u00da\u00db\7\b\2\2\u00db"+
		"#\3\2\2\2\u00dc\u00dd\7!\2\2\u00dd\u00de\7#\2\2\u00de\u00df\7\17\2\2\u00df"+
		"\u00e0\5 \21\2\u00e0%\3\2\2\2\u00e1\u00e2\7\34\2\2\u00e2\u00e3\7\t\2\2"+
		"\u00e3\u00e6\5\16\b\2\u00e4\u00e5\7\r\2\2\u00e5\u00e7\5*\26\2\u00e6\u00e4"+
		"\3\2\2\2\u00e6\u00e7\3\2\2\2\u00e7\u00e8\3\2\2\2\u00e8\u00e9\7\n\2\2\u00e9"+
		"\'\3\2\2\2\u00ea\u00ef\7\33\2\2\u00eb\u00ec\7\t\2\2\u00ec\u00ed\5*\26"+
		"\2\u00ed\u00ee\7\n\2\2\u00ee\u00f0\3\2\2\2\u00ef\u00eb\3\2\2\2\u00ef\u00f0"+
		"\3\2\2\2\u00f0)\3\2\2\2\u00f1\u00f4\5\20\t\2\u00f2\u00f4\7$\2\2\u00f3"+
		"\u00f1\3\2\2\2\u00f3\u00f2\3\2\2\2\u00f4+\3\2\2\2\u00f5\u00f9\5.\30\2"+
		"\u00f6\u00f9\5\60\31\2\u00f7\u00f9\5\62\32\2\u00f8\u00f5\3\2\2\2\u00f8"+
		"\u00f6\3\2\2\2\u00f8\u00f7\3\2\2\2\u00f9-\3\2\2\2\u00fa\u0100\7\25\2\2"+
		"\u00fb\u00fd\7\26\2\2\u00fc\u00fb\3\2\2\2\u00fc\u00fd\3\2\2\2\u00fd\u00fe"+
		"\3\2\2\2\u00fe\u0100\t\2\2\2\u00ff\u00fa\3\2\2\2\u00ff\u00fc\3\2\2\2\u0100"+
		"/\3\2\2\2\u0101\u0102\t\3\2\2\u0102\61\3\2\2\2\u0103\u0104\7\"\2\2\u0104"+
		"\63\3\2\2\2\u0105\u0106\t\4\2\2\u0106\65\3\2\2\2\329=EJRdjqx\u0085\u008f"+
		"\u0099\u009d\u00a5\u00ae\u00b4\u00cb\u00d7\u00e6\u00ef\u00f3\u00f8\u00fc"+
		"\u00ff";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}