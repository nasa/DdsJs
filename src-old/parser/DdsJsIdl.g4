/*
 * DdsJsIdl.g4 - Grammar definition for compiling DDS-compatible IDL files.
 * Date: 2014-08-08
 * Author: Rolando J. Nieves
 */

grammar DdsJsIdl;

@header {
// @ts-nocheck
}

translationUnit : module+
                ;

module  : MODULE_KW IDENTIFIER OPEN_BRACE moduleMember* CLOSE_BRACE STAT_END?
        ;

moduleMember: dataStructureDefinition # dataStructureModuleMember
            | typeAlias               # typeAliasModuleMember
            | constantDefinition      # constantModuleMember
            | enumDefinition          # enumModuleMember
            | unionDefinition         # unionModuleMember
            | module                  # submoduleModuleMember
            ;

typeAlias   : TYPEDEF_KW typeDescription IDENTIFIER STAT_END   # nonArrayTypedef
            | TYPEDEF_KW typeDescription IDENTIFIER arrayDimensions STAT_END  # arrayTypedef
            ;

typeDescription : sequenceType  # sequenceTypeDesc
                | stringType    # stringTypeDesc
                | primitiveType # primitiveTypeDesc
                | scopedName    # customTypeNameDesc
                ;

scopedName  : IDENTIFIER (SCOPE_OP IDENTIFIER)*          # relativeScopedName
            | SCOPE_OP IDENTIFIER SCOPE_OP scopedName    # absoluteScopedName
            ;

constantDefinition  : CONST_KW primitiveType IDENTIFIER ASSIGN_OP literalValue STAT_END  # primitiveValueConstant
                    | CONST_KW stringType IDENTIFIER ASSIGN_OP literalValue STAT_END     # stringValueConstant
                    | CONST_KW scopedName IDENTIFIER ASSIGN_OP literalValue STAT_END     # customTypeValueConstant
                    ;

enumDefinition  : ENUM_KW IDENTIFIER OPEN_BRACE enumLiteral (COMMA_SEP enumLiteral)* CLOSE_BRACE STAT_END
                ;

enumLiteral : IDENTIFIER ASSIGN_OP integerLiteral		# manualNumbered
            | IDENTIFIER								# autoNumbered
            ;

dataStructureDefinition : STRUCT_KW IDENTIFIER OPEN_BRACE memberDefinition+ CLOSE_BRACE STAT_END
                        ;

memberDefinition: typeDescription IDENTIFIER STAT_END        # nonArrayMemberDefinition
                | typeDescription IDENTIFIER arrayDimensions STAT_END   # arrayMemberDefinition
                ;

unionDefinition : UNION_KW IDENTIFIER SWITCH_KW OPEN_PAREN unionDiscriminator CLOSE_PAREN OPEN_BRACE unionMemberDefinition+ CLOSE_BRACE STAT_END
                ;

unionDiscriminator  : intType      # intUnionDiscriminator
                    | booleanType  # booleanUnionDiscriminator
                    | charType     # charUnionDiscriminator
                    | scopedName   # customTypeUnionDiscriminator
                    ;

unionMemberDefinition   : unionCaseLabel+ memberDefinition      # specificUnionMemberDefinition
                        | DEFAULT_KW COLON_SEP memberDefinition # defaultUnionMemberDefinition
                        ;

unionCaseLabel  : CASE_KW unionCaseConstantExpr COLON_SEP
                ;

unionCaseConstantExpr   : IDENTIFIER          # unionIdentifierConstantExpr
                        | integerLiteral      # unionIntegerConstantExpr
                        | booleanLiteral      # unionBooleanConstantExpr
                        | charLiteral         # unionCharConstantExpr
                        ;

sequenceType    : SEQUENCE_KW OPEN_ANGLE typeDescription CLOSE_ANGLE  # unboundedSequenceType
                | SEQUENCE_KW OPEN_ANGLE typeDescription COMMA_SEP sizeDefinition CLOSE_ANGLE # boundedSequenceType 
                       ;

stringType  : STRING_KW       # unboundedStringType
            | STRING_KW OPEN_ANGLE sizeDefinition CLOSE_ANGLE # boundedStringType
            ;

arrayDimensions : (OPEN_SQUARE sizeDefinition CLOSE_SQUARE)+
                ;

sizeDefinition  : scopedName                       # sizeAsConstantDefinition
                | NATURAL_NUMBER                   # sizeAsLiteralValue
                ;

primitiveType   : intType      # intPrimitiveType
                | floatType    # floatPrimitiveType
                | booleanType  # booleanPrimitiveType
                | charType     # charPrimitiveType
                ;

intType : OCTET_KW              # octetIntType
        | LONG_KW               # longIntType
        | LONG_KW LONG_KW       # longLongIntType
        | SHORT_KW              # shortIntType
        | UNSIGNED_KW LONG_KW   # unsignedLongIntType
        | UNSIGNED_KW LONG_KW LONG_KW # unsignedLongLongIntType
        | UNSIGNED_KW SHORT_KW  # unsignedShortIntType
        ;

floatType   : FLOAT_KW     # singlePrecisionFloatType
            | DOUBLE_KW    # doublePrecisionFloatType
            ;

booleanType : BOOLEAN_KW
            ;

charType: CHAR_KW
        ;

literalValue: integerLiteral        # intLiteralValue
            | charLiteral           # charLiteralValue
            | stringLiteral         # stringLiteralValue
            | floatingPointLiteral  # floatLiteralValue
            | fixedPointLiteral     # realLiteralValue
            | booleanLiteral        # booleanLiteralValue
            ;

charLiteral : CHAR_LITERAL
            ;

stringLiteral   : STRING_LITERAL
                ;

booleanLiteral  : BOOLEAN_TRUE   # booleanTrueLiteral
                | BOOLEAN_FALSE  # booleanFalseLiteral
                ;

integerLiteral  : signedInteger        # signedIntegerLiteral
                | OCTAL_LITERAL        # octalIntegerLiteral
                | HEXADECIMAL_LITERAL  # hexIntegerLiteral
                ;

signedInteger   : NATURAL_NUMBER           # positiveInteger
                | MINUS_OP NATURAL_NUMBER  # negativeInteger
                ;

floatingPointLiteral: signedInteger FLOAT_EXP_PREFIX signedInteger  # floatIntExponent
                    | signedInteger DOT_OP DIGIT_SEQUENCE FLOAT_EXP_PREFIX signedInteger # floatIntFracExponent
                    | DOT_OP DIGIT_SEQUENCE FLOAT_EXP_PREFIX signedInteger  # floatFracExponent
                    | DOT_OP DIGIT_SEQUENCE # floatFracOnly
                    ;

fixedPointLiteral   : signedInteger DOT_OP DIGIT_SEQUENCE FIXED_PT_SUFFIX  # fixedPtIntFrac
                    | signedInteger FIXED_PT_SUFFIX # fixedPtIntOnly
                    | DOT_OP DIGIT_SEQUENCE FIXED_PT_SUFFIX  # fixedPtFracOnly
                    ;

// Operators
OPEN_BRACE: '{';
ASSIGN_OP: '=';
CLOSE_BRACE: '}';
STAT_END: ';';
OPEN_ANGLE: '<';
CLOSE_ANGLE: '>';
OPEN_SQUARE: '[';
CLOSE_SQUARE: ']';
COMMA_SEP: ',';
SCOPE_OP: '::';
COLON_SEP: ':';
OPEN_PAREN: '(';
CLOSE_PAREN: ')';
MINUS_OP: '-';
DOT_OP: '.';

// Keywords
MODULE_KW: 'module';
TYPEDEF_KW: 'typedef';
CONST_KW: 'const';
ENUM_KW: 'enum';
OCTET_KW: 'octet';
UNSIGNED_KW: 'unsigned';
SHORT_KW: 'short';
LONG_KW: 'long';
FLOAT_KW: 'float';
DOUBLE_KW: 'double';
STRING_KW: 'string';
SEQUENCE_KW: 'sequence';
STRUCT_KW: 'struct';
VALUETYPE_KW: 'valuetype';
UNION_KW: 'union';
SWITCH_KW: 'switch';
CASE_KW: 'case';
BOOLEAN_KW: 'boolean';
CHAR_KW: 'char';
BOOLEAN_TRUE: 'TRUE';
BOOLEAN_FALSE: 'FALSE';
DEFAULT_KW: 'default';

IDENTIFIER: [a-zA-Z]([a-zA-Z0-9_]*)?;
NATURAL_NUMBER: NATURAL_DIGIT NUMERIC_DIGIT*;
HEXADECIMAL_LITERAL: '0x' [0-9a-fA-F]+;
OCTAL_LITERAL: '0' ([0-7])*;
DIGIT_SEQUENCE: NUMERIC_DIGIT+;
REAL_NUMBER: [0-9]+ '.' [0-9]+ (('e' | 'E')[0-9]+)?;
STRING_LITERAL: '"' CHAR_SINGLE*? '"';
CHAR_LITERAL: '\'' CHAR_SINGLE '\'';
FLOAT_EXP_PREFIX: [eE];
FIXED_PT_SUFFIX: [dD];
WS: ([ \t\r\n])+ -> skip;
SL_COMMENT: '//' .*? ('\r')?'\n' -> skip;
ML_COMMENT: '/*' .*? '*/' -> skip;
fragment ESC_CHAR: '\\[abfnrtv\\?\'"]'
                 | ESC_OCTAL
                 | ESC_HEX
                 | ESC_UNICODE
                 ;
fragment ESC_OCTAL: '\\' OCTAL_CHAR_VAL;
fragment OCTAL_CHAR_VAL: OCTAL_DIGIT
                   | OCTAL_DIGIT OCTAL_DIGIT
                   | OCTAL_DIGIT OCTAL_DIGIT OCTAL_DIGIT
                   ;
fragment OCTAL_DIGIT: [0-7];
fragment ESC_HEX: '\\0x' HEX_CHAR_VAL;
fragment HEX_CHAR_VAL: HEX_DIGIT
                     | HEX_DIGIT HEX_DIGIT
                     ;
fragment ESC_UNICODE: '\\u' UNICODE_CHAR_VAL;
fragment UNICODE_CHAR_VAL: HEX_DIGIT
                         | HEX_DIGIT HEX_DIGIT
                         | HEX_DIGIT HEX_DIGIT HEX_DIGIT
                         | HEX_DIGIT HEX_DIGIT HEX_DIGIT HEX_DIGIT
                         ;
fragment NUMERIC_DIGIT: [0-9];
fragment NATURAL_DIGIT: [1-9];
fragment HEX_DIGIT: [0-9a-fA-F];
fragment CHAR_SINGLE: (ESC_CHAR|~('\r'|'\n'|'\b'|'\f'));
