(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[95],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/razor/razor.js":
/*!**************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/razor/razor.js ***!
  \**************************************************************************/
/*! exports provided: conf, language */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"conf\", function() { return conf; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"language\", function() { return language; });\n/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\n\n// Allow for running under nodejs/requirejs in tests\nvar _monaco = (typeof monaco === 'undefined' ? self.monaco : monaco);\nvar EMPTY_ELEMENTS = ['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'keygen', 'link', 'menuitem', 'meta', 'param', 'source', 'track', 'wbr'];\nvar conf = {\n    wordPattern: /(-?\\d*\\.\\d\\w*)|([^\\`\\~\\!\\@\\$\\^\\&\\*\\(\\)\\-\\=\\+\\[\\{\\]\\}\\\\\\|\\;\\:\\'\\\"\\,\\.\\<\\>\\/\\s]+)/g,\n    comments: {\n        blockComment: ['<!--', '-->']\n    },\n    brackets: [\n        ['<!--', '-->'],\n        ['<', '>'],\n        ['{', '}'],\n        ['(', ')']\n    ],\n    autoClosingPairs: [\n        { open: '{', close: '}' },\n        { open: '[', close: ']' },\n        { open: '(', close: ')' },\n        { open: '\"', close: '\"' },\n        { open: '\\'', close: '\\'' }\n    ],\n    surroundingPairs: [\n        { open: '\"', close: '\"' },\n        { open: '\\'', close: '\\'' },\n        { open: '<', close: '>' }\n    ],\n    onEnterRules: [\n        {\n            beforeText: new RegExp(\"<(?!(?:\" + EMPTY_ELEMENTS.join('|') + \"))(\\\\w[\\\\w\\\\d]*)([^/>]*(?!/)>)[^<]*$\", 'i'),\n            afterText: /^<\\/(\\w[\\w\\d]*)\\s*>$/i,\n            action: { indentAction: _monaco.languages.IndentAction.IndentOutdent }\n        },\n        {\n            beforeText: new RegExp(\"<(?!(?:\" + EMPTY_ELEMENTS.join('|') + \"))(\\\\w[\\\\w\\\\d]*)([^/>]*(?!/)>)[^<]*$\", 'i'),\n            action: { indentAction: _monaco.languages.IndentAction.Indent }\n        }\n    ],\n};\nvar language = {\n    defaultToken: '',\n    tokenPostfix: '',\n    // ignoreCase: true,\n    // The main tokenizer for our languages\n    tokenizer: {\n        root: [\n            [/@@/],\n            [/@[^@]/, { token: '@rematch', switchTo: '@razorInSimpleState.root' }],\n            [/<!DOCTYPE/, 'metatag.html', '@doctype'],\n            [/<!--/, 'comment.html', '@comment'],\n            [/(<)(\\w+)(\\/>)/, ['delimiter.html', 'tag.html', 'delimiter.html']],\n            [/(<)(script)/, ['delimiter.html', { token: 'tag.html', next: '@script' }]],\n            [/(<)(style)/, ['delimiter.html', { token: 'tag.html', next: '@style' }]],\n            [/(<)([:\\w]+)/, ['delimiter.html', { token: 'tag.html', next: '@otherTag' }]],\n            [/(<\\/)(\\w+)/, ['delimiter.html', { token: 'tag.html', next: '@otherTag' }]],\n            [/</, 'delimiter.html'],\n            [/[ \\t\\r\\n]+/],\n            [/[^<@]+/],\n        ],\n        doctype: [\n            [/@[^@]/, { token: '@rematch', switchTo: '@razorInSimpleState.comment' }],\n            [/[^>]+/, 'metatag.content.html'],\n            [/>/, 'metatag.html', '@pop'],\n        ],\n        comment: [\n            [/@[^@]/, { token: '@rematch', switchTo: '@razorInSimpleState.comment' }],\n            [/-->/, 'comment.html', '@pop'],\n            [/[^-]+/, 'comment.content.html'],\n            [/./, 'comment.content.html']\n        ],\n        otherTag: [\n            [/@[^@]/, { token: '@rematch', switchTo: '@razorInSimpleState.otherTag' }],\n            [/\\/?>/, 'delimiter.html', '@pop'],\n            [/\"([^\"]*)\"/, 'attribute.value'],\n            [/'([^']*)'/, 'attribute.value'],\n            [/[\\w\\-]+/, 'attribute.name'],\n            [/=/, 'delimiter'],\n            [/[ \\t\\r\\n]+/],\n        ],\n        // -- BEGIN <script> tags handling\n        // After <script\n        script: [\n            [/@[^@]/, { token: '@rematch', switchTo: '@razorInSimpleState.script' }],\n            [/type/, 'attribute.name', '@scriptAfterType'],\n            [/\"([^\"]*)\"/, 'attribute.value'],\n            [/'([^']*)'/, 'attribute.value'],\n            [/[\\w\\-]+/, 'attribute.name'],\n            [/=/, 'delimiter'],\n            [/>/, { token: 'delimiter.html', next: '@scriptEmbedded.text/javascript', nextEmbedded: 'text/javascript' }],\n            [/[ \\t\\r\\n]+/],\n            [/(<\\/)(script\\s*)(>)/, ['delimiter.html', 'tag.html', { token: 'delimiter.html', next: '@pop' }]]\n        ],\n        // After <script ... type\n        scriptAfterType: [\n            [/@[^@]/, { token: '@rematch', switchTo: '@razorInSimpleState.scriptAfterType' }],\n            [/=/, 'delimiter', '@scriptAfterTypeEquals'],\n            [/>/, { token: 'delimiter.html', next: '@scriptEmbedded.text/javascript', nextEmbedded: 'text/javascript' }],\n            [/[ \\t\\r\\n]+/],\n            [/<\\/script\\s*>/, { token: '@rematch', next: '@pop' }]\n        ],\n        // After <script ... type =\n        scriptAfterTypeEquals: [\n            [/@[^@]/, { token: '@rematch', switchTo: '@razorInSimpleState.scriptAfterTypeEquals' }],\n            [/\"([^\"]*)\"/, { token: 'attribute.value', switchTo: '@scriptWithCustomType.$1' }],\n            [/'([^']*)'/, { token: 'attribute.value', switchTo: '@scriptWithCustomType.$1' }],\n            [/>/, { token: 'delimiter.html', next: '@scriptEmbedded.text/javascript', nextEmbedded: 'text/javascript' }],\n            [/[ \\t\\r\\n]+/],\n            [/<\\/script\\s*>/, { token: '@rematch', next: '@pop' }]\n        ],\n        // After <script ... type = $S2\n        scriptWithCustomType: [\n            [/@[^@]/, { token: '@rematch', switchTo: '@razorInSimpleState.scriptWithCustomType.$S2' }],\n            [/>/, { token: 'delimiter.html', next: '@scriptEmbedded.$S2', nextEmbedded: '$S2' }],\n            [/\"([^\"]*)\"/, 'attribute.value'],\n            [/'([^']*)'/, 'attribute.value'],\n            [/[\\w\\-]+/, 'attribute.name'],\n            [/=/, 'delimiter'],\n            [/[ \\t\\r\\n]+/],\n            [/<\\/script\\s*>/, { token: '@rematch', next: '@pop' }]\n        ],\n        scriptEmbedded: [\n            [/@[^@]/, { token: '@rematch', switchTo: '@razorInEmbeddedState.scriptEmbedded.$S2', nextEmbedded: '@pop' }],\n            [/<\\/script/, { token: '@rematch', next: '@pop', nextEmbedded: '@pop' }]\n        ],\n        // -- END <script> tags handling\n        // -- BEGIN <style> tags handling\n        // After <style\n        style: [\n            [/@[^@]/, { token: '@rematch', switchTo: '@razorInSimpleState.style' }],\n            [/type/, 'attribute.name', '@styleAfterType'],\n            [/\"([^\"]*)\"/, 'attribute.value'],\n            [/'([^']*)'/, 'attribute.value'],\n            [/[\\w\\-]+/, 'attribute.name'],\n            [/=/, 'delimiter'],\n            [/>/, { token: 'delimiter.html', next: '@styleEmbedded.text/css', nextEmbedded: 'text/css' }],\n            [/[ \\t\\r\\n]+/],\n            [/(<\\/)(style\\s*)(>)/, ['delimiter.html', 'tag.html', { token: 'delimiter.html', next: '@pop' }]]\n        ],\n        // After <style ... type\n        styleAfterType: [\n            [/@[^@]/, { token: '@rematch', switchTo: '@razorInSimpleState.styleAfterType' }],\n            [/=/, 'delimiter', '@styleAfterTypeEquals'],\n            [/>/, { token: 'delimiter.html', next: '@styleEmbedded.text/css', nextEmbedded: 'text/css' }],\n            [/[ \\t\\r\\n]+/],\n            [/<\\/style\\s*>/, { token: '@rematch', next: '@pop' }]\n        ],\n        // After <style ... type =\n        styleAfterTypeEquals: [\n            [/@[^@]/, { token: '@rematch', switchTo: '@razorInSimpleState.styleAfterTypeEquals' }],\n            [/\"([^\"]*)\"/, { token: 'attribute.value', switchTo: '@styleWithCustomType.$1' }],\n            [/'([^']*)'/, { token: 'attribute.value', switchTo: '@styleWithCustomType.$1' }],\n            [/>/, { token: 'delimiter.html', next: '@styleEmbedded.text/css', nextEmbedded: 'text/css' }],\n            [/[ \\t\\r\\n]+/],\n            [/<\\/style\\s*>/, { token: '@rematch', next: '@pop' }]\n        ],\n        // After <style ... type = $S2\n        styleWithCustomType: [\n            [/@[^@]/, { token: '@rematch', switchTo: '@razorInSimpleState.styleWithCustomType.$S2' }],\n            [/>/, { token: 'delimiter.html', next: '@styleEmbedded.$S2', nextEmbedded: '$S2' }],\n            [/\"([^\"]*)\"/, 'attribute.value'],\n            [/'([^']*)'/, 'attribute.value'],\n            [/[\\w\\-]+/, 'attribute.name'],\n            [/=/, 'delimiter'],\n            [/[ \\t\\r\\n]+/],\n            [/<\\/style\\s*>/, { token: '@rematch', next: '@pop' }]\n        ],\n        styleEmbedded: [\n            [/@[^@]/, { token: '@rematch', switchTo: '@razorInEmbeddedState.styleEmbedded.$S2', nextEmbedded: '@pop' }],\n            [/<\\/style/, { token: '@rematch', next: '@pop', nextEmbedded: '@pop' }]\n        ],\n        // -- END <style> tags handling\n        razorInSimpleState: [\n            [/@\\*/, 'comment.cs', '@razorBlockCommentTopLevel'],\n            [/@[{(]/, 'metatag.cs', '@razorRootTopLevel'],\n            [/(@)(\\s*[\\w]+)/, ['metatag.cs', { token: 'identifier.cs', switchTo: '@$S2.$S3' }]],\n            [/[})]/, { token: 'metatag.cs', switchTo: '@$S2.$S3' }],\n            [/\\*@/, { token: 'comment.cs', switchTo: '@$S2.$S3' }],\n        ],\n        razorInEmbeddedState: [\n            [/@\\*/, 'comment.cs', '@razorBlockCommentTopLevel'],\n            [/@[{(]/, 'metatag.cs', '@razorRootTopLevel'],\n            [/(@)(\\s*[\\w]+)/, ['metatag.cs', { token: 'identifier.cs', switchTo: '@$S2.$S3', nextEmbedded: '$S3' }]],\n            [/[})]/, { token: 'metatag.cs', switchTo: '@$S2.$S3', nextEmbedded: '$S3' }],\n            [/\\*@/, { token: 'comment.cs', switchTo: '@$S2.$S3', nextEmbedded: '$S3' }],\n        ],\n        razorBlockCommentTopLevel: [\n            [/\\*@/, '@rematch', '@pop'],\n            [/[^*]+/, 'comment.cs'],\n            [/./, 'comment.cs']\n        ],\n        razorBlockComment: [\n            [/\\*@/, 'comment.cs', '@pop'],\n            [/[^*]+/, 'comment.cs'],\n            [/./, 'comment.cs']\n        ],\n        razorRootTopLevel: [\n            [/\\{/, 'delimiter.bracket.cs', '@razorRoot'],\n            [/\\(/, 'delimiter.parenthesis.cs', '@razorRoot'],\n            [/[})]/, '@rematch', '@pop'],\n            { include: 'razorCommon' }\n        ],\n        razorRoot: [\n            [/\\{/, 'delimiter.bracket.cs', '@razorRoot'],\n            [/\\(/, 'delimiter.parenthesis.cs', '@razorRoot'],\n            [/\\}/, 'delimiter.bracket.cs', '@pop'],\n            [/\\)/, 'delimiter.parenthesis.cs', '@pop'],\n            { include: 'razorCommon' }\n        ],\n        razorCommon: [\n            [/[a-zA-Z_]\\w*/, {\n                    cases: {\n                        '@razorKeywords': { token: 'keyword.cs' },\n                        '@default': 'identifier.cs'\n                    }\n                }],\n            // brackets\n            [/[\\[\\]]/, 'delimiter.array.cs'],\n            // whitespace\n            [/[ \\t\\r\\n]+/],\n            // comments\n            [/\\/\\/.*$/, 'comment.cs'],\n            [/@\\*/, 'comment.cs', '@razorBlockComment'],\n            // strings\n            [/\"([^\"]*)\"/, 'string.cs'],\n            [/'([^']*)'/, 'string.cs'],\n            // simple html\n            [/(<)(\\w+)(\\/>)/, ['delimiter.html', 'tag.html', 'delimiter.html']],\n            [/(<)(\\w+)(>)/, ['delimiter.html', 'tag.html', 'delimiter.html']],\n            [/(<\\/)(\\w+)(>)/, ['delimiter.html', 'tag.html', 'delimiter.html']],\n            // delimiters\n            [/[\\+\\-\\*\\%\\&\\|\\^\\~\\!\\=\\<\\>\\/\\?\\;\\:\\.\\,]/, 'delimiter.cs'],\n            // numbers\n            [/\\d*\\d+[eE]([\\-+]?\\d+)?/, 'number.float.cs'],\n            [/\\d*\\.\\d+([eE][\\-+]?\\d+)?/, 'number.float.cs'],\n            [/0[xX][0-9a-fA-F']*[0-9a-fA-F]/, 'number.hex.cs'],\n            [/0[0-7']*[0-7]/, 'number.octal.cs'],\n            [/0[bB][0-1']*[0-1]/, 'number.binary.cs'],\n            [/\\d[\\d']*/, 'number.cs'],\n            [/\\d/, 'number.cs'],\n        ]\n    },\n    razorKeywords: [\n        'abstract', 'as', 'async', 'await', 'base', 'bool',\n        'break', 'by', 'byte', 'case',\n        'catch', 'char', 'checked', 'class',\n        'const', 'continue', 'decimal', 'default',\n        'delegate', 'do', 'double', 'descending',\n        'explicit', 'event', 'extern', 'else',\n        'enum', 'false', 'finally', 'fixed',\n        'float', 'for', 'foreach', 'from',\n        'goto', 'group', 'if', 'implicit',\n        'in', 'int', 'interface', 'internal',\n        'into', 'is', 'lock', 'long', 'nameof',\n        'new', 'null', 'namespace', 'object',\n        'operator', 'out', 'override', 'orderby',\n        'params', 'private', 'protected', 'public',\n        'readonly', 'ref', 'return', 'switch',\n        'struct', 'sbyte', 'sealed', 'short',\n        'sizeof', 'stackalloc', 'static', 'string',\n        'select', 'this', 'throw', 'true',\n        'try', 'typeof', 'uint', 'ulong',\n        'unchecked', 'unsafe', 'ushort', 'using',\n        'var', 'virtual', 'volatile', 'void', 'when',\n        'while', 'where', 'yield',\n        'model', 'inject' // Razor specific\n    ],\n    escapes: /\\\\(?:[abfnrtv\\\\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,\n};\n\n\n//# sourceURL=webpack:///./node_modules/monaco-editor/esm/vs/basic-languages/razor/razor.js?");

/***/ })

}]);