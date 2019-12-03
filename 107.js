(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[107],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/st/st.js":
/*!********************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/st/st.js ***!
  \********************************************************************/
/*! exports provided: conf, language */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"conf\", function() { return conf; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"language\", function() { return language; });\n/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\n\nvar conf = {\n    comments: {\n        lineComment: '//',\n        blockComment: ['(*', '*)'],\n    },\n    brackets: [\n        ['{', '}'],\n        ['[', ']'],\n        ['(', ')'],\n        ['var', 'end_var'],\n        ['var_input', 'end_var'],\n        ['var_output', 'end_var'],\n        ['var_in_out', 'end_var'],\n        ['var_temp', 'end_var'],\n        ['var_global', 'end_var'],\n        ['var_access', 'end_var'],\n        ['var_external', 'end_var'],\n        ['type', 'end_type'],\n        ['struct', 'end_struct'],\n        ['program', 'end_program'],\n        ['function', 'end_function'],\n        ['function_block', 'end_function_block'],\n        ['action', 'end_action'],\n        ['step', 'end_step'],\n        ['initial_step', 'end_step'],\n        ['transaction', 'end_transaction'],\n        ['configuration', 'end_configuration'],\n        ['tcp', 'end_tcp'],\n        ['recource', 'end_recource'],\n        ['channel', 'end_channel'],\n        ['library', 'end_library'],\n        ['folder', 'end_folder'],\n        ['binaries', 'end_binaries'],\n        ['includes', 'end_includes'],\n        ['sources', 'end_sources']\n    ],\n    autoClosingPairs: [\n        { open: '[', close: ']' },\n        { open: '{', close: '}' },\n        { open: '(', close: ')' },\n        { open: '/*', close: '*/' },\n        { open: '\\'', close: '\\'', notIn: ['string_sq'] },\n        { open: '\"', close: '\"', notIn: ['string_dq'] },\n        { open: 'var', close: 'end_var' },\n        { open: 'var_input', close: 'end_var' },\n        { open: 'var_output', close: 'end_var' },\n        { open: 'var_in_out', close: 'end_var' },\n        { open: 'var_temp', close: 'end_var' },\n        { open: 'var_global', close: 'end_var' },\n        { open: 'var_access', close: 'end_var' },\n        { open: 'var_external', close: 'end_var' },\n        { open: 'type', close: 'end_type' },\n        { open: 'struct', close: 'end_struct' },\n        { open: 'program', close: 'end_program' },\n        { open: 'function', close: 'end_function' },\n        { open: 'function_block', close: 'end_function_block' },\n        { open: 'action', close: 'end_action' },\n        { open: 'step', close: 'end_step' },\n        { open: 'initial_step', close: 'end_step' },\n        { open: 'transaction', close: 'end_transaction' },\n        { open: 'configuration', close: 'end_configuration' },\n        { open: 'tcp', close: 'end_tcp' },\n        { open: 'recource', close: 'end_recource' },\n        { open: 'channel', close: 'end_channel' },\n        { open: 'library', close: 'end_library' },\n        { open: 'folder', close: 'end_folder' },\n        { open: 'binaries', close: 'end_binaries' },\n        { open: 'includes', close: 'end_includes' },\n        { open: 'sources', close: 'end_sources' }\n    ],\n    surroundingPairs: [\n        { open: '{', close: '}' },\n        { open: '[', close: ']' },\n        { open: '(', close: ')' },\n        { open: '\"', close: '\"' },\n        { open: '\\'', close: '\\'' },\n        { open: 'var', close: 'end_var' },\n        { open: 'var_input', close: 'end_var' },\n        { open: 'var_output', close: 'end_var' },\n        { open: 'var_in_out', close: 'end_var' },\n        { open: 'var_temp', close: 'end_var' },\n        { open: 'var_global', close: 'end_var' },\n        { open: 'var_access', close: 'end_var' },\n        { open: 'var_external', close: 'end_var' },\n        { open: 'type', close: 'end_type' },\n        { open: 'struct', close: 'end_struct' },\n        { open: 'program', close: 'end_program' },\n        { open: 'function', close: 'end_function' },\n        { open: 'function_block', close: 'end_function_block' },\n        { open: 'action', close: 'end_action' },\n        { open: 'step', close: 'end_step' },\n        { open: 'initial_step', close: 'end_step' },\n        { open: 'transaction', close: 'end_transaction' },\n        { open: 'configuration', close: 'end_configuration' },\n        { open: 'tcp', close: 'end_tcp' },\n        { open: 'recource', close: 'end_recource' },\n        { open: 'channel', close: 'end_channel' },\n        { open: 'library', close: 'end_library' },\n        { open: 'folder', close: 'end_folder' },\n        { open: 'binaries', close: 'end_binaries' },\n        { open: 'includes', close: 'end_includes' },\n        { open: 'sources', close: 'end_sources' }\n    ],\n    folding: {\n        markers: {\n            start: new RegExp(\"^\\\\s*#pragma\\\\s+region\\\\b\"),\n            end: new RegExp(\"^\\\\s*#pragma\\\\s+endregion\\\\b\")\n        }\n    }\n};\nvar language = {\n    defaultToken: '',\n    tokenPostfix: '.st',\n    ignoreCase: true,\n    brackets: [\n        { token: 'delimiter.curly', open: '{', close: '}' },\n        { token: 'delimiter.parenthesis', open: '(', close: ')' },\n        { token: 'delimiter.square', open: '[', close: ']' }\n    ],\n    keywords: ['if', 'end_if', 'elsif', 'else', 'case', 'of', 'to',\n        'do', 'with', 'by', 'while', 'repeat', 'end_while', 'end_repeat', 'end_case',\n        'for', 'end_for', 'task', 'retain', 'non_retain', 'constant', 'with', 'at',\n        'exit', 'return', 'interval', 'priority', 'address', 'port', 'on_channel',\n        'then', 'iec', 'file', 'uses', 'version', 'packagetype', 'displayname',\n        'copyright', 'summary', 'vendor', 'common_source', 'from'],\n    constant: ['false', 'true', 'null'],\n    defineKeywords: [\n        'var', 'var_input', 'var_output', 'var_in_out', 'var_temp', 'var_global',\n        'var_access', 'var_external', 'end_var',\n        'type', 'end_type', 'struct', 'end_struct', 'program', 'end_program',\n        'function', 'end_function', 'function_block', 'end_function_block',\n        'configuration', 'end_configuration', 'tcp', 'end_tcp', 'recource',\n        'end_recource', 'channel', 'end_channel', 'library', 'end_library',\n        'folder', 'end_folder', 'binaries', 'end_binaries', 'includes',\n        'end_includes', 'sources', 'end_sources',\n        'action', 'end_action', 'step', 'initial_step', 'end_step', 'transaction', 'end_transaction'\n    ],\n    typeKeywords: ['int', 'sint', 'dint', 'lint', 'usint', 'uint', 'udint', 'ulint',\n        'real', 'lreal', 'time', 'date', 'time_of_day', 'date_and_time', 'string',\n        'bool', 'byte', 'world', 'dworld', 'array', 'pointer', 'lworld'],\n    operators: ['=', '>', '<', ':', ':=', '<=', '>=', '<>', '&', '+', '-', '*', '**',\n        'MOD', '^', 'or', 'and', 'not', 'xor', 'abs', 'acos', 'asin', 'atan', 'cos',\n        'exp', 'expt', 'ln', 'log', 'sin', 'sqrt', 'tan', 'sel', 'max', 'min', 'limit',\n        'mux', 'shl', 'shr', 'rol', 'ror', 'indexof', 'sizeof', 'adr', 'adrinst',\n        'bitadr', 'is_valid'],\n    builtinVariables: [],\n    builtinFunctions: ['sr', 'rs', 'tp', 'ton', 'tof', 'eq', 'ge', 'le', 'lt',\n        'ne', 'round', 'trunc', 'ctd', 'сtu', 'ctud', 'r_trig', 'f_trig',\n        'move', 'concat', 'delete', 'find', 'insert', 'left', 'len', 'replace',\n        'right', 'rtc'],\n    // we include these common regular expressions\n    symbols: /[=><!~?:&|+\\-*\\/\\^%]+/,\n    // C# style strings\n    escapes: /\\\\(?:[abfnrtv\\\\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,\n    // The main tokenizer for our languages\n    tokenizer: {\n        root: [\n            [/(\\.\\.)/, 'delimiter'],\n            [/\\b(16#[0-9A-Fa-f\\_]*)+\\b/, 'number.hex'],\n            [/\\b(2#[01\\_]+)+\\b/, 'number.binary'],\n            [/\\b(8#[0-9\\_]*)+\\b/, 'number.octal'],\n            [/\\d*\\.\\d+([eE][\\-+]?\\d+)?/, 'number.float'],\n            [/\\b(L?REAL)#[0-9\\_\\.e]+\\b/, 'number.float'],\n            [/\\b(BYTE|(?:D|L)?WORD|U?(?:S|D|L)?INT)#[0-9\\_]+\\b/, 'number'],\n            [/\\d+/, 'number'],\n            [/\\b(T|DT|TOD)#[0-9:-_shmyd]+\\b/, 'tag'],\n            [/\\%(I|Q|M)(X|B|W|D|L)[0-9\\.]+/, 'tag'],\n            [/\\%(I|Q|M)[0-9\\.]*/, 'tag'],\n            [/\\b[A-Za-z]{1,6}#[0-9]+/, 'tag'],\n            [/\\b(TO_|CTU_|CTD_|CTUD_|MUX_|SEL_)[A_Za-z]+\\b/, 'predefined'],\n            [/\\b[A_Za-z]+(_TO_)[A_Za-z]+\\b/, 'predefined'],\n            [/[;]/, 'delimiter'],\n            [/[.]/, { token: 'delimiter', next: '@params' }],\n            // identifiers and keywords\n            [/[a-zA-Z_]\\w*/, {\n                    cases: {\n                        '@operators': 'operators',\n                        '@keywords': 'keyword',\n                        '@typeKeywords': 'type',\n                        '@defineKeywords': 'variable',\n                        '@constant': 'constant',\n                        '@builtinVariables': 'predefined',\n                        '@builtinFunctions': 'predefined',\n                        '@default': 'identifier'\n                    }\n                }],\n            { include: '@whitespace' },\n            [/[{}()\\[\\]]/, '@brackets'],\n            [/\"([^\"\\\\]|\\\\.)*$/, 'string.invalid'],\n            [/\"/, { token: 'string.quote', bracket: '@open', next: '@string_dq' }],\n            [/'/, { token: 'string.quote', bracket: '@open', next: '@string_sq' }],\n            [/'[^\\\\']'/, 'string'],\n            [/(')(@escapes)(')/, ['string', 'string.escape', 'string']],\n            [/'/, 'string.invalid']\n        ],\n        params: [\n            [/\\b[A-Za-z0-9_]+\\b(?=\\()/, { token: 'identifier', next: '@pop' }],\n            [/\\b[A-Za-z0-9_]+\\b/, 'variable.name', '@pop']\n        ],\n        comment: [\n            [/[^\\/*]+/, 'comment'],\n            [/\\/\\*/, 'comment', '@push'],\n            [\"\\\\*/\", 'comment', '@pop'],\n            [/[\\/*]/, 'comment']\n        ],\n        comment2: [\n            [/[^\\(*]+/, 'comment'],\n            [/\\(\\*/, 'comment', '@push'],\n            [\"\\\\*\\\\)\", 'comment', '@pop'],\n            [/[\\(*]/, 'comment']\n        ],\n        whitespace: [\n            [/[ \\t\\r\\n]+/, 'white'],\n            [/\\/\\/.*$/, 'comment'],\n            [/\\/\\*/, 'comment', '@comment'],\n            [/\\(\\*/, 'comment', '@comment2'],\n        ],\n        string_dq: [\n            [/[^\\\\\"]+/, 'string'],\n            [/@escapes/, 'string.escape'],\n            [/\\\\./, 'string.escape.invalid'],\n            [/\"/, { token: 'string.quote', bracket: '@close', next: '@pop' }]\n        ],\n        string_sq: [\n            [/[^\\\\']+/, 'string'],\n            [/@escapes/, 'string.escape'],\n            [/\\\\./, 'string.escape.invalid'],\n            [/'/, { token: 'string.quote', bracket: '@close', next: '@pop' }]\n        ]\n    }\n};\n\n\n//# sourceURL=webpack:///./node_modules/monaco-editor/esm/vs/basic-languages/st/st.js?");

/***/ })

}]);