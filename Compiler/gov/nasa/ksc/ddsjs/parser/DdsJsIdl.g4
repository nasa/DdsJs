/*
 * DdsJsIdl.g4 - Grammar definition for compiling DDS-compatible IDL files.
 * Date: 2014-08-08
 * Author: Rolando J. Nieves
 */

grammar DdsJsIdl;

translationUnit: unitContents+
               ;

unitContents: compilerDirective 
            | module
            ;

module: MODULE_KW IDENTIFIER '{' moduleMember* '}' ';'?
      ;

moduleMember: topicDefinition
            | typeAlias
            | constantDefinition
            | enumDefinition
            | unionDefinition
            | module
            ;

compilerDirective: '#include' INCLUDE_FILESPEC        # includeCompilerDirective
                 ;

typeAlias: TYPEDEF_KW typeDescription IDENTIFIER ';'   # nonArrayTypedef
         | TYPEDEF_KW typeDescription IDENTIFIER '[' DECIMAL_VALUE ']' ';'  # arrayTypedef
         ;

typeDescription: sequenceTypeDescription               # sequenceTypedef
               | stringTypeDescription                 # stringTypedef
               | primitiveTypeDescription              # primitiveTypedef
               | scopedName                            # customTypeDescription
               ;

scopedName: IDENTIFIER ('::' IDENTIFIER)*          # relativeScopedName
          | '::' IDENTIFIER '::' scopedName    # absoluteScopedName
          ;

constantDefinition: CONST_KW typeDescription IDENTIFIER '=' constantValue ';'
                  ;

constantValue: integerValue
             | FLOAT_VALUE
             | STRING_VALUE
             | BOOLEAN_VALUE
             ;

enumDefinition: ENUM_KW IDENTIFIER '{' enumLiteral (',' enumLiteral)* '}' ';'
              ;

enumLiteral: IDENTIFIER '=' integerValue				# manualNumbered
           | IDENTIFIER									# autoNumbered
           ;

topicDefinition: dataStructureDefinition
               | valuetypeDefinition
               ;

dataStructureDefinition: STRUCT_KW IDENTIFIER '{' memberDefinition+ '}' ';'
                       ;

valuetypeDefinition: VALUETYPE_KW IDENTIFIER (':' scopedName)? '{' memberDefinition+ '}' ';'
                ;

memberDefinition: typeDescription IDENTIFIER ';'        # nonArrayMemberDefinition
                | typeDescription IDENTIFIER '[' DECIMAL_VALUE ']' ';'   # arrayMemberDefinition
                | typeDescription IDENTIFIER '[' scopedName ']' ';' # constDimArrayMemberDefinition
                ;

unionDefinition: UNION_KW IDENTIFIER SWITCH_KW '(' typeDescription ')' '{' unionCaseDefinition+ '}' ';'
               ;

unionCaseDefinition: CASE_KW IDENTIFIER ':' memberDefinition
                   ;

sequenceTypeDescription: SEQUENCE_KW '<' typeDescription (',' sizeDefinition)? '>'
                       ;

stringTypeDescription: STRING_KW ('<' sizeDefinition '>')?
                     ;

sizeDefinition: scopedName                       # sizeAsConstantDefinition
              | DECIMAL_VALUE                    # sizeAsLiteralValue
              ;

primitiveTypeDescription: intTypeDescription
                        | floatTypeDescription
                        | booleanTypeDescription
                        ;

intTypeDescription: (OCTET_KW | (UNSIGNED_KW)? (SHORT_KW | LONG_KW))
                  ;

floatTypeDescription: (FLOAT_KW | DOUBLE_KW)
                    ;

booleanTypeDescription: BOOLEAN_KW
                      ;

integerValue: DECIMAL_VALUE
            | HEXADECIMAL_VALUE
            | OCTAL_VALUE
            | BINARY_VALUE
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

// Keywords
INCLUDE_CD: '#include';
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

IDENTIFIER: [a-zA-Z]([a-zA-Z0-9_]*)?;
DECIMAL_VALUE: ('0' | ('-'?[1-9][0-9]*)) ('u')?;
HEXADECIMAL_VALUE: '0x' [0-9a-fA-F]+;
OCTAL_VALUE: '0' ([0-7])+;
BINARY_VALUE: 'b' [0-1]+;
FLOAT_VALUE: [0-9]+ '.' [0-9]+ (('e' | 'E')[0-9]+)?;
STRING_VALUE: '"' (ESC_QUOTE|~('\r'|'\n'))* '"';
BOOLEAN_VALUE: ('true' | 'false');
INCLUDE_FILESPEC: ['"''<'] ~(['\t''\r''\n'])+? ['"' '>'] '\n';
SL_COMMENT: '//' .*? ('\r')?'\n' -> skip;
ML_COMMENT: '/*' .*? '*/' -> skip ;
WS: [ \t\r\n]+ -> skip;
fragment ESC_QUOTE: '\\"' ;
