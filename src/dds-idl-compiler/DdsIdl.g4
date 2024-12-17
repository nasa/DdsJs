/**
 * DDS IDL grammar.
 * Many portions copied from the IDL grammar published in the ANTLR GitHub
 * repository
 */

grammar DdsIdl;

specification
    : definition+ EOF
    ;

definition
    : annotationApplications module SEMICOLON
    | annotationApplications constantDeclaration SEMICOLON
    | annotationApplications typeDeclaration SEMICOLON
    | annotationApplications annotationDeclaration SEMICOLON
    ;

module
    : KW_MODULE identifier LEFT_BRACE definition+ RIGHT_BRACE
    ;

scopedName
    : identifier                        # singleScopedName
    | SCOPE_SEP identifier              # rootedScopedName
    | scopedName SCOPE_SEP identifier   # compoundScopedName
    ;

constantDeclaration
    : KW_CONST constantType identifier EQUALS constantExpression
    ;

constantType
    : annotationApplications integerType
    | annotationApplications floatingPointType
    | annotationApplications fixedPointConstantType
    | annotationApplications charType
    | annotationApplications wideCharType
    | annotationApplications booleanType
    | annotationApplications octetType
    | annotationApplications stringType
    | annotationApplications wideStringType
    | annotationApplications scopedName
    ;

constantExpression
    : orExpression
    ;

orExpression
    : xorExpression                        # orPassThrough
    | orExpression VERT_BAR xorExpression  # orOperation
    ;

xorExpression
    : andExpression                        # xorPassThrough
    | xorExpression CARET andExpression    # xorOperation
    ;

andExpression
    : shiftExpression                          # andPassThrough
    | andExpression AMPERSAND shiftExpression  # andOperation
    ;

shiftExpression
    : addExpression                              # shiftPassThrough
    | shiftExpression RIGHT_SHIFT addExpression  # shiftRightOperation
    | shiftExpression LEFT_SHIFT addExpression   # shiftLeftOperation
    ;

addExpression
    : multExpression                       # addPassThrough
    | addExpression PLUS multExpression    # addOperation
    | addExpression MINUS multExpression   # subtractOperation
    ;

multExpression
    : unaryExpression                               # multPassThrough
    | multExpression ASTERISK unaryExpression       # multiplyOperation
    | multExpression FORWARD_SLASH unaryExpression  # divideOperation
    | multExpression PERCENT unaryExpression        # moduloOperation
    ;

unaryExpression
    : unaryOperator primaryExpression      # unaryOperation
    | primaryExpression                    # unaryPassThrough
    ;

unaryOperator
    : MINUS
    | PLUS
    | TILDE
    ;

primaryExpression
    : scopedName
    | literal                                  
    | LEFT_PAREN constantExpression RIGHT_PAREN
    ;

literal
    : INTEGER_LITERAL
    | HEX_LITERAL
    | OCTAL_LITERAL
    | FLOATING_PT_LITERAL
    | CHARACTER_LITERAL
    | WIDE_CHARACTER_LITERAL
    | BOOLEAN_LITERAL
    | STRING_LITERAL
    | WIDE_STRING_LITERAL
    ;

positiveIntegerConstant
    : constantExpression
    ;
typeDeclaration
    : constructedTypeDeclaration
    | typeAliasDeclaration
    ;

typeSpecification
    : simpleTypeSpecification
    | templateTypeSpecification
    ;

simpleTypeSpecification
    : baseTypeSpecification
    | scopedName
    ;

baseTypeSpecification
    : integerType
    | floatingPointType
    | charType
    | wideCharType
    | booleanType
    | octetType
    ;

floatingPointType
    : KW_FLOAT             # singlePrecisionFloatingPointType
    | KW_DOUBLE            # doublePrecisionFloatingPointType
    | KW_LONG KW_DOUBLE    # quadPrecisionFloatingPointType
    ;

integerType
    : signedIntegerType
    | unsignedIntegerType
    ;

signedIntegerType
    : signedShortIntegerType
    | signedLongIntegerType
    | signedLongLongIntegerType
    | signedTinyIntegerType
    ;

signedShortIntegerType
    : KW_SHORT
    | KW_INT16
    ;

signedLongIntegerType
    : KW_LONG
    | KW_INT32
    ;

signedLongLongIntegerType
    : KW_LONG KW_LONG
    | KW_INT64
    ;

signedTinyIntegerType
    : KW_INT8
    ;

unsignedIntegerType
    : unsignedShortIntegerType
    | unsignedLongIntegerType
    | unsignedLongLongIntegerType
    | unsignedTinyIntegerType
    ;

unsignedShortIntegerType
    : KW_UNSIGNED KW_SHORT
    | KW_UINT16
    ;

unsignedLongIntegerType
    : KW_UNSIGNED KW_LONG
    | KW_UINT32
    ;

unsignedLongLongIntegerType
    : KW_UNSIGNED KW_LONG KW_LONG
    | KW_UINT64
    ;

unsignedTinyIntegerType
    : KW_UINT8
    ;

charType
    : KW_CHAR
    ;

wideCharType
    : KW_WCHAR
    ;

booleanType
    : KW_BOOLEAN
    ;

octetType
    : KW_OCTET
    ;

templateTypeSpecification
    : sequenceType
    | stringType
    | wideStringType
    | fixedPointType
    | mapType
    ;

sequenceType
    : KW_SEQUENCE LEFT_ANGLE annotationApplications typeSpecification COMMA positiveIntegerConstant RIGHT_ANGLE  # boundedSequenceType
    | KW_SEQUENCE LEFT_ANGLE annotationApplications typeSpecification RIGHT_ANGLE                                # unboundedSequenceType
    ;

stringType
    : KW_STRING LEFT_ANGLE positiveIntegerConstant RIGHT_ANGLE   # boundedStringType
    | KW_STRING                                                  # unboundedStringType
    ;

wideStringType
    : KW_WSTRING LEFT_ANGLE positiveIntegerConstant RIGHT_ANGLE  # boundedWideStringType
    | KW_WSTRING                                                 # unboundedWideStringType
    ;

fixedPointType
    : KW_FIXED LEFT_ANGLE positiveIntegerConstant COMMA positiveIntegerConstant RIGHT_ANGLE
    ;

fixedPointConstantType
    : KW_FIXED
    ;

constructedTypeDeclaration
    : structureDeclaration
    | unionDeclaration
    | enumDeclaration
    | bitsetDeclaration
    | bitmaskDeclaration
    ;

mapType
    : KW_MAP LEFT_ANGLE typeSpecification COMMA typeSpecification COMMA positiveIntegerConstant RIGHT_ANGLE   # boundedMapType
    | KW_MAP LEFT_ANGLE typeSpecification COMMA typeSpecification RIGHT_ANGLE                                 # unboundedMapType
    ;

bitsetDeclaration
    : KW_BITSET identifier COLON scopedName LEFT_BRACE bitfield* RIGHT_BRACE
    | KW_BITSET identifier LEFT_BRACE bitfield* RIGHT_BRACE
    ;

bitfield
    : bitfieldSpecifier identifier SEMICOLON
    ;

bitfieldSpecifier
    : annotationApplications KW_BITFIELD LEFT_ANGLE positiveIntegerConstant RIGHT_ANGLE
    | annotationApplications KW_BITFIELD LEFT_ANGLE positiveIntegerConstant COMMA bitfieldDestinationType RIGHT_ANGLE
    ;

bitfieldDestinationType
    : booleanType
    | octetType
    | integerType
    ;

bitmaskDeclaration
    : KW_BITMASK identifier bitValues
    ;

bitValues
    : bitValue (COMMA bitValue)*
    ;

bitValue
    : identifier
    ;

structureDeclaration
    : structureDefinition
    | structureForwardDeclaration
    ;

structureDefinition
    : KW_STRUCT identifier COLON scopedName LEFT_BRACE structMember* RIGHT_BRACE # derivedStructureDefinition
    | KW_STRUCT identifier LEFT_BRACE RIGHT_BRACE                                # emptyStructureDefinition
    | KW_STRUCT identifier LEFT_BRACE structMember+ RIGHT_BRACE                  # basicStructureDefinition
    ;

structMember
    : annotationApplications typeSpecification annotatableDeclarators SEMICOLON
    ;

structureForwardDeclaration
    : KW_STRUCT identifier
    ;

unionDeclaration
    : unionDefinition
    | unionForwardDeclaration
    ;

unionDefinition
    : KW_UNION identifier KW_SWITCH LEFT_PAREN annotationApplications switchTypeSpecification RIGHT_PAREN LEFT_BRACE switchBody RIGHT_BRACE
    ;

switchTypeSpecification
    : integerType
    | charType
    | booleanType
    | wideCharType
    | octetType
    | scopedName
    ;

switchBody
    : case+
    ;

case
    : caseCondition+ unionElementSpecification SEMICOLON
    ;

caseCondition
    : annotationApplications KW_CASE literal COLON     # literalValueCaseCondition
    | annotationApplications KW_CASE scopedName COLON  # constantDefCaseCondition
    | annotationApplications KW_DEFAULT COLON          # defaultCaseCondition
    ;

unionElementSpecification
    : annotationApplications typeSpecification annotatableDeclarator
    ;

unionForwardDeclaration
    : KW_UNION identifier
    ;

enumDeclaration
    : KW_ENUM identifier LEFT_BRACE enumerator (COMMA enumerator)* RIGHT_BRACE
    ;

enumerator
    : identifier
    ;

arrayDeclarator
    : identifier fixedArraySize+
    ;

fixedArraySize
    : LEFT_BRACKET positiveIntegerConstant RIGHT_BRACKET
    ;

simpleDeclarator
    : identifier
    ;

typeAliasDeclaration
    : KW_TYPEDEF annotationApplications typeDeclarator
    ;

typeDeclarator
    : typeDeclaratorType anyDeclarators
    ;

typeDeclaratorType
    : simpleTypeSpecification
    | templateTypeSpecification
    | constructedTypeDeclaration
    ;

anyDeclarators
    : anyDeclarator (COMMA anyDeclarator)*
    ;

anyDeclarator
    : simpleDeclarator
    | arrayDeclarator
    ;

annotatableDeclarators
    : annotatableDeclarator (COMMA annotatableDeclarator)*
    ;

annotatableDeclarator
    : annotationApplications simpleDeclarator
    | annotationApplications arrayDeclarator
    ;

annotationDeclaration
    : annotationHeader LEFT_BRACE annotationBody RIGHT_BRACE
    ;

annotationHeader
    : KW_ANNOTATION identifier
    ;

annotationBody
    : annotationBodyItem*
    ;

annotationBodyItem
    : annotationMember
    | enumDeclaration SEMICOLON
    | constantDeclaration SEMICOLON
    | typeAliasDeclaration SEMICOLON
    ;

annotationMember
    : annotationMemberType simpleDeclarator (KW_DEFAULT constantExpression)? SEMICOLON
    ;

annotationMemberType
    : constantType
    | scopedName
    ;

annotationApplications
    : annotationApplication*
    ;

annotationApplication
    : AT scopedName (LEFT_PAREN annotationApplicationParameters RIGHT_PAREN)?
    ;

annotationApplicationParameters
    : constantExpression                                                      # singleAnonymousAnnotationApplicationParameter
    | annotationApplicationParameter (COMMA annotationApplicationParameter)*  # multipleNamedAnnotationApplicationParameters
    ;

annotationApplicationParameter
    : identifier EQUALS constantExpression
    ;

identifier
    : annotationApplications ID
    ;

// --------------------------------------------------------------------------
// Keyword tokens

KW_ANNOTATION
    : '@annotation'
    ;

KW_BITFIELD
    : 'bitfield'
    ;

KW_BITMASK
    : 'bitmask'
    ;

KW_BITSET
    : 'bitset'
    ;

KW_BOOLEAN
    : 'boolean'
    ;

KW_CASE
    : 'case'
    ;

KW_CHAR
    : 'char'
    ;

KW_CONST
    : 'const'
    ;

KW_DEFAULT
    : 'default'
    ;

KW_DOUBLE
    : 'double'
    ;

KW_ENUM
    : 'enum'
    ;

KW_FIXED
    : 'fixed'
    ;

KW_FLOAT
    : 'float'
    ;

KW_INT16
    : 'int16'
    ;

KW_INT32
    : 'int32'
    ;

KW_INT64
    : 'int64'
    ;

KW_INT8
    : 'int8'
    ;

KW_LONG
    : 'long'
    ;

KW_MAP
    : 'map'
    ;

KW_MODULE
    : 'module'
    ;

KW_OCTET
    : 'octet'
    ;

KW_SEQUENCE
    : 'sequence'
    ;

KW_SHORT
    : 'short'
    ;

KW_STRING
    : 'string'
    ;

KW_STRUCT
    : 'struct'
    ;

KW_SWITCH
    : 'switch'
    ;

KW_TYPEDEF
    : 'typedef'
    ;

KW_UNION
    : 'union'
    ;

KW_UINT16
    : 'uint16'
    ;

KW_UINT32
    : 'uint32'
    ;

KW_UINT64
    : 'uint64'
    ;

KW_UINT8
    : 'uint8'
    ;

KW_UNSIGNED
    : 'unsigned'
    ;

KW_WCHAR
    : 'wchar'
    ;

KW_WSTRING
    : 'wstring'
    ;

// --------------------------------------------------------------------------
// Other tokens

ID
    : LETTER (LETTER | ID_DIGIT)*
    ;

SL_COMMENT
    : DOUBLE_SLASH .*? ('\r')?'\n' -> skip
    ;

ML_COMMENT
    : SLASH_STAR .*? STAR_SLASH -> skip
    ;

// --------------------------------------------------------------------------
// Numeric literals

FLOATING_PT_LITERAL
    : ('0' .. '9')+ '.' ('0' .. '9')* EXPONENT? FLOAT_TYPE_SUFFIX?
    | '.' ('0' .. '9')+ EXPONENT? FLOAT_TYPE_SUFFIX?
    | ('0' .. '9')+ EXPONENT FLOAT_TYPE_SUFFIX?
    | ('0' .. '9')+ EXPONENT? FLOAT_TYPE_SUFFIX
    ;

HEX_LITERAL
    : '0' ('x' | 'X') HEX_DIGIT+ INTEGER_TYPE_SUFFIX?
    ;

INTEGER_LITERAL
    : ('0' | '1' .. '9' '0' .. '9'*) INTEGER_TYPE_SUFFIX?
    ;

OCTAL_LITERAL
    : '0' ('0' .. '7')+ INTEGER_TYPE_SUFFIX?
    ;

fragment EXPONENT
    : ('e' | 'E') (PLUS | MINUS)? ('0' .. '9')+
    ;

fragment INTEGER_TYPE_SUFFIX
    : ('l' | 'L')
    ;

fragment FLOAT_TYPE_SUFFIX
    : ('f' | 'F' | 'd' | 'D')
    ;

// --------------------------------------------------------------------------
// Boolean literals

BOOLEAN_LITERAL
    : 'TRUE'
    | 'FALSE'
    ;

// --------------------------------------------------------------------------
// Character and string literals

WIDE_CHARACTER_LITERAL
    : 'L' CHARACTER_LITERAL
    ;

CHARACTER_LITERAL
    : '\'' (ESCAPE_SEQUENCE | ~ ('\'' | '\\')) '\''
    ;

WIDE_STRING_LITERAL
    : 'L' STRING_LITERAL
    ;

STRING_LITERAL
    : '"' (ESCAPE_SEQUENCE | ~ ('\\' | '"'))* '"'
    ;

fragment ESCAPE_SEQUENCE
    : '\\' ('b' | 't' | 'n' | 'f' | 'r' | '"' | '\'' | '\\')
    | UNICODE_ESCAPE
    | OCTAL_ESCAPE
    ;

fragment UNICODE_ESCAPE
    : '\\' 'u' HEX_DIGIT HEX_DIGIT HEX_DIGIT HEX_DIGIT
    ;

fragment OCTAL_ESCAPE
    : '\\' ('0' .. '3') ('0' .. '7') ('0' .. '7')
    | '\\' ('0' .. '7') ('0' .. '7')
    | '\\' ('0' .. '7')
    ;

// --------------------------------------------------------------------------
// Letter and digit literals

fragment LETTER
    : '\u0024'
    | '\u0041' .. '\u005a'
    | '\u005f'
    | '\u0061' .. '\u007a'
    | '\u00c0' .. '\u00d6'
    | '\u00d8' .. '\u00f6'
    | '\u00f8' .. '\u00ff'
    | '\u0100' .. '\u1fff'
    | '\u3040' .. '\u318f'
    | '\u3300' .. '\u337f'
    | '\u3400' .. '\u3d2d'
    | '\u4e00' .. '\u9fff'
    | '\uf900' .. '\ufaff'
    ;

fragment ID_DIGIT
    : '\u0030' .. '\u0039'
    | '\u0660' .. '\u0669'
    | '\u06f0' .. '\u06f9'
    | '\u0966' .. '\u096f'
    | '\u09e6' .. '\u09ef'
    | '\u0a66' .. '\u0a6f'
    | '\u0ae6' .. '\u0aef'
    | '\u0b66' .. '\u0b6f'
    | '\u0be7' .. '\u0bef'
    | '\u0c66' .. '\u0c6f'
    | '\u0ce6' .. '\u0cef'
    | '\u0d66' .. '\u0d6f'
    | '\u0e50' .. '\u0e59'
    | '\u0ed0' .. '\u0ed9'
    | '\u1040' .. '\u1049'
    ;

fragment HEX_DIGIT
    : ('0' .. '9' | 'a' .. 'f' | 'A' .. 'F')
    ;

// --------------------------------------------------------------------------
// Separators and operators

AMPERSAND
    : '&'
    ;

ASTERISK
    : '*'
    ;

AT
    : '@'
    ;

CARET
    : '^'
    ;

COLON
    : ':'
    ;

COMMA
    : ','
    ;

DOUBLE_SLASH
    : '//'
    ;

EQUALS
    : '='
    ;

FORWARD_SLASH
    : '/'
    ;

LEFT_ANGLE
    : '<'
    ;

LEFT_BRACE
    : '{'
    ;

LEFT_BRACKET
    : '['
    ;

LEFT_PAREN
    : '('
    ;

LEFT_SHIFT
    : '<<'
    ;

MINUS
    : '-'
    ;

PERCENT
    : '%'
    ;

PLUS
    : '+'
    ;

RIGHT_ANGLE
    : '>'
    ;

RIGHT_BRACE
    : '}'
    ;

RIGHT_BRACKET
    : ']'
    ;

RIGHT_PAREN
    : ')'
    ;

RIGHT_SHIFT
    : '>>'
    ;

SCOPE_SEP
    : '::'
    ;

SEMICOLON
    : ';'
    ;

SLASH_STAR
    : '/*'
    ;

STAR_SLASH
    : '*/'
    ;

TILDE
    : '~'
    ;

VERT_BAR
    : '|'
    ;

WS
    : ([ \t\r\n])+ -> skip
    ;

// vim: set ts=4 sw=4 expandtab:
