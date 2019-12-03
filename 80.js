(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[80],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/mips/mips.js":
/*!************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/mips/mips.js ***!
  \************************************************************************/
/*! exports provided: conf, language */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"conf\", function() { return conf; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"language\", function() { return language; });\n/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\n\nvar conf = {\n    wordPattern: /(-?\\d*\\.\\d\\w*)|([^\\`\\~\\!\\@\\#%\\^\\&\\*\\(\\)\\=\\$\\-\\+\\[\\{\\]\\}\\\\\\|\\;\\:\\'\\\"\\,\\.\\<\\>\\/\\?\\s]+)/g,\n    comments: {\n        blockComment: ['###', '###'],\n        lineComment: '#'\n    },\n    folding: {\n        markers: {\n            start: new RegExp(\"^\\\\s*#region\\\\b\"),\n            end: new RegExp(\"^\\\\s*#endregion\\\\b\")\n        }\n    }\n};\nvar language = {\n    defaultToken: '',\n    ignoreCase: false,\n    tokenPostfix: '.mips',\n    regEx: /\\/(?!\\/\\/)(?:[^\\/\\\\]|\\\\.)*\\/[igm]*/,\n    keywords: [\n        '.data', '.text', 'syscall', 'trap',\n        'add', 'addu', 'addi', 'addiu', 'and', 'andi',\n        'div', 'divu', 'mult', 'multu', 'nor', 'or', 'ori',\n        'sll', 'slv', 'sra', 'srav', 'srl', 'srlv',\n        'sub', 'subu', 'xor', 'xori', 'lhi', 'lho',\n        'lhi', 'llo', 'slt', 'slti', 'sltu', 'sltiu',\n        'beq', 'bgtz', 'blez', 'bne', 'j', 'jal', 'jalr', 'jr',\n        'lb', 'lbu', 'lh', 'lhu', 'lw', 'li', 'la',\n        'sb', 'sh', 'sw', 'mfhi', 'mflo', 'mthi', 'mtlo', 'move',\n    ],\n    // we include these common regular expressions\n    symbols: /[\\.,\\:]+/,\n    escapes: /\\\\(?:[abfnrtv\\\\\"'$]|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,\n    // The main tokenizer for our languages\n    tokenizer: {\n        root: [\n            // identifiers and keywords\n            [/\\$[a-zA-Z_]\\w*/, 'variable.predefined'],\n            [/[.a-zA-Z_]\\w*/, {\n                    cases: {\n                        'this': 'variable.predefined',\n                        '@keywords': { token: 'keyword.$0' },\n                        '@default': ''\n                    }\n                }],\n            // whitespace\n            [/[ \\t\\r\\n]+/, ''],\n            // Comments\n            [/#.*$/, 'comment'],\n            // regular expressions\n            ['///', { token: 'regexp', next: '@hereregexp' }],\n            [/^(\\s*)(@regEx)/, ['', 'regexp']],\n            [/(\\,)(\\s*)(@regEx)/, ['delimiter', '', 'regexp']],\n            [/(\\:)(\\s*)(@regEx)/, ['delimiter', '', 'regexp']],\n            // delimiters\n            [/@symbols/, 'delimiter'],\n            // numbers\n            [/\\d+[eE]([\\-+]?\\d+)?/, 'number.float'],\n            [/\\d+\\.\\d+([eE][\\-+]?\\d+)?/, 'number.float'],\n            [/0[xX][0-9a-fA-F]+/, 'number.hex'],\n            [/0[0-7]+(?!\\d)/, 'number.octal'],\n            [/\\d+/, 'number'],\n            // delimiter: after number because of .\\d floats\n            [/[,.]/, 'delimiter'],\n            // strings:\n            [/\"\"\"/, 'string', '@herestring.\"\"\"'],\n            [/'''/, 'string', '@herestring.\\'\\'\\''],\n            [/\"/, {\n                    cases: {\n                        '@eos': 'string',\n                        '@default': { token: 'string', next: '@string.\"' }\n                    }\n                }],\n            [/'/, {\n                    cases: {\n                        '@eos': 'string',\n                        '@default': { token: 'string', next: '@string.\\'' }\n                    }\n                }],\n        ],\n        string: [\n            [/[^\"'\\#\\\\]+/, 'string'],\n            [/@escapes/, 'string.escape'],\n            [/\\./, 'string.escape.invalid'],\n            [/\\./, 'string.escape.invalid'],\n            [/#{/, {\n                    cases: {\n                        '$S2==\"': { token: 'string', next: 'root.interpolatedstring' },\n                        '@default': 'string'\n                    }\n                }],\n            [/[\"']/, {\n                    cases: {\n                        '$#==$S2': { token: 'string', next: '@pop' },\n                        '@default': 'string'\n                    }\n                }],\n            [/#/, 'string']\n        ],\n        herestring: [\n            [/(\"\"\"|''')/, {\n                    cases: {\n                        '$1==$S2': { token: 'string', next: '@pop' },\n                        '@default': 'string'\n                    }\n                }],\n            [/[^#\\\\'\"]+/, 'string'],\n            [/['\"]+/, 'string'],\n            [/@escapes/, 'string.escape'],\n            [/\\./, 'string.escape.invalid'],\n            [/#{/, { token: 'string.quote', next: 'root.interpolatedstring' }],\n            [/#/, 'string']\n        ],\n        comment: [\n            [/[^#]+/, 'comment',],\n            [/#/, 'comment'],\n        ],\n        hereregexp: [\n            [/[^\\\\\\/#]+/, 'regexp'],\n            [/\\\\./, 'regexp'],\n            [/#.*$/, 'comment'],\n            ['///[igm]*', { token: 'regexp', next: '@pop' }],\n            [/\\//, 'regexp'],\n        ],\n    },\n};\n\n\n//# sourceURL=webpack:///./node_modules/monaco-editor/esm/vs/basic-languages/mips/mips.js?");

/***/ })

}]);